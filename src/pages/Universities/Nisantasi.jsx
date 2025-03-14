import Aos from 'aos'
import React, { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import nisantasibg from '../../images/nisantasibg.avif'
import nisantasi2 from '../../images/nisantasi2.jpg'

const Nisantasi = () => {
    useEffect(() => {
        Aos.init({ duration: 800 })
    }, [])

    useEffect(() => {
        const img = new Image();
        img.src = nisantasibg;
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
                    backgroundImage: `linear-gradient(rgba(32, 32, 32, 0.623), rgba(15, 15, 15, 0.712)), url(${nisantasibg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}>
                <h1 className='main-text w-full max-w-[400px] text-xl md:max-w-[700px] md:text-3xl lg:max-w-[1000px] lg:text-4xl lg:px-5 lg:py-4 xl:text-5xl text-center text-white uppercase font-semibold px-4 py-3 rounded-2xl'>
                    <TypeAnimation
                        sequence={[
                            "Istanbul Nişantaşı universiteti",
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
                    <p>3</p>
                    <h2 className='mt-[-6px] text-center'>Kampuslar soni</h2>
                </span>

                <span
                    data-aos='zoom-in'
                    className='flex flex-col items-center justify-center gap-2'>
                    <i class="fa-solid fa-building-columns text-3xl"></i>
                    <p>6</p>
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
                        className="text-2xl text-center md:text-3xl font-semibold uppercase">Istanbul Nişantaşı University – Zamonaviy Ta’lim Maskani</h1>
                </section>

                <section className='flex flex-col gap-6 justify-between'>
                    <h1
                        data-aos="fade-right"
                        className="font-medium lg:max-w-[700px] lg:text-[20px]">
                        Turkiyaning eng tez rivojlanayotgan xususiy oliy ta’lim muassasalaridan biri, zamonaviy ta’lim usullari, innovatsion infratuzilma va xalqaro talabalar uchun yaratilgan qulay sharoitlari bilan ajralib turadi. Universitet 2009-yilda tashkil etilgan bo‘lib, bugungi kunda <strong>biznes, muhandislik, dizayn va sog‘liqni saqlash</strong> sohalarida yetakchi universitetlar qatoriga kiradi.
                        <br />
                        <br />
                        Nişantaşı Universitetining asosiy maqsadi – talabalarni kelajak kasblariga tayyorlash, ularga raqobatbardosh bilim va amaliy ko‘nikmalar berishdir. Universitet Istanbulning markaziy hududlaridan birida joylashgan bo‘lib, talabalar uchun akademik va shaxsiy rivojlanish uchun keng imkoniyatlar yaratadi.
                    </h1>
                    <img
                        data-aos="zoom-in"
                        className='w-full h-full m-auto max-h-[300px] max-w-[300px] md:max-h-[350px] min-[900px]:max-w-[200px] rounded-2xl lg:mr-20 shadow-2xl'
                        src={nisantasi2}>
                    </img>
                </section>

                <section className="flex flex-col items-start mt-8">
                    <div
                        data-aos="fade-right"
                        className="bg-[#004D91] h-[2px] w-[100%] m-auto rounded-lg"></div>
                    <h1
                        data-aos="fade-right"
                        className="text-2xl text-center md:text-3xl font-semibold uppercase">Nima Uchun Aynan Nişantaşı Universiteti?</h1>
                </section>

                <section className='flex flex-col gap-2 justify-between mt-4'>
                    <h1
                        data-aos="fade-right"
                        className="leading-relaxed font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>Zamonaviy va innovatsion ta’lim:</strong>
                        <br />
                        – Universitet o‘zining ilg‘or pedagogik yondashuvi va amaliy ta’lim usullari bilan ajralib turadi.
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="leading-relaxed font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>Istanbulning markazida joylashgan:</strong>
                        <br />
                        – Universitet shahar markazida bo‘lib, talabalar uchun barcha qulayliklarni taqdim etadi.
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="leading-relaxed font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>Amaliyot va ishga joylashish imkoniyati yuqori:</strong>
                        <br />
                        – Universitet ko‘plab yirik kompaniyalar bilan hamkorlik qiladi.
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="leading-relaxed font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>Startup va tadbirkorlik qo‘llab-quvvatlanadi:</strong>
                        <br />
                        – Talabalar o‘z biznes g‘oyalarini universitet qoshidagi inkubator markazlarida rivojlantirishlari mumkin.
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="leading-relaxed font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>Xalqaro almashinuv dasturlari:</strong>
                        <br />
                        – Universitet Yevropa va AQShdagi nufuzli universitetlar bilan hamkorlik qiladi.
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
                            Nişantaşı Universiteti quyidagi sohalar bo‘yicha ta’lim dasturlarini taklif etadi:
                        </h1>

                        <span className='specify w-full h-full flex flex-col gap-4 border-2 border-[#004D91] rounded-3xl p-4 mb-3'>

                            <span className='flex flex-col gap-5 min-[500px]:grid min-[500px]:grid-cols-2 min-[500px]:gap-6'>

                                <span className='mt-[-8px] flex flex-col'>
                                    <h1 className='font-bold'>
                                        1. Muhandislik va Arxitektura Fakulteti
                                    </h1>
                                    <h1>
                                        • Kompyuter muhandisligi
                                    </h1>
                                    <h1>
                                        • Sun’iy intellekt va ma’lumotlar fanlari
                                    </h1>
                                    <h1>
                                        • Mechatronika muhandisligi
                                    </h1>
                                    <h1>
                                        • Qurilish muhandisligi
                                    </h1>
                                    <h1>
                                        • Arxitektura
                                    </h1>
                                </span>

                                <span className='mt-[-8px] flex flex-col'>
                                    <h1 className='font-bold'>
                                        2. Biznes va Menejment Fakulteti
                                    </h1>
                                    <h1>
                                        • Xalqaro biznes boshqaruvi
                                    </h1>
                                    <h1>
                                        • Bank ishi va moliya
                                    </h1>
                                    <h1>
                                        • Tadbirkorlik va innovatsiya
                                    </h1>
                                    <h1>
                                        • Marketing va raqamli biznes
                                    </h1>
                                </span>

                                <span className='mt-[-8px] flex flex-col'>
                                    <h1 className='font-bold'>
                                        3. Ijtimoiy Fanlar Fakulteti
                                    </h1>
                                    <h1>
                                        • Xalqaro munosabatlar
                                    </h1>
                                    <h1>
                                        • Psixologiya
                                    </h1>
                                    <h1>
                                        • Sotsiologiya
                                    </h1>
                                    <h1>
                                        • Media va kommunikatsiya
                                    </h1>
                                </span>

                                <span className='mt-[-8px] flex flex-col'>
                                    <h1 className='font-bold'>
                                        4. San’at va Dizayn Fakulteti
                                    </h1>
                                    <h1>
                                        • Ichki dizayn
                                    </h1>
                                    <h1>
                                        • Moda dizayni
                                    </h1>
                                    <h1>
                                        • Grafika va vizual san’at
                                    </h1>
                                </span>

                                <span className='mt-[-8px] flex flex-col'>
                                    <h1 className='font-bold'>
                                        5. Sog‘liqni Saqlash Fakulteti
                                    </h1>
                                    <h1>
                                        • Hamshiralik ishi
                                    </h1>
                                    <h1>
                                        • Fizioterapiya va reabilitatsiya
                                    </h1>
                                    <h1>
                                        • Tibbiyot texnologiyalari
                                    </h1>
                                </span>

                                <span className='mt-[-8px] flex flex-col'>
                                    <h1 className='font-bold'>
                                        6. Aviatsiya va Logistika Fakulteti
                                    </h1>
                                    <h1>
                                        • Havo transporti menejmenti
                                    </h1>
                                    <h1>
                                        • Xalqaro logistika va ta’minot zanjiri
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
                        <strong>Ultra-zamonaviy kampuslar</strong> – Universitetning Istanbuldagi eng ilg‘or texnologiyalarga ega kampuslaridan biri.
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>Katta sport inshootlari</strong> – Sport zallari, ochiq stadionlar va fitnes markazlari mavjud.
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>O‘quv va ilmiy markazlar</strong> – Talabalar eng zamonaviy laboratoriyalarda o‘qishadi.
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>Kutubxona va tadqiqot markazlari</strong> – 24/7 ishlaydigan zamonaviy kutubxona va ilmiy resurslar.
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>Startup va innovatsion markazlar</strong> – Talabalar o‘z biznes g‘oyalarini boshlash uchun imkoniyatga ega.
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>Talaba klublari va madaniy tadbirlar</strong> – Talabalar teatr, kino, sport va ilmiy klublarda ishtirok etishlari mumkin.
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

export default Nisantasi