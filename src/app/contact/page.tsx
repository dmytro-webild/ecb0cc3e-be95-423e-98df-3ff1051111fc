"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import MediaAbout from '@/components/sections/about/MediaAbout';
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

  <div id="contact-form" data-section="contact-form">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Let's Build Something Great Together"
      description="Ready to elevate your online presence? Fill out the form below to start a conversation about your project goals. We're excited to hear from you!"
      inputs={[
        {
          name: "name",          type: "text",          placeholder: "Your Name",          required: true,
        },
        {
          name: "businessName",          type: "text",          placeholder: "Business Name",          required: true,
        },
        {
          name: "phone",          type: "tel",          placeholder: "Phone Number",          required: false,
        },
        {
          name: "email",          type: "email",          placeholder: "Email Address",          required: true,
        },
      ]}
      multiSelect={{
        name: "tradeIndustry",        label: "Trade / Industry",        options: [
          "Electrician",          "Plumber",          "HVAC Technician",          "Landscaper",          "Roofer",          "General Contractor",          "Painter",          "Flooring Installer",          "Other"],
      }}
      textarea={{
        name: "message",        placeholder: "Tell us about your project and goals...",        rows: 5,
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/business-man-working-hotel-room_1150-6380.jpg"
      imageAlt="Hand filling out elegant online contact form on a tablet"
      mediaAnimation="slide-up"
      mediaPosition="right"
      buttonText="Submit Inquiry"
    />
  </div>

  <div id="contact-info-trust" data-section="contact-info-trust">
      <MediaAbout
      useInvertedBackground={false}
      title="Connect with Crestline Digital"
      description="Reach out to us using the form or direct contact details below. We believe in transparency and building relationships. There's no pressure, just a free chat about how we can help achieve your business goals. We typically respond within 24 hours.\n\nEmail: swackswipefile@gmail.com\nPhone: 705-817-3004\nService Area: Serving businesses across North America"
      imageSrc="http://img.b2bpic.net/free-photo/top-view-sad-face-with-copy-space_23-2148756226.jpg"
      imageAlt="Elegant illustration of two hands shaking, symbolizing trust"
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