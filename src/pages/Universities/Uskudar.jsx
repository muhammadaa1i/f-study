import Aos from 'aos'
import React, { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import uskudarbg from '../../images/uskudarbg.jpg'
import uskudar2 from '../../images/uskudar2.jfif'
import uskudar3 from '../../images/uskudar3.jfif'

const Uskudar = () => {

    useEffect(() => {
        Aos.init({ duration: 800 })
    }, [])

    useEffect(() => {
        const img = new Image();
        img.src = uskudarbg;
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
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.623), rgba(0, 0, 0, 0.712)), url(${uskudarbg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}>
                <h1 className='main-text w-full max-w-[400px] text-xl md:max-w-[700px] md:text-3xl lg:max-w-[1000px] lg:text-4xl lg:px-5 lg:py-4 xl:text-5xl text-center text-white uppercase font-semibold px-4 py-3 rounded-2xl'>
                    <TypeAnimation
                        sequence={[
                            "Istanbul Üsküdar universiteti",
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
                    <p>20000</p>
                    <h2 className='mt-[-6px] text-center'>Talabalar soni</h2>
                </span>

                <span
                    data-aos='zoom-in'
                    className='flex flex-col items-center justify-center gap-2'>
                    <i class="fa-solid fa-house text-3xl"></i>
                    <p>6</p>
                    <h2 className='mt-[-6px] text-center'>Kampuslar soni</h2>
                </span>

                <span
                    data-aos='zoom-in'
                    className='flex flex-col items-center justify-center gap-2'>
                    <i class="fa-solid fa-building-columns text-3xl"></i>
                    <p>5</p>
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
                        className="text-2xl text-center md:text-3xl font-semibold uppercase">Istanbul Üsküdar University – Zamonaviy Ta’lim Maskani</h1>
                </section>

                <section className='flex flex-col gap-6 justify-between'>
                    <h1
                        data-aos="fade-right"
                        className="font-medium lg:max-w-[700px] lg:text-[20px]">
                        Turkiyaning <strong>nevrologiya, psixologiya, sog‘liqni saqlash va muhandislik</strong> sohalariga ixtisoslashgan yetakchi universitetlaridan biridir. 2011-yilda tashkil etilgan bo‘lib, qisqa vaqt ichida Turkiyaning eng nufuzli ta’lim muassasalaridan biriga aylandi. NP İstanbul Neyropsixiatriya shifoxonasi bilan hamkorlik qilgani sababli, ayniqsa, sog‘liqni saqlash va psixologiya bo‘yicha kuchli amaliyot bazasiga ega.
                        <br />
                        <br />
                        Üsküdar Universiteti nazariy bilim va amaliyot uyg‘unligi, innovatsion tadqiqot markazlari va kuchli xalqaro aloqalari bilan ajralib turadi. Universitet ilmiy izlanishlar va sog‘liqni saqlash sohalarida yuqori darajadagi mutaxassislar tayyorlashga yo‘naltirilgan.
                    </h1>
                    <img
                        data-aos="zoom-in"
                        className='w-full h-full m-auto max-h-[450px] max-w-[550px] md:max-h-[350px] min-[900px]:max-w-[200px] rounded-2xl lg:mr-20 shadow-2xl'
                        src={uskudar2}>
                    </img>
                </section>

                <section className="flex flex-col items-start mt-8">
                    <div
                        data-aos="fade-right"
                        className="bg-[#004D91] h-[2px] w-[100%] m-auto rounded-lg"></div>
                    <h1
                        data-aos="fade-right"
                        className="text-2xl text-center md:text-3xl font-semibold uppercase">Nima Uchun Aynan Üsküdar Universiteti?</h1>
                </section>

                <section className='flex flex-col gap-2 justify-between mt-4'>
                    <h1
                        data-aos="fade-right"
                        className="leading-relaxed font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>Turkiyaning eng kuchli psixologiya va nevrologiya universiteti:</strong>
                        <br />
                        – Universitet neyropsixologiya, ruhiy salomatlik va sog‘liqni saqlash sohasida yetakchi hisoblanadi.
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="leading-relaxed font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong> NP Istanbul Neyropsixiatriya shifoxonasi bilan amaliyot imkoniyatlari:</strong>
                        <br />
                        – Talabalar real klinik sharoitda tajriba orttirish imkoniga ega.
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="leading-relaxed font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>Amaliyot va tadqiqot imkoniyatlari yuqori :</strong>
                        <br />
                        – Universitetning ilmiy laboratoriyalari dunyo standartlariga javob beradi.
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="leading-relaxed font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>Tibbiyot va biotexnologiya sohalarida innovatsion yondashuv:</strong>
                        <br />
                        – Sun’iy intellekt, genomika va biotexnologiya sohalarida kuchli dasturlar mavjud.
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="leading-relaxed font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>Xalqaro hamkorlik va almashinuv dasturlari:</strong>
                        <br />
                        – Talabalar dunyoning turli universitetlari bilan almashinuv dasturlarida qatnashish imkoniyatiga ega.
                    </h1>
                    <img
                        data-aos="zoom-in"
                        className='w-full h-full m-auto mt-4 max-h-[350px] max-w-[450px] md:max-h-[350px] min-[900px]:max-w-[200px] rounded-2xl lg:mr-20 shadow-2xl'
                        src={uskudar3}>
                    </img>
                </section>

                <section className="flex flex-col items-start mt-8">
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
                            Üsküdar Universiteti sog‘liqni saqlash va inson psixologiyasi sohalariga ixtisoslashgan universitet bo‘lib, quyidagi asosiy yo‘nalishlarni taklif etadi:
                        </h1>

                        <span className='specify w-full h-full flex flex-col gap-4 border-2 border-[#004D91] rounded-3xl p-4 mb-3'>

                            <span className='flex flex-col gap-5 min-[500px]:grid min-[500px]:grid-cols-2 min-[500px]:gap-6'>

                                <span className='mt-[-8px] flex flex-col'>
                                    <h1 className='font-bold'>
                                        1. Tibbiyot va Sog‘liqni Saqlash Fakulteti
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
                                        • Fizioterapiya va reabilitatsiya
                                    </h1>
                                    <h1>
                                        • Diagnostika va radiologiya
                                    </h1>
                                </span>

                                <span className='mt-[-8px] flex flex-col'>
                                    <h1 className='font-bold'>
                                        2. Psixologiya va Nevrologiya Fakulteti
                                    </h1>
                                    <h1>
                                        • Psixologiya
                                    </h1>
                                    <h1>
                                        • Neyropsixologiya
                                    </h1>
                                    <h1>
                                        • Klinik psixologiya
                                    </h1>
                                    <h1>
                                        • Kognitiv fanlar
                                    </h1>
                                </span>

                                <span className='mt-[-8px] flex flex-col'>
                                    <h1 className='font-bold'>
                                        3. Muhandislik va Texnologiya Fakulteti
                                    </h1>
                                    <h1>
                                        • Biotibbiyot muhandisligi
                                    </h1>
                                    <h1>
                                        • Kompyuter muhandisligi
                                    </h1>
                                    <h1>
                                        • Sun’iy intellekt va ma’lumotlar fanlari
                                    </h1>
                                    <h1>
                                        • Elektronika muhandisligi
                                    </h1>
                                </span>

                                <span className='mt-[-8px] flex flex-col'>
                                    <h1 className='font-bold'>
                                        4. Ijtimoiy Fanlar Fakulteti
                                    </h1>
                                    <h1>
                                        • Sotsiologiya
                                    </h1>
                                    <h1>
                                        • Xalqaro munosabatlar
                                    </h1>
                                    <h1>
                                        • Media va kommunikatsiya
                                    </h1>
                                    <h1>
                                        • Kriminologiya va xavfsizlik fanlari
                                    </h1>
                                </span>

                                <span className='mt-[-8px] flex flex-col'>
                                    <h1 className='font-bold'>
                                        5. Gumanitar Fanlar Fakulteti
                                    </h1>
                                    <h1>
                                        • Tarix
                                    </h1>
                                    <h1>
                                        • Falsafa
                                    </h1>
                                    <h1>
                                        • Adabiyot va tilshunoslik
                                    </h1>
                                </span>

                            </span>

                        </span>

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
                        <strong>NP Istanbul Neyropsixiatriya shifoxonasi bilan hamkorlik</strong> – Talabalar uchun real kasbiy amaliyot va klinik tajriba olish imkoniyati mavjud.
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>Zamonaviy ilmiy tadqiqot markazlari</strong> – Sun’iy intellekt, genetika va neyropsixologiya bo‘yicha eng ilg‘or laboratoriyalar mavjud.
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>Talaba yotoqxonalar</strong> –  Xavfsiz va zamonaviy turar joylar talabalar uchun mavjud.
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>Sport va madaniy tadbirlar</strong> – Talabalar uchun sport zallari, klublar va tadbirlar faol ishlaydi.
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>Startup va innovatsiya markazlari</strong> – O‘z biznes loyihalarini boshlash istagida bo‘lgan talabalar uchun maxsus dasturlar bor.
                    </h1>
                </section>

                <span
                    data-aos="zoom-in"
                    className='specify2 w-full h-full flex flex-col gap-4 border-2 border-[#004D91] rounded-3xl mt-4 p-4 mb-3'>
                    <h1 className='font-bold text-center'>
                        E’tibor bering! Future Study orqali siz:
                    </h1>

                    <span className='flex flex-col gap-5'>

                        <span className='mt-[-8px] font-medium'>
                            <h1 className='mb-3'>
                                Hech qanday imtihon topshirmasdan o‘qishga kira olasiz!
                            </h1>
                            <h1>
                                Hech qanday til sertifikatlari talab qilinmaydi! (IELTS yoki TOEFL kerak emas)
                            </h1>
                            <h1>
                                Firma to‘lovisiz qabul qilinasiz!
                            </h1>
                            <h1>
                                Va eng muhimi – 71% chegirmani qo‘lga kiritish imkoniyatiga egasiz!
                            </h1>
                        </span>

                    </span>

                </span>

            </div>

        </>
    )
}

export default Uskudar