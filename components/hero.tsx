"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { Pill } from "./pill";
import { Button } from "./ui/button";
import { useState } from "react";

const GL = dynamic(() => import("./gl"), {
  ssr: false,
}) as React.ComponentType<{ hovering: boolean }>;

export function Hero() {
  const [hovering, setHovering] = useState(false);

  return (
    <div className="flex flex-col h-svh justify-between relative">
      <GL hovering={hovering} />

      <div className="pb-16 mt-auto text-center relative">
        {/* <Pill className="mb-6">BETA RELEASE</Pill> */}

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-sentient">
          Fluid Protocol <br />
          <i className="font-light">Cross-Chain Aptos</i> Viability
        </h1> 

        <p className="font-mono text-sm sm:text-base text-foreground/60 text-balance mt-8 max-w-[540px] mx-auto">
          
            Aptos apps aren't limited to Aptos anymore. One protocol. Multiple chains. Zero boundaries.
        </p>

        <Link className="contents max-sm:hidden" href="/#contact">
          <Button
            className="mt-14 bg-background border-foreground text-foreground [&>[data-border]]:bg-foreground shadow-foreground/20 hover:shadow-foreground/30"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            npm i @fluid-labs/sdk
          </Button>
        </Link>

        <Link className="contents sm:hidden" href="/#contact">
          <Button
            size="sm"
            className="mt-14 bg-background border-foreground text-foreground [&>[data-border]]:bg-foreground shadow-foreground/20 hover:shadow-foreground/30"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            npm i @fluid-labs/sdk
          </Button>
        </Link>
      </div>
    </div>
  );
}
