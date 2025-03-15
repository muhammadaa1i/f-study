import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const Customaccordion4 = () => {
    const { t } = useTranslation()
    const [openIndex, setOpenIndex] = useState(null)

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className="w-full max-w-3xl mx-auto mt-4">
            {[
                {
                    question: t("Viza va ruxsat berish jarayonlarida yordam bormi?"),
                    answer: t("Ha, Future Study Consulting xalqaro talabalar uchun viza jarayonlari va talab qilinadigan ruxsatnomalar bo'yicha yo'l-yo'riq va yordam taklif qiladi.")
                },
                {
                    question: t("Xalqaro talabalar til o'rganish yordamiga egami?"),
                    answer: t("Tilni qo'llab-quvvatlash sifatida Future Study Consulting ko'pincha til kurslari, seminarlar yoki til o'rgatish resurslarini taqdim etishi mumkin.")
                },
                {
                    question: t("Madaniy moslashish jarayoniga qanday yordamlar beriladi?"),
                    answer: t("Xalqaro talabalarga ko'pincha mahalliy madaniyat va hayot bo'yicha yo'l-yo'riq ko'rsatilib, tadbirlarda va madaniy o'zaro munosabatlarda ishtirok etish imkoniyati beriladi.")
                },
                {
                    question: t("Uy-joy va turar joy imkoniyatlari qanday?"),
                    answer: t("Future Study Consulting ko'pincha xalqaro talabalar uchun turar joy jarayonlarida yordam beradi; U yotoqxona, talabalar uyi yoki uyda qolish kabi variantlarni taklif qilishi mumkin.")
                },
                {
                    question: t("Siz chet elda tibbiy sug'urtani ta'minlaysizmi?"),
                    answer: t("Xalqaro talabalar ko'pincha tibbiy sug'urta bo'yicha ko'rsatmalar va ma'lumotlarni taqdim etish uchun yordam olishlari mumkin.")
                },
                {
                    question: t("Ijtimoiy tadbirlarda yordam mavjudmi?"),
                    answer: t("Ha, xorijlik talabalarga ko'pincha jamiyatni jalb qilish, klublar va ijtimoiy tadbirlarga qo'shilish bo'yicha ko'rsatmalar taklif etiladi.")
                },
                {
                    question: t("Akademik manbalar va kutubxona vositalariga qanday kirishim mumkin?"),
                    answer: t("Future Study Consulting ko'pincha xalqaro talabalarga akademik resurslar va kutubxona vositalaridan foydalanishda yordam beradi.")
                },
                {
                    question: t("Talabalik vizasi va yashash ruxsatnomamni olish uchun qancha vaqt ketadi?"),
                    answer: t("Viza va yashash uchun ruxsatnoma muddatlari mamlakatlar va shaxsiy vaziyatlarga qarab farq qiladi. Future Study Consulting jarayon davomida yo'l-yo'riq va yordam taklif qiladi, ammo vaqt farq qilishi mumkin.")
                },
                {
                    question: t("Chet ellik talabalar uchun madaniy yordam bormi?"),
                    answer: t("Ha, madaniy tadbirlar, ekskursiyalar va mahalliy madaniyatlar bilan tanishish imkoniyati ko'pincha taqdim etiladi.")
                },
                {
                    question: t("Chet ellik talabalar uchun kasbiy yo'nalish bormi?"),
                    answer: t("Future Study Consulting ko'pincha xalqaro talabalarga yo'l-yo'riq va martaba xizmatlari va ish imkoniyatlari haqida ma'lumot beradi.")
                },
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

export default Customaccordion4