import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center text-center">
      <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900">
        404 - Page Not Found
      </h1>
      <p className="mb-8 text-xl text-gray-600">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="rounded-md bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
      >
        Go back to Home
      </Link>
    </section>
  );
}
