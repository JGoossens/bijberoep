# GJ Software - Website & PC's Op Maat

Een professionele Angular website voor NV GJ Software, gespecialiseerd in websites en computers op maat.

## Kleurenschema

- **Primair**: Oranje (#ff6b35)
- **Secundair**: Goud/Oranje (#ffa500)
- **Achtergrond**: Zwart (#0a0a0a) en Grijs tinten
- **Tekst**: Licht grijs (#e8e8e8)

## Features

- ✨ Modern design met geanimeerde achtergrond
- 📱 Volledig responsive (mobiel, tablet, desktop)
- ⚡ Angular standalone components
- 🎨 Orbitron font voor headers + Work Sans voor content
- 🌊 Smooth scrolling navigatie
- ✨ Hover effecten en animaties

## Installatie

```bash
# Installeer dependencies
npm install

# Start development server
npm start

# Open browser op http://localhost:4200
```

## Bouwen voor productie

```bash
npm run build
```

De gebouwde bestanden komen in de `dist/` folder.

## Project Structuur

```
src/
├── app/
│   ├── components/
│   │   ├── header/          # Navigatie
│   │   ├── hero/            # Hero sectie met CTA
│   │   ├── services/        # Diensten (websites & PC's)
│   │   ├── why-choose/      # USP's
│   │   ├── contact/         # Contact informatie
│   │   └── footer/          # Footer
│   ├── app.ts               # Main app component
│   └── app.html             # Main template
└── styles.css               # Globale styles

```

## Aanpassingen

### Contact gegevens wijzigen
Pas de contact gegevens aan in `src/app/components/contact/contact.html`

### Kleuren aanpassen
Wijzig de CSS variabelen in `src/styles.css`:
```css
:root {
  --primary: #ff6b35;
  --secondary: #ffa500;
  /* etc. */
}
```

### Fonts wijzigen
Update de Google Fonts import in `src/styles.css`

## Technologies

- Angular 19+
- TypeScript
- CSS3 met animaties
- Google Fonts (Orbitron + Work Sans)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

© 2025 NV GJ Software
