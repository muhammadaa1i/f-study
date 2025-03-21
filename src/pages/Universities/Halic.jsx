import Aos from 'aos'
import React, { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import halicbg from '../../images/halicbg.jpg'
import halic2 from '../../images/halic2.jpg'
import halic3 from '../../images/halic3.jpg'
import { useTranslation } from 'react-i18next'

const Halic = () => {

  useEffect(() => {
    Aos.init({ duration: 800 })
  }, [])

  useEffect(() => {
    const img = new Image();
    img.src = halicbg;
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

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.623), rgba(0, 0, 0, 0.712)), url(${halicbg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}>
        <h1 className='main-text w-full max-w-[400px] text-xl md:max-w-[700px] md:text-3xl lg:max-w-[1000px] lg:text-4xl lg:px-5 lg:py-4 xl:text-5xl text-center text-white uppercase font-semibold px-4 py-3 rounded-2xl'>
          
              {t("Istanbul Haliç universiteti")}
         
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

      <section className='w-[90%] m-auto h-auto bg-[#004D91] mt-4 rounded-2xl text-white grid grid-cols-2 gap-2 p-4 max-[350px]:flex max-[350px]:flex-col max-[350px]:gap-3 min-[500px]:grid-cols-3 min-[500px]:gap-4'>
        <span
          data-aos='zoom-in'
          className='flex flex-col items-center justify-center gap-2'>
          <i class="fa-solid fa-graduation-cap text-3xl"></i>
          <p>12000</p>
          <h2 className='mt-[-6px] text-center'>{t("Talabalar soni")}</h2>
        </span>

        <span
          data-aos='zoom-in'
          className='flex flex-col items-center justify-center gap-2'>
          <i class="fa-solid fa-house text-3xl"></i>
          <p>4</p>
          <h2 className='mt-[-6px] text-center'>{t("Kampuslar soni")}</h2>
        </span>

        <span
          data-aos='zoom-in'
          className='flex flex-col items-center justify-center gap-2'>
          <i class="fa-solid fa-building-columns text-3xl"></i>
          <p>6</p>
          <h2 className='mt-[-6px] text-center'>{t("Fakultet soni")}</h2>
        </span>
      </section>

      <div className="main-content max-w-7xl w-full px-8 m-auto text-[#004D91]">

        <section className="flex flex-col items-start mt-8 mb-4">
          <div
            data-aos="fade-right"
            className="bg-[#004D91] h-[2px] w-[100%] m-auto rounded-lg"></div>
          <h1
            data-aos="fade-right"
            className="text-2xl text-center md:text-3xl font-semibold uppercase">{t("Istanbul Haliç University – Zamonaviy Ta’lim Maskani")}</h1>
        </section>

        <section className='flex flex-col gap-6 justify-between'>
          <h1
            data-aos="fade-right"
            className="font-medium lg:max-w-[700px] lg:text-[20px]">
            {t("Turkiyaning yetakchi xususiy universitetlaridan biri,")} <strong>{t("muhandislik, sog‘liqni saqlash, san’at va biznes")}</strong> {t("sohalarida yuqori sifatli ta’lim berishi bilan mashhur. 1998-yilda tashkil etilgan bu universitet amaliy bilim va innovatsion tadqiqotlarga asoslangan ta’lim tizimi bilan ajralib turadi.")}
            <br />
            <br />
            {t("Haliç Universiteti zamonaviy laboratoriyalar, kuchli professor-o‘qituvchilar jamoasi va xalqaro hamkorlik tufayli Turkiyaning eng yaxshi oliy ta’lim muassasalaridan biri sifatida e’tirof etilgan. Istanbulning markazida joylashganligi esa talabalar uchun katta afzallik hisoblanadi.")}
          </h1>
          <img
            data-aos="zoom-in"
            className='w-full h-full m-auto max-h-[350px] max-w-[400px] md:max-h-[350px] min-[900px]:max-w-[200px] rounded-2xl lg:mr-20 shadow-2xl'
            src={halic2}>
          </img>
        </section>

        <section className="flex flex-col items-start mt-8">
          <div
            data-aos="fade-right"
            className="bg-[#004D91] h-[2px] w-[100%] m-auto rounded-lg"></div>
          <h1
            data-aos="fade-right"
            className="text-2xl text-center md:text-3xl font-semibold uppercase">{t("Nima Uchun Aynan Haliç Universiteti?")}</h1>
        </section>

        <section className='flex flex-col gap-2 justify-between mt-4'>
          <h1
            data-aos="fade-right"
            className="leading-relaxed font-medium lg:max-w-[700px] lg:text-[20px]">
            <strong>{t("Nazariy va amaliy bilim uyg‘unligi:")}</strong>
            <br />
            {t("– Talabalar dars jarayonida haqiqiy loyihalarda ishtirok etishadi.")}
          </h1>
          <h1
            data-aos="fade-right"
            className="leading-relaxed font-medium lg:max-w-[700px] lg:text-[20px]">
            <strong>{t("Istanbulning markazida joylashgan:")}</strong>
            <br />
            {t("– Talabalar uchun qulay joylashuv, biznes va madaniy markazlarga yaqinlik.")}
          </h1>
          <h1
            data-aos="fade-right"
            className="leading-relaxed font-medium lg:max-w-[700px] lg:text-[20px]">
            <strong>{t("Yuqori darajadagi professor-o‘qituvchilar tarkibi:")}</strong>
            <br />
            {t("– Universitetning o‘qituvchilari orasida yetakchi tadqiqotchilar va mutaxassislar bor.")}
          </h1>
          <h1
            data-aos="fade-right"
            className="leading-relaxed font-medium lg:max-w-[700px] lg:text-[20px]">
            <strong>{t("Texnologik jihatdan rivojlangan kampus:")}</strong>
            <br />
            {t("– Talabalar ilmiy izlanishlar va startaplar bilan shug‘ullanish imkoniyatiga ega.")}
          </h1>
          <h1
            data-aos="fade-right"
            className="leading-relaxed font-medium lg:max-w-[700px] lg:text-[20px]">
            <strong>{t("Ishga joylashish imkoniyatlari yuqori:")}</strong>
            <br />
            {t("– Universitet ko‘plab yirik kompaniyalar bilan hamkorlik qiladi, bu esa bitiruvchilarning tez ish topishiga yordam beradi.")}
          </h1>
        </section>

        <section className="flex flex-col mt-8">
          <div
            data-aos="fade-right"
            className="bg-[#004D91] h-[2px] w-[100%] m-auto rounded-lg"></div>
          <h1
            data-aos="fade-right"
            className="text-2xl text-center md:text-3xl font-semibold uppercase">{t("Fakultetlar va Yo‘nalishlar")}</h1>
        </section>

        <section className='flex flex-col gap-6 items-center justify-between'>

          <span
            data-aos="fade-right"
            className="mt-4 leading-relaxed flex flex-col gap-3 font-medium lg:max-w-[700px] lg:text-[20px]">

            <h1 className='font-bold text-center'>
              {t("Haliç Universiteti turli sohalardagi ta’lim dasturlari bilan talabalar uchun keng imkoniyatlar taqdim etadi:")}
            </h1>

            <span className='specify w-full h-full flex flex-col gap-4 border-2 border-[#004D91] rounded-3xl p-4 mb-3'>

              <span className='flex flex-col gap-5 min-[500px]:grid min-[500px]:grid-cols-2 min-[500px]:gap-6'>

                <span className='mt-[-8px] flex flex-col'>
                  <h1 className='font-bold'>
                    {t("1. Muhandislik va Arxitektura Fakulteti")}
                  </h1>
                  <h1>
                    {t("• Kompyuter muhandisligi")}
                  </h1>
                  <h1>
                    {t("• Elektronika va telekommunikatsiya muhandisligi")}
                  </h1>
                  <h1>
                    {t("• Sun’iy intellekt va ma’lumotlar fanlari")}
                  </h1>
                  <h1>
                    {t("• Qurilish muhandisligi")}
                  </h1>
                  <h1>
                    {t("• Arxitektura")}
                  </h1>
                </span>

                <span className='mt-[-8px] flex flex-col'>
                  <h1 className='font-bold'>
                    {t("2. Iqtisodiyot va Menejment Fakulteti")}
                  </h1>
                  <h1>
                    {t("• Xalqaro biznes boshqaruvi")}
                  </h1>
                  <h1>
                    {t("• Bank ishi va moliya")}
                  </h1>
                  <h1>
                    {t("• Marketing va innovatsiya")}
                  </h1>
                  <h1>
                    {t("• Tadbirkorlik va startap menejmenti")}
                  </h1>
                </span>

                <span className='mt-[-8px] flex flex-col'>
                  <h1 className='font-bold'>
                    {t("3. Ijtimoiy Fanlar Fakulteti")}
                  </h1>
                  <h1>
                    {t("• Xalqaro munosabatlar")}
                  </h1>
                  <h1>
                    {t("• Psixologiya")}
                  </h1>
                  <h1>
                    {t("• Media va kommunikatsiya")}
                  </h1>
                  <h1>
                    {t("• Tarix va sotsiologiya")}
                  </h1>
                </span>

                <span className='mt-[-8px] flex flex-col'>
                  <h1 className='font-bold'>
                    {t("4. Sog‘liqni Saqlash Fakulteti")}
                  </h1>
                  <h1>
                    {t("• Hamshiralik ishi")}
                  </h1>
                  <h1>
                    {t("• Fizioterapiya va reabilitatsiya")}
                  </h1>
                  <h1>
                    {t("• Diagnostika va radiologiya")}
                  </h1>
                  <h1>
                    {t("• Tibbiy laboratoriya texnologiyalari")}
                  </h1>
                </span>

                <span className='mt-[-8px] flex flex-col'>
                  <h1 className='font-bold'>
                    {t("5. San’at va Dizayn Fakulteti")}
                  </h1>
                  <h1>
                    {t("• Moda dizayni")}
                  </h1>
                  <h1>
                    {t("• Vizual san’at va grafika dizayni")}
                  </h1>
                  <h1>
                    {t("• Ichki dizayn")}
                  </h1>
                </span>

                <span className='mt-[-8px] flex flex-col'>
                  <h1 className='font-bold'>
                    {t("6. Sport Fanlari Fakulteti")}
                  </h1>
                  <h1>
                    {t("• Jismoniy tarbiya va sport murabbiyligi")}
                  </h1>
                  <h1>
                    {t("• Sport menejmenti")}
                  </h1>
                </span>

              </span>

            </span>

          </span>

        </section>

        <section className="flex flex-col items-start mt-8">
          <div
            data-aos="fade-right"
            className="bg-[#004D91] h-[2px] w-[100%] m-auto rounded-lg"></div>
          <h1
            data-aos="fade-right"
            className="text-2xl text-center md:text-3xl font-semibold uppercase">{t("Kampus Hayoti va Talabalar Uchun Sharoitlar:")}</h1>
        </section>

        <section className='flex flex-col gap-4 justify-between'>
          <h1
            data-aos="fade-right"
            className="font-medium lg:max-w-[700px] lg:text-[20px]">
            <strong>{t("Zamonaviy kutubxona va ilmiy markazlar")}</strong> {t("– Talabalarga ilmiy resurslar va tadqiqot imkoniyatlari taqdim etiladi.")}
          </h1>
          <h1
            data-aos="fade-right"
            className="font-medium lg:max-w-[700px] lg:text-[20px]">
            <strong>{t("Yotoqxonalar")}</strong> {t("– Talabalar uchun xavfsiz va qulay yashash sharoitlari yaratilgan.")}
          </h1>
          <h1
            data-aos="fade-right"
            className="font-medium lg:max-w-[700px] lg:text-[20px]">
            <strong>{t("Sport majmualari")}</strong> {t("– Basketbol, futbol, suzish va boshqa sport turlariga sharoitlar mavjud.")}
          </h1>
          <h1
            data-aos="fade-right"
            className="font-medium lg:max-w-[700px] lg:text-[20px]">
            <strong>{t("Startup va innovatsiya markazlari")}</strong> {t("– Talabalar o‘z biznes loyihalarini boshlash uchun qo‘llab-quvvatlanadi")}
          </h1>
          <h1
            data-aos="fade-right"
            className="font-medium lg:max-w-[700px] lg:text-[20px]">
            <strong>{t("Keng madaniy hayot va talaba klublari")}</strong> {t("– Turli sohalarga oid klublar va tadbirlar faoliyat yuritadi.")}
          </h1>
        </section>

        <img
          data-aos="zoom-in"
          className='w-full h-full m-auto my-6 max-h-[250px] max-w-[350px] md:max-h-[350px] min-[900px]:max-w-[200px] rounded-2xl lg:mr-20 shadow-2xl'
          src={halic3}>
        </img>

        <span
          data-aos="zoom-in"
          className='specify2 w-full h-full flex flex-col gap-4 border-2 border-[#004D91] rounded-3xl mt-4 p-4 mb-3'>
          <h1 className='font-bold text-center'>
            {t("E’tibor bering! Future Study orqali siz:")}
          </h1>

          <span className='flex flex-col gap-5'>

            <span className='mt-[-8px] font-medium'>
              <h1 className='mb-3'>
                {t("Hech qanday imtihon topshirmasdan o‘qishga kira olasiz!")}
              </h1>
              <h1>
                {t("Hech qanday til sertifikatlari talab qilinmaydi! (IELTS yoki TOEFL kerak emas)")}
              </h1>
              <h1>
                {t("Firma to‘lovisiz qabul qilinasiz!")}
              </h1>
              <h1>
                {t("Va eng muhimi – 71% chegirmani qo‘lga kiritish imkoniyatiga egasiz!")}
              </h1>
            </span>

          </span>

        </span>

      </div>

    </>
  )
}

export default Halic


