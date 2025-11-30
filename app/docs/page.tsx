import { DocsSidebar } from "@/components/new/docs-sidebar";

export default function DocsPage() {
  return (
    <div className="flex min-h-screen">
      <DocsSidebar />
      <div className="flex-1 ml-[3.05rem] lg:ml-[15rem] transition-all duration-200">
        <main className="container py-12 px-6 max-w-4xl">
          <div className="prose prose-invert max-w-none">
            <h1 className="text-4xl sm:text-5xl font-sentient mb-6">
              Fluid Protocol <span className="font-light">SDK</span>
            </h1>
            <p className="text-xl text-foreground/70 mb-8 font-mono">
              Cross-Chain USDC Transfer: Base Sepolia → Aptos via Circle CCTP
            </p>

            <div className="border border-foreground/20 rounded-lg p-6 bg-foreground/5 mb-8">
              <h2 className="text-2xl font-sentient mb-4">What is Fluid Protocol?</h2>
              <p className="text-foreground/80 font-mono text-sm leading-relaxed">
                Fluid Protocol is a Node.js + TypeScript SDK for transferring USDC from Base Sepolia (EVM) 
                to Aptos (Move) using Circle CCTP (Cross-Chain Transfer Protocol) via the Wormhole SDK. 
                This is the same method that Portal Bridge uses and is the only method that works for 
                Base Sepolia → Aptos transfers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="border border-foreground/20 rounded-lg p-6 bg-foreground/5">
                <h3 className="text-xl font-mono uppercase mb-3">Source Chain</h3>
                <p className="text-foreground/60 font-mono text-sm">
                  Base Sepolia (EVM-compatible)
                </p>
              </div>
              <div className="border border-foreground/20 rounded-lg p-6 bg-foreground/5">
                <h3 className="text-xl font-mono uppercase mb-3">Destination Chain</h3>
                <p className="text-foreground/60 font-mono text-sm">
                  Aptos (Move-based)
                </p>
              </div>
              <div className="border border-foreground/20 rounded-lg p-6 bg-foreground/5">
                <h3 className="text-xl font-mono uppercase mb-3">Protocol</h3>
                <p className="text-foreground/60 font-mono text-sm">
                  Circle CCTP via Wormhole SDK
                </p>
              </div>
              <div className="border border-foreground/20 rounded-lg p-6 bg-foreground/5">
                <h3 className="text-xl font-mono uppercase mb-3">Token</h3>
                <p className="text-foreground/60 font-mono text-sm">
                  USDC (6 decimals)
                </p>
              </div>
            </div>

            <div className="border border-foreground/20 rounded-lg p-6 bg-foreground/5 mb-8">
              <h2 className="text-2xl font-sentient mb-4">Key Features</h2>
              <ul className="space-y-3 font-mono text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-foreground/40 mt-1">✓</span>
                  <span className="text-foreground/80">
                    <strong>Circle CCTP Integration:</strong> Uses Circle's Cross-Chain Transfer Protocol
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground/40 mt-1">✓</span>
                  <span className="text-foreground/80">
                    <strong>Wormhole SDK:</strong> Leverages official Wormhole SDK for CCTP support
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground/40 mt-1">✓</span>
                  <span className="text-foreground/80">
                    <strong>Sponsor Wallet Model:</strong> All gas fees paid by sponsor wallets
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground/40 mt-1">✓</span>
                  <span className="text-foreground/80">
                    <strong>Automatic Attestation Polling:</strong> SDK handles Circle attestation retrieval
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground/40 mt-1">✓</span>
                  <span className="text-foreground/80">
                    <strong>Error Handling:</strong> Comprehensive checks and clear error messages
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground/40 mt-1">✓</span>
                  <span className="text-foreground/80">
                    <strong>Type Safety:</strong> Full TypeScript implementation
                  </span>
                </li>
              </ul>
            </div>

            <div className="border border-foreground/20 rounded-lg p-6 bg-foreground/5">
              <h2 className="text-2xl font-sentient mb-4">Quick Start</h2>
              <div className="space-y-4 font-mono text-sm">
                <div>
                  <p className="text-foreground/60 mb-2">Install the package:</p>
                  <code className="block p-3 bg-background border border-foreground/20 rounded text-foreground">
                    npm install @fluid-sdk/fluid-sdk
                  </code>
                </div>
                <div>
                  <p className="text-foreground/60 mb-2">Basic usage:</p>
                  <code className="block p-3 bg-background border border-foreground/20 rounded text-foreground">
                    {`import { transferUsdcViaCctp } from '@fluid-sdk/fluid-sdk';

const result = await transferUsdcViaCctp({
  amount: "1.0",
  fromChain: "BaseSepolia",
  toChain: "Aptos",
  recipient: aptosAddress
});`}
                  </code>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

