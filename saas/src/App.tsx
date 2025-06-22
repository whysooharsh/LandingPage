import { ChevronDown } from 'lucide-react';
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
export default function App() {

  const [scrolled, setscrolled] = useState(false);
  const scroll = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scroll,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.7]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(() => {
    const handleScroll = () => {
      setscrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className="min-h-screen bg-gradient-to-b from-[#efb1ae] via-[#FED5C7] to-[#FFE4C6] overflow-hidden relative  ">
      {/* navbar */}


      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-100 ${scrolled ? "bg-white/30 backdrop-blur-md shadow-md" : "bg-transparent"}`}>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='flex justify-between items-center h-16 '>
            <div className='flex items-center space-x-2'>
              <img className='max-h-6 max-w-10' src='https://logowik.com/content/uploads/images/hume-ai1720994953.logowik.com.webp' alt=' '>
              </img>
              <span className="text-base font-mono font-sm text-black">bruh.</span>
            </div>
            <div className='hidden md:flex items-center space-x-6 '>

              <div className="relative group">
                <button className="flex items-center text-gray-600 hover:text-black transition-colors font-sans text-xs uppercase">
                  PRODUCTS
                  <ChevronDown className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>
              </div>

              <div className="relative group">
                <button className="flex items-center text-gray-600 hover:text-black transition-colors font-sans text-xs uppercase">
                  DEVELOPERS
                  <ChevronDown className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>
              </div>

              <a href="#" className="text-gray-600 hover:text-black transition-colors font-sans text-xs  uppercase">
                PRICING
              </a>

              <div className="relative group">
                <button className="flex items-center text-gray-600 hover:text-black transition-colors font-sans text-xs uppercase">
                  RESOURCES
                  <ChevronDown className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>
              </div>
            </div>

            <div className="hideen md:flex items-center">
              <button className="bg-black text-white px-2 py-1 rounded-full font-sans text-xs uppercase hover:bg-gray-800 transition-colors">
                GO TO APP
              </button>
            </div>
          </div>
        </div>

      </nav>



      <div ref={scroll} className='relative z-10 pt-20 px-6 pb-16 max-w-4xl mx-auto'>
        <div className='text-center mb-12'>
          <h1 className='text-3xl font-sm font-sans md:text-4xl mb-6'>
            some random ass description .....
          </h1>
          <p className='font-mono text-sm font-normal max-w-2xl text-gray-900 mx-auto'>deisgn taken from humeAI</p>
        </div>


        {/* video might be better suited but depends if I use this in future */}

        <motion.div style={{ scale, y }} ref={scroll} className='bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg'>
          <div className='mb-2'>
          </div>
          <div className='relative w-full pb-[56%] h-0 overflow-hidden rounded-xl max-w-6xl'>
            <iframe className='absolute top-0 left-0 w-full h-full' src=' https://www.youtube.com/embed/2K2R8dmFhZY?controls=0&modestbranding=1&rel=0&showinfo=0' allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
            </iframe>
          </div>



        </motion.div>

        <div className="text-center mt-10 animate-bounce text-gray-600 font-mono">
          ↓ Scroll to explore
        </div>

      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#FFE4C6] to-transparent pointer-events-none z-20" />

    </div>
  )
};
