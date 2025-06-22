import { ChevronDown} from 'lucide-react';
import { useRef} from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
export default function App() {
 
  const scroll = useRef(null);

  const { scrollYProgress} = useScroll({
    target : scroll,
    offset : ["start start", "end start"]
});

  const scale = useTransform(scrollYProgress, [0,1],[1,0.7]);
  const y = useTransform(scrollYProgress, [0,1], [0,100]);
  const x = useTransform(scrollYProgress, [0,1], ["0%", "30%"]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#efb1ae] via-[#FED5C7] to-[#FFE4C6] overflow-hidden relative  ">
      {/* navbar */}
       

      <nav className="relative z-50 sticky">
        <div className='max-w-7xl mx-auto px-6'>
          <div className='flex justify-between items-center h-20 '>
            <div className='flex items-center space-x-2'>
              <img className='max-h-8 max-w-10' src='https://logowik.com/content/uploads/images/hume-ai1720994953.logowik.com.webp' alt=' '>
              </img>
              <span className="text-2xl font-mono font-sm text-black">bruh.</span>
            </div>
            <div className='hidden md:flex items-center space-x-6 '>

              <div className="relative group">
                <button className="flex items-center text-gray-600 hover:text-black transition-colors font-sans text-sm uppercase">
                  PRODUCTS
                  <ChevronDown className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>
              </div>

              <div className="relative group">
                <button className="flex items-center text-gray-600 hover:text-black transition-colors font-sans text-sm uppercase">
                  DEVELOPERS
                  <ChevronDown className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>
              </div>

              <a href="#" className="text-gray-600 hover:text-black transition-colors font-sans text-sm uppercase">
                PRICING
              </a>

              <div className="relative group">
                <button className="flex items-center text-gray-600 hover:text-black transition-colors font-sans text-sm uppercase">
                  RESOURCES
                  <ChevronDown className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>
              </div>
            </div>

            <div className="hideen md:flex items-center">
              <button className="bg-black text-white px-3 py-1 py-auto rounded-full font-sans text-sm uppercase hover:bg-gray-800 transition-colors">
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
              <iframe className='absolute top-0 left-0 w-full h-full' src=' https://www.youtube.com/embed/2K2R8dmFhZY?controls=0&modestbranding=1&rel=0&showinfo=0'  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
              </iframe>
            </div>

            {/* <div className='mb-4'>
              <div className="flex gap-4">
                <button className="flex items-baseline px-6 py-3 bg-gray-100 text-gray-700 rounded-full font-sans text-sm hover:bg-gray-200 transition-colors">
                  <Dice6 className="w-4 h-4 mr-2" />
                  RANDOMIZE
                </button>
                <button className="flex-1 bg-black max-w-28 text-white py-3 px-4 rounded-full font-sans text-sm uppercase hover:bg-gray-800 transition-colors">
                  GENERATE
                </button>
              </div>
            </div> */}
          

        </motion.div>


      </div>

              
    </div>
  )
};
 