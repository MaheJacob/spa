import Image from "next/image";
import Hero from "./_components/Hero";
import CartegorySearch from "./_components/CartegorySearch";

export default function Home() {
  return (
    <div>
      <Hero/>
      <CartegorySearch/>
    </div>
  );
}
