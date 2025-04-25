import Image from "next/image";
import Link from "next/link"; 

export default function Product({id, name, price, image} : {id: number, name: string, price: string, image: string}){

    return(
        <>
        <div className="bg-zinc-100 rounded p-2 text-center self-start">
            <Link href={`/product/${id}`}>
            <Image
                height={400}
                width={160}
                alt=""
                className="rounded"
                src={image}
            />
            </Link>
            <h1 className="text-green-600">{price}</h1>
            <h1 className="">{name}</h1>
            <div className="flex justify-center">
            <button className="bg-green-600 text-white px-1 mr-2 rounded flex">
                <Image
                 src={"img/shopping_bag_30dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"}
                 width={22}
                 height={14}
                 alt={""}
                 className="self-center"
                /><span className="self-center mt-1">add to cart</span>
            </button>
            <button className="bg-red-500 text-white px-2 mr-2 rounded flex">
                <Image
                 src={"img/favorite_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"}
                 width={22}
                 height={14}
                 alt={""}
                 className="self-center"
                />
            </button>
            </div>
        </div>
        </>
    )
}