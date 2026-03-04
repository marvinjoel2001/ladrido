export default function Home() {
  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1d1328]/80 backdrop-blur-xl border-b border-white/10 px-4 md:px-10 h-16 flex items-center justify-between anim-slide-down">
        <div className="flex items-center gap-2">
          <div className="bg-primary p-1.5 rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-xl">
              pets
            </span>
          </div>
          <span className="text-xl font-extrabold tracking-tight text-slate-100">
            Ladrido
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            href="#"
          >
            Inicio
          </a>
          <a
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            href="#"
          >
            Razas
          </a>
          <a
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            href="#"
          >
            Grupos
          </a>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-xl text-sm font-bold transition-all hover:scale-[1.02]">
            Explorar
          </button>
          <div className="size-9 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center cursor-pointer">
            <span className="material-symbols-outlined text-primary text-xl">
              person
            </span>
          </div>
        </div>
      </nav>
      <main className="pt-16 bg-[#0f0817]">
        <section className="hero-gradient relative overflow-hidden py-16 md:py-24 px-6 md:px-20">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="z-10 flex flex-col gap-8 anim-fade-in">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
                <span className="size-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-xs font-bold text-primary uppercase tracking-widest">
                  Envios Pet Premium
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="text-5xl md:text-7xl font-black leading-tight text-white">
                  Descubre todas las <span className="text-primary">razas</span>{" "}
                  de perros
                </h1>
                <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
                  Explora razas, conoce sus grupos y aprende más con Ladrido. La
                  guía definitiva para los amantes de los caninos.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <button className="bg-primary hover:bg-primary/90 text-white h-14 px-8 rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-primary/20 hover:scale-[1.02]">
                  Explorar Razas
                  <span className="material-symbols-outlined">explore</span>
                </button>
                <button className="bg-secondary hover:bg-secondary/90 text-white h-14 px-8 rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-secondary/20 hover:scale-[1.02]">
                  Ver Grupos
                  <span className="material-symbols-outlined">group</span>
                </button>
              </div>
            </div>
            <div className="relative hidden md:block anim-float">
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full"></div>
              <img
                alt="Modern Dog Hero"
                className="relative rounded-3xl object-cover w-full aspect-square shadow-2xl border border-white/10"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_QBrsFdxkS0l101CdCcOpGQD1BG_gSMGvNd0DouMTHjy6RV3HPQHsUrU9ihMjYyf0Wom8aRqpOVsRThUMRUe6BnUEuDAAySqmcYL-1xJVD10ocAYJVvp-twGnbHeoiAZBmvB9eTrye1gSIqLeG8wTAYL2YcC2JmwZ1OnbTYqCoz18HVYPf_68E_qBuwMLruXkpmDLx1Asq-ydGeNZ4WQqZxkin0xLQm9vyZ7xqOeHwK67WGaliaZphPCsvsW6BYGpRqGK-8MV"
              />
            </div>
          </div>
        </section>
        <section className="px-6 md:px-20 -mt-8 relative z-20 anim-fade-in bg-[#0f0817]">
          <div className="max-w-7xl mx-auto bg-[#120b1b]/90 border border-white/10 p-4 md:p-6 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-4 items-center backdrop-blur-xl">
            <div className="relative w-full md:flex-1">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                search
              </span>
              <input
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="Buscar razas de perros..."
                type="text"
              />
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <div className="relative w-full md:w-48">
                <select className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-slate-100 appearance-none focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all cursor-pointer">
                  <option value="">Todos los grupos</option>
                  <option value="cazadores">Cazadores</option>
                  <option value="compania">Compañía</option>
                  <option value="trabajo">Trabajo</option>
                  <option value="pastoreo">Pastoreo</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                  expand_more
                </span>
              </div>
              <button className="bg-white/5 hover:bg-white/10 text-slate-300 px-6 py-3 rounded-xl font-medium transition-all">
                Limpiar
              </button>
            </div>
          </div>
        </section>
        <section className="px-6 md:px-20 py-16 bg-[#120b1b]">
          <div className="max-w-7xl mx-auto anim-fade-in">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl font-bold text-white">
                Razas Destacadas
              </h2>
              <div className="flex gap-2">
                <button className="size-10 rounded-full glass-panel flex items-center justify-center text-white hover:bg-primary transition-colors">
                  <span className="material-symbols-outlined">
                    chevron_left
                  </span>
                </button>
                <button className="size-10 rounded-full glass-panel flex items-center justify-center text-white hover:bg-primary transition-colors">
                  <span className="material-symbols-outlined">
                    chevron_right
                  </span>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="glass-panel bg-[#1a1224]/80 rounded-2xl p-4 flex flex-col gap-4 card-hover transition-all duration-300 group hover:scale-[1.02]">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    alt="Golden Retriever"
                    className="aspect-square object-cover w-full group-hover:scale-105 transition-transform duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-dgUYdi5zYplPJaV2Az6jEa-yhbTqa8JkzQ5hsQ3bg5rGzQntvsZr3DDFpwp1tsv6TehRADeknAXAfdCVOIxUMfnQQOFP7kui4MDbQlyBNdS41ckDob5YaIUU857sPOjbkbYFoKQ7NakeWnSF8HMoj1IgQ7Sz-vIGV4AOH7LwnVuQsnW9VZZSXnxLuIArJbOW-Vm-jdMyQiOFEAL0212zwJFFuOCXhrhlEq9uDBwotgIhzI1Z7As6p9Rekf4luFiMQ7CZ4R7R"
                  />
                  <span className="absolute top-3 left-3 bg-secondary/70 text-white text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded-md shadow-lg shadow-secondary/40 ring-1 ring-white/10 backdrop-blur-md">
                    Cazadores
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold text-white">
                    Golden Retriever
                  </h3>
                  <p className="text-xs text-slate-400">
                    Inteligente, amigable y confiado.
                  </p>
                </div>
                <button className="w-full bg-primary/20 hover:bg-primary text-primary hover:text-white py-2.5 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 mt-2 hover:scale-[1.02]">
                  Ver detalle
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </button>
              </div>
              <div className="glass-panel bg-[#1a1224]/80 rounded-2xl p-4 flex flex-col gap-4 card-hover transition-all duration-300 group hover:scale-[1.02]">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    alt="Husky"
                    className="aspect-square object-cover w-full group-hover:scale-105 transition-transform duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnHFSeGuQzITroxwpvmsmFdWAtxK8AW5n1geJUtb98DcNUmzY4ejY3VoBigQjeQRErDw9oSGZMHpQfmip9KGxDaEXilkUVm2lAuq0FOOxDRDYuu9RGXZW5lkQoMdWTZnVDUuHQta-sYtd1XeWqpYp4qD1IV_4wFRSLpLsludHo2hpkaiau-jecUVr75DCE6VSFrOQWHUC4lm7nyUZAxTYQyAYf6-3mi8iso0Z3YqJCWuVuQjJWuPWAdiE38IREHTL1-kTMfLSh"
                  />
                  <span className="absolute top-3 left-3 bg-secondary/70 text-white text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded-md shadow-lg shadow-secondary/40 ring-1 ring-white/10 backdrop-blur-md">
                    Trabajo
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold text-white">
                    Siberian Husky
                  </h3>
                  <p className="text-xs text-slate-400">
                    Enérgico, extrovertido y gentil.
                  </p>
                </div>
                <button className="w-full bg-primary/20 hover:bg-primary text-primary hover:text-white py-2.5 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 mt-2 hover:scale-[1.02]">
                  Ver detalle
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </button>
              </div>
              <div className="glass-panel bg-[#1a1224]/80 rounded-2xl p-4 flex flex-col gap-4 card-hover transition-all duration-300 group hover:scale-[1.02]">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    alt="Beagle"
                    className="aspect-square object-cover w-full group-hover:scale-105 transition-transform duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0xAPyMzji_3KwYocr13UgLpOXrvLBmG-xXeNgcASUOxiuiFPaDlK_w2mf2TWAV4MeacDas6st9FK83pSKQStACYlUeLj4QICVmlk7GavX-BeWQnvQjB7n7Ngb0DwoIFSOihOkb_OGG0ar-M4hXu6WkSmEHFww5X4pHcZRvixKhkpLiaqOI6xOo4Kg8URFQk3W0lswh-atbatF7hBNldbAR7GWNPtJfw2aFR8Tj8dC_vzVctX2BN7b8AajBEz-HCzNXpNvtaqR"
                  />
                  <span className="absolute top-3 left-3 bg-secondary/70 text-white text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded-md shadow-lg shadow-secondary/40 ring-1 ring-white/10 backdrop-blur-md">
                    Cazadores
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold text-white">Beagle</h3>
                  <p className="text-xs text-slate-400">
                    Curioso, amable y alegre.
                  </p>
                </div>
                <button className="w-full bg-primary/20 hover:bg-primary text-primary hover:text-white py-2.5 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 mt-2 hover:scale-[1.02]">
                  Ver detalle
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </button>
              </div>
              <div className="glass-panel bg-[#1a1224]/80 rounded-2xl p-4 flex flex-col gap-4 card-hover transition-all duration-300 group hover:scale-[1.02]">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    alt="Pomeranian"
                    className="aspect-square object-cover w-full group-hover:scale-105 transition-transform duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1NdE4UNHC8LfNqOQDEbfQEW7dHMgzXRifTaVUEyS2x7iuiA5Qbq49dwR1YDBaMHy2T9EYwJzeDyuc0UohX9Kj_BnmtFOTgw711rR8IerCuvelaLEEvZm6xhXNklHmgpaJ1jtUuXuJSy5Owd9i_ShDGU5qNMS9_lx0Q1a_01aR8ZnUKxyW4HTRGumjqfHGkygjCLpmFsKoGeUIQ54cSsaR4B9NB_iJlLxi-ZAhtEUf1v0xe24Gql98_TsAPmFtr5y2I949RlAf"
                  />
                  <span className="absolute top-3 left-3 bg-secondary/70 text-white text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded-md shadow-lg shadow-secondary/40 ring-1 ring-white/10 backdrop-blur-md">
                    Compañía
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold text-white">Pomeranian</h3>
                  <p className="text-xs text-slate-400">
                    Vivaz, sociable y muy inteligente.
                  </p>
                </div>
                <button className="w-full bg-primary/20 hover:bg-primary text-primary hover:text-white py-2.5 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 mt-2 hover:scale-[1.02]">
                  Ver detalle
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
            <div className="mt-12 flex justify-center">
              <button className="border border-white/10 hover:border-primary/50 bg-white/5 text-slate-300 px-10 py-4 rounded-xl font-bold transition-all flex items-center gap-2 hover:scale-[1.02]">
                Ver todas las razas
                <span className="material-symbols-outlined">grid_view</span>
              </button>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#0a060f] border-t border-white/5 px-6 md:px-20 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2 items-center md:items-start">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">
                pets
              </span>
              <span className="text-xl font-extrabold text-white">Ladrido</span>
            </div>
            <p className="text-slate-500 text-sm">
              Proyecto técnico para{" "}
              <span className="text-primary font-semibold">Envios Pet</span>
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-6">
              <a
                className="text-slate-500 hover:text-primary transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined">share</span>
              </a>
              <a
                className="text-slate-500 hover:text-primary transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined">
                  alternate_email
                </span>
              </a>
              <a
                className="text-slate-500 hover:text-primary transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined">public</span>
              </a>
            </div>
            <p className="text-[10px] text-slate-600 uppercase tracking-widest">
              © 2024 Ladrido. Todos los derechos reservados.
            </p>
          </div>
          <div className="flex gap-8 text-sm font-medium text-slate-400">
            <a className="hover:text-white transition-colors" href="#">
              Privacidad
            </a>
            <a className="hover:text-white transition-colors" href="#">
              Términos
            </a>
            <a className="hover:text-white transition-colors" href="#">
              Soporte
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
