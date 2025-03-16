import Aos from "aos";
import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import birunibg from "../../images/birunibg.jpg";
import biruni2 from "../../images/biruni2.jfif";
import { useTranslation } from 'react-i18next'

const Biruni = () => {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = birunibg;
    img.onload = () => {
      setIsImageLoaded(true);
    };
  }, []);

  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleScroll = (e) => {
    e.preventDefault();
    const formElement = document.getElementById("form");

    if (formElement) {
      const yOffset = -180;
      const y =
        formElement.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { t, i18n } = useTranslation();
  const ChangeLng = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
  };
  return (
    <>
      <div
        className="hero w-[100vw] h-[60vh] flex justify-evenly flex-col items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.623), rgba(0, 0, 0, 0.712)), url(${birunibg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="main-text w-full max-w-[400px] text-xl md:max-w-[700px] md:text-3xl lg:max-w-[1000px] lg:text-4xl lg:px-5 lg:py-4 xl:text-5xl text-center text-white uppercase font-semibold px-4 py-3 rounded-2xl">
            {t("Istanbul Biruni universiteti" )}
        </h1>
        <a
          onClick={handleScroll}
          data-aos="zoom-out-up"
          href="#form"
          className="text-white bg-[#004D91] w-[240px] h-12 rounded-xl flex items-center justify-center "
        >
          <h4 className="text-[18px] mr-2">{t("Hozir murojaat qiling")}</h4>
          <i className="fa-solid fa-down-long text-[18px] mt-1.5"></i>
        </a>
      </div>

      {!isImageLoaded && (
        <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
      )}

      <section className="w-[90%] m-auto h-auto bg-[#004D91] mt-4 rounded-2xl text-white grid grid-cols-2 gap-2 p-4 max-[350px]:flex max-[350px]:flex-col max-[350px]:gap-3 min-[500px]:grid-cols-3 min-[500px]:gap-4">
        <span
          data-aos="zoom-in"
          className="flex flex-col items-center justify-center gap-2"
        >
          <i class="fa-solid fa-graduation-cap text-3xl"></i>
          <p>{t("10000")}</p>
          <h2 className="mt-[-6px] text-center">{t("Talabalar soni")}</h2>
        </span>

        <span
          data-aos="zoom-in"
          className="flex flex-col items-center justify-center gap-2"
        >
          <i class="fa-solid fa-house text-3xl"></i>
          <p>{t("1")}</p>
          <h2 className="mt-[-6px] text-center">{t("Kampuslar soni")}</h2>
        </span>

        <span
          data-aos="zoom-in"
          className="flex flex-col items-center justify-center gap-2"
        >
          <i class="fa-solid fa-building-columns text-3xl"></i>
          <p>{t("6")}</p>
          <h2 className="mt-[-6px] text-center">{t("Fakultet soni")}</h2>
        </span>
      </section>

      <div className="main-content max-w-7xl w-full px-8 m-auto text-[#004D91]">
        <section className="flex flex-col items-start mt-8 mb-4">
          <div
            data-aos="fade-right"
            className="bg-[#004D91] h-[2px] w-[100%] m-auto rounded-lg"
          ></div>
          <h1
            data-aos="fade-right"
            className="text-2xl text-center md:text-3xl font-semibold uppercase"
          >
            {t("Istanbul Biruni University – Zamonaviy Ta’lim Maskani")}
          </h1>
        </section>

        <section className="flex flex-col gap-6 justify-between">
          <h1
            data-aos="fade-right"
            className="font-medium lg:max-w-[700px] lg:text-[20px]"
          >
            {t(
              "Turkiyaning eng nufuzli va innovatsion oliy ta’lim muassasalaridan biri, ayniqsa"
            )}{" "}
            <strong>{t("tibbiyot, sog‘liqni saqlash va texnologiya")}</strong>{" "}
            {t(
              "yo‘nalishlarida yetakchi o‘rin tutadi. Universitet 2014-yilda tashkil etilgan bo‘lib, qisqa vaqt ichida ilmiy izlanishlar va yuqori sifatli ta’lim sohasi bo‘yicha kuchli natijalarga erishdi."
            )}
            <br />
            <br />
            {t(
              "Biruni Universiteti zamonaviy infratuzilma, ilg‘or laboratoriyalar va o‘z klinikalari bilan mashhur bo‘lib, talabalarga amaliy tajriba olish imkoniyatini taqdim etadi. Bu esa universitet bitiruvchilarining ishga joylashish imkoniyatlarini keskin oshiradi."
            )}
          </h1>
          <img
            data-aos="zoom-in"
            className="w-full h-full m-auto max-h-[350px] max-w-[350px] md:max-h-[350px] min-[900px]:max-w-[200px] rounded-2xl lg:mr-20 shadow-2xl"
            src={biruni2}
          ></img>
        </section>

        <section className="flex flex-col items-start mt-8">
          <div
            data-aos="fade-right"
            className="bg-[#004D91] h-[2px] w-[100%] m-auto rounded-lg"
          ></div>
          <h1
            data-aos="fade-right"
            className="text-2xl text-center md:text-3xl font-semibold uppercase"
          >
            {t("Nima Uchun Aynan Biruni Universiteti?")}
          </h1>
        </section>

        <section className="flex flex-col gap-2 justify-between mt-4">
          <h1
            data-aos="fade-right"
            className="leading-relaxed font-medium lg:max-w-[700px] lg:text-[20px]"
          >
            <strong>
              {t("Turkiyaning eng yaxshi tibbiyot universitetlaridan biri:")}
            </strong>
            <br />
            {t(
              "– Universitet sog‘liqni saqlash sohasida yetakchi oliy ta’lim muassasalari qatoriga kiradi."
            )}
          </h1>
          <h1
            data-aos="fade-right"
            className="leading-relaxed font-medium lg:max-w-[700px] lg:text-[20px]"
          >
            <strong>
              {t("Zamonaviy laboratoriyalar va o‘quv sharoitlari:")}
            </strong>
            <br />
            {t(
              "– Talabalar eng yangi tibbiy texnologiyalar bilan jihozlangan klinikalarda o‘qiydilar."
            )}
          </h1>
          <h1
            data-aos="fade-right"
            className="leading-relaxed font-medium lg:max-w-[700px] lg:text-[20px]"
          >
            <strong>{t("Amaliyot va kasbiy rivojlanish:")}</strong>
            <br />
            {t(
              "– Talabalar Biruni Universitetiga qarashli shifoxonalarda real tajriba orttiradilar."
            )}
          </h1>
          <h1
            data-aos="fade-right"
            className="leading-relaxed font-medium lg:max-w-[700px] lg:text-[20px]"
          >
            <strong>{t("Xalqaro darajada tan olingan diploma:")}</strong>
            <br />
            {t(
              "– Universitet bitiruvchilari Turkiya va xalqaro miqyosda ishlash imkoniyatiga ega bo‘ladilar."
            )}
          </h1>
          <h1
            data-aos="fade-right"
            className="leading-relaxed font-medium lg:max-w-[700px] lg:text-[20px]"
          >
            <strong>{t("Ishga joylashish darajasi yuqori:")}</strong>
            <br />
            {t(
              "– Tibbiyot va sog‘liqni saqlash sohalari bo‘yicha bitiruvchilar ish topishda qiyinchilikka duch kelmaydilar."
            )}
          </h1>
        </section>

        <section className="flex flex-col mt-8">
          <div
            data-aos="fade-right"
            className="bg-[#004D91] h-[2px] w-[100%] m-auto rounded-lg"
          ></div>
          <h1
            data-aos="fade-right"
            className="text-2xl text-center md:text-3xl font-semibold uppercase"
          >
            {t("Fakultetlar va Yo‘nalishlar")}
          </h1>
        </section>

        <section className="flex flex-col gap-6 items-center justify-between">
          <span
            data-aos="fade-right"
            className="mt-4 leading-relaxed flex flex-col gap-3 font-medium lg:max-w-[700px] lg:text-[20px]"
          >
            <h1 className="font-bold text-center">
              {t(
                "Istanbul Biruni Universiteti tibbiyot va sog‘liqni saqlash sohalariga ixtisoslashgan universitet bo‘lib, quyidagi fakultet va yo‘nalishlarni taklif etadi:"
              )}
            </h1>

            <span className="specify w-full h-full flex flex-col gap-4 border-2 border-[#004D91] rounded-3xl p-4 mb-3">
              <span className="flex flex-col gap-5 min-[500px]:grid min-[500px]:grid-cols-2 min-[500px]:gap-6">
                <span className="mt-[-8px] flex flex-col">
                  <h1 className="font-bold">{t("1. Tibbiyot Fakulteti")}</h1>
                  <h1>{t("• Umumiy tibbiyot")}</h1>
                  <h1>{t("• Stomatologiya")}</h1>
                  <h1>{t("• Farmatsiya")}</h1>
                  <h1>{t("• Jamoat salomatligi")}</h1>
                  <h1>{t("• Tibbiyot biotexnologiyasi")}</h1>
                </span>

                <span className="mt-[-8px] flex flex-col">
                  <h1 className="font-bold">
                    {t("2. Sog‘liqni Saqlash Fanlari Fakulteti")}
                  </h1>
                  <h1>{t("• Hamshiralik ishi")}</h1>
                  <h1>{t("• Fizioterapiya va reabilitatsiya")}</h1>
                  <h1>{t("• Ortopedik protez va ortoz")}</h1>
                  <h1>{t("• Diagnostika va radiologiya")}</h1>
                </span>

                <span className="mt-[-8px] flex flex-col">
                  <h1 className="font-bold">{t("3. Farmatsiya Fakulteti")}</h1>
                  <h1>{t("• Klinik farmatsiya")}</h1>
                  <h1>{t("• Biotibbiyot va farmatsevtika ilmi")}</h1>
                  <h1>{t("• Kosmetologiya va farmakologiya")}</h1>
                </span>

                <span className="mt-[-8px] flex flex-col">
                  <h1 className="font-bold">
                    {t("4. Muhandislik va Tabiiy Fanlar Fakulteti")}
                  </h1>
                  <h1>{t("• Biotibbiyot muhandisligi")}</h1>
                  <h1>{t("• Kompyuter muhandisligi")}</h1>
                  <h1>
                    {t(
                      "• Sun’iy intellekt va tibbiyot axborot texnologiyalari"
                    )}
                  </h1>
                </span>

                <span className="mt-[-8px] flex flex-col">
                  <h1 className="font-bold">{t("5. Ta’lim Fakulteti")}</h1>
                  <h1>{t("• Maxsus pedagogika")}</h1>
                  <h1>{t("• Logopediya va nutq terapiyasi")}</h1>
                  <h1>{t("• Psixologiya")}</h1>
                </span>

                <span className="mt-[-8px] flex flex-col">
                  <h1 className="font-bold">
                    {t("6. Ijtimoiy Fanlar Fakulteti")}
                  </h1>
                  <h1>{t("• Psixologiya")}</h1>
                  <h1>{t("• Xalqaro munosabatlar")}</h1>
                  <h1>{t("• Sotsiologiya")}</h1>
                </span>
              </span>
            </span>
          </span>
        </section>

        <section className="flex flex-col items-start mt-8">
          <div
            data-aos="fade-right"
            className="bg-[#004D91] h-[2px] w-[100%] m-auto rounded-lg"
          ></div>
          <h1
            data-aos="fade-right"
            className="text-2xl text-center md:text-3xl font-semibold uppercase"
          >
            {t("Kampus Hayoti va Talabalar Uchun Sharoitlar:")}
          </h1>
        </section>

        <section className="flex flex-col gap-4 justify-between">
          <h1
            data-aos="fade-right"
            className="font-medium lg:max-w-[700px] lg:text-[20px] mt-4"
          >
            <strong>{t("Eng zamonaviy laboratoriyalar")}</strong>{" "}
            {t(
              "– Talabalar amaliy mashg‘ulotlarda eng yangi texnologiyalar bilan ishlash imkoniyatiga ega."
            )}
          </h1>
          <h1
            data-aos="fade-right"
            className="font-medium lg:max-w-[700px] lg:text-[20px]"
          >
            <strong>{t("Universitet klinikasi")}</strong>{" "}
            {t(
              "– Tibbiyot va sog‘liqni saqlash bo‘yicha o‘qiyotgan talabalar universitet klinikalarida real sharoitda ishlashadi."
            )}
          </h1>
          <h1
            data-aos="fade-right"
            className="font-medium lg:max-w-[700px] lg:text-[20px]"
          >
            <strong>{t("Kutubxona va ilmiy tadqiqot markazlari")}</strong>{" "}
            {t(
              "– Talabalarga zamonaviy adabiyotlar va ilmiy bazalar taqdim etiladi."
            )}
          </h1>
          <h1
            data-aos="fade-right"
            className="font-medium lg:max-w-[700px] lg:text-[20px]"
          >
            <strong>{t("Yotoqxonalar")}</strong>{" "}
            {t("– Xavfsiz va qulay yashash sharoitlari.")}
          </h1>
          <h1
            data-aos="fade-right"
            className="font-medium lg:max-w-[700px] lg:text-[20px]"
          >
            <strong>{t("Sport majmualari")}</strong>{" "}
            {t(
              "– Jismoniy faollikni oshirish uchun sport zallari va ochiq maydonlar mavjud."
            )}
          </h1>
          <h1
            data-aos="fade-right"
            className="font-medium lg:max-w-[700px] lg:text-[20px]"
          >
            <strong>{t("Talaba klublari va madaniy tadbirlar")}</strong>{" "}
            {t(
              "– Talabalar o‘z qiziqishlariga mos klub va tashkilotlarga qo‘shilishlari mumkin."
            )}
          </h1>
        </section>

        <span
          data-aos="zoom-in"
          className="specify2 w-full h-full flex flex-col gap-4 border-2 border-[#004D91] rounded-3xl mt-4 p-4 mb-3"
        >
          <h1 className="font-bold text-center">
            {t("E’tibor bering! Future Study orqali siz:")}
          </h1>

          <span className="flex flex-col gap-5">
            <span className="mt-[-8px] font-medium">
              <h1 className="mb-3">
                {t("Hech qanday imtihon topshirmasdan o‘qishga kira olasiz!")}
              </h1>
              <h1>
                {t(
                  "Hech qanday til sertifikatlari talab qilinmaydi! (IELTS yoki TOEFL kerak emas)"
                )}
              </h1>
              <h1>{t("Firma to‘lovisiz qabul qilinasiz!")}</h1>
              <h1>
                {t(
                  "Va eng muhimi – 71% chegirmani qo‘lga kiritish imkoniyatiga egasiz!"
                )}
              </h1>
            </span>
          </span>
        </span>
      </div>
    </>
  );
};

export default Biruni;
