import Aos from 'aos'
import React, { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import fathibg from '../../images/fatihbg.jpg'
import fatih2 from '../../images/fatih2.jpg'

const Fatih = () => {
    useEffect(() => {
        Aos.init({ duration: 800 })
    }, [])

    useEffect(() => {
        const img = new Image();
        img.src = fathibg;
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
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.623), rgba(0, 0, 0, 0.712)), url(${fathibg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}>
                <h1 className='main-text w-full max-w-[400px] text-xl md:max-w-[700px] md:text-3xl lg:max-w-[1000px] lg:text-4xl lg:px-5 lg:py-4 xl:text-5xl text-center text-white uppercase font-semibold px-4 py-3 rounded-2xl'>
                    <TypeAnimation
                        sequence={[
                            "Istanbul Fatih Sultan Mehmet Vakıf universiteti",
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
                    <p>10000</p>
                    <h2 className='mt-[-6px] text-center'>Talabalar soni</h2>
                </span>

                <span
                    data-aos='zoom-in'
                    className='flex flex-col items-center justify-center gap-2'>
                    <i class="fa-solid fa-house text-3xl"></i>
                    <p>7</p>
                    <h2 className='mt-[-6px] text-center'>Kampuslar soni</h2>
                </span>

                <span
                    data-aos='zoom-in'
                    className='flex flex-col items-center justify-center gap-2'>
                    <i class="fa-solid fa-building-columns text-3xl"></i>
                    <p>7</p>
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
                        className="text-2xl text-center md:text-3xl font-semibold uppercase">Istanbul Fatih Sultan Mehmet Vakıf University – Zamonaviy Ta’lim Maskani</h1>
                </section>

                <section className='flex flex-col gap-6 justify-between'>
                    <h1
                        data-aos="fade-right"
                        className="font-medium lg:max-w-[700px] lg:text-[20px]">
                        Turkiyaning tarixiy va zamonaviy ta’lim tizimini uyg‘unlashtirgan yetakchi universitetlaridan biri. Universitet <strong>ilmiy tadqiqotlar, muhandislik, san’at va gumanitar fanlar</strong> sohalarida yetakchi hisoblanadi.
                        <br />
                        <br />
                        Fatih Sultan Mehmet Vakıf Universiteti xalqaro talablarga javob beruvchi ta’lim tizimi, zamonaviy laboratoriyalar va innovatsion tadqiqot markazlari bilan ajralib turadi. Bu universitet ilmiy izlanishlarga qiziqqan talabalar uchun eng yaxshi tanlovlardan biridir!
                    </h1>
                    <img
                        data-aos="zoom-in"
                        className='w-full h-full m-auto max-h-[400px] max-w-[400px] md:max-h-[350px] min-[900px]:max-w-[200px] rounded-2xl lg:mr-20 shadow-2xl'
                        src={fatih2}>
                    </img>
                </section>

                <section className="flex flex-col items-start mt-8">
                    <div
                        data-aos="fade-right"
                        className="bg-[#004D91] h-[2px] w-[100%] m-auto rounded-lg"></div>
                    <h1
                        data-aos="fade-right"
                        className="text-2xl text-center md:text-3xl font-semibold uppercase">Nima Uchun Aynan Fatih Sultan Mehmet Vakıf Universiteti?</h1>
                </section>

                <section className='flex flex-col gap-2 justify-between mt-4'>
                    <h1
                        data-aos="fade-right"
                        className="leading-relaxed font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>Tarixiy va zamonaviy ta’lim tizimining uyg‘unligi</strong>
                        <br />
                        – Universitet klassik ilmiy yondashuv va innovatsion texnologiyalarni birlashtiradi.
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="leading-relaxed font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>Istanbulning markazida joylashgan</strong>
                        <br />
                        – Talabalar madaniyat va biznes muhitida bilim olish imkoniyatiga ega.
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="leading-relaxed font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>Amaliyot va kasbiy rivojlanish</strong>
                        <br />
                        – Talabalar yetakchi kompaniya va tashkilotlarda amaliyot o‘tash imkoniyatiga ega.
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="leading-relaxed font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>Ilmiy tadqiqot markazlari</strong>
                        <br />
                        – Innovatsion texnologiyalar, muhandislik va gumanitar fanlar bo‘yicha zamonaviy laboratoriyalar mavjud.
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="leading-relaxed font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>Xalqaro hamkorlik va almashinuv dasturlari</strong>
                        <br />
                        – Talabalar Yevropa, AQSh va Osiyodagi universitetlar bilan hamkorlik qilish imkoniyatiga ega.
                    </h1>
                    {/* <img
                        data-aos="zoom-in"
                        className='w-full h-full m-auto mt-4 max-h-[350px] max-w-[450px] md:max-h-[350px] min-[900px]:max-w-[200px] rounded-2xl lg:mr-20 shadow-2xl'
                        src={uskudar3}>
                    </img> */}
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
                            Fatih Sultan Mehmet Vakıf Universiteti ilg‘or akademik dasturlar bilan talabalarga keng imkoniyatlar yaratadi.
                        </h1>

                        <span className='specify w-full h-full flex flex-col gap-4 border-2 border-[#004D91] rounded-3xl p-4 mb-3'>

                            <span className='flex flex-col gap-5 min-[500px]:grid min-[500px]:grid-cols-2 min-[500px]:gap-6'>

                                <span className='mt-[-8px] flex flex-col'>
                                    <h1 className='font-bold'>
                                        1. Muhandislik va Tabiiy Fanlar Fakulteti
                                    </h1>
                                    <h1>
                                        • Kompyuter muhandisligi
                                    </h1>
                                    <h1>
                                        • Qurilish muhandisligi
                                    </h1>
                                    <h1>
                                        • Elektronika va telekommunikatsiya muhandisligi
                                    </h1>
                                    <h1>
                                        • Sun’iy intellekt va ma’lumotlar fanlari
                                    </h1>
                                </span>

                                <span className='mt-[-8px] flex flex-col'>
                                    <h1 className='font-bold'>
                                        2. Iqtisodiyot va Menejment Fakulteti
                                    </h1>
                                    <h1>
                                        • Xalqaro biznes boshqaruvi
                                    </h1>
                                    <h1>
                                        • Bank ishi va moliya
                                    </h1>
                                    <h1>
                                        • Marketing va innovatsiya
                                    </h1>
                                    <h1>
                                        • Tadbirkorlik va startap menejmenti
                                    </h1>
                                </span>

                                <span className='mt-[-8px] flex flex-col'>
                                    <h1 className='font-bold'>
                                        3. Huquq Fakulteti
                                    </h1>
                                    <h1>
                                        • Xalqaro huquq
                                    </h1>
                                    <h1>
                                        • Tadbirkorlik huquqi
                                    </h1>
                                    <h1>
                                        • Inson huquqlari va xalqaro munosabatlar
                                    </h1>
                                </span>

                                <span className='mt-[-8px] flex flex-col'>
                                    <h1 className='font-bold'>
                                        4. San’at, Dizayn va Arxitektura Fakulteti
                                    </h1>
                                    <h1>
                                        • Arxitektura
                                    </h1>
                                    <h1>
                                        • Ichki dizayn
                                    </h1>
                                    <h1>
                                        • Vizual san’at va grafika dizayni
                                    </h1>
                                    <h1>
                                        • Restavratsiya va madaniy merosni tiklash
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
                                    <h1>
                                        • Sotsiologiya
                                    </h1>
                                </span>

                                <span className='mt-[-8px] flex flex-col'>
                                    <h1 className='font-bold'>
                                        5. Islomshunoslik Fakulteti
                                    </h1>
                                    <h1>
                                        • Islom tarixi va madaniyati
                                    </h1>
                                    <h1>
                                        • Dinshunoslik
                                    </h1>
                                    <h1>
                                        • Qur’onshunoslik
                                    </h1>
                                </span>

                                <span className='mt-[-8px] flex flex-col'>
                                    <h1 className='font-bold'>
                                        5. Pedagogika Fakulteti
                                    </h1>
                                    <h1>
                                        • Boshlang‘ich ta’lim
                                    </h1>
                                    <h1>
                                        • Maxsus pedagogika
                                    </h1>
                                    <h1>
                                        • Psixologiya
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
                        <strong>Tarixiy va zamonaviy kampuslar</strong> – Universitetning binolari Istanbulning tarixiy qismida joylashgan bo‘lib, talabalar uchun ilhomlantiruvchi muhit yaratadi.
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>Zamonaviy kutubxona va ilmiy tadqiqot markazlari</strong> – Ilmiy izlanishlar va akademik faoliyat uchun keng imkoniyatlar mavjud.
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>Talaba yotoqxonalar</strong> – Xavfsiz va qulay yashash sharoitlari.
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>Sport majmualari</strong> – Jismoniy faollikni oshirish uchun sport zallari va ochiq maydonlar.
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>Startup va innovatsion markazlar</strong> – Tadbirkorlik bilan shug‘ullanish istagidagi talabalar uchun maxsus dasturlar mavjud.
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>Talaba klublari va madaniy tadbirlar</strong> – Talabalar turli klublar va tashkilotlarga qo‘shilishlari mumkin.
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

export default Fatih