import fs from 'fs/promises';
import path from 'path';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Navigation } from '@/components/Navigation';

interface DemoPageProps {
  params: Promise<{ slug: string }>;
}

export default async function DemoPage({ params }: DemoPageProps) {
  const { slug } = await params;

  // Path to Mission Control demos folder
  const missionControlDemosDir = '/Users/atlas/.openclaw/workspace-main/demos';

  try {
    // Try markdown with demo- prefix (Catalyst format)
    const mdPaths = [
      path.join(missionControlDemosDir, `demo-${slug}.md`),
      path.join(missionControlDemosDir, `${slug}.md`),
      path.join(missionControlDemosDir, `${slug}-demo.md`),
    ];

    let mdContent: string | null = null;

    for (const mdPath of mdPaths) {
      try {
        mdContent = await fs.readFile(mdPath, 'utf-8');
        break;
      } catch (e) {
        // Continue to next path
      }
    }

    if (!mdContent) {
      notFound();
    }

    // Format company name from slug
    const companyName = slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    return (
      <div className="min-h-screen bg-neutral-950">
        <Navigation />

        <main className="pt-24 pb-20 px-6">
          <div className="max-w-4xl mx-auto">
            {/* Back Link */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-neutral-400 hover:text-orange-400 transition-colors mb-8 group"
            >
              <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to AtlasLabs AI
            </Link>

            {/* Demo Content Card */}
            <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl overflow-hidden">
              {/* Header */}
              <div className="border-b border-neutral-800 p-8 bg-gradient-to-r from-orange-500/5 to-amber-500/5">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="text-sm text-neutral-400">Live Demo</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {companyName}
                </h1>
                <p className="text-neutral-400">
                  Custom automation solution built for your business
                </p>
              </div>

              {/* Content */}
              <div className="p-8 prose prose-invert prose-orange max-w-none">
                <div
                  dangerouslySetInnerHTML={{
                    __html: mdContent
                      .replace(/^# (.*$)/gm, '<h1 className="text-3xl font-bold text-white mb-6">$1</h1>')
                      .replace(/^## (.*$)/gm, '<h2 className="text-2xl font-bold text-white mt-10 mb-4">$1</h2>')
                      .replace(/^### (.*$)/gm, '<h3 className="text-xl font-semibold text-neutral-200 mt-8 mb-3">$1</h3>')
                      .replace(/\*\*(.*?)\*\*/g, '<strong className="text-orange-400">$1</strong>')
                      .replace(/\*(.*?)\*/g, '<em className="text-neutral-300">$1</em>')
                      .replace(/`([^`]+)`/g, '<code className="bg-neutral-800 text-orange-400 px-2 py-1 rounded text-sm">$1</code>')
                      .replace(/```([\s\S]*?)```/g, '<pre className="bg-neutral-800/50 p-4 rounded-lg overflow-x-auto border border-neutral-700"><code class="text-neutral-300">$1</code></pre>')
                      .replace(/^> (.*$)/gm, '<blockquote className="border-l-4 border-orange-500 pl-4 my-6 italic text-neutral-400">$1</blockquote>')
                      .replace(/^- (.*$)/gm, '<li className="ml-6 text-neutral-300">$1</li>')
                      .replace(/\n\n/g, '</p><p className="mb-4 text-neutral-300 leading-relaxed">')
                      .replace(/(\r\n|\n|\r)/gm, '<br>')
                  }}
                />
              </div>

              {/* CTA Footer */}
              <div className="border-t border-neutral-800 p-8 bg-gradient-to-r from-orange-500/5 to-amber-500/5">
                <div className="text-center">
                  <p className="text-neutral-400 mb-6">Ready to see this in action?</p>
                  <Link
                    href="#contact"
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
      </div>
    );
  } catch (error) {
    console.error('Demo page error:', error);
    notFound();
  }
}

export async function generateMetadata({ params }: DemoPageProps) {
  const { slug } = await params;
  const formattedName = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title: `${formattedName} - Demo | AtlasLabs AI`,
    description: `Custom automation solution for ${formattedName} - Built by AtlasLabs AI`,
  };
}
