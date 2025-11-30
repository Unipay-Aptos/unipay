import { DocsSidebar } from "@/components/new/docs-sidebar";
import { Badge } from "@/components/ui/badge";

export default function IntegrationsPage() {
  return (
    <div className="flex min-h-screen">
      <DocsSidebar />
      <div className="flex-1 ml-[3.05rem] lg:ml-[15rem] transition-all duration-200">
        <main className="container py-12 px-6 max-w-4xl">
          <div className="prose prose-invert max-w-none">
            <h1 className="text-4xl sm:text-5xl font-sentient mb-6">
              Integrations
            </h1>
            <p className="text-xl text-foreground/70 mb-8 font-mono">
              Supported chains and integration guides
            </p>

            <div className="border border-foreground/20 rounded-lg p-6 bg-foreground/5 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-2xl font-sentient">Base</h2>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                  Available
                </Badge>
              </div>
              <p className="text-foreground/80 font-mono text-sm leading-relaxed mb-4">
                Base is an EVM-compatible Layer 2 blockchain built on Ethereum. Fluid Protocol supports 
                USDC transfers from Base Sepolia (testnet) to Aptos.
              </p>
              
              <div className="space-y-4 font-mono text-sm">
                <div>
                  <h3 className="text-lg font-mono uppercase mb-2 text-foreground/90">
                    Chain Information
                  </h3>
                  <ul className="space-y-2 text-foreground/70">
                    <li>
                      <strong>Chain ID:</strong> 84532 (Base Sepolia)
                    </li>
                    <li>
                      <strong>Wormhole Chain ID:</strong> 30
                    </li>
                    <li>
                      <strong>RPC URL:</strong> https://sepolia.base.org
                    </li>
                    <li>
                      <strong>Explorer:</strong> https://sepolia.basescan.org
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-mono uppercase mb-2 text-foreground/90">
                    Configuration
                  </h3>
                  <code className="block p-4 bg-background border border-foreground/20 rounded text-foreground overflow-x-auto">
{`BASE_RPC_URL=https://sepolia.base.org
BASE_SPONSOR_PRIVATE_KEY=0x...your_private_key_here...
NETWORK_TYPE=Testnet`}
                  </code>
                </div>

                <div>
                  <h3 className="text-lg font-mono uppercase mb-2 text-foreground/90">
                    Usage Example
                  </h3>
                  <code className="block p-4 bg-background border border-foreground/20 rounded text-foreground overflow-x-auto text-sm">
{`import { transferUsdcViaCctp } from '@fluid-sdk/fluid-sdk';

const result = await transferUsdcViaCctp({
  amount: "1.0",
  fromChain: "BaseSepolia",
  toChain: "Aptos",
  recipient: aptosAddress
});`}
                  </code>
                </div>

                <div>
                  <h3 className="text-lg font-mono uppercase mb-2 text-foreground/90">
                    Getting Testnet Tokens
                  </h3>
                  <ul className="space-y-2 text-foreground/70">
                    <li>
                      <strong>ETH:</strong>{" "}
                      <a 
                        href="https://www.coinbase.com/faucets/base-ethereum-sepolia-faucet" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 underline"
                      >
                        Base Sepolia Faucet
                      </a>
                    </li>
                    <li>
                      <strong>USDC:</strong> Obtain testnet USDC from Circle's testnet faucet
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border border-foreground/20 rounded-lg p-6 bg-foreground/5 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-2xl font-sentient">Solana</h2>
                <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                  Coming Soon
                </Badge>
              </div>
              <p className="text-foreground/80 font-mono text-sm leading-relaxed mb-4">
                Solana integration is currently under development. This will enable USDC transfers from 
                Solana to Aptos and other supported chains.
              </p>
              
              <div className="border-l-2 border-yellow-500/50 pl-4 bg-yellow-500/5 p-3 rounded">
                <p className="text-foreground/80 text-sm font-mono">
                  <strong>Status:</strong> In development. Expected Q2 2024.
                </p>
              </div>
            </div>

            <div className="border border-foreground/20 rounded-lg p-6 bg-foreground/5 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-2xl font-sentient">Additional Chains</h2>
                <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                  Planned
                </Badge>
              </div>
              <p className="text-foreground/80 font-mono text-sm leading-relaxed mb-4">
                We're actively working on expanding support to additional chains. The following are planned 
                for future releases:
              </p>
              
              <div className="space-y-3 font-mono text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-foreground/40">•</span>
                  <span className="text-foreground/70">Ethereum Mainnet</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-foreground/40">•</span>
                  <span className="text-foreground/70">Polygon</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-foreground/40">•</span>
                  <span className="text-foreground/70">Arbitrum</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-foreground/40">•</span>
                  <span className="text-foreground/70">Optimism</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-foreground/40">•</span>
                  <span className="text-foreground/70">Avalanche</span>
                </div>
              </div>
            </div>

            <div className="border border-foreground/20 rounded-lg p-6 bg-foreground/5 mb-8">
              <h2 className="text-2xl font-sentient mb-4">Chain Requirements</h2>
              <p className="text-foreground/80 font-mono text-sm leading-relaxed mb-4">
                For a chain to be supported by Fluid Protocol, it must:
              </p>
              <ul className="space-y-2 font-mono text-sm text-foreground/70">
                <li className="flex items-start gap-2">
                  <span className="text-foreground/40 mt-1">✓</span>
                  <span>Support Circle CCTP contracts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground/40 mt-1">✓</span>
                  <span>Have Wormhole SDK support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground/40 mt-1">✓</span>
                  <span>Support USDC (native or bridged)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground/40 mt-1">✓</span>
                  <span>Have reliable RPC endpoints</span>
                </li>
              </ul>
            </div>

            <div className="border border-foreground/20 rounded-lg p-6 bg-foreground/5">
              <h2 className="text-2xl font-sentient mb-4">Request New Chain Support</h2>
              <p className="text-foreground/80 font-mono text-sm leading-relaxed mb-4">
                Interested in seeing your chain supported? We're always looking to expand our integration 
                coverage. Reach out to us:
              </p>
              <ul className="space-y-2 font-mono text-sm text-foreground/70">
                <li>
                  <strong>GitHub:</strong>{" "}
                  <a 
                    href="https://github.com/fluid-labs/fluid-sdk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    Open an issue
                  </a>
                </li>
                <li>
                  <strong>Discord:</strong> Join our community to discuss integrations
                </li>
                <li>
                  <strong>Email:</strong> integrations@fluid.xyz
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

