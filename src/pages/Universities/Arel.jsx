import Aos from 'aos'
import React, { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import arel from '../../images/arel.jpg'
import arel2 from '../../images/arel2.jfif'
import arel3 from '../../images/arel3.jpeg'

const Arel = () => {

    useEffect(() => {
        Aos.init({ duration: 800 })
    }, [])

    useEffect(() => {
        const img = new Image();
        img.src = arel;
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
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.623), rgba(0, 0, 0, 0.712)), url(${arel})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}>
                <h1 className='main-text w-full max-w-[400px] text-xl md:max-w-[700px] md:text-3xl lg:max-w-[1000px] lg:text-4xl lg:px-5 lg:py-4 xl:text-5xl text-center text-white uppercase font-semibold px-4 py-3 rounded-2xl'>
                    <TypeAnimation
                        sequence={[
                            "Istanbul Arel universiteti",
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
                    <p>15000</p>
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
                    <p>7</p>
                    <h2 className='mt-[-6px] text-center'>Fakultet soni</h2>
                </span>
            </section>

            <div className='main-content max-w-7xl w-full px-8 m-auto text-[#004D91]'>

                <section className="flex flex-col items-start mt-8 mb-4">
                    <div
                        data-aos="fade-right"
                        className="bg-[#004D91] h-[2px] w-[100%] m-auto rounded-lg"></div>
                    <h1
                        data-aos="fade-right"
                        className="text-2xl text-center md:text-3xl font-semibold uppercase">Istanbul Arel University – Zamonaviy Ta’lim Maskani</h1>
                </section>

                <section className='flex flex-col gap-6 justify-between'>
                    <h1
                        data-aos="fade-right"
                        className="font-medium lg:max-w-[700px] lg:text-[20px]">
                        Turkiyaning eng zamonaviy va innovatsion xususiy universitetlaridan biri bo‘lib <strong>muhandislik, biznes, ijtimoiy fanlar va sog‘liqni saqlash</strong> sohalarida kuchli ta’lim dasturlariga ega. Universitet 2007-yilda tashkil etilgan bo‘lib, qisqa vaqt ichida xalqaro miqyosda tan olingan oliy ta’lim markaziga aylandi.
                        <br />
                        <br />
                        Arel Universitetining asosiy maqsadi – talabalarni global bozorga moslashgan mutaxassislar sifatida tayyorlash, ularga amaliy bilim va kasbiy rivojlanish imkoniyatlarini taqdim etishdir. Universitet ilmiy izlanishlar, innovatsion texnologiyalar va tadbirkorlik sohalarida ham yetakchi hisoblanadi.
                    </h1>
                    <img
                        data-aos="zoom-in"
                        className='w-full h-full m-auto max-h-[350px] max-w-[400px] md:max-h-[350px] min-[900px]:max-w-[200px] rounded-2xl lg:mr-20 shadow-2xl'
                        src={arel2}>
                    </img>
                </section>

                <section className="flex flex-col items-start mt-8">
                    <div
                        data-aos="fade-right"
                        className="bg-[#004D91] h-[2px] w-[100%] m-auto rounded-lg"></div>
                    <h1
                        data-aos="fade-right"
                        className="text-2xl text-center md:text-3xl font-semibold uppercase">Nima Uchun Aynan Istanbul Arel Universiteti?</h1>
                </section>

                <section className='flex flex-col gap-2 justify-between mt-4'>
                    <h1
                        data-aos="fade-right"
                        className="leading-relaxed font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>Nazariy va amaliy ta’lim uyg‘unligi</strong>
                        <br />
                        – Universitet talabalarga real ish muhitida tajriba orttirish imkoniyatini beradi.
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="leading-relaxed font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>Istanbulning strategik hududida joylashgan</strong>
                        <br />
                        – Universitet Istanbulning eng muhim biznes va sanoat markazlariga yaqin joylashgan.
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="leading-relaxed font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>Kuchli xalqaro aloqalar</strong>
                        <br />
                        – Talabalar dunyoning turli universitetlari bilan almashinuv dasturlarida qatnashishlari mumkin.
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="leading-relaxed font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>Yangi texnologiyalar va innovatsion markazlar</strong>
                        <br />
                        – Universitet ilmiy va texnologik tadqiqotlarni qo‘llab-quvvatlaydi.
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="leading-relaxed font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>Bitiruvchilarning yuqori ishga joylashish darajasi</strong>
                        <br />
                        – Universitet bitiruvchilari global kompaniyalarda ish topish imkoniyatiga ega.
                    </h1>
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
                            Arel Universiteti quyidagi yo‘nalishlar bo‘yicha sifatli ta’lim dasturlarini taklif etadi:
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
                                        • Elektronika va telekommunikatsiya muhandisligi
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
                                        2. Iqtisodiyot va Menejment Fakulteti
                                    </h1>
                                    <h1>
                                        • Xalqaro biznes boshqaruviq
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
                                        3. Ijtimoiy Fanlar Fakulteti
                                    </h1>
                                    <h1>
                                        • Xalqaro munosabatlar
                                    </h1>
                                    <h1>
                                        • Psixologiya
                                    </h1>
                                    <h1>
                                        • Media va kommunikatsiya
                                    </h1>
                                    <h1>
                                        • Tarix va sotsiologiya
                                    </h1>
                                </span>

                                <span className='mt-[-8px] flex flex-col'>
                                    <h1 className='font-bold'>
                                        4. Sog‘liqni Saqlash Fakulteti
                                    </h1>
                                    <h1>
                                        • Hamshiralik ishi
                                    </h1>
                                    <h1>
                                        • Fizioterapiya va reabilitatsiya
                                    </h1>
                                    <h1>
                                        • Diagnostika va radiologiya
                                    </h1>
                                    <h1>
                                        • Tibbiy laboratoriya texnologiyalari
                                    </h1>
                                </span>

                                <span className='mt-[-8px] flex flex-col'>
                                    <h1 className='font-bold'>
                                        5. San’at va Dizayn Fakulteti
                                    </h1>
                                    <h1>
                                        • Moda dizayni
                                    </h1>
                                    <h1>
                                        • Vizual san’at va grafika dizayni
                                    </h1>
                                    <h1>
                                        • Ichki dizayn
                                    </h1>
                                </span>

                                <span className='mt-[-8px] flex flex-col'>
                                    <h1 className='font-bold'>
                                        6. Aviatsiya va Transport Fakulteti
                                    </h1>
                                    <h1>
                                        • Aviatsiya boshqaruvi
                                    </h1>
                                    <h1>
                                        • Transport va logistika menejmenti
                                    </h1>
                                </span>

                                <span className='mt-[-8px] flex flex-col'>
                                    <h1 className='font-bold'>
                                        7. Huquq Fakulteti
                                    </h1>
                                    <h1>
                                        • Xalqaro huquq
                                    </h1>
                                    <h1>
                                        • Biznes huquqi
                                    </h1>
                                    <h1>
                                        • Inson huquqlari va yuridik tadqiqotlar
                                    </h1>
                                </span>

                            </span>

                        </span>

                    </span>

                </section>

                <img
                    data-aos="zoom-in"
                    className='w-full h-full m-auto mt-2 max-h-[350px] max-w-[250px] md:max-h-[350px] min-[900px]:max-w-[200px] rounded-2xl lg:mr-20 shadow-2xl'
                    src={arel3}>
                </img>

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
                        <strong>Texnologik jihatdan rivojlangan laboratoriyalar</strong> – Muhandislik, tibbiyot va ilmiy tadqiqotlar uchun zamonaviy laboratoriyalar mavjud.
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>Zamonaviy kutubxona</strong> – Talabalar keng ilmiy bazalardan foydalanish imkoniyatiga ega.
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong> Talaba yotoqxonalar</strong> – Xavfsiz va qulay yashash sharoitlari taqdim etiladi.
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>Sport va madaniy tadbirlar</strong> – Talabalar uchun sport zallari, klublar va tadbirlar faol ishlaydi.
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>Tadbirkorlik va innovatsiya markazlari</strong> – Universitet talabalarni o‘z biznes loyihalarini boshlashga rag‘batlantiradi.
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>Keng madaniy hayot va talaba klublari</strong> – Turli sohalarda 50 dan ortiq talaba klublari faoliyat yuritadi.
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

export default Arel