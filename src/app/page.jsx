import AboutSection from "@/components/home/about";
import HeroSection from "@/components/home/hero";
import ProductsSection from "@/components/home/products";
import Navbar from "@/components/layout/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <AboutSection/>
    <ProductsSection/>
    
    </>
  );
}
