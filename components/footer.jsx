import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const socialLinks = [
    { icon: Github, href: "https://github.com/vishal-patel20", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/vishal-patel-330292261", label: "LinkedIn" },
    { icon: Mail, href: "mailto:vishalpatel01571@gmail.com", label: "Email" },
];

export function Footer() {
    return (
        <footer className="px-6 md:px-12 lg:px-24 py-8 border-t border-border">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

                <div className="flex items-center gap-4">
                    {socialLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="text-muted-foreground hover:text-primary transition-colors"
                            aria-label={link.label}
                        >
                            <link.icon className="w-4 h-4" />
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    );
}
