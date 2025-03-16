import React, { useEffect, useState } from 'react'
import kentbg from '../../images/kentbg.jpg'
import { TypeAnimation } from 'react-type-animation'
import Aos from 'aos'
import { useTranslation } from 'react-i18next'

const Kent = () => {
    useEffect(() => {
        Aos.init({ duration: 800 })
    }, [])

    useEffect(() => {
        const img = new Image();
        img.src = kentbg;
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
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.623), rgba(0, 0, 0, 0.712)), url(${kentbg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}>
                <h1 className='main-text w-full max-w-[400px] text-xl md:max-w-[700px] md:text-3xl lg:max-w-[1000px] lg:text-4xl lg:px-5 lg:py-4 xl:text-5xl text-center text-white uppercase font-semibold px-4 py-3 rounded-2xl'>
                    <TypeAnimation
                        sequence={[
                            t("Istanbul Kent universiteti"),
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
                    <i className="fa-solid fa-graduation-cap text-3xl"></i>
                    <p>7595</p>
                    <h2 className='mt-[-6px] text-center'>{t("Talabalar soni")}</h2>
                </span>

                <span
                    data-aos='zoom-in'
                    className='flex flex-col items-center justify-center gap-2'>
                    <i className="fa-solid fa-house text-3xl"></i>
                    <p>2</p>
                    <h2 className='mt-[-6px] text-center'>{t("Kampuslar soni")}</h2>
                </span>

                <span
                    data-aos='zoom-in'
                    className='flex flex-col items-center justify-center gap-2'>
                    <i className="fa-solid fa-building-columns text-3xl"></i>
                    <p>6</p>
                    <h2 className='mt-[-6px] text-center'>{t("Fakultet soni")}</h2>
                </span>

                <span
                    data-aos='zoom-in'
                    className='flex flex-col items-center justify-center gap-2'>
                    <i className="fa-solid fa-book text-3xl"></i>
                    <p>30</p>
                    <h2 className='mt-[-6px] text-center'>{t("Bakalavr dasturlari soni")}</h2>
                </span>

                <span
                    data-aos='zoom-in'
                    className='flex flex-col items-center justify-center gap-2'>
                    <i className="fa-solid fa-building text-3xl"></i>
                    <p>18</p>
                    <h2 className='mt-[-6px] text-center'>{t("Magistratura dasturlari soni")}</h2>
                </span>

                <span
                    data-aos='zoom-in'
                    className='flex flex-col items-center justify-center gap-2'>
                    <i className="fa-solid fa-leaf text-3xl"></i>
                    <p>18</p>
                    <h2 className='mt-[-6px] text-center'>{t("PhD dasturlari soni")}</h2>
                </span>
            </section>

            <div className="main-content max-w-7xl w-full px-8 m-auto text-[#004D91]">

                <section className="flex flex-col items-start mt-8 max-sm:mb-[-10px]">
                    <div
                        data-aos="fade-right"
                        className="bg-[#004D91] h-[2px] w-[100%] m-auto rounded-lg"></div>
                    <h1
                        data-aos="fade-right"
                        className="text-2xl text-center md:text-3xl font-semibold uppercase">{t("Istanbul Kent University – Zamonaviy Ta’lim Maskani")}</h1>
                </section>

                <section className='flex max-[550px]:flex-col gap-6 flex-row justify-between'>
                    <h1
                        data-aos="fade-right"
                        className="mt-4 leading-relaxed font-medium lg:max-w-[700px] lg:text-[20px]">
                        <strong>{t("Istanbul Kent University")}</strong> {t("– bu Turkiyaning eng zamonaviy va innovatsion oliy ta’lim muassasalaridan biri bo‘lib, 2016-yilda tashkil etilgan. Universitet Istanbulning markazida, Taksim hududida joylashgan bo‘lib, xalqaro talabalarga yuqori sifatli ta’lim va zamonaviy o‘quv muhitini taqdim etadi. O‘qitish jarayonida amaliyot va nazariyaning uyg‘unligi, zamonaviy texnologiyalardan foydalanish va xalqaro standartlarga asoslangan ta’lim tizimi universitetning asosiy ustunliklaridan biridir. Istanbul Kent University talabalariga kasbiy rivojlanish, tadqiqot va innovatsiyalar bilan shug‘ullanish imkoniyatlarini taqdim etadi.")}
                    </h1>
                    <div
                        data-aos='zoom-in'
                        className='max-w-[550px] w-full max-h-[400px] h-full mb-10'>
                        <iframe
                            className='m-auto max-[550px]:m-auto h-[390px] w-[220px] mr-2 rounded-2xl shadow-2xl'
                            src="https://www.youtube.com/embed/SZYK4nu1ZMg"
                            frameBorder="0"
                            allowFullScreen
                            title="Istanbul Kent University"
                        >
                        </iframe>
                    </div>
                </section>

                <section className="flex flex-col mt-8 max-sm:mb-[-10px]">
                    <div
                        data-aos="fade-right"
                        className="bg-[#004D91] h-[2px] w-[100%] m-auto rounded-lg"></div>
                    <h1
                        data-aos="fade-right"
                        className="text-2xl text-center md:text-3xl font-semibold uppercase">{t("Nega Istanbul Kent University?")}</h1>
                </section>

                <section className='flex max-[550px]:flex-col gap-6 flex-row justify-between'>
                    <span
                        data-aos="fade-right"
                        className="mt-4 leading-relaxed flex flex-col gap-3 font-medium lg:max-w-[700px] lg:text-[20px]">
                        <h1 className='font-bold'>
                            {t("1. Istanbulning Markazida Joylashgan")}
                        </h1>

                        <h1 className='mt-[-8px]'>
                            {t("Universitet Taksim hududida joylashgan bo‘lib, shahar transporti va infratuzilmasiga juda yaqin. Bu esa talabalarga Istanbulning boy madaniyati, biznes markazlari va yirik korxonalar bilan tanishish imkoniyatini yaratadi.")}
                        </h1>

                        <h1 className='font-bold'>
                            {t("2. Zamonaviy O‘quv Muassasasi")}
                        </h1>

                        <h1 className='mt-[-8px]'>
                            {t("Istanbul Kent University o‘zining zamonaviy laboratoriyalari, ilmiy tadqiqot markazlari va eng so‘nggi texnologiyalar bilan jihozlangan auditoriyalari bilan ajralib turadi. Talabalar nafaqat nazariy bilim, balki real loyihalar ustida ishlash imkoniyatiga ham ega.")}
                        </h1>

                        <h1 className='font-bold'>
                            {t("3. Amaliy Ta’lim va Stajirovka")}
                        </h1>

                        <h1 className='mt-[-8px]'>
                            {t("Universitet yirik kompaniyalar va xalqaro tashkilotlar bilan hamkorlik qiladi, bu esa talabalar uchun o‘qish davomida amaliyot o‘tash va tajriba orttirish imkonini beradi. Shuningdek, talabalar xalqaro almashinuv dasturlarida ham ishtirok etishlari mumkin.")}
                        </h1>

                        <h1 className='font-bold'>
                            {t("4. Xalqaro Talabalar Uchun Quvonarli Muvofiqlik")}
                        </h1>

                        <h1 className='mt-[-8px]'>
                            {t("Istanbul Kent University dunyoning turli davlatlaridan kelgan talabalar uchun qulay shart-sharoitlar va moslashish jarayonini yengillashtiradigan maxsus xizmatlarni taqdim etadi. Universitetda ingliz va turk tillarida ta’lim olish imkoniyati mavjud.")}
                        </h1>

                        <h1 className='font-bold'>
                            {t("5. O‘quv To‘lovlari va Stipendiyalar")}
                        </h1>

                        <h1 className='mt-[-8px]'>
                            {t("Universitet xorijiy talabalar uchun maxsus chegirmalar va stipendiyalar taqdim etadi. Bizning Future Study Consulting orqali hujjat topshirsangiz, maxsus chegirma asosida o‘qishga qabul qilinasiz.")}
                        </h1>
                    </span>
                    <div
                        data-aos='zoom-in'
                        className='max-w-[550px] w-full max-h-[400px] h-full mb-10'>
                        <iframe
                            className='m-auto max-[550px]:m-auto h-[390px] w-[220px] mr-2 rounded-2xl shadow-2xl'
                            src="https://www.youtube.com/embed/-6FaIirFJHA"
                            frameBorder="0"
                            allowFullScreen
                            title="Benefits of Istanbul Kent University"
                        >
                        </iframe>
                    </div>
                </section>

                <section className="flex flex-col mt-8 max-sm:mb-[-10px]">
                    <div
                        data-aos="fade-right"
                        className="bg-[#004D91] h-[2px] w-[100%] m-auto rounded-lg"></div>
                    <h1
                        data-aos="fade-right"
                        className="text-2xl text-center md:text-3xl font-semibold uppercase">{t("Yo‘nalishlar va Fakultetlar")}</h1>
                </section>

                <section className='flex flex-col gap-6 items-center justify-between'>

                    <span
                        data-aos="fade-right"
                        className="mt-4 leading-relaxed flex flex-col gap-3 font-medium lg:max-w-[700px] lg:text-[20px]">

                        <h1 className='font-bold text-center'>
                            {t("Istanbul Kent University bakalavriat va magistratura bosqichlarida turli xil yo‘nalishlarni taklif etadi. Quyida universitetning eng mashhur yo‘nalishlari bilan tanishishingiz mumkin:")}
                        </h1>

                        <span className='specify w-full h-full flex flex-col gap-4 border-2 border-[#004D91] rounded-3xl p-4 mb-3'>
                            <h1 className='font-bold mb-2 text-center'>
                                {t("Bakalavriat Yo‘nalishlari")}
                            </h1>

                            <span className='flex flex-col gap-5 min-[500px]:grid min-[500px]:grid-cols-2 min-[500px]:gap-6'>

                                <span className='mt-[-8px] flex flex-col'>
                                    <h1 className='font-bold'>
                                        {t("Tibbiyot va Sog‘liqni Saqlash:")}
                                    </h1>
                                    <h1>
                                        {t("• Stomatologiya")}
                                    </h1>
                                    <h1>
                                        {t("• Hamshiralik ishi")}
                                    </h1>
                                    <h1>
                                        {t("• Jismoniy terapiya va reabilitatsiya")}
                                    </h1>
                                    <h1>
                                        {t("• Radiologiya texnologiyalari")}
                                    </h1>
                                    <h1>
                                        {t("• Anesteziya")}
                                    </h1>
                                </span>

                                <span className='mt-[-8px] flex flex-col'>
                                    <h1 className='font-bold'>
                                        {t("Biznes va Menejment:")}
                                    </h1>
                                    <h1>
                                        {t("• Xalqaro biznes va savdo")}
                                    </h1>
                                    <h1>
                                        {t("• Menejment")}
                                    </h1>
                                    <h1>
                                        {t("• Turizm va mehmonxona boshqaruvi")}
                                    </h1>
                                    <h1>
                                        {t("• Marketing")}
                                    </h1>
                                </span>

                                <span className='mt-[-8px] flex flex-col'>
                                    <h1 className='font-bold'>
                                        {t("Muhandislik va IT:")}
                                    </h1>
                                    <h1>
                                        {t("• Kompyuter muhandisligi")}
                                    </h1>
                                    <h1>
                                        {t("• Dasturiy injiniring")}
                                    </h1>
                                    <h1>
                                        {t("• Sun’iy intellekt va ma’lumotlar tahlili")}
                                    </h1>
                                </span>

                                <span className='mt-[-8px] flex flex-col'>
                                    <h1 className='font-bold'>
                                        {t("Ijtimoiy va Gumanitar Fanlar:")}
                                    </h1>
                                    <h1>
                                        {t("• Psixologiya")}
                                    </h1>
                                    <h1>
                                        {t("• Jurnalistika va ommaviy kommunikatsiya")}
                                    </h1>
                                    <h1>
                                        {t("• Ingliz filologiyasi")}
                                    </h1>
                                </span>

                                <span className='mt-[-8px] flex flex-col'>
                                    <h1 className='font-bold'>
                                        {t("Magistratura Yo‘nalishlari:")}
                                    </h1>
                                    <h1>
                                        {t("• Biznes boshqaruvi (MBA)")}
                                    </h1>
                                    <h1>
                                        {t("• Xalqaro munosabatlar")}
                                    </h1>
                                    <h1>
                                        {t("• Sun’iy intellekt va IT-menejment")}
                                    </h1>
                                    <h1>
                                        {t("• Turizm boshqaruvi")}
                                    </h1>
                                    <h1>
                                        {t("• Sog‘liqni saqlash menejmenti")}
                                    </h1>
                                </span>

                            </span>

                        </span>
                        <div
                            data-aos='zoom-in'
                            className='max-w-[550px] w-full max-h-[400px] h-full mb-10'>
                            <iframe
                                className='m-auto max-[550px]:m-auto h-[440px] w-[250px] mr-2 rounded-2xl shadow-2xl'
                                src="https://www.youtube.com/embed/wYH7neR8IRk"
                                frameBorder="0"
                                allowFullScreen
                                title="Istanbul Kent University Faculties"
                            >
                            </iframe>
                        </div>

                        <span
                            data-aos="zoom-in"
                            className='specify2 w-full h-full flex flex-col gap-4 border-2 border-[#004D91] rounded-3xl mt-4 p-4 mb-3'>
                            <h1 className='font-bold text-center'>
                                {t("Talabalar Uchun Yashash Sharoitlari")}
                            </h1>

                            <span className='flex flex-col gap-5'>

                                <span className='mt-[-8px]'>
                                    <h1 className='font-bold mb-3'>
                                        {t("Istanbul Kent University talabalariga turar joy topishda yordam beradi. Universitet yaqinida joylashgan yotoqxonalardan foydalanish yoki shaharda kvartira ijaraga olish imkoniyatlari mavjud.")}
                                    </h1>
                                    <h1 className='font-bold'>
                                        {t("Turar joy turlari:")}
                                    </h1>
                                    <h1>
                                        {t("• Universitet yotoqxonasi – qulay va xavfsiz muhit")}
                                    </h1>
                                    <h1>
                                        {t("• Ijaraga beriladigan kvartiralar – shaxsiy hayotni saqlash imkoniyati")}
                                    </h1>
                                    <h1>
                                        {t("• Xususiy yotoqxonalar – shaxsiy xonalar va qulay sharoitlar")}
                                    </h1>
                                </span>

                                <span className='mt-[-8px]'>
                                    <h1 className='font-bold mb-3'>
                                        {t("Hujjat Topsirish Jarayoni")}
                                    </h1>
                                    <h1 className='font-bold mb-3'>
                                        {t("Agar siz Istanbul Kent University-ga o‘qishga kirishni istasangiz, Future Study Consulting sizga bu jarayonda yordam beradi!")}
                                    </h1>
                                    <h1 className='font-bold mb-3'>
                                        {t("Hujjatlar ro‘yxati:")}
                                    </h1>
                                    <h1>
                                        {t("• Pasport nusxasi")}
                                    </h1>
                                    <h1>
                                        {t("• Diplom yoki attestat")}
                                    </h1>
                                    <h1>
                                        {t("• Baholar varaqasi (transkript)")}
                                    </h1>
                                    <h1>
                                        {t("• Maktab yoki Universitetni bitirmagan boʻlsangiz malumotnoma kerak boladi")}
                                    </h1>
                                </span>

                                <span className='mt-[-8px]'>
                                    <h1 className='font-bold mb-3'>
                                        {t("Qabul qilish bosqichlari:")}
                                    </h1>
                                    <h1>
                                        {t("• Biz bilan bog‘laning va universitet bo‘yicha maslahat oling")}
                                    </h1>
                                    <h1>
                                        {t("• Hujjatlaringizni tayyorlang va bizga yuboring")}
                                    </h1>
                                    <h1>
                                        {t("• Universitetga ariza topshiramiz")}
                                    </h1>
                                    <h1>
                                        {t("• Qabul natijalari e’lon qilinadi")}
                                    </h1>
                                    <h1>
                                        {t("• Viza jarayonida yordam olasiz")}
                                    </h1>
                                    <h1>
                                        {t("• Istanbulga jo‘nab ketasiz va transfer xizmqtimiz ham mavjud")}
                                    </h1>
                                </span>

                            </span>

                        </span>

                        <span
                            data-aos="zoom-in"
                            className='specify2 w-full h-full flex flex-col gap-4 border-2 border-[#004D91] rounded-3xl mt-4 p-4 mb-3'>
                            <h1 className='font-bold text-center'>
                                {t("Talabalar Uchun Yashash Sharoitlari")}
                            </h1>

                            <span className='flex flex-col gap-5'>

                                <span className='mt-[-8px]'>
                                    <h1 className='font-bold mb-3'>
                                        {t("• Yo’nalishlarning ta'lim tili: Turk va Ingliz tillarida.")}
                                        <br />
                                        {t("• Kirish: Imtihonsiz va firma to’lovlarisiz")}
                                    </h1>
                                    <h1 className='mb-3'>
                                        {t("Agar turk tilini bilmasangiz, 8 oygacha davom etadigan turk tili kursini universitetga")}
                                        <br />
                                        {t("kelganingizda o'qishingiz kerak. Agar turk tilini bilsangiz, universitetga kelganingizda til")}
                                        <br />
                                        {t("bilish imtihonidan o'tishingiz kerak. Agar til bilish imtihondan o'tsangiz 1 - kursni")}
                                        <br />
                                        {t("boshlaysiz, yetarlikcha turk tili bilmasangiz turk tili kursini o'qiysiz. Til kursini")}
                                        <br />
                                        {t("o'qiganingizdan so'ng to'g'ridan-to'g'ri 1-kursni boshlaysiz. (Ingliz tili yo'nalishiga")}
                                        <br />
                                        {t("topshirmoqchi bo'lganlar uchun ham jarayon xuddi shunday davom etadi).")}
                                    </h1>
                                    <h1 className='font-bold'>
                                        {t("Kontrakt to'lov shakli:")}
                                    </h1>
                                    <h1 className='mb-3'>
                                        {t("O‘qishga topshirganingizda, o‘qishga kirganligingiz haqida qabul xati 24 soat")}
                                        <br />
                                        {t("ichida chiqadi. Qabul xati chiqishi bilan 5 kun ichida 1 yillik kontrakt to‘lovini yoki")}
                                        <br />
                                        {t("50% (yarim) kontrakt to‘lovini universitetga amalga oshirishingiz kerak. Agar 50%")}
                                        <br />
                                        {t("kontrakt to'lovini to‘lasangiz, qolgan 50% ni esa universitetga kelganingizda")}
                                        <br />
                                        {t("to‘lashingiz kerak.")}
                                    </h1>
                                    <h1 className='font-bold text-center'>
                                        {t("FAKULTETLAR VA KONTRAKT NARXLARI:")}
                                    </h1>
                                    <h1 className='font-bold text-center'>
                                        {t("TEXNIKUM - YILLIK TO'LANADI:")}
                                    </h1>
                                    <h1>
                                        {t("• Bola parvarishi - 1.600$ (Turk tilida)")}
                                        <br />
                                        {t("• Og’iz va tish salomatligi - 1.600$ (Turk tilida)")}
                                        <br />
                                        {t("• Amaliyotxona xizmatlari - 1.600$ (Turk tilida)")}
                                        <br />
                                        {t("• Elektronevro fiziologiya - 1.600$ (Turk tilida)")}
                                        <br />
                                        {t("• Fizioterapiya - 1.600$ (Turk tilida)")}
                                        <br />
                                        {t("• Birinchi tibbiy tez yordam - 1.600$ (Turk tilida)")}
                                        <br />
                                        {t("• Anestaziya - 1.600$ (Turk tilida)")}
                                        <br />
                                        {t("• Ijtimoiy xizmat - 1.600$ (Turk tilida)")}
                                        <br />
                                        {t("• Tibbiy hujjatlar va kotib(a)lik - 1.600$ (Turk tilida)")}
                                        <br />
                                        {t("• Tibbiy tasvirlash texnologiyasi - 1.600$ (Turk tilida)")}
                                        <br />
                                        {t("• Farmasevtika xizmatlari - 1.600$ (Turk tilida)")}
                                        <br />
                                        {t("• Patalogik laboratoriya texnikalari - 1.600$ (Turk tilida)")}
                                        <br />
                                        {t("• Tibbiy laboratoriya texnikalari - 1.600$ (Turk tilida)")}
                                        <br />
                                        {t("• Adliya - 1.600$ (Turk tilida)")}
                                        <br />
                                        {t("• Kompyuter dasturchiligi - 1.600$ (Turk tilida)")}
                                        <br />
                                        {t("• Soch parvarishi va kosmetologiya - 1.600$ (Turk tilida)")}
                                    </h1>
                                    <h1 className='font-bold text-center mt-3'>
                                        {t("BAKALAVR - YILLIK TO'LANADI:")}
                                    </h1>
                                    <h1>
                                        {t("• Siyosat va davlat boshqaruvi - 2.200$ (Turk tilida)")}
                                        <br />
                                        {t("• Biznes boshqaruvi - 2.200$ (Turk tilida)")}
                                        <br />
                                        {t("• Xalqaro savdo va logistika - 2.200$ (Turk tilida)")}
                                        <br />
                                        {t("• Biznes boshqaruv - 2.900$ (Ingliz tilida)")}
                                        <br />
                                        {t("• Iqtisod va moliya - 2.900$ (Ingliz tilida)")}
                                        <br />
                                        {t("• Xalqaro munosabatlar - 2.900$ (Ingliz tilida)")}
                                        <br />
                                        {t("• Siyosat va davlat boshqaruvi - 2.900$ (Ingliz tilida)")}
                                        <br />
                                        {t("• Ijtimoiy xizmat - 2.200$ (Turk tilida)")}
                                        <br />
                                        {t("• Ichki arxitektura - 2.200$ (Turk tilida)")}
                                        <br />
                                        {t("• Shahar dizayni va landshaft arxitekturasi - 2.200$ (Turk tilida)")}
                                        <br />
                                        {t("• Psixologiya - 2.200$ (Turk tilida)")}
                                        <br />
                                        {t("• Psixologiya - 2.900$ (Ingliz tilida)")}
                                        <br />
                                        {t("• Gastronomiya va kulinariya - 2.200$ (Turk tilida)")}
                                        <br />
                                        {t("• Gastronomiya va kulinariya - 2.900$ (Ingliz tilida)")}
                                        <br />
                                        {t("• Raqamli o’yin dizayni - 2.900$ (Ingliz tilida)")}
                                        <br />
                                        {t("• Vizual aloqa dizayni - 2.900$ (Ingliz tilida)")}
                                        <br />
                                        {t("• Radio TV va kino - 2.200$ (Turk tilida)")}
                                        <br />
                                        {t("• PR va reklamai - 2.200$ (Turk tilida)")}
                                        <br />
                                        {t("• Dietalogiya - 2.200$ (Turk tilida)")}
                                        <br />
                                        {t("• Dietalogiya - 2.900$ (Ingliz tilida)")}
                                        <br />
                                        {t("• Bola parvarishi - 2.200$ (Turk tilida)")}
                                        <br />
                                        {t("• Fizioterapiya va reabilitatsiya - 2.200$ (Turk tilida)")}
                                        <br />
                                        {t("• Fizioterapiya va reabilitatsiya - 2.900$ (Ingliz tilida)")}
                                        <br />
                                        {t("• Hamshiralik - 2.200$ (Turk tilida)")}
                                        <br />
                                        {t("• Hamshiralik - 2.900$ (Ingliz tilida)")}
                                        <br />
                                        {t("• Akusherlik - 2.200$ (Turk tilida)")}
                                        <br />
                                        {t("• Til va talaffuz terapiyasi - 2.200$ (Turk tilida)")}
                                        <br />
                                        {t("• Salomatlik menejmenti - 2.200$ (Turk tilida)")}
                                        <br />
                                        {t("• Farmasevtika - 18.000$ (Turk tilida) - Bir marta to'lanadi")}
                                        <br />
                                        {t("• Stomatologiya - 35.000$ (Turk tilida) - Bir marta to'lanadi")}
                                        <br />
                                        {t("• Stomatologiya - 35.000$ (Ingliz tilida) - Bir marta to'lanadi")}
                                    </h1>
                                    <h1 className='font-bold text-center mt-3'>
                                        {t("MAGISTRATURA - BIR MARTA TO'LANADI:")}
                                    </h1>
                                    <h1>
                                        {t("• Xalqaro biznes boshqaruvi - 2.500$ (Turk tilida)")}
                                        <br />
                                        {t("• Biznes menejmenti - 3.500$ (Turk tilida)")}
                                        <br />
                                        {t("• Siyosat va xalqaro munosabatlar - 3.500$ (Ingliz tilida)")}
                                        <br />
                                        {t("• Mehnat xavfsizligi - 2.500$ (Turk tilida)")}
                                        <br />
                                        {t("• Salomatlik menejmenti - 2.500$ (Turk tilida)")}
                                        <br />
                                        {t("• Klinik psixologiya - 15.000$ (Turk tilida)")}
                                        <br />
                                        {t("• Gastronomiya va kulinariya - 2.500$ (Turk tilida)")}
                                        <br />
                                        {t("• Dietalogiya - 2.500$ (Turk tilida)")}
                                        <br />
                                        {t("• Bola Parvarishi - 3.500$ (Turk tilida)")}
                                    </h1>
                                    <h1 className='font-bold text-center mt-3'>
                                        {t("TIL KURS NARXLARI - BIR MARTA TO'LANADI:")}
                                    </h1>
                                    <h1>
                                    {t("• Turk tili - 1.200$")}
                                    </h1>
                                    <h1>
                                    {t("• Ingliz tili - 2.900$")}
                                    </h1>
                                </span>

                            </span>

                        </span>

                        <span
                            data-aos="zoom-in"
                            className='specify2 w-full h-full flex flex-col gap-4 border-2 border-[#004D91] rounded-3xl mt-4 p-4 mb-3'>
                            <h1 className='font-bold text-center'>
                                {t("Istanbul Kent Universitetiga «FUTURE STUDY» orqali kirish MUTLOQO BEPUL VA IMTIHONSIZ, faqatgina xohlagan bitta yo'nalish tanlab va hujjatingizni bizga yuborishingiz kerak bo’ladi!")}
                            </h1>

                            <span className='flex flex-col gap-5'>

                                <span className='mt-[-8px]'>
                                    <h1 className='mb-3'>
                                        {t("O'qishga kirganligiz haqida qabul xat esa 24-48soat ichida chiqadi. Qabul xat chiqishi bilan 5-7 kun ichida 1 yillik kontrakt to'lovingizni (50% yarim) kontrakt to'lovini bank orqali universitet xisobiga amalga oshirishingiz kerak bo'ladi.")}
                                    </h1>
                                    <h1>
                                        {t("Shoshiling joylar soni cheklangan. Qabullar tez orada tugaydi.")}
                                    </h1>
                                    <h1>
                                        {t("BIZDA BARCHA XIZMATLAR BEPUL!")}
                                    </h1>
                                    <h1>
                                        {t("«FUTURE STUDY» bilan 2025 yilda Turkiya Universitetlarida hech qanday imtihonsiz va ortiqcha firma to’lovlarsiz talaba bo’ling!")}
                                    </h1>
                                </span>

                            </span>

                        </span>

                    </span>

                </section>

            </div>
        </>
    )
}

export default Kent



