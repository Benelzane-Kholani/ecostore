
export default function Hero(){
    return(
        <div className="h-dvh hero bg-stone-950	bg-[url(/img/pexels-tara-winstead-6489459.jpg)]
        bg-cover
        ">
            <div className="flex">
                <div className="text-stone-900 text-center my-8 mx-4 w-full">
                   <h6 className='hero-header'>Eco products all in one place.</h6>
                   <p className="">We outsource the worlds best eco products.</p>
                   <div className="my-2"><a href="./shop" className="rounded bg-green-600 text-white px-2 py-2 m-4">start shopping</a></div>
                </div>
            </div>
        </div>
    )
}