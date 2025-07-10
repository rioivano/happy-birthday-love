import { useRef, useState, useEffect } from "react";
import confetti from "canvas-confetti";
import AOS from "aos";
import "aos/dist/aos.css";
import lotso1 from "./assets/lotso1.png";
import lotso2 from "./assets/lotso2.png";
import happySong from "./assets/happy.mp3";
import tentang1 from "./assets/tentang-1.jpg";
import tentang2 from "./assets/tentang-2.jpg";
import tentang3 from "./assets/tentang-3.jpg";
import tentang4 from "./assets/tentang-4.jpg";
import tentang5 from "./assets/tentang-5.jpg";
import ourPhoto from "./assets/foto-ku-dan-dia-awal.jpg";

const images = [tentang1, tentang2, tentang3, tentang4, tentang5];

function App() {
  const aboutRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(false);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); // start fade out
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setFade(false); // fade in
      }, 300); // transition duration
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    confetti({
      particleCount: 250,
      spread: 100,
      origin: { y: 0.6 },
    });
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="sprinkles fixed inset-0 z-0 pointer-events-none"></div>
      <div className="relative z-10 bg-pink-100">
        {/* Section 1 */}
        <div className="relative min-h-screen flex flex-col justify-center items-center text-center p-6 overflow-hidden">
          <audio src={happySong} autoPlay loop hidden />

          <img
            src={lotso2}
            alt="Lotso"
            className="w-36 h-36 absolute top-8 left-1 md:left-2 animate-bounce-slow"
          />
          <img
            src={lotso1}
            alt="Lotso"
            className="w-48 h-48 absolute bottom-8 right-1 md:right-2 animate-bounce-slow delay-1000"
          />

          <h1 className="text-4xl md:text-5xl font-bold text-pink-600 drop-shadow">
            Happy Birthday, Sayangku Ayninda!
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-md">
            Today is special day, karena hari ini adalah hari lahirnya orang
            yang paling aku sayang. 🥰
          </p>
          <p
            className="mt-4 text-base text-gray-600 cursor-pointer hover:underline"
            onClick={scrollToAbout}>
            (click here....)
          </p>
        </div>

        {/* Section 2 */}
        <section
          ref={aboutRef}
          className="min-h-screen flex flex-col justify-center items-center px-6 py-12 bg-white">
          <h2
            className="text-3xl md:text-4xl font-bold text-pink-600 mb-6 text-center"
            data-aos="fade-in">
            About her
          </h2>

          {/* Carousel */}
          <div className="relative w-full max-w-xs mb-4" data-aos="fade-in">
            <img
              src={images[current]}
              alt={`Tentang Ayninda ${current + 1}`}
              className={`rounded-xl shadow-lg w-full h-auto aspect-square object-cover transition-all duration-500 ${
                fade ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"
              }`}
            />
          </div>

          {/* Bullet Navigation */}
          <div
            className="flex justify-center space-x-2 mt-2"
            data-aos="fade-in">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-4 h-4 rounded-full ${
                  current === idx ? "bg-pink-600" : "bg-pink-300"
                }`}
              />
            ))}
          </div>

          <div className="max-w-2xl pt-5 text-pink-500 text-lg leading-relaxed space-y-4 mb-10">
            <p data-aos="fade-up">
              Dia adalah manusia yang paling cantik dan manis, mandiri,
              ambisius, dan sangat tulus dalam mencintai seseorang termasuk
              diriku sendiri🥰.
            </p>
            <p data-aos="fade-up">
              Hal yang paling aku suka darinya adalah ketulusan dia dalam
              menerima aku dalam kondisi apapun. Aku harap dia masih selalu
              mengerti kondisiku, entah saat ini ataupun seterusnya..
            </p>
            <p data-aos="fade-up">
              Aku berharap bisa terus bersama dengannya hingga aku tua nanti,
              dan aku pun berharap dia bisa diberi kesabaran dalam menghadapi
              keegoisanku dan ketidakpedulian aku kepadanya selama ini. dan satu
              hal yang harus dia tau. Bahwa dia tidak selalu sendiri, masih ada
              aku yang menerima segala kekurangan nya🤗💕.
            </p>
          </div>
        </section>

        {/* Section 3: Surat Terbuka */}
        <section className="min-h-screen flex flex-col justify-center items-center px-6 py-16 bg-pink-50">
          <h2
            className="text-3xl md:text-4xl font-bold text-pink-700 mb-6 text-center"
            data-aos="fade-up">
            💕A text & letter for her💕
          </h2>
          <div
            className="max-w-2xl text-gray-700 text-lg leading-relaxed  space-y-5 bg-white p-6 rounded-xl shadow-md"
            data-aos="fade-in">
            <p>
              Ayang, aku tahu mungkin aku bukan orang yang sempurna, tapi aku
              selalu ingin belajar menjadi yang terbaik untuk kamu.
            </p>
            <p>
              Terima kasih sudah kembali hadir di hidup aku, setelah semua waktu
              yang udah lewat. Aku percaya, ini bukan kebetulan dan adalah
              bagian dari takdir yang belum selesai.
            </p>
            <p>
              kalau kamu izinin aku, aku ingin terus ada sama kamu... bukan cuma
              hari ini saat ulang tahunmu, tapi setiap hari buat kedepannya dan
              kondisinya. Dalam tawa, tangis, sibuk, atau lelah. aku ingin
              selalu ada di sisi kamu.
            </p>
            <p>
              Sekali lagi, aku ucapkan selamat ulang tahun yang ke 24,
              sayang!😘💕🤗🥰
            </p>
            <p className="text-right text-pink-500 font-semibold">
              - With Love, Rio Ivano❤️
            </p>
          </div>
        </section>

        <section data-aos="fade-up">
          <div className="max-w-2xl text-gray-700 text-lg leading-relaxed text-center text-pink-400 font-semibold space-y-5 bg-white p-6 rounded-xl shadow-md">
            <img
              src={ourPhoto}
              alt="foto ku dan dia"
              className="w-full h-auto object-cover"
            />
            <p>Bonus, foto pertama kali aku ngerangkul kamu (lagi)😋</p>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
