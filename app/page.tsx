import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Aboutme from "./components/Aboutme";

export default function Home() {
  return (
    <div className="">
      <Nav />

      <section className="container mx-auto mt-20">
        <Hero />
      </section>
      <section className="container mx-auto mt-20">
        <Aboutme />
      </section>
    </div>
  );
}
