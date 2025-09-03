# 📦 StackBlitz Integration Guide

Kompletny przewodnik importowania i pracy z projektem WAVES w StackBlitz.

## 🚀 Szybki import do StackBlitz

### Metoda 1: GitHub Import (Zalecana)
1. Przejdź na [stackblitz.com](https://stackblitz.com)
2. Kliknij **"Import from GitHub"**
3. Wklej URL repozytorium: `https://github.com/[username]/[repo-name]`
4. StackBlitz automatycznie:
   - Sklonuje repozytorium
   - Zainstaluje wszystkie zależności z `package.json`
   - Uruchomi development server z `npm run dev`

### Metoda 2: Bezpośredni link
Użyj tego linka do natychmiastowego otwarcia w StackBlitz:
```
https://stackblitz.com/github/[username]/[repo-name]
```

### Metoda 3: Fork w StackBlitz
```
https://stackblitz.com/fork/github/[username]/[repo-name]
```

## ⚙️ Automatyczna konfiguracja

Projekt zawiera `stackblitz.json` który automatycznie:
- Instaluje zależności podczas importu
- Uruchamia development server
- Konfiguruje środowisko development

```json
{
  "installDependencies": true,
  "startCommand": "npm run dev",
  "env": {
    "NODE_ENV": "development"
  }
}
```

## 🔧 Konfiguracja w StackBlitz

### 1. Zmienne środowiskowe
StackBlitz automatycznie przeczyta plik `.env.example`. Aby skonfigurować:

1. **Utwórz plik `.env`** w root directory
2. **Skopiuj zawartość** z `.env.example`
3. **Zmodyfikuj wartości** jeśli potrzeba:

```env
VITE_SUPABASE_URL=https://zqjkdmqcmhtfuvloqxht.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpxamtkbXFjbWh0ZnV2bG9xeGh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY4MTkxODIsImV4cCI6MjA3MjM5NTE4Mn0.JGwVcKpphzSjI8mibylbhZRNReRQBdzB_l9VQ1MrYqQ
```

### 2. Uruchomienie projektu
Po imporcie projekt automatycznie się uruchomi. Jeśli nie:
1. Otwórz terminal w StackBlitz
2. Uruchom: `npm run dev`

## 🛠️ Dostępne komendy w StackBlitz

```bash
# Development server (automatyczny)
npm run dev

# Build production
npm run build

# Preview build
npm run preview

# Linting
npm run lint

# Type checking
npm run type-check
```

## 🔄 Synchronizacja z GitHub

### Auto-sync z GitHub (StackBlitz Pro)
- Zmiany w GitHub automatycznie pojawiają się w StackBlitz
- Commit'y z StackBlitz trafiają do GitHub

### Manual sync
1. **Push do GitHub** z StackBlitz:
   - Użyj Git panel w StackBlitz
   - Lub terminal: `git add . && git commit -m "message" && git push`

2. **Pull z GitHub**:
   - Terminal: `git pull origin main`

## 🌐 Deployment z StackBlitz

### 1. Netlify Integration
1. Connect GitHub account w Netlify
2. Deploy z głównej gałęzi
3. Auto-deployment przy każdym push

### 2. Vercel Integration
1. Import project z GitHub w Vercel
2. Automatyczny deployment

### 3. Export i manual deployment
```bash
# W StackBlitz terminal
npm run build

# Download plików dist/
# Upload na wybrany hosting
```

## 🚨 Troubleshooting StackBlitz

### Problem: Nie można zainstalować zależności
**Rozwiązanie:**
```bash
# Wyczyść cache
rm -rf node_modules package-lock.json
npm install
```

### Problem: TypeScript errors
**Rozwiązanie:**
```bash
# Restart TypeScript service
npm run type-check
```

### Problem: Hot reload nie działa
**Rozwiązanie:**
- Sprawdź czy `npm run dev` jest uruchomione
- Odśwież stronę
- Restart development server

### Problem: Supabase nie łączy się
**Rozwiązanie:**
1. Sprawdź plik `.env`
2. Upewnij się że zmienne mają prefix `VITE_`
3. Restart development server

### Problem: Import paths nie działają
**Rozwiązanie:**
Sprawdź `vite.config.ts`:
```typescript
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
```

## 📊 Performance w StackBlitz

### Optymalizacja dla StackBlitz:
1. **Chunking** - Vite automatycznie dzieli bundle
2. **Tree shaking** - nieużywany kod jest usuwany
3. **Hot Module Replacement** - szybkie zmiany bez refresh

### Monitor performance:
- Otwórz DevTools w preview
- Zakładka Performance
- Lighthouse audit

## 🔗 Przydatne linki

- [StackBlitz Docs](https://developer.stackblitz.com/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Supabase Docs](https://supabase.com/docs)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)

## 💡 Tips & Tricks

### 1. Szybki restart w StackBlitz:
```bash
# Kill all processes i restart
pkill -f node
npm run dev
```

### 2. Debug w StackBlitz:
- Console w preview window
- Network tab dla API calls
- React DevTools extension

### 3. Współpraca w StackBlitz:
- Share link z team
- Live collaboration jak Google Docs
- Comments w kodzie

### 4. Offline development:
- Download projektu z StackBlitz
- Import do lokalnego IDE
- Sync z GitHub