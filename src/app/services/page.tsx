import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Atlas Automation",
  description: "End-to-end automation services that find clients, solve problems, and scale revenue.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-zinc-950 pt-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Our Services</h1>
        <p className="text-xl text-zinc-400 mb-12">
          From discovery to deployment—we handle the entire automation lifecycle.
        </p>
        {/* Services content */}
      </div>
    </div>
  );
}