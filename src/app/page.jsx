import Footer from "@/components/footer/footer";
import AboutSection from "@/components/home/about";
import HeroSection from "@/components/home/hero";
import ProductsSection from "@/components/home/products";
import Navbar from "@/components/layout/navbar";


export default function Home() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <AboutSection/>
    <ProductsSection/>
    <Footer/>
    </>
  );
}
