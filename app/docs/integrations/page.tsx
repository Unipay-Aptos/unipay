"use client";

import { DocsSidebar } from "@/components/new/docs-sidebar";
import { Badge } from "@/components/ui/badge";
import { HyperText } from "@/components/text-animations/hover";
import { Highlighter } from "@/components/text-animations/text-highlighter";
import { CodeBlock } from "@/components/docs/code-block";
import { AnimatedSection } from "@/components/docs/animated-section";
import { motion } from "motion/react";

export default function IntegrationsPage() {
  return (
    <div className="flex min-h-screen">
      <DocsSidebar />
      <div className="flex-1 transition-all duration-200 md:ml-[3.05rem] lg:ml-[15rem]">
        <main className="container max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
          <div className="prose prose-invert max-w-none">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="mb-6 text-3xl font-sentient sm:text-4xl lg:text-5xl">
                <HyperText startOnView duration={1200} className="text-3xl font-sentient sm:text-4xl lg:text-5xl">
                  Integrations
                </HyperText>
              </h1>
              <p className="mb-8 font-mono text-base text-foreground/70 sm:text-lg lg:text-xl">
                Supported chains and integration guides
              </p>
            </motion.div>

            <AnimatedSection delay={0.1}>
              <div className="mb-8 rounded-lg border border-foreground/20 bg-foreground/5 p-4 backdrop-blur-sm sm:p-6">
                <div className="mb-4 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                  <h2 className="text-xl font-sentient sm:text-2xl">
                    <Highlighter color="#10B981" action="box" isView>
                      Base
                    </Highlighter>
                  </h2>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                    Available
                  </Badge>
                </div>
                <p className="mb-4 font-mono text-xs leading-relaxed text-foreground/80 sm:text-sm">
                  Base is an <Highlighter color="#3B82F6" action="highlight" isView>EVM-compatible Layer 2 blockchain</Highlighter> built on Ethereum. Fluid Protocol supports 
                  USDC transfers from Base Sepolia (testnet) to Aptos.
                </p>
                
                <div className="space-y-4 font-mono text-xs sm:space-y-6 sm:text-sm">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h3 className="mb-3 text-base font-mono uppercase text-foreground/90 sm:text-lg">
                      <Highlighter color="#6366F1" action="circle" isView>
                        Chain Information
                      </Highlighter>
                    </h3>
                    <ul className="space-y-2 text-xs text-foreground/70 sm:text-sm">
                      {[
                        { label: "Chain ID", value: "84532 (Base Sepolia)" },
                        { label: "Wormhole Chain ID", value: "30" },
                        { label: "RPC URL", value: "https://sepolia.base.org" },
                        { label: "Explorer", value: "https://sepolia.basescan.org" }
                      ].map((item, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.3 + idx * 0.1 }}
                        >
                          <strong className="text-foreground/90">{item.label}:</strong> {item.value}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <h3 className="mb-3 text-base font-mono uppercase text-foreground/90 sm:text-lg">
                      <Highlighter color="#F59E0B" action="underline" isView>
                        Configuration
                      </Highlighter>
                    </h3>
                    <CodeBlock
                      code={`BASE_RPC_URL=https://sepolia.base.org
BASE_SPONSOR_PRIVATE_KEY=0x...your_private_key_here...
NETWORK_TYPE=Testnet`}
                      language="env"
                      filename=".env"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <h3 className="mb-3 text-base font-mono uppercase text-foreground/90 sm:text-lg">
                      <Highlighter color="#8B5CF6" action="bracket" isView>
                        Usage Example
                      </Highlighter>
                    </h3>
                    <CodeBlock
                      code={`import { transferUsdcViaCctp } from '@fluid-sdk/fluid-sdk';

const result = await transferUsdcViaCctp({
  amount: "1.0",
  fromChain: "BaseSepolia",
  toChain: "Aptos",
  recipient: aptosAddress
});`}
                      language="typescript"
                      filename="base-transfer.ts"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <h3 className="mb-3 text-base font-mono uppercase text-foreground/90 sm:text-lg">
                      <Highlighter color="#EF4444" action="highlight" isView>
                        Getting Testnet Tokens
                      </Highlighter>
                    </h3>
                    <ul className="space-y-2 text-xs text-foreground/70 sm:text-sm">
                      <li>
                        <strong className="text-foreground/90">ETH:</strong>{" "}
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
                        <strong className="text-foreground/90">USDC:</strong> Obtain testnet USDC from Circle's testnet faucet
                      </li>
                    </ul>
                  </motion.div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="mb-8 rounded-lg border border-foreground/20 bg-foreground/5 p-4 backdrop-blur-sm sm:p-6">
                <div className="mb-4 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                  <h2 className="text-xl font-sentient sm:text-2xl">
                    <Highlighter color="#F59E0B" action="box" isView>
                      Solana
                    </Highlighter>
                  </h2>
                  <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                    Coming Soon
                  </Badge>
                </div>
                <p className="mb-4 font-mono text-xs leading-relaxed text-foreground/80 sm:text-sm">
                  Solana integration is currently under development. This will enable USDC transfers from 
                  Solana to Aptos and other supported chains.
                </p>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="rounded border-l-2 border-yellow-500/50 bg-yellow-500/5 p-3 pl-4"
                >
                  <p className="font-mono text-xs text-foreground/80 sm:text-sm">
                    <strong>Status:</strong> In development. Expected Q2 2024.
                  </p>
                </motion.div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="mb-8 rounded-lg border border-foreground/20 bg-foreground/5 p-4 backdrop-blur-sm sm:p-6">
                <div className="mb-4 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                  <h2 className="text-xl font-sentient sm:text-2xl">
                    <Highlighter color="#8B5CF6" action="bracket" isView>
                      Additional Chains
                    </Highlighter>
                  </h2>
                  <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                    Planned
                  </Badge>
                </div>
                <p className="mb-4 font-mono text-xs leading-relaxed text-foreground/80 sm:text-sm">
                  We're actively working on expanding support to additional chains. The following are planned 
                  for future releases:
                </p>
                
                <div className="space-y-3 font-mono text-xs sm:text-sm">
                  {[
                    "Ethereum Mainnet",
                    "Polygon",
                    "Arbitrum",
                    "Optimism",
                    "Avalanche"
                  ].map((chain, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <span className="text-foreground/40">•</span>
                      <span className="text-foreground/70">{chain}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="mb-8 rounded-lg border border-foreground/20 bg-foreground/5 p-4 backdrop-blur-sm sm:p-6">
                <h2 className="mb-4 text-xl font-sentient sm:text-2xl">
                  <Highlighter color="#10B981" action="underline" isView>
                    Chain Requirements
                  </Highlighter>
                </h2>
                <p className="mb-4 font-mono text-xs leading-relaxed text-foreground/80 sm:text-sm">
                  For a chain to be supported by Fluid Protocol, it must:
                </p>
                <ul className="space-y-3 font-mono text-xs text-foreground/70 sm:text-sm">
                  {[
                    "Support Circle CCTP contracts",
                    "Have Wormhole SDK support",
                    "Support USDC (native or bridged)",
                    "Have reliable RPC endpoints"
                  ].map((req, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
                      className="flex items-start gap-2"
                    >
                      <span className="text-green-400 mt-1">✓</span>
                      <span>{req}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <div className="rounded-lg border border-foreground/20 bg-foreground/5 p-4 backdrop-blur-sm sm:p-6">
                <h2 className="mb-4 text-xl font-sentient sm:text-2xl">
                  <Highlighter color="#3B82F6" action="box" isView>
                    Request New Chain Support
                  </Highlighter>
                </h2>
                <p className="mb-4 font-mono text-xs leading-relaxed text-foreground/80 sm:text-sm">
                  Interested in seeing your chain supported? We're always looking to expand our integration 
                  coverage. Reach out to us:
                </p>
                <ul className="space-y-3 font-mono text-xs text-foreground/70 sm:text-sm">
                  {[
                    { label: "GitHub", link: "https://github.com/fluid-labs/fluid-sdk", text: "Open an issue" },
                    { label: "Discord", text: "Join our community to discuss integrations" },
                    { label: "Email", text: "integrations@fluid.xyz" }
                  ].map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.6 + idx * 0.1 }}
                    >
                      <strong className="text-foreground/90">{item.label}:</strong>{" "}
                      {item.link ? (
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 underline"
                        >
                          {item.text}
                        </a>
                      ) : (
                        <span>{item.text}</span>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </main>
      </div>
    </div>
  );
}
