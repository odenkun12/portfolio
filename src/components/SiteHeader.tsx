import logo from '../assets/logo.png';

export default function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-30 transition-all duration-300">
      <div className="container mx-auto flex items-center justify-between p-4">
        <a href="/" className="flex items-center gap-2 group">
          <img src={logo} alt="Logo" className="w-8 h-8 object-contain group-hover:scale-110 transition-transform" />
          <span className="text-gray-800 font-bold text-xl tracking-tight group-hover:text-green-600 transition-colors">
            odenkun
          </span>
        </a>
      </div>
    </header>
  );
}