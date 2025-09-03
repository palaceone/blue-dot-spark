# 🚀 Deployment Guide

Przewodnik wdrażania projektu WAVES na różnych platformach.

## 🌐 Platformy hostingowe

### 1. Netlify (Zalecane)

#### Automatyczny deployment z GitHub:
1. Połącz konto GitHub z Netlify
2. Wybierz repozytorium 
3. Ustawienia build:
   ```
   Build command: npm run build
   Publish directory: dist
   ```
4. Dodaj zmienne środowiskowe:
   ```
   VITE_SUPABASE_URL=https://zqjkdmqcmhtfuvloqxht.supabase.co
   VITE_SUPABASE_ANON_KEY=[twój-klucz]
   ```

#### Manual deployment:
```bash
npm run build
# Przeciągnij folder dist na netlify.com
```

### 2. Vercel

```bash
# Globalna instalacja
npm install -g vercel

# Login i deployment
vercel login
vercel --prod

# Dodanie zmiennych środowiskowych
vercel env add VITE_SUPABASE_URL
vercel env add VITE_SUPABASE_ANON_KEY
```

### 3. GitHub Pages

1. Dodaj do `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/nazwa-repo/',
  // ... reszta konfiguracji
})
```

2. Utwórz `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Node
        uses: actions/setup-node@v2
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm install
        
      - name: Build
        run: npm run build
        env:
          VITE_SUPABASE_URL: ${{ secrets.VITE_SUPABASE_URL }}
          VITE_SUPABASE_ANON_KEY: ${{ secrets.VITE_SUPABASE_ANON_KEY }}
        
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### 4. Firebase Hosting

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
npm run build
firebase deploy
```

### 5. Własny serwer VPS

#### Nginx + PM2:
```bash
# Na serwerze
sudo apt update
sudo apt install nginx nodejs npm

# Clone i build
git clone https://github.com/[username]/[repo-name].git
cd [repo-name]
npm install
npm run build

# Skopiuj pliki
sudo cp -r dist/* /var/www/html/

# Konfiguracja Nginx
sudo nano /etc/nginx/sites-available/default
```

#### Nginx config dla SPA:
```nginx
server {
    listen 80;
    server_name twoja-domena.com;
    root /var/www/html;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Handle React Router
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'; frame-ancestors 'self';" always;
}
```

#### SSL z Let's Encrypt:
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d twoja-domena.com
```

## 🔒 Zmienne środowiskowe

### Produkcja:
```env
VITE_SUPABASE_URL=https://zqjkdmqcmhtfuvloqxht.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpxamtkbXFjbWh0ZnV2bG9xeGh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY4MTkxODIsImV4cCI6MjA3MjM5NTE4Mn0.JGwVcKpphzSjI8mibylbhZRNReRQBdzB_l9VQ1MrYqQ
NODE_ENV=production
```

### Development:
```env
VITE_SUPABASE_URL=https://zqjkdmqcmhtfuvloqxht.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpxamtkbXFjbWh0ZnV2bG9xeGh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY4MTkxODIsImV4cCI6MjA3MjM5NTE4Mn0.JGwVcKpphzSjI8mibylbhZRNReRQBdzB_l9VQ1MrYqQ
NODE_ENV=development
```

## 🔧 Troubleshooting

### Błąd: "Failed to load module"
```bash
# Wyczyść cache i reinstaluj
rm -rf node_modules package-lock.json
npm install
```

### Błąd: CORS w Supabase
1. Dodaj domenę w Supabase Dashboard
2. Authentication → Settings → Site URL
3. Dodaj URL twojej aplikacji

### Błąd: 404 na odświeżeniu strony
- Upewnij się że serwer obsługuje SPA routing
- Dodaj `try_files $uri $uri/ /index.html;` do Nginx

### Performance optimization:
1. **Lazy loading** - komponenty ładowane na żądanie
2. **Image optimization** - WebP format, lazy loading
3. **Bundle splitting** - automatyczne przez Vite
4. **Gzip compression** - konfiguracja serwera
5. **CDN** - dla statycznych assetów

## 📊 Monitoring

### Opcje monitoringu:
- **Netlify Analytics** - wbudowane
- **Google Analytics** - dodaj do `index.html`
- **Sentry** - error tracking
- **Lighthouse** - performance testing

### Basic performance check:
```bash
npm run build
npm run preview
# Otwórz DevTools → Lighthouse
```