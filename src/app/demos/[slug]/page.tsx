import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';

const DEMOS_DIR = path.join(process.cwd(), 'public', 'demos');

function findDemoFile(slug: string): string | null {
  let files: string[];
  try {
    files = fs.readdirSync(DEMOS_DIR);
  } catch {
    return null;
  }

  const exact = [
    `demo-${slug}-flow.html`,
    `demo-${slug}.html`,
    `${slug}.html`,
  ];
  for (const name of exact) {
    if (files.includes(name)) return path.join(DEMOS_DIR, name);
  }

  const words = slug.split('-').filter(w => w.length > 2);
  const match = files.find(
    f => f.endsWith('.html') && words.every(w => f.includes(w))
  );
  return match ? path.join(DEMOS_DIR, match) : null;
}

export async function generateStaticParams() {
  let files: string[];
  try {
    files = fs.readdirSync(DEMOS_DIR);
  } catch {
    return [];
  }
  return files
    .filter(f => f.endsWith('.html'))
    .map(f => ({
      slug: f.replace(/^demo-/, '').replace(/-flow\.html$/, '').replace(/\.html$/, ''),
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  return { title: `${title} Demo | AtlasLabs AI` };
}

export default async function DemoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const filePath = findDemoFile(slug);
  if (!filePath) notFound();
  const htmlContent = fs.readFileSync(filePath, 'utf-8');
  return (
    <div className="min-h-screen bg-zinc-950">
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
}
