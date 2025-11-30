import { DocsSidebar } from "@/components/new/docs-sidebar";

export default function InstallationPage() {
  return (
    <div className="flex min-h-screen">
      <DocsSidebar />
      <div className="flex-1 ml-[3.05rem] lg:ml-[15rem] transition-all duration-200">
        <main className="container py-12 px-6 max-w-4xl">
          <div className="prose prose-invert max-w-none">
            <h1 className="text-4xl sm:text-5xl font-sentient mb-6">
              Installation
            </h1>

            <div className="border border-foreground/20 rounded-lg p-6 bg-foreground/5 mb-8">
              <h2 className="text-2xl font-sentient mb-4">Prerequisites</h2>
              <ul className="space-y-2 font-mono text-sm text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-foreground/40 mt-1">•</span>
                  <span>Node.js 18+ and npm</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground/40 mt-1">•</span>
                  <span>Base Sepolia testnet wallet with ETH and USDC</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground/40 mt-1">•</span>
                  <span>Aptos testnet wallet with APT</span>
                </li>
              </ul>
            </div>

            <div className="border border-foreground/20 rounded-lg p-6 bg-foreground/5 mb-8">
              <h2 className="text-2xl font-sentient mb-4">Install via NPM</h2>
              <div className="space-y-4 font-mono text-sm">
                <div>
                  <p className="text-foreground/60 mb-2">Install the package:</p>
                  <code className="block p-3 bg-background border border-foreground/20 rounded text-foreground">
                    npm install @fluid-sdk/fluid-sdk
                  </code>
                </div>
                <div>
                  <p className="text-foreground/60 mb-2">Or using yarn:</p>
                  <code className="block p-3 bg-background border border-foreground/20 rounded text-foreground">
                    yarn add @fluid-sdk/fluid-sdk
                  </code>
                </div>
                <div>
                  <p className="text-foreground/60 mb-2">Or using pnpm:</p>
                  <code className="block p-3 bg-background border border-foreground/20 rounded text-foreground">
                    pnpm add @fluid-sdk/fluid-sdk
                  </code>
                </div>
              </div>
            </div>

            <div className="border border-foreground/20 rounded-lg p-6 bg-foreground/5 mb-8">
              <h2 className="text-2xl font-sentient mb-4">Configuration</h2>
              <p className="text-foreground/80 font-mono text-sm leading-relaxed mb-4">
                Create a <code className="px-1.5 py-0.5 bg-background border border-foreground/20 rounded">.env.local</code> or <code className="px-1.5 py-0.5 bg-background border border-foreground/20 rounded">.env</code> file in your project root:
              </p>
              <div className="space-y-4 font-mono text-sm">
                <div>
                  <code className="block p-4 bg-background border border-foreground/20 rounded text-foreground overflow-x-auto">
{`# REQUIRED: Base Sepolia Testnet
BASE_RPC_URL=https://sepolia.base.org
BASE_SPONSOR_PRIVATE_KEY=0x...your_private_key_here...

# REQUIRED: Aptos Testnet  
APTOS_RPC_URL=https://fullnode.testnet.aptoslabs.com/v1
APTOS_SPONSOR_PRIVATE_KEY=ed25519-priv-0x...your_private_key_here...

# REQUIRED: Network Type
NETWORK_TYPE=Testnet`}
                  </code>
                </div>
                <div className="border-l-2 border-yellow-500/50 pl-4 bg-yellow-500/5 p-3 rounded">
                  <p className="text-foreground/80 text-xs">
                    <strong>Note:</strong> Contract addresses are automatically handled by the Wormhole SDK. 
                    No manual configuration needed.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-foreground/20 rounded-lg p-6 bg-foreground/5 mb-8">
              <h2 className="text-2xl font-sentient mb-4">Environment Variables</h2>
              <div className="space-y-4 font-mono text-sm">
                <div>
                  <h3 className="text-lg font-mono uppercase mb-2 text-foreground/90">
                    Base Sepolia Configuration
                  </h3>
                  <ul className="space-y-2 text-foreground/70">
                    <li>
                      <code className="px-1.5 py-0.5 bg-background border border-foreground/20 rounded">BASE_RPC_URL</code>
                      <span className="ml-2">- RPC endpoint for Base Sepolia network</span>
                    </li>
                    <li>
                      <code className="px-1.5 py-0.5 bg-background border border-foreground/20 rounded">BASE_SPONSOR_PRIVATE_KEY</code>
                      <span className="ml-2">- Private key of the sponsor wallet (must have ETH for gas)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-mono uppercase mb-2 text-foreground/90">
                    Aptos Configuration
                  </h3>
                  <ul className="space-y-2 text-foreground/70">
                    <li>
                      <code className="px-1.5 py-0.5 bg-background border border-foreground/20 rounded">APTOS_RPC_URL</code>
                      <span className="ml-2">- RPC endpoint for Aptos testnet</span>
                    </li>
                    <li>
                      <code className="px-1.5 py-0.5 bg-background border border-foreground/20 rounded">APTOS_SPONSOR_PRIVATE_KEY</code>
                      <span className="ml-2">- Ed25519 private key of the sponsor wallet (must have APT for gas)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-mono uppercase mb-2 text-foreground/90">
                    Network Configuration
                  </h3>
                  <ul className="space-y-2 text-foreground/70">
                    <li>
                      <code className="px-1.5 py-0.5 bg-background border border-foreground/20 rounded">NETWORK_TYPE</code>
                      <span className="ml-2">- Set to "Testnet" or "Mainnet"</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border border-foreground/20 rounded-lg p-6 bg-foreground/5 mb-8">
              <h2 className="text-2xl font-sentient mb-4">Getting Testnet Tokens</h2>
              <div className="space-y-4 font-mono text-sm">
                <div>
                  <h3 className="text-lg font-mono uppercase mb-2 text-foreground/90">
                    Base Sepolia ETH
                  </h3>
                  <p className="text-foreground/70 mb-2">
                    Get Base Sepolia ETH from:
                  </p>
                  <a 
                    href="https://www.coinbase.com/faucets/base-ethereum-sepolia-faucet" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    https://www.coinbase.com/faucets/base-ethereum-sepolia-faucet
                  </a>
                </div>
                <div>
                  <h3 className="text-lg font-mono uppercase mb-2 text-foreground/90">
                    Base Sepolia USDC
                  </h3>
                  <p className="text-foreground/70">
                    You need testnet USDC on Base Sepolia to transfer. Obtain testnet USDC from Circle's 
                    testnet faucet or bridge from other testnets.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-mono uppercase mb-2 text-foreground/90">
                    Aptos Testnet APT
                  </h3>
                  <p className="text-foreground/70 mb-2">
                    Get Aptos testnet APT from:
                  </p>
                  <a 
                    href="https://faucet.devnet.aptoslabs.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    https://faucet.devnet.aptoslabs.com/
                  </a>
                </div>
              </div>
            </div>

            <div className="border border-foreground/20 rounded-lg p-6 bg-foreground/5">
              <h2 className="text-2xl font-sentient mb-4">Verify Installation</h2>
              <p className="text-foreground/80 font-mono text-sm leading-relaxed mb-4">
                After installation, verify that the package is correctly installed:
              </p>
              <code className="block p-4 bg-background border border-foreground/20 rounded text-foreground overflow-x-auto">
{`import { transferUsdcViaCctp } from '@fluid-sdk/fluid-sdk';

// If this imports without errors, installation is successful
console.log('Fluid SDK installed successfully!');`}
              </code>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

