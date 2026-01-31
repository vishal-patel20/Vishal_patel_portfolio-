"use client";

import { Award, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const certificates = [
    {
        title: "React.js Certified",
        description: "Strong foundation in React programming, component architecture, state management, and modern web development practices.",
        issuer: "Scaler Topics",
        date: "November 2024",
        verified: true,
        url: "https://drive.google.com/file/d/1AQCvZUsDvpX0Vby6JhPsxA2g3KEIa91r/view?usp=drive_link",
    },
    {
        title: "Deep Learning Certified",
        description: "Strong understanding of deep learning fundamentals and neural network concepts used in modern AI applications.",
        issuer: "NVIDIA",
        date: "December 2025",
        verified: true,
        url: "https://drive.google.com/file/d/1vEoeK66mtOAQlxhAXmwaMF8dUwcpp_V_/view?usp=drive_link",
    },
    {
        title: "Smart India Hackathon",
        description: "Participated in national-level hackathon focused on problem-solving, teamwork, innovation, and real-world technology challenges.",
        issuer: "Ministry of Education",
        date: "SIH 2025",
        verified: true,
        url: "https://drive.google.com/file/d/1rhgxViNNYo7gxdYaGWx_uop7X03e9Hyk/view?usp=drive_link", // Add your certificate URL here
    },
    {
        title: "iOS Development",
        description: "Demonstrated strong fundamentals in iOS app development, Swift programming, and mobile application design concepts.",
        issuer: "Mohanlal Sukhadia University",
        date: "November 2024",
        verified: true,
        url: "https://drive.google.com/file/d/1UmiX-Psxfm7SYKLtna7rUCUsr5-XiH-L/view?usp=drive_link", // Add your certificate URL here
    },
];

export function CertificatesSection() {
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
            id="certificates"
            className="px-6 md:px-12 lg:px-24 py-24 border-t border-border"
        >
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div
                    className={`mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                >
                    <div className="flex items-center gap-4 mb-4">
                        <span className="w-16 h-px bg-primary" />
                        <h2 className="text-sm font-mono text-primary tracking-wider uppercase">
                            Certifications
                        </h2>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                        Professional Certifications
                    </h3>
                </div>

                {/* Certificates Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {certificates.map((cert, index) => (
                        <article
                            key={cert.title}
                            className={`group relative p-6 bg-card border-2 border-border rounded-xl hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                            style={{ transitionDelay: `${200 + index * 150}ms` }}
                        >
                            {/* Verified Badge */}
                            {cert.verified && (
                                <div className="absolute top-4 right-4">
                                    <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-green-400 bg-green-400/10 border border-green-400/20 rounded-full">
                                        <Award className="w-3 h-3" />
                                        Verified
                                    </span>
                                </div>
                            )}

                            {/* Gradient Border Effect */}
                            <div
                                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                                style={{
                                    background: "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)",
                                }}
                            />

                            <div className="space-y-4">
                                {/* Title */}
                                <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors pr-20">
                                    {cert.title}
                                </h4>

                                {/* Description */}
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {cert.description}
                                </p>

                                {/* Issuer and Date */}
                                <div className="space-y-1">
                                    <p className="text-sm">
                                        <span className="text-primary font-medium">Issued by:</span>{" "}
                                        <span className="text-foreground">{cert.issuer}</span>
                                    </p>
                                    <p className="text-sm">
                                        <span className="text-primary font-medium">Date:</span>{" "}
                                        <span className="text-muted-foreground">{cert.date}</span>
                                    </p>
                                </div>

                                {/* View Certificate Link */}
                                <Link
                                    href={cert.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group/link"
                                >
                                    View Certificate
                                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
