import Aos from 'aos'
import React, { useEffect, useState } from 'react'
import topkapibg from '../../images/topkapibg.webp'
import { TypeAnimation } from 'react-type-animation'
import topkapi2 from '../../images/topkapi2.jpg'
import topkapi3 from '../../images/topkapi3.jpg'
import { useTranslation } from 'react-i18next'

const Topkapi = () => {

    useEffect(() => {
        Aos.init({ duration: 800 })
    }, [])

    useEffect(() => {
        const img = new Image();
        img.src = topkapibg;
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
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.623), rgba(0, 0, 0, 0.712)), url(${topkapibg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}>
                <h1 className='main-text w-full max-w-[400px] text-xl md:max-w-[700px] md:text-3xl lg:max-w-[1000px] lg:text-4xl lg:px-5 lg:py-4 xl:text-5xl text-center text-white uppercase font-semibold px-4 py-3 rounded-2xl'>


                    {t("Istanbul Topkapi universiteti")}

                </h1>
                <a
                    onClick={handleScroll}
                    data-aos='zoom-out-up'
                    href='#form'
                    className='text-white bg-[#004D91] w-[240px] h-12 rounded-xl flex items-center justify-center '>
                    <h4 className='text-[18px] mr-2'>{t('Hozir murojaat qiling')}</h4>
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
                    <i className="fa-solid fa-graduation-cap text-3xl"></i>
                    <p>{t('10000')}</p>
                    <h2 className='mt-[-6px] text-center'>{t('Talabalar soni')}</h2>
                </span>

                <span
                    data-aos='zoom-in'
                    className='flex flex-col items-center justify-center gap-2'>
                    <i className="fa-solid fa-house text-3xl"></i>
                    <p>{t('7')}</p>
                    <h2 className='mt-[-6px] text-center'>{t('Kampuslar soni')}</h2>
                </span>

                <span
                    data-aos='zoom-in'
                    className='flex flex-col items-center justify-center gap-2'>
                    <i className="fa-solid fa-building-columns text-3xl"></i>
                    <p>{t('6')}</p>
                    <h2 className='mt-[-6px] text-center'>{t('Fakultet soni')}</h2>
                </span>
            </section>

            <div className="main-content max-w-7xl w-full px-8 m-auto text-[#004D91]">

                <section className="flex flex-col items-start mt-8 mb-4">
                    <div
                        data-aos="fade-right"
                        className="bg-[#004D91] h-[2px] w-[100%] m-auto rounded-lg"></div>
                    <h1
                        data-aos="fade-right"
                        className="text-2xl text-center md:text-3xl font-semibold uppercase">{t('Istanbul Topkapi University – Zamonaviy Ta’lim Maskani')}</h1>
                </section>

                <section className='flex flex-col gap-6 justify-between'>
                    <h1
                        data-aos="fade-right"
                        className="font-medium lg:max-w-[700px] lg:text-[20px]">
                        {t('Turkiyaning eng tez rivojlanayotgan oliy ta’lim muassasalaridan biri')} <strong>{t('biznes, muhandislik, san’at va sog‘liqni saqlash')}</strong> {t('sohalariga ixtisoslashgan yetakchi universitetlaridan biridir. 2011-yilda tashkil etilgan bo‘lib, qisqa vaqt ichida Turkiyaning eng nufuzli ta’lim muassasalaridan biriga aylandi. NP İstanbul Neyropsixiatriya shifoxonasi bilan hamkorlik qilgani sababli, ayniqsa, sog‘liqni saqlash va psixologiya bo‘yicha kuchli amaliyot bazasiga ega.')}
                        <br />
                        <br />
                        {t('Universitet xalqaro darajada tan olingan ta’lim tizimi, zamonaviy kampus sharoitlari va talabalar uchun keng imkoniyatlari bilan ajralib turadi. Agar siz Istanbulning nufuzli universitetlaridan birida sifatli ta’lim olishni istasangiz, Istanbul Topkapi Universiteti mukammal tanlov bo‘lishi mumkin.')}
                    </h1>
                    <img
                        data-aos="zoom-in"
                        className='w-full h-full m-auto max-h-[350px] max-w-[400px] md:max-h-[350px] min-[900px]:max-w-[200px] rounded-2xl lg:mr-20 shadow-2xl'
                        src={topkapi2}>
                    </img>
                </section>

                <section className="flex flex-col items-start mt-8">
                    <div
                        data-aos="fade-right"
                        className="bg-[#004D91] h-[2px] w-[100%] m-auto rounded-lg"></div>
                    <h1
                        data-aos="fade-right"
                        className="text-2xl text-center md:text-3xl font-semibold uppercase">{t('Nima Uchun Aynan Istanbul Topkapi Universiteti?')}</h1>
                </section>

                <section className='flex flex-col gap-2 justify-between mt-4'>
                    <h1
                        data-aos="fade-right"
                        className="leading-relaxed font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>{t('Yevropa ta’lim standartlariga mos dasturlar')}</strong>
                        <br />
                        {t('– Universitet xalqaro ta’lim sifatiga javob beruvchi kuchli akademik dasturlarni taklif etadi.')}
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="leading-relaxed font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>{t('Zamonaviy laboratoriyalar va kampuslar')}</strong>
                        <br />
                        {t('– Ilmiy izlanish va amaliy mashg‘ulotlar uchun eng ilg‘or texnologiyalar mavjud.')}
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="leading-relaxed font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>{t('Xalqaro talabalar uchun qulay sharoitlar')}</strong>
                        <br />
                        {t('– Universitetda turli davlatlardan kelgan talabalar uchun mos muhit yaratilgan.')}
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="leading-relaxed font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>{t('Ishga joylashish imkoniyatlari yuqori')}</strong>
                        <br />
                        {t('– Bitiruvchilar xalqaro kompaniyalarda ish topish imkoniyatiga ega.')}
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="leading-relaxed font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>{t('Amaliyot va kasbiy rivojlanish')}</strong>
                        <br />
                        {t('– Talabalar o‘qish davomida yetakchi kompaniyalarda amaliyot o‘tashlari mumkin.')}
                    </h1>
                </section>

                <section className="flex flex-col mt-8">
                    <div
                        data-aos="fade-right"
                        className="bg-[#004D91] h-[2px] w-[100%] m-auto rounded-lg"></div>
                    <h1
                        data-aos="fade-right"
                        className="text-2xl text-center md:text-3xl font-semibold uppercase">{t('Fakultetlar va Yo‘nalishlar')}</h1>
                </section>

                <section className='flex flex-col gap-6 items-center justify-between'>

                    <span
                        data-aos="fade-right"
                        className="mt-4 leading-relaxed flex flex-col gap-3 font-medium lg:max-w-[700px] lg:text-[20px]">

                        <h1 className='font-bold text-center'>
                            {t('Istanbul Topkapi Universitetida quyidagi asosiy sohalar bo‘yicha ta’lim olish mumkin:')}
                        </h1>

                        <span className='specify w-full h-full flex flex-col gap-4 border-2 border-[#004D91] rounded-3xl p-4 mb-3'>

                            <span className='flex flex-col gap-5 min-[500px]:grid min-[500px]:grid-cols-2 min-[500px]:gap-6'>

                                <span className='mt-[-8px] flex flex-col'>
                                    <h1 className='font-bold'>
                                        {t('1. Muhandislik va Texnologiya Fakulteti')}
                                    </h1>
                                    <h1>
                                        {t('• Kompyuter muhandisligi')}
                                    </h1>
                                    <h1>
                                        {t('• Sun’iy intellekt va data tahlili')}
                                    </h1>
                                    <h1>
                                        {t('• Elektronika va telekommunikatsiya muhandisligi')}
                                    </h1>
                                    <h1>
                                        {t('• Biotexnologiya muhandisligi')}
                                    </h1>
                                </span>

                                <span className='mt-[-8px] flex flex-col'>
                                    <h1 className='font-bold'>
                                        {t('2. Iqtisodiyot va Menejment Fakulteti')}
                                    </h1>
                                    <h1>
                                        {t('• Xalqaro biznes va boshqaruv')}
                                    </h1>
                                    <h1>
                                        {t('• Bank ishi va moliya')}
                                    </h1>
                                    <h1>
                                        {t('• Marketing va innovatsiya')}
                                    </h1>
                                    <h1>
                                        {t('• Xalqaro savdo va logistika')}
                                    </h1>
                                </span>

                                <span className='mt-[-8px] flex flex-col'>
                                    <h1 className='font-bold'>
                                        {t('3. Dizayn va San’at Fakulteti')}
                                    </h1>
                                    <h1>
                                        {t('• Moda dizayni')}
                                    </h1>
                                    <h1>
                                        {t('• Grafika dizayni')}
                                    </h1>
                                    <h1>
                                        {t('• Kino va televideniye')}
                                    </h1>
                                    <h1>
                                        {t('• Vizual san’at')}
                                    </h1>
                                </span>

                                <span className='mt-[-8px] flex flex-col'>
                                    <h1 className='font-bold'>
                                        {t('4. Sog‘liqni Saqlash Fakulteti')}
                                    </h1>
                                    <h1>
                                        {t('• Hamshiralik ishi')}
                                    </h1>
                                    <h1>
                                        {t('• Farmatsiya va tibbiyot texnologiyalari')}
                                    </h1>
                                    <h1>
                                        {t('• Diagnostika va reabilitatsiya')}
                                    </h1>
                                </span>

                                <span className='mt-[-8px] flex flex-col'>
                                    <h1 className='font-bold'>
                                        {t('5. Ijtimoiy Fanlar Fakulteti')}
                                    </h1>
                                    <h1>
                                        {t('• Xalqaro munosabatlar')}
                                    </h1>
                                    <h1>
                                        {t('• Psixologiya')}
                                    </h1>
                                    <h1>
                                        {t('• Media va kommunikatsiya')}
                                    </h1>
                                </span>

                                <span className='mt-[-8px] flex flex-col'>
                                    <h1 className='font-bold'>
                                        {t('6. Huquq Fakulteti')}
                                    </h1>
                                    <h1>
                                        {t('• Xalqaro huquq')}
                                    </h1>
                                    <h1>
                                        {t('• Biznes huquqi')}
                                    </h1>
                                    <h1>
                                        {t('• Inson huquqlari va yuridik tadqiqotlar')}
                                    </h1>
                                </span>

                            </span>

                        </span>

                    </span>

                </section>

                <img
                    data-aos="zoom-in"
                    className='w-full h-full m-auto mt-4 max-h-[350px] max-w-[400px] md:max-h-[350px] min-[900px]:max-w-[200px] rounded-2xl lg:mr-20 shadow-2xl'
                    src={topkapi3}>
                </img>

                <section className="flex flex-col items-start mt-8">
                    <div
                        data-aos="fade-right"
                        className="bg-[#004D91] h-[2px] w-[100%] m-auto rounded-lg"></div>
                    <h1
                        data-aos="fade-right"
                        className="text-2xl text-center md:text-3xl font-semibold uppercase">{t('Kampus Hayoti va Talabalar Uchun Sharoitlar:')}</h1>
                </section>

                <section className='flex flex-col gap-4 justify-between'>
                    <h1
                        data-aos="fade-right"
                        className="font-medium lg:max-w-[700px] lg:text-[20px] mt-4">
                        <strong>{t('Yangi va zamonaviy laboratoriyalar')}</strong> {t('– Muhandislik va sog‘liqni saqlash yo‘nalishlari uchun ilg‘or jihozlar mavjud.')}
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>{t('Kutubxona va ilmiy markazlar')}</strong> {t('– Talabalar uchun keng ilmiy resurslar taqdim etiladi.')}
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>{t('Talaba yotoqxonalar')}</strong> {t('– Xavfsiz va qulay yashash joylari.')}
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>{t('Sport majmualari')}</strong> {t('– Sport zal, futbol maydoni, basketbol va voleybol zallari.')}
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>{t('Startup va innovatsiya markazlari')}</strong> {t('– Talabalar o‘z biznes loyihalarini boshlash imkoniyatiga ega.')}
                    </h1>
                    <h1
                        data-aos="fade-right"
                        className="font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>{t('Talaba klublari va madaniy tadbirlar')}</strong> {t('– Talabalar ijtimoiy hayotda faol ishtirok etishlari mumkin.')}
                    </h1>
                </section>

                <span
                    data-aos="zoom-in"
                    className='specify2 w-full h-full flex flex-col gap-4 border-2 border-[#004D91] rounded-3xl mt-4 p-4 mb-3'>
                    <h1 className='font-bold text-center'>
                        {t('E’tibor bering! Future Study orqali siz:')}
                    </h1>

                    <span className='flex flex-col gap-5'>

                        <span className='mt-[-8px] font-medium'>
                            <h1 className='mb-3'>
                                {t('Hech qanday imtihon topshirmasdan o‘qishga kira olasiz!')}
                            </h1>
                            <h1>
                                {t('Hech qanday til sertifikatlari talab qilinmaydi! (IELTS yoki TOEFL kerak emas)')}
                            </h1>
                            <h1>
                                {t('Firma to‘lovisiz qabul qilinasiz!')}
                            </h1>
                            <h1>
                                {t('Va eng muhimi – 71% chegirmani qo‘lga kiritish imkoniyatiga egasiz!')}
                            </h1>
                        </span>

                    </span>

                </span>

            </div>

        </>
    )
}

export default Topkapi

