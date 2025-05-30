import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import FunFact from "@/components/FunFact";

import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "Next.js Starter Template for SaaS Startups - Solid SaaS Boilerplate",

  // other metadata
  description: "This is Home for Solid Pro"
};

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <Brands /> */}
      <Feature />
      
      <FunFact />
      
      <Testimonial />
      
      <Blog />
    </main>
  );
}
