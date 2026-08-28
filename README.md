# ResolvaTech — Site Institucional

Site institucional premium da ResolvaTech, agência de desenvolvimento de software.

## Stack

- **React** 19
- **TypeScript**
- **Vite** 7
- **Tailwind CSS** 4
- **Framer Motion** — Animações e transições

## Requisitos

- Node.js 18+
- npm 9+

## Instalação

```bash
npm install
```

## Desenvolvimento

```bash
npm run dev
```

O servidor de desenvolvimento inicia em `http://localhost:5173`.

## Build

```bash
npm run build
```

Os arquivos de produção são gerados na pasta `dist/`.

## Preview

```bash
npm run preview
```

## Deploy

O projeto está pronto para deploy em **Vercel**, Netlify ou qualquer plataforma que suporte sites estáticos.

### Vercel

```bash
npx vercel
```

Ou conecte o repositório diretamente no dashboard da Vercel.

## Estrutura

```
src/
├── App.tsx              # Composição principal
├── index.css            # Estilos globais e tema
├── main.tsx             # Entry point
├── components/
│   ├── Navbar.tsx       # Navegação fixa
│   ├── Hero.tsx         # Seção hero
│   ├── Manifesto.tsx    # Manifesto e contadores
│   ├── Services.tsx     # Serviços (4 cards)
│   ├── Process.tsx      # Timeline de processo
│   ├── Portfolio.tsx    # Projetos
│   ├── Recognition.tsx  # Números de reconhecimento
│   ├── Stack.tsx        # Tecnologias
│   ├── Testimonials.tsx # Depoimentos
│   ├── FinalCTA.tsx     # CTA final
│   ├── Footer.tsx       # Rodapé
│   ├── WhatsAppButton.tsx # Botão flutuante
│   └── ui.tsx           # Componentes reutilizáveis
└── data/
    └── index.ts         # Dados e constantes
```

## WhatsApp

O principal canal de conversão é o WhatsApp: **+55 93843-5630**

Todos os CTAs direcionam para `https://wa.me/55938435630` com mensagens contextuais pré-preenchidas.

## Personalização

- **Dados**: Edite `src/data/index.ts` para alterar serviços, projetos, depoimentos, stack e estatísticas.
- **Cores**: Edite as variáveis em `src/index.css` na seção `@theme`.
- **Conteúdo**: Cada seção é um componente independente em `src/components/`.

---

**ResolvaTech** — Problemas reais. Soluções sob medida.
