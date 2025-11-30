import Link from "next/link";
import { Logo } from "./logo";
import { MobileMenu } from "./mobile-menu";
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <div className="fixed z-50 pt-8 md:pt-14 top-0 left-0 w-full">
      <header className="flex items-center container">
        <Link
          href="/"
          className="uppercase text-foreground hover:text-foreground transition-colors ease-out duration-150 flex items-center gap-2 font-bold text-2xl"
        >
          
          <span className="tracking-wider">Fluid</span>
        </Link>
        
        <div className="ml-auto flex items-center gap-4">
          <Link
            className="contents"
            href="/#sign-in"
          >
            <Button
              className="bg-background border-foreground text-foreground [&>[data-border]]:bg-foreground shadow-foreground/20 hover:shadow-foreground/30"
            >
              Read Docs
            </Button>
          </Link>

        </div>
      </header>
    </div>
  );
};
