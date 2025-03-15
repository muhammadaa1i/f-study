import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const Customaccordion2 = () => {
    const { t } = useTranslation()
    const [openIndex, setOpenIndex] = useState(null)

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className="w-full max-w-3xl mx-auto mt-4">
            {[
                {
                    question: t("O'qish to'lovlari qancha?"),
                    answer: t("O'qish to'lovlari tanlangan dastur, muddat va ta'lim muassasasiga qarab farqlanadi. Toʻlov haqida batafsil maʼlumot olish uchun Future Studyning rasmiy veb-saytiga tashrif buyuring yoki biz bilan bevosita bogʻlaning.")
                },
                {
                    question: t("Qanday to'lov imkoniyatlari mavjud?"),
                    answer: t("To'lov opsiyalari ko'pincha bank o'tkazmasi, kredit karta yoki belgilangan to'lov opsiyalari kabi turli usullarni o'z ichiga olishi mumkin.")
                },
                {
                    question: t("Kredit va stipendiya imkoniyatlari bormi?"),
                    answer: t("Ba'zi hollarda ta'lim muassasalari talabalarga kreditlar, stipendiyalar yoki moliyaviy yordam ko'rsatishi mumkin. Batafsil ma'lumot uchun ta'lim muassasasiga murojaat qiling.")
                },
                {
                    question: t("O'qish to'lovlari haqida qanday bilsam bo'ladi?"),
                    answer: t("O'qish to'lovlarini odatda ta'lim muassasasining veb-saytida yoki tegishli bo'limga murojaat qilish orqali topish mumkin.")
                },
                {
                    question: t("O'quv to'lovi qachon to'lanadi?"),
                    answer: t("To'lov muddati odatda ro'yxatdan o'tish tasdiqlangandan keyin yoki semestr boshida aniqlanadi. Toʻlov jadvali va tafsilotlarini taʼlim muassasasidan olish mumkin.")
                },
                {
                    question: t("To'lov rejalari va bo'lib to'lash imkoniyatlari bormi?"),
                    answer: t("Ba'zi hollarda to'lov rejalari yoki bo'lib-bo'lib to'lash imkoniyatlari taklif qilinishi mumkin. Ushbu masala bo'yicha ta'lim muassasasining moliya bo'limiga murojaat qilishingiz mumkin.")
                },
                {
                    question: t("O'quv to'loviga nima kiradi?"),
                    answer: t("O'qish ko'pincha kurslar, resurslar yoki ma'lum qulayliklar kabi xususiyatlarni o'z ichiga olishi mumkin. Tafsilotlar uchun vakolatli bo'limga murojaat qilishingiz mumkin.")
                },
                {
                    question: t("O‘qish to‘lovlarida chegirmalar yoki aksiyalar bormi?"),
                    answer: t("Ba'zi hollarda, ro'yxatdan o'tish davrida chegirmalar yoki aktsiyalar taklif qilinishi mumkin. Odatda bu ma'lumotni ta'lim muassasasining veb-saytida topishingiz mumkin.")
                },
                {
                    question: t("O'qish to'lovlari belgilanganmi yoki ular semestrdan semestrga o'zgarishi mumkinmi?"),
                    answer: t("O'quv to'lovlari ta'lim muassasasining siyosatiga qarab farq qilishi mumkin. Har bir davrda uni qayta baholash mumkin.")
                },
                {
                    question: t("Qanday hollarda o'quv to'lovlarini qaytarasiz?"),
                    answer: t("To'lovni qaytarish siyosati ko'pincha ta'lim muassasasi tomonidan belgilangan shartlar va muddatlarga qarab farq qilishi mumkin. Ushbu mavzu bo'yicha batafsil ma'lumotni o'z ta'lim muassasangizdan olishingiz mumkin.")
                }
            ].map((item, index) => (
                <div
                    data-aos='zoom-out-up'
                    key={index}
                    className="mb-2 border-2 border-[#004D91] rounded-lg">
                    <button
                        className="w-full text-left px-4 py-3 font-semibold flex justify-between items-center"
                        onClick={() => toggleAccordion(index)}
                    >
                        {item.question}
                        <span>{openIndex === index ? "−" : "+"}</span>
                    </button>
                    {openIndex === index && (
                        <div className="px-4 py-3 bg-white text-[#004D91] font-medium border-t-2 border-[#004D91]">
                            {item.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default Customaccordion2