import React, { useEffect, useState } from 'react';
import students3 from '../../images/students3.jpg';
import { TypeAnimation } from 'react-type-animation';
import Aos from 'aos';
import st3 from '../../images/st3.jpg'
import st4 from '../../images/st4.jpg'
import { useTranslation } from 'react-i18next';


const Services = () => {
    useEffect(() => {
        Aos.init({ duration: 800 })
    }, [])

    const [isImageLoaded, setIsImageLoaded] = useState(false);
    useEffect(() => {
        const img = new Image();
        img.src = students3;
        img.onload = () => {
            setIsImageLoaded(true);
        }
    }, [])

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
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.623), rgba(0, 0, 0, 0.712)), url(${students3})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}>
                <h1 className='main-text w-full max-w-[400px] text-xl md:max-w-[700px] md:text-3xl lg:max-w-[1000px] lg:text-4xl lg:px-5 lg:py-4 xl:text-5xl text-center text-white uppercase font-semibold px-4 py-3 rounded-2xl'>

                    {t("TRANSFER VA JOYLASHUV XIZMATI")}

                </h1>
                <a
                    onClick={handleScroll}
                    data-aos='zoom-out-up'
                    className='text-white bg-[#004D91] w-[240px] h-12 rounded-xl flex items-center justify-center'>
                    <h4 className='text-[18px] mr-2'>{t("Hozir murojaat qiling")}</h4>
                    <i className="fa-solid fa-down-long text-[18px] mt-1.5"></i>
                </a>
            </div>

            {!isImageLoaded && (
                <div className="fixed inset-0 bg-gray-300 animate-pulse z-50"></div>
            )}

            <div className="main-content max-w-7xl w-full px-8 m-auto text-[#004D91]">
                <span
                    data-aos="zoom-in"
                    className='specify2 w-full h-full flex flex-col gap-4 border-2 border-[#004D91] rounded-3xl mt-4 p-4'>
                    <span className='flex flex-col gap-5'>

                        <span className='flex flex-col gap-4'>
                            <h1 className='font-medium'>
                                {t("Chet elda ta’lim olish – hayotdagi eng muhim bosqichlardan biri. Yangi davlatga ko‘chib o‘tish, muhitga moslashish va hujjatlar bilan bog‘liq jarayonlar esa ba’zan murakkab bo‘lishi mumkin. Ayniqsa, birinchi marta xorijga chiqayotgan talabalar uchun bu jarayon qiyinchilik tug‘dirishi tabiiy. Future Study.uz kompaniyasi sifatida biz nafaqat sizning universitetga o‘qishga qabul qilinishingizni ta’minlaymiz, balki sizning Turkiyadagi birinchi kunlaringizdan boshlab to‘liq qo‘llab-quvvatlaymiz.")}
                            </h1>
                            <h1 className='font-medium'>
                                {t("Bizning TRANSFER VA JOYLASHUV XIZMATIMIZ sizga yangi muhitga tez moslashish, hujjatlar bilan bog‘liq qiyinchiliklarga duch kelmaslik hamda qulay va xavfsiz yashash sharoitlariga ega bo‘lish imkonini beradi. Quyida biz taklif qilayotgan xizmatlar bilan batafsil tanishing:")}
                            </h1>
                        </span>

                    </span>

                </span>

                <section className="flex flex-col mt-8 ">
                    <div
                        data-aos="zoom-out-up"
                        className="bg-[#004D91] h-[2px] w-[100%] m-auto rounded-lg"></div>
                    <h1
                        data-aos="zoom-out-up"
                        className="text-2xl text-center md:text-3xl font-semibold uppercase">{t("TRANSFER VA BOSHLANG‘ICH MOSLASHUV XIZMATLARI")}</h1>
                </section>

                <span
                    data-aos="zoom-out-up"
                    className='flex flex-col mt-4'>
                    <h1 className='font-bold'>
                        {t("1. Toshkent aeroportidan kuzatish")}
                    </h1>
                    <h1 className='font-medium'>
                        {t("Siz o‘qish uchun xorijga jo‘nab ketayotganingizda, Future Study.uz jamoasi sizni Toshkent xalqaro aeroportidan kuzatib qo‘yadi. Kerakli hujjatlaringizni tekshirib, yo‘lda hech qanday muammo bo‘lmasligi uchun maslahatlar beramiz.")}
                    </h1>
                </span>

                <span
                    data-aos="zoom-out-up"
                    className='flex flex-col mt-4'>
                    <h1 className='font-bold'>
                        {t("2. Istanbul aeroportidan kutib olish")}
                    </h1>
                    <h1 className='font-medium'>
                        {t("Siz Istanbulga yetib kelganingizda, sizni oldindan kelishilgan joyda kutib olish xizmatini taqdim etamiz. Xorijiy davlatga ilk bor kelgan talaba uchun aeroportdan chiqish, transport topish va manzilga yetib borish biroz qiyin bo‘lishi mumkin. Shu sababli biz sizni aeroportdan kutib olib, zarur bo‘lsa, yuklaringizni tashishda ham yordam beramiz.")}
                    </h1>
                </span>

                <span
                    data-aos="zoom-out-up"
                    className='flex flex-col mt-4'>
                    <h1 className='font-bold'>
                        {t("3. Transport xizmatlari")}
                    </h1>
                    <h1 className='font-medium'>
                        {t("Siz Istanbul aeroportiga yetib kelganingizdan so‘ng, universitetingiz yoki turar joyingizgacha qulay transport bilan yetkazib beramiz. Yangi muhitda transport tizimi bilan tanishish, to‘g‘ri manzilga borish ba’zan vaqt talab qiladi. Shu bois, biz sizning harakatlanishingizni osonlashtirib beramiz.")}
                    </h1>
                </span>

                <section
                    data-aos='zoom-in'
                    className='w-[85vw] h-[50vh] m-auto mt-8 text-white text-center flex items-center justify-center rounded-4xl'
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.623), rgba(0, 0, 0, 0.712)), url(${st3})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}>
                    <a
                        onClick={handleScroll}
                        href='#form'
                        className='text-white bg-[#004D91] w-[240px] h-16 rounded-xl flex flex-row items-center justify-evenly '>
                        <h4 className='text-[18px] max-w-[150px] w-full'>{t("Ma'lumotlaringizni qoldiring")}</h4>
                        <i className="fa-solid fa-pen-to-square text-[24px]"></i>
                    </a>
                </section>

                <section className="flex flex-col mt-8 ">
                    <div
                        data-aos="zoom-out-up"
                        className="bg-[#004D91] h-[2px] w-[100%] m-auto rounded-lg"></div>
                    <h1
                        data-aos="zoom-out-up"
                        className="text-2xl text-center md:text-3xl font-semibold uppercase">{t("TURKIYADA YASHASH VA MOSLASHUV XIZMATLARI")}</h1>
                </section>

                <span
                    data-aos="zoom-out-up"
                    className='flex flex-col mt-4'>
                    <h1 className='font-bold'>
                        {t("4. Sim-karta va zarur jihozlar bilan ta’minlashi")}
                    </h1>
                    <h1 className='font-medium'>
                        {t("Yangi davlatga kelganingizda, sizga aloqa o‘rnatish va internetdan foydalanish muhim bo‘ladi. Biz sizga mahalliy operatorlarning eng qulay tariflarini tanlashda yordam beramiz va sim-karta, zarur bo‘lsa, noutbuk yoki boshqa texnik jihozlarni xarid qilishda maslahat beramiz.")}
                    </h1>
                </span>

                <span
                    data-aos="zoom-out-up"
                    className='flex flex-col mt-4'>
                    <h1 className='font-bold'>
                        {t("5. Universitet bilan tanishtirish va hujjatlarni rasmiylashtirish")}
                    </h1>
                    <h1 className='font-medium'>
                        {t("Universitetga kirish hujjatlari bilan bog‘liq jarayonlarni to‘liq qo‘llab-quvvatlaymiz. Biz sizni universitetga olib borib, administratsiya bilan tanishtiramiz, kerakli hujjatlarni topshirishda yordam beramiz va barcha jarayonlar silliq o‘tishi uchun zarur ko‘rsatmalarni beramiz.")}
                    </h1>
                </span>

                <span
                    data-aos="zoom-out-up"
                    className='flex flex-col mt-4'>
                    <h1 className='font-bold'>
                        {t("6. Turkiyada yashash uchun ruxsatnoma (ikamet) olish")}
                    </h1>
                    <h1 className='font-medium'>
                        {t("Turkiyada uzoq muddat yashash uchun ikamet (yashash ruxsatnomasi) olish talab etiladi. Ushbu jarayon ba’zan murakkab va ko‘p vaqt talab qilishi mumkin. Future Study.uz siz uchun barcha hujjatlarni tayyorlab, ularni Goc idaresi (migratsiya idorasi)ga topshirib, ruxsatnoma olish jarayonini tezlashtirib beradi.")}
                    </h1>
                </span>

                <span
                    data-aos="zoom-out-up"
                    className='flex flex-col mt-4'>
                    <h1 className='font-bold'>
                        {t("7. Uy-joy masalasida yordam")}
                    </h1>
                    <h1 className='font-medium'>
                        {t("Yangi davlatda eng katta muammolardan biri – turar joy topish. Talabalar ko‘pincha aldovlarga uchrab yoki qimmat uylarni ijaraga olib, ortiqcha xarajat qilishadi. Biz esa sizga arzon va qulay turar joy topib beramiz va bu jarayonda maklerlarsiz ishlaymiz. Shuningdek, uy ijaraga olish bo‘yicha barcha hujjatlarni rasmiylashtirishda ham yordam beramiz.")}
                    </h1>
                </span>

                <section
                    data-aos='zoom-in'
                    className='w-[80vw] h-[60vh] m-auto mt-8 text-white text-center flex items-center justify-center rounded-4xl'
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.623), rgba(0, 0, 0, 0.712)), url(${st4})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}>
                    <a
                        onClick={handleScroll}
                        href='#form'
                        className='text-white bg-[#004D91] w-[240px] h-12 rounded-xl gap-2 flex flex-row items-center  justify-center '>
                        <h4 className='text-[18px]'>{t("Biz bilan bo'g'laning")}</h4>
                        <i class="fa-solid fa-headset text-[18px]"></i>
                    </a>
                </section>

                <section className="flex flex-col mt-8 ">
                    <div
                        data-aos="zoom-out-up"
                        className="bg-[#004D91] h-[2px] w-[100%] m-auto rounded-lg"></div>
                    <h1
                        data-aos="zoom-out-up"
                        className="text-2xl text-center md:text-3xl font-semibold uppercase">{t("ISH TOPISH XIZMATI")}</h1>
                </section>

                <span
                    data-aos="zoom-out-up"
                    className='flex flex-col mt-4'>
                    <h1 className='font-bold'>
                        {t("8. Universitet jadvaliga mos ish topishda yordam")}
                    </h1>
                    <h1 className='font-medium mb-4'>
                        {t("Turkiyada o‘qish bilan birga ishlashni rejalashtiryapsizmi? Biz sizga universitetingiz jadvaliga mos keladigan ish topishda yordam beramiz. Ish joyini tanlashda tajribamizga tayangan holda, eng yaxshi variantlarni tavsiya qilamiz. Bizning talabalarimiz o‘rtacha oyiga 900$ va undan yuqori daromad topish imkoniyatiga ega bo‘lishmoqda.")}
                    </h1>
                </span>

            </div>

        </>
    );
};

export default Services;
