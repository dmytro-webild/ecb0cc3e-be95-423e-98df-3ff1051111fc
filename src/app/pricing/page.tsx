"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import MediaAbout from '@/components/sections/about/MediaAbout';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardNine from '@/components/sections/pricing/PricingCardNine';

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

  <div id="full-pricing-plans" data-section="full-pricing-plans">
      <PricingCardNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "starter",
          title: "Starter",
          price: "$999",
          period: "One-time Payment",
          features: [
            "5-Page Website",
            "Mobile Responsive Design",
            "Integrated Contact Form",
            "Basic On-Page SEO",
            "30-Day Post-Launch Support",
          ],
          button: {
            text: "Get Started with Starter",
            href: "/contact?plan=starter",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/develop-coding-web-design-coding-web-template_53876-132245.jpg",
          imageAlt: "Icon representing starter website plan",
        },
        {
          id: "pro",
          title: "Pro",
          price: "$1,999",
          period: "One-time Payment",
          features: [
            "10-Page Website",
            "Advanced SEO Optimization",
            "Blog Setup & Management",
            "Google Analytics Integration",
            "90-Day Post-Launch Support",
            "2 Rounds of Design Revisions",
          ],
          button: {
            text: "Go Pro",
            href: "/contact?plan=pro",
          },
          imageSrc: "http://img.b2bpic.net/free-vector/social-media-design_24877-49687.jpg",
          imageAlt: "Icon representing pro website plan",
        },
        {
          id: "elite",
          title: "Elite",
          price: "$3,499",
          period: "One-time Payment",
          features: [
            "Unlimited Pages",
            "Full SEO Strategy & Monitoring",
            "Booking/Scheduling Integration",
            "Priority Support",
            "Monthly Performance Check-ins",
            "Custom Branding Package",
          ],
          button: {
            text: "Unlock Elite",
            href: "/contact?plan=elite",
          },
          imageSrc: "http://img.b2bpic.net/free-vector/luxury-style-social-media-icons_1017-8075.jpg",
          imageAlt: "Icon representing elite website plan",
        },
      ]}
      title="Simple, Transparent Pricing"
      description="Choose the perfect package for your trade business, designed for maximum ROI and seamless growth with clear, upfront costs."
    />
  </div>

  <div id="payment-options" data-section="payment-options">
      <MediaAbout
      useInvertedBackground={false}
      title="Flexible Payment Options Available"
      description="We understand that investing in a premium website is a significant step. That's why we offer flexible payment plans to make your investment accessible and manageable for your trade business.\n\n**Standard Plan:** 50% deposit to begin, 50% upon project launch.\n**Custom Monthly Plan:** Discuss tailored monthly payment schedules during your consultation.\n\nWe accept all major credit cards, e-transfer, and PayPal for your convenience."
      buttons={[
        {
          text: "Book a Free Consultation",
          href: "/contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/arrow-with-finance-report-table_23-2148542011.jpg"
      imageAlt="Elegant illustration of various payment method icons"
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
