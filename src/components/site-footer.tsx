export function SiteFooter() {
  return (
    <footer className="border-t border-stone-100 py-12">
      <div className="mx-auto max-w-6xl px-6 text-center text-sm text-stone-400">
        <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
}