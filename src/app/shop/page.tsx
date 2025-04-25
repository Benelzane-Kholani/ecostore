'use client'

import Filter from "../components/filter/filter";
import Product from "../components/product";
import {useState, useEffect} from 'react';
import { Product as storeProduct } from "../type/type";

export default function Shop(){
    const [ecoProducts, setEcoProducts] = useState<storeProduct[]>();

    useEffect(()=> {
        async function getProducts(){
            const res = await fetch('http://localhost:3000/json/shop.json');
            const products = await res.json();
            setEcoProducts(products.products);
        }
        getProducts();
    }, []);

    if(!ecoProducts) return <div className="flex gap-6 p-2">
        <Filter/>
    </div>

    return(
        <div className="flex gap-6 p-2">
            <Filter/>
            <div className="flex gap-2 p-2 inline flex-wrap">
            {ecoProducts.map((product) => (
                <Product key={product.id} id={product.id} name={product.name} price={product.price} image={product.image} />            
            ))}
            </div>
        </div>
    )
}