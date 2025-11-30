import { DocsSidebar } from "@/components/new/docs-sidebar";

export default function IntroductionPage() {
  return (
    <div className="flex min-h-screen">
      <DocsSidebar />
      <div className="flex-1 ml-[3.05rem] lg:ml-[15rem] transition-all duration-200">
        <main className="container py-12 px-6 max-w-4xl">
          <div className="prose prose-invert max-w-none">
            <h1 className="text-4xl sm:text-5xl font-sentient mb-6">
              Introduction
            </h1>

            <div className="border border-foreground/20 rounded-lg p-6 bg-foreground/5 mb-8">
              <h2 className="text-2xl font-sentient mb-4">Why Do We Need Fluid Protocol?</h2>
              <p className="text-foreground/80 font-mono text-sm leading-relaxed mb-4">
                Cross-chain transfers between EVM and Move-based blockchains have historically been 
                challenging. Traditional bridge solutions often don't support transfers between these 
                fundamentally different blockchain architectures, leaving developers with limited options 
                for moving assets like USDC between ecosystems.
              </p>
              <p className="text-foreground/80 font-mono text-sm leading-relaxed">
                Fluid Protocol solves this by providing a seamless, production-ready SDK that handles 
                the complex orchestration of cross-chain transfers using Circle's proven CCTP infrastructure 
                and Wormhole's universal messaging protocol.
              </p>
            </div>

            <div className="border border-foreground/20 rounded-lg p-6 bg-foreground/5 mb-8">
              <h2 className="text-2xl font-sentient mb-4">What Problems Does It Solve?</h2>
              <div className="space-y-4 font-mono text-sm">
                <div>
                  <h3 className="text-lg font-mono uppercase mb-2 text-foreground/90">
                    1. Cross-Chain Compatibility
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    The traditional Wormhole Token Bridge (message_type = 1) does <strong>NOT</strong> work 
                    for Base Sepolia → Aptos transfers. Fluid Protocol uses Circle CCTP → Wormhole Attestation 
                    → Aptos completion, which is the only method that works for this route.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-mono uppercase mb-2 text-foreground/90">
                    2. Complex Integration Overhead
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Without Fluid Protocol, developers need to manually:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-foreground/70 ml-4">
                    <li>Interact with Circle TokenMessenger contracts</li>
                    <li>Handle USDC approval and burning/locking</li>
                    <li>Poll Circle's Attestation API</li>
                    <li>Manage attestation verification</li>
                    <li>Complete transfers on the destination chain</li>
                    <li>Handle errors and edge cases</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-mono uppercase mb-2 text-foreground/90">
                    3. Gas Fee Management
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Fluid Protocol's sponsor wallet model eliminates the need for users to manage gas fees 
                    across multiple chains. All transaction costs are handled automatically by sponsor wallets, 
                    providing a seamless user experience.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-mono uppercase mb-2 text-foreground/90">
                    4. Attestation Handling
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Circle attestations can take 1-3 minutes (sometimes up to 5-10 minutes) to be generated. 
                    Fluid Protocol automatically polls and retrieves attestations, eliminating the need for 
                    manual polling logic.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-foreground/20 rounded-lg p-6 bg-foreground/5 mb-8">
              <h2 className="text-2xl font-sentient mb-4">Why Use Circle CCTP?</h2>
              <div className="space-y-4 font-mono text-sm">
                <p className="text-foreground/80 leading-relaxed">
                  Circle's Cross-Chain Transfer Protocol (CCTP) is the same infrastructure powering Portal Bridge, 
                  one of the most trusted cross-chain bridges in the ecosystem. CCTP provides:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/70 ml-4">
                  <li><strong>Security:</strong> Cryptographically signed attestations by Circle's infrastructure</li>
                  <li><strong>Reliability:</strong> Battle-tested infrastructure used by major protocols</li>
                  <li><strong>Speed:</strong> Transfers typically complete in 1-3 minutes</li>
                  <li><strong>Native USDC:</strong> Direct minting/burning without wrapped tokens</li>
                </ul>
              </div>
            </div>

            <div className="border border-foreground/20 rounded-lg p-6 bg-foreground/5 mb-8">
              <h2 className="text-2xl font-sentient mb-4">How It Works</h2>
              <div className="space-y-6 font-mono text-sm">
                <div className="border-l-2 border-foreground/30 pl-4">
                  <h3 className="text-lg font-mono uppercase mb-2 text-foreground/90">
                    Step 1: Initiate Transfer on Base Sepolia
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    SDK creates CircleTransfer object via Wormhole SDK, calls Circle TokenMessenger contract, 
                    burns/locks USDC on Base Sepolia, and MessageTransmitter sends message to Circle.
                  </p>
                </div>
                <div className="border-l-2 border-foreground/30 pl-4">
                  <h3 className="text-lg font-mono uppercase mb-2 text-foreground/90">
                    Step 2: Circle Attestation
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Circle observes the transfer event, generates a cryptographically signed attestation 
                    (typically available within 1-3 minutes), and SDK polls Circle Attestation API automatically.
                  </p>
                </div>
                <div className="border-l-2 border-foreground/30 pl-4">
                  <h3 className="text-lg font-mono uppercase mb-2 text-foreground/90">
                    Step 3: Complete Transfer on Aptos
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    SDK retrieves Circle attestation, calls Circle CCTP contracts on Aptos, verifies attestation 
                    and mints/releases USDC. USDC appears in recipient's Aptos wallet.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-foreground/20 rounded-lg p-6 bg-foreground/5">
              <h2 className="text-2xl font-sentient mb-4">Key Differences from TokenBridge</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm font-mono">
                  <thead>
                    <tr className="border-b border-foreground/20">
                      <th className="text-left py-3 px-4 text-foreground/90">Aspect</th>
                      <th className="text-left py-3 px-4 text-foreground/90">TokenBridge (Old)</th>
                      <th className="text-left py-3 px-4 text-foreground/90">CCTP (Current)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-foreground/10">
                      <td className="py-3 px-4 text-foreground/70">Protocol</td>
                      <td className="py-3 px-4 text-foreground/70">Wormhole Token Bridge</td>
                      <td className="py-3 px-4 text-foreground/70">Circle CCTP via Wormhole</td>
                    </tr>
                    <tr className="border-b border-foreground/10">
                      <td className="py-3 px-4 text-foreground/70">Message Type</td>
                      <td className="py-3 px-4 text-foreground/70">VAA (Verified Action Approval)</td>
                      <td className="py-3 px-4 text-foreground/70">Circle Attestation</td>
                    </tr>
                    <tr className="border-b border-foreground/10">
                      <td className="py-3 px-4 text-foreground/70">Base Sepolia → Aptos</td>
                      <td className="py-3 px-4 text-red-400">❌ Not supported</td>
                      <td className="py-3 px-4 text-green-400">✅ Supported</td>
                    </tr>
                    <tr className="border-b border-foreground/10">
                      <td className="py-3 px-4 text-foreground/70">Attestation Source</td>
                      <td className="py-3 px-4 text-foreground/70">Wormhole Guardians</td>
                      <td className="py-3 px-4 text-foreground/70">Circle Infrastructure</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-foreground/70">Speed</td>
                      <td className="py-3 px-4 text-foreground/70">1-2 minutes</td>
                      <td className="py-3 px-4 text-foreground/70">1-3 minutes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

