import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';

export async function generateStaticParams() {
  const demosDir = path.join(process.cwd(), 'src/app/demos/data');
  const files = fs.readdirSync(demosDir);
  return files
    .filter(file => file.endsWith('.html'))
    .map(file => ({
      slug: file.replace(/^demo-/, '').replace(/-flow\.html$/, '').replace(/\.html$/, '')
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const demosDir = path.join(process.cwd(), 'src/app/demos/data');
  const files = fs.readdirSync(demosDir);
  const demoFile = files.find(file => file.includes(`-${params.slug}`) || file.includes(`demo-${params.slug}`));

  if (!demoFile) {
    return { title: 'Demo Not Found' };
  }

  const title = params.slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title: `${title} Demo | AtlasLabs AI`,
    description: 'Automation opportunity demo showcasing ROI and implementation timeline.',
  };
}

export default function DemoPage({ params }: { params: { slug: string } }) {
  const demosDir = path.join(process.cwd(), 'src/app/demos/data');
  const files = fs.readdirSync(demosDir);
  const demoFile = files.find(file => file.includes(`-${params.slug}`) || file.includes(`demo-${params.slug}`));

  if (!demoFile) {
    notFound();
  }

  const filePath = path.join(demosDir, demoFile);
  let htmlContent = '';

  try {
    htmlContent = fs.readFileSync(filePath, 'utf-8');
  } catch (error) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-zinc-950">
      <div
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
}