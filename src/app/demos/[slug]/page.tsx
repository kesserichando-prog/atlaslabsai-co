import fs from 'fs/promises';
import path from 'path';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Navigation } from '@/components/Navigation';

interface DemoPageProps {
  params: Promise<{ slug: string }>;
}

async function loadDemoContent(slug: string): Promise<string | null> {
  const publicDemosDir = path.join(process.cwd(), 'public', 'demos');

  // Exact-match candidates (Catalyst naming conventions)
  const exactPaths = [
    path.join(publicDemosDir, `demo-${slug}.md`),
    path.join(publicDemosDir, `${slug}.md`),
    path.join(publicDemosDir, `${slug}-demo.md`),
  ];

  for (const p of exactPaths) {
    try {
      return await fs.readFile(p, 'utf-8');
    } catch {
      // try next
    }
  }

  // Fuzzy fallback: find any .md file whose name contains all slug words
  // Handles cases like demo-thomas-s-holly-cpa.md for slug thomas-holly-cpa
  try {
    const files = await fs.readdir(publicDemosDir);
    const slugWords = slug.split('-').filter(w => w.length > 2);
    const match = files.find(
      f => f.endsWith('.md') && slugWords.every(w => f.includes(w))
    );
    if (match) {
      return await fs.readFile(path.join(publicDemosDir, match), 'utf-8');
    }
  } catch {
    // directory unreadable
  }

  return null;
}

function renderMarkdown(md: string): string {
  return md
    .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold text-white mb-6 mt-2">$1</h1>')
    .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold text-white mt-10 mb-4">$1</h2>')
    .replace(/^### (.*$)/gm, '<h3 class="text-xl font-semibold text-neutral-200 mt-8 mb-3">$1</h3>')
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-orange-400 font-semibold">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em class="text-neutral-300">$1</em>')
    .replace(/`([^`]+)`/g, '<code class="bg-neutral-800 text-orange-400 px-2 py-0.5 rounded text-sm font-mono">$1</code>')
    .replace(/```([\s\S]*?)```/g, '<pre class="bg-neutral-800/50 p-4 rounded-lg overflow-x-auto border border-neutral-700 my-4"><code class="text-neutral-300 text-sm">$1</code></pre>')
    .replace(/^> (.*$)/gm, '<blockquote class="border-l-4 border-orange-500 pl-4 my-6 italic text-neutral-400">$1</blockquote>')
    .replace(/^\| (.+) \|$/gm, (_, row) => {
      const cells = row.split(' | ');
      return `<tr class="border-b border-neutral-800">${cells.map((c: string) => `<td class="px-4 py-3 text-neutral-300">${c}</td>`).join('')}</tr>`;
    })
    .replace(/^---$/gm, '<hr class="border-neutral-800 my-8" />')
    .replace(/^- (.*$)/gm, '<li class="ml-6 mb-1 text-neutral-300 list-disc">$1</li>')
    .replace(/(<li.*<\/li>\n?)+/g, m => `<ul class="my-4 space-y-1">${m}</ul>`)
    .replace(/(<tr.*<\/tr>\n?)+/g, m => `<table class="w-full border border-neutral-800 rounded-lg overflow-hidden my-6 text-sm">${m}</table>`)
    .replace(/\n\n/g, '</p><p class="mb-4 text-neutral-300 leading-relaxed">')
    .replace(/(\r\n|\n|\r)/gm, '<br />');
}

export default async function DemoPage({ params }: DemoPageProps) {
  const { slug } = await params;

  const mdContent = await loadDemoContent(slug);
  if (!mdContent) notFound();

  const companyName = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className="min-h-screen bg-neutral-950">
      <Navigation />

      <main className="pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto">

          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-orange-400 transition-colors mb-8 group text-sm"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to AtlasLabs AI
          </Link>

          {/* Card */}
          <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl overflow-hidden">

            {/* Header */}
            <div className="border-b border-neutral-800 p-8 bg-gradient-to-r from-orange-500/5 to-amber-500/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 flex items-center justify-center rounded-full overflow-hidden">
                  <img src="/images/logo.svg" alt="AtlasLabs AI" className="w-full h-full" />
                </div>
                <div>
                  <span className="font-bold text-neutral-100">Atlas</span>
                  <span className="text-orange-500 font-bold">Labs</span>
                  <span className="text-neutral-500 text-sm ml-1">AI</span>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-sm text-emerald-400 font-medium">Personalized Demo</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{companyName}</h1>
              <p className="text-neutral-400">Custom automation solution built for your business</p>
            </div>

            {/* Markdown content */}
            <div className="p-8">
              <div
                className="text-neutral-300 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: renderMarkdown(mdContent) }}
              />
            </div>

            {/* CTA footer */}
            <div className="border-t border-neutral-800 p-8 bg-gradient-to-r from-orange-500/5 to-amber-500/5">
              <div className="text-center">
                <p className="text-neutral-400 mb-6">Ready to see this live?</p>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/30 transition-all hover:-translate-y-0.5"
                >
                  <span>Schedule a Demo</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-800/50 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
          <div className="flex items-center gap-2">
            <span className="font-bold text-neutral-100">Atlas</span>
            <span className="text-orange-500 font-bold">Labs</span>
            <span className="text-neutral-500">AI</span>
          </div>
          <div>© {new Date().getFullYear()} AtlasLabs AI. Built to scale.</div>
        </div>
      </footer>
    </div>
  );
}

export async function generateMetadata({ params }: DemoPageProps) {
  const { slug } = await params;
  const formattedName = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title: `${formattedName} — Personalized Demo | AtlasLabs AI`,
    description: `Custom automation proposal for ${formattedName}, built by AtlasLabs AI.`,
  };
}
