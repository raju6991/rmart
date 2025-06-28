import Hero from "@/components/home/hero";
import Categories from "@/components/home/categories";
import FeaturedProducts from "@/components/home/featured-products";
import Testimonials from "@/components/home/testimonials";
import Newsletter from "@/components/home/newsletter";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
}
