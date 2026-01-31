"use client";

import { useEffect, useRef, useState } from "react";

const techCategories = [
    {
        name: "Core Programming",
        items: [
            { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
            { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
            { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
        ],
    },
    {
        name: "Database",
        items: [
            { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
            { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
            { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        ],
    },
    {
        name: "Backend & Web",
        items: [
            { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
            { name: "Pydantic", icon: "https://cdn.simpleicons.org/pydantic", darkIcon: "https://cdn.simpleicons.org/pydantic/white" },
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", invert: true },
            { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
            { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
            { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
        ],
    },
    {
        name: "Frontend & Frameworks",
        items: [
            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
        ],
    },
    {
        name: "Development Tools & Platforms",
        items: [
            { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
            { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", invert: true },
            { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
            { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
            { name: "Antigravity", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
            { name: "OpenAI", icon: "/logos/openai-black.svg", darkIcon: "/logos/openai-white.svg" },
        ],
    },
    {
        name: "Cloud & Deployment",
        items: [
            { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
            { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg", invert: true },
        ],
    },
];

export function TechStackSection() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);

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
            id="tech-stack"
            className="px-6 md:px-12 lg:px-24 py-24 border-t border-border"
        >
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div
                    className={`mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                >
                    <h2 className="text-3xl md:text-4xl font-bold">
                        <span className="text-foreground">Tools</span>
                        <span className="text-primary"> & </span>
                        <span className="text-indigo-400">Technologies</span>
                    </h2>
                </div>

                {/* Tech Grid Container with Gradient Border */}
                <div
                    className={`relative p-[2px] rounded-2xl transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                    style={{
                        background: "linear-gradient(135deg, #3b82f6 0%, #6366f1 50%, #8b5cf6 100%)",
                    }}
                >
                    <div className="bg-background rounded-2xl p-6 md:p-10">
                        <div className="space-y-10">
                            {techCategories.map((category, categoryIndex) => (
                                <div
                                    key={category.name}
                                    className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                                    style={{ transitionDelay: `${200 + categoryIndex * 150}ms` }}
                                >
                                    {/* Category Badge */}
                                    <div className="mb-4">
                                        <span className="inline-block px-4 py-1.5 text-sm font-medium text-primary border border-primary rounded-full">
                                            {category.name}
                                        </span>
                                    </div>

                                    {/* Tech Items Grid */}
                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                        {category.items.map((item, itemIndex) => (
                                            <div
                                                key={item.name}
                                                onMouseEnter={() => setHoveredItem(item.name)}
                                                onMouseLeave={() => setHoveredItem(null)}
                                                className={`group relative flex flex-col items-center justify-center p-6 bg-card rounded-xl border-2 transition-all duration-300 cursor-pointer ${hoveredItem === item.name
                                                    ? "border-primary shadow-lg shadow-primary/20 scale-105"
                                                    : "border-border hover:border-primary/50"
                                                    } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                                                style={{
                                                    transitionDelay: `${300 + categoryIndex * 100 + itemIndex * 50}ms`,
                                                }}
                                            >
                                                {/* Glow effect on hover */}
                                                <div
                                                    className={`absolute inset-0 rounded-xl transition-opacity duration-300 ${hoveredItem === item.name ? "opacity-100" : "opacity-0"
                                                        }`}
                                                    style={{
                                                        background: "radial-gradient(circle at center, rgba(59, 130, 246, 0.15) 0%, transparent 70%)",
                                                    }}
                                                />

                                                {/* Icon */}
                                                <div className="relative w-12 h-12 mb-3 transition-transform duration-300 group-hover:scale-110">
                                                    {item.darkIcon ? (
                                                        <>
                                                            <img
                                                                src={item.icon || "/placeholder.svg"}
                                                                alt={item.name}
                                                                className="w-full h-full object-contain dark:hidden"
                                                            />
                                                            <img
                                                                src={item.darkIcon}
                                                                alt={item.name}
                                                                className="w-full h-full object-contain hidden dark:block"
                                                            />
                                                        </>
                                                    ) : (
                                                        <img
                                                            src={item.icon || "/placeholder.svg"}
                                                            alt={item.name}
                                                            className={`w-full h-full object-contain ${item.invert ? "dark:invert" : ""}`}
                                                        />
                                                    )}
                                                </div>

                                                {/* Name */}
                                                <span className="relative text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                                                    {item.name}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
