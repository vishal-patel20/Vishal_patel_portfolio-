"use client";

import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ContactFormDialog } from "./contact-form-dialog";

const contactLinks = [
    { label: "Email", value: "vishalpatel01571@gmail.com", href: "mailto:vishalpatel01571@gmail.com", icon: Mail },
    { label: "GitHub", value: "@vishal-patel20", href: "https://github.com/vishal-patel20", icon: Github },
    { label: "LinkedIn", value: "/in/vishal-patel-330292261", href: "https://www.linkedin.com/in/vishal-patel-330292261", icon: Linkedin },
];

export function ContactSection() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    return (
        <section id="contact" className="px-6 md:px-12 lg:px-24 py-24 border-t border-border">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-4 mb-12">
                    <span className="w-16 h-px bg-primary" />
                    <h2 className="text-sm font-mono text-primary tracking-wider uppercase">
                        Contact
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <h3 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
                            Let&apos;s build something remarkable together.
                        </h3>
                        <p className="text-muted-foreground leading-relaxed max-w-md">
                            If you would like to discuss a project or just say hi, I&apos;m always down to chat.
                        </p>
                        <button
                            onClick={() => setIsDialogOpen(true)}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:opacity-90 transition-opacity"
                        >
                            Get in Touch
                            <ArrowUpRight className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="space-y-6">
                        {contactLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="group flex items-center justify-between p-4 border border-border rounded-lg hover:border-primary/50 transition-colors"
                            >
                                <div className="flex items-center gap-4">
                                    <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                    <div>
                                        <p className="text-sm text-muted-foreground">{link.label}</p>
                                        <p className="text-foreground group-hover:text-primary transition-colors">
                                            {link.value}
                                        </p>
                                    </div>
                                </div>
                                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <ContactFormDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
        </section>
    );
}

