import Hero from "@/components/home/hero";
import Categories from "@/components/home/categories";
import FeaturedProducts from "@/components/home/featured-products";
import Testimonials from "@/components/home/testimonials";
import Newsletter from "@/components/home/newsletter";
import Footer from "@/components/footer";
import { InfoBanner } from "@/components/home/info-banner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <InfoBanner />
      <Categories />
      <FeaturedProducts />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
}
