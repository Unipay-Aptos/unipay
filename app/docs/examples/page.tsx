import { DocsSidebar } from "@/components/new/docs-sidebar";

export default function ExamplesPage() {
  return (
    <div className="flex min-h-screen">
      <DocsSidebar />
      <div className="flex-1 ml-[3.05rem] lg:ml-[15rem] transition-all duration-200">
        <main className="container py-12 px-6 max-w-4xl">
          <div className="prose prose-invert max-w-none">
            <h1 className="text-4xl sm:text-5xl font-sentient mb-6">
              Examples
            </h1>

            <div className="border border-foreground/20 rounded-lg p-6 bg-foreground/5 mb-8">
              <h2 className="text-2xl font-sentient mb-4">Basic Transfer</h2>
              <p className="text-foreground/80 font-mono text-sm leading-relaxed mb-4">
                The simplest way to transfer USDC from Base Sepolia to Aptos:
              </p>
              <code className="block p-4 bg-background border border-foreground/20 rounded text-foreground overflow-x-auto text-sm">
{`import { transferUsdcViaCctp } from '@fluid-sdk/fluid-sdk';

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
              </code>
            </div>

            <div className="border border-foreground/20 rounded-lg p-6 bg-foreground/5 mb-8">
              <h2 className="text-2xl font-sentient mb-4">Transfer with Custom Recipient</h2>
              <p className="text-foreground/80 font-mono text-sm leading-relaxed mb-4">
                Specify a custom Aptos address as the recipient:
              </p>
              <code className="block p-4 bg-background border border-foreground/20 rounded text-foreground overflow-x-auto text-sm">
{`import { transferUsdcViaCctp } from '@fluid-sdk/fluid-sdk';

const result = await transferUsdcViaCctp({
  amount: "0.5",
  fromChain: "BaseSepolia",
  toChain: "Aptos",
  recipient: "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef"
});

console.log('Transfer ID:', result.transferId);
console.log('Source TX:', result.sourceTx);
console.log('Destination TX:', result.destinationTx);`}
              </code>
            </div>

            <div className="border border-foreground/20 rounded-lg p-6 bg-foreground/5 mb-8">
              <h2 className="text-2xl font-sentient mb-4">Error Handling</h2>
              <p className="text-foreground/80 font-mono text-sm leading-relaxed mb-4">
                Comprehensive error handling example:
              </p>
              <code className="block p-4 bg-background border border-foreground/20 rounded text-foreground overflow-x-auto text-sm">
{`import { transferUsdcViaCctp } from '@fluid-sdk/fluid-sdk';

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
              </code>
            </div>

            <div className="border border-foreground/20 rounded-lg p-6 bg-foreground/5 mb-8">
              <h2 className="text-2xl font-sentient mb-4">CLI Usage</h2>
              <p className="text-foreground/80 font-mono text-sm leading-relaxed mb-4">
                Run transfers directly from the command line:
              </p>
              <div className="space-y-4 font-mono text-sm">
                <div>
                  <p className="text-foreground/60 mb-2">Transfer 1.0 USDC (uses sponsor wallet as recipient):</p>
                  <code className="block p-3 bg-background border border-foreground/20 rounded text-foreground">
                    npx tsx src/runCctp.ts --amount 1.0
                  </code>
                </div>
                <div>
                  <p className="text-foreground/60 mb-2">Transfer 0.5 USDC to a specific Aptos address:</p>
                  <code className="block p-3 bg-background border border-foreground/20 rounded text-foreground">
                    npx tsx src/runCctp.ts --amount 0.5 --to 0xc3e2a21da9f68dcd3ad8668c8fb72ede9f46fea67652fbffa9db8f8af0c612cf
                  </code>
                </div>
              </div>
            </div>

            <div className="border border-foreground/20 rounded-lg p-6 bg-foreground/5 mb-8">
              <h2 className="text-2xl font-sentient mb-4">TypeScript Types</h2>
              <p className="text-foreground/80 font-mono text-sm leading-relaxed mb-4">
                Full TypeScript support with type definitions:
              </p>
              <code className="block p-4 bg-background border border-foreground/20 rounded text-foreground overflow-x-auto text-sm">
{`import { transferUsdcViaCctp, TransferResult } from '@fluid-sdk/fluid-sdk';

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
              </code>
            </div>

            <div className="border border-foreground/20 rounded-lg p-6 bg-foreground/5 mb-8">
              <h2 className="text-2xl font-sentient mb-4">Advanced: Custom Configuration</h2>
              <p className="text-foreground/80 font-mono text-sm leading-relaxed mb-4">
                For advanced use cases, you can configure custom signers and SDK instances:
              </p>
              <code className="block p-4 bg-background border border-foreground/20 rounded text-foreground overflow-x-auto text-sm">
{`import { 
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
              </code>
            </div>

            <div className="border border-foreground/20 rounded-lg p-6 bg-foreground/5">
              <h2 className="text-2xl font-sentient mb-4">Transfer Result</h2>
              <p className="text-foreground/80 font-mono text-sm leading-relaxed mb-4">
                The transfer function returns a result object with the following structure:
              </p>
              <code className="block p-4 bg-background border border-foreground/20 rounded text-foreground overflow-x-auto text-sm">
{`interface TransferResult {
  transferId: string;           // Unique transfer identifier
  sourceTx: string;              // Base Sepolia transaction hash
  destinationTx?: string;        // Aptos transaction hash (after completion)
  attestation?: string;          // Circle attestation message
  status: 'initiated' | 'completed' | 'failed';
  amount: string;                // Transfer amount in USDC
  fromChain: string;             // Source chain
  toChain: string;               // Destination chain
  recipient: string;             // Recipient address
}`}
              </code>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

