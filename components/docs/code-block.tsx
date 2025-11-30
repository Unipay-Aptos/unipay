"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  className?: string;
}

export function CodeBlock({ code, language, filename, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn("relative group", className)}
    >
      {filename && (
        <div className="flex items-center justify-between px-4 py-2 bg-foreground/10 border-b border-foreground/20 rounded-t-lg">
          <span className="text-xs font-mono text-foreground/60">{filename}</span>
          {language && (
            <span className="text-xs font-mono text-foreground/40 uppercase">{language}</span>
          )}
        </div>
      )}
      <div className="relative">
        <pre className="overflow-x-auto p-4 bg-background/50 border border-foreground/20 rounded-lg font-mono text-sm leading-relaxed">
          <code className="text-foreground/90 whitespace-pre">{code}</code>
        </pre>
        <button
          onClick={copyToClipboard}
          className="absolute top-4 right-4 p-2 bg-foreground/10 hover:bg-foreground/20 rounded border border-foreground/20 transition-all opacity-0 group-hover:opacity-100"
          aria-label="Copy code"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-400" />
          ) : (
            <Copy className="h-4 w-4 text-foreground/60" />
          )}
        </button>
      </div>
    </motion.div>
  );
}

