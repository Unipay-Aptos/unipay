"use client";

import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import {
  BookOpen,
  Code,
  Download,
  Layers,
  Menu,
  X,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const sidebarVariants = {
  open: {
    width: "15rem",
  },
  closed: {
    width: "3.05rem",
  },
};


const variants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      x: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    x: -20,
    opacity: 0,
    transition: {
      x: { stiffness: 100 },
    },
  },
};

const transitionProps = {
  type: "tween" as const,
  ease: "easeOut" as const,
  duration: 0.2,
};

export function DocsSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  
  const navItems = [
    { href: "/docs", icon: BookOpen, label: "Overview", exact: true },
    { href: "/docs/introduction", icon: Zap, label: "Introduction" },
    { href: "/docs/installation", icon: Download, label: "Installation" },
    { href: "/docs/examples", icon: Code, label: "Examples" },
    { href: "/docs/integrations", icon: Layers, label: "Integrations", separator: true },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="fixed left-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-md border border-foreground/20 bg-background md:hidden"
        aria-label="Toggle menu"
      >
        {isMobileOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <Menu className="h-5 w-5" />
        )}
      </button>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      <motion.div
        className={cn(
          "fixed left-0 top-0 z-40 h-screen shrink-0 border-r border-foreground/20",
          "hidden md:block",
          isMobileOpen && "block"
        )}
        initial={isCollapsed ? "closed" : "open"}
        animate={isCollapsed || isMobileOpen ? "closed" : "open"}
        variants={sidebarVariants}
        transition={transitionProps}
        onMouseEnter={() => setIsCollapsed(false)}
        onMouseLeave={() => setIsCollapsed(true)}
      >
      <div className="relative z-40 flex h-full w-full flex-col bg-background text-muted-foreground transition-all">
        <div className="flex h-full flex-col">
          <div className="flex h-[54px] shrink-0 items-center border-b border-foreground/20 px-2">
            <Link href="/" className="w-full">
              <Button
                size="sm"
                className="flex w-full items-center gap-2 bg-transparent border-transparent hover:bg-foreground/10 px-2"
              >
                <Zap className="h-4 w-4 shrink-0" />
                <motion.span
                  variants={variants}
                  className="flex items-center"
                >
                  {!isCollapsed && (
                    <span className="text-sm font-medium">Fluid Protocol</span>
                  )}
                </motion.span>
              </Button>
            </Link>
          </div>

          <div className="flex flex-1 flex-col overflow-hidden">
            <ScrollArea className="flex-1 px-2 py-4">
              <nav className="flex flex-col gap-1">
                {navItems.map((item, idx) => {
                  const Icon = item.icon;
                  const isActive = item.exact
                    ? pathname === item.href
                    : pathname?.includes(item.href);

                  return (
                    <div key={item.href}>
                      {item.separator && <Separator className="my-2" />}
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileOpen(false)}
                        className={cn(
                          "flex h-9 w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors",
                          "hover:bg-foreground/10 hover:text-foreground",
                          isActive && "bg-foreground/10 text-foreground font-medium"
                        )}
                      >
                        <Icon className="h-4 w-4 shrink-0" />
                        <motion.span
                          variants={variants}
                          className="flex items-center"
                        >
                          {!isCollapsed && (
                            <span className="text-sm">{item.label}</span>
                          )}
                        </motion.span>
                      </Link>
                    </div>
                  );
                })}
              </nav>
            </ScrollArea>
          </div>
        </div>
      </div>
    </motion.div>
    </>
  );
}

