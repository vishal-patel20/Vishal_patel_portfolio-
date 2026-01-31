"use client";

import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const socialLinks = [
    { icon: Github, href: "https://github.com/vishal-patel20", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/vishal-patel-330292261", label: "LinkedIn" },
    { icon: Mail, href: "mailto:vishalpatel01571@gmail.com", label: "Email" },
];

export function HeroSection() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20 overflow-hidden">
            <div className="max-w-6xl mx-auto w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div
                        className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
                    >
                        <p
                            className={`font-mono text-sm mb-4 tracking-wider transition-all duration-700 delay-200 text-blue-500 font-semibold ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                        >
                            FULL STACK DEVELOPER
                        </p>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
                            <span
                                className={`block transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                            >
                                {"Hi, I'm"}
                            </span>
                            <span
                                className={`block transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                            >
                                <span className="relative inline-block group cursor-pointer">
                                    <span className="relative z-10 font-extrabold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                                        Vishal Patel
                                    </span>
                                    {/* Animated underline */}
                                    <span className="absolute bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                </span>
                            </span>
                        </h1>
                        <p
                            className={`text-muted-foreground text-lg md:text-xl max-w-2xl mb-8 leading-relaxed transition-all duration-700 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                        >
                            I architect solutions that solve real business problems, scale
                            effortlessly, and deliver exceptional user experiences.
                        </p>

                        <div
                            className={`flex items-center gap-6 mb-12 transition-all duration-700 delay-900 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                        >
                            {socialLinks.map((link, index) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="text-muted-foreground hover:text-primary hover:scale-125 transition-all duration-300"
                                    aria-label={link.label}
                                    style={{ transitionDelay: `${1000 + index * 100}ms` }}
                                >
                                    <link.icon className="w-5 h-5" />
                                </Link>
                            ))}
                        </div>

                        <div
                            className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                        >
                            <Link
                                href="#about"
                                className="group inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                            >
                                About Me
                                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                                    &rarr;
                                </span>
                            </Link>
                            <Link
                                href="#projects"
                                className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground font-medium rounded-md hover:bg-secondary hover:border-primary/50 hover:scale-105 transition-all duration-300"
                            >
                                View Projects
                            </Link>
                        </div>
                    </div>

                    {/* Profile Image with Animations */}
                    <div
                        className={`relative flex justify-center lg:justify-end transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
                    >
                        {/* Profile image container - circular with animations */}
                        <div
                            className={`relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 transition-all duration-700 delay-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"} group`}
                        >
                            {/* Image container */}
                            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-border shadow-2xl shadow-primary/30">
                                <Image
                                    src="/profile.jpg"
                                    alt="Profile photo of Vishal Patel"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    priority
                                />
                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            {/* Floating particles */}
                            <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0s" }} />
                            <div className="absolute -bottom-1 -left-1 w-3 h-3 rounded-full bg-pink-500 animate-bounce" style={{ animationDelay: "0.5s" }} />
                            <div className="absolute top-1/2 -right-3 w-2 h-2 rounded-full bg-purple-500 animate-bounce" style={{ animationDelay: "1s" }} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
                <Link
                    href="#about"
                    className={`text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 ${isVisible ? "opacity-100" : "opacity-0"}`}
                    aria-label="Scroll to about section"
                    style={{ transitionDelay: "2500ms" }}
                >
                    <ArrowDown className="w-6 h-6 animate-bounce" />
                </Link>
            </div>
        </section>
    );
}
