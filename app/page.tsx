"use client";
import CarouselLite from "@/components/CarouselLite";
import Header from "@/components/Header";
import ScrollView from "@/components/ScrollView";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="bg-transparent">
        <ScrollView />
        <div className="px-8 py-7 border-y-[1px]">
          <CarouselLite />
        </div>
        <section className="pt-14 w-full flex flex-row px-8">
          <div className="flex w-[15%] border-r-[1px]">
            <div>
              <h2 className="text-xl font-semibold text-slate-950 capitalize">
                all categories
              </h2>
              <div className="py-6">
                <ul>
                  <li>
                    <button
                      type="button"
                      className="capitalize px-4 py-2.5 flex flex-row gap-3.5"
                    >
                      <Image
                        alt="food-svg"
                        src={"/pizza.svg"}
                        width={25}
                        height={25}
                      />
                      pizza
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="capitalize px-4 py-2.5 flex flex-row gap-3.5"
                    >
                      <Image
                        alt="food-svg"
                        src={"/hamburger.svg"}
                        width={25}
                        height={25}
                      />
                      burgers
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="capitalize px-4 py-2.5 flex flex-row gap-3.5"
                    >
                      <Image
                        alt="food-svg"
                        src={"/french-fries.svg"}
                        width={25}
                        height={25}
                      />
                      fish n chips
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="capitalize px-4 py-2.5 flex flex-row gap-3.5"
                    >
                      <Image
                        alt="food-svg"
                        src={"/poultry-leg.svg"}
                        width={25}
                        height={25}
                      />
                      BBQ
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="capitalize px-4 py-2.5 flex flex-row gap-3.5"
                    >
                      <Image
                        alt="food-svg"
                        src={"/steaming-bowl.svg"}
                        width={25}
                        height={25}
                      />
                      soup
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="capitalize px-4 py-2.5 flex flex-row gap-3.5"
                    >
                      <Image
                        alt="food-svg"
                        src={"/taco.svg"}
                        width={25}
                        height={25}
                      />
                      tacos
                    </button>
                  </li>
                </ul>
              </div>
              <div className="pb-6">
                <p className="text-base font-semibold text-slate-950 capitalize">
                  restaurant types
                </p>
                <ul className="flex flex-wrap justify-start items-center gap-3.5 py-8">
                  <li>
                    <button type="button" className="breadcrumb py-1.5">
                      <p>Chinese</p>
                    </button>
                  </li>
                  <li className="">
                    <button type="button" className="breadcrumb py-1.5">
                      <p>Sri Lankan</p>
                    </button>
                  </li>
                  <li className="">
                    <button type="button" className="breadcrumb py-1.5">
                      <p>Vegan</p>
                    </button>
                  </li>
                  <li className="">
                    <button type="button" className="breadcrumb py-1.5">
                      <p>Indian</p>
                    </button>
                  </li>
                  <li className="">
                    <button type="button" className="breadcrumb py-1.5">
                      <p>Skate House</p>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex w-[85%]">
            <div className="ml-6 w-full bg-slate-50"></div>
          </div>
        </section>
      </div>
    </main>
  );
}
