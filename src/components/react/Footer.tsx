import React from 'react';

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <>
            <section className='py-10 px-8'>
                <aside className='mb-10'>
                    <aside className='mb-10'>
                        <p className="font-grotesk font-bold leading-8 text-3xl text-blue-king w-[85%]">
                            El futuro no sucede, nosotros lo creamos.
                        </p>
                    </aside>
                    <aside>
                        <button
                            className={`font-grotesk font-light italic text-lg text-center text-slate-100 rounded-full bg-blue-king w-full mx-auto py-3 shadow-md `}
                        >
                            {'Solicitar asesoría gratuita ahora >'}
                        </button>
                    </aside>
                </aside>
                <aside>
                    <p className="font-grotesk text-xl text-custom-gray mb-8">
                        Políticas de privacidad
                    </p>
                    <p className="font-grotesk text-xl text-custom-gray mb-8">
                        Términos y condiciones
                    </p>
                    <p className="font-grotesk text-xl text-custom-gray mb-8">Ayuda</p>

                    <img src="/tech-landing/img/social.svg" alt="social" className='w-[80px] mb-2' />
                    <p className="font-grotesk text-lg text-custom-gray mb-8">© Xpand Tech. {currentYear} All rights reserved.</p>
                </aside>
            </section>
        </>
    )
}

