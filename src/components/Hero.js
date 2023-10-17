export function Hero() {
  return (
    <div className="container p-2">
      <div className="grid lg:grid-cols-3 lg:grid-row-2 gap-8 ">
        <div className="relative lg:col-span-2 lg:row-start-3 lg:row-end-1">
          <img
            className="w-full h-full object-cover "
            src='/hero8.webp'
            alt="" />
        </div>
        <div className="relative">
          <img className="w-full " src=" /hero10.jpg" alt="" />
          <div className="absolute  top-50 -translate-y-20  text-white  bg-gradient-to-tr from-black">
            <p className="text-lg font-semibold  ">
              Vegetables are parts of plants that are consumed by humans or
              other animals as food.
            </p>
          </div>
        </div>
        <div className="">
          <img className="w-full" src="/hero7.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}
export default Hero;
