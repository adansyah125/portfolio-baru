import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

export default function Projects() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section id="projects" className="py-20 bg-[#3B82F6] border-b-4 border-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <h2 className="text-3xl md:text-5xl font-black bg-yellow-400 px-8 py-4 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] uppercase">
            Proyek Saya
          </h2>

          <div className="flex gap-4">
            <button 
              ref={prevRef}
              className="bg-yellow-400 p-3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] active:bg-white transition-all z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 stroke-[4px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              ref={nextRef}
              className="bg-yellow-400 p-3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] active:bg-white transition-all z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 stroke-[4px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow]}
          effect={'coverflow'} // Menambahkan efek kedalaman
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          speed={600} // Kecepatan animasi dalam milidetik
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          navigation={true}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 40 },
          }}
          className="!pb-20"
        >
          {projects.map((item, index) => (
            <SwiperSlide key={index} className="transition-transform duration-300">
              {({ isActive }) => (
                <div className={`${isActive ? 'scale-105' : 'scale-90 opacity-60'} transition-all duration-500 h-full`}>
                   <ProjectCard project={item} />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}