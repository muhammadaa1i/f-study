import Aos from 'aos'
import React, { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import fathibg from '../../images/fatihbg.jpg'
import fatih2 from '../../images/fatih2.jpg'
import { useTranslation } from 'react-i18next'

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
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.623), rgba(0, 0, 0, 0.712)), url(${fathibg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}>
                <h1 className='main-text w-full max-w-[400px] text-xl md:max-w-[700px] md:text-3xl lg:max-w-[1000px] lg:text-4xl lg:px-5 lg:py-4 xl:text-5xl text-center text-white uppercase font-semibold px-4 py-3 rounded-2xl'>
                    
                            {t("Istanbul Fatih Sultan Mehmet Vakıf universiteti")}
                        
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
                    <p>10000</p>
                    <h2 className='mt-[-6px] text-center'>{t("Talabalar soni")}</h2>
                </span>

                <span
                    data-aos='zoom-in'
                    className='flex flex-col items-center justify-center gap-2'>
                    <i class="fa-solid fa-house text-3xl"></i>
                    <p>7</p>
                    <h2 className='mt-[-6px] text-center'>{t("Kampuslar soni")}</h2>
                </span>

                <span
                    data-aos='zoom-in'
                    className='flex flex-col items-center justify-center gap-2'>
                    <i class="fa-solid fa-building-columns text-3xl"></i>
                    <p>7</p>
                    <h2 className='mt-[-6px] text-center'>{t("Fakultet soni")}</h2>
                </span>
            </section>

            <div className="main-content max-w-7xl w-full px-8 m-auto text-[#004D91]">

                <section className="flex flex-col items-start mt-8 mb-4">
                    <div
                        data-aos="fade-right"
                        className="bg-[#004D91] h-[2px] w-[100%] m-auto rounded-lg"></div>
                    <h1
                        data-aos="fade-right"
                        className="text-2xl text-center md:text-3xl font-semibold uppercase">{t("Istanbul Fatih Sultan Mehmet Vakıf University – Zamonaviy Ta’lim Maskani")}</h1>
                </section>

                <section className='flex flex-col gap-6 justify-between'>
                    <h1
                        data-aos="fade-right"
                        className="font-medium lg:max-w-[700px] lg:text-[20px]">
                        {t("Turkiyaning tarixiy va zamonaviy ta’lim tizimini uyg‘unlashtirgan yetakchi universitetlaridan biri. Universitet")} <strong>{t("ilmiy tadqiqotlar, muhandislik, san’at va gumanitar fanlar")}</strong> {t("sohalarida yetakchi hisoblanadi.")}
                        <br />
                        <br />
                        {t("Fatih Sultan Mehmet Vakıf Universiteti xalqaro talablarga javob beruvchi ta’lim tizimi, zamonaviy laboratoriyalar va innovatsion tadqiqot markazlari bilan ajralib turadi. Bu universitet ilmiy izlanishlarga qiziqqan talabalar uchun eng yaxshi tanlovlardan biridir!")}
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
                        className="text-2xl text-center md:text-3xl font-semibold uppercase">{t("Nima Uchun Aynan Fatih Sultan Mehmet Vakıf Universiteti?")}</h1>
                </section>

                <section className='flex flex-col gap-2 justify-between mt-4'>
                    <h1
                        data-aos="fade-right"
                        className="leading-relaxed font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>{t("Tarixiy va zamonaviy ta’lim tizimining uyg‘unligi")}</strong>
                        <br />
                        {t("– Universitet klassik ilmiy yondashuv va innovatsion texnologiyalarni birlashtiradi.")}
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="leading-relaxed font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>{t("Istanbulning markazida joylashgan")}</strong>
                        <br />
                        {t("– Talabalar madaniyat va biznes muhitida bilim olish imkoniyatiga ega.")}
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="leading-relaxed font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>{t("Amaliyot va kasbiy rivojlanish")}</strong>
                        <br />
                        {t("– Talabalar yetakchi kompaniya va tashkilotlarda amaliyot o‘tash imkoniyatiga ega.")}
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="leading-relaxed font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>{t("Ilmiy tadqiqot markazlari")}</strong>
                        <br />
                        {t("– Innovatsion texnologiyalar, muhandislik va gumanitar fanlar bo‘yicha zamonaviy laboratoriyalar mavjud.")}
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="leading-relaxed font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>{t("Xalqaro hamkorlik va almashinuv dasturlari")}</strong>
                        <br />
                        {t("– Talabalar Yevropa, AQSh va Osiyodagi universitetlar bilan hamkorlik qilish imkoniyatiga ega.")}
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
                            {t("Fatih Sultan Mehmet Vakıf Universiteti ilg‘or akademik dasturlar bilan talabalarga keng imkoniyatlar yaratadi.")}
                        </h1>

                        <span className='specify w-full h-full flex flex-col gap-4 border-2 border-[#004D91] rounded-3xl p-4 mb-3'>

                            <span className='flex flex-col gap-5 min-[500px]:grid min-[500px]:grid-cols-2 min-[500px]:gap-6'>

                                <span className='mt-[-8px] flex flex-col'>
                                    <h1 className='font-bold'>
                                        {t("1. Muhandislik va Tabiiy Fanlar Fakulteti")}
                                    </h1>
                                    <h1>
                                        {t("• Kompyuter muhandisligi")}
                                    </h1>
                                    <h1>
                                        {t("• Qurilish muhandisligi")}
                                    </h1>
                                    <h1>
                                        {t("• Elektronika va telekommunikatsiya muhandisligi")}
                                    </h1>
                                    <h1>
                                        {t("• Sun’iy intellekt va ma’lumotlar fanlari")}
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
                                        {t("• Marketing va innovatsiya")}
                                    </h1>
                                    <h1>
                                        {t("• Tadbirkorlik va startap menejmenti")}
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
                                        {t("• Inson huquqlari va xalqaro munosabatlar")}
                                    </h1>
                                </span>

                                <span className='mt-[-8px] flex flex-col'>
                                    <h1 className='font-bold'>
                                        {t("4. San’at, Dizayn va Arxitektura Fakulteti")}
                                    </h1>
                                    <h1>
                                        {t("• Arxitektura")}
                                    </h1>
                                    <h1>
                                        {t("• Ichki dizayn")}
                                    </h1>
                                    <h1>
                                        {t("• Vizual san’at va grafika dizayni")}
                                    </h1>
                                    <h1>
                                        {t("• Restavratsiya va madaniy merosni tiklash")}
                                    </h1>
                                </span>

                                <span className='mt-[-8px] flex flex-col'>
                                    <h1 className='font-bold'>
                                        {t("5. Gumanitar Fanlar Fakulteti")}
                                    </h1>
                                    <h1>
                                        {t("• Tarix")}
                                    </h1>
                                    <h1>
                                        {t("• Falsafa")}
                                    </h1>
                                    <h1>
                                        {t("• Adabiyot va tilshunoslik")}
                                    </h1>
                                    <h1>
                                        {t("• Sotsiologiya")}
                                    </h1>
                                </span>

                                <span className='mt-[-8px] flex flex-col'>
                                    <h1 className='font-bold'>
                                        {t("5. Islomshunoslik Fakulteti")}
                                    </h1>
                                    <h1>
                                        {t("• Islom tarixi va madaniyati")}
                                    </h1>
                                    <h1>
                                        {t("• Dinshunoslik")}
                                    </h1>
                                    <h1>
                                        {t("• Qur’onshunoslik")}
                                    </h1>
                                </span>

                                <span className='mt-[-8px] flex flex-col'>
                                    <h1 className='font-bold'>
                                        {t("5. Pedagogika Fakulteti")}
                                    </h1>
                                    <h1>
                                        {t("• Boshlang‘ich ta’lim")}
                                    </h1>
                                    <h1>
                                        {t("• Maxsus pedagogika")}
                                    </h1>
                                    <h1>
                                        {t("• Psixologiya")}
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
                        className="text-2xl text-center md:text-3xl font-semibold uppercase">{t("Kampus Hayoti va Talabalar Uchun Sharoitlar:")}</h1>
                </section>

                <section className='flex flex-col gap-4 justify-between'>
                    <h1
                        data-aos="fade-right"
                        className="font-medium lg:max-w-[700px] lg:text-[20px] mt-4">
                        <strong>{t("Tarixiy va zamonaviy kampuslar")}</strong> {t("– Universitetning binolari Istanbulning tarixiy qismida joylashgan bo‘lib, talabalar uchun ilhomlantiruvchi muhit yaratadi.")}
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>{t("Zamonaviy kutubxona va ilmiy tadqiqot markazlari")}</strong> {t("– Ilmiy izlanishlar va akademik faoliyat uchun keng imkoniyatlar mavjud.")}
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>{t("Talaba yotoqxonalar")}</strong> {t("– Xavfsiz va qulay yashash sharoitlari.")}
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>{t("Sport majmualari")}</strong> {t("– Jismoniy faollikni oshirish uchun sport zallari va ochiq maydonlar.")}
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>{t("Startup va innovatsion markazlar")}</strong> {t("– Tadbirkorlik bilan shug‘ullanish istagidagi talabalar uchun maxsus dasturlar mavjud.")}
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>{t("Talaba klublari va madaniy tadbirlar")}</strong> {t("– Talabalar turli klublar va tashkilotlarga qo‘shilishlari mumkin.")}
                    </h1>
                </section>

                <span
                    data-aos="zoom-in"
                    className='specify2 w-full h-full flex flex-col gap-4 border-2 border-[#004D91] rounded-3xl mt-4 p-4 mb-3'>
                    <h1 className='font-bold text-center'>
                        {t("E’tibor bering! Future Study orqali siz:")}
                    </h1>

                    <span className='flex flex-col gap-5'>

                        <span className='mt-[-8px] font-medium'>
                            <h1 className='mb-3'>
                                {t("Hech qanday imtihon topshirmasdan o‘qishga kira olasiz!")}
                            </h1>
                            <h1>
                                {t("Hech qanday til sertifikatlari talab qilinmaydi! (IELTS yoki TOEFL kerak emas)")}
                            </h1>
                            <h1>
                                {t("Firma to‘lovisiz qabul qilinasiz!")}
                            </h1>
                            <h1>
                                {t("Va eng muhimi – 71% chegirmani qo‘lga kiritish imkoniyatiga egasiz!")}
                            </h1>
                        </span>

                    </span>

                </span>

            </div>
        </>
    )
}

export default Fatih

