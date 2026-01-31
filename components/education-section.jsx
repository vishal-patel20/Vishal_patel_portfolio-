"use client";

import { useEffect, useRef, useState } from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
    {
        degree: "Master of Computer Applications (MCA)",
        institution: "Mohanlal Sukhadia University",
        location: "Udaipur, Rajasthan, India",
        period: "Pursuing",
        description:
            "Strong understanding of DBMS, OS, Advanced Data Structures and Design & Analysis of Algorithms. Knowledge of Python, Java, Web Technology, and Software Engineering concepts. Exposure to Artificial Intelligence, Machine Learning, Natural Language Processing, and Compiler Design. Familiarity with Cloud Computing, Computer Networks, Cyber Security, and Information Systems.",
        achievements: [
            "CGPA: 8.00/10",
        ],
    },
    {
        degree: "Bachelor of Computer Applications (BCA)",
        institution: "Vidya Bhawan Rural Institute",
        location: "Udaipur, Rajasthan, India",
        period: "Completed",
        description:
            "Strong foundation in Programming using C, C++, and Java. Core knowledge of Data Structures, DBMS, Operating Systems, and Computer Networks. Exposure to Web Technology, Cloud Computing, and Information Systems. Academic understanding of Wireless & Mobile Computing and System Analysis & Design.",
        achievements: ["Percentage: 76%"],
    },
];

export function EducationSection() {
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
            id="education"
            className="px-6 md:px-12 lg:px-24 py-24 border-t border-border relative overflow-hidden"
        >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-500/5 to-transparent rounded-full blur-3xl" />

            <div className="max-w-6xl mx-auto relative">
                {/* Section Header */}
                <div
                    className={`flex items-center gap-4 mb-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
                >
                    <span className="w-16 h-px bg-gradient-to-r from-primary to-pink-500" />
                    <h2 className="text-sm font-mono text-primary tracking-wider uppercase">
                        Education
                    </h2>
                </div>

                <h3
                    className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-16 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                >
                    <span className="text-foreground">Academic </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500">
                        Journey
                    </span>
                </h3>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div
                        className={`absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-600 to-purple-600 transform md:-translate-x-1/2 transition-all duration-1000 ${isVisible ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"}`}
                        style={{ transformOrigin: "top" }}
                    />

                    {education.map((edu, index) => (
                        <div
                            key={edu.degree}
                            className={`relative flex flex-col md:flex-row gap-8 mb-16 last:mb-0 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                        >
                            {/* Timeline dot */}
                            <div
                                className={`absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 transform md:-translate-x-1/2 -translate-y-1 transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
                                style={{ transitionDelay: `${400 + index * 200}ms` }}
                            >
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 animate-ping opacity-50" />
                            </div>

                            {/* Content card */}
                            <div
                                className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"} transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                                style={{ transitionDelay: `${500 + index * 200}ms` }}
                            >
                                <div className="relative p-6 md:p-8 bg-card/50 backdrop-blur-sm border border-border rounded-2xl transition-all duration-500">
                                    {/* Icon */}
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500/20 to-indigo-600/20 flex items-center justify-center">
                                            <GraduationCap className="w-6 h-6 text-primary" />
                                        </div>
                                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                                            <Calendar className="w-4 h-4" />
                                            <span>{edu.period}</span>
                                        </div>
                                    </div>

                                    {/* Degree */}
                                    <h4 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                                        {edu.degree}
                                    </h4>

                                    {/* Institution */}
                                    <div className="flex items-center gap-2 text-primary mb-4">
                                        <MapPin className="w-4 h-4" />
                                        <span className="font-medium">{edu.institution}</span>
                                        <span className="text-muted-foreground">
                                            - {edu.location}
                                        </span>
                                    </div>

                                    {/* Description */}
                                    <p className="text-muted-foreground leading-relaxed mb-4">
                                        {edu.description}
                                    </p>

                                    {/* Achievements */}
                                    <div className="flex flex-wrap gap-2">
                                        {edu.achievements.map((achievement, i) => (
                                            <span
                                                key={achievement}
                                                className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-600/10 text-primary border border-primary/20 transition-all duration-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                                                style={{
                                                    transitionDelay: `${700 + index * 200 + i * 100}ms`,
                                                }}
                                            >
                                                {achievement}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Empty space for alternating layout */}
                            <div className="hidden md:block md:w-1/2" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
