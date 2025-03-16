import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const CustomAccordion = () => {
    const { t, i18n } = useTranslation()
    const [openIndex, setOpenIndex] = useState(null)

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className="w-full max-w-3xl mx-auto mt-4">
            {[
                {
                    question: t("Ariza topshirish uchun qanday hujjatlar talab qilinadi?"),
                    answer: t("Ariza topshirish uchun odatda pasport ma'lumotlari, transkriptlar, ma'lumotnomalar va tilni bilish sertifikati kabi hujjatlar talab qilinadi. Batafsil ma'lumotni ariza shaklida topishingiz mumkin.")
                },
                {
                    question: t("Ariza topshirish jarayoni qancha davom etadi?"),
                    answer: t("Ariza berish muddati tanlangan universitetga, dastur talablariga va ariza berish muddatiga qarab farq qilishi mumkin. Odatda jarayon bir necha kun davom etadi.")
                },
                {
                    question: t("Viza jarayonlarida yordam olsam bo'ladimi?"),
                    answer: t("Ha, biz viza jarayoni bo'yicha yo'l-yo'riq va yordam taklif etamiz. Biz kerakli hujjatlar va jarayon haqida batafsil ma'lumot beramiz.")
                },
                {
                    question: t("Mening arizamning qabul qilinishi nimaga bog'liq?"),
                    answer: t("Sizning arizangiz siz tanlagan universitetning qabul mezonlariga, ariza hujjatlarining to'liqligi va to'g'riligiga va ularning talablarga muvofiqligiga bog'liq.")
                },
                {
                    question: t("Qaysi davrlarda murojaat qilishim mumkin?"),
                    answer: t("Ariza muddatlari universitetlar va dasturlarga qarab farq qiladi. Odatda, kuz va bahor semestrlari uchun ariza berish mumkin.")
                },
                {
                    question: t("Ariza uchun to'lov bormi?"),
                    answer: t("Ariza toʻlovi universitetlar va dasturlarga qarab farq qiladi. Ba'zilar to'lov olishadi, boshqalari esa bepul ariza berishlari mumkin.")
                },
                {
                    question: t("Qabul qilish uchun til bilish sertifikati qanday?"),
                    answer: t("Tilni bilish sertifikati afzal ko'rgan dastur va universitet tomonidan belgilangan til talablariga qarab farq qilishi mumkin. Odatda, IELTS yoki TOEFL kabi xalqaro imtihon natijalari qabul qilinadi.")
                },
                {
                    question: t("Malumot xatini qanday olishim mumkin?"),
                    answer: t("Malumotnomalar o'qituvchilar, akademiklar yoki ish beruvchilar tomonidan yozilishi mumkin. Xat yozish uchun maxsus shakl bo'lishi mumkin, siz ushbu tafsilotlarga e'tibor berishingiz kerak.")
                },
                {
                    question: t("Qanday qilib arizamni to'ldirishim mumkin?"),
                    answer: t("Anketani to'liq va to'g'ri to'ldirganingizdan so'ng, kerakli hujjatlarni ilova qilib, to'lovni amalga oshirish orqali arizangizni to'ldirishingiz mumkin.")
                },
                {
                    question: t("Agar mening arizam qabul qilinsa nima bo'ladi?"),
                    answer: t("Qabul qilish maqomi siz tanlagan universitetning bahosiga bog'liq. Qabul qilingan taqdirda sizga kerakli ma'lumotlar yuboriladi va ro'yxatdan o'tish jarayoni boshlanadi.")
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
    );
};

export default CustomAccordion;
