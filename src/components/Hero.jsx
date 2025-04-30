export default function Hero() {
  return (
    <div class="flex justify-between min-h-screen bg-[linear-gradient(to_right,_#4b37cf_0%,_#4b37cf_67%,_#c9f080_50%,_#c9f080_100%)] px-20 md:px-40 lg:px-80 py-16 ">
      <div className="grow-1 flex flex-col justify-center items-start text-left">
        <h1 class="text-5xl text-customLime font-bold">
          I am a Frontend Developer...
        </h1>
        <p class="text-white py-6">
          ...who likes to craft solid and scalable frontend products with great
          user experiences.
        </p>
        <div className="join gap-2">
          <button className="join-item btn btn-white text-customPurple mt-4">
            Github
          </button>
          <button className="join-item btn btn-white text-customPurple mt-4">
            LinkedIn
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          class="max-w-sm rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );
}
