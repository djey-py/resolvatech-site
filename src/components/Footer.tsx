import { CURRENT_YEAR, footerLinks, getWhatsAppUrl } from "../data";

export function Footer() {
  return (
    <footer className="relative border-t border-border py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#inicio" className="font-heading font-bold text-xl tracking-tight text-text-primary inline-block mb-3">
              RESOLVA<span className="text-accent">TECH</span>
            </a>
            <p className="text-text-muted text-sm max-w-xs leading-relaxed">
              Problemas reais. Soluções sob medida.
            </p>
          </div>

          {/* Links */}
          <div>
            <div className="text-xs font-mono text-text-muted tracking-wider uppercase mb-4">Navegação</div>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs font-mono text-text-muted tracking-wider uppercase mb-4">Contato</div>
            <a
              href={getWhatsAppUrl("Olá, ResolvaTech! Gostaria de falar sobre um projeto.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors duration-300 mb-3"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.8 14.28c-.24.68-1.38 1.3-1.9 1.36-.5.06-1.02.08-1.56-.02-.36-.07-.82-.19-1.38-.4-2.42-1.04-3.98-3.5-4.1-3.66-.12-.16-.98-1.3-.98-2.5 0-1.2.62-1.8.84-2.04.22-.24.48-.3.64-.3.0 0 .16 0 .28.02.16.02.36-.06.56.44.2.5.68 1.66.74 1.78.06.12.1.26.02.42-.08.16-.12.26-.24.4-.12.14-.26.3-.36.4-.12.12-.24.26-.1.5.14.24.62 1.02 1.34 1.66.98.9 1.82 1.18 2.06 1.3.24.12.38.1.52-.06.14-.16.62-.72.78-.96.16-.24.32-.2.54-.12.22.08 1.38.64 1.62.76.24.12.38.18.44.28.06.1.06.58-.18 1.26z"/></svg>
              WhatsApp
            </a>
            <div className="text-sm text-text-muted mb-6">+244938435630</div>

            {/* <div className="text-xs font-mono text-text-muted tracking-wider uppercase mb-3">Redes</div>
            <div className="flex gap-4">
              <a href="#" className="text-text-muted hover:text-accent transition-colors duration-300" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
              </a>
              <a href="#" className="text-text-muted hover:text-accent transition-colors duration-300" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" className="text-text-muted hover:text-accent transition-colors duration-300" aria-label="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.315-.015-1.35-.015-2.46-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.245 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.245-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.245.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.245 3.3-1.245.66 1.65.24 2.88.12 3.18.78.84 1.245 1.905 1.245 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
            </div> */}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs">
            © {CURRENT_YEAR} ResolvaTech. Todos os direitos reservados.
          </p>
          {/* <p className="text-text-muted/60 text-xs font-mono">
            Feito com código. Não com templates.
          </p> */}
        </div>
      </div>
    </footer>
  );
}
