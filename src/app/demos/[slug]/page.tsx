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

  // Exact candidates first
  const exact = [
    `demo-${slug}-flow.html`,
    `demo-${slug}.html`,
    `${slug}.html`,
  ];
  for (const name of exact) {
    if (files.includes(name)) return path.join(DEMOS_DIR, name);
  }

  // Fuzzy: file contains all slug words (handles middle initials etc.)
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
  const title = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  return {
    title: `${title} Demo | AtlasLabs AI`,
    description: 'Automation opportunity demo showcasing ROI and implementation timeline.',
  };
}

export default async function DemoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const filePath = findDemoFile(slug);
  if (!filePath) notFound();

  let htmlContent = '';
  try {
    htmlContent = fs.readFileSync(filePath, 'utf-8');
  } catch {
    notFound();
  }

  return (
    <div className="min-h-screen bg-zinc-950">
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
}