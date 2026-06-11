import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs,
  FaReact,
  FaNodeJs
} from "react-icons/fa";

import { 
  SiVercel, 
  SiTailwindcss,
  SiTypescript,
  SiPhp,
  SiNextdotjs,
  SiExpress,
  SiGo,
  SiLaravel,
  SiNetlify,
  SiFlutter,
  SiMysql,
  SiPostgresql,
  SiSupabase
} from "react-icons/si";

const categories = [
  {
    title: "Front End",
    bg: "bg-orange-200",
    items: [
      { name: "HTML5", icon: <FaHtml5 size={30} className="text-orange-600" /> },
      { name: "CSS3", icon: <FaCss3Alt size={30} className="text-blue-500" /> },
      { name: "JS", icon: <FaJs size={30} className="text-yellow-400" /> },
      { name: "TYPESCRIPT", icon: <SiTypescript size={30} className="text-blue-600" /> },
      { name: "REACT", icon: <FaReact size={30} className="text-cyan-500" /> },
      { name: "NEXT.JS", icon: <SiNextdotjs size={30} className="text-black" /> },
      { name: "TAILWIND", icon: <SiTailwindcss size={30} className="text-cyan-400" /> },
    ],
  },
  {
    title: "Backend",
    bg: "bg-blue-200",
    items: [
      { name: "PHP", icon: <SiPhp size={30} className="text-indigo-600" /> },
      { name: "NODE.JS", icon: <FaNodeJs size={30} className="text-green-600" /> },
      { name: "EXPRESS", icon: <SiExpress size={30} className="text-black" /> },
      { name: "GOLANG", icon: <SiGo size={30} className="text-cyan-600" /> },
      { name: "LARAVEL", icon: <SiLaravel size={30} className="text-red-600" /> },
    ],
  },
  {
    title: "Mobile App",
    bg: "bg-green-200",
    items: [
      { name: "FLUTTER", icon: <SiFlutter size={30} className="text-blue-400" /> },
    ],
  },
  {
    title: "Cloud",
    bg: "bg-purple-200",
    items: [
      { name: "VERCEL", icon: <SiVercel size={30} className="text-black" /> },
      { name: "NETLIFY", icon: <SiNetlify size={30} className="text-teal-500" /> },
    ],
  },
  {
    title: "Database",
    bg: "bg-pink-200",
    items: [
      { name: "MYSQL", icon: <SiMysql size={30} className="text-blue-700" /> },
      { name: "POSTGRESQL", icon: <SiPostgresql size={30} className="text-blue-600" /> },
      { name: "SUPABASE", icon: <SiSupabase size={30} className="text-emerald-600" /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-[#F3F3F3] border-b-4 border-black">

      <div className="container mx-auto px-4 mb-12 flex justify-center" data-aos="zoom-in">
        <h2 className="text-2xl md:text-4xl font-black bg-[#00FF75] px-8 py-3 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] uppercase">
          Keahlian
        </h2>
      </div>

      <div className="container mx-auto px-10 md:px-32 space-y-12">
        {categories.map((cat, catIdx) => (
          <div key={cat.title} data-aos="fade-up" data-aos-delay={catIdx * 100}>
            <div className="flex items-center mb-6">
              <div className="flex-1 h-[3px] bg-black" />
              <h3 className={`mx-4 px-5 py-2 font-black text-lg md:text-xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${cat.bg} whitespace-nowrap`}>
                {cat.title}
              </h3>
              <div className="flex-1 h-[3px] bg-black" />
            </div>
            <div className="flex flex-wrap gap-5">
              {cat.items.map((skill, i) => (
                <div
                  key={skill.name}
                  data-aos="flip-up"
                  data-aos-delay={catIdx * 100 + i * 50}
                  className="w-28 h-28 md:w-36 md:h-36 bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
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
        ))}
      </div>
    </section>
  );
}