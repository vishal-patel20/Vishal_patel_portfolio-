import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { EducationSection } from "@/components/education-section";
import { TechStackSection } from "@/components/tech-stack-section";
import { ProjectsSection } from "@/components/projects-section";
import { CertificatesSection } from "@/components/certificates-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
    return (
        <main className="min-h-screen bg-background">
            <Navigation />
            <HeroSection />
            <AboutSection />
            <EducationSection />
            <TechStackSection />
            <ProjectsSection />
            <CertificatesSection />
            <ContactSection />
            <Footer />
        </main>
    );
}
