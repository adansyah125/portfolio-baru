import { FaLaravel, FaReact, } from "react-icons/fa";
export default function ProjectCard({ project }) {
  return (
    <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] h-full flex flex-col">
      {/* Gambar Proyek dengan efek browser top bar */}
      <div className="border-b-4 border-black relative">
        <div className="bg-gray-200 py-2 px-4 border-b-2 border-black flex gap-1">
          <div className="w-2 h-2 rounded-full bg-red-500 border border-black"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-500 border border-black"></div>
          <div className="w-2 h-2 rounded-full bg-green-500 border border-black"></div>
        </div>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-48 object-cover"
        />
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-2xl font-black uppercase mb-2">{project.title}</h3>
        <p className="font-bold text-sm text-gray-700 mb-4 flex-1">
          {project.description}
        </p>
        
        {/* Tech Stack Icons (Placeholder) */}
        <div className="flex gap-3 mb-6 grayscale hover:grayscale-0 transition-all">
           {/* Masukkan icon teknologi di sini */}
           <span className="text-2xl">
            <FaLaravel size={30} className="text-red-500" />
           </span>
           <span className="text-2xl">
            <FaReact size={30} className="text-blue-500" /> 
           </span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <a href={project.sourceCode} className="bg-yellow-400 text-center py-2 border-4 border-black font-black text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all">
            Source Code
          </a>
          <a href={project.demo} className="bg-[#00FF75] text-center py-2 border-4 border-black font-black text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all">
            Kunjungi
          </a>
        </div>
      </div>
    </div>
  );
}