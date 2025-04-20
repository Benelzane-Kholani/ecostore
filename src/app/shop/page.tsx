import Filter from "../components/filter";
import Product from "../components/product";

export default function Shop(){
    return(
        <>
        <div className="flex gap-3 p-2">
            <Filter/>
            <div className="flex gap-2">
            <Product id={1} name="Noodle bowles" price={`R${80.00}`} image={'/products/pexels-tima-miroshnichenko-7879769.jpg'}/>
            <Product id={1} name="Noodle bowles" price={`R${100.00}`} image={'/products/pexels-scottwebb-1903965.jpg'}/>
            <Product id={1} name="Noodle bowles" price={`R${80.00}`} image={'/products/pexels-thepaintedsquare-3361496.jpg'}/>
            <Product id={1} name="Noodle bowles" price={`R${80.00}`} image={'/products/pexels-cup-of-couple-8015705.jpg'}/>
            <Product id={1} name="Noodle bowles" price={`R${80.00}`} image={'/products/pexels-alleksana-4386871.jpg'}/>
            </div>
        </div>
       
        </>
    )
}