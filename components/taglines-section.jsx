"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

const taglines = [
    "Turning complex problems into elegant, scalable code.",
    "Full Stack Developer | FastAPI · React · AWS | Building systems that scale.",
    "I don't just build apps—I engineer solutions that grow with your business.",
    "From database to deployment: I own the entire stack.",
    "Architecting high-performance backends. Crafting seamless frontends.",
    "FastAPI speed. MERN flexibility. AWS scale. One developer.",
    "Code that performs. Systems that scale. Products that ship.",
    "Building tomorrow's infrastructure with today's best practices.",
    "Where Python meets React, and ideas become production-ready products.",
    "Full Stack Engineer obsessed with performance, scalability, and clean architecture.",
];

export function TaglinesSection() {
    const [copiedIndex, setCopiedIndex] = useState(null);

    const copyToClipboard = async (text, index) => {
        await navigator.clipboard.writeText(text);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    return (
        <section className="px-6 md:px-12 lg:px-24 py-24 border-t border-border">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-4 mb-12">
                    <span className="w-16 h-px bg-primary" />
                    <h2 className="text-sm font-mono text-primary tracking-wider uppercase">
                        Taglines
                    </h2>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Professional Headlines
                </h3>
                <p className="text-muted-foreground mb-12 max-w-2xl">
                    Ready-to-use taglines for LinkedIn, GitHub, or your resume. Click to copy.
                </p>

                <div className="grid gap-4">
                    {taglines.map((tagline, index) => (
                        <button
                            key={index}
                            onClick={() => copyToClipboard(tagline, index)}
                            className="group flex items-center justify-between gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-all text-left"
                        >
                            <div className="flex items-center gap-4">
                                <span className="text-primary font-mono text-sm w-6">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <span className="text-foreground group-hover:text-primary transition-colors">
                                    {tagline}
                                </span>
                            </div>
                            <div className="flex-shrink-0 text-muted-foreground group-hover:text-primary transition-colors">
                                {copiedIndex === index ? (
                                    <Check className="w-4 h-4 text-green-500" />
                                ) : (
                                    <Copy className="w-4 h-4" />
                                )}
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
