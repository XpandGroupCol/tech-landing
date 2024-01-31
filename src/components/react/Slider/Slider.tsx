import React, { useState, useEffect } from 'react';

interface SliderContent {
    imgPath: string;
    quote: string;
    autor: string;
    charge: string
}

export default function Slider() {
    const contents: SliderContent[] = [
        {
            imgPath: "/tech-landing/img/mccann.svg",
            quote: "Xpand Group se ha convertido en un gran socio estratégico para el desarrollo de soluciones tecnológicas para nuestros clientes, han demostrado grandes capacidades de ejecución.",
            autor: "Mario Benavente",
            charge: "Gerente General McCann Ecuador"
        },
        {
            imgPath: "/tech-landing/img/liliPink.svg",
            quote: "Nuestra estrategia de eCommerce con Xpand multiplicó nuestro alcance y ventas en este canal.",
            autor: "Nataly Bustos",
            charge: "Directora eCommerce"
        },
        {
            imgPath: "/tech-landing/img/nike.svg",
            quote: "La innovación y agilidad en desarrollos personalizados realizados por el equipo de Xpand Group llevó nuestra interacción con los clientes a otro nivel, ahora estamos listos para un paso más grande.",
            autor: "Gaby Padrón",
            charge: "Brand Manager Latin America Nike"
        },
        {
            imgPath: "/tech-landing/img/yamaha.svg",
            quote: "Nuestra estrategia de eCommerce con Xpand multiplicó nuestro alcance y ventas en este canal.",
            autor: "Nataly Bustos ",
            charge: "Directora eCommerce"
        },
        {
            imgPath: "/tech-landing/img/conaltura.svg",
            quote: "Xpand transformó nuestra visión inmobiliaria en una experiencia digital única.",
            autor: " Erick Sánchez",
            charge: "Gerente de Mercadeo"
        }
    ]
    const [locations, setLocations] = useState([1, 2, 3, 4]);

    const [current, setCurrent] = useState(0);
    const [activateAnimation, setActivateAnimation] = useState(false);

    let previousSlide = () => {
        let old = current
        let newV = locations.pop() ?? 0
        setCurrent(newV)
        setLocations([old, ...locations])
    }

    let nextSlide = () => {
        setActivateAnimation(true)
        let old = current
        let newV = locations.shift() ?? 0
        setCurrent(newV)
        setLocations([...locations, old])
    }

    useEffect(() => {

        if (activateAnimation)
            setTimeout(() => {
                setActivateAnimation(false)
            }, 700)

        const timer = setInterval(() => {
            nextSlide()
        }, 5000)

        return () => clearInterval(timer)
    }, [current])

    return (
        <>
            <section >

                <aside
                    className={`w-90% sm:w-[70%] md:w-[65%] sm:mx-auto bg-solution rounded-md mt-8 mb-4 pb-6 
                     transition-max-height duration-100 ease-in min-h-56  `}
                >
                    <aside className="py-6 px-5 flex">
                        <div className="basis-1/2">
                            <img
                                src="/tech-landing/img/ee.svg"
                                alt="maccan"
                                width="100"
                                className="absolute"
                            />
                        </div>
                        <div className={`basis-1/2 flex justify-end transition duration-100 ease-in ${activateAnimation ? 'scale-0' : ''}`}>
                            <img
                                src={contents[current].imgPath}
                                alt="maccan"
                                className="w-[60px] max-h-[30px] sm:w-[90px]"
                            />
                        </div>
                    </aside>
                    <aside>
                        <div
                            className={`text-slate-100 w-full text-xs sm:text-base flex items-center `}
                        >
                            <p className="px-3 text-header-lime" onClick={previousSlide}>
                                {"<"}
                            </p>
                            <div className="px-1 overflow-hidden relative">
                                <aside className="justify-center transition ease-out duration-50" style={{
                                    transform: `translateX(${activateAnimation ? `-${current * 150}%` : '0'} )`
                                }}
                                >
                                    <div>
                                        <p className="mb-2 text-sm">
                                            {contents[current].quote}
                                        </p>
                                        <p className="font-pmono text-header-lime">
                                            {contents[current].autor}
                                        </p>
                                        <p className="font-pmono text-header-lime">
                                            {contents[current].charge}
                                        </p>
                                    </div>
                                </aside>
                            </div>
                            <p className="px-3 text-header-lime" onClick={nextSlide}>{">"}</p>
                        </div>
                    </aside>
                </aside>
                <aside>
                    <aside className="md:w-[80%] md:mx-auto flex mb-8">
                        {
                            locations.map((index) => {
                                return (
                                    <aside key={index} className={`basis-1/4 size-16 flex justify-center items-center `}
                                        >
                                        <aside
                                            className="overflow-hidden bg-solution rounded-md mx-1 py-1 px-2 w-full sm:mx-4 sm:py-3 h-full flex self-center justify-center"
                                        >
                                            <img
                                                src={contents[index].imgPath}
                                                alt="lili"
                                                width="100%"
                                                className={'w-full transition ease-out duration-50'}
                                                style={{
                                                    transform: `translateX(${activateAnimation ? `-${current * 150}%` : '0'} )`
                                                }}
                                            />
                                        </aside>
                                    </aside>
                                )
                            })
                        }
                    </aside>
                </aside>
            </section>
        </>
    );
}