"use client";

import React from "react"

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

const navLinks = [
    { label: "About", href: "about" },
    { label: "Education", href: "education" },
    { label: "Tech Stack", href: "tech-stack" },
    { label: "Projects", href: "projects" },
    { label: "Certificates", href: "certificates" },
    { label: "Contact", href: "contact" },
];

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const handleScroll = (e, targetId) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
            <nav className="flex items-center justify-between px-6 md:px-12 lg:px-24 py-4">
                <Link href="/" className="font-bold text-foreground text-xl tracking-tight">
                    <span className="text-primary">Vishal</span>
                    <span className="text-foreground"> Patel</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={`#${link.href}`}
                            onClick={(e) => handleScroll(e, link.href)}
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                        >
                            {link.label}
                        </a>
                    ))}
                    <Link
                        href="mailto:vishalpatel01571@gmail.com"
                        className="text-sm px-4 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity"
                    >
                        Hire Me
                    </Link>
                    <ThemeToggle />
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-foreground"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </nav>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden bg-background border-b border-border">
                    <div className="flex flex-col px-6 py-4 space-y-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={`#${link.href}`}
                                onClick={(e) => handleScroll(e, link.href)}
                                className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                            >
                                {link.label}
                            </a>
                        ))}
                        <Link
                            href="mailto:vishalpatel01571@gmail.com"
                            className="inline-flex items-center justify-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity"
                        >
                            Hire Me
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
