'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  function createPageURL(page: number) {
    const params = new URLSearchParams(searchParams);
    params.set('page', String(page));
    return `${pathname}?${params.toString()}`;
  }

  return (
    <nav
      aria-label="Pagination"
      className="flex items-center justify-between mt-6"
    >
      {/* Previous */}
      {currentPage > 1 ? (
        <Link
          href={createPageURL(currentPage - 1)}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
        >
          Previous
        </Link>
      ) : (
        <span className="px-4 py-2 text-gray-400 bg-gray-100 rounded cursor-not-allowed">
          Previous
        </span>
      )}

      {/* Page indicator */}
      <span className="text-gray-700 font-medium">
        Page {currentPage} of {totalPages}
      </span>

      {/* Next */}
      {currentPage < totalPages ? (
        <Link
          href={createPageURL(currentPage + 1)}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
        >
          Next
        </Link>
      ) : (
        <span className="px-4 py-2 text-gray-400 bg-gray-100 rounded cursor-not-allowed">
          Next
        </span>
      )}
    </nav>
  );
}
