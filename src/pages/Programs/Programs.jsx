import React, { useEffect, useState } from 'react'
import students2 from '../../images/students2.jpg'
import { TypeAnimation } from "react-type-animation"
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useTranslation } from 'react-i18next'

const Programs = () => {

    useEffect(() => {
        Aos.init({ duration: 800 })
    }, [])

    useEffect(() => {
        const img = new Image();
        img.src = students2;
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
    };
    const { t, i18n } = useTranslation()
    const ChangeLng = (e) => {
        const selectedLanguage = e.target.value
        i18n.changeLanguage(selectedLanguage)
    }

    return (
        <>
            <div
                className='hero w-[100vw] h-[60vh] flex justify-evenly flex-col items-center'
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.623), rgba(0, 0, 0, 0.712)), url(${students2})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}>
                <h1
                    data-aos='zoom-out-up' className='main-text w-full max-w-[400px] text-xl md:max-w-[700px] md:text-3xl lg:max-w-[1000px] lg:text-4xl lg:px-5 lg:py-4 xl:text-5xl text-center text-white uppercase font-semibold px-4 py-3 rounded-2xl'>


                    {t("Universitetga tayyorlanish yili")}

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

            <section className='w-[90%] m-auto h-auto py-4 bg-[#004D91] mt-4 rounded-2xl'>
                <h1 data-aos='zoom-in' className='text-2xl text-center font-semibold text-white px-2'>{t("Akademik muvaffaqiyat uchun poydevor qo'yish: Universitetga o'tishdagi muhim qadam")}</h1>
            </section>

            <div className="main-content max-w-7xl w-full px-8 m-auto text-[#004D91]">

                <section className="flex flex-col items-start mt-8 max-sm:mb-[-10px]">
                    <div
                        data-aos="fade-right"
                        className="bg-[#004D91] h-[2px] w-[100%] m-auto rounded-lg"></div>
                    <h1
                        data-aos="fade-right"
                        className="text-2xl text-center md:text-3xl font-semibold uppercase">{t("Turk tili ko'nikmalarini rivojlantirish va til ta'limi yordamlari:")}</h1>
                </section>

                <div className='flex max-[550px]:flex-col gap-6 flex-row justify-between mb-6'>
                    <h1
                        data-aos="fade-right"
                        className="mt-4 leading-relaxed font-medium lg:max-w-[700px] lg:text-[20px]">
                        {t("Ona tili turk tili bo'lmagan talabalar uchun turk tilini bilish Turkiyadagi universitetlarda tahsil olmoqchi bo'lganlar uchun juda muhimdir. Bu talabalarga til bilimlarini oshirishga yordam berish uchun turli turk tilini qoʻllab-quvvatlash dasturlari taklif etiladi. Bu dasturlar talabalarga turk tilidan akademik til sifatida samarali foydalanish imkonini berishni maqsad qilgan va odatda universitetlar tomonidan taqdim etiladi.")}
                    </h1>
                </div>

                <div
                    data-aos='zoom-in'
                    className='max-w-[550px] w-full max-h-[400px] h-full '>
                    <iframe
                        className='m-auto max-[550px]:m-auto h-[390px] w-[220px] rounded-2xl shadow-2xl sm:mt-[-30px]'
                        src="https://www.youtube.com/embed/SZYK4nu1ZMg"
                        frameborder="0"
                        allowFullScreen
                    >
                    </iframe>
                </div>

                <section className="flex flex-col mt-8 max-sm:mb-[-10px]">
                    <div
                        data-aos="zoom-in-up"
                        className="bg-[#004D91] h-[2px] w-[100%] m-auto rounded-lg"></div>
                    <h1
                        data-aos="zoom-in-up"
                        className="text-2xl text-center md:text-3xl font-semibold uppercase">{t("Akademik til imtihonlari:")}</h1>
                </section>

                <div className='flex max-[550px]:flex-col gap-6 flex-row justify-between'>
                    <h1
                        data-aos="zoom-in-up"
                        className="mt-4 leading-relaxed font-medium lg:max-w-[700px] lg:text-[20px]">
                        {t("Oliy ta’lim muassasalari qabul jarayonida talabalarning ta’lim tillarini bilish darajasini tekshirish uchun til bilish imtihonlarini tashkil qiladi. Ushbu imtihonlar talabalarning akademik matnlarni tushunishi va samarali muloqot qilishini baholaydi. Noto'g'ri deb topilgan talabalar til ko'nikmalarini oshirish uchun tayyorgarlik dasturlariga yo'naltiriladi.")}
                    </h1>
                </div>

                <section className="flex flex-col mt-8 max-sm:mb-[-10px]">
                    <div
                        data-aos="zoom-out"
                        className="bg-[#004D91] h-[2px] w-[100%] m-auto rounded-lg"></div>
                    <h1
                        data-aos="zoom-out"
                        className="text-2xl text-center md:text-3xl font-semibold uppercase">{t("Ko'p tilli ta'lim imkoniyatlari:")}</h1>
                </section>

                <div className='flex max-[550px]:flex-col gap-6 flex-row justify-between mb-4'>
                    <h1
                        data-aos="zoom-out"
                        className="mt-4 leading-relaxed font-medium lg:max-w-[700px] lg:text-[20px]">
                        {t("Turkiyadagi ta'lim muassasalari talabalarga ingliz, frantsuz va nemis kabi turli chet tillarida ta'lim olish imkoniyatini beradi. Bu imkoniyatlar talabalarga til koʻnikmalarini yaxshilaydigan va akademik muvaffaqiyatlarini qoʻllab-quvvatlovchi qoʻshimcha til kurslariga kirish imkonini beradi. Ushbu til o'qitish dasturlari odatda intensiv tarzda ishlab chiqilgan va bir o'quv yili davom etadi.")}
                    </h1>
                </div>

                <div className='max-w-[550px] w-full max-h-[450px] h-full'>
                    <iframe
                        className='m-auto max-[550px]:m-auto h-[390px] w-[220px] mr-2 rounded-2xl shadow-2xl'
                        src="https://www.youtube.com/embed/vmfEurvheKI"
                        frameborder="0"
                        allowFullScreen
                    >
                    </iframe>
                </div>

                <section className="flex flex-col mt-8 max-sm:mb-[-10px]">
                    <div
                        data-aos="zoom-out-up"
                        className="bg-[#004D91] h-[2px] w-[100%] m-auto rounded-lg"></div>
                    <h1
                        data-aos="zoom-out-up"
                        className="text-2xl text-center md:text-3xl font-semibold uppercase">{t("Til tayyorlash dasturlari:")}</h1>
                </section>

                <div className='flex max-[550px]:flex-col gap-6 flex-row justify-between'>
                    <h1
                        data-aos="zoom-out-up"
                        className="mt-4 leading-relaxed font-medium lg:max-w-[700px] lg:text-[20px]">
                        {t("Tilga tayyorgarlik dasturlari talabalarga akademik tillarda muvaffaqiyat qozonishlari uchun keng qamrovli treninglarni taklif qiladi. Bu dasturlar o‘quvchilarni darslarda faol ishtirok etishga, uy vazifalarini o‘z vaqtida bajarishga, taklif etilayotgan o‘quv materiallaridan unumli foydalanishga undaydi. Dastur oxirida talabalar keyingi ta'limni davom ettirish uchun zarur bo'lgan til bilimiga ega bo'lishlari taxmin qilinadi.")}
                    </h1>
                </div>
                <h1 data-aos="zoom-out-up"
                    className="mt-4 leading-relaxed font-medium lg:max-w-[700px] lg:text-[20px]">{t("Turkiya xalqaro talabalarga turli tillarda ta’lim olish imkoniyatlarini taqdim etish orqali ta’lim sohasida global diqqat markaziga aylanishni maqsad qilgan. Turk tili asosiy ta'lim tili bo'lsa-da, universitetlar bir nechta til variantlari bilan global akademik tajribani taklif qilishadi.")}
                </h1>
            </div>
        </>
    )
}

export default Programs