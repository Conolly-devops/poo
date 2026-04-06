export function Footer() {
  return (
    <footer className="bg-arena-blue-dark px-12 py-8 flex items-center justify-between flex-wrap gap-4">
      <span className="text-[13px] text-white/45">© 2026 Arena de Pernambuco · Squad 19</span>
      <div className="flex gap-6">
        {["Sobre nós", "Contato", "Política de Privacidade", "Termos de Serviço"].map((link) => (
          <a key={link} href="#" className="text-[13px] text-white/55 hover:text-white transition-colors no-underline">
            {link}
          </a>
        ))}
      </div>
    </footer>
  );
}
