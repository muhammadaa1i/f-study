import React, { useEffect, useState } from 'react'
import whytr from '../../images/whytr.jpeg'
import Aos from 'aos'
import { useTranslation } from 'react-i18next'

const Turkey = () => {
  useEffect(() => {
    Aos.init({ duration: 800 })
  }, [])

  useEffect(() => {
    const img = new Image();
    img.src = whytr;
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

  const { t, i18n } = useTranslation()

  return (
    <>
      <div
        className='hero w-[100vw] h-[60vh] flex justify-evenly flex-col items-center'
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.623), rgba(0, 0, 0, 0.712)), url(${whytr})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}>
        <h1 className='main-text w-full max-w-[400px] text-xl md:max-w-[700px] md:text-3xl lg:max-w-[1000px] lg:text-4xl lg:px-5 lg:py-4 xl:text-5xl text-center text-white uppercase font-semibold px-4 py-3 rounded-2xl'>
         
              {t("Nega aynan turkiya?")}
         
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

        <section className='flex flex-col gap-6 py-3 items-center'>

          <span
            data-aos="zoom-in"
            className='specify2 w-full h-full flex flex-col gap-4 border-2 border-[#004D91] rounded-3xl mt-4 p-4'>

            <h1 className='font-medium'>
              {t("Turkiyada o‘qish bir nechta jihatdan foydali. Ta’lim sifati yuqori, lekin narxi boshqa davlatlarga qaraganda ancha arzon. Stipendiya dasturlari ko‘p, bu esa moddiy jihatdan katta yengillik beradi. Yashash sharoitlari qulay va narxlar ham talabalar uchun mos. Madaniy yaqinlik tufayli moslashish osonroq bo‘ladi. Shuningdek, xalqaro tajriba orttirish va turli davlatlarda ishlash imkoniyatlari keng.")}
            </h1>

          </span>

          <div
            data-aos='zoom-in'
            className='max-w-[550px] w-full max-h-[400px] h-full mb-10'>
            <iframe
              className='m-auto max-[550px]:m-auto h-[450px] w-[250px] mr-2 rounded-2xl shadow-2xl'
              src="https://www.youtube.com/embed/xihW_D0D-Ms"
              frameborder="0"
              allowFullScreen
            >
            </iframe>
          </div>

        </section>

        <section className='flex flex-col gap-6 py-3 items-center'>

          <span
            data-aos="zoom-in"
            className='specify2 w-full h-full flex flex-col gap-4 border-2 border-[#004D91] rounded-3xl mt-4 p-4'>

            <h1 className='font-medium'>
              {t("Universitetlarda zamonaviy o‘quv dasturlari va ilg‘or texnologiyalar qo‘llaniladi. Diplom xalqaro miqyosda tan olinadi, bu esa kelajakda yaxshi ish topishga yordam beradi. Talabalar turar joylari, transport va umumiy yashash xarajatlari nisbatan arzon. Shuningdek, talabalarga qaratilgan ko‘plab chegirmalar va imtiyozlar mavjud. Iqlimi yoqimli, turmush tarzi bizga yaqin, bu esa yangi muhitga tez moslashishga yordam beradi.")}
            </h1>

          </span>

          <div
            data-aos='zoom-in'
            className='max-w-[550px] w-full max-h-[400px] h-full mb-10'>
            <iframe
              className='m-auto max-[550px]:m-auto h-[390px] w-[220px] mr-2 rounded-2xl shadow-2xl'
              src="https://www.youtube.com/embed/ZS7OgBYZNmE"
              frameborder="0"
              allowFullScreen
            >
            </iframe>
          </div>

        </section>

        <section className='flex flex-col gap-6 py-3 items-center'>

          <span
            data-aos="zoom-in"
            className='specify2 w-full h-full flex flex-col gap-4 border-2 border-[#004D91] rounded-3xl mt-4 p-4'>

            <h1 className='font-medium'>
              {t("Talabalar hayoti juda faol va qiziqarli. Universitetlarda talabalar klublari, ilmiy konferensiyalar, madaniy tadbirlar va sport musobaqalari ko‘p bo‘ladi. Talabalar uchun kutubxonalar kechga qadar ochiq, kafelar va dam olish maskanlari ham ko‘p. Transport tizimi rivojlangan, talabalar uchun maxsus chegirmalar bor. Shuningdek, ishlash va amaliyot o‘tash imkoniyatlari mavjud. Turli festivallar, sayohatlar va xalqaro talabalar bilan do‘stlashish imkoniyati ham hayotni yanada qiziqarli qiladi.")}
            </h1>

          </span>

          <div
            data-aos='zoom-in'
            className='max-w-[550px] w-full max-h-[400px] h-full mb-10'>
            <iframe
              className='m-auto max-[550px]:m-auto h-[390px] w-[220px] mr-2 rounded-2xl shadow-2xl'
              src="https://www.youtube.com/embed/JLQGOzl30s4"
              frameborder="0"
              allowFullScreen
            >
            </iframe>
          </div>

        </section>

        <span
          data-aos="zoom-in"
          className='specify2 w-full h-full flex flex-col gap-4 border-2 border-[#004D91] rounded-3xl mt-4 p-4'>

          <h1 className='font-medium'>
            {t("O‘qish sifatli ta’lim, arzon yashash, boy madaniyat va talabalar uchun keng imkoniyatlar bilan ajralib turadi. Moslashish oson, xalqaro tajriba orttirish va kelajakda yaxshi ish topish imkoniyatlari yuqori. Talabalar hayoti esa jonli, qiziqarli va faol o‘tadi.")}
          </h1>

        </span>

      </div>
    </>
  )
}

export default Turkey