import Hero from "../components/Hero";
import ProductsGrid from "../components/ProductsGrid";
import About from "../components/About";
import Expertise from "../components/Expertise";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductsGrid />
      <About />
      <Expertise />
      <ContactForm />
    </>
  );
}
