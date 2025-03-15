import Aos from 'aos'
import React, { useEffect, useState } from 'react'
import kulturbg from '../../images/kulturbg.webp'
import { TypeAnimation } from 'react-type-animation'
import kultur2 from '../../images/kultur2.webp'
import kultur3 from '../../images/kultur3.jpg'
import { useTranslation } from 'react-i18next'

const Kultur = () => {

    useEffect(() => {
        Aos.init({ duration: 800 })
    }, [])

    useEffect(() => {
        const img = new Image();
        img.src = kulturbg;
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
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.623), rgba(0, 0, 0, 0.712)), url(${kulturbg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}>
                <h1 className='main-text w-full max-w-[400px] text-xl md:max-w-[700px] md:text-3xl lg:max-w-[1000px] lg:text-4xl lg:px-5 lg:py-4 xl:text-5xl text-center text-white uppercase font-semibold px-4 py-3 rounded-2xl'>
                   
                            {t("Istanbul Kültür universiteti")}
                     
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

            <section className='w-[90%] m-auto h-auto bg-[#004D91] mt-4 rounded-2xl text-white grid grid-cols-2 gap-2 p-4 max-[350px]:flex max-[350px]:flex-col max-[350px]:gap-3 min-[500px]:grid-cols-3 min-[500px]:gap-4'>
                <span
                    data-aos='zoom-in'
                    className='flex flex-col items-center justify-center gap-2'>
                    <i class="fa-solid fa-graduation-cap text-3xl"></i>
                    <p>15000</p>
                    <h2 className='mt-[-6px] text-center'>{t("Talabalar soni")}</h2>
                </span>

                <span
                    data-aos='zoom-in'
                    className='flex flex-col items-center justify-center gap-2'>
                    <i class="fa-solid fa-house text-3xl"></i>
                    <p>4</p>
                    <h2 className='mt-[-6px] text-center'>{t("Kampuslar soni")}</h2>
                </span>

                <span
                    data-aos='zoom-in'
                    className='flex flex-col items-center justify-center gap-2'>
                    <i class="fa-solid fa-building-columns text-3xl"></i>
                    <p>8</p>
                    <h2 className='mt-[-6px] text-center'>{t("Fakultet soni")}</h2>
                </span>
            </section>

            <div className='main-content max-w-7xl w-full px-8 m-auto text-[#004D91]'>

                <section className="flex flex-col items-start mt-8 mb-4">
                    <div
                        data-aos="fade-right"
                        className="bg-[#004D91] h-[2px] w-[100%] m-auto rounded-lg"></div>
                    <h1
                        data-aos="fade-right"
                        className="text-2xl text-center md:text-3xl font-semibold uppercase">{t("Istanbul Kültür University – Zamonaviy Ta’lim Maskani")}</h1>
                </section>

                <section className='flex flex-col gap-4 justify-between'>
                    <h1
                        data-aos="fade-right"
                        className="font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>{t("Istanbul Kültür Universiteti")}</strong> {t("– Turkiyaning eng nufuzli va zamonaviy oliy ta’lim muassasalaridan biri bo‘lib, xalqaro talablarga javob beradigan ta’lim sifati, innovatsion tadqiqot ishlari va talabalar uchun keng imkoniyatlari bilan mashhur. Universitet 1997-yilda tashkil etilgan bo‘lib, qisqa vaqt ichida eng rivojlangan xususiy universitetlar qatoriga kirishga muvaffaq bo‘ldi.")}
                    </h1>
                    <h1 data-aos="fade-right"
                        className="font-medium lg:max-w-[700px] lg:text-[20px]">
                        {t("Istanbul Kültür Universiteti muhandislik, biznes, san’at, ijtimoiy fanlar va huquq kabi ko‘plab sohalarda kuchli akademik dasturlarni taqdim etadi. Ta’lim jarayoni nazariy bilim va amaliy ko‘nikmalar uyg‘unligiga asoslangan bo‘lib, talabalarga dunyo bozorida talabgir bo‘lish imkoniyatini yaratadi.")}
                    </h1>
                    <img
                        data-aos="zoom-in"
                        className='w-full h-full m-auto max-h-[350px] max-w-[350px] rounded-2xl shadow-2xl'
                        src={kultur2}>
                    </img>
                </section>

                <section className="flex flex-col mt-8">
                    <div
                        data-aos="fade-right"
                        className="bg-[#004D91] h-[2px] w-[80%] m-auto rounded-lg"></div>
                    <h1
                        data-aos="fade-right"
                        className="text-2xl text-center md:text-3xl font-semibold uppercase">{t("Nima Uchun Aynan Kültür Universiteti?")}</h1>
                </section>

                <section className='flex flex-col gap-2 justify-between mt-4'>
                    <h1
                        data-aos="fade-right"
                        className="leading-relaxed font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>{t("Yuqori sifatli ta’lim")}</strong> {t("– Universitet Turkiya va xalqaro darajada tan olingan ta’lim dasturlarini taklif etadi.")}
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="leading-relaxed font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>{t("Markaziy joylashuv")}</strong> {t("– Universitet Istanbulning strategik hududida joylashgan bo‘lib, madaniyat va biznes markazlariga yaqin.")}
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="leading-relaxed font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>{t("Amaliyot va ishga joylashish imkoniyati")}</strong> {t("– Talabalar yetakchi kompaniya va tashkilotlarda amaliyot o‘tash imkoniyatiga ega.")}
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="leading-relaxed font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>{t("Xalqaro hamkorlik")}</strong> {t("– AQSh, Yevropa va Osiyodagi eng yaxshi universitetlar bilan almashinuv dasturlari mavjud.")}
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="leading-relaxed font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>{t("Modern infratuzilma")}</strong> {t("– Universitet zamonaviy laboratoriyalar, kutubxonalar va talaba yotoqxonalariga ega.")}
                    </h1>
                </section>

                <section className="flex flex-col mt-8">
                    <div
                        data-aos="fade-right"
                        className="bg-[#004D91] h-[2px] w-[100%] m-auto rounded-lg"></div>
                    <h1
                        data-aos="fade-right"
                        className="text-2xl text-center md:text-3xl font-semibold uppercase">{t("Fakultetlar va Yo‘nalishlar")}</h1>
                </section>

                <section className='flex flex-col gap-6 items-center justify-between'>

                    <span
                        data-aos="fade-right"
                        className="mt-4 leading-relaxed flex flex-col gap-3 font-medium lg:max-w-[700px] lg:text-[20px]">

                        <h1 className='font-bold text-center'>
                            {t("Istanbul Kültür Universiteti turli akademik sohalarda ta’lim olish imkoniyatini taqdim etadi:")}
                        </h1>

                        <span className='specify w-full h-full flex flex-col gap-4 border-2 border-[#004D91] rounded-3xl p-4 mb-3'>

                            <span className='flex flex-col gap-5 min-[500px]:grid min-[500px]:grid-cols-2 min-[500px]:gap-6'>

                                <span className='mt-[-8px] flex flex-col'>
                                    <h1 className='font-bold'>
                                        {t("1. Muhandislik va Arxitektura Fakulteti")}
                                    </h1>
                                    <h1>
                                        {t("• Kompyuter muhandisligi")}
                                    </h1>
                                    <h1>
                                        {t("• Elektrotexnika va elektronika muhandisligi")}
                                    </h1>
                                    <h1>
                                        {t("• Farmatsiya")}
                                    </h1>
                                    <h1>
                                        {t("• Arxitektura")}
                                    </h1>
                                    <h1>
                                        {t("• Sun’iy intellekt va data tahlili")}
                                    </h1>
                                </span>

                                <span className='mt-[-8px] flex flex-col'>
                                    <h1 className='font-bold'>
                                        {t("2. Iqtisodiyot va Menejment Fakulteti")}
                                    </h1>
                                    <h1>
                                        {t("• Xalqaro biznes boshqaruvi")}
                                    </h1>
                                    <h1>
                                        {t("• Bank ishi va moliya")}
                                    </h1>
                                    <h1>
                                        {t("• Tadbirkorlik va innovatsiya")}
                                    </h1>
                                    <h1>
                                        {t("• Marketing va raqamli biznes")}
                                    </h1>
                                </span>

                                <span className='mt-[-8px] flex flex-col'>
                                    <h1 className='font-bold'>
                                        {t("3. Huquq Fakulteti")}
                                    </h1>
                                    <h1>
                                        {t("• Xalqaro huquq")}
                                    </h1>
                                    <h1>
                                        {t("• Tadbirkorlik huquqi")}
                                    </h1>
                                    <h1>
                                        {t("• Inson huquqlari")}
                                    </h1>
                                </span>

                                <span className='mt-[-8px] flex flex-col'>
                                    <h1 className='font-bold'>
                                        {t("4. Ijtimoiy Fanlar Fakulteti")}
                                    </h1>
                                    <h1>
                                        {t("• Psixologiya")}
                                    </h1>
                                    <h1>
                                        {t("• Xalqaro munosabatlar")}
                                    </h1>
                                    <h1>
                                        {t("• Media va kommunikatsiya")}
                                    </h1>
                                </span>

                                <span className='mt-[-8px] flex flex-col'>
                                    <h1 className='font-bold'>
                                        {t("5. San’at va Dizayn Fakulteti")}
                                    </h1>
                                    <h1>
                                        {t("• Vizual san’at va grafika dizayni")}
                                    </h1>
                                    <h1>
                                        {t("• Kino va rejissyorlik")}
                                    </h1>
                                    <h1>
                                        {t("• Ichki dizayn")}
                                    </h1>
                                </span>

                            </span>

                        </span>

                        <img
                            data-aos="zoom-in"
                            className='w-full h-full m-auto mt-4 max-h-[350px] max-w-[400px] md:max-h-[350px] min-[900px]:max-w-[200px] rounded-2xl lg:mr-20 shadow-2xl'
                            src={kultur3}>
                        </img>

                    </span>

                </section>

                <section className="flex flex-col mt-8">
                    <div
                        data-aos="fade-right"
                        className="bg-[#004D91] h-[2px] w-[100%] m-auto rounded-lg"></div>
                    <h1
                        data-aos="fade-right"
                        className="text-2xl text-center md:text-3xl font-semibold uppercase">{t("Kampus Hayoti va Sharoitlar")}</h1>
                </section>

                <section className='flex flex-col gap-4 justify-between'>
                    <h1
                        data-aos="fade-right"
                        className="font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>{t("Zamonaviy kutubxona")}</strong> {t("– 24/7 ishlaydigan onlayn va bosma manbalar bilan jihozlangan ilmiy markaz.")}
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="font-medium lg:max-w-[700px] lg:text-[20px] mt-4">
                        <strong>{t("Yotoqxonalar")}</strong> {t("– Xavfsiz va zamonaviy yashash sharoitlari.")}
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>{t("Sport inshootlari")}</strong> {t("– Basketbol, futbol, suzish va boshqa sport turlari bilan shug‘ullanish imkoniyati.")}
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>{t("Startup va tadbirkorlik markazlari")}</strong> {t("– Innovatsion loyihalar va biznes boshlash uchun maxsus dasturlar.")}
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>{t("Talaba klublari")}</strong> {t("– Madaniy va ilmiy faoliyatlar uchun turli klublar va jamiyatlar.")}
                    </h1>
                </section>

                <span
                    data-aos="zoom-in"
                    className='specify2 w-full h-full flex flex-col gap-4 border-2 border-[#004D91] rounded-3xl mt-4 p-4 mb-3'>
                    <h1 className='font-bold text-center'>
                        {t("Qabul Jarayoni va Talablar")}
                    </h1>

                    <span className='mt-[-8px] font-semibold'>
                        <h1 className='mb-3'>{t("Kirish uchun talab qilinadigan hujjatlar:")}</h1>
                        <h1 className='mb-3'>
                            {t("- Maktab yoki litsey diplomi")}
                        </h1>
                        <h1 className='mb-3'>
                            {t("- Pasport nusxasi")}
                        </h1>
                        <h1 className='mb-3'>
                            {t("- Pasport fotosurati")}
                        </h1>
                        <h1 className='mb-3'>
                            {t("- Qo‘shimcha hujjatlar (zarur bo‘lsa)")}
                        </h1>
                    </span>

                </span>

            </div>
        </>
    )
}

export default Kultur


