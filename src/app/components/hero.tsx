import '../style/home.css';

export default function Hero(){
    return(
        <div className="h-dvh hero bg-stone-950	bg-[url(/img/pexels-tara-winstead-6489459.jpg)]
        bg-cover
        ">
            <div className="flex">
                <div className="text-stone-950 text-center my-8 mx-4 w-full">
                   <h6 className='hero-header'>Eco products all in one place.</h6>
                   <p>We outsource the worlds best eco products.</p>
                   <button className="rounded-full bg-green-600 text-white px-4 py-1 my-2">start shopping</button>
                </div>
            </div>
        </div>
    )
}