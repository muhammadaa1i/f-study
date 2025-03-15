import Aos from 'aos'
import questionsbg from '../../images/questionsbg.jpg'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Customaccordion from './Customaccordion'
import Customaccordion2 from './Customaccordion2'
import questions1 from '../../images/questions1.jpg'
import questions2 from '../../images/questions2.jpg'
import Customaccordion3 from './Customaccordion3'
import Customaccordion4 from './Customaccordion4'

const Questions = () => {
    useEffect(() => {
        Aos.init({ duration: 800 })
    }, [])

    useEffect(() => {
        const img = new Image();
        img.src = questionsbg;
        img.onload = () => {
            setIsImageLoaded(true);
        }
    }, [])
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const handleScroll = (e) => {
        e.preventDefault();
        const formElement = document.getElementById("form");

        if (formElement) {
            const yOffset = -180;
            const y = formElement.getBoundingClientRect().top + window.scrollY + yOffset;

            window.scrollTo({ top: y, behavior: "smooth" });
        }
    }

    const { t } = useTranslation()
    return (
        <>
            <div
                className='hero w-[100vw] h-[60vh] flex justify-evenly flex-col items-center'
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.623), rgba(0, 0, 0, 0.712)), url(${questionsbg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}>
                <h1
                    data-aos='zoom-out-up'
                    className='main-text w-full max-w-[400px] text-xl md:max-w-[700px] md:text-3xl lg:max-w-[1000px] lg:text-4xl lg:px-5 lg:py-4 xl:text-5xl text-center text-white uppercase font-semibold px-4 py-3 rounded-2xl'>
                    {t("Har bir mavzu bo'yicha sizni qiziqtirgan savollar")}
                </h1>
                <a
                    onClick={handleScroll}
                    data-aos='zoom-out-up'
                    href='#form'
                    className='text-white bg-[#004D91] w-[240px] h-12 rounded-xl flex items-center justify-center '>
                    <h4 className='text-[18px] mr-2'>{t("Hozir murojaat qiling")}</h4>
                    <i className="fa-solid fa-down-long text-[18px] mt-1.5"></i>
                </a>
            </div>

            {!isImageLoaded && (
                <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
            )}

            <div className="main-content max-w-7xl px-8 m-auto text-[#004D91]">

                <section className="flex flex-col mt-8 ">
                    <div
                        data-aos="zoom-out-up"
                        className="bg-[#004D91] h-[2px] w-[100%] m-auto rounded-lg"></div>
                    <h1
                        data-aos="zoom-out-up"
                        className="text-2xl text-center md:text-3xl font-semibold uppercase">{t("Ariza berish jarayoni")}</h1>
                </section>

                <Customaccordion />

                <section className="flex flex-col mt-8 ">
                    <div
                        data-aos="zoom-out-up"
                        className="bg-[#004D91] h-[2px] w-[100%] m-auto rounded-lg"></div>
                    <h1
                        data-aos="zoom-out-up"
                        className="text-2xl text-center md:text-3xl font-semibold uppercase">{t("To'lov shartlari")}</h1>
                </section>

                <Customaccordion2 />

                <section
                    data-aos='zoom-in'
                    className='w-[85vw] h-[50vh] m-auto mt-8 text-white text-center flex items-center justify-center rounded-4xl'
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.623), rgba(0, 0, 0, 0.712)), url(${questions1})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}>
                    <a
                        onClick={handleScroll}
                        href='#form'
                        className='text-white bg-[#004D91] w-[240px] h-16 rounded-xl flex flex-row items-center justify-evenly '>
                        <h4 className='text-[18px] max-w-[150px] w-full'>{t("Ma'lumotlaringizni qoldiring")}</h4>
                        <i className="fa-solid fa-pen-to-square text-[24px]"></i>
                    </a>
                </section>

                <section className="flex flex-col mt-8 ">
                    <div
                        data-aos="zoom-out-up"
                        className="bg-[#004D91] h-[2px] w-[100%] m-auto rounded-lg"></div>
                    <h1
                        data-aos="zoom-out-up"
                        className="text-2xl text-center md:text-3xl font-semibold uppercase">{t("Ishga qabul qilish va bitiruvdan keyingi yordam")}</h1>
                </section>

                <Customaccordion3 />

                <section
                    data-aos='zoom-in'
                    className='w-[85vw] h-[50vh] m-auto mt-8 text-white text-center flex items-center justify-center rounded-4xl'
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.623), rgba(0, 0, 0, 0.712)), url(${questions2})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}>
                    <a
                        onClick={handleScroll}
                        href='#form'
                        className='text-white bg-[#004D91] w-[240px] h-16 rounded-xl flex flex-row items-center justify-evenly '>
                        <h4 className='text-[18px]'>{t("Biz bilan bog'laning")}</h4>
                        <i className="fa-solid fa-pen-to-square text-[24px]"></i>
                    </a>
                </section>

                <section className="flex flex-col mt-8 ">
                    <div
                        data-aos="zoom-out-up"
                        className="bg-[#004D91] h-[2px] w-[100%] m-auto rounded-lg"></div>
                    <h1
                        data-aos="zoom-out-up"
                        className="text-2xl text-center md:text-3xl font-semibold uppercase">{t("Xalqaro talabalarni qo'llab-quvvatlash")}</h1>
                </section>

                <Customaccordion4 />

            </div>

        </>
    )
}

export default Questions