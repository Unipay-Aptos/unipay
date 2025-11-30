"use client";

import { DocsSidebar } from "@/components/new/docs-sidebar";
import { HyperText } from "@/components/text-animations/hover";
import { Highlighter } from "@/components/text-animations/text-highlighter";
import { CodeBlock } from "@/components/docs/code-block";
import { AnimatedSection } from "@/components/docs/animated-section";
import { motion } from "motion/react";

export default function InstallationPage() {
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
                  Installation
                </HyperText>
              </h1>
            </motion.div>

            <AnimatedSection delay={0.1}>
              <div className="mb-8 rounded-lg border border-foreground/20 bg-foreground/5 p-4 backdrop-blur-sm sm:p-6">
                <h2 className="mb-4 text-xl font-sentient sm:text-2xl">
                  <Highlighter color="#4F46E5" action="underline" isView>
                    Prerequisites
                  </Highlighter>
                </h2>
                <ul className="space-y-3 font-mono text-xs text-foreground/80 sm:text-sm">
                  {[
                    "Node.js 18+ and npm",
                    "Base Sepolia testnet wallet with ETH and USDC",
                    "Aptos testnet wallet with APT"
                  ].map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                      className="flex items-start gap-2"
                    >
                      <span className="text-green-400 mt-1">✓</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="mb-8 rounded-lg border border-foreground/20 bg-foreground/5 p-4 backdrop-blur-sm sm:p-6">
                <h2 className="mb-4 text-xl font-sentient sm:text-2xl">
                  <Highlighter color="#10B981" action="box" isView>
                    Install via NPM
                  </Highlighter>
                </h2>
                <div className="space-y-4 font-mono text-xs sm:space-y-6 sm:text-sm">
                  {[
                    { label: "Install the package:", code: "npm install @fluid-sdk/fluid-sdk", lang: "bash" },
                    { label: "Or using yarn:", code: "yarn add @fluid-sdk/fluid-sdk", lang: "bash" },
                    { label: "Or using pnpm:", code: "pnpm add @fluid-sdk/fluid-sdk", lang: "bash" }
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                    >
                      <p className="text-foreground/60 mb-3">
                        <Highlighter color="#3B82F6" action="highlight" isView>
                          {item.label}
                        </Highlighter>
                      </p>
                      <CodeBlock code={item.code} language={item.lang} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="mb-8 rounded-lg border border-foreground/20 bg-foreground/5 p-4 backdrop-blur-sm sm:p-6">
                <h2 className="mb-4 text-xl font-sentient sm:text-2xl">
                  <Highlighter color="#F59E0B" action="bracket" isView>
                    Configuration
                  </Highlighter>
                </h2>
                <p className="mb-4 font-mono text-xs leading-relaxed text-foreground/80 sm:text-sm">
                  Create a <Highlighter color="#6366F1" action="circle" isView>.env.local</Highlighter> or <Highlighter color="#6366F1" action="circle" isView>.env</Highlighter> file in your project root:
                </p>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <CodeBlock
                    code={`# REQUIRED: Base Sepolia Testnet
BASE_RPC_URL=https://sepolia.base.org
BASE_SPONSOR_PRIVATE_KEY=0x...your_private_key_here...

# REQUIRED: Aptos Testnet  
APTOS_RPC_URL=https://fullnode.testnet.aptoslabs.com/v1
APTOS_SPONSOR_PRIVATE_KEY=ed25519-priv-0x...your_private_key_here...

# REQUIRED: Network Type
NETWORK_TYPE=Testnet`}
                    language="env"
                    filename=".env"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="border-l-2 border-yellow-500/50 pl-4 bg-yellow-500/5 p-3 rounded mt-4"
                >
                  <p className="text-foreground/80 text-xs font-mono">
                    <strong>Note:</strong> Contract addresses are automatically handled by the Wormhole SDK. 
                    No manual configuration needed.
                  </p>
                </motion.div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="mb-8 rounded-lg border border-foreground/20 bg-foreground/5 p-4 backdrop-blur-sm sm:p-6">
                <h2 className="mb-4 text-xl font-sentient sm:text-2xl">
                  <Highlighter color="#8B5CF6" action="underline" isView>
                    Environment Variables
                  </Highlighter>
                </h2>
                <div className="space-y-4 font-mono text-xs sm:space-y-6 sm:text-sm">
                  {[
                    {
                      title: "Base Sepolia Configuration",
                      vars: [
                        { name: "BASE_RPC_URL", desc: "RPC endpoint for Base Sepolia network" },
                        { name: "BASE_SPONSOR_PRIVATE_KEY", desc: "Private key of the sponsor wallet (must have ETH for gas)" }
                      ]
                    },
                    {
                      title: "Aptos Configuration",
                      vars: [
                        { name: "APTOS_RPC_URL", desc: "RPC endpoint for Aptos testnet" },
                        { name: "APTOS_SPONSOR_PRIVATE_KEY", desc: "Ed25519 private key of the sponsor wallet (must have APT for gas)" }
                      ]
                    },
                    {
                      title: "Network Configuration",
                      vars: [
                        { name: "NETWORK_TYPE", desc: 'Set to "Testnet" or "Mainnet"' }
                      ]
                    }
                  ].map((section, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 + idx * 0.15 }}
                    >
                      <h3 className="mb-3 text-base font-mono uppercase text-foreground/90 sm:text-lg">
                        <Highlighter color="#6366F1" action="circle" isView>
                          {section.title}
                        </Highlighter>
                      </h3>
                      <ul className="space-y-2 text-xs text-foreground/70 sm:text-sm">
                        {section.vars.map((variable, varIdx) => (
                          <motion.li
                            key={varIdx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.6 + idx * 0.15 + varIdx * 0.1 }}
                          >
                            <code className="px-2 py-1 bg-background border border-foreground/20 rounded text-foreground/90">
                              {variable.name}
                            </code>
                            <span className="ml-2">{variable.desc}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <div className="mb-8 rounded-lg border border-foreground/20 bg-foreground/5 p-4 backdrop-blur-sm sm:p-6">
                <h2 className="mb-4 text-xl font-sentient sm:text-2xl">
                  <Highlighter color="#EF4444" action="box" isView>
                    Getting Testnet Tokens
                  </Highlighter>
                </h2>
                <div className="space-y-4 font-mono text-xs sm:space-y-6 sm:text-sm">
                  {[
                    {
                      title: "Base Sepolia ETH",
                      desc: "Get Base Sepolia ETH from:",
                      link: "https://www.coinbase.com/faucets/base-ethereum-sepolia-faucet",
                      linkText: "Base Sepolia Faucet"
                    },
                    {
                      title: "Base Sepolia USDC",
                      desc: "You need testnet USDC on Base Sepolia to transfer. Obtain testnet USDC from Circle's testnet faucet or bridge from other testnets."
                    },
                    {
                      title: "Aptos Testnet APT",
                      desc: "Get Aptos testnet APT from:",
                      link: "https://faucet.devnet.aptoslabs.com/",
                      linkText: "Aptos Faucet"
                    }
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                    >
                      <h3 className="mb-2 text-base font-mono uppercase text-foreground/90 sm:text-lg">
                        <Highlighter color="#10B981" action="highlight" isView>
                          {item.title}
                        </Highlighter>
                      </h3>
                      <p className="mb-2 text-xs text-foreground/70 sm:text-sm">{item.desc}</p>
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 underline"
                        >
                          {item.linkText}
                        </a>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <div className="rounded-lg border border-foreground/20 bg-foreground/5 p-4 backdrop-blur-sm sm:p-6">
                <h2 className="mb-4 text-xl font-sentient sm:text-2xl">
                  <Highlighter color="#3B82F6" action="underline" isView>
                    Verify Installation
                  </Highlighter>
                </h2>
                <p className="mb-4 font-mono text-xs leading-relaxed text-foreground/80 sm:text-sm">
                  After installation, verify that the package is correctly installed:
                </p>
                <CodeBlock
                  code={`import { transferUsdcViaCctp } from '@fluid-sdk/fluid-sdk';

// If this imports without errors, installation is successful
console.log('Fluid SDK installed successfully!');`}
                  language="typescript"
                  filename="verify.ts"
                />
              </div>
            </AnimatedSection>
          </div>
        </main>
      </div>
    </div>
  );
}
