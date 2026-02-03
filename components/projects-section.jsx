"use client";

import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const projects = [
    {
        title: "Blogging Application",
        description: "A full-stack blogging platform where users can create, edit, and publish blog posts with rich text editing capabilities.",
        tech: ["MongoDB", "Express.js", "React", "Node.js"],
        features: [
            "User authentication and authorization",
            "Rich text editor for blog posts",
            "Comment system for reader engagement",
            "Responsive design for all devices",
        ],
        highlight: "Full MERN stack application demonstrating end-to-end web development skills.",
        links: {
            demo: "https://vishal-patel-blogingweb-wfct.vercel.app/", // Add your live demo URL here
            github: "https://github.com/vishal-patel20/Vishal_patel_Blogingweb", // Add your GitHub repo URL here
        },
    },
    {
        title: "K72 Website",
        description: "A modern, animated website for K72 digital marketing agency featuring smooth animations and interactive elements.",
        tech: ["React.js", "Tailwind CSS", "REST APIs", "GSAP"],
        features: [
            "Smooth scroll animations with GSAP",
            "Responsive design with Tailwind CSS",
            "Interactive service showcases",
            "Contact form with API integration",
        ],
        highlight: "Showcases advanced frontend skills with modern animation libraries and design systems.",
        links: {
            demo: "https://k72-clone-5965.vercel.app/", // Add your live demo URL here
            github: "https://github.com/vishal-patel20/k72-clone-", // Add your GitHub repo URL here
        },
    },
    {
        title: "Personal Portfolio",
        description: "A FastAPI-powered portfolio website with dynamic content management and modern design aesthetics.",
        tech: ["Python", "FastAPI", "MongoDB", "HTML", "CSS", "Tailwind CSS"],
        features: [
            "FastAPI backend for content management",
            "MongoDB integration for data storage",
            "Modern UI with Tailwind CSS",
            "RESTful API architecture",
        ],
        highlight: "Demonstrates backend development expertise with Python and FastAPI framework.",
        links: {
            demo: "https://vishal-patel-portfolio-kfo3.vercel.app/#", // Add your live demo URL here
            github: "https://github.com/vishal-patel20/Vishal_patel_portfolio-", // Add your GitHub repo URL here
        },
    },
    {
        title: "Tic-Tac-Toe Game",
        description: "Classic Tic-Tac-Toe game with clean UI and smooth gameplay experience built with vanilla JavaScript.",
        tech: ["JavaScript", "HTML", "CSS"],
        features: [
            "Two-player gameplay",
            "Win detection algorithm",
            "Score tracking",
            "Clean and intuitive interface",
        ],
        highlight: "Demonstrates fundamental JavaScript skills and game logic implementation.",
        links: {
            demo: "https://vishal-patel20.github.io/Tic-Tac-Toe-Game/", // Add your live demo URL here
            github: "https://github.com/vishal-patel20/Tic-Tac-Toe-Game", // Add your GitHub repo URL here
        },
    },
    {
        title: "Stone-Paper-Scissors Game",
        description: "Interactive Rock-Paper-Scissors game with computer AI opponent and score tracking.",
        tech: ["JavaScript", "HTML", "CSS"],
        features: [
            "Play against computer AI",
            "Real-time score updates",
            "Animated game results",
            "Responsive design",
        ],
        highlight: "Fun project showcasing DOM manipulation and event handling in JavaScript.",
        links: {
            demo: "https://vishal-patel20.github.io/stone-paper-scissors/", // Add your live demo URL here
            github: "https://github.com/vishal-patel20/stone-paper-scissors", // Add your GitHub repo URL here
        },
    },
];

export function ProjectsSection() {
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
            id="projects"
            className="px-6 md:px-12 lg:px-24 py-24 border-t border-border"
        >
            <div className="max-w-6xl mx-auto">
                <div
                    className={`flex items-center gap-4 mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
                >
                    <span className="w-16 h-px bg-primary" />
                    <h2 className="text-sm font-mono text-primary tracking-wider uppercase">
                        Projects
                    </h2>
                </div>

                <h3
                    className={`text-3xl md:text-4xl font-bold text-foreground mb-12 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                >
                    Featured Work
                </h3>

                <div className="space-y-12">
                    {projects.map((project, index) => (
                        <article
                            key={project.title}
                            className={`group p-6 md:p-8 bg-card border border-border rounded-lg hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                            style={{ transitionDelay: `${300 + index * 200}ms` }}
                        >
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-secondary rounded-md">
                                    <span className="text-primary font-mono text-lg font-bold">
                                        0{index + 1}
                                    </span>
                                </div>

                                <div className="flex-1 space-y-4">
                                    <div className="space-y-3">
                                        <h4 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h4>

                                        {/* Links Section */}
                                        <div className="flex flex-wrap gap-3">
                                            <Link
                                                href={project.links.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                Live Demo
                                            </Link>
                                            <Link
                                                href={project.links.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-secondary text-foreground border border-border rounded-lg hover:border-primary/50 hover:bg-secondary/80 transition-colors"
                                            >
                                                <Github className="w-4 h-4" />
                                                GitHub
                                            </Link>
                                        </div>
                                    </div>

                                    <p className="text-muted-foreground leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 text-xs font-mono bg-secondary text-foreground rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <ul className="grid sm:grid-cols-2 gap-2">
                                        {project.features.map((feature) => (
                                            <li
                                                key={feature}
                                                className="text-sm text-muted-foreground flex items-start gap-2"
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <p className="text-sm text-primary/80 italic">
                                        {project.highlight}
                                    </p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
