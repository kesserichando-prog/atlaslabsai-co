import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    filename: string;
  };
}

export default function PublicDemoPage({ params }: PageProps) {
  // This is a redirect to the actual static HTML file
  const filename = params.filename;
  
  if (!filename.endsWith('.html')) {
    notFound();
  }

  // Use a simple redirect to the public file
  const publicUrl = `/demos/${filename}`;
  
  return (
    <html>
      <head>
        <meta httpEquiv="refresh" content={`0;url=${publicUrl}`} />
      </head>
      <body>
        <p>Redirecting to demo...</p>
        <a href={publicUrl}>Click here if not redirected</a>
      </body>
    </html>
  );
}