'use client'

import { Hero } from "@/components/hero";
import { Leva } from "leva";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedGridPattern } from "@/components/magic-ui/grid";
import { CodeComparison } from "@/components/magic-ui/code-comparison";
import { FlickeringGrid } from "@/components/magic-ui/flicker";
import { Particles } from "@/components/magic-ui/particiles";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Leva hidden />
      
      {/* How It Works Section */}
      <section id="about" className="container relative overflow-hidden px-4 py-24">
        <FlickeringGrid
          squareSize={4}
          gridGap={6}
          flickerChance={0.3}
          color="rgb(255, 255, 255)"
          maxOpacity={0.2}
          className="absolute inset-0"
        />
        <div className="relative z-10 mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-4xl font-sentient sm:text-5xl">
            How <i className="font-light">Fluid Protocol</i> Works
          </h2>
          
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                num: "01",
                title: "Initiate",
                desc: "Start transfer on Base Sepolia. USDC is burned/locked and a message is sent to Circle."
              },
              {
                num: "02",
                title: "Attest",
                desc: "Circle observes the transaction and generates a cryptographically signed attestation (1-3 minutes)."
              },
              {
                num: "03",
                title: "Complete",
                desc: "Complete the transfer on any supported chain. USDC is minted/released to the recipient address."
              }
            ].map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="mb-4 text-5xl font-mono text-foreground/40">{step.num}</div>
                <h3 className="mb-4 text-xl font-mono uppercase">{step.title}</h3>
                <p className="font-mono text-sm text-foreground/60">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section className="container relative overflow-hidden px-4 py-24">
        <Particles
          quantity={80}
          staticity={50}
          ease={50}
          size={0.4}
          color="#ffffff"
          className="absolute inset-0 opacity-40"
        />
        <div className="relative z-10 mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-4xl font-sentient sm:text-5xl">
            Simple <i className="font-light">Integration</i>
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center font-mono text-sm text-foreground/60">
            Fluid Protocol makes cross-chain USDC transfers as simple as a few lines of code. 
            No complex contract interactions required.
          </p>
          <CodeComparison
            beforeCode={`// Complex manual implementation
const tokenMessenger = new ethers.Contract(
  TOKEN_MESSENGER_ADDRESS,
  TOKEN_MESSENGER_ABI,
  signer
);

// Approve USDC
await usdc.approve(TOKEN_MESSENGER_ADDRESS, amount);

// Deposit and burn
const tx = await tokenMessenger.depositForBurn(
  amount,
  destinationDomain,
  recipientAddress,
  usdcAddress
);

// Wait for attestation manually
// Poll Circle API...
// Handle errors...
// Complete on destination chain...`}
            afterCode={`// With Fluid Protocol
import { transferUsdcViaCctp } from '@fluid-sdk/fluid-sdk';

const result = await transferUsdcViaCctp({
  amount: "1.0", // USDC
  fromChain: "BaseSepolia",
  toChain: "Aptos", // or any supported chain
  recipient: recipientAddress
});

// That's it! SDK handles:
// ✓ Initiate transfer
// ✓ Fetch attestation
// ✓ Complete on destination`}
            language="typescript"
            filename="transfer.ts"
            lightTheme="github-light"
            darkTheme="github-dark"
            highlightColor="#4F46E5"
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="portfolio" className="container relative overflow-hidden bg-foreground/5 px-4 py-24">
        <AnimatedGridPattern
          numSquares={25}
          maxOpacity={0.08}
          duration={3}
          className="[mask-image:linear-gradient(to_bottom,white,transparent)]"
        />
        <div className="relative z-10 mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-4xl font-sentient sm:text-5xl">
            Built on <i className="font-light">Proven Infrastructure</i>
          </h2>
          
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Circle CCTP",
                desc: "Uses Circle's Cross-Chain Transfer Protocol, the same infrastructure powering Portal Bridge. Secure, fast, and reliable cross-chain transfers."
              },
              {
                title: "Wormhole SDK",
                desc: "Leverages Wormhole SDK v4 for seamless chain abstractions and automatic contract interactions. No manual contract configuration required."
              },
              {
                title: "Multi-Chain Support",
                desc: "Connect EVM and Move ecosystems seamlessly. Aptos apps aren't limited to Aptos anymore. Transfer USDC across any supported chain combination."
              },
              {
                title: "Fast & Secure",
                desc: "Transfers typically complete in 1-3 minutes. All attestations are cryptographically signed by Circle's infrastructure for maximum security."
              }
            ].map((feature, idx) => (
              <div key={idx}>
                <h3 className="mb-4 text-xl font-mono uppercase">{feature.title}</h3>
                <p className="mb-6 font-mono text-sm text-foreground/60">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section id="insights" className="container relative overflow-hidden px-4 py-24">
        <AnimatedGridPattern
          numSquares={35}
          maxOpacity={0.1}
          duration={4}
          className="[mask-image:linear-gradient(to_top,white,transparent)]"
        />
        <div className="relative z-10 mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-4xl font-sentient sm:text-5xl">
            Powered by <i className="font-light">Modern Tech</i>
          </h2>
          
          <div className="mt-16 space-y-6">
            {[
              {
                title: "Wormhole SDK v4.0.2",
                desc: "Core SDK providing Circle CCTP integration, chain abstractions, and contract management"
              },
              {
                title: "Platform SDKs",
                desc: "@wormhole-foundation/sdk-evm & @wormhole-foundation/sdk-aptos for native chain support"
              },
              {
                title: "CCTP Integration",
                desc: "@wormhole-foundation/sdk-evm-cctp & @wormhole-foundation/sdk-aptos-cctp for Circle CCTP contracts"
              }
            ].map((tech, idx) => (
              <div key={idx} className="rounded-lg border border-foreground/20 bg-background/50 p-6 backdrop-blur-sm">
                <h3 className="mb-2 text-lg font-mono uppercase">{tech.title}</h3>
                <p className="font-mono text-sm text-foreground/60">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="container relative overflow-hidden px-4 py-24">
        <AnimatedGridPattern
          numSquares={20}
          maxOpacity={0.08}
          duration={3}
          className="[mask-image:radial-gradient(ellipse_at_center,white,transparent)]"
        />
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <h2 className="mb-8 text-4xl font-sentient sm:text-5xl">
            Ready to <i className="font-light">Get Started?</i>
          </h2>
          <p className="mx-auto mb-12 max-w-md font-mono text-sm text-foreground/60">
            Start building with Fluid Protocol. Seamless cross-chain USDC transfers in minutes.
          </p>
          <Link href="/docs" className="contents">
            <Button className="bg-background border-foreground text-foreground shadow-foreground/20 hover:shadow-foreground/30 [&>[data-border]]:bg-foreground">
              View Documentation
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
