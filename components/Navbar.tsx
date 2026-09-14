import Link from "next/link";

const navItems = [
  { label: "Home", href: "/", available: true },
  { label: "About", href: "/about", available: true },
  { label: "Projects", href: "/projects", available: false },
  { label: "Research", href: "/research", available: false },
  { label: "CAD Portfolio", href: "/cad", available: false },
  { label: "Notebook", href: "/notebook", available: false },
  { label: "Blog", href: "/blog", available: true },
  { label: "Resume", href: "/resume", available: true },
  { label: "Contact", href: "/contact", available: true },
];

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b border-zinc-200">
      <span className="font-semibold text-lg">Orkan Selcuk</span>
      <ul className="flex gap-6">
        {navItems.map((item) => (
          <li key={item.label}>
            {item.available ? (
              <Link href={item.href} className="text-sm hover:text-blue-600">
                {item.label}
              </Link>
            ) : (
              <span className="text-sm text-zinc-400 cursor-not-allowed">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}