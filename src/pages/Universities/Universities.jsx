import React from 'react'
import { useEffect, useState } from 'react'
import uni from '../../images/uni.jpg'
import Aos from 'aos'
import kent from '../../images/kent.png'
import { Link } from 'react-router-dom'
import beykentlogo from '../../images/beykentlogo.jpg'
import uskudarlogo from '../../images/uskudarlogo.png'
import medipollogo from '../../images/medipollogo.jfif'
import kulturlogo from '../../images/kulturlogo.png'
import arellogo from '../../images/arellogo.png'
import topkapilogo from '../../images/topkapilogo.webp'
import haliclogo from '../../images/haliclogo.png'
import birunilogo from '../../images/birunilogo.jpg'
import nisantasilogo from '../../images/nisantasilogo.png'
import istinyelogo from '../../images/istinyelogo.webp'
import ozyeginlogo from '../../images/ozyeginlogo.webp'
import fatihlogo from '../../images/fatihlogo.jpg'
import { useTranslation } from 'react-i18next'

const Universities = () => {
    useEffect(() => {
        Aos.init({ duration: 800 })
    }, [])

    useEffect(() => {
        const img = new Image();
        img.src = uni;
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
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.623), rgba(0, 0, 0, 0.712)), url(${uni})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}>
                <h1 
                data-aos='zoom-out-up'
                className='main-text w-full max-w-[400px] text-xl md:max-w-[700px] md:text-3xl lg:max-w-[1000px] lg:text-4xl lg:px-5 lg:py-4 xl:text-5xl text-center text-white uppercase font-semibold px-4 py-3 rounded-2xl'>

                    {t("Universitetlar ro'yxati")}


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

            <section className='flex flex-col items-center justify-center gap-8 px-4 py-8'>

                <Link to='/kent' className='px-4 flex flex-col items-center justify-center border-2 border-[#004D91] rounded-xl max-w-[350px] m-auto w-full h-auto pt-1 pb-4'>
                    <img
                        className='max-w-[350px] w-full h-full mx-auto mt-[-30px]'
                        src={kent}
                        alt="Istanbul Kent University" />
                    <div className='max-w-[350px] w-full py-2 text-center rounded-2xl text-[18px] text-white bg-[#004D91] mt-[-20px] px-2 '>{t("Universitet haqida ma'lumot olish")}</div>
                </Link>

                <Link to='/beykent' className='px-4 flex flex-col items-center justify-center border-2 border-[#004D91] rounded-xl max-w-[350px] m-auto w-full h-auto py-5'>
                    <img
                        className='max-w-[250px] w-full h-full mx-auto mb-[40px]'
                        src={beykentlogo}
                        alt="Istanbul Kent University" />
                    <div className='max-w-[350px] w-full h-auto py-2 text-center rounded-2xl text-[18px] text-white bg-[#004D91] mt-[-20px] px-2 '>{t("Universitet haqida ma'lumot olish")}</div>
                </Link>

                <Link to='/uskudar' className='px-4 flex flex-col items-center justify-center border-2 border-[#004D91] rounded-xl max-w-[350px] m-auto w-full h-auto py-5'>
                    <img
                        className='max-w-[200px] w-full h-full mx-auto mb-[30px]'
                        src={uskudarlogo}
                        alt="Istanbul Kent University" />
                    <div className='max-w-[350px] w-full h-auto py-2 text-center rounded-2xl text-[18px] text-white bg-[#004D91] mt-[-20px] px-2 '>{t("Universitet haqida ma'lumot olish")}</div>
                </Link>

                <Link to='/medipol' className='px-4 flex flex-col items-center justify-center border-2 border-[#004D91] rounded-xl max-w-[350px] m-auto w-full h-auto py-5'>
                    <img
                        className='max-w-[170px] w-full h-full mx-auto mb-[50px]'
                        src={medipollogo}
                        alt="Istanbul Kent University" />
                    <div className='max-w-[350px] w-full h-auto py-2 text-center rounded-2xl text-[18px] text-white bg-[#004D91] mt-[-20px] px-2 '>{t("Universitet haqida ma'lumot olish")}</div>
                </Link>

                <Link to='/kultur' className='px-4 flex flex-col items-center justify-center border-2 border-[#004D91] rounded-xl max-w-[350px] m-auto w-full h-auto py-5'>
                    <img
                        className='max-w-[170px] w-full h-full mx-auto mb-[20px]'
                        src={kulturlogo}
                        alt="Istanbul Kent University" />
                    <div className='max-w-[450px] w-full h-auto py-2 text-center rounded-2xl text-[18px] text-white bg-[#004D91] mt-[-20px] px-2 '>{t("Universitet haqida ma'lumot olish")}</div>
                </Link>

                <Link to='/arel' className='px-4 flex flex-col items-center justify-center border-2 border-[#004D91] rounded-xl max-w-[350px] m-auto w-full h-auto py-5'>
                    <img
                        className='max-w-[150px] w-full h-auto mx-auto mb-[50px]'
                        src={arellogo}
                        alt="Istanbul Kent University" />
                    <div className='max-w-[450px] w-full h-auto py-2 text-center rounded-2xl text-[18px] text-white bg-[#004D91] mt-[-20px] px-2 '>{t("Universitet haqida ma'lumot olish")}</div>
                </Link>

                <Link to='/topkapi' className='px-4 flex flex-col items-center justify-center border-2 border-[#004D91] rounded-xl max-w-[350px] m-auto w-full h-auto py-5'>
                    <img
                        className='max-w-[150px] w-full h-auto mx-auto mb-[40px]'
                        src={topkapilogo}
                        alt="Istanbul Kent University" />
                    <div className='max-w-[450px] w-full h-auto py-2 text-center rounded-2xl text-[18px] text-white bg-[#004D91] mt-[-20px] px-2 '>{t("Universitet haqida ma'lumot olish")}</div>
                </Link>

                <Link to='/halic' className='px-4 flex flex-col items-center justify-center border-2 border-[#004D91] rounded-xl max-w-[350px] m-auto w-full h-auto py-5'>
                    <img
                        className='max-w-[120px] w-full h-auto mx-auto mb-[40px]'
                        src={haliclogo}
                        alt="Istanbul Kent University" />
                    <div className='max-w-[450px] w-full h-auto py-2 text-center rounded-2xl text-[18px] text-white bg-[#004D91] mt-[-20px] px-2 '>{t("Universitet haqida ma'lumot olish")}</div>
                </Link>

                <Link to='/biruni' className='px-4 flex flex-col items-center justify-center border-2 border-[#004D91] rounded-xl max-w-[350px] m-auto w-full h-auto py-5'>
                    <img
                        className='max-w-[200px] w-full h-auto mx-auto mb-[30px]'
                        src={birunilogo}
                        alt="Istanbul Kent University" />
                    <div className='max-w-[450px] w-full h-auto py-2 text-center rounded-2xl text-[18px] text-white bg-[#004D91] mt-[-20px] px-2 '>{t("Universitet haqida ma'lumot olish")}</div>
                </Link>

                <Link to='/nisantasi' className='px-4 flex flex-col items-center justify-center border-2 border-[#004D91] rounded-xl max-w-[350px] m-auto w-full h-auto py-5'>
                    <img
                        className='max-w-[350px] w-full h-auto mx-auto mb-[30px]'
                        src={nisantasilogo}
                        alt="Istanbul Kent University" />
                    <div className='max-w-[450px] w-full h-auto py-2 text-center rounded-2xl text-[18px] text-white bg-[#004D91] mt-[-20px] px-2 '>{t("Universitet haqida ma'lumot olish")}</div>
                </Link>

                <Link to='/istinye' className='px-4 flex flex-col items-center justify-center border-2 border-[#004D91] rounded-xl max-w-[350px] m-auto w-full h-auto py-5'>
                    <img
                        className='max-w-[350px] w-full h-auto mx-auto mt-[-20px]'
                        src={istinyelogo}
                        alt="Istanbul Kent University" />
                    <div className='max-w-[450px] w-full h-auto py-2 text-center rounded-2xl text-[18px] text-white bg-[#004D91] mt-[-20px] px-2 '>{t("Universitet haqida ma'lumot olish")}</div>
                </Link>

                <Link to='/ozyegin' className='px-4 flex flex-col items-center justify-center border-2 border-[#004D91] rounded-xl max-w-[350px] m-auto w-full h-auto py-5'>
                    <img
                        className='max-w-[350px] w-full h-auto mx-auto mt-[-20px]'
                        src={ozyeginlogo}
                        alt="Istanbul Kent University" />
                    <div className='max-w-[450px] w-full h-auto py-2 text-center rounded-2xl text-[18px] text-white bg-[#004D91] mt-[-20px] px-2 '>{t("Universitet haqida ma'lumot olish")}</div>
                </Link>

                <Link to='/fatih' className='px-4 flex flex-col items-center justify-center border-2 border-[#004D91] rounded-xl max-w-[350px] m-auto w-full h-auto py-5'>
                    <img
                        className='max-w-[350px] w-full h-auto mx-auto mt-[-20px]'
                        src={fatihlogo}
                        alt="Istanbul Kent University" />
                    <div className='max-w-[450px] w-full h-auto py-2 text-center rounded-2xl text-[18px] text-white bg-[#004D91] mt-[-20px] px-2 '>{t("Universitet haqida ma'lumot olish")}</div>
                </Link>

            </section>
        </>
    )
}

export default Universities