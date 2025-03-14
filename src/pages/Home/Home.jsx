import React, { useEffect, useState } from 'react'
import mask from '../../images/mask.png'
import numbers from '../../images/numbers.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import students from '../../images/students.jpg'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { useTranslation } from 'react-i18next';

const Home = () => {

    useEffect(() => {
        Aos.init({ duration: 800 })
    }, [])

    useEffect(() => {
        const img = new Image();
        img.src = students;
        img.onload = () => {
            setIsImageLoaded(true);
        }
    }, [])
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

    const handleScroll = (e) => {
        e.preventDefault();
        const formElement = document.getElementById("form");

        if (formElement) {
            const yOffset = -200;
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
                className='hero w-full h-[85vh] flex flex-col items-center justify-evenly'
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.623), rgba(0, 0, 0, 0.712)), url(${students})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}>
                <h1 
                 data-aos='zoom-out-up'
                className='main-text w-full max-w-[400px] text-2xl md:max-w-[700px] md:text-3xl lg:max-w-[1000px] lg:text-4xl lg:px-5 lg:py-4 xl:text-5xl text-center text-white uppercase font-semibold px-4 py-3 rounded-2xl'>
                   
                       {t("Future Study Education Consulting – Sizning Kelajagingizga Yo’l!")}

                 
                </h1>
                <a
                    onClick={handleScroll}
                    data-aos='zoom-out-up'
                    href='#form'
                    className='text-white bg-[#004D91] w-[240px] h-12 rounded-xl flex flex-row items-center justify-center '>
                    <h4 className='text-[18px] mr-2'>{t("Hozir murojaat qiling")}</h4>
                    <i className="fa-solid fa-down-long text-[18px] mt-1.5"></i>
                </a>
            </div>

            {!isImageLoaded && (
                <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
            )}

            <div className="main-content max-w-7xl w-full px-8 m-auto text-[#004D91]">
                <section className="flex flex-col items-start mt-8 max-sm:mb-[-10px]">
                    <div
                        data-aos="fade-right"
                        className="bg-[#004D91] h-[2px] max-w-[170px] md:max-w-[220px] md:h-[3px] w-full rounded-lg"></div>
                    <h1
                        data-aos="fade-right"
                        className="text-2xl md:text-3xl font-semibold uppercase mt-2">{t("Biz Haqimizda")}</h1>
                </section>

                <div className='flex max-[550px]:flex-col gap-6 flex-row justify-between'>
                    <h1
                        data-aos="fade-right"
                        className="mt-4 leading-relaxed font-medium lg:max-w-[700px] lg:text-[20px]">
                      {t("Future Study Education Consulting – bu xalqaro ta’lim sohasida yetakchi kompaniyalardan biri bo‘lib, yoshlar uchun dunyoning eng nufuzli universitetlarida o‘qish imkoniyatlarini yaratishga ixtisoslashgan. Biz Turkiya va boshqa mamlakatlardagi top universitetlarga kirish jarayonida abituriyentlarga to‘liq qo‘llab-quvvatlash xizmatlarini taqdim etamiz.")}
                    </h1>
                    <div
                        data-aos='zoom-in'
                        className='max-w-[550px] w-full max-h-[400px] h-full '>
                        <iframe
                            className="m-auto max-[550px]:m-auto h-[390px] w-[220px] rounded-2xl shadow-2xl sm:mt-[-30px]"
                            src="https://www.youtube.com/embed/3caz98HUnEU"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>

                    </div>
                </div>

                <section className="flex flex-col items-start mt-8 max-sm:mb-[-10px]">
                    <div
                        data-aos="fade-right"
                        className="bg-[#004D91] h-[2px] max-w-[200px] md:max-w-[220px] md:h-[3px] w-full rounded-lg lg:max-w-[260px]"></div>
                    <h1
                        data-aos="fade-right"
                        className="text-2xl md:text-3xl lg:text-3xl font-semibold uppercase mt-2">{t("Nega Aynan Biz?")}</h1>
                </section>

                <section className="space-y-4 text-lg leading-relaxed relative flex flex-col gap-8">
                    <div className='flex flex-col gap-4'>
                        <section className='flex flex-col min-[550px]:flex-row gap-4'>
                            <div className='flex flex-col'>
                                <h1
                                    data-aos="fade-right"
                                    className='mt-6 leading-relaxed font-bold lg:text-[20px]'>{t("1. Rasmiy Hamkorlik")}</h1>
                                <h1
                                    data-aos="fade-right"
                                    className='leading-relaxed font-medium min-[550px]:max-w-[300px] w-full lg:text-[20px] md:max-w-[400px] lg:max-w-[500px]'>
                                   {t("Biz Turkiyaning eng yaxshi universitetlari bilan bevosita hamkorlik qilamiz. Hamkorlarimiz qatorida Istanbul Kent University, Marmara University, Beykoz University va yana 30 dan ortiq universitetlar bor.")}
                                </h1>
                                <h1
                                    data-aos="fade-right"
                                    className='leading-relaxed font-bold lg:text-[20px] mt-6'>{t("2. 100% Kafolatlangan Natija")}</h1>
                                <h1
                                    data-aos="fade-right"
                                    className='leading-relaxed font-medium lg:text-[20px] md:max-w-[380px] lg:max-w-[580px]'>
                                    {t("Biz orqali hujjat topshirgan har bir talabaga kafolatlangan qabul beriladi.")}
                                </h1>
                            </div>
                            <div
                                data-aos='zoom-in'
                                className='max-w-[550px] w-full max-h-[400px] h-full'>
                                <iframe
                                    className='m-auto max-[550px]:m-auto h-[390px] w-[220px] rounded-2xl shadow-2xl sm:mt-[-30px]'
                                    src="https://www.youtube.com/embed/2Gkwo7_Qmd8"
                                    frameborder="0"
                                    allowFullScreen
                                >
                                </iframe>
                            </div>
                        </section>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <span>
                            <h1
                                data-aos="fade-right"
                                className='leading-relaxed font-bold lg:text-[20px]'>{t("3. Til Bilimi Muhim Emas")}</h1>
                            <h1
                                data-aos="fade-right"
                                className='leading-relaxed font-medium lg:text-[20px] lg:max-w-[500px]'>
                               {t(" Ingliz yoki turk tilini mukammal bilmasangiz ham, siz uchun til kurslari taklif qilamiz.")}
                            </h1>
                        </span>
                        <span>
                            <h1
                                data-aos="fade-right"
                                className='leading-relaxed font-bold lg:text-[20px]'>{t("4. To‘liq Qo‘llab-Quvvatlash Xizmati")}</h1>
                            <h1
                                data-aos="fade-right"
                                className='leading-relaxed font-medium lg:text-[20px]'>
                               {t(" Universitet tanlash, stipendiyalar, turar joy, viza va boshqa xizmatlarni taqdim etamiz.")}
                            </h1>
                        </span>
                    </div>
                </section>

                <section
                    className='bg-[#004D91] w-full h-auto py-10 px-5 rounded-2xl m-auto mt-8 flex flex-col gap-8 min-[320px]:w-[90%] min-[400px]:w-[80%] min-[450px]:w-full min-[450px]:grid min-[450px]:gap-8 min-[450px]:grid-cols-2 md:flex md:justify-between md:flex-row md:px-8'>
                    <a href='form'
                        onClick={handleScroll}
                        data-aos="zoom-in"
                        className='flex flex-col items-center gap-4'>
                        <i className="fa-brands fa-searchengin text-9xl text-white"></i>
                        <h1 className='text-white text-center'>{t("Kerakli dasturni toping")}</h1>
                    </a>
                    <a href='form'
                        onClick={handleScroll}
                        data-aos="zoom-in"
                        className='flex flex-col items-center gap-4'>
                        <i class="fa-solid fa-building-columns text-9xl text-white "></i>
                        <h1 className='text-white text-center'>{t("Universitetingizni tanlang")}</h1>
                    </a>
                    <a href='form'
                        onClick={handleScroll}
                        data-aos="zoom-in"
                        className='flex flex-col items-center gap-4'>
                        <i class="fa-solid fa-file-signature text-9xl text-white ml-8"></i>
                        <h1 className='text-white text-center'>{t("Arizangizni yuboring")}</h1>
                    </a>
                    <a href='form'
                        onClick={handleScroll}
                        data-aos="zoom-in"
                        className='flex flex-col items-center gap-4'>
                        <i class="fa-solid fa-square-check text-9xl text-white"></i>
                        <h1 className='text-white text-center'>{t("Va bajarildi!")}</h1>
                    </a>
                </section>

                <section className="flex flex-col items-start mt-8 max-sm:mb-[-10px]">
                    <div
                        data-aos="fade-right"
                        className="bg-[#004D91] h-[2px] max-w-[200px] md:max-w-[250px] md:h-[3px] w-full rounded-lg lg:max-w-[260px]"></div>
                    <h1
                        data-aos="fade-right"
                        className="text-2xl md:text-3xl lg:text-3xl font-semibold uppercase mt-2">{t("O‘qish Jarayoni")}</h1>
                </section>

                <section className="flex flex-row justify-between">
                    <span className='max-sm:mt-4 mt-6'>
                        <h1
                            data-aos="fade-right"
                            className='leading-relaxed font-bold lg:text-[20px]'>{t("Biz bilan bog‘lanasiz – barcha kerakli ma’lumotlarni olasiz.")}</h1>
                        <h1
                            data-aos="fade-right"
                            className='leading-relaxed font-medium lg:text-[20px]'>{t("Hujjatlaringizni tayyorlaymiz – universitet talablariga mos ravishda.")}</h1>
                        <h1
                            data-aos="fade-right"
                            className='leading-relaxed font-medium lg:text-[20px]'>{t("Universitetga topshiramiz – hujjatlarni hamkor universitetlarga yuboramiz.")}</h1>
                        <h1
                            data-aos="fade-right"
                            className='leading-relaxed font-medium lg:text-[20px]'>{t("Qabul qilinasiz va talabalik maqomini olasiz.")}</h1>
                        <h1
                            data-aos="fade-right"
                            className='leading-relaxed font-medium lg:text-[20px]'>{t("Turkiyada o‘qishni boshlaysiz – to‘liq qo‘llab-quvvatlaymiz.")}</h1>
                    </span>
                    <img
                        data-aos="zoom-out"
                        src={mask}
                        alt="mask photo"
                        className='w-full h-full max-[550px]:hidden max-[550px]:max-h-[150px] min-[550px]:max-w-[230px] min-[550px]:mt-[-30px] md:max-h-[220px] md:mt-[-30px] lg:max-w-[300px] lg:max-h-[300px] lg:mt-[-50px]' />
                </section>

                <section
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.623), rgba(0, 0, 0, 0.712)), url(${numbers})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                    className='w-[70vw] h-[60vh] max-[390px]:h-[50vh] max-[450px]:h-[40vh] m-auto mt-8 text-white text-center pt-6 flex flex-col rounded-4xl px-2 min-[450px]:h-[50vh] sm:h-[40vh] min-[450px]:pt-10'>
                    <h2
                        data-aos="zoom-in"
                        className='font-medium text-xl max-[450px]:text-[14px] md:mt-4'>
                        {t("Chet elda ta'lim dasturlari bilan")}
                    </h2>
                    <h1
                        data-aos="zoom-in"
                        className='text-4xl font-medium max-[450px]:text-3xl'>
                       {t(" Sizni dunyo bilan bog'laydi!")}
                    </h1>
                    <div
                        ref={ref}
                        data-aos="zoom-in"
                        className="flex flex-col mt-6 justify-center gap-2 min-[450px]:flex-row min-[450px]:justify-evenly min-[450px]:pl-5 sm:mt-10 min-[450px]:mt-12">

                        <span className="flex flex-col">
                            <h3 className="text-2xl font-semibold sm:text-3xl">
                                {inView && (
                                    <CountUp end={250} suffix="+" duration={1} delay={0.5} />
                                )}
                            </h3>
                            <p className="text-[12px] mr-3 sm:text-[16px]">{t("Talaba")}</p>
                        </span>

                        <span>
                            <h3 className="text-2xl font-semibold sm:text-3xl">
                                {inView && (
                                    <CountUp end={6} suffix="+" duration={2} delay={0.5} />
                                )}
                            </h3>
                            <p className="text-[12px] sm:text-[16px]">{t("Tajriba")}</p>
                        </span>

                        <span>
                            <h3 className="text-2xl font-semibold sm:text-3xl">
                                {inView && (
                                    <CountUp end={23} suffix="+" duration={2} delay={0.5} />
                                )}
                            </h3>
                            <p className="text-[12px] sm:text-[16px]">{t("Ta'lim muassasalari")}</p>
                        </span>
                    </div>
                </section>

                <section className="flex flex-col items-start mt-8 max-sm:mb-[-10px]">
                    <div
                        data-aos="fade-right"
                        className="bg-[#004D91] h-[2px] max-w-[250px] md:max-w-[300px] md:h-[3px] w-full rounded-lg lg:max-w-[310px]"></div>
                    <h1
                        data-aos="fade-right"
                        className="text-2xl md:text-3xl lg:text-3xl font-semibold uppercase mt-2">{t("Bizning Maqsadimiz")}</h1>
                </section>

                <h1
                    data-aos="fade-right"
                    className='leading-relaxed font-medium lg:text-[20px] mt-4'>
                    {t("Future Study Education Consulting – bu shunchaki ta’lim agentligi emas, balki sizning kelajagingizga ishonch bilan qadam qo‘yishingizga yordam beradigan yo‘lboshchingizdir.")}
                </h1>
            </div>
        </>
    )
}

export default Home