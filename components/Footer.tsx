export default function Footer() {
  return (
    <footer className="border-t border-[#e5e2e1] bg-[#fdf8f8]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col md:flex-row items-center gap-3 text-center md:text-left">
          <span className="font-serif text-lg font-semibold text-[#1c1b1b]">
            Cibuyy
          </span>
          <span className="hidden md:block text-[#c4c7c7]">—</span>
          <p className="text-[13px] text-[#747878]">
            © 2026 Cibuyy. Personal space on the internet.
          </p>
        </div>
        <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#c4c7c7]">
          Made with curiosity
        </p>
      </div>
    </footer>
  );
}
