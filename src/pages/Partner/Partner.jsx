import React, { useEffect, useState } from 'react'
import partnerbg from '../../images/partnerbg.webp'
import { useTranslation } from 'react-i18next'
import Aos from 'aos'
import axios from 'axios'
import { toast } from 'react-toastify'

const Partner = () => {
    useEffect(() => {
        Aos.init({ duration: 800 })
    }, [])

    useEffect(() => {
        const img = new Image();
        img.src = partnerbg;
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

    const { t } = useTranslation()

    const [phone, setPhone] = useState("+998");
    const [formData, setFormData] = useState({
        name: "",
        telephone: phone,
        date: "",
        site: "",
        email: "",
        country: "",
        location: ""
    });

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
        const { id, value } = e.target;
        if (id === 'telephone') {
            setPhone(formatPhoneNumber(value));
            setFormData({ ...formData, [id]: formatPhoneNumber(value) });
        } else {
            setFormData({ ...formData, [id]: value });
        }
    }

    const [loading, setLoading] = useState(false)

    const SendMessage = async (e) => {
        e.preventDefault();
        setLoading(true);

        const token = '8004033263:AAFtUvkT8IPvuOG_dYeACDM91FwJlnQyCcs';
        const chat_id = '-1002495783867';
        const url = `https://api.telegram.org/bot${token}/sendMessage`;

        const messageContent = `
        *Yangi ariza qabul qilindi!*\n\n
        *Ism:* ${formData.name}\n
        *Telefon:* ${formData.telephone}\n
        *Tashkil etilgan sana:* ${formData.date}\n
        *Veb-sayt:* ${formData.site}\n
        *Email:* ${formData.email}\n
        *Davlat:* ${formData.country}\n
        *Manzil:* ${formData.location}\n
        `;

        try {
            const res = await axios.post(url, {
                chat_id: chat_id,
                text: messageContent,
                parse_mode: "Markdown"
            }, {
                headers: { 'Content-Type': 'application/json' }
            });

            if (res.status === 200 && res.data.ok) {
                document.getElementById('myForm').reset();
                setPhone("+998");
                setFormData({ name: "", telephone: "+998", date: "", site: "", email: "", country: "", location: "" });
                toast.success('Muvaffaqiyatli yuborildi!');
            } else {
                toast.error('Xabar yuborilmadi, qayta urinib ko‘ring.');
            }
        } catch (error) {
            console.error('Yuborishda xato:', error);
            toast.error('Xabar yuborishda xatolik yuz berdi.');
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <div
                className='hero w-[100vw] h-[60vh] flex justify-evenly flex-col items-center'
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.623), rgba(0, 0, 0, 0.712)), url(${partnerbg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}>
                <h1
                    data-aos='zoom-out-up'
                    className='main-text w-full max-w-[400px] text-xl md:max-w-[700px] md:text-3xl lg:max-w-[1000px] lg:text-4xl lg:px-5 lg:py-4 xl:text-5xl text-center text-white uppercase font-semibold px-4 py-3 rounded-2xl'>
                    {t("Biz bilan hamkor bo'ling")}
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

            <div className="main-content max-w-7xl px-8 m-auto text-[#004D91]">

                <section className="flex flex-col mt-8 ">
                    <div
                        data-aos="zoom-out-up"
                        className="bg-[#004D91] h-[2px] w-[100%] m-auto rounded-lg"></div>
                    <h1
                        data-aos="zoom-out-up"
                        className="text-2xl text-center md:text-3xl font-semibold uppercase">{t("Agar sizda agentlik kompaniya yoki yakka tartibda tadbirkorlik bo'lsa")}</h1>
                </section>

                <span
                    data-aos="zoom-in"
                    className='specify2 w-full h-full flex flex-col gap-4 border-2 border-[#004D91] rounded-3xl mt-4 p-4'>

                    <form onSubmit={SendMessage} id='myForm' className="flex flex-col gap-3">
                        <p className='text-xl font-normal'>{t("Agentlik kompaniyasining nomi")} :</p>
                        <input id='name' required type="text" minLength={3} onChange={handleChange} placeholder={t("Agentlik nomi*")} className="w-full bg-white p-2 text-black border-2 border-[#004D91] outline-none rounded-md" />

                        <p className='text-xl font-normal'>{t("Agentlikning aloqa raqami")} :</p>
                        <input id='telephone' required type="tel" value={phone} onChange={handleChange} maxLength={17} placeholder={t("Iltimos, telefoningizni aniqligini diqqat bilan tekshiring")} className="w-full bg-white p-2 text-black border-2 border-[#004D91] outline-none rounded-md mb-1" />

                        <p className='text-xl font-normal'>{t("Agentlik tashkil etilgan sana:")} :</p>
                        <input id='date' required type="date" onChange={handleChange} className="w-full bg-white p-2 text-black border-2 border-[#004D91] outline-none rounded-md mb-1" />

                        <p className='text-xl font-normal'>{t("Agentlik sayti")} :</p>
                        <input id='site' required type="text" onChange={handleChange} minLength={3} placeholder={t("Agentlikning rasmiy saytini yozing")} className="w-full bg-white p-2 text-black border-2 border-[#004D91] outline-none rounded-md mb-1" />

                        <p className='text-xl font-normal'>{t("Agentlikning elektron pochta manzili")} :</p>
                        <input id='email' required type="email" onChange={handleChange} minLength={3} placeholder={t("Iltimos, elektron pochta to'g'riligini tekshiring")} className="w-full bg-white p-2 text-black border-2 border-[#004D91] outline-none rounded-md mb-1" />

                        <p className='text-xl font-normal'>{t("Agentlik mamlakati")} :</p>
                        <input id='country' required type="text" onChange={handleChange} minLength={3} placeholder={t("Agentlik qaysi mamlakatdaligini kiriting")} className="w-full bg-white p-2 text-black border-2 border-[#004D91] outline-none rounded-md mb-1" />

                        <p className='text-xl font-normal'>{t("Agentlik manzili ma'lumotlari")} :</p>
                        <textarea id='location' required rows={6} onChange={handleChange} minLength={3} placeholder={t("Agentlikning aniq manzili")} className="w-full bg-white p-2 text-black border-2 border-[#004D91] outline-none rounded-md mb-1" />

                        <button disabled={loading} type="submit" className={`w-full h-10 rounded-lg font-medium ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#1894b3] text-white"}`}>
                            {loading ? 'Sending...' : 'Send'}
                        </button>
                    </form>

                </span>

            </div>
        </>
    )
}

export default Partner