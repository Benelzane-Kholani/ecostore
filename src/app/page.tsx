import Adverts from "./components/Categories";
import Deals from "./components/deals";
import Hero from "./components/hero";
import MiniShop from "./components/miniShop";
import './style/home.css';

export default function Home() {
  return (
    <>
        <Hero/>
        <Adverts/>
        <Deals/>
        <MiniShop/>
    </>
  );
}
