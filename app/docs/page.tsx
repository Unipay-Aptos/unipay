"use client";

import { DocsSidebar } from "@/components/new/docs-sidebar";
import { HyperText } from "@/components/text-animations/hover";
import { Highlighter } from "@/components/text-animations/text-highlighter";
import { LineShadowText } from "@/components/text-animations/line-shadow";
import { CodeBlock } from "@/components/docs/code-block";
import { AnimatedSection } from "@/components/docs/animated-section";
import { motion } from "motion/react";

export default function DocsPage() {
  return (
    <div className="flex min-h-screen">
      <DocsSidebar />
      <div className="flex-1 ml-[3.05rem] transition-all duration-200 lg:ml-[15rem]">
        <main className="container max-w-4xl px-6 py-12">
          <div className="prose prose-invert max-w-none">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl font-sentient mb-6">
                <LineShadowText shadowColor="rgba(255, 255, 255, 0.3)">
                  Fluid Protocol
                </LineShadowText>{" "}
                <span className="font-light">SDK</span>
              </h1>
              <p className="text-xl text-foreground/70 mb-8 font-mono">
                Cross-Chain USDC Transfer: Base Sepolia → Aptos via Circle CCTP
              </p>
            </motion.div>

            <AnimatedSection delay={0.1}>
              <div className="border border-foreground/20 rounded-lg p-6 bg-foreground/5 mb-8 backdrop-blur-sm">
                <h2 className="text-2xl font-sentient mb-4">
                  <Highlighter color="#4F46E5" action="underline" isView>
                    What is Fluid Protocol?
                  </Highlighter>
                </h2>
                <p className="text-foreground/80 font-mono text-sm leading-relaxed">
                  Fluid Protocol is a <Highlighter color="#10B981" action="highlight" isView>Node.js + TypeScript SDK</Highlighter> for transferring USDC from Base Sepolia (EVM) 
                  to Aptos (Move) using <Highlighter color="#F59E0B" action="box" isView>Circle CCTP</Highlighter> (Cross-Chain Transfer Protocol) via the Wormhole SDK. 
                  This is the same method that Portal Bridge uses and is the only method that works for 
                  Base Sepolia → Aptos transfers.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="mb-8 grid gap-6 md:grid-cols-2">
                {[
                  { title: "Source Chain", desc: "Base Sepolia (EVM-compatible)" },
                  { title: "Destination Chain", desc: "Aptos (Move-based)" },
                  { title: "Protocol", desc: "Circle CCTP via Wormhole SDK" },
                  { title: "Token", desc: "USDC (6 decimals)" },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                    className="rounded-lg border border-foreground/20 bg-foreground/5 p-6 backdrop-blur-sm transition-all hover:border-foreground/40"
                  >
                    <h3 className="mb-3 text-lg font-mono uppercase">
                      <Highlighter color="#6366F1" action="circle" isView>
                        {item.title}
                      </Highlighter>
                    </h3>
                    <p className="font-mono text-sm text-foreground/60">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="mb-8 rounded-lg border border-foreground/20 bg-foreground/5 p-6 backdrop-blur-sm">
                <h2 className="mb-4 text-2xl font-sentient">
                  <Highlighter color="#8B5CF6" action="bracket" isView>
                    Key Features
                  </Highlighter>
                </h2>
                <ul className="space-y-3 font-mono text-sm">
                  {[
                    { label: "Circle CCTP Integration", desc: "Uses Circle's Cross-Chain Transfer Protocol" },
                    { label: "Wormhole SDK", desc: "Leverages official Wormhole SDK for CCTP support" },
                    { label: "Sponsor Wallet Model", desc: "All gas fees paid by sponsor wallets" },
                    { label: "Automatic Attestation Polling", desc: "SDK handles Circle attestation retrieval" },
                    { label: "Error Handling", desc: "Comprehensive checks and clear error messages" },
                    { label: "Type Safety", desc: "Full TypeScript implementation" },
                  ].map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.4, delay: 0.4 + idx * 0.08 }}
                      className="flex items-start gap-2"
                    >
                      <span className="mt-1 text-green-400">✓</span>
                      <span className="text-foreground/80">
                        <strong>{feature.label}:</strong> {feature.desc}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="rounded-lg border border-foreground/20 bg-foreground/5 p-6 backdrop-blur-sm">
                <h2 className="mb-4 text-2xl font-sentient">
                  <HyperText startOnView duration={1000} className="text-2xl font-sentient">
                    Quick Start
                  </HyperText>
                </h2>
                <div className="space-y-6 font-mono text-sm">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <p className="mb-3 text-foreground/60">
                      <Highlighter color="#3B82F6" action="highlight" isView>
                        Install the package:
                      </Highlighter>
                    </p>
                    <CodeBlock
                      code="npm install @fluid-sdk/fluid-sdk"
                      language="bash"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <p className="mb-3 text-foreground/60">
                      <Highlighter color="#3B82F6" action="highlight" isView>
                        Basic usage:
                      </Highlighter>
                    </p>
                    <CodeBlock
                      code={`import { transferUsdcViaCctp } from '@fluid-sdk/fluid-sdk';

const result = await transferUsdcViaCctp({
  amount: "1.0",
  fromChain: "BaseSepolia",
  toChain: "Aptos",
  recipient: aptosAddress
});`}
                      language="typescript"
                      filename="transfer.ts"
                    />
                  </motion.div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </main>
      </div>
    </div>
  );
}

