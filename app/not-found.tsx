import Link from 'next/link';
 
export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <h2 className="mb-3 leading-none tracking-tight">Oops...</h2>
      <p className="mb-6 font-normal text-white text-xl lg:text-2xl">No requested page found</p>
      <Link
        href="/"
        className="mt-4 rounded-md bg-primary-color md:text-lg font-semibold px-4 py-2 text-black transition-colors hover:bg-hover-color"
      >
        Send Me Back!
      </Link>
    </main>
  );
}