"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import PricingCardFive from '@/components/sections/pricing/PricingCardFive';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import { Activity, ShieldCheck, Smile, Sparkles, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="compact"
        sizing="largeSmall"
        background="aurora"
        cardStyle="layered-gradient"
        primaryButtonStyle="flat"
        secondaryButtonStyle="glass"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Services",
          id: "features",
        },
        {
          name: "Pricing",
          id: "pricing",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Dental & Barces"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCentered
      background={{
        variant: "plain",
      }}
      title="Premium Dental Care, Texas Trusted"
      description="Experience advanced dentistry in a calm, welcoming environment designed for your comfort. From routine cleanings to cosmetic transformations, Dental & Barces delivers exceptional results with a personal touch."
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/dentist-explaining-dental-hygiene-female-patient_23-2147862034.jpg",
          alt: "Patient",
        },
        {
          src: "http://img.b2bpic.net/free-photo/lifestyle-summer-people-emotions-concept-enthusiastic-handsome-male-model-with-happy-smile-white-teeth-standing-casual-t-shirt-yellow-background-satisfied_1258-60040.jpg",
          alt: "Patient",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-image-dentist-examining-female-s-teeth-dentistry_613910-11817.jpg",
          alt: "Patient",
        },
        {
          src: "http://img.b2bpic.net/free-photo/she-looks-relaxed-her-home_329181-1170.jpg",
          alt: "Patient",
        },
        {
          src: "http://img.b2bpic.net/free-photo/beautiful-girl-sitting-dentist-s-office_1157-23503.jpg",
          alt: "Patient",
        },
      ]}
      avatarText="Trusted by 10,000+ Texas residents"
      buttons={[
        {
          text: "Schedule Your Visit Today",
          href: "#contact",
        },
      ]}
      marqueeItems={[
        {
          type: "text-icon",
          text: "Preventive Care",
          icon: ShieldCheck,
        },
        {
          type: "text-icon",
          text: "Cosmetic Smile",
          icon: Sparkles,
        },
        {
          type: "text-icon",
          text: "Orthodontics",
          icon: Smile,
        },
        {
          type: "text-icon",
          text: "Emergency",
          icon: Activity,
        },
        {
          type: "text-icon",
          text: "Family Dental",
          icon: Users,
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={true}
      title="Excellence in Dental Care"
      description={[
        "At Dental & Barces, we combine cutting-edge technology with gentle, patient-centered care to ensure every visit is comfortable and stress-free.",
        "Our experienced team is dedicated to restoring and enhancing your smile's natural beauty using conservative, state-of-the-art procedures.",
        "Located in the heart of Texas, we pride ourselves on being a cornerstone of healthy, happy smiles for our community.",
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      features={[
        {
          title: "Preventive Care",
          description: "Routine cleanings and thorough examinations to maintain long-term oral health.",
          imageSrc: "http://img.b2bpic.net/free-photo/dentist-with-face-shield-reviewing-panoramic-mouth-x-ray-image-patient-global-pandemic-assistant-doctor-talking-with-senior-woman-wearing-suit-coverall-protection-suit-mask-gloves_482257-3235.jpg",
          imageAlt: "Routine exam",
        },
        {
          title: "Cosmetic Dentistry",
          description: "Transform your smile with professional whitening, veneers, and aesthetic treatments.",
          imageSrc: "http://img.b2bpic.net/free-photo/patient-receiving-dental-treatment_107420-65432.jpg",
          imageAlt: "Cosmetic smile",
        },
        {
          title: "Orthodontic Solutions",
          description: "Expert alignment services including traditional braces and modern aligner systems.",
          imageSrc: "http://img.b2bpic.net/free-photo/empty-stomatology-orthodontist-bright-office-room-with-nobody-it_482257-15349.jpg",
          imageAlt: "Orthodontics",
        },
      ]}
      title="Our Specialized Services"
      description="Providing comprehensive dental care tailored to your unique needs with precision and compassion."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardFive
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "basic",
          tag: "Essentials",
          price: "$150",
          period: "/visit",
          description: "Routine cleaning and exam for ongoing health.",
          button: {
            text: "Book Now",
          },
          featuresTitle: "Includes:",
          features: [
            "Cleaning",
            "Exam",
            "X-ray",
          ],
        },
        {
          id: "whitening",
          tag: "Cosmetic",
          price: "$399",
          period: "/session",
          description: "Advanced whitening treatment for a radiant smile.",
          button: {
            text: "Book Now",
          },
          featuresTitle: "Includes:",
          features: [
            "Consultation",
            "Whitening Kit",
            "Follow-up",
          ],
        },
        {
          id: "ortho",
          tag: "Specialized",
          price: "$3,500",
          period: "/plan",
          description: "Comprehensive orthodontic care and alignment.",
          button: {
            text: "Book Now",
          },
          featuresTitle: "Includes:",
          features: [
            "Imaging",
            "Adjustment",
            "Retention",
          ],
        },
      ]}
      title="Transparent Treatment Plans"
      description="Clear pricing to help you plan your dental journey with confidence."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah J.",
          imageSrc: "http://img.b2bpic.net/free-photo/natural-happy-woman-relaxing-home_329181-1332.jpg",
        },
        {
          id: "2",
          name: "Michael R.",
          imageSrc: "http://img.b2bpic.net/free-photo/joyful-good-looking-ordinary-man-with-ginger-hair-bristle-blue-t-shirt-smiling-broadly_176420-27465.jpg",
        },
        {
          id: "3",
          name: "Elena V.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-with-gladiolus-nature_23-2149441807.jpg",
        },
        {
          id: "4",
          name: "James L.",
          imageSrc: "http://img.b2bpic.net/free-photo/female-patient-smiling-while-looking-doctor_107420-74008.jpg",
        },
        {
          id: "5",
          name: "Maria K.",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-girl-sitting-dentist-s-office_1157-23503.jpg",
        },
      ]}
      cardTitle="Patient Stories"
      cardTag="Trusted Care"
      cardAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={true}
      faqs={[
        {
          id: "faq1",
          title: "How often should I visit?",
          content: "We recommend a professional cleaning and exam every 6 months.",
        },
        {
          id: "faq2",
          title: "Do you accept insurance?",
          content: "Yes, we work with all major dental insurance providers.",
        },
        {
          id: "faq3",
          title: "Are braces painful?",
          content: "Modern orthodontic treatments are designed for comfort, with only mild adjustment periods.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/female-patient-front-male-dentist-holding-dental-jaw_23-2147862031.jpg"
      mediaAnimation="slide-up"
      title="Common Questions"
      description="Answers to help you understand our process and care approach."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "15+",
          description: "Years of Excellence",
        },
        {
          id: "m2",
          value: "12k+",
          description: "Smiles Transformed",
        },
        {
          id: "m3",
          value: "4.9",
          description: "Patient Rating",
        },
      ]}
      title="Our Impact"
      description="Delivering excellence in dental care across Texas for over a decade."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={true}
      background={{
        variant: "plain",
      }}
      tag="Get in Touch"
      title="Schedule Your Visit"
      description="Ready to prioritize your oral health? Book an appointment today and join our dental family."
      imageSrc="http://img.b2bpic.net/free-photo/dentist-inviting-senior-man-consultation-dental-room-while-nurse-giving-patient-form-fill-indicating-sit-chair-waiting-area-slow-motion-shot-crowded-professional-orthodontist-office_482257-3575.jpg"
      mediaPosition="right"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Dental & Barces"
      copyrightText="© 2025 Dental & Barces | All Rights Reserved"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
