# 🎮 Was zock ich heute?

Eine moderne, responsive Web-App, die dir hilft, das perfekte Spiel für deine aktuelle Stimmung und verfügbare Zeit zu finden.

![Website Preview](screenshot.png)
*Screenshot-Platzhalter - füge hier deinen eigenen Screenshot ein*

## ✨ Features

- 🎲 **Zufälliger Spielvorschlag** basierend auf deinen Filtern
- 🎭 **Stimmungsfilter**: Entspannt, Kompetitiv, Kreativ, Storylastig, Chaotisch, Horror, Strategisch, Abenteuer
- ⏱️ **Zeitfilter**: 15-30 Min, 1 Stunde, 2+ Stunden
- 👥 **Spielmodus**: Solo, Mit Freunden, oder beides
- 📱 **Responsive Design** - funktioniert auf allen Geräten
- 🎨 **Modernes Gaming-Theme** mit animiertem Hintergrund
- 💾 **LocalStorage** - speichert dein letztes vorgeschlagenes Spiel
- 🔄 **"Nochmal würfeln"** für schnelle neue Vorschläge

## 🎮 Enthaltene Spiele

Die Datenbank enthält über **30 beliebte Spiele** aus verschiedenen Genres:

- **Indie-Games**: Stardew Valley, Hades, Hollow Knight, Undertale
- **AAA-Titel**: The Witcher 3, Red Dead Redemption 2, Elden Ring
- **Multiplayer**: Valorant, CS2, Rocket League, Among Us
- **Battle Royale**: Fortnite, Apex Legends
- **Horror**: Phasmophobia, Dead by Daylight, Outlast
- **Strategie**: Civilization VI, XCOM 2, Age of Empires IV
- Und viele mehr!

## 🚀 Live Demo

**[Hier klicken für Live-Demo](https://deinbenutzername.github.io/was-zock-ich-heute/)**

## 📦 Installation & Lokale Entwicklung

### Voraussetzungen
- Nur ein moderner Webbrowser (Chrome, Firefox, Safari, Edge)
- Keine weiteren Dependencies erforderlich!

### Lokale Installation

1. **Repository klonen**
```bash
git clone https://github.com/deinbenutzername/was-zock-ich-heute.git
cd was-zock-ich-heute
```

2. **Website öffnen**
```bash
# Öffne einfach die index.html in deinem Browser
# Oder starte einen lokalen Server (optional):
python -m http.server 8000
# Dann öffne: http://localhost:8000
```

## 🌐 GitHub Pages Deployment

### Automatisches Deployment

1. **Repository auf GitHub erstellen**
   - Gehe zu GitHub und erstelle ein neues Repository
   - Name: `was-zock-ich-heute` (oder ein anderer Name)

2. **Code hochladen**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/deinbenutzername/was-zock-ich-heute.git
git push -u origin main
```

3. **GitHub Pages aktivieren**
   - Gehe zu deinem Repository auf GitHub
   - Klicke auf **Settings** (Einstellungen)
   - Scrolle zu **Pages** im linken Menü
   - Bei **Source** wähle: **Deploy from a branch**
   - Bei **Branch** wähle: **main** und **/ (root)**
   - Klicke **Save**

4. **Fertig! 🎉**
   - Nach ca. 1-2 Minuten ist deine Website live
   - URL: `https://deinbenutzername.github.io/was-zock-ich-heute/`

## 📂 Projektstruktur

```
was-zock-ich-heute/
├── index.html          # Haupt-HTML-Datei
├── style.css           # Alle Styles & Animationen
├── script.js           # JavaScript-Logik & Spiele-Datenbank
├── README.md           # Diese Datei
└── screenshot.png      # (Optional) Screenshot für README
```

## 🛠️ Technologie-Stack

- **HTML5** - Semantisches Markup
- **CSS3** - Moderne Styles, Flexbox, Grid, Animationen
- **Vanilla JavaScript** - Keine Frameworks, pure Performance
- **Google Fonts** - Poppins Schriftart
- **LocalStorage API** - Persistente Datenspeicherung

## 🎨 Customization

### Eigene Spiele hinzufügen

Öffne `script.js` und füge neue Spiele zum `gamesDatabase` Array hinzu:

```javascript
{
    name: "Dein Spiel",
    genre: "Genre",
    mood: "stimmung", // entspannt, kompetitiv, kreativ, etc.
    time: "zeit",     // kurz, mittel, lang
    mode: "modus",    // solo, multiplayer, beide
    platform: "PC, Konsole",
    description: "Deine Beschreibung hier..."
}
```

### Farben anpassen

Öffne `style.css` und ändere die CSS-Variablen im `:root` Selektor:

```css
:root {
    --primary: #8b5cf6;      /* Lila */
    --secondary: #ec4899;    /* Pink */
    --background: #0f0f23;   /* Dunkelblau */
    /* ... weitere Farben ... */
}
```

### Zufälliger Farbverlauf aktivieren

In `script.js` am Ende der Datei diese Zeile auskommentieren:

```javascript
// randomizeBackground(); // ← Entferne das // am Anfang
```

## 🤝 Contributing

Beiträge sind willkommen! So kannst du helfen:

1. **Fork** das Repository
2. Erstelle einen **Feature Branch** (`git checkout -b feature/NeuesSpiel`)
3. **Commit** deine Änderungen (`git commit -m 'Add some NeuesSpiel'`)
4. **Push** zum Branch (`git push origin feature/NeuesSpiel`)
5. Öffne einen **Pull Request**

### Ideen für Beiträge
- 🎮 Weitere Spiele hinzufügen
- 🌍 Mehrsprachigkeit (i18n)
- 🎨 Neue Themes / Designs
- 📊 Statistiken über vorgeschlagene Spiele
- ⭐ Favoriten-System
- 🔍 Suchfunktion

## 📝 Lizenz

Dieses Projekt ist unter der **MIT License** lizenziert.

## 👨‍💻 Autor

Erstellt mit ❤️ für Gamers

## 🙏 Danksagungen

- Icons: Emoji (Native Unicode)
- Schriftart: [Google Fonts - Poppins](https://fonts.google.com/specimen/Poppins)
- Inspiration: Die Gaming-Community

## 📸 Screenshots

### Desktop View
![Desktop Screenshot](screenshot-desktop.png)

### Mobile View
![Mobile Screenshot](screenshot-mobile.png)

---

**Gefällt dir das Projekt?** Gib ihm einen ⭐ auf GitHub!

**Hast du Fragen oder Vorschläge?** Öffne ein [Issue](https://github.com/deinbenutzername/was-zock-ich-heute/issues)!
