"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureCardTwentyNine from '@/components/sections/feature/featureCardTwentyNine/FeatureCardTwentyNine';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroOverlayTestimonial from '@/components/sections/hero/HeroOverlayTestimonial';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardNine from '@/components/sections/pricing/PricingCardNine';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';

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
          name: "Home",          id: "/"},
        {
          name: "Services",          id: "/services"},
        {
          name: "Pricing",          id: "/pricing"},
        {
          name: "Contact",          id: "/contact"},
      ]}
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EdYpn6q97xOmp8rRGBMw3A94lX/uploaded-1780538335080-9fjklop5.png"
      logoAlt="Crestline Digital Logo"
      logoClassName="h-8 w-auto"
      button={{
        text: "Get a Quote",        href: "/contact"}}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlayTestimonial
      title="Your Business Deserves a Website That Converts"
      description="We build premium websites for trade businesses that generate real leads."
      testimonials={[
        {
          name: "Robert Davis",          handle: "Owner, Johnson Electric",          testimonial: "Crestline Digital transformed our online presence. We're now generating more high-quality leads than ever before. Their process was seamless and the results speak for themselves!",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/male-female-graphic-designers-using-graphics-tablet_1170-962.jpg",          imageAlt: "Mobile phone displaying electrical contractor website"},
        {
          name: "Michael Chen",          handle: "CEO, Chen Plumbing",          testimonial: "The team at Crestline Digital built us a website that truly works as hard as we do. Professional, fast, and incredibly effective at attracting new clients.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-fashion-designer-s-office_23-2150543698.jpg",          imageAlt: "Tablet displaying plumbing service website"},
        {
          name: "Emily Rodriguez",          handle: "Founder, GreenScape Designs",          testimonial: "From concept to launch, Crestline Digital exceeded our expectations. Our new website perfectly captures our brand and has significantly increased our inquiries.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-businesswoman-s-hand-using-laptop-holding-disposal-cup_23-2147970929.jpg",          imageAlt: "Laptop displaying landscaping company website"},
        {
          name: "David Kim",          handle: "Manager, Elite HVAC Solutions",          testimonial: "Their understanding of the trades and dedication to conversion-focused design is unmatched. Our lead volume has seen a remarkable boost since launching with Crestline Digital.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/business-person-hand-holding-financial-statistics-displayed-t_1150-772.jpg",          imageAlt: "Desktop displaying HVAC company website with analytics"},
        {
          name: "William Smith",          handle: "Owner, Summit Roofing Co.",          testimonial: "Finally, a website that reflects the quality of our work! Crestline Digital delivered a premium site quickly, and it's already paying dividends in new business.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/construction-building-architecture-concept_53876-120128.jpg",          imageAlt: "Monitor displaying roofing contractor website"},
      ]}
      buttons={[
        {
          text: "See Our Work",          href: "#portfolio"},
        {
          text: "Get a Free Quote",          href: "/contact"},
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/cheerful-handsome-businessman_1262-21003.jpg",          alt: "Sarah J."},
        {
          src: "http://img.b2bpic.net/free-photo/computer-scientist-server-farm-ensuring-compliance-with-industry-standards_482257-123806.jpg",          alt: "Michael C."},
        {
          src: "http://img.b2bpic.net/free-photo/man-preparing-foodbank-poor-people_23-2149012158.jpg",          alt: "Emily R."},
        {
          src: "http://img.b2bpic.net/free-photo/portrait-happy-black-auto-mechanic-workshop_637285-9406.jpg",          alt: "David K."},
        {
          src: "http://img.b2bpic.net/free-photo/positive-colleagues-posing-taking-selfie-photo-outdoors_1262-19188.jpg",          alt: "Maria S."},
      ]}
      avatarText="Trusted by 100+ businesses"
      imageSrc="http://img.b2bpic.net/free-photo/man-with-headphones-analyzes-online-statistics_53876-94865.jpg"
      imageAlt="Luxury office workspace with website design on computer screen"
      showBlur={true}
    />
  </div>

  <div id="why-crestline-digital" data-section="why-crestline-digital">
      <FeatureCardTwentyNine
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      features={[
        {
          title: "Fast Delivery",          description: "Get your high-performance website live in just 2 weeks. We respect your time and business.",          imageSrc: "http://img.b2bpic.net/free-photo/young-crazy-man-worried_1194-2217.jpg",          imageAlt: "Stylized clock showing two weeks with rocket icon",          titleImageSrc: "http://img.b2bpic.net/free-vector/linear-gantt-chart_23-2148659331.jpg",          buttonText: "Learn More"},
        {
          title: "Built to Convert",          description: "Every design decision is focused on turning visitors into valuable leads and customers.",          imageSrc: "http://img.b2bpic.net/free-photo/apply-now-application-employment-work-concept_53876-15818.jpg",          imageAlt: "Magnifying glass over website wireframe highlighting CTAs",          titleImageSrc: "http://img.b2bpic.net/free-photo/digital-tablet-stylus-pen-laptop-desktop-close-up_169016-54907.jpg",          buttonText: "Learn More"},
        {
          title: "Ongoing Support",          description: "We don't disappear after launch. Count on us for continuous support and optimization.",          imageSrc: "http://img.b2bpic.net/free-photo/modern-women-working-together-outside_23-2148416441.jpg",          imageAlt: "Hands shaking over a laptop keyboard symbolizing support",          titleImageSrc: "http://img.b2bpic.net/free-photo/suit-deal-50s-understanding-sunlight_1134-1313.jpg",          buttonText: "Learn More"},
      ]}
      title="Why Choose Crestline Digital?"
      description="Elevating trade businesses with premium websites designed for real-world impact."
    />
  </div>

  <div id="portfolio" data-section="portfolio">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "1",          brand: "Electrical Solutions",          name: "Modern Electrician Site",          price: "View Project",          rating: 5,
          reviewCount: "24",          imageSrc: "http://img.b2bpic.net/free-photo/electrical-technician-looking-focused-while-working-switchboard-with-fuses_169016-23716.jpg",          imageAlt: "Website mockup for electrical contractor"},
        {
          id: "2",          brand: "Reliable Plumbing",          name: "Plumbing Service Hub",          price: "View Project",          rating: 5,
          reviewCount: "18",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-men-holding-tablet_23-2148751998.jpg",          imageAlt: "Website mockup for plumbing service"},
        {
          id: "3",          brand: "GreenScape Pros",          name: "Landscaping Portfolio",          price: "View Project",          rating: 5,
          reviewCount: "30",          imageSrc: "http://img.b2bpic.net/free-photo/ecology-fresh-lush-natural-nature_53876-120778.jpg",          imageAlt: "Website mockup for landscaping company"},
        {
          id: "4",          brand: "Comfort Climate",          name: "HVAC Business Site",          price: "View Project",          rating: 5,
          reviewCount: "20",          imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-ventilation-system_23-2149281317.jpg",          imageAlt: "Website mockup for HVAC business"},
        {
          id: "5",          brand: "Stronghold Roofing",          name: "Roofing Contractor Site",          price: "View Project",          rating: 5,
          reviewCount: "15",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-middle-aged-professional-worker-carpenter-with-ear-protectors-using-tablet-carpentry-workshop_342744-806.jpg",          imageAlt: "Website mockup for roofing contractor"},
        {
          id: "6",          brand: "Craftsman Builds",          name: "General Contractor Site",          price: "View Project",          rating: 5,
          reviewCount: "22",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-professionals-working-project_23-2148352582.jpg",          imageAlt: "Website mockup for general contractor"},
      ]}
      title="Our Work: Websites That Build Businesses"
      description="Explore a selection of high-performance websites we've crafted for leading trade professionals."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "Robert Davis",          role: "Owner",          company: "Johnson Electric",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-man-black-suit_23-2148401442.jpg",          imageAlt: "Robert Davis, owner of Johnson Electric"},
        {
          id: "2",          name: "Michael Chen",          role: "CEO",          company: "Chen Plumbing",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-sexy-handsome-fashion-businessman-model-dressed-elegant-checkered-suit-posing-street-background-metrosexual_158538-14256.jpg",          imageAlt: "Michael Chen, CEO of Chen Plumbing"},
        {
          id: "3",          name: "Emily Rodriguez",          role: "Founder",          company: "GreenScape Designs",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/greenhouse-owner-posing-with-folded-arms-having-many-flowers-colleague-holding-pot-with-pink-chrysanthemums-glass-roof_158595-7129.jpg",          imageAlt: "Emily Rodriguez, founder of GreenScape Designs"},
        {
          id: "4",          name: "David Kim",          role: "Manager",          company: "Elite HVAC Solutions",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/crazy-hippie-angry-expression_1194-3931.jpg",          imageAlt: "David Kim, manager of Elite HVAC Solutions"},
        {
          id: "5",          name: "William Smith",          role: "Owner",          company: "Summit Roofing Co.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/super-hero-businessman-red-cape-looking-front-with-sad-expression-being-displeased-standing-orange-wall_141793-53095.jpg",          imageAlt: "William Smith, owner of Summit Roofing Co."},
      ]}
      kpiItems={[
        {
          value: "100+",          label: "Sites Launched"},
        {
          value: "95%",          label: "Client Retention"},
        {
          value: "5.0",          label: "Average Rating"},
      ]}
      title="Hear From Our Valued Clients"
      description="Real results from real trade businesses who trusted Crestline Digital to elevate their online presence."
    />
  </div>

  <div id="process" data-section="process">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      metrics={[
        {
          id: "1",          value: "1.",          title: "Discovery",          items: [
            "Understand your goals",            "Analyze your audience",            "Define project scope"],
        },
        {
          id: "2",          value: "2.",          title: "Design",          items: [
            "Craft stunning visuals",            "Develop intuitive UX",            "Gather your feedback"],
        },
        {
          id: "3",          value: "3.",          title: "Build",          items: [
            "Develop high-performance site",            "Implement SEO best practices",            "Rigorous testing & QA"],
        },
        {
          id: "4",          value: "4.",          title: "Launch",          items: [
            "Go live securely",            "Provide training",            "Ongoing support"],
        },
      ]}
      title="Our Proven Path to Your Online Success"
      description="A transparent, collaborative process designed to deliver exceptional results and a seamless experience from start to finish."
    />
  </div>

  <div id="pricing-preview" data-section="pricing-preview">
      <PricingCardNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "starter",          title: "Starter",          price: "$999",          period: "One-time",          features: [
            "5-Page Website",            "Mobile Responsive",            "Contact Form",            "Basic SEO Setup",            "30-Day Support"],
          button: {
            text: "Choose Starter",          href: "/pricing#starter"},
          imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-abstract-metallic-cube_23-2150979677.jpg",          imageAlt: "Icon representing starter website plan"},
        {
          id: "pro",          title: "Pro",          price: "$1,999",          period: "One-time",          features: [
            "10-Page Website",            "Advanced SEO",            "Blog Setup",            "Google Analytics",            "90-Day Support",            "2 Revision Rounds"],
          button: {
            text: "Choose Pro",          href: "/pricing#pro"},
          imageSrc: "http://img.b2bpic.net/free-vector/golden-badges_1010-68.jpg",          imageAlt: "Icon representing pro website plan"},
        {
          id: "elite",          title: "Elite",          price: "$3,499",          period: "One-time",          features: [
            "Unlimited Pages",            "Full SEO Strategy",            "Booking Integration",            "Priority Support",            "Monthly Check-ins",            "Custom Branding"],
          button: {
            text: "Choose Elite",          href: "/pricing#elite"},
          imageSrc: "http://img.b2bpic.net/free-photo/professional-person-engaging-with-ai-chatbot-computer-screen_482257-126263.jpg",          imageAlt: "Icon representing elite website plan"},
      ]}
      title="Flexible Pricing, Powerful Results"
      description="Transparent packages designed to meet your business needs and budget, delivering maximum ROI for trade professionals."
      buttons={[
        {
          text: "Ready to Grow Your Business Online? Start Today",          href: "/contact"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EdYpn6q97xOmp8rRGBMw3A94lX/uploaded-1780538335080-9fjklop5.png"
      logoAlt="Crestline Digital Logo"
      logoText="Crestline Digital"
      logoImageClassName="h-6 w-auto"
      leftLink={{
        text: "© 2024 Crestline Digital. All rights reserved.",        href: "#"}}
      rightLink={{
        text: "Privacy Policy",        href: "#"}}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}