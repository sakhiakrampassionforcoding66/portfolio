import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <div className="relative">
      {/* Render the Spline scene */}
      <Spline scene="https://prod.spline.design/76BIUm2vs9RzICYS/scene.splinecode" />

      {/* Render the text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
          Hi, I'm <span className="text-yellow-400">Sakhi Akram</span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl">
          I develop full-stack applications, user interfaces, and mind-blowing animations
        </p>
      </div>
    </div>
  );
}
