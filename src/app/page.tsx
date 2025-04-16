import Adverts from "./components/Categories";
import Deals from "./components/deals";
import Hero from "./components/hero";
import MiniShop from "./components/miniShop";
import NavBar from "./components/navbar";

export default function Home() {
  return (
    <>
        <NavBar/>
        <Hero/>
        <Adverts/>
        <Deals/>
        <MiniShop/>
    </>
  );
}
