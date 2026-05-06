import { SiTelegram } from "react-icons/si";
export default function About() {
  return (
    <section id="about" className="min-h-screen bg-[#F3F3F3] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Judul Section */}
        <div className="flex justify-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black bg-[#FF007A] text-white px-8 py-4 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] uppercase tracking-tighter">
            Tentang Saya
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Bagian Foto dengan Frame Bertumpuk */}
          <div className="relative group">
            {/* Dekorasi Kotak Kuning di Belakang */}
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-yellow-400 border-4 border-black z-0"></div>
            
            {/* Frame Foto Utama */}
            <div className="relative bg-white border-4 border-black p-3 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] z-10 -rotate-2 group-hover:rotate-0 transition-transform duration-300">
              <img 
                src="/syahdan-pp.jpg" 
                alt="Syahdan Mutahariq" 
                className="w-64 h-64 md:w-80 md:h-80 object-cover border-2 border-black"
              />
            </div>
          </div>

          {/* Bagian Teks Deskripsi */}
          <div className="flex-1 space-y-6">
            <h3 className="text-2xl md:text-4xl font-black leading-tight">
              SAYA <span className="text-blue-600">SYAHDAN MUTAHARIQ</span>, 
              <span className="bg-[#00FF75] px-2 ml-2 border-2 border-black">LULUSAN S1 TEKNIK INFORMATIKA</span>
            </h3>

            <div className="border-l-8 border-[#FF007A] pl-6 py-2">
              <p className="text-lg font-bold leading-relaxed text-gray-800 text-justify">
                Sebagai lulusan terbaru dari STMIK Mardira Indonesia (S1 Teknik Informatika), saya telah mengerjakan berbagai proyek selama studi dan melalui pekerjaan freelance—mulai dari website sederhana hingga aplikasi kompleks, dan implementasi infrastruktur jaringan. Saya menikmati menggabungkan keterampilan teknis dengan pemecahan masalah kreatif untuk memberikan solusi yang efektif dan menarik.
              </p>
            </div>

            {/* Info Kontak & Lokasi */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white border-4 border-black p-4 flex items-center gap-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="text-[#FF007A] text-2xl">📍</div>
                <div>
                  <p className="font-black text-sm uppercase">Lokasi</p>
                  <p className="font-bold text-gray-600">Bandung, Indonesia</p>
                </div>
              </div>

              <div className="bg-white border-4 border-black p-4 flex items-center gap-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="text-blue-500 text-2xl">✉️</div>
                <div>
                  <p className="font-black text-sm uppercase">Email</p>
                  <p className="font-bold text-gray-600">adansyah225@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Tombol Rekrut */}
            <a href="#contact" className="bg-white border-4 w-60 border-black px-8 py-3 font-black uppercase flex items-center gap-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-400 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
              <span>
                <SiTelegram size={20} />
                </span> Rekrut Saya
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}