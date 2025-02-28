import Link from "next/link";

export default function Adverts(){
    return(
        <div className="">
            <div className="mt-8">
                <h1 className="text-center text-[22px] text-neutral-800">Browse our best selling items.</h1>
                 <div className="flex text-neutral-800 gap-2 p-3">
                    <Link href="" className="w-1/3 h-64 bg-[url(/img/pexels-dmitriy-steinke-559643503-17630811.jpg)] 
                    bg-cover border-2 mt-8 content-end rounded">
                    <div>
                        <div className="text-center text-[18px]">
                            <h1>Clothing</h1>
                        </div>
                    </div>
                    </Link>
                    <Link href="" className="w-1/3 h-64 bg-[url(/img/pexels-tara-winstead-6489459.jpg)] 
                    bg-cover border-2 mt-8 content-end rounded">
                    <div>
                        <div className="text-center text-[18px]">
                            <h1>Plants</h1>
                        </div>
                    </div>
                    </Link>
                    <Link href="" className="w-1/3 h-64 bg-[url(/img/pexels-craytive-4980170.jpg)] 
                    bg-cover border-2 mt-8 content-end rounded">
                    <div>
                        <div className="text-center text-[18px]">
                            <h1>Accessories</h1>
                        </div>
                    </div>
                    </Link>
                    <Link href="" className="w-1/3 h-64 bg-[url(/img/pexels-alleksana-4223918.jpg)] 
                    bg-cover border-2 mt-8 content-end rounded">
                    <div>
                        <div className="text-center text-[18px]">
                            <h1>Food</h1>
                        </div>
                    </div>
                    </Link>
                 </div>
            </div>
        </div>
    )
}