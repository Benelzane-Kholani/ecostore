import Link from "next/link";
import Image from "next/image";

export default function NavBar(){
    return(
        <div className="flex text-neutral-800 py-3.5 bg-zinc-200 border-1">
            <div className="text-black px-2 logo">
                <div className=""><a href="./" className="justify-self-center text-neutral-800">EcoStore</a></div>
            </div>
            <div className="flex px-3.5 gap-2 content-center">
             <div className="content-center">
             <a href="#" className="">plants</a>
             </div>
             <div className="content-center">
                <a href="#" className="">food</a>
             </div>
             <div className="content-center">
             <a href="#" className="">accessories</a>
             </div>
            </div>
            <div className="content-center">
                <button className="rounded-full bg-green-600 text-white px-3 self-center">shop</button>
            </div>
            <div className="flex-1">
                <div className="size-2/3 h-full rounded-full justify-self-center flex bg-zinc-100">
                   <input type="search" className="rounded-full bg-zinc-100 flex-1 px-2 outline-none"/>
                   <span className="self-center px-2">
                    <Image
                    src={"img/search_26dp_000000_FILL0_wght400_GRAD0_opsz24 (1).svg"}
                    width={23}
                    height={20}
                    alt={""}
                />
                   </span>
                </div>
            </div>
            <div className="flex">
                <Link href={""} className="float-end bg-green-600 text-white px-3 mr-2 rounded-full flex">
                <Image
                 src={"img/shopping_bag_30dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"}
                 width={23}
                 height={20}
                 alt={""}
                 className="self-center"
                /><span className="self-center mt-1">0</span>
                </Link>
            </div>
        </div>
    )
}