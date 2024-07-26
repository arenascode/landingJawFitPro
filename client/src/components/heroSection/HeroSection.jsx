import "./heroSection.scss";

export const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/assets/valueProposition/heroSection.webp"
          alt="Background Image"
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center mt-4">
        <span>Ejercitador de Mandibula</span>
        <h1 className="text-5xl font-bold leading-tight mb-4">JawFit-Pro</h1>
        <p className="text-lg text-gray-300 mb-8">
          Esculpe y define tu mandíbula para transformar tu atractivo.
        </p>
        <a
          href="#productRedirect"
          className=" text-white hover:bg-customBlue py-3 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg cta-btn"
        >
          Consiguelo
        </a>
      </div>
    </div>
  );
}