function App() {
  return (
    <div className="bg-[url('https://ik.imagekit.io/ftlwjkwfe/assets_task_01jy2cdjaaf6qr1pb6fhp0jv89_1750279443_img_1.webp?updatedAt=1750281064114')] bg-cover bg-center h-[100vh] w-full relative">
       <svg
  className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
  viewBox="0 0 1920 1080"
  fill="none"
>
  <defs>
    <linearGradient id="fadeGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
      <stop offset="30%" stopColor="rgba(255, 255, 255, 0.3)" />
      <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
    </linearGradient>

    <linearGradient id="fadeGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
      <stop offset="25%" stopColor="rgba(255, 255, 255, 0.2)" />
      <stop offset="75%" stopColor="rgba(255, 255, 255, 0.4)" />
      <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
    </linearGradient>

    <linearGradient id="fadeGradient3" x1="50%" y1="0%" x2="50%" y2="100%">
      <stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
      <stop offset="40%" stopColor="rgba(255, 255, 255, 0.3)" />
      <stop offset="60%" stopColor="rgba(255, 255, 255, 0.5)" />
      <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
    </linearGradient>
  </defs>

 
  <circle
    cx="870"
    cy="500"
    r="590"
    stroke="url(#fadeGradient1)"
    strokeWidth="1.5"
    fill="none"
  />

  <circle
    cx="870"
    cy="500"
    r="400"
    stroke="url(#fadeGradient2)"
    strokeWidth="1.2"
    fill="none"
  />

  <circle
    cx="870"
    cy="500"
    r="200"
    stroke="url(#fadeGradient3)"
    strokeWidth="1"
    fill="none"
  />

  <circle
    cx="870"
    cy="500"
    r="80"
    stroke="rgba(255, 255, 255, 0.2)"
    strokeWidth="0.8"
    fill="none"
  />
</svg>

      <div className="h-[60px] w-full text-[13px] text-amber-50 z-10 flex items-center relative pt-4">
        <div className="flex justify-between items-center w-full px-8">
          <div className="flex items-center gap-x-2">
            <span className="font-semibold">EatherSight</span>
          </div>
          <div className="flex gap-x-4 items-center ml-96">
            <div>FEATURES.</div>
            <div>PRODUCT.</div>
            <div>TESTIMONIALS.</div>
            <div>HOW IT WORKS</div>
          </div>
          <div className="flex items-center gap-2 text-[11px]">
            <div className="px-4 py-3 rounded-4xl backdrop-blur-3xl bg-white/10 text-neutral-300">
              LOG IN
            </div>
            <div className="px-4 py-3 rounded-4xl backdrop-blur-3xl bg-neutral-800 text-white">
              GET STARTED
            </div>
          </div>
        </div>
      </div>

      
      <div className="flex items-start px-8 pt-60 h-[calc(100vh-60px)]">
        <div className="text-8xl flex flex-col">
          <span className="text-neutral-400">Where innovation</span>
          <span className="text-neutral-600">meets imagination</span>
        </div>
      </div>

     
      <div className="absolute bottom-6 right-40 max-w-2xl p-4 bg-black/5 text-gray-300 rounded-md">
        In a world driven by data and technology, we believe creativity is the missing piece that elevates ideas from functional to unforgettable.
        <span className="text-white font-bold">This platform is a space for visionaries and creators</span>—those who don't just accept what is but envision what could be.
      </div>
    </div>
  );
}

export default App;
