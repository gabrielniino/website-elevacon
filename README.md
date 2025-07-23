projeto-site-institucional/
├── public/
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── apple-touch-icon.png
│   ├── manifest.json
│   ├── og-image.jpg
│   └── hero-background.jpg
│
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── loading.tsx
│   │   ├── not-found.tsx
│   │   ├── servicos/
│   │   │   └── page.tsx
│   │   ├── quem-somos/
│   │   │   └── page.tsx
│   │   ├── clientes/
│   │   │   └── page.tsx
│   │   └── contato/
│   │       └── page.tsx
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Modal.tsx
│   │   │   └── Input.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Clients.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   └── Contact.tsx
│   │   └── animations/
│   │       ├── FadeIn.tsx
│   │       ├── SlideUp.tsx
│   │       └── ScrollReveal.tsx
│   │
│   ├── lib/
│   │   ├── utils.ts
│   │   ├── constants.ts
│   │   └── validations.ts
│   │
│   ├── hooks/
│   │   ├── useScrolled.ts
│   │   ├── useWindowSize.ts
│   │   └── useLocalStorage.ts
│   │
│   ├── types/
│   │   ├── index.ts
│   │   ├── navigation.ts
│   │   └── components.ts
│   │
│   └── constants/
│       ├── navigation.ts
│       ├── services.ts
│       └── metadata.ts
│
├── .env.local
├── .env.example
├── .gitignore
├── README.md
├── package.json
├── tailwind.config.js
├── next.config.js
└── tsconfig.json