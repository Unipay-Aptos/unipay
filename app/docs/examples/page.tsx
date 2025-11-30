"use client";

import { DocsSidebar } from "@/components/new/docs-sidebar";
import { HyperText } from "@/components/text-animations/hover";
import { Highlighter } from "@/components/text-animations/text-highlighter";
import { CodeBlock } from "@/components/docs/code-block";
import { AnimatedSection } from "@/components/docs/animated-section";
import { motion } from "motion/react";

export default function ExamplesPage() {
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
                  Examples
                </HyperText>
              </h1>
            </motion.div>

            <AnimatedSection delay={0.1}>
              <div className="mb-8 rounded-lg border border-foreground/20 bg-foreground/5 p-4 backdrop-blur-sm sm:p-6">
                <h2 className="mb-4 text-xl font-sentient sm:text-2xl">
                  <Highlighter color="#4F46E5" action="underline" isView>
                    Basic Transfer
                  </Highlighter>
                </h2>
                <p className="text-foreground/80 font-mono text-sm leading-relaxed mb-4">
                  The simplest way to transfer USDC from Base Sepolia to Aptos:
                </p>
                <CodeBlock
                  code={`import { transferUsdcViaCctp } from '@fluid-sdk/fluid-sdk';

async function transfer() {
  try {
    const result = await transferUsdcViaCctp({
      amount: "1.0", // USDC amount (6 decimals)
      fromChain: "BaseSepolia",
      toChain: "Aptos",
      recipient: "0xc3e2a21da9f68dcd3ad8668c8fb72ede9f46fea67652fbffa9db8f8af0c612cf"
    });

    console.log('Transfer completed:', result);
  } catch (error) {
    console.error('Transfer failed:', error);
  }
}

transfer();`}
                  language="typescript"
                  filename="transfer.ts"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="mb-8 rounded-lg border border-foreground/20 bg-foreground/5 p-4 backdrop-blur-sm sm:p-6">
                <h2 className="mb-4 text-xl font-sentient sm:text-2xl">
                  <Highlighter color="#10B981" action="box" isView>
                    Transfer with Custom Recipient
                  </Highlighter>
                </h2>
                <p className="mb-4 font-mono text-xs leading-relaxed text-foreground/80 sm:text-sm">
                  Specify a custom Aptos address as the recipient:
                </p>
                <CodeBlock
                  code={`import { transferUsdcViaCctp } from '@fluid-sdk/fluid-sdk';

const result = await transferUsdcViaCctp({
  amount: "0.5",
  fromChain: "BaseSepolia",
  toChain: "Aptos",
  recipient: "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef"
});

console.log('Transfer ID:', result.transferId);
console.log('Source TX:', result.sourceTx);
console.log('Destination TX:', result.destinationTx);`}
                  language="typescript"
                  filename="custom-recipient.ts"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="mb-8 rounded-lg border border-foreground/20 bg-foreground/5 p-4 backdrop-blur-sm sm:p-6">
                <h2 className="mb-4 text-xl font-sentient sm:text-2xl">
                  <Highlighter color="#F59E0B" action="bracket" isView>
                    Error Handling
                  </Highlighter>
                </h2>
                <p className="mb-4 font-mono text-xs leading-relaxed text-foreground/80 sm:text-sm">
                  Comprehensive error handling example:
                </p>
                <CodeBlock
                  code={`import { transferUsdcViaCctp } from '@fluid-sdk/fluid-sdk';

async function transferWithErrorHandling() {
  try {
    const result = await transferUsdcViaCctp({
      amount: "1.0",
      fromChain: "BaseSepolia",
      toChain: "Aptos",
      recipient: aptosAddress
    });

    console.log('✅ Transfer successful!');
    console.log('Transfer ID:', result.transferId);
    
  } catch (error) {
    if (error.message.includes('Insufficient')) {
      console.error('❌ Insufficient balance');
    } else if (error.message.includes('Attestation')) {
      console.error('❌ Attestation timeout - try again in a few minutes');
    } else if (error.message.includes('Network')) {
      console.error('❌ Network error - check RPC endpoints');
    } else {
      console.error('❌ Transfer failed:', error.message);
    }
  }
}`}
                  language="typescript"
                  filename="error-handling.ts"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="mb-8 rounded-lg border border-foreground/20 bg-foreground/5 p-4 backdrop-blur-sm sm:p-6">
                <h2 className="mb-4 text-xl font-sentient sm:text-2xl">
                  <Highlighter color="#8B5CF6" action="circle" isView>
                    CLI Usage
                  </Highlighter>
                </h2>
                <p className="mb-4 font-mono text-xs leading-relaxed text-foreground/80 sm:text-sm">
                  Run transfers directly from the command line:
                </p>
                <div className="space-y-4 font-mono text-xs sm:text-sm">
                  {[
                    {
                      label: "Transfer 1.0 USDC (uses sponsor wallet as recipient):",
                      code: "npx tsx src/runCctp.ts --amount 1.0"
                    },
                    {
                      label: "Transfer 0.5 USDC to a specific Aptos address:",
                      code: "npx tsx src/runCctp.ts --amount 0.5 --to 0xc3e2a21da9f68dcd3ad8668c8fb72ede9f46fea67652fbffa9db8f8af0c612cf"
                    }
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                    >
                      <p className="text-foreground/60 mb-3">
                        <Highlighter color="#3B82F6" action="highlight" isView>
                          {item.label}
                        </Highlighter>
                      </p>
                      <CodeBlock code={item.code} language="bash" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <div className="mb-8 rounded-lg border border-foreground/20 bg-foreground/5 p-4 backdrop-blur-sm sm:p-6">
                <h2 className="mb-4 text-xl font-sentient sm:text-2xl">
                  <Highlighter color="#EF4444" action="underline" isView>
                    TypeScript Types
                  </Highlighter>
                </h2>
                <p className="mb-4 font-mono text-xs leading-relaxed text-foreground/80 sm:text-sm">
                  Full TypeScript support with type definitions:
                </p>
                <CodeBlock
                  code={`import { transferUsdcViaCctp, TransferResult } from '@fluid-sdk/fluid-sdk';

interface TransferParams {
  amount: string;
  fromChain: "BaseSepolia" | "Base" | "Ethereum";
  toChain: "Aptos";
  recipient?: string; // Optional, defaults to sponsor wallet
}

async function typedTransfer(): Promise<TransferResult> {
  const params: TransferParams = {
    amount: "1.0",
    fromChain: "BaseSepolia",
    toChain: "Aptos",
    recipient: "0x..."
  };

  const result: TransferResult = await transferUsdcViaCctp(params);
  return result;
}`}
                  language="typescript"
                  filename="types.ts"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <div className="mb-8 rounded-lg border border-foreground/20 bg-foreground/5 p-4 backdrop-blur-sm sm:p-6">
                <h2 className="mb-4 text-xl font-sentient sm:text-2xl">
                  <Highlighter color="#6366F1" action="box" isView>
                    Advanced: Custom Configuration
                  </Highlighter>
                </h2>
                <p className="mb-4 font-mono text-xs leading-relaxed text-foreground/80 sm:text-sm">
                  For advanced use cases, you can configure custom signers and SDK instances:
                </p>
                <CodeBlock
                  code={`import { 
  transferUsdcViaCctp,
  getEvmSigner,
  getAptosSigner,
  toEvmSdkSigner,
  toAptosSdkSigner
} from '@fluid-sdk/fluid-sdk';
import { ethers } from 'ethers';

// Create custom signers
const evmSigner = getEvmSigner(
  process.env.BASE_RPC_URL!,
  process.env.BASE_SPONSOR_PRIVATE_KEY!
);

const aptosSigner = getAptosSigner(
  process.env.APTOS_RPC_URL!,
  process.env.APTOS_SPONSOR_PRIVATE_KEY!
);

// Wrap for SDK
const evmSdkSigner = toEvmSdkSigner(evmSigner);
const aptosSdkSigner = toAptosSdkSigner(aptosSigner);

// Use custom signers in transfer
const result = await transferUsdcViaCctp({
  amount: "1.0",
  fromChain: "BaseSepolia",
  toChain: "Aptos",
  recipient: aptosAddress,
  // Custom signers can be passed here if needed
});`}
                  language="typescript"
                  filename="advanced.ts"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.7}>
              <div className="rounded-lg border border-foreground/20 bg-foreground/5 p-4 backdrop-blur-sm sm:p-6">
                <h2 className="mb-4 text-xl font-sentient sm:text-2xl">
                  <Highlighter color="#10B981" action="bracket" isView>
                    Transfer Result
                  </Highlighter>
                </h2>
                <p className="mb-4 font-mono text-xs leading-relaxed text-foreground/80 sm:text-sm">
                  The transfer function returns a result object with the following structure:
                </p>
                <CodeBlock
                  code={`interface TransferResult {
  transferId: string;           // Unique transfer identifier
  sourceTx: string;            // Base Sepolia transaction hash
  destinationTx?: string;      // Aptos transaction hash (after completion)
  attestation?: string;        // Circle attestation message
  status: 'initiated' | 'completed' | 'failed';
  amount: string;              // Transfer amount in USDC
  fromChain: string;           // Source chain
  toChain: string;             // Destination chain
  recipient: string;           // Recipient address
}`}
                  language="typescript"
                  filename="types.ts"
                />
              </div>
            </AnimatedSection>
          </div>
        </main>
      </div>
    </div>
  );
}
