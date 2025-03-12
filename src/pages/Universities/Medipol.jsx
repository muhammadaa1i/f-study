import Aos from 'aos'
import React, { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import medipolbg from '../../images/medipolbg.jpg'
import medipol2 from '../../images/medipol2.jpg'
import medipol3 from '../../images/medipol3.jpg'

const Medipol = () => {

    useEffect(() => {
        Aos.init({ duration: 800 })
    }, [])

    useEffect(() => {
        const img = new Image();
        img.src = medipolbg;
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
                    backgroundImage: `linear-gradient(rgba(32, 32, 32, 0.623), rgba(31, 31, 31, 0.712)), url(${medipolbg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}>
                <h1 className='main-text w-full max-w-[400px] text-xl md:max-w-[700px] md:text-3xl lg:max-w-[1000px] lg:text-4xl lg:px-5 lg:py-4 xl:text-5xl text-center text-white uppercase font-semibold px-4 py-3 rounded-2xl'>
                    <TypeAnimation
                        sequence={[
                            "Istanbul Medipol universiteti",
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
                    <p>40000</p>
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
                    <p>12</p>
                    <h2 className='mt-[-6px] text-center'>Fakultet soni</h2>
                </span>
            </section>

            <div className="main-content max-w-7xl w-full px-8 m-auto text-[#004D91]">

                <section className="flex flex-col items-start mt-8 mb-4">
                    <div
                        data-aos="fade-right"
                        className="bg-[#004D91] h-[2px] w-[100%] m-auto rounded-lg"></div>
                    <h1
                        data-aos="fade-right"
                        className="text-2xl text-center md:text-3xl font-semibold uppercase">Istanbul Medipol University – Zamonaviy Ta’lim Maskani</h1>
                </section>

                <section className='flex flex-col gap-4 justify-between'>
                    <h1
                        data-aos="fade-right"
                        className="font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>Istanbul Medipol Universiteti</strong> – Turkiyaning eng nufuzli va zamonaviy oliy ta’lim muassasalaridan biri bo‘lib, yuqori sifatli ta’lim, innovatsion tadqiqotlar va xalqaro hamkorlik bilan ajralib turadi. Universitet 2009-yilda tashkil etilgan bo‘lib, qisqa vaqt ichida Turkiyaning eng rivojlangan universitetlaridan biriga aylandi. Medipol Universiteti ayniqsa tibbiyot, muhandislik, biznes va ijtimoiy fanlar sohalarida kuchli akademik dasturlari bilan mashhur.
                    </h1>
                    <img
                        data-aos="zoom-in"
                        className='w-full h-full m-auto max-h-[350px] max-w-[400px] rounded-2xl shadow-2xl'
                        src={medipol2}>
                    </img>
                </section>

                <section className="flex flex-col mt-8">
                    <div
                        data-aos="fade-right"
                        className="bg-[#004D91] h-[2px] w-[80%] m-auto rounded-lg"></div>
                    <h1
                        data-aos="fade-right"
                        className="text-2xl text-center md:text-3xl font-semibold uppercase">Afzalliklari</h1>
                </section>

                <section className='flex flex-col gap-2 justify-between mt-4'>
                    <h1
                        data-aos="fade-right"
                        className="leading-relaxed font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>Yuqori reyting va tan olingan diplom</strong> – Istanbul Medipol Universiteti milliy va xalqaro reytinglarda yuqori o‘rinlarni egallab kelmoqda. Uning diplomi Yevropa, AQSh va boshqa davlatlarda tan olinadi.
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="leading-relaxed font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>Zamonaviy infratuzilma</strong> – Universitetda ilg‘or texnologiyalar bilan jihozlangan laboratoriyalar, simulyatsion markazlar, kutubxonalar va kampuslar mavjud.
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="leading-relaxed font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>Xalqaro talabalar uchun qulay muhit</strong> – Dunyoning turli burchaklaridan kelgan talabalar uchun maxsus dasturlar va qo‘llab-quvvatlash xizmatlari mavjud.
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="leading-relaxed font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>Tibbiyot yo‘nalishida kuchli tajriba</strong> – Medipol Universiteti Turkiyaning eng yaxshi tibbiyot universitetlaridan biri bo‘lib, o‘z klinikalariga ega.
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="leading-relaxed font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>Amaliyot va ishga joylashish imkoniyatlari</strong> – Talabalar universitet qoshidagi klinikalar, kompaniyalar va xalqaro tashkilotlarda amaliyot o‘tashlari mumkin.
                    </h1>
                </section>

                <section className="flex flex-col mt-8">
                    <div
                        data-aos="fade-right"
                        className="bg-[#004D91] h-[2px] w-[100%] m-auto rounded-lg"></div>
                    <h1
                        data-aos="fade-right"
                        className="text-2xl text-center md:text-3xl font-semibold uppercase">Fakultetlar va Yo‘nalishlar</h1>
                </section>

                <section className='flex flex-col gap-6 items-center justify-between'>

                    <span
                        data-aos="fade-right"
                        className="mt-4 leading-relaxed flex flex-col gap-3 font-medium lg:max-w-[700px] lg:text-[20px]">

                        <h1 className='font-bold text-center'>
                            Istanbul Medipol Universitetida turli sohalar bo‘yicha ta’lim olish imkoniyati mavjud. Quyida asosiy fakultetlar va yo‘nalishlar keltirilgan:
                        </h1>

                        <span className='specify w-full h-full flex flex-col gap-4 border-2 border-[#004D91] rounded-3xl p-4 mb-3'>

                            <span className='flex flex-col gap-5 min-[500px]:grid min-[500px]:grid-cols-2 min-[500px]:gap-6'>

                                <span className='mt-[-8px] flex flex-col'>
                                    <h1 className='font-bold'>
                                        1. Tibbiyot va Sog‘liqni Saqlash Fakultetlari:
                                    </h1>
                                    <h1>
                                        • Umumiy tibbiyot
                                    </h1>
                                    <h1>
                                        • Stomatologiya
                                    </h1>
                                    <h1>
                                        • Farmatsiya
                                    </h1>
                                    <h1>
                                        • Hamshiralik ishi
                                    </h1>
                                    <h1>
                                        • Fizioterapiya va reabilitatsiya
                                    </h1>
                                    <h1>
                                        • Jamoat salomatligi
                                    </h1>
                                </span>

                                <span className='mt-[-8px] flex flex-col'>
                                    <h1 className='font-bold'>
                                        2. Muhandislik va Axborot Texnologiyalari:
                                    </h1>
                                    <h1>
                                        • Kompyuter muhandisligi
                                    </h1>
                                    <h1>
                                        • Elektronika va telekommunikatsiya muhandisligi
                                    </h1>
                                    <h1>
                                        • Sun’iy intellekt va ma’lumotlar fanlari
                                    </h1>
                                    <h1>
                                        • Biotibbiyot muhandisligi
                                    </h1>
                                </span>

                                <span className='mt-[-8px] flex flex-col'>
                                    <h1 className='font-bold'>
                                        3. Iqtisodiyot va Biznes Fakulteti:
                                    </h1>
                                    <h1>
                                        • Xalqaro biznes
                                    </h1>
                                    <h1>
                                        • Menejment
                                    </h1>
                                    <h1>
                                        • Bank ishi va moliya
                                    </h1>
                                    <h1>
                                        • Turizm va mehmonxona boshqaruvi
                                    </h1>
                                </span>

                                <span className='mt-[-8px] flex flex-col'>
                                    <h1 className='font-bold'>
                                        4. Gumanitar va Ijtimoiy Fanlar:
                                    </h1>
                                    <h1>
                                        • Huquqshunoslik
                                    </h1>
                                    <h1>
                                        • Psixologiya
                                    </h1>
                                    <h1>
                                        • Xalqaro munosabatlar
                                    </h1>
                                    <h1>
                                        • Media va kommunikatsiya
                                    </h1>
                                </span>

                            </span>

                        </span>

                        <img
                            data-aos="zoom-in"
                            className='w-full h-full m-auto mt-4 max-h-[350px] max-w-[450px] md:max-h-[350px] min-[900px]:max-w-[200px] rounded-2xl lg:mr-20 shadow-2xl'
                            src={medipol3}>
                        </img>

                    </span>

                </section>

                <section className="flex flex-col items-start mt-8">
                    <div
                        data-aos="fade-right"
                        className="bg-[#004D91] h-[2px] w-[100%] m-auto rounded-lg"></div>
                    <h1
                        data-aos="fade-right"
                        className="text-2xl text-center md:text-3xl font-semibold uppercase">Kampus Hayoti va Talabalar Uchun Sharoitlar:</h1>
                </section>

                <section className='flex flex-col gap-4 justify-between'>
                    <h1
                        data-aos="fade-right"
                        className="font-medium lg:max-w-[700px] lg:text-[20px] mt-4">
                        <strong>Yotoqxonalar</strong> – Talabalar uchun xavfsiz va qulay turar joylar mavjud.
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>Kutubxona va IT markazlar</strong> – 24/7 ishlaydigan zamonaviy kutubxona va onlayn resurslar.
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>O‘quv laboratoriyalari</strong> – Eng so‘nggi texnologiyalar bilan jihozlangan ilmiy va texnik laboratoriyalar.
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>Sport majmualari</strong> – Fitnes zallari, sport maydonchalari va basseynlar mavjud.
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>Talabalar klublari va tadbirlar</strong> – Talabalar o‘z qiziqishlariga ko‘ra turli klublar va tashkilotlarga qo‘shilishlari mumkin.
                    </h1>
                </section>

                <span
                    data-aos="zoom-in"
                    className='specify2 w-full h-full flex flex-col gap-4 border-2 border-[#004D91] rounded-3xl mt-4 p-4 mb-3'>
                    <h1 className='font-bold text-center'>
                        Qabul Jarayoni va Talablar:
                    </h1>

                    <span className='flex flex-col gap-5'>

                        <span className='mt-[-8px] font-medium'>
                            <h1 className='mb-3'>
                                <strong>Attestat yoki diplom</strong> (o‘rta maktab yoki kollejni tamomlaganlik haqida)
                            </h1>
                            <h1 className='mb-3'>
                                <strong>Til bilish sertifikati</strong> (Ingliz yoki Turk tilida – TOEFL yoki Tomer talab qilinishi mumkin)
                            </h1>
                            <h1 className='mb-3'>
                                <strong>Motivatsion xat va CV</strong> (ba’zi fakultetlar uchun)
                            </h1>
                            <h1 className='mb-3'>
                                <strong>Intervyu yoki qo‘shimcha imtihon</strong> (ba’zi yo‘nalishlar uchun)
                            </h1>
                        </span>

                    </span>

                </span>

            </div>
        </>
    )
}

export default Medipol