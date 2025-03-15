import Aos from 'aos'
import React, { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import medipolbg from '../../images/medipolbg.jpg'
import medipol2 from '../../images/medipol2.jpg'
import medipol3 from '../../images/medipol3.jpg'
import { useTranslation } from 'react-i18next'

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
                    backgroundImage: `linear-gradient(rgba(32, 32, 32, 0.623), rgba(31, 31, 31, 0.712)), url(${medipolbg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}>
                <h1 className='main-text w-full max-w-[400px] text-xl md:max-w-[700px] md:text-3xl lg:max-w-[1000px] lg:text-4xl lg:px-5 lg:py-4 xl:text-5xl text-center text-white uppercase font-semibold px-4 py-3 rounded-2xl'>

                    {t("Istanbul Medipol universiteti")}

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
                    <p>40000</p>
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
                    <p>12</p>
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
                        className="text-2xl text-center md:text-3xl font-semibold uppercase">{t("Istanbul Medipol University – Zamonaviy Ta’lim Maskani")}</h1>
                </section>

                <section className='flex flex-col gap-4 justify-between'>
                    <h1
                        data-aos="fade-right"
                        className="font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>{t("Istanbul Medipol Universiteti")}</strong> {t("– Turkiyaning eng nufuzli va zamonaviy oliy ta’lim muassasalaridan biri bo‘lib, yuqori sifatli ta’lim, innovatsion tadqiqotlar va xalqaro hamkorlik bilan ajralib turadi. Universitet 2009-yilda tashkil etilgan bo‘lib, qisqa vaqt ichida Turkiyaning eng rivojlangan universitetlaridan biriga aylandi. Medipol Universiteti ayniqsa tibbiyot, muhandislik, biznes va ijtimoiy fanlar sohalarida kuchli akademik dasturlari bilan mashhur.")}</h1>
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
                        className="text-2xl text-center md:text-3xl font-semibold uppercase">{t("Afzalliklari")}</h1>
                </section>

                <section className='flex flex-col gap-2 justify-between mt-4'>
                    <h1
                        data-aos="fade-right"
                        className="leading-relaxed font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>{t("Yuqori reyting va tan olingan diplom")}</strong> {t("– Istanbul Medipol Universiteti milliy va xalqaro reytinglarda yuqori o‘rinlarni egallab kelmoqda. Uning diplomi Yevropa, AQSh va boshqa davlatlarda tan olinadi.")}</h1>  
                    <h1
                        data-aos="fade-right"
                        className="leading-relaxed font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>{t("Zamonaviy infratuzilma")}</strong> {t("– Universitetda ilg‘or texnologiyalar bilan jihozlangan laboratoriyalar, simulyatsion markazlar, kutubxonalar va kampuslar mavjud.")}</h1>
                    <h1
                        data-aos="fade-right"
                        className="leading-relaxed font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>{t("Xalqaro talabalar uchun qulay muhit")}</strong> {t("– Dunyoning turli burchaklaridan kelgan talabalar uchun maxsus dasturlar va qo‘llab-quvvatlash xizmatlari mavjud.")}</h1>
                    <h1
                        data-aos="fade-right"
                        className="leading-relaxed font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>{t("Tibbiyot yo‘nalishida kuchli tajriba")}</strong> {t("– Medipol Universiteti Turkiyaning eng yaxshi tibbiyot universitetlaridan biri bo‘lib, o‘z klinikalariga ega.")}</h1>
                    <h1
                        data-aos="fade-right"
                        className="leading-relaxed font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>{t("Amaliyot va ishga joylashish imkoniyatlari")}</strong> {t("– Talabalar universitet qoshidagi klinikalar, kompaniyalar va xalqaro tashkilotlarda amaliyot o‘tashlari mumkin.")}</h1>
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
                            {t("Istanbul Medipol Universitetida turli sohalar bo‘yicha ta’lim olish imkoniyati mavjud. Quyida asosiy fakultetlar va yo‘nalishlar keltirilgan:")}
                        </h1>

                        <span className='specify w-full h-full flex flex-col gap-4 border-2 border-[#004D91] rounded-3xl p-4 mb-3'>

                            <span className='flex flex-col gap-5 min-[500px]:grid min-[500px]:grid-cols-2 min-[500px]:gap-6'>

                                <span className='mt-[-8px] flex flex-col'>
                                    <h1 className='font-bold'>
                                        {t("1. Tibbiyot va Sog‘liqni Saqlash Fakultetlari:")}
                                    </h1>
                                    <h1>
                                        {t("• Umumiy tibbiyot")}
                                    </h1>
                                    <h1>
                                        {t("• Stomatologiya")}
                                    </h1>
                                    <h1>
                                        {t("• Farmatsiya")}
                                    </h1>
                                    <h1>
                                        {t("• Hamshiralik ishi")}
                                    </h1>
                                    <h1>
                                        {t("• Fizioterapiya va reabilitatsiya")}
                                    </h1>
                                    <h1>
                                        {t("• Jamoat salomatligi")}
                                    </h1>
                                </span>

                                <span className='mt-[-8px] flex flex-col'>
                                    <h1 className='font-bold'>
                                        {t("2. Muhandislik va Axborot Texnologiyalari:")}
                                    </h1>
                                    <h1>
                                        {t("• Kompyuter muhandisligi")}
                                    </h1>
                                    <h1>
                                        {t("• Elektronika va telekommunikatsiya muhandisligi")}
                                    </h1>
                                    <h1>
                                        {t("• Sun’iy intellekt va ma’lumotlar fanlari")}
                                    </h1>
                                    <h1>
                                        {t("• Biotibbiyot muhandisligi")}
                                    </h1>
                                </span>

                                <span className='mt-[-8px] flex flex-col'>
                                    <h1 className='font-bold'>
                                        {t("3. Iqtisodiyot va Biznes Fakulteti:")}
                                    </h1>
                                    <h1>
                                        {t("• Xalqaro biznes")}
                                    </h1>
                                    <h1>
                                        {t("• Menejment")}
                                    </h1>
                                    <h1>
                                        {t("• Bank ishi va moliya")}
                                    </h1>
                                    <h1>
                                        {t("• Turizm va mehmonxona boshqaruvi")}
                                    </h1>
                                </span>

                                <span className='mt-[-8px] flex flex-col'>
                                    <h1 className='font-bold'>
                                        {t("4. Gumanitar va Ijtimoiy Fanlar:")}
                                    </h1>
                                    <h1>
                                        {t("• Huquqshunoslik")}
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
                        className="text-2xl text-center md:text-3xl font-semibold uppercase">{t("Kampus Hayoti va Talabalar Uchun Sharoitlar:")}</h1>
                </section>

                <section className='flex flex-col gap-4 justify-between'>
                    <h1
                        data-aos="fade-right"
                        className="font-medium lg:max-w-[700px] lg:text-[20px] mt-4">
                        <strong>{t("Yotoqxonalar")}</strong> {t("– Talabalar uchun xavfsiz va qulay turar joylar mavjud.")}</h1>
                    <h1
                        data-aos="fade-right"
                        className="font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>{t("Kutubxona va IT markazlar")}</strong> {t("– 24/7 ishlaydigan zamonaviy kutubxona va onlayn resurslar.")}</h1>
                    <h1
                        data-aos="fade-right"
                        className="font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>{t("O‘quv laboratoriyalari")}</strong> {t("– Eng so‘nggi texnologiyalar bilan jihozlangan ilmiy va texnik laboratoriyalar.")}</h1>
                    <h1
                        data-aos="fade-right"
                        className="font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>{t("Sport majmualari")}</strong> {t("– Fitnes zallari, sport maydonchalari va basseynlar mavjud.")}</h1>
                    <h1
                        data-aos="fade-right"
                        className="font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>{t("Talabalar klublari va tadbirlar")}</strong> {t("– Talabalar o‘z qiziqishlariga ko‘ra turli klublar va tashkilotlarga qo‘shilishlari mumkin.")}</h1>
                </section>

                <span
                    data-aos="zoom-in"
                    className='specify2 w-full h-full flex flex-col gap-4 border-2 border-[#004D91] rounded-3xl mt-4 p-4 mb-3'>
                    <h1 className='font-bold text-center'>
                        {t("Qabul Jarayoni va Talablar:")}
                    </h1>

                    <span className='flex flex-col gap-5'>

                        <span className='mt-[-8px] font-medium'>
                            <h1 className='mb-3'>
                                <strong>{t("Attestat yoki diplom")}</strong> {t("(o‘rta maktab yoki kollejni tamomlaganlik haqida)")}
                            </h1>
                            <h1 className='mb-3'>
                                <strong>{t("Til bilish sertifikati")}</strong> {t("(Ingliz yoki Turk tilida – TOEFL yoki Tomer talab qilinishi mumkin)")}
                            </h1>
                            <h1 className='mb-3'>
                                <strong>{t("Motivatsion xat va CV")}</strong> {t("(ba’zi fakultetlar uchun)")}
                            </h1>
                            <h1 className='mb-3'>
                                <strong>{t("Intervyu yoki qo‘shimcha imtihon")}</strong> {t("(ba’zi yo‘nalishlar uchun)")}
                            </h1>
                        </span>

                    </span>

                </span>

            </div>
        </>
    )
}

export default Medipol

