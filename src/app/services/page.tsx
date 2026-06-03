"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwentyNine from '@/components/sections/feature/featureCardTwentyNine/FeatureCardTwentyNine';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import MediaAbout from '@/components/sections/about/MediaAbout';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="mediumSmall"
        sizing="medium"
        background="fluid"
        cardStyle="outline"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="glass"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "/",
        },
        {
          name: "Services",
          id: "/services",
        },
        {
          name: "Pricing",
          id: "/pricing",
        },
        {
          name: "Contact",
          id: "/contact",
        },
      ]}
      brandName="Crestline Digital"
      button={{
        text: "Get a Quote",
        href: "/contact",
      }}
    />
  </div>

  <div id="services-hero" data-section="services-hero">
      <MediaAbout
      useInvertedBackground={true}
      title="What We Build: Websites Tailored for Your Success"
      description="Delivering custom, high-performance web solutions that drive growth and generate leads for trade businesses."
      imageSrc="http://img.b2bpic.net/free-photo/photovoltaics-factory-investors-analyzing-data-using-isolated-screen-tablet_482257-119500.jpg"
      imageAlt="Laptop displaying a services page of a web design agency"
    />
  </div>

  <div id="our-services" data-section="our-services">
      <FeatureCardTwentyNine
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      features={[
        {
          title: "Custom Website Design",
          description: "Unique, branded designs that stand out and reflect your business's professionalism.",
          imageSrc: "http://img.b2bpic.net/free-vector/polaroid-icon_23-2147504467.jpg",
          imageAlt: "Icon for custom website design",
          titleImageSrc: "http://img.b2bpic.net/free-photo/pc-desk-empty-photovoltaics-factory-monitoring-system-performance-closeup_482257-118100.jpg",
          buttonText: "Learn More",
        },
        {
          title: "SEO-Optimized Builds",
          description: "Websites built for top search engine rankings, bringing more organic traffic to your business.",
          imageSrc: "http://img.b2bpic.net/free-photo/employee-working-marketing-setting_23-2151871167.jpg",
          imageAlt: "Icon for SEO-optimized builds",
          titleImageSrc: "http://img.b2bpic.net/free-vector/banners-about-seo_1212-25.jpg",
          buttonText: "Learn More",
        },
        {
          title: "Mobile-First Development",
          description: "Flawless performance and aesthetics on all devices, from desktops to smartphones.",
          imageSrc: "http://img.b2bpic.net/free-vector/graphic-with-technology-icons_23-2147513976.jpg",
          imageAlt: "Icon for mobile-first development",
          titleImageSrc: "http://img.b2bpic.net/free-vector/flat-infographic-monitor-template_23-2147490789.jpg",
          buttonText: "Learn More",
        },
        {
          title: "Ongoing Maintenance & Support",
          description: "Ensuring your site stays secure, fast, and up-to-date long after launch.",
          imageSrc: "http://img.b2bpic.net/free-vector/repair_24908-54063.jpg",
          imageAlt: "Icon for ongoing maintenance and support",
          titleImageSrc: "http://img.b2bpic.net/free-vector/tools-emblem_24908-61847.jpg",
          buttonText: "Learn More",
        },
      ]}
      title="Our Specialized Web Design & Development Services"
      description="Crestline Digital provides comprehensive digital solutions to ensure your business thrives online. We specialize in building high-performance websites specifically designed to meet the unique needs of trade businesses, including electricians, plumbers, HVAC, and landscapers, ensuring they generate consistent, high-quality leads."
    />
  </div>

  <div id="whats-included" data-section="whats-included">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      metrics={[
        {
          id: "1",
          value: "",
          title: "Hosting Setup",
          items: [
            "Seamless and secure configuration",
          ],
        },
        {
          id: "2",
          value: "",
          title: "Google Analytics",
          items: [
            "Track performance & visitor insights",
          ],
        },
        {
          id: "3",
          value: "",
          title: "Contact Forms",
          items: [
            "Effortless lead capture",
          ],
        },
        {
          id: "4",
          value: "",
          title: "Speed Optimization",
          items: [
            "Fast loading for better UX & SEO",
          ],
        },
        {
          id: "5",
          value: "",
          title: "SSL Certificate",
          items: [
            "Essential site security",
          ],
        },
        {
          id: "6",
          value: "",
          title: "On-Page SEO",
          items: [
            "Optimized for search engines",
          ],
        },
        {
          id: "7",
          value: "",
          title: "Google Maps Embed",
          items: [
            "Easy client navigation",
          ],
        },
        {
          id: "8",
          value: "",
          title: "Mobile Responsive",
          items: [
            "Flawless on every device",
          ],
        },
      ]}
      title="Everything You Need for Online Success"
      description="Our comprehensive website builds ensure your business is equipped with powerful tools and features from day one, outperforming generic DIY solutions."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",
          title: "How long does it take to build a website?",
          content: "Our typical turnaround time for a standard trade business website is 2 weeks, from initial discovery to launch. Larger, more complex projects may take longer, which we'll discuss during your consultation.",
        },
        {
          id: "2",
          title: "Do you offer payment plans?",
          content: "Yes, we offer flexible payment plans to suit your budget. Typically, we require a 50% deposit to start and the remaining 50% upon project completion and launch. Monthly payment options are also available.",
        },
        {
          id: "3",
          title: "Will I own my website?",
          content: "Absolutely. Once the project is completed and fully paid, you will have 100% ownership of your website and all its content.",
        },
        {
          id: "4",
          title: "Do you provide SEO services?",
          content: "Yes, all our websites are built with SEO best practices in mind, including on-page optimization. We also offer advanced SEO strategies and ongoing services to ensure long-term visibility and growth.",
        },
        {
          id: "5",
          title: "What kind of support do you offer after launch?",
          content: "We offer comprehensive post-launch support, including initial warranty periods (30-90 days depending on the plan), ongoing maintenance packages, and dedicated assistance to keep your site running smoothly and effectively.",
        },
        {
          id: "6",
          title: "Can you integrate booking or scheduling systems?",
          content: "Yes, for our Elite plan and custom projects, we can integrate various booking, scheduling, and CRM systems to streamline your operations and client management.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/white-pea-beans-question-symbol-style-concrete_114579-24926.jpg"
      imageAlt="Minimalist illustration of a golden question mark"
      mediaAnimation="slide-up"
      mediaPosition="right"
      title="Frequently Asked Questions"
      description="Find answers to the most common questions about our web design services and process for trade businesses."
      buttons={[
        {
          text: "Get a Free Quote",
          href: "/contact",
        },
      ]}
      faqsAnimation="opacity"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=h5orts"
      logoAlt="Crestline Digital Logo"
      logoText="Crestline Digital"
      leftLink={{
        text: "© 2024 Crestline Digital. All rights reserved.",
        href: "#",
      }}
      rightLink={{
        text: "Privacy Policy",
        href: "#",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
