import React, { useEffect, useState } from 'react'
import beykent from '../../images/beykent.jpg'
import Aos from 'aos'
import { TypeAnimation } from 'react-type-animation'
import beykentbg from '../../images/beykentbg.webp'

const Beykent = () => {
    useEffect(() => {
        Aos.init({ duration: 800 })
    }, [])

    useEffect(() => {
        const img = new Image();
        img.src = beykent;
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

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div
                className='hero w-[100vw] h-[60vh] flex justify-evenly flex-col items-center'
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.623), rgba(0, 0, 0, 0.712)), url(${beykent})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}>
                <h1 className='main-text w-full max-w-[400px] text-xl md:max-w-[700px] md:text-3xl lg:max-w-[1000px] lg:text-4xl lg:px-5 lg:py-4 xl:text-5xl text-center text-white uppercase font-semibold px-4 py-3 rounded-2xl'>
                    <TypeAnimation
                        sequence={[
                            "Istanbul Beykent universiteti",
                        ]}
                        speed={50}
                        cursor={false}
                    />
                </h1>
                <a
                    onClick={handleScroll}
                    data-aos='zoom-out-up'
                    href='#form'
                    className='text-white bg-[#004D91] w-[240px] h-12 rounded-xl flex items-center justify-center '>
                    <h4 className='text-[18px] mr-2'>Hozir murojaat qiling</h4>
                    <i className="fa-solid fa-down-long text-[18px] mt-1.5"></i>
                </a>
            </div>

            {!isImageLoaded && (
                <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
            )}

            <section className='w-[90%] m-auto h-auto bg-[#004D91] mt-4 rounded-2xl text-white grid grid-cols-2 gap-2 p-4 max-[350px]:flex max-[350px]:flex-col max-[350px]:gap-3 min-[500px]:grid-cols-3 min-[500px]:gap-4'>
                <span
                    data-aos='zoom-in'
                    className='flex flex-col items-center justify-center gap-2'>
                    <i class="fa-solid fa-graduation-cap text-3xl"></i>
                    <p>30000</p>
                    <h2 className='mt-[-6px] text-center'>Talabalar soni</h2>
                </span>

                <span
                    data-aos='zoom-in'
                    className='flex flex-col items-center justify-center gap-2'>
                    <i class="fa-solid fa-house text-3xl"></i>
                    <p>4</p>
                    <h2 className='mt-[-6px] text-center'>Kampuslar soni</h2>
                </span>

                <span
                    data-aos='zoom-in'
                    className='flex flex-col items-center justify-center gap-2'>
                    <i class="fa-solid fa-building-columns text-3xl"></i>
                    <p>10</p>
                    <h2 className='mt-[-6px] text-center'>Fakultet soni</h2>
                </span>
            </section>

            <div className="main-content max-w-7xl w-full px-8 m-auto text-[#004D91]">

                <section className="flex flex-col items-start mt-8 mb-6">
                    <div
                        data-aos="fade-right"
                        className="bg-[#004D91] h-[2px] w-[100%] m-auto rounded-lg"></div>
                    <h1
                        data-aos="fade-right"
                        className="text-2xl text-center md:text-3xl font-semibold uppercase">Istanbul Kent University – Zamonaviy Ta’lim Maskani</h1>
                </section>


                <section className='flex flex-col gap-6 justify-between'>
                    <img
                        data-aos="zoom-in"
                        className='w-full h-full m-auto max-h-[450px] max-w-[550px] md:max-h-[350px] min-[900px]:max-w-[200px] rounded-2xl lg:mr-20 shadow-2xl'
                        src={beykentbg}>
                    </img>
                    <h1
                        data-aos="fade-right"
                        className="mt-4 leading-relaxed font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>Istanbul Beykent University</strong> – Turkiyaning Istanbul shahrida joylashgan nufuzli xususiy oliy o'quv yurti bo'lib, 1997-yilda Adem Chelik-Beykent Ta'lim Vaqfi tomonidan tashkil etilgan. Beykent universiteti Yevropa universitetlari bilan Erasmus dasturi doirasida hamkorlik qiladi, bu esa talabalarga xalqaro tajriba orttirish imkonini beradi. Universitetda ta'lim turk va ingliz tillarida olib boriladi, bu esa xorijiy talabalar uchun keng imkoniyatlar yaratadi.
                        <br />
                        <br />
                        Shuningdek, universitetda 4 ta kollej, masofaviy ta'lim tizimi, 2 ta institut va 9 ta tadqiqot markazi faoliyat yuritadi. Universitetda har yili 30,000 ga yaqin talaba ta'lim oladi, ulardan 50% ga yaqini stipendiyaga ega.
                    </h1>
                </section>

                <section className="flex flex-col mt-8">
                    <div
                        data-aos="fade-right"
                        className="bg-[#004D91] h-[2px] w-[100%] m-auto rounded-lg"></div>
                    <h1
                        data-aos="fade-right"
                        className="text-2xl text-center md:text-3xl font-semibold uppercase">Beykent universitetida  kelajagingizni shakllantiring</h1>
                </section>

                <section className='flex max-[550px]:flex-col gap-6 flex-row justify-between'>
                    <span
                        data-aos="fade-right"
                        className="mt-4 leading-relaxed flex flex-col gap-3 font-medium lg:max-w-[700px] lg:text-[20px]">
                        <h1>
                            Istanbul Beykent universiteti ilg'or ta'lim infratuzilmasi va keng qamrovli o'quv dasturlari bilan o'z talabalariga zamonaviy ta'lim muhitini taklif etadi. Mutaxassis akademik xodimlarimiz, innovatsion tadqiqot imkoniyatlari va xalqaro hamkorlik tufayli talabalarimiz nazariy bilimlarni ham, amaliy dasturlarni ham eng yaxshi tarzda o'rganadilar. Keng qamrovli stipendiya imkoniyatlari, dinamik kampus hayoti va sohaviy aloqalar bizning talabalarimizga martaba maqsadlariga erishishda kuchli yordam beradi.
                        </h1>
                    </span>

                </section>

            </div>

        </>
    )
}

export default Beykent