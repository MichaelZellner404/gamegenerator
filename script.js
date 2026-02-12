/* ========================================
   Game Database
   ======================================== */

const gamesDatabase = [
    // Entspannte Spiele
    {
        name: "Stardew Valley",
        genre: "Farming Simulation",
        mood: "entspannt",
        time: "mittel",
        mode: "solo",
        platform: "PC, Konsole, Mobile",
        description: "Bewirtschafte deine eigene Farm, pflanze Crops an, züchte Tiere und baue Beziehungen zu den Dorfbewohnern auf. Perfekt zum Entspannen nach einem langen Tag."
    },
    {
        name: "Minecraft",
        genre: "Sandbox",
        mood: "kreativ",
        time: "lang",
        mode: "beide",
        platform: "PC, Konsole, Mobile",
        description: "Baue, erkunde und überlebe in einer prozedural generierten Welt aus Blöcken. Kreativität kennt keine Grenzen - alleine oder mit Freunden."
    },
    {
        name: "Animal Crossing: New Horizons",
        genre: "Life Simulation",
        mood: "entspannt",
        time: "mittel",
        mode: "solo",
        platform: "Nintendo Switch",
        description: "Gestalte deine eigene Insel, sammle Möbel, fange Insekten und Fische. Ein entspanntes Spiel ohne Zeitdruck und Stress."
    },
    {
        name: "Terraria",
        genre: "Action-Adventure",
        mood: "kreativ",
        time: "lang",
        mode: "beide",
        platform: "PC, Konsole, Mobile",
        description: "2D-Sandbox-Abenteuer mit Crafting, Bauen und epischen Bosskämpfen. Erkunde gefährliche Höhlen und baue deine Basis."
    },
    
    // Kompetitive Spiele
    {
        name: "Valorant",
        genre: "Tactical Shooter",
        mood: "kompetitiv",
        time: "mittel",
        mode: "multiplayer",
        platform: "PC",
        description: "Taktischer 5v5 Shooter mit einzigartigen Agenten und Fähigkeiten. Strategie und Präzision entscheiden über Sieg oder Niederlage."
    },
    {
        name: "Counter-Strike 2",
        genre: "Tactical Shooter",
        mood: "kompetitiv",
        time: "mittel",
        mode: "multiplayer",
        platform: "PC",
        description: "Der Klassiker unter den taktischen Shootern. Teamwork, Aim und Map-Knowledge sind der Schlüssel zum Erfolg."
    },
    {
        name: "Rocket League",
        genre: "Sports",
        mood: "kompetitiv",
        time: "kurz",
        mode: "beide",
        platform: "PC, Konsole",
        description: "Fußball mit Autos! Schnelle Matches, hoher Skill-Cap und unglaublich befriedigend wenn man ein Tor schießt."
    },
    {
        name: "League of Legends",
        genre: "MOBA",
        mood: "kompetitiv",
        time: "mittel",
        mode: "multiplayer",
        platform: "PC",
        description: "Das weltweit beliebteste MOBA-Spiel. Wähle deinen Champion und kämpfe mit deinem Team um den Sieg auf der Kluft der Beschwörer."
    },
    {
        name: "Fortnite",
        genre: "Battle Royale",
        mood: "kompetitiv",
        time: "kurz",
        mode: "beide",
        platform: "PC, Konsole, Mobile",
        description: "100 Spieler, ein Gewinner. Sammle Waffen, baue Strukturen und kämpfe ums Überleben in diesem bunten Battle Royale."
    },
    
    // Storylastige Spiele
    {
        name: "The Witcher 3: Wild Hunt",
        genre: "Action RPG",
        mood: "storylastig",
        time: "lang",
        mode: "solo",
        platform: "PC, Konsole",
        description: "Episches Fantasy-RPG mit einer der besten Geschichten im Gaming. Folge Geralt von Riva auf seiner Suche nach Ciri durch eine riesige Open World."
    },
    {
        name: "Red Dead Redemption 2",
        genre: "Action-Adventure",
        mood: "storylastig",
        time: "lang",
        mode: "solo",
        platform: "PC, Konsole",
        description: "Erlebe das Ende des Wilden Westens in dieser emotional packenden Geschichte über Loyalität, Überleben und Verrat."
    },
    {
        name: "God of War",
        genre: "Action-Adventure",
        mood: "storylastig",
        time: "lang",
        mode: "solo",
        platform: "PC, PlayStation",
        description: "Begleite Kratos und seinen Sohn Atreus auf einer epischen Reise durch die nordische Mythologie. Packende Story trifft auf brutales Combat-System."
    },
    {
        name: "Undertale",
        genre: "RPG",
        mood: "storylastig",
        time: "mittel",
        mode: "solo",
        platform: "PC, Konsole",
        description: "Ein RPG, in dem niemand sterben muss. Charmante Charaktere, cleverer Humor und eine Story, die deine Entscheidungen wirklich zählen lässt."
    },
    
    // Chaotische Spiele
    {
        name: "Fall Guys",
        genre: "Party",
        mood: "chaotisch",
        time: "kurz",
        mode: "multiplayer",
        platform: "PC, Konsole",
        description: "60 bunte Bohnen kämpfen durch absurde Hindernissparcours. Chaos, Lachen und verzweifelte Versuche, nicht ins Wasser zu fallen."
    },
    {
        name: "Among Us",
        genre: "Social Deduction",
        mood: "chaotisch",
        time: "kurz",
        mode: "multiplayer",
        platform: "PC, Mobile",
        description: "Wer ist der Impostor? Vertrauen, Lügen und Chaos in diesem Social-Deduction-Game für 4-15 Spieler."
    },
    {
        name: "Overcooked 2",
        genre: "Co-op",
        mood: "chaotisch",
        time: "kurz",
        mode: "multiplayer",
        platform: "PC, Konsole",
        description: "Kocht zusammen in immer verrückteren Küchen. Teamwork ist gefragt, aber Chaos vorprogrammiert. Perfekt für Couch-Co-op!"
    },
    {
        name: "Gang Beasts",
        genre: "Fighting",
        mood: "chaotisch",
        time: "kurz",
        mode: "multiplayer",
        platform: "PC, Konsole",
        description: "Gelatineartige Figuren prügeln sich in absurden Arenen. Slapstick-Humor und unvorhersehbare Physik sorgen für Lachgarantie."
    },
    
    // Horror Spiele
    {
        name: "Phasmophobia",
        genre: "Horror Co-op",
        mood: "horror",
        time: "mittel",
        mode: "multiplayer",
        platform: "PC",
        description: "Untersucht als Geisterjäger verfluchte Orte und identifiziert paranormale Aktivitäten. Am gruseligsten mit Freunden im Voice-Chat."
    },
    {
        name: "Dead by Daylight",
        genre: "Asymmetric Horror",
        mood: "horror",
        time: "kurz",
        mode: "multiplayer",
        platform: "PC, Konsole",
        description: "4 Überlebende gegen 1 Killer. Verstecke dich, repariere Generatoren und entkome - oder jage als Killer deine Beute."
    },
    {
        name: "Resident Evil Village",
        genre: "Survival Horror",
        mood: "horror",
        time: "lang",
        mode: "solo",
        platform: "PC, Konsole",
        description: "Atmosphärisches Survival-Horror-Abenteuer in einem mysteriösen Dorf voller Monster und Geheimnisse."
    },
    {
        name: "Outlast",
        genre: "Survival Horror",
        mood: "horror",
        time: "mittel",
        mode: "solo",
        platform: "PC, Konsole",
        description: "First-Person-Horror ohne Kampfmechanik. Verstecken, rennen und überleben in einer verlassenen Psychiatrie."
    },
    
    // Strategische Spiele
    {
        name: "Civilization VI",
        genre: "Turn-Based Strategy",
        mood: "strategisch",
        time: "lang",
        mode: "beide",
        platform: "PC, Konsole",
        description: "Baue ein Imperium von der Steinzeit bis zur Zukunft. 'Nur noch eine Runde' - berühmte letzte Worte vor 6 Stunden Spielzeit."
    },
    {
        name: "XCOM 2",
        genre: "Tactical Strategy",
        mood: "strategisch",
        time: "lang",
        mode: "solo",
        platform: "PC, Konsole",
        description: "Führe eine Rebellion gegen eine außerirdische Besatzung. Taktische Kämpfe, wo jede Entscheidung Leben oder Tod bedeutet."
    },
    {
        name: "Age of Empires IV",
        genre: "Real-Time Strategy",
        mood: "strategisch",
        time: "mittel",
        mode: "beide",
        platform: "PC",
        description: "Klassisches RTS-Gameplay neu aufgelegt. Baue deine Basis, sammle Ressourcen und führe deine Armee zum Sieg."
    },
    
    // Abenteuer Spiele
    {
        name: "Elden Ring",
        genre: "Action RPG",
        mood: "abenteuer",
        time: "lang",
        mode: "solo",
        platform: "PC, Konsole",
        description: "Erkunde eine riesige, gefährliche Open World von FromSoftware. Herausfordernd, belohnend und voller Geheimnisse."
    },
    {
        name: "Hades",
        genre: "Roguelike",
        mood: "abenteuer",
        time: "kurz",
        mode: "solo",
        platform: "PC, Konsole",
        description: "Kämpfe dich aus der griechischen Unterwelt. Jeder Run ist anders, die Story entfaltet sich mit jedem Tod weiter."
    },
    {
        name: "Zelda: Breath of the Wild",
        genre: "Action-Adventure",
        mood: "abenteuer",
        time: "lang",
        mode: "solo",
        platform: "Nintendo Switch",
        description: "Erkunde Hyrule in völliger Freiheit. Klettern, gleiten, kämpfen - eines der besten Open-World-Adventures aller Zeiten."
    },
    {
        name: "Hollow Knight",
        genre: "Metroidvania",
        mood: "abenteuer",
        time: "lang",
        mode: "solo",
        platform: "PC, Konsole",
        description: "Erkunde ein atmosphärisches Untergrundreich voller Geheimnisse. Präzises Platforming trifft auf herausfordernde Bosskämpfe."
    },
    
    // Weitere beliebte Spiele
    {
        name: "Grand Theft Auto V",
        genre: "Action-Adventure",
        mood: "chaotisch",
        time: "lang",
        mode: "beide",
        platform: "PC, Konsole",
        description: "Los Santos wartet auf dich. Story-Modus oder GTA Online - Chaos und Kriminalität in der offenen Welt von Los Santos."
    },
    {
        name: "Call of Duty: Modern Warfare",
        genre: "Shooter",
        mood: "kompetitiv",
        time: "kurz",
        mode: "multiplayer",
        platform: "PC, Konsole",
        description: "Schnelle Multiplayer-Action mit verschiedenen Modi. Reflexe und Map-Knowledge sind entscheidend."
    },
    {
        name: "Apex Legends",
        genre: "Battle Royale",
        mood: "kompetitiv",
        time: "kurz",
        mode: "multiplayer",
        platform: "PC, Konsole",
        description: "Squad-basiertes Battle Royale mit einzigartigen Legenden und Fähigkeiten. Bewegungsfreiheit und Teamplay im Fokus."
    }
];

/* ========================================
   DOM Elements
   ======================================== */

const moodSelect = document.getElementById('mood');
const timeSelect = document.getElementById('time');
const toggleButtons = document.querySelectorAll('.toggle-btn');
const suggestBtn = document.getElementById('suggestBtn');
const rerollBtn = document.getElementById('rerollBtn');
const resultSection = document.getElementById('result');
const noResultsSection = document.getElementById('noResults');

// Result elements
const gameName = document.getElementById('gameName');
const gameMode = document.getElementById('gameMode');
const gameGenre = document.getElementById('gameGenre');
const gameMood = document.getElementById('gameMood');
const gameTime = document.getElementById('gameTime');
const gamePlatform = document.getElementById('gamePlatform');
const gameDescription = document.getElementById('gameDescription');

/* ========================================
   State Management
   ======================================== */

let currentFilters = {
    mood: '',
    time: '',
    mode: 'alle'
};

let lastSuggestedGame = null;

/* ========================================
   Event Listeners
   ======================================== */

// Toggle Button Click Handler
toggleButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons
        toggleButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Update filter state
        currentFilters.mode = this.dataset.mode;
    });
});

// Filter Change Handlers
moodSelect.addEventListener('change', function() {
    currentFilters.mood = this.value;
});

timeSelect.addEventListener('change', function() {
    currentFilters.time = this.value;
});

// Suggest Button
suggestBtn.addEventListener('click', suggestGame);

// Reroll Button
rerollBtn.addEventListener('click', suggestGame);

// Load last game from localStorage on page load
window.addEventListener('DOMContentLoaded', loadLastGame);

/* ========================================
   Core Functions
   ======================================== */

/**
 * Filter games based on current filter settings
 * @returns {Array} Filtered games array
 */
function filterGames() {
    return gamesDatabase.filter(game => {
        // Check mood filter
        if (currentFilters.mood && game.mood !== currentFilters.mood) {
            return false;
        }
        
        // Check time filter
        if (currentFilters.time && game.time !== currentFilters.time) {
            return false;
        }
        
        // Check mode filter
        if (currentFilters.mode !== 'alle') {
            if (currentFilters.mode === 'solo' && game.mode !== 'solo' && game.mode !== 'beide') {
                return false;
            }
            if (currentFilters.mode === 'multiplayer' && game.mode !== 'multiplayer' && game.mode !== 'beide') {
                return false;
            }
        }
        
        return true;
    });
}

/**
 * Get a random game from filtered results
 * @param {Array} games - Filtered games array
 * @returns {Object|null} Random game or null
 */
function getRandomGame(games) {
    if (games.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * games.length);
    return games[randomIndex];
}

/**
 * Main function to suggest a game
 */
function suggestGame() {
    // Add animation to button
    animateButton(suggestBtn);
    
    // Filter games
    const filteredGames = filterGames();
    
    // Check if any games match
    if (filteredGames.length === 0) {
        showNoResults();
        return;
    }
    
    // Get random game
    const game = getRandomGame(filteredGames);
    
    // Display game
    displayGame(game);
    
    // Save to localStorage
    saveLastGame(game);
}

/**
 * Display the suggested game
 * @param {Object} game - Game object to display
 */
function displayGame(game) {
    // Hide no results section
    noResultsSection.classList.add('hidden');
    
    // Populate game data
    gameName.textContent = game.name;
    gameMode.textContent = getModeText(game.mode);
    gameGenre.textContent = game.genre;
    gameMood.textContent = getMoodText(game.mood);
    gameTime.textContent = getTimeText(game.time);
    gamePlatform.textContent = game.platform;
    gameDescription.textContent = game.description;
    
    // Show result section with animation
    resultSection.classList.remove('hidden');
    resultSection.style.animation = 'none';
    setTimeout(() => {
        resultSection.style.animation = 'fadeInUp 0.6s ease';
    }, 10);
    
    // Scroll to result
    setTimeout(() => {
        resultSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
}

/**
 * Show no results message
 */
function showNoResults() {
    resultSection.classList.add('hidden');
    noResultsSection.classList.remove('hidden');
    noResultsSection.style.animation = 'none';
    setTimeout(() => {
        noResultsSection.style.animation = 'fadeInUp 0.6s ease';
    }, 10);
}

/**
 * Animate button on click
 * @param {HTMLElement} button - Button element to animate
 */
function animateButton(button) {
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
        button.style.transform = '';
    }, 150);
}

/* ========================================
   Helper Functions
   ======================================== */

/**
 * Convert mode value to display text
 * @param {string} mode - Mode value
 * @returns {string} Display text
 */
function getModeText(mode) {
    const modeMap = {
        'solo': '👤 Solo',
        'multiplayer': '👥 Multiplayer',
        'beide': '👤👥 Solo & Multiplayer'
    };
    return modeMap[mode] || mode;
}

/**
 * Convert mood value to display text
 * @param {string} mood - Mood value
 * @returns {string} Display text
 */
function getMoodText(mood) {
    const moodMap = {
        'entspannt': '😌 Entspannt',
        'kompetitiv': '🏆 Kompetitiv',
        'kreativ': '🎨 Kreativ',
        'storylastig': '📖 Storylastig',
        'chaotisch': '🎉 Chaotisch',
        'horror': '👻 Horror',
        'strategisch': '🧠 Strategisch',
        'abenteuer': '⚔️ Abenteuer'
    };
    return moodMap[mood] || mood;
}

/**
 * Convert time value to display text
 * @param {string} time - Time value
 * @returns {string} Display text
 */
function getTimeText(time) {
    const timeMap = {
        'kurz': '⚡ 15-30 Minuten',
        'mittel': '⏱️ ~1 Stunde',
        'lang': '🕐 2+ Stunden'
    };
    return timeMap[time] || time;
}

/* ========================================
   LocalStorage Functions
   ======================================== */

/**
 * Save last suggested game to localStorage
 * @param {Object} game - Game object to save
 */
function saveLastGame(game) {
    try {
        localStorage.setItem('lastGame', JSON.stringify(game));
        lastSuggestedGame = game;
    } catch (error) {
        console.warn('Could not save to localStorage:', error);
    }
}

/**
 * Load last suggested game from localStorage
 */
function loadLastGame() {
    try {
        const saved = localStorage.getItem('lastGame');
        if (saved) {
            lastSuggestedGame = JSON.parse(saved);
            // Optionally display it on page load
            // displayGame(lastSuggestedGame);
        }
    } catch (error) {
        console.warn('Could not load from localStorage:', error);
    }
}

/* ========================================
   Random Background Color (Bonus Feature)
   ======================================== */

/**
 * Generate random gradient for background
 * Called on page load for variety
 */
function randomizeBackground() {
    const colors = [
        ['#8b5cf6', '#ec4899'],
        ['#06b6d4', '#8b5cf6'],
        ['#f59e0b', '#ec4899'],
        ['#10b981', '#06b6d4'],
        ['#ef4444', '#f59e0b']
    ];
    
    const randomPair = colors[Math.floor(Math.random() * colors.length)];
    document.documentElement.style.setProperty('--primary', randomPair[0]);
    document.documentElement.style.setProperty('--secondary', randomPair[1]);
}

// Uncomment to enable random background on load
// randomizeBackground();

/* ========================================
   Console Easter Egg
   ======================================== */

console.log(
    '%c🎮 Was zock ich heute? 🎮',
    'font-size: 20px; font-weight: bold; color: #8b5cf6;'
);
console.log(
    '%cGefällt dir die Seite? Schau dir den Code auf GitHub an!',
    'font-size: 14px; color: #a0a0b8;'
);
console.log(
    '%cTipp: In der Konsole kannst du gamesDatabase eingeben, um alle Spiele zu sehen!',
    'font-size: 12px; color: #22d3ee;'
);
