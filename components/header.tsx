import Link from "next/link";
import { Logo } from "./logo";
import { MobileMenu } from "./mobile-menu";

export const Header = () => {
  return (
    <div className="fixed z-50 pt-8 md:pt-14 top-0 left-0 w-full">
      <header className="flex items-center container">
        <Link
          href="/"
          className="uppercase text-foreground hover:text-foreground transition-colors ease-out duration-150 flex items-center gap-2 font-bold text-2xl"
        >
          <span className="text-3xl">🌊</span>
          <span className="tracking-wider">Fluid</span>
        </Link>
        <nav className="flex max-lg:hidden absolute left-1/2 -translate-x-1/2 items-center justify-center gap-x-10">
          {["About", "Portfolio", "Insights", "Contact"].map((item) => (
            <Link
              className="uppercase inline-block font-mono text-foreground/60 hover:text-foreground/100 duration-150 transition-colors ease-out"
              href={`#${item.toLowerCase()}`}
              key={item}
            >
              {item}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-4">
          <Link
            className="uppercase max-lg:hidden transition-colors ease-out duration-150 font-bold text-lg bg-white text-black px-5 py-2 border hover:opacity-90 rounded-full"
            href="/#sign-in"
          >
            Sign In
          </Link>
          <MobileMenu />
        </div>
      </header>
    </div>
  );
};
