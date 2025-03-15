import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const Customaccordion3 = () => {
    const { t } = useTranslation()
    const [openIndex, setOpenIndex] = useState(null)

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }
    return (
        <div className="w-full max-w-3xl mx-auto mt-4">
            {[
                {
                    question: t("O'qishni tugatganimdan so'ng men martaba bo'yicha maslahat xizmatidan foydalana olamanmi?"),
                    answer: t("Ha, Future Study Consulting o'qishni tugatgandan so'ng martaba bo'yicha maslahat berish orqali ish qidirish jarayonini qo'llab-quvvatlashi mumkin.")
                },
                {
                    question: t("Stajirovka va ish topishga qanday yordam bera olasiz?"),
                    answer: t("Future Study Consulting odatda stajirovka va ish qidirish jarayonlarida yo'l-yo'riq ko'rsatish, rezyumeni tayyorlash va intervyu texnikasi kabi masalalarda yordam beradi.")
                },
                {
                    question: t("Men martaba va ish imkoniyatlari haqida qanday manbalardan foydalana olaman?"),
                    answer: t("Future Study Consulting odatda ish imkoniyatlari va martaba resurslari, martaba yarmarkalarida ishtirok etish va ish o'rinlari haqida ma'lumot beradi.")
                },
                {
                    question: t("Ish qidirish jarayonida qadamlarimni qanday rejalashtirishim mumkin?"),
                    answer: t("Future Study Consulting ko'pincha talabalarga ish qidirish strategiyalari, ishga arizalar va tarmoqqa ulanish bo'yicha ko'rsatmalar beradi.")
                },
                {
                    question: t("O'qishni tugatgandan keyin martaba xizmatlari davom etadimi?"),
                    answer: t("Ha, martaba xizmatlari ko'pincha bitiruvdan keyin davom etadi va bitiruvchi talabalarga yordam ko'rsatiladi")
                },
                {
                    question: t("Tarmoq va ulanishni yaratish bo'yicha yordam olsam bo'ladimi?"),
                    answer: t("Future Study Consulting ko'pincha bitiruvchilar uchun tarmoq tadbirlari va ulanishni qo'llab-quvvatlashni taklif qiladi.")
                },
                {
                    question: t("Ish suhbatlari va uchrashuvlarga tayyorgarlik ko'rasizmi?"),
                    answer: t("Ha, Future Study Consulting odatda talabalarni intervyu texnikasi, CV va CV tayyorlash bilan qo'llab-quvvatlaydi.")
                },
                {
                    question: t("O'qishni tugatgandan keyin ish qidirishim qancha davom etadi?"),
                    answer: t("Ish topish vaqti shaxsiy omillar va bozor sharoitlariga qarab o'zgaradi, lekin Future Study Consulting odatda jarayoningizni tezlashtirish uchun yordam beradi.")
                },
                {
                    question: t("Ish qidirish jarayonida qanday manbalarga kirishim mumkin?"),
                    answer: t("Future Study Consulting ko'pincha ish o'rinlari e'lonlari, martaba yarmarkalari, bandlik platformalari va kompaniya aloqalariga kirishda yordam beradi.")
                },
                {
                    question: t("O'qishni tugatgandan so'ng qanday martaba faoliyati mavjud?"),
                    answer: t("Future Study Consulting ko'pincha bitiruvchilar uchun martaba seminarlari, ishga joylashtirish bo'yicha seminarlar va martaba tadbirlarini tashkil qiladi")
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

export default Customaccordion3