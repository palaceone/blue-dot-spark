# WAVES - Portfolio Studio

Nowoczesne portfolio studio kreatywnego zbudowane w React + TypeScript z integracją Supabase.

## 🚀 Szybki start w StackBlitz

### Opcja 1: Import z GitHub
1. Otwórz [stackblitz.com](https://stackblitz.com)
2. Kliknij "Import from GitHub"
3. Wklej URL tego repozytorium
4. StackBlitz automatycznie zainstaluje zależności i uruchomi projekt

### Opcja 2: Bezpośredni link
Kliknij tutaj aby otworzyć projekt w StackBlitz:
[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/[username]/[repo-name])

## 🛠️ Lokalna instalacja

```bash
# Klonuj repozytorium
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>

# Zainstaluj zależności
npm install

# Skopiuj plik środowiskowy
cp .env.example .env

# Uruchom development server
npm run dev
```

## 🗄️ Konfiguracja Supabase

Projekt używa Supabase jako backend. Aby skonfigurować:

1. **Zmienne środowiskowe** już są ustawione w `.env.example`
2. **Tabele w bazie danych:**
   - `contact_submissions` - formularz kontaktowy
   - `user_roles` - role użytkowników

3. **RLS Policies** są już skonfigurowane w projekcie Supabase

## 🌐 Deployment

### Lovable (Zalecane)
Otwórz [Lovable](https://lovable.dev/projects/65f31ebd-f673-4b9a-9dce-af4d81f21bd2) i kliknij Share → Publish.

### Inne platformy

#### Netlify
```bash
npm run build
# Przeciągnij folder dist na netlify.com
```

#### Vercel
```bash
npm install -g vercel
vercel --prod
```

#### Własny serwer
```bash
npm run build
# Skopiuj zawartość folderu dist na serwer
```

## 📦 Struktura projektu

```
src/
├── components/          # Komponenty UI
│   ├── ui/             # Komponenty Shadcn/ui
│   ├── ContactSlideForm.tsx
│   ├── Hero.tsx
│   ├── Navigation.tsx
│   └── ...
├── pages/              # Strony aplikacji
│   ├── Index.tsx       # Strona główna
│   ├── DihoProject.tsx
│   ├── VirtualityProject.tsx
│   └── EcommerceProject.tsx
├── integrations/       # Integracje
│   └── supabase/       # Konfiguracja Supabase
├── hooks/              # Custom hooks
├── lib/                # Utilities
└── main.tsx           # Entry point
```

## 🎨 Funkcjonalności

- ✅ Responsywne portfolio z animacjami GSAP
- ✅ Formularz kontaktowy z Supabase
- ✅ Dynamiczne podstrony projektów
- ✅ Wysuwający się formularz kontaktowy
- ✅ Dark/Light mode support
- ✅ SEO optimized
- ✅ TypeScript

## 🔧 Dostępne komendy

```bash
npm run dev          # Development server
npm run build        # Build dla produkcji
npm run preview      # Preview build lokalnie
npm run lint         # Linting
npm run type-check   # TypeScript checking
```

## 📄 Dokumentacja

- [STACKBLITZ.md](STACKBLITZ.md) - Przewodnik StackBlitz
- [DEPLOYMENT.md](DEPLOYMENT.md) - Deployment na różnych platformach
- [CONTRIBUTING.md](CONTRIBUTING.md) - Jak współtworzyć projekt

## 🌍 Browser Support

- Chrome/Chromium 88+
- Firefox 85+
- Safari 14+
- Edge 88+

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
