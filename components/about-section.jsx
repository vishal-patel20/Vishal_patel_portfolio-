"use client";

import { useEffect, useRef, useState } from "react";
import { Code2, Rocket, Zap, Target } from "lucide-react";

const highlights = [
    {
        icon: Code2,
        title: "Clean Code",
        description: "Writing maintainable, scalable solutions",
    },
    {
        icon: Rocket,
        title: "Fast Delivery",
        description: "Shipping features under tight deadlines",
    },
    {
        icon: Zap,
        title: "Performance",
        description: "Optimized for speed and efficiency",
    },
    {
        icon: Target,
        title: "Problem Solver",
        description: "Turning complex challenges into solutions",
    },
];

export function AboutSection() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="about"
            className="px-6 md:px-12 lg:px-24 py-24 border-t border-border relative overflow-hidden"
        >
            {/* Animated background elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

            <div className="max-w-6xl mx-auto relative">
                {/* Section Header with animated line */}
                <div
                    className={`flex items-center gap-4 mb-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
                >
                    <span className="w-16 h-px bg-gradient-to-r from-primary to-pink-500" />
                    <h2 className="text-sm font-mono text-primary tracking-wider uppercase">
                        About Me
                    </h2>
                </div>

                {/* Bold Main Title */}
                <h3
                    className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-8 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                >
                    <span className="text-foreground">Passionate </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 animate-gradient">
                        Full Stack Developer
                    </span>
                </h3>

                {/* Subtitle */}
                <p
                    className={`text-xl md:text-2xl text-muted-foreground max-w-3xl mb-12 leading-relaxed transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                >
                    I transform ideas into{" "}
                    <span className="text-foreground font-semibold">powerful digital experiences</span>{" "}
                    that scale effortlessly and deliver real business value.
                </p>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    {/* Left - About Text */}
                    <div className="space-y-6">
                        <div
                            className={`relative p-6 md:p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                        >
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p className="text-lg">
                                    I&apos;m a results-driven Full Stack Developer with deep expertise in{" "}
                                    <span className="text-primary font-semibold">FastAPI, Python, MongoDB, the MERN Stack, SQL, and AWS</span>.
                                </p>
                                <p>
                                    From designing high-performance RESTful APIs to building responsive,
                                    pixel-perfect frontends with <span className="text-foreground font-medium">React and Tailwind CSS</span>,
                                    I bring ideas to life with clean, maintainable code.
                                </p>
                                <p>
                                    What sets me apart? <span className="text-foreground font-medium">I thrive in ambiguity.</span> Whether it&apos;s debugging a complex
                                    distributed system or shipping a feature under tight deadlines, I approach every
                                    challenge with curiosity and a bias for action.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right - Highlight Cards */}
                    <div className="grid grid-cols-2 gap-4">
                        {highlights.map((item, index) => (
                            <div
                                key={item.title}
                                className={`relative p-5 rounded-2xl bg-card/50 backdrop-blur-sm border border-border transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                                style={{ transitionDelay: `${600 + index * 100}ms` }}
                            >
                                <div className="relative">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary/20 to-pink-500/20 flex items-center justify-center mb-4">
                                        <item.icon className="w-6 h-6 text-muted-foreground" />
                                    </div>
                                    <h4 className="font-bold mb-1 text-foreground">
                                        {item.title}
                                    </h4>
                                    <p className="text-sm text-muted-foreground">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </section>
    );
}
