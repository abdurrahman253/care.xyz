import Banner from "@/components/homepage/Banner";
import ServicesPreview from "@/components/homepage/ServicesPreview";
import TestimonialsMetrics from "@/components/homepage/TestimonialsMetrics";
import About from "@/components/homepage/About";
import Contact from "@/components/homepage/contact";


export default function HomePage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <Banner />

      {/* Services Preview Section */}
      <ServicesPreview />

      {/* Testimonials & Success Metrics Section */}
      <TestimonialsMetrics />

      {/* About Section */}
      <About />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}