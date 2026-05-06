import  { useRef, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/ReactToastify.css';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaPaperPlane } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

 const sendEmail = (e) => {
  e.preventDefault();

  setLoading(true);

  // simulasi kirim (delay 1.5 detik)
  setTimeout(() => {
    setLoading(false);

    toast.success('Pesan berhasil terkirim!');

    e.target.reset();
  }, 1500);
};

  return (
    <section id="contact" className="py-20 bg-[#00FF75] border-b-4 border-black overflow-hidden">
      <ToastContainer />
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Judul Section */}
        <div className="flex justify-center mb-16" data-aos="zoom-in">
          <h2 className="text-3xl md:text-5xl font-black bg-white text-black px-12 py-4 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] uppercase">
            Kontak
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Informasi Kontak */}
          <div className="space-y-8" data-aos="fade-right">
            <h3 className="text-2xl font-black uppercase italic">Informasi Kontak</h3>
            
            <div className="flex items-center gap-6 bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
              <div className="bg-[#FF007A] p-4 border-4 border-black text-white">
                <FaMapMarkerAlt size={32} />

              </div>
              <div>
                <p className="font-black text-sm uppercase">Lokasi</p>
                <p className="font-bold text-lg">Kopo, Bandung, Indonesia</p>
              </div>
            </div>

            <div className="flex items-center gap-6 bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
              <div className="bg-[#3B82F6] p-4 border-4 border-black text-white">
                <FaEnvelope size={32} />
              </div>
              <div>
                <p className="font-black text-sm uppercase">Email</p>
                <p className="font-bold text-lg">adansyah225@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-6 bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
              <div className="bg-yellow-400 p-4 border-4 border-black text-black">
                <FaPhoneAlt size={32} />
              </div>
              <div>
                <p className="font-black text-sm uppercase">Telepon</p>
                <p className="font-bold text-lg">+62 89677121092</p>
              </div>
            </div>
          </div>

          {/* Form Kirim Pesan */}
          <div data-aos="fade-left">
            <h3 className="text-2xl font-black uppercase italic mb-8">Kirim Pesan</h3>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div className="bg-white border-4 border-black p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <label className="block font-black text-[10px] uppercase mb-1">Nama Anda</label>
                <input 
                  type="text" name="user_name" required
                  className="w-full font-bold outline-none bg-transparent"
                />
              </div>
              
              <div className="bg-white border-4 border-black p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <label className="block font-black text-[10px] uppercase mb-1">Email Anda</label>
                <input 
                  type="email" name="user_email" required
                  className="w-full font-bold outline-none bg-transparent"
                />
              </div>

              <div className="bg-white border-4 border-black p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <label className="block font-black text-[10px] uppercase mb-1">Subjek</label>
                <input 
                  type="text" name="subject" required
                  className="w-full font-bold outline-none bg-transparent"
                />
              </div>

              <div className="bg-white border-4 border-black p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <label className="block font-black text-[10px] uppercase mb-1">Pesan Anda</label>
                <textarea 
                  name="message" rows="4" required
                  className="w-full font-bold outline-none bg-transparent resize-none"
                ></textarea>
              </div>

              <button 
  type="submit"
  disabled={loading}
  className="w-full bg-black text-white font-black py-5 uppercase flex items-center justify-center gap-3 border-4 border-black shadow-[6px_6px_0px_0px_rgba(255,255,255,0.5)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all group disabled:opacity-50"
>
  <FaPaperPlane size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
  
  {loading ? "Mengirim..." : "Send Message"}
</button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}