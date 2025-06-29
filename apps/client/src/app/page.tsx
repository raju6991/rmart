import Hero from "@/components/home/hero";
import Categories from "@/components/catgories/categories";
import FeaturedProducts from "@/components/products/featured-products";
import Footer from "@/components/footer";
import { InfoBanner } from "@/components/home/info-banner";
import PopularProducts from "@/components/products/products";
import SaleCard from "@/components/sale/salecard";
import Newsletter from "@/components/home/newsletter";
import Testimonials from "@/components/home/testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <InfoBanner />
      <Categories />
      <PopularProducts />
      <SaleCard />
      <Newsletter />
      <FeaturedProducts />
      <Testimonials />
      <Footer />
    </>
  );
}
