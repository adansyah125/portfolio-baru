import { 
  FaGithub, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs 
} from "react-icons/fa";

import { 
  SiVercel, 
  SiPostman, 
  SiTailwindcss 
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "GITHUB", icon: <FaGithub size={30} className="text-black" /> },
    { name: "VERCEL", icon: <SiVercel size={30} className="text-black" /> },
    { name: "POSTMAN", icon: <SiPostman size={30} className="text-orange-500" /> },
    { name: "HTML5", icon: <FaHtml5 size={30} className="text-orange-600" /> },
    { name: "CSS3", icon: <FaCss3Alt size={30} className="text-blue-500" /> },
    { name: "JS", icon: <FaJs size={30} className="text-yellow-400" /> },
    { name: "TAILWIND", icon: <SiTailwindcss size={30} className="text-cyan-400" /> },
  ];

  const doubleSkills = [...skills, ...skills];

  return (
    <section id="skills" className="py-20 bg-[#F3F3F3] border-b-4 border-black">
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="container mx-auto px-4 mb-12 flex justify-center">
        <h2 className="text-2xl md:text-4xl font-black bg-[#00FF75] px-8 py-3 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] uppercase">
          Keahlian
        </h2>
      </div>

      {/* Menambahkan px-10 sampai px-32 agar konten tidak menempel ke tepi layar */}
      <div className="relative w-full px-10 md:px-32 overflow-hidden">
        <div className="animate-marquee py-4">
          {doubleSkills.map((skill, i) => (
            <div 
              key={i} 
              // Ukuran card diperkecil (w-28 h-28 / md:w-36 md:h-36)
              className="mx-6 w-28 h-28 md:w-36 md:h-36 bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center justify-center gap-3 transition-all hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
              <div className="flex items-center justify-center">
                {skill.icon}
              </div>
              <span className="font-black text-[10px] md:text-xs uppercase tracking-tighter">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}