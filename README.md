# Earth Guardians Hub

Sito informativo basato su Vite + React. Qui trovi il codice sorgente del progetto.

## Uso locale

Prerequisiti: Node.js 18+ e npm.

Esegui:

```bash
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
npm ci
npm run dev
```

## Build e deploy (GitHub Pages)

Se pubblichi come project site (`https://<tuo-username>.github.io/earth-guardians-hub/`) assicurati che in `vite.config.ts` la proprietà `base` sia impostata su `/earth-guardians-hub/`.

Ho aggiunto un workflow GitHub Actions in `.github/workflows/deploy-pages.yml` che costruisce e distribuisce la cartella `dist` su GitHub Pages automaticamente al push sul ramo `main`.

## Tecnologie

- Vite
- React
- TypeScript
- Tailwind CSS

Se vuoi che personalizzi ulteriormente il README (es. aggiungere badge, istruzioni per PR, struttura cartelle), dimmelo.
