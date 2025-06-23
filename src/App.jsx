import lotso1 from "./assets/lotso1.png";
import lotso2 from "./assets/lotso2.png";
import happySong from "./assets/happy.mp3"; // <-- file musik kamu

function App() {
  return (
    <div className="relative min-h-screen bg-pink-100 flex flex-col justify-center items-center text-center p-6 overflow-hidden">
      {/* Musik latar */}
      <audio src={happySong} autoPlay loop hidden />

      {/* Lotso kiri */}
      <img
        src={lotso2}
        alt="Lotso"
        className="w-36 h-36 absolute top-8 left-1 md:left-2 animate-bounce-slow"
      />

      {/* Lotso kanan */}
      <img
        src={lotso1}
        alt="Lotso"
        className="w-48 h-48 absolute bottom-8 right-1 md:right-2 animate-bounce-slow delay-1000"
      />

      {/* Ucapan */}
      <h1 className="text-4xl md:text-5xl font-bold text-pink-600 drop-shadow">
        Happy Birthday, Sayangku Ayninda!
      </h1>
      <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-md">
        Today is special day, karena hari ini adalah hari lahirnya orang yang
        paling aku sayang. 🥰
      </p>
      <p className="mt-4 text-base text-gray-600">(klik untuk lanjut ya...)</p>
    </div>
  );
}

export default App;
