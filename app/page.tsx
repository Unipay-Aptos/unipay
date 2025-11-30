'use client'

import { Hero } from "@/components/hero";
import { Leva } from "leva";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedGridPattern } from "@/components/magic-ui/grid";
import { CodeComparison } from "@/components/magic-ui/code-comparison";

export default function Home() {
  return (
    <>
      <Hero />
      <Leva hidden />
      
      {/* How It Works Section */}
      <section id="about" className="container py-24 px-4 relative overflow-hidden">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          className="[mask-image:linear-gradient(to_bottom,white,transparent)]"
        />
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl sm:text-5xl font-sentient mb-12 text-center">
            How <i className="font-light">Fluid Protocol</i> Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-5xl font-mono mb-4 text-foreground/40">01</div>
              <h3 className="text-xl font-mono uppercase mb-4">Initiate</h3>
              <p className="text-sm text-foreground/60 font-mono">
                Start transfer on Base Sepolia. USDC is burned/locked and a message is sent to Circle.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-mono mb-4 text-foreground/40">02</div>
              <h3 className="text-xl font-mono uppercase mb-4">Attest</h3>
              <p className="text-sm text-foreground/60 font-mono">
                Circle observes the transaction and generates a cryptographically signed attestation (1-3 minutes).
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-mono mb-4 text-foreground/40">03</div>
              <h3 className="text-xl font-mono uppercase mb-4">Complete</h3>
              <p className="text-sm text-foreground/60 font-mono">
                Complete the transfer on any supported chain. USDC is minted/released to the recipient address.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section className="container py-24 px-4 relative overflow-hidden">
        <AnimatedGridPattern
          numSquares={40}
          maxOpacity={0.08}
          duration={4}
          className="[mask-image:linear-gradient(to_top,white,transparent)]"
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl sm:text-5xl font-sentient mb-12 text-center">
            Simple <i className="font-light">Integration</i>
          </h2>
          <p className="text-sm text-foreground/60 font-mono text-center mb-12 max-w-2xl mx-auto">
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
import { transferUsdcViaCctp } from '@fluid-labs/sdk';

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
      <section id="portfolio" className="container py-24 px-4 bg-foreground/5 relative overflow-hidden">
        <AnimatedGridPattern
          numSquares={25}
          maxOpacity={0.12}
          duration={3}
          className="[mask-image:linear-gradient(to_bottom,white,transparent)]"
        />
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl sm:text-5xl font-sentient mb-12 text-center">
            Built on <i className="font-light">Proven Infrastructure</i>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <div>
              <h3 className="text-xl font-mono uppercase mb-4">Circle CCTP</h3>
              <p className="text-sm text-foreground/60 font-mono mb-6">
                Uses Circle's Cross-Chain Transfer Protocol, the same infrastructure powering Portal Bridge. 
                Secure, fast, and reliable cross-chain transfers.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-mono uppercase mb-4">Wormhole SDK</h3>
              <p className="text-sm text-foreground/60 font-mono mb-6">
                Leverages Wormhole SDK v4 for seamless chain abstractions and automatic contract interactions. 
                No manual contract configuration required.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-mono uppercase mb-4">Multi-Chain Support</h3>
              <p className="text-sm text-foreground/60 font-mono mb-6">
                Connect EVM and Move ecosystems seamlessly. Aptos apps aren't limited to Aptos anymore. 
                Transfer USDC across any supported chain combination.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-mono uppercase mb-4">Fast & Secure</h3>
              <p className="text-sm text-foreground/60 font-mono mb-6">
                Transfers typically complete in 1-3 minutes. All attestations are cryptographically signed 
                by Circle's infrastructure for maximum security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section id="insights" className="container py-24 px-4 relative overflow-hidden">
        <AnimatedGridPattern
          numSquares={35}
          maxOpacity={0.1}
          duration={4}
          className="[mask-image:linear-gradient(to_top,white,transparent)]"
        />
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl sm:text-5xl font-sentient mb-12 text-center">
            Powered by <i className="font-light">Modern Tech</i>
          </h2>
          
          <div className="mt-16 space-y-6">
            <div className="border border-foreground/20 p-6 bg-background/50 backdrop-blur-sm">
              <h3 className="text-lg font-mono uppercase mb-2">Wormhole SDK v4.0.2</h3>
              <p className="text-sm text-foreground/60 font-mono">
                Core SDK providing Circle CCTP integration, chain abstractions, and contract management
              </p>
            </div>
            
            <div className="border border-foreground/20 p-6 bg-background/50 backdrop-blur-sm">
              <h3 className="text-lg font-mono uppercase mb-2">Platform SDKs</h3>
              <p className="text-sm text-foreground/60 font-mono">
                @wormhole-foundation/sdk-evm & @wormhole-foundation/sdk-aptos for native chain support
              </p>
            </div>
            
            <div className="border border-foreground/20 p-6 bg-background/50 backdrop-blur-sm">
              <h3 className="text-lg font-mono uppercase mb-2">CCTP Integration</h3>
              <p className="text-sm text-foreground/60 font-mono">
                @wormhole-foundation/sdk-evm-cctp & @wormhole-foundation/sdk-aptos-cctp for Circle CCTP contracts
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="container py-24 px-4 relative overflow-hidden">
        <AnimatedGridPattern
          numSquares={20}
          maxOpacity={0.08}
          duration={3}
          className="[mask-image:radial-gradient(ellipse_at_center,white,transparent)]"
        />
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-sentient mb-8">
            Ready to <i className="font-light">Get Started?</i>
          </h2>
          <p className="text-sm text-foreground/60 font-mono mb-12 max-w-md mx-auto">
            Start building with Fluid Protocol. Seamless cross-chain USDC transfers in minutes.
          </p>
          <Link href="/architecture.md" className="contents">
            <Button className="bg-background border-foreground text-foreground [&>[data-border]]:bg-foreground shadow-foreground/20 hover:shadow-foreground/30">
              View Documentation
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
