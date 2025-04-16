import Image from "next/image";
import Link from "next/link";

export default function MiniShop(){
    return(
        <div className="">
          <div className="p-3">
                <h1 className="text-[40px]">Our latest deals.</h1>
          </div>

          <div className="p-3">
                <h1 className="text-[22px]">Accessories and clothing.</h1>
          </div>
            <div className="flex gap-2 p-3 justify-evenly">
            <Link href='' className="bg-zinc-100 rounded">
              <Image
               height={400}
               width={250}
               alt=""
               className="rounded"
               src={'/img/pexels-alleksana-4223918.jpg'}
              />
              <div className="text-center">
                <p>Bowels</p>
                <button className="rounded bg-green-600 text-white px-4 py-2 my-2 self-center">
                <span>50% off</span></button>
              </div>
            </Link>
            <Link href='' className="bg-zinc-100 rounded">
              <Image
               height={400}
               width={250}
               alt=""
               className="rounded"
               src={'/img/pexels-craytive-4980170.jpg'}
              />
              <div className="text-center">
                <p>Wooden brushes</p>
                <button className="rounded bg-green-600 text-white px-4 py-2 my-2 self-center">
                <span>40% off</span></button>
              </div>
            </Link>
            <Link href='' className="bg-zinc-100 rounded">
              <Image
               height={400}
               width={250}
               alt=""
               className="rounded"
               src={'/img/pexels-craytive-4980170.jpg'}
              />
              <div className="text-center">
                <p>Fruits and vegies</p>
                <button className="rounded bg-green-600 text-white px-4 py-2 my-2 self-center">
                <span>15% off</span>
                </button>
              </div>
            </Link>
            <Link href='' className="bg-zinc-100 rounded">
              <Image
               height={400}
               width={250}
               alt=""
               className="rounded"
               src={'/img/pexels-dmitriy-steinke-559643503-17630811.jpg'}
              />
              <div className="text-center">
                <p>Clothing</p>
                <button className="rounded bg-green-600 text-white px-4 py-2 my-2 self-center">
                <span>34% off</span>
                </button>
              </div>
            </Link>
            <Link href='' className="bg-zinc-100 rounded">
              <Image
               height={400}
               width={250}
               alt=""
               className="rounded"
               src={'/img/pexels-athul-adhu-186900-684152.jpg'}
              />
              <div className="text-center">
                <p>Shoes</p>
                <button className="rounded bg-green-600 text-white px-4 py-2 my-2 self-center">
                <span>30% off</span>
                </button>
              </div>
            </Link>
            </div>
            <div className="p-3">
                <h1 className="text-[22px]">Home accessories.</h1>
          </div>
          <div className="flex gap-2 p-3 justify-evenly">
            <Link href='' className="bg-zinc-100 rounded">
              <Image
               height={400}
               width={250}
               alt=""
               className="rounded"
               src={'/img/pexels-alleksana-4223918.jpg'}
              />
              <div className="text-center">
                <p>Bowels</p>
                <button className="rounded bg-green-600 text-white px-4 py-2 my-2 self-center">
                <span>50% off</span></button>
              </div>
            </Link>
            <Link href='' className="bg-zinc-100 rounded">
              <Image
               height={400}
               width={250}
               alt=""
               className="rounded"
               src={'/img/pexels-craytive-4980170.jpg'}
              />
              <div className="text-center">
                <p>Wooden brushes</p>
                <button className="rounded bg-green-600 text-white px-4 py-2 my-2 self-center">
                <span>40% off</span></button>
              </div>
            </Link>
            <Link href='' className="bg-zinc-100 rounded">
              <Image
               height={400}
               width={250}
               alt=""
               className="rounded"
               src={'/img/pexels-craytive-4980170.jpg'}
              />
              <div className="text-center">
                <p>Fruits and vegies</p>
                <button className="rounded bg-green-600 text-white px-4 py-2 my-2 self-center">
                <span>15% off</span>
                </button>
              </div>
            </Link>
            <Link href='' className="bg-zinc-100 rounded">
              <Image
               height={400}
               width={250}
               alt=""
               className="rounded"
               src={'/img/pexels-dmitriy-steinke-559643503-17630811.jpg'}
              />
              <div className="text-center">
                <p>Clothing</p>
                <button className="rounded bg-green-600 text-white px-4 py-2 my-2 self-center">
                <span>34% off</span>
                </button>
              </div>
            </Link>
            <Link href='' className="bg-zinc-100 rounded">
              <Image
               height={400}
               width={250}
               alt=""
               className="rounded"
               src={'/img/pexels-athul-adhu-186900-684152.jpg'}
              />
              <div className="text-center">
                <p>Shoes</p>
                <button className="rounded bg-green-600 text-white px-4 py-2 my-2 self-center">
                <span>30% off</span>
                </button>
              </div>
            </Link>
            </div>            
        </div>
    )
}