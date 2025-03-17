import React, { useEffect, useState } from 'react'
import logo from '../../images/nobglogo.jpg'
import { Link, Outlet, useLocation } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './Layout.css'
import navbg from '../../images/navbarbg.png'
import tglogo from '../../images/tglogo.webp'
import whlogo from '../../images/whlogo.png'
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next'
import uzb from '../../images/uzbflag.png'
import rus from '../../images/russianflag.png'
import eng from '../../images/gbflag.png'
import tur from '../../images/turkflag.png'

const Layout = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const pathname = location.pathname;

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        return () => {
            document.body.classList.remove("overflow-hidden");
        }
    }, [isOpen])

    useEffect(() => {
        Aos.init({ duration: 800 })
    }, [])

    const [phone, setPhone] = useState("+998")

    const formatPhoneNumber = (value) => {
        let numbers = value.replace(/\D/g, "");

        if (!numbers.startsWith("998")) {
            numbers = "998";
        }

        let formatted = `+${numbers.substring(0, 3)}`;
        if (numbers.length > 3) formatted += ` ${numbers.substring(3, 5)}`;
        if (numbers.length > 5) formatted += ` ${numbers.substring(5, 8)}`;
        if (numbers.length > 8) formatted += ` ${numbers.substring(8, 10)}`;
        if (numbers.length > 10) formatted += ` ${numbers.substring(10, 12)}`;

        return formatted;
    }

    const handleChange = (e) => {
        setPhone(formatPhoneNumber(e.target.value))
    }

    const [loading, setLoading] = useState(false)

    const SendMessage = async (e) => {
        e.preventDefault();
        setLoading(true);

        const token = '8004033263:AAFtUvkT8IPvuOG_dYeACDM91FwJlnQyCcs';
        const chat_id = '-1002495783867';
        const url = `https://api.telegram.org/bot${token}/sendMessage`;

        const name = document.getElementById('name').value;
        const telephone = document.getElementById('telephone').value;
        const messageContent = `Ismi: ${name} \nTelefon raqami: ${telephone}`;

        try {
            const res = await axios.post(url, {
                chat_id: chat_id,
                text: messageContent,
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if (res.status === 200 && res.data.ok) {
                document.getElementById('myForm').reset()
                setPhone("")
                toast.success('Muvaffaqiyatli yuborildi!')
            } else {
                toast.error('Xabar yuborilmadi, qayta urinib ko‘ring.')
            }
        } catch (error) {
            console.error('Yuborishda xato:', error)
            toast.error('Xabar yuborishda xatolik yuz berdi.')
        } finally {
            setLoading(false)
        }
    }

    const { t, i18n } = useTranslation()
    const ChangeLng = (selectedLanguage) => {
        i18n.changeLanguage(selectedLanguage)
        localStorage.setItem('i18nextLng', selectedLanguage)
    }
    const language = localStorage.getItem('i18nextLng') || 'uz'

    return (
        <>
            <header className='header h-[10vh]'>

                <nav
                    style={{
                        backgroundImage: ` url(${navbg})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundAttachment: "scroll"
                    }}
                    className='nav w-[100vw] z-30 h-[60px] bg-white flex flex-row items-center justify-between fixed top-0 left-0 shadow-2xl overflow-hidden '>

                    <a href="/">
                        <img className='h-[9vh] logo max-[450px]:h-[7vh]' src={logo} alt="logo of company" />
                    </a>
                    <div className='flex flex-row items-center justify-between gap-4'>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="menu-btn w-11 h-11 mr-1 md:hidden">
                            <i className="bars fa-solid fa-bars text-2xl text-[#004D91]"></i>
                        </button>
                    </div>

                    <section className='menu hidden md:block'>
                        <ul className='nav-links flex flex-row items-center text-[#004D91] justify-center gap-6 mr-12'>
                            <li>
                                <Link className="no-underline text-[18px] font-normal transition-transform duration-300 hover:translate-2" to="/">{t('Bosh sahifa')}</Link>
                            </li>
                            <li>
                                <Link className="no-underline text-[18px] lg:text-xl font-normal" to="/programs">{t('Dasturlar')}</Link>
                            </li>
                            <li>
                                <Link className="no-underline text-[18px] font-normal" to="/universities">{t('Universitetlar')}</Link>
                            </li>
                            <li>
                                <Link className="no-underline text-[18px] font-normal" to="/services">{t('Xizmatlar')}</Link>
                            </li>
                            <li>
                                <Link className="no-underline text-[18px] font-normal" to="/turkey">{t('Turkiya')}</Link>
                            </li>
                        </ul>
                    </section>

                    <section className={`mobile-menu fixed top-0 right-0 h-full w-[50%] max-[500px]:w-[60%] max-[400px]:w-[75%] bg-gray-50 shadow-lg transform md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"} z-50 transition-transform duration-500 ease-in-out `}>
                        <div className="w-auto h-auto flex flex-row justify-between items-center px-3 py-4">
                            <button onClick={() => setIsOpen(false)} className="fa-solid fa-x text-2xl max-sm:text-xl"></button>
                        </div>
                        <section className='languages w-[95%] mx-auto flex flex-row justify-evenly border-2 border-[#004D91] rounded-xl'>
                            <button
                                onClick={() => ChangeLng('uz')}
                                className='outline-none py-2'>
                                <img
                                    className='w-10 h-8 rounded-[6px]'
                                    src={uzb}
                                    alt="uzbekistan flag" />
                            </button>
                            <div className='w-[2px] h-auto bg-[#004D91]'></div>
                            <button
                                onClick={() => ChangeLng('ru')}
                                className='outline-none py-2'>
                                <img
                                    className='w-10 h-8 rounded-[6px]'
                                    src={rus}
                                    alt="russian flag" />
                            </button>
                            <div className='w-[2px] h-auto bg-[#004D91]'></div>
                            <button
                                onClick={() => ChangeLng('en')}
                                className='outline-none py-2'>
                                <img
                                    className='w-10 h-8 rounded-[6px]'
                                    src={eng}
                                    alt="russian flag" />
                            </button>
                            <div className='w-[2px] h-auto bg-[#004D91]'></div>
                            <button
                                onClick={() => ChangeLng('tu')}
                                className='outline-none py-2'>
                                <img
                                    className='w-10 h-8 rounded-[6px]'
                                    src={tur}
                                    alt="russian flag" />
                            </button>
                        </section>
                        <ul className="flex flex-col pr-2 gap-4 text-2xl mt-8 ml-8 max-w-[500px]:ml-8 max-sm:text-lg text-start">
                            <li className={`relative flex flex-row gap-2 items-center`}>
                                <Link className="text-[#004D91] no-underline flex flex-row items-center gap-1" to="/" onClick={() => {
                                    setIsOpen(false)
                                    window.scrollTo(0, 0)
                                }}>
                                    <i className="fa-solid fa-users"></i>
                                    <p>
                                        {t('Biz haqimizda')}
                                    </p>
                                </Link>
                                {pathname === '/' && (
                                    <div className={`underline absolute left-3 sm:left-0 bottom-[-6px] max-sm:left-0 ${isOpen ? 'sm:w-[200px]' : 'w-0'} ${isOpen ? 'w-[160px]' : 'w-0'} h-[2px] bg-[#004D91] transition-all duration-[1000ms] ease-in-out`}></div>
                                )}
                            </li>
                            <li className={`relative flex flex-row gap-2 items-center`}>
                                <Link className="text-[#004D91] no-underline flex flex-row items-center gap-1 pl-0.5" to="/programs" onClick={() => {
                                    setIsOpen(false)
                                    window.scrollTo(0, 0)
                                }}>
                                    <i className="fa-solid fa-universal-access"></i>
                                    <p>
                                        {t("Dasturlar")}
                                    </p></Link>
                                {pathname === '/programs' && (
                                    <div className={`underline absolute left-3 sm:left-0 bottom-[-6px] max-sm:left-0 ${isOpen ? 'w-[160px]' : 'w-0'} ${isOpen ? 'sm:w-[200px]' : 'w-0'} h-[2px] bg-[#004D91] transition-all duration-[1000ms] ease-in-out`}></div>
                                )}
                            </li>
                            <li className={`relative flex flex-row gap-2 items-center`}>
                                <Link className="text-[#004D91] no-underline flex flex-row items-center gap-1 pl-0.5" to="/universities" onClick={() => {
                                    setIsOpen(false)
                                    window.scrollTo(0, 0)
                                }}>
                                    <i className="fa-solid fa-building-columns"></i>
                                    <p>
                                        {t("Universitetlar")}
                                    </p>
                                </Link>
                                {pathname === '/universities' && (
                                    <div className={`underline absolute left-3 sm:left-0 bottom-[-6px] max-sm:left-0 ${isOpen ? 'w-[160px]' : 'w-0'} ${isOpen ? 'sm:w-[200px]' : 'w-0'} h-[2px] bg-[#004D91] transition-all duration-[1000ms] ease-in-out`}></div>
                                )}
                                {pathname === '/kent' && (
                                    <div className={`underline absolute left-3 sm:left-0 bottom-[-6px] max-sm:left-0 ${isOpen ? 'w-[160px]' : 'w-0'} ${isOpen ? 'sm:w-[200px]' : 'w-0'} h-[2px] bg-[#004D91] transition-all duration-[1000ms] ease-in-out`}></div>
                                )}
                                {pathname === '/beykent' && (
                                    <div className={`underline absolute left-3 sm:left-0 bottom-[-6px] max-sm:left-0 ${isOpen ? 'w-[160px]' : 'w-0'} ${isOpen ? 'sm:w-[200px]' : 'w-0'} h-[2px] bg-[#004D91] transition-all duration-[1000ms] ease-in-out`}></div>
                                )}
                                {pathname === '/uskudar' && (
                                    <div className={`underline absolute left-3 sm:left-0 bottom-[-6px] max-sm:left-0 ${isOpen ? 'w-[160px]' : 'w-0'} ${isOpen ? 'sm:w-[200px]' : 'w-0'} h-[2px] bg-[#004D91] transition-all duration-[1000ms] ease-in-out`}></div>
                                )}
                                {pathname === '/medipol' && (
                                    <div className={`underline absolute left-3 sm:left-0 bottom-[-6px] max-sm:left-0 ${isOpen ? 'w-[160px]' : 'w-0'} ${isOpen ? 'sm:w-[200px]' : 'w-0'} h-[2px] bg-[#004D91] transition-all duration-[1000ms] ease-in-out`}></div>
                                )}
                                {pathname === '/kultur' && (
                                    <div className={`underline absolute left-3 sm:left-0 bottom-[-6px] max-sm:left-0 ${isOpen ? 'w-[160px]' : 'w-0'} ${isOpen ? 'sm:w-[200px]' : 'w-0'} h-[2px] bg-[#004D91] transition-all duration-[1000ms] ease-in-out`}></div>
                                )}
                                {pathname === '/arel' && (
                                    <div className={`underline absolute left-3 sm:left-0 bottom-[-6px] max-sm:left-0 ${isOpen ? 'w-[160px]' : 'w-0'} ${isOpen ? 'sm:w-[200px]' : 'w-0'} h-[2px] bg-[#004D91] transition-all duration-[1000ms] ease-in-out`}></div>
                                )}
                                {pathname === '/topkapi' && (
                                    <div className={`underline absolute left-3 sm:left-0 bottom-[-6px] max-sm:left-0 ${isOpen ? 'w-[160px]' : 'w-0'} ${isOpen ? 'sm:w-[200px]' : 'w-0'} h-[2px] bg-[#004D91] transition-all duration-[1000ms] ease-in-out`}></div>
                                )}
                                {pathname === '/halic' && (
                                    <div className={`underline absolute left-3 sm:left-0 bottom-[-6px] max-sm:left-0 ${isOpen ? 'w-[160px]' : 'w-0'} ${isOpen ? 'sm:w-[200px]' : 'w-0'} h-[2px] bg-[#004D91] transition-all duration-[1000ms] ease-in-out`}></div>
                                )}
                                {pathname === '/biruni' && (
                                    <div className={`underline absolute left-3 sm:left-0 bottom-[-6px] max-sm:left-0 ${isOpen ? 'w-[160px]' : 'w-0'} ${isOpen ? 'sm:w-[200px]' : 'w-0'} h-[2px] bg-[#004D91] transition-all duration-[1000ms] ease-in-out`}></div>
                                )}
                                {pathname === '/nisantasi' && (
                                    <div className={`underline absolute left-3 sm:left-0 bottom-[-6px] max-sm:left-0 ${isOpen ? 'w-[160px]' : 'w-0'} ${isOpen ? 'sm:w-[200px]' : 'w-0'} h-[2px] bg-[#004D91] transition-all duration-[1000ms] ease-in-out`}></div>
                                )}
                                {pathname === '/istinye' && (
                                    <div className={`underline absolute left-3 sm:left-0 bottom-[-6px] max-sm:left-0 ${isOpen ? 'w-[160px]' : 'w-0'} ${isOpen ? 'sm:w-[200px]' : 'w-0'} h-[2px] bg-[#004D91] transition-all duration-[1000ms] ease-in-out`}></div>
                                )}
                                {pathname === '/ozyegin' && (
                                    <div className={`underline absolute left-3 sm:left-0 bottom-[-6px] max-sm:left-0 ${isOpen ? 'w-[160px]' : 'w-0'} ${isOpen ? 'sm:w-[200px]' : 'w-0'} h-[2px] bg-[#004D91] transition-all duration-[1000ms] ease-in-out`}></div>
                                )}
                                {pathname === '/fatih' && (
                                    <div className={`underline absolute left-3 sm:left-0 bottom-[-6px] max-sm:left-0 ${isOpen ? 'w-[160px]' : 'w-0'} ${isOpen ? 'sm:w-[200px]' : 'w-0'} h-[2px] bg-[#004D91] transition-all duration-[1000ms] ease-in-out`}></div>
                                )}
                            </li>
                            <li className={`relative flex flex-row gap-2 items-center`}>
                                <Link className="text-[#004D91] no-underline flex flex-row items-center gap-1 pl-0.5" to="/services" onClick={() => {
                                    setIsOpen(false)
                                    window.scrollTo(0, 0)
                                }}>
                                    <i className="fa-solid fa-plane rotate-[330deg]"></i>
                                    <p>
                                        {t("Transfer xizmati")}
                                    </p>
                                </Link>
                                {pathname === '/services' && (
                                    <div className={`underline absolute left-3 sm:left-0 bottom-[-6px] max-sm:left-0 ${isOpen ? 'w-[175px]' : 'w-0'} ${isOpen ? 'sm:w-[220px]' : 'w-0'} h-[2px] bg-[#004D91] transition-all duration-[1000ms] ease-in-out`}></div>
                                )}
                            </li>
                            <li className={`relative flex flex-row gap-2 items-center`}>
                                <Link className="text-[#004D91] no-underline flex flex-row items-center gap-1 pl-0.5" to="/turkey" onClick={() => {
                                    setIsOpen(false)
                                    window.scrollTo(0, 0)
                                }}>
                                    <i className="fa-solid fa-earth-europe"></i>
                                    <p>
                                        {t("Turkiya")}
                                    </p>
                                </Link>
                                {pathname === '/turkey' && (
                                    <div className={`underline absolute left-3 sm:left-0 bottom-[-6px] max-sm:left-0 ${isOpen ? 'w-[150px]' : 'w-0'} ${isOpen ? 'sm:w-[200px]' : 'w-0'} h-[2px] bg-[#004D91] transition-all duration-[1000ms] ease-in-out`}></div>
                                )}
                            </li>
                            <li className={`relative flex flex-row gap-2 items-center`}>
                                <Link className="text-[#004D91] no-underline flex flex-row items-center gap-1 pl-0.5" to="/questions" onClick={() => {
                                    setIsOpen(false)
                                    window.scrollTo(0, 0)
                                }}>
                                    <i class="fa-solid fa-comments"></i>
                                    <p>
                                        {t("Ko'p beriladigan savollar")}
                                    </p>
                                </Link>
                                {pathname === '/questions' && (
                                    <div className={`underline absolute left-3 sm:left-0 bottom-[-6px] max-sm:left-0 ${isOpen ? 'w-[220px]' : 'w-0'} ${isOpen ? 'sm:w-[250px]' : 'w-0'} h-[2px] bg-[#004D91] transition-all duration-[1000ms] ease-in-out`}></div>
                                )}
                            </li>
                            <li className={`relative flex flex-row gap-2 items-center`}>
                                <Link className="text-[#004D91] no-underline flex flex-row items-center gap-1 pl-0.5" to="/partner" onClick={() => {
                                    setIsOpen(false)
                                    window.scrollTo(0, 0)
                                }}>
                                    <i class="fa-solid fa-handshake-simple"></i>
                                    <p>
                                        {t("Biz bilan hamkor bo'ling")}
                                    </p>
                                </Link>
                                {pathname === '/partner' && (
                                    <div className={`underline absolute left-3 sm:left-0 bottom-[-6px] max-sm:left-0 ${isOpen ? 'w-[220px]' : 'w-0'} ${isOpen ? 'sm:w-[250px]' : 'w-0'} h-[2px] bg-[#004D91] transition-all duration-[1000ms] ease-in-out`}></div>
                                )}
                            </li>
                        </ul>
                    </section>

                </nav>

            </header >

            {isOpen && (
                <div
                    className="fixed top-0 left-0 w-full h-full bg-gray-800 opacity-50 z-10"
                    onClick={() => setIsOpen(false)}>
                </div>
            )}

            <a
                href='https://t.me/futurestudyuz'
                target='_blank'
                className='telegram-logo'>
                <img
                    className='w-14 h-14 rounded-[50%] z-[30] bottom-5 left-4 fixed shadow-glow'
                    src={tglogo}
                    alt="telegram logo" />
            </a>

            <a
                href='https://wa.me/998771445777'
                target='_blank'
                className='whatsapp-logo w-auto h-auto p-0'>
                <img
                    className='w-14 h-14 rounded-[50%] z-[30] bottom-5 right-4 fixed shadow-glow'
                    src={whlogo}
                    alt="telegram logo" />
            </a>

            <main>
                <Outlet />
            </main>

            <footer className="max-w-[1536px] m-auto w-full max-sm:px-6 px-4 min-[450px]:w-[80%] md:w-full">
                <div className="footer container flex flex-col md:flex-row gap-8 justify-between items-center bg-[#043d6e] rounded-3xl m-auto my-5 h-auto text-white px-6 py-5 xl:px-12">

                    <section
                        data-aos="zoom-in"
                        className="contacts w-full max-w-[300px] h-auto flex flex-col gap-5 md:items-start">
                        <div className="max-w-[225px] w-full flex flex-col gap-3 text-start max-md:m-auto">
                            <h1 className="text-lg font-medium uppercase sm:text-xl">{t("Kontakt:")}</h1>
                            <div className="flex flex-col items-start gap-1">
                                <p className="text-lg font-extralight">{t("Tel")}:</p>
                                <a className="text-lg font-extralight text-white no-underline" href="tel:+998771445777">+998 77 144 57 77</a>
                                <a className="text-lg font-extralight text-white no-underline" href="tel:+998772053777">+998 77 205 37 77</a>
                            </div>
                            <h1 className="text-lg font-medium uppercase sm:text-xl">{t("Ijtimoiy tarmoqlar:")}</h1>
                            <span className='flex flex-row gap-6 mb-2'>
                                <a
                                    target='_blank'
                                    href="https://t.me/futurestudyuz"
                                    className="social-icon flex justify-center items-center">
                                    <i className="fa-brands fa-telegram text-5xl "></i>
                                </a>
                                <a
                                    target='_blank'
                                    href="https://www.instagram.com/future.study.uz"
                                    className="social-icon flex justify-center items-center">
                                    <i className="fa-brands fa-instagram text-5xl"></i>
                                </a>
                                <a
                                    className='social-icon flex justify-center items-center'
                                    target='_blank'
                                    href="https://wa.me/998771445777">
                                    <i class="fa-brands fa-whatsapp text-5xl"></i>
                                </a>
                            </span>
                            <a
                                target='_blank'
                                href="https://maps.app.goo.gl/3sCRdFikaroadQyq5?g_st=com.google.maps.preview.copy" className="flex items-center gap-3 social-icon">
                                <i className="fa-solid fa-location-dot text-5xl"></i> {t("Mustaqillik 88A, Darhan Business center")}
                            </a>
                        </div>
                    </section>

                    <section
                        id='form'
                        data-aos="zoom-in"
                        className="form max-w-[300px] w-full flex flex-col gap-3 items-center md:items-start">
                        <h1 className="text-lg font-medium text-center uppercase sm:text-xl">{t("Bepul kosultatsiya olish uchun ma'lumotlaringizni qoldiring!")}</h1>
                        <form
                            onSubmit={SendMessage}
                            id='myForm'
                            className="w-full max-w-[300px] flex flex-col gap-3">
                            <p className='text-xl font-light'>{t("Ismingizni kiriting:")}</p>
                            <input
                                id='name'
                                required
                                type="text"
                                minLength={3}
                                placeholder={t("Ismingiz")}
                                className="w-full bg-white p-2 text-black outline-none rounded-md" />
                            <p className='text-xl font-light'>{t("Telefon raqamingizni kiriting:")}</p>
                            <input
                                id='telephone'
                                required
                                type="tel"
                                value={phone}
                                onChange={handleChange}
                                maxLength={17}
                                placeholder={t("Telefon raqamingiz")}
                                className="w-full bg-white p-2 text-black outline-none rounded-md mb-1" />
                            <button
                                disabled={loading}
                                type="submit"
                                className={`w-full h-10 rounded-lg font-medium ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#1894b3] text-white"}`}>
                                {loading ? t('Sending...') : t('Send')}
                            </button>
                        </form>
                    </section>

                    <a
                        href='https://maps.app.goo.gl/3sCRdFikaroadQyq5?g_st=com.google.maps.preview.copy'
                        target='_blank'
                        data-aos="zoom-in"
                        className="w-full max-w-[350px] flex justify-center">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.5162143970906!2d69.29833217520184!3d41.31938700021172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef4daeb07b8cb%3A0x4c569a4f61ce0cb5!2sDarhan%20Business%20Center!5e0!3m2!1sen!2s!4v1740838627208!5m2!1sen!2s" className="w-full h-[300px] md:h-[350px] rounded-2xl border-0" loading="lazy"></iframe>
                    </a>

                </div>
            </footer>
        </>
    )
}

export default Layout