"use client";

import { DocsSidebar } from "@/components/new/docs-sidebar";
import { HyperText } from "@/components/text-animations/hover";
import { Highlighter } from "@/components/text-animations/text-highlighter";
import { LineShadowText } from "@/components/text-animations/line-shadow";
import { AnimatedSection } from "@/components/docs/animated-section";
import { motion } from "motion/react";

export default function IntroductionPage() {
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
                  Introduction
                </HyperText>
              </h1>
            </motion.div>

            <AnimatedSection delay={0.1}>
              <div className="mb-8 rounded-lg border border-foreground/20 bg-foreground/5 p-4 backdrop-blur-sm sm:p-6">
                <h2 className="mb-4 text-xl font-sentient sm:text-2xl">
                  <Highlighter color="#4F46E5" action="underline" isView>
                    Why Do We Need Fluid Protocol?
                  </Highlighter>
                </h2>
                <p className="mb-4 font-mono text-xs leading-relaxed text-foreground/80 sm:text-sm">
                  Cross-chain transfers between <Highlighter color="#10B981" action="highlight" isView>EVM and Move-based blockchains</Highlighter> have historically been 
                  challenging. Traditional bridge solutions often don't support transfers between these 
                  fundamentally different blockchain architectures, leaving developers with limited options 
                  for moving assets like USDC between ecosystems.
                </p>
                <p className="font-mono text-xs leading-relaxed text-foreground/80 sm:text-sm">
                  Fluid Protocol solves this by providing a <Highlighter color="#F59E0B" action="box" isView>seamless, production-ready SDK</Highlighter> that handles 
                  the complex orchestration of cross-chain transfers using Circle's proven CCTP infrastructure 
                  and Wormhole's universal messaging protocol.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="mb-8 rounded-lg border border-foreground/20 bg-foreground/5 p-4 backdrop-blur-sm sm:p-6">
                <h2 className="mb-4 text-xl font-sentient sm:text-2xl">
                  <Highlighter color="#8B5CF6" action="bracket" isView>
                    What Problems Does It Solve?
                  </Highlighter>
                </h2>
                <div className="space-y-4 font-mono text-xs sm:space-y-6 sm:text-sm">
                  {[
                    {
                      num: "1",
                      title: "Cross-Chain Compatibility",
                      desc: "The traditional Wormhole Token Bridge (message_type = 1) does NOT work for Base Sepolia → Aptos transfers. Fluid Protocol uses Circle CCTP → Wormhole Attestation → Aptos completion, which is the only method that works for this route.",
                      highlight: "NOT work"
                    },
                    {
                      num: "2",
                      title: "Complex Integration Overhead",
                      desc: "Without Fluid Protocol, developers need to manually:",
                      list: [
                        "Interact with Circle TokenMessenger contracts",
                        "Handle USDC approval and burning/locking",
                        "Poll Circle's Attestation API",
                        "Manage attestation verification",
                        "Complete transfers on the destination chain",
                        "Handle errors and edge cases"
                      ]
                    },
                    {
                      num: "3",
                      title: "Gas Fee Management",
                      desc: "Fluid Protocol's sponsor wallet model eliminates the need for users to manage gas fees across multiple chains. All transaction costs are handled automatically by sponsor wallets, providing a seamless user experience."
                    },
                    {
                      num: "4",
                      title: "Attestation Handling",
                      desc: "Circle attestations can take 1-3 minutes (sometimes up to 5-10 minutes) to be generated. Fluid Protocol automatically polls and retrieves attestations, eliminating the need for manual polling logic."
                    }
                  ].map((problem, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                      className="border-l-2 border-foreground/30 pl-4"
                    >
                      <h3 className="mb-2 text-base font-mono uppercase text-foreground/90 sm:text-lg">
                        <Highlighter color="#6366F1" action="circle" isView>
                          {problem.num}. {problem.title}
                        </Highlighter>
                      </h3>
                      <p className="leading-relaxed text-foreground/70 text-xs sm:text-sm">
                        {problem.highlight ? (
                          <>
                            {problem.desc.split(problem.highlight)[0]}
                            <Highlighter color="#EF4444" action="strike-through" isView>
                              {problem.highlight}
                            </Highlighter>
                            {problem.desc.split(problem.highlight)[1]}
                          </>
                        ) : (
                          problem.desc
                        )}
                      </p>
                      {problem.list && (
                        <ul className="list-disc list-inside mt-3 space-y-2 text-foreground/70 ml-4">
                          {problem.list.map((item, itemIdx) => (
                            <motion.li
                              key={itemIdx}
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: 0.5 + idx * 0.1 + itemIdx * 0.05 }}
                            >
                              {item}
                            </motion.li>
                          ))}
                        </ul>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="mb-8 rounded-lg border border-foreground/20 bg-foreground/5 p-4 backdrop-blur-sm sm:p-6">
                <h2 className="mb-4 text-xl font-sentient sm:text-2xl">
                  <LineShadowText shadowColor="rgba(139, 92, 246, 0.5)">
                    Why Use Circle CCTP?
                  </LineShadowText>
                </h2>
                <div className="space-y-4 font-mono text-xs sm:text-sm">
                  <p className="text-foreground/80 leading-relaxed">
                    Circle's Cross-Chain Transfer Protocol (CCTP) is the same infrastructure powering <Highlighter color="#10B981" action="highlight" isView>Portal Bridge</Highlighter>, 
                    one of the most trusted cross-chain bridges in the ecosystem. CCTP provides:
                  </p>
                  <ul className="list-disc list-inside space-y-3 text-foreground/70 ml-4">
                    {[
                      { label: "Security", desc: "Cryptographically signed attestations by Circle's infrastructure" },
                      { label: "Reliability", desc: "Battle-tested infrastructure used by major protocols" },
                      { label: "Speed", desc: "Transfers typically complete in 1-3 minutes" },
                      { label: "Native USDC", desc: "Direct minting/burning without wrapped tokens" }
                    ].map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
                      >
                        <strong className="text-foreground/90">{item.label}:</strong> {item.desc}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="mb-8 rounded-lg border border-foreground/20 bg-foreground/5 p-4 backdrop-blur-sm sm:p-6">
                <h2 className="mb-4 text-xl font-sentient sm:text-2xl">
                  <HyperText startOnView duration={1000} className="text-xl font-sentient sm:text-2xl">
                    How It Works
                  </HyperText>
                </h2>
                <div className="space-y-4 font-mono text-xs sm:space-y-6 sm:text-sm">
                  {[
                    {
                      step: "Step 1: Initiate Transfer on Base Sepolia",
                      desc: "SDK creates CircleTransfer object via Wormhole SDK, calls Circle TokenMessenger contract, burns/locks USDC on Base Sepolia, and MessageTransmitter sends message to Circle.",
                      color: "#3B82F6"
                    },
                    {
                      step: "Step 2: Circle Attestation",
                      desc: "Circle observes the transfer event, generates a cryptographically signed attestation (typically available within 1-3 minutes), and SDK polls Circle Attestation API automatically.",
                      color: "#10B981"
                    },
                    {
                      step: "Step 3: Complete Transfer on Aptos",
                      desc: "SDK retrieves Circle attestation, calls Circle CCTP contracts on Aptos, verifies attestation and mints/releases USDC. USDC appears in recipient's Aptos wallet.",
                      color: "#F59E0B"
                    }
                  ].map((step, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 + idx * 0.15 }}
                      className="border-l-4 pl-4"
                      style={{ borderColor: step.color }}
                    >
                      <h3 className="mb-2 text-base font-mono uppercase text-foreground/90 sm:text-lg">
                        <Highlighter color={step.color} action="box" isView>
                          {step.step}
                        </Highlighter>
                      </h3>
                      <p className="leading-relaxed text-foreground/70 text-xs sm:text-sm">
                        {step.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <div className="rounded-lg border border-foreground/20 bg-foreground/5 p-4 backdrop-blur-sm sm:p-6">
                <h2 className="mb-4 text-xl font-sentient sm:text-2xl">
                  <Highlighter color="#EF4444" action="underline" isView>
                    Key Differences from TokenBridge
                  </Highlighter>
                </h2>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="overflow-x-auto -mx-4 sm:mx-0"
                >
                  <table className="w-full font-mono text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b border-foreground/20">
                        <th className="px-2 py-2 text-left text-foreground/90 sm:px-4 sm:py-3">Aspect</th>
                        <th className="px-2 py-2 text-left text-foreground/90 sm:px-4 sm:py-3">TokenBridge (Old)</th>
                        <th className="px-2 py-2 text-left text-foreground/90 sm:px-4 sm:py-3">CCTP (Current)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { aspect: "Protocol", old: "Wormhole Token Bridge", new: "Circle CCTP via Wormhole" },
                        { aspect: "Message Type", old: "VAA (Verified Action Approval)", new: "Circle Attestation" },
                        { aspect: "Base Sepolia → Aptos", old: "❌ Not supported", new: "✅ Supported", highlight: true },
                        { aspect: "Attestation Source", old: "Wormhole Guardians", new: "Circle Infrastructure" },
                        { aspect: "Speed", old: "1-2 minutes", new: "1-3 minutes" }
                      ].map((row, idx) => (
                        <motion.tr
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.7 + idx * 0.1 }}
                          className="border-b border-foreground/10 hover:bg-foreground/5"
                        >
                          <td className="px-2 py-2 text-foreground/70 sm:px-4 sm:py-3">{row.aspect}</td>
                          <td className="px-2 py-2 text-foreground/70 sm:px-4 sm:py-3">{row.old}</td>
                          <td className={`px-2 py-2 sm:px-4 sm:py-3 ${row.highlight ? 'text-green-400 font-semibold' : 'text-foreground/70'}`}>
                            {row.new}
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </main>
      </div>
    </div>
  );
}
