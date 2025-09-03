# 🤝 Contributing to WAVES Studio

Dziękujemy za zainteresowanie współpracą z projektem WAVES Studio!

## 🚀 Szybki start dla contributorów

### 1. Fork i clone
```bash
# Fork repozytorium na GitHub
# Następnie clone fork'a
git clone https://github.com/[twoj-username]/[repo-name].git
cd [repo-name]
```

### 2. Setup lokalne
```bash
# Instalacja zależności
npm install

# Skopiuj environment variables
cp .env.example .env

# Uruchom development server
npm run dev
```

### 3. Utwórz branch dla feature
```bash
git checkout -b feature/nazwa-funkcji
# lub
git checkout -b fix/nazwa-bugfixa
```

## 📋 Proces współpracy

### 1. Zgłoszenie Issue
Przed rozpoczęciem pracy:
- Sprawdź czy podobne issue już istnieje
- Opisz problem/funkcję dokładnie
- Dodaj screenshots jeśli to UI change
- Użyj odpowiednich labels

### 2. Development
```bash
# Zawsze pracuj na nowym branch'u
git checkout -b feature/new-feature

# Rób frequent commits z opisowymi wiadomościami
git commit -m "feat: add contact form validation"
git commit -m "fix: resolve mobile responsiveness issue"
git commit -m "docs: update README installation steps"
```

### 3. Testowanie
```bash
# Uruchom linter
npm run lint

# Sprawdź TypeScript
npm run type-check

# Zbuduj projekt
npm run build

# Przetestuj w różnych rozdzielczościach
# Sprawdź wszystkie route'y
```

### 4. Pull Request
- Opisz co zmienia PR
- Linkuj related issues (`Closes #123`)
- Dodaj screenshots dla UI changes
- Upewnij się że CI passes

## 🎨 Style Guide

### TypeScript/React
```typescript
// ✅ Dobrze
interface ProjectDetails {
  title: string;
  client: string;
  year: string;
}

const ProjectCard: React.FC<{ project: ProjectDetails }> = ({ project }) => {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
    </div>
  );
};

// ❌ Źle
function projectCard(props: any) {
  return <div>{props.project.title}</div>;
}
```

### CSS/Tailwind
```tsx
// ✅ Dobrze - semantic classes, responsive
<div className="container mx-auto px-4 py-8 md:py-16">
  <h1 className="text-2xl md:text-4xl font-bold text-primary">Title</h1>
</div>

// ❌ Źle - hardcoded values, nie responsive
<div style={{padding: '32px', fontSize: '24px'}}>
  <h1>Title</h1>
</div>
```

### Git Commits
Używamy [Conventional Commits](https://www.conventionalcommits.org/):

```bash
feat: add new project gallery component
fix: resolve mobile navigation overflow
docs: update deployment instructions
style: improve button hover animations
refactor: extract form validation logic
test: add unit tests for contact form
chore: update dependencies
```

### Nazewnictwo plików
```
PascalCase dla komponentów: ProjectCard.tsx
camelCase dla utils: formatDate.ts
kebab-case dla pages: project-detail.tsx
```

## 🧪 Testowanie

### Manual testing checklist:
- [ ] Desktop responsiveness (1920px, 1440px, 1024px)
- [ ] Mobile responsiveness (768px, 375px)
- [ ] Wszystkie linki działają
- [ ] Formularz kontaktowy funkcjonuje
- [ ] Animacje są płynne
- [ ] Nie ma console errors
- [ ] TypeScript kompiluje się bez błędów

### Browser testing:
- Chrome/Chromium
- Firefox
- Safari (jeśli masz dostęp)
- Mobile browsers

## 🐛 Zgłaszanie bugów

### Bug report template:
```markdown
**Opis problemu**
Krótki opis co nie działa

**Kroki do reprodukcji**
1. Przejdź do...
2. Kliknij na...
3. Zobacz błąd

**Oczekiwane zachowanie**
Co powinno się stać

**Screenshots**
Dodaj screenshots jeśli to pomaga

**Environment:**
- OS: [Windows/macOS/Linux]
- Browser: [Chrome/Firefox/Safari]
- Version: [np. Chrome 119]
- Device: [Desktop/Mobile]
```

## 💡 Feature requests

### Feature request template:
```markdown
**Czy funkcja rozwiązuje problem?**
Opisz jaki problem rozwiązuje

**Opisz rozwiązanie**
Jak wyobrażasz sobie tę funkcję

**Alternatywy**
Czy rozważałeś inne podejścia

**Dodatkowy kontekst**
Screenshots, mockupy, przykłady
```

## 🚀 Deployment i releases

### Development workflow:
1. **main** - production ready code
2. **develop** - integration branch
3. **feature/** - nowe funkcje
4. **fix/** - bugfixy

### Release process:
1. PR do develop branch
2. Testing w develop
3. PR z develop do main
4. Automatic deployment z main

## 📚 Przydatne zasoby

### Dokumentacja:
- [React Docs](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [GSAP Docs](https://greensock.com/docs/)
- [Supabase Docs](https://supabase.com/docs)

### Design resources:
- [Figma Community](https://www.figma.com/community)
- [UI Design Patterns](https://ui-patterns.com/)
- [Color Palette Generators](https://coolors.co/)

## ❓ Pytania?

- Otwórz Issue z pytaniem
- Napisz w Discussions
- Sprawdź existing Issues - może ktoś już pytał

## 🙏 Podziękowania

Każdy contribution jest ceniony, niezależnie od wielkości! 

Specjalne podziękowania dla:
- Wszystkich contributors
- Community za feedback
- Lovable team za platformę