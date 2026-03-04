export default function Home() {
  return (
    <div>
      <header className="sticky top-0 z-50 glass border-b border-primary/10 px-4 md:px-10 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4 text-primary">
          <div className="size-8 bg-primary/20 rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined text-primary">pets</span>
          </div>
          <h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold tracking-tight">
            Ladrido
          </h2>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-xl glass hover:bg-primary/20 transition-colors">
            <span className="material-symbols-outlined">search</span>
          </button>
          <button className="p-2 rounded-xl glass hover:bg-primary/20 transition-colors">
            <span className="material-symbols-outlined text-rose-500">
              favorite
            </span>
          </button>
          <div className="h-10 w-10 rounded-full border-2 border-primary/30 overflow-hidden">
            <img
              className="w-full h-full object-cover"
              alt="User profile avatar portrait"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-vq7QwWxULJ80bt-1XTv99ybR_HtYU9yOIxdHJ889uF0J0boXsAooLAyqsl8fiq42ipGSN8tLW535zZzrBh-a-Zk6pDaDmtiAFgm0Jy4hdI68qIicKApvShaP11xll0pleazWnblGowifCQ7kDbZESbyhltg7x4llarR1x-zc2WCl3b1XZih_kVK6NeMWyJlP6QDUpB_4MDbOXaUDZn5YAVf0ygiEMkqhUXBi4sFZgr7z5Z8XD1zZ2LjHvBTglGvuKAOPjPGc"
            />
          </div>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 pb-24">
        <div className="relative mt-6 rounded-xl overflow-hidden min-h-[450px] flex flex-col justify-end group">
          <img
            className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
            alt="Golden Retriever sitting majestically in a field"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC76EQscPkaMIKfkrdW95wP5enPzY9gckkzynohv4YZI-LcW7pekCr1cXJPK5mTCb_ry_EPGm-Sk_6-4smEfjyh61BHPKmp9XIv7m81ps_5aUlUOxmQDviQfmk2nNBqawmIUGy1B913GScqVoozGArolobg2TNRKI7FEmp7fzfq96FUo9vCjCskUdflSVY_uWQ-ona_5jLbAv8joCWdZzFO8QXW66GV6rwnijKtua_qII8i1j65fa6P3DupOUMVHQUNapIbsOXK"
          />
          <div className="absolute inset-0 hero-gradient"></div>
          <div className="relative p-8 md:p-12 space-y-4">
            <button className="glass-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2 hover:bg-primary hover:text-white transition-all">
              <span className="material-symbols-outlined text-sm">groups</span>
              Working Group
            </button>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
              Golden Retriever
            </h1>
            <p className="text-slate-300 max-w-2xl text-lg leading-relaxed">
              Known for their intelligence and versatile working ability, Golden
              Retrievers are among the most popular breeds worldwide.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="glass p-6 rounded-xl flex flex-col gap-3">
            <span className="material-symbols-outlined text-primary text-3xl">
              psychology
            </span>
            <div>
              <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Temperament
              </h3>
              <p className="text-lg font-medium">
                Friendly, Intelligent, Devoted
              </p>
            </div>
          </div>
          <div className="glass p-6 rounded-xl flex flex-col gap-3">
            <span className="material-symbols-outlined text-primary text-3xl">
              location_on
            </span>
            <div>
              <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Origin
              </h3>
              <p className="text-lg font-medium">Scotland, United Kingdom</p>
            </div>
          </div>
          <div className="glass p-6 rounded-xl flex flex-col gap-3">
            <span className="material-symbols-outlined text-primary text-3xl">
              hourglass_empty
            </span>
            <div>
              <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Life Expectancy
              </h3>
              <p className="text-lg font-medium">10 - 12 Years</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="glass p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">About the Breed</h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  The Golden Retriever is a sturdy, muscular dog of medium size,
                  famous for the dense, lustrous coat of gold that gives the
                  breed its name. The broad head, with its friendly and
                  intelligent eyes, short ears, and straight muzzle, is a breed
                  hallmark.
                </p>
                <p>
                  They are particularly renowned for being patient and
                  fun-loving with children. This is a breed that requires plenty
                  of daily exercise: a Golden who does not get enough activity
                  is likely to engage in undesirable behavior.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="glass-primary p-8 rounded-xl h-full flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -right-10 -top-10 opacity-10">
                <span className="material-symbols-outlined text-[120px]">
                  workspace_premium
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-4">
                  Working Group
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-8">
                  Dogs of the Working Group were bred to perform such jobs as
                  guarding property, pulling sleds, and performing water
                  rescues. They are quick to learn and highly intelligent.
                </p>
              </div>
              <button className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all flex items-center justify-center gap-2 group">
                Ver grupo completo
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>
      </main>
      <footer className="glass border-t border-primary/10 py-12 px-4 md:px-10 mt-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4 text-primary">
            <span className="material-symbols-outlined text-3xl">pets</span>
            <h2 className="text-slate-900 dark:text-slate-100 text-2xl font-bold tracking-tight">
              Ladrido
            </h2>
          </div>
          <nav className="flex gap-8 text-slate-500 dark:text-slate-400 font-medium">
            <a className="hover:text-primary transition-colors" href="#">
              Home
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              Explore
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              About
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              Contact
            </a>
          </nav>
          <div className="flex gap-4">
            <div className="size-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 cursor-pointer transition-all">
              <span className="material-symbols-outlined text-lg">share</span>
            </div>
            <div className="size-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 cursor-pointer transition-all">
              <span className="material-symbols-outlined text-lg">mail</span>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-primary/5 text-center text-slate-500 text-sm">
          © 2024 Ladrido Breed Explorer. Todos los derechos reservados.
        </div>
      </footer>
      <a
        className="fixed bottom-8 left-8 glass px-6 py-3 rounded-full flex items-center gap-2 hover:bg-primary hover:text-white transition-all z-50 shadow-xl group"
        href="#"
      >
        <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">
          arrow_back
        </span>
        <span className="font-bold">Volver</span>
      </a>
    </div>
  );
}
