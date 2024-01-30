import React, { useState } from 'react';
import { type AcordeonData } from "./Acordeon.interfaces.ts";

import plusSvg from '../../../../public/img/plus.svg';
import lessSvg from '../../../../public/img/less.svg';


function Acordeon(params: AcordeonData) {

    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <section className='relative mb-4'>
                <hr className="border-1 border-header-lime mb-4" />
                <aside className="flex items-center px-1">
                    <aside className="basis-1/2">
                        <p className="font-pmono text-header-lime">{params.title}</p>
                    </aside>
                    <aside className="basis-1/2" onClick={() => setIsActive(!isActive)}>
                        <p className="font-pmono text-right items-center text-header-lime">
                            <span className="mr-2">
                                <img src={
                                    isActive
                                        ? lessSvg.src
                                        : plusSvg.src
                                } alt={params.imgName} width={16} className="inline" />
                            </span>
                            Ver </p>
                    </aside>
                </aside>
                <aside>
                    <aside className={`overflow-hidden transition-max-height duration-500 ease-in ${isActive ? 'max-h-[1000px]' : 'max-h-0'} `}>
                        <div className=''>
                            <aside className="w-3/5 mx-auto py-6">
                                <img src={params.img} alt="item_img" className='mx-auto' />
                            </aside>
                            <p className="font-grotesk font-medium text-xl text-center text-slate-100">
                                <span> {params.imgTitle} </span>
                            </p>
                            <p className="font-grotesk font-thin text-center text-slate-100">{params.imgDescription}</p>
                            <aside className="py-6">
                                <p className="font-grotesk italic text-center rounded-full bg-header-lime py-3 md:w-[80%] md:mx-auto lg:w-[70%] xl:w-[60%]">
                                    {params.btnDetail}
                                </p>
                            </aside>
                        </div>

                    </aside>

                </aside>
            </section >
        </>
    )
}

export default Acordeon;
