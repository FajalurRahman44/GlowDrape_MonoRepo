interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 p-8 font-sans dark:bg-black">
      <main className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-black dark:text-zinc-50 capitalize">
          Product: {slug}
        </h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          Showing details for product slug: <code className="bg-zinc-200 px-2 py-1 rounded dark:bg-zinc-800">{slug}</code>.
        </p>
      </main>
    </div>
  );
}
