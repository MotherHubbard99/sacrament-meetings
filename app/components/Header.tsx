import HeaderNav from "./HeaderNav";

export default function Header() {
  return (
    <header className="bg-[#0B5471] p-4">
      <div className="text-2xl font-[var(--font-dynapuff)]">
        Cedar Bench Ward — 2026
      </div>

      <nav className="mt-4">
        <HeaderNav />
      </nav>
    </header>
  );
}
