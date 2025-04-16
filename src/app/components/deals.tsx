import Image from "next/image"

export default function Deals(){
    return(
        <div className="deals-container mt-8">
            <div className="flex p-3">
                <div className="">
                    <Image 
                     width={500}
                     height={400}
                     src={"/img/pexels-alleksana-4386880.jpg"}
                     alt="Sale"
                    />
                </div>
                <div className="flex flex-1 bg-neutral-900">
                    <div className="text-white self-center w-full text-center">
                        <h1 className="text-[50px] ">50% off on your first purchase.</h1>
                        <p>Buy any eco friendly product and get a 50% discount.</p>
                        <button className="rounded bg-green-600 text-white px-3 self-center mt-3">Get started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}