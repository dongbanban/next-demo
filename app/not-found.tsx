/*
 * @FilePath: /Users/i104/next-demo/app/not-found.tsx
 * @author: dongyang(yang.dong@derbysoft.net)
 */
import Link from 'next/link';

export default function NotFound() {
  return (
    <main
      className="flex flex-col items-center justify-center"
      style={{ height: '100vh' }}
    >
      <h2 className="text-center">Not Found</h2>
      <Link
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        href="/dashboard"
      >
        Return to Dashboard
      </Link>
    </main>
  );
}
