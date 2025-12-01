// ===== Math Adventure - Game Logic with User Management =====

// ===== Internationalization (i18n) =====
let currentLanguage = 'sq';

const translations = {
    en: {
        // App title and main
        appTitle: 'Math Adventure!',
        funMathForKids: 'Fun Math for Kids!',
        whoIsPlaying: "Who's playing today?",
        addNewPlayer: 'Add New Player',
        managePlayers: 'Manage Players',

        // Registration
        createProfile: 'Create Your Profile!',
        letsGetSetup: "Let's get you set up for learning!",
        whatsYourName: "What's your name?",
        enterName: 'Enter your name...',
        pickAvatar: 'Pick your avatar!',
        selectGradeLevels: 'Select your grade levels:',
        canChooseMultiple: 'You can choose one or more!',
        selectAllGrades: 'Select All Grades',
        createProfileBtn: 'Create Profile',
        selectLanguage: 'Choose your language:',

        // Grade levels
        grade: 'Grade',
        grades: 'Grades',
        gradeOrdinal: { 1: '1st', 2: '2nd', 3: '3rd', 4: '4th' },
        gradeDescriptions: {
            1: 'Numbers 1-20, Simple Addition',
            2: 'Numbers to 100, Add & Subtract',
            3: 'Multiplication & Division',
            4: 'Fractions & Word Problems'
        },

        // Edit profile
        editProfile: 'Edit Profile',
        name: 'Name',
        avatar: 'Avatar',
        gradeLevels: 'Grade Levels',
        saveChanges: 'Save Changes',

        // Manage users
        managePlayersTitle: 'Manage Players',
        editOrRemove: 'Edit or remove player profiles',
        noPlayersToManage: 'No players to manage.',
        games: 'Games',

        // Delete modal
        deletePlayer: 'Delete Player?',
        deleteConfirm: "Are you sure you want to delete this player? This cannot be undone.",
        yesDelete: 'Yes, Delete',
        cancel: 'Cancel',

        // Welcome screen
        welcomeBack: 'Welcome back,',
        yourProgress: 'Your Progress',
        totalGames: 'Games',
        totalStars: 'Total Stars',
        bestStreak: 'Best Streak',
        collectedPrizes: 'Collected Prizes',
        startAdventure: 'Start Adventure!',
        switchPlayer: 'Switch Player',

        // Grade selection
        chooseLevel: 'Choose Your Level!',
        pickLevel: 'Pick the level you want to practice',

        // Game mode selection
        chooseGame: 'Choose Your Game!',
        fillTheGap: 'Fill the Gap',
        fillTheGapDesc: 'Find the missing number!',
        quickQuiz: 'Quick Quiz',
        quickQuizDesc: 'Answer as fast as you can!',
        matchGame: 'Match Game',
        matchGameDesc: 'Match problems with answers!',
        bubblePop: 'Bubble Pop',
        bubblePopDesc: 'Pop the right answer!',
        speedChallenge: 'Speed Challenge',
        speedChallengeDesc: 'How many can you solve?',
        memoryMatch: 'Memory Match',
        memoryMatchDesc: 'Find matching pairs!',
        numberOrder: 'Number Order',
        numberOrderDesc: 'Sort the numbers!',
        trueFalse: 'True or False',
        trueFalseDesc: 'Is the equation correct?',
        true: 'True',
        false: 'False',
        sortAscending: 'Sort smallest to largest',
        sortDescending: 'Sort largest to smallest',
        timeUp: 'Time is up!',
        questionsAnswered: 'Questions Answered',

        // Game screen
        back: 'Back',
        checkAnswer: 'Check Answer!',
        questionOf: 'Question {current} of {total}',
        prizes: 'Prizes:',

        // Character speech
        letsDoThis: "Let's do this!",
        encouragement: [
            "You've got this! 💪",
            "Keep going! 🌟",
            "Almost there! 🎯",
            "You're doing great! 🎉",
            "Fantastic! ✨",
            "Way to go! 🚀"
        ],
        correct: [
            "Excellent! 🎉",
            "Perfect! ⭐",
            "Amazing! 🌟",
            "Brilliant! 💫",
            "Superstar! 🏆",
            "Wonderful! 🎊"
        ],
        incorrect: [
            "Try again! 💪",
            "Almost! 🤔",
            "Keep trying! 🌈",
            "You can do it! ⭐",
            "Don't give up! 🎯"
        ],
        streak: [
            "On fire! 🔥",
            "Unstoppable! 💥",
            "Incredible streak! ⚡",
            "Math wizard! 🧙‍♂️"
        ],

        // Feedback
        correctFeedback: ['Correct!', 'Awesome!', 'Perfect!', 'Great job!'],
        answerWas: 'The answer was {answer}',

        // Prize popup
        youWonPrize: 'YOU WON A PRIZE!',
        bonusPoints: '+{points} bonus points!',
        inARow: '{count} in a row!',
        prizesWon: 'Prizes Won!',

        // Prize names
        prizeNames: {
            'Gift Box': 'Gift Box',
            'Lollipop': 'Lollipop',
            'Cookie': 'Cookie',
            'Teddy Bear': 'Teddy Bear',
            'Balloon': 'Balloon',
            'Ice Cream': 'Ice Cream',
            'Ribbon': 'Ribbon',
            'Golden Star': 'Golden Star',
            'Medal': 'Medal',
            'Circus Ticket': 'Circus Ticket',
            'Butterfly': 'Butterfly',
            'Rainbow': 'Rainbow',
            'Paint Set': 'Paint Set',
            'Game Controller': 'Game Controller',
            'Storybook': 'Storybook',
            'Puzzle Piece': 'Puzzle Piece',
            'Music Note': 'Music Note',
            'Rocket Ship': 'Rocket Ship',
            'Crown': 'Crown',
            'Diamond': 'Diamond'
        },

        // Results screen
        amazingJob: 'Amazing Job!',
        goodTry: 'Good Try!',
        keepPracticing: 'Keep Practicing!',
        score: 'Score',
        correctLabel: 'Correct',
        playAgain: 'Play Again',
        differentGame: 'Different Game',
        home: 'Home',

        // Achievements
        perfectScore: 'Perfect Score!',
        hotStreak: 'Hot Streak!',
        mathStar: 'Math Star!',
        flawless: 'Flawless!',
        prizeCollector: 'Prize Collector!',

        // Fraction problems
        whichIsBigger: 'Which is bigger: {f1} or {f2}?',

        // Validation
        pleaseEnterName: 'Please enter your name!',
        pleaseSelectGrade: 'Please select at least one grade level!',
        noPlayersYet: 'No players yet! Click below to add your first player.',

        // PIN related
        createPin: 'Create a 4-digit PIN:',
        pinHint: 'This keeps your profile private!',
        enterPin: 'Enter your PIN:',
        wrongPin: 'Wrong PIN! Try again.',
        changePin: 'Change PIN:',
        changePinHint: 'Leave empty to keep current PIN',
        pleaseEnterPin: 'Please enter a 4-digit PIN!'
    },
    de: {
        // App title and main
        appTitle: 'Mathe-Abenteuer!',
        funMathForKids: 'Mathe-Spaß für Kinder!',
        whoIsPlaying: 'Wer spielt heute?',
        addNewPlayer: 'Neuen Spieler hinzufügen',
        managePlayers: 'Spieler verwalten',

        // Registration
        createProfile: 'Erstelle dein Profil!',
        letsGetSetup: 'Lass uns alles einrichten!',
        whatsYourName: 'Wie heißt du?',
        enterName: 'Gib deinen Namen ein...',
        pickAvatar: 'Wähle deinen Avatar!',
        selectGradeLevels: 'Wähle deine Klassenstufen:',
        canChooseMultiple: 'Du kannst eine oder mehrere wählen!',
        selectAllGrades: 'Alle Klassen auswählen',
        createProfileBtn: 'Profil erstellen',
        selectLanguage: 'Wähle deine Sprache:',

        // Grade levels
        grade: 'Klasse',
        grades: 'Klassen',
        gradeOrdinal: { 1: '1.', 2: '2.', 3: '3.', 4: '4.' },
        gradeDescriptions: {
            1: 'Zahlen 1-20, Einfache Addition',
            2: 'Zahlen bis 100, Addieren & Subtrahieren',
            3: 'Multiplikation & Division',
            4: 'Brüche & Textaufgaben'
        },

        // Edit profile
        editProfile: 'Profil bearbeiten',
        name: 'Name',
        avatar: 'Avatar',
        gradeLevels: 'Klassenstufen',
        saveChanges: 'Änderungen speichern',

        // Manage users
        managePlayersTitle: 'Spieler verwalten',
        editOrRemove: 'Spielerprofile bearbeiten oder entfernen',
        noPlayersToManage: 'Keine Spieler zum Verwalten.',
        games: 'Spiele',

        // Delete modal
        deletePlayer: 'Spieler löschen?',
        deleteConfirm: 'Bist du sicher, dass du diesen Spieler löschen möchtest? Das kann nicht rückgängig gemacht werden.',
        yesDelete: 'Ja, löschen',
        cancel: 'Abbrechen',

        // Welcome screen
        welcomeBack: 'Willkommen zurück,',
        yourProgress: 'Dein Fortschritt',
        totalGames: 'Spiele',
        totalStars: 'Sterne gesamt',
        bestStreak: 'Beste Serie',
        collectedPrizes: 'Gesammelte Preise',
        startAdventure: 'Abenteuer starten!',
        switchPlayer: 'Spieler wechseln',

        // Grade selection
        chooseLevel: 'Wähle dein Level!',
        pickLevel: 'Wähle das Level zum Üben',

        // Game mode selection
        chooseGame: 'Wähle dein Spiel!',
        fillTheGap: 'Lücke füllen',
        fillTheGapDesc: 'Finde die fehlende Zahl!',
        quickQuiz: 'Schnelles Quiz',
        quickQuizDesc: 'Antworte so schnell du kannst!',
        matchGame: 'Zuordnungsspiel',
        matchGameDesc: 'Ordne Aufgaben den Lösungen zu!',
        bubblePop: 'Blasen platzen',
        bubblePopDesc: 'Platze die richtige Antwort!',
        speedChallenge: 'Schnelligkeitstest',
        speedChallengeDesc: 'Wie viele schaffst du?',
        memoryMatch: 'Memory-Spiel',
        memoryMatchDesc: 'Finde passende Paare!',
        numberOrder: 'Zahlen ordnen',
        numberOrderDesc: 'Sortiere die Zahlen!',
        trueFalse: 'Wahr oder Falsch',
        trueFalseDesc: 'Stimmt die Gleichung?',
        true: 'Wahr',
        false: 'Falsch',
        sortAscending: 'Sortiere von klein nach groß',
        sortDescending: 'Sortiere von groß nach klein',
        timeUp: 'Zeit ist um!',
        questionsAnswered: 'Beantwortete Fragen',

        // Game screen
        back: 'Zurück',
        checkAnswer: 'Antwort prüfen!',
        questionOf: 'Frage {current} von {total}',
        prizes: 'Preise:',

        // Character speech
        letsDoThis: 'Los geht\'s!',
        encouragement: [
            "Du schaffst das! 💪",
            "Weiter so! 🌟",
            "Fast geschafft! 🎯",
            "Du machst das toll! 🎉",
            "Fantastisch! ✨",
            "Super gemacht! 🚀"
        ],
        correct: [
            "Ausgezeichnet! 🎉",
            "Perfekt! ⭐",
            "Toll! 🌟",
            "Brillant! 💫",
            "Superstar! 🏆",
            "Wunderbar! 🎊"
        ],
        incorrect: [
            "Versuch's nochmal! 💪",
            "Fast! 🤔",
            "Weiter versuchen! 🌈",
            "Du schaffst es! ⭐",
            "Gib nicht auf! 🎯"
        ],
        streak: [
            "Auf Feuer! 🔥",
            "Nicht zu stoppen! 💥",
            "Unglaubliche Serie! ⚡",
            "Mathe-Zauberer! 🧙‍♂️"
        ],

        // Feedback
        correctFeedback: ['Richtig!', 'Super!', 'Perfekt!', 'Gut gemacht!'],
        answerWas: 'Die Antwort war {answer}',

        // Prize popup
        youWonPrize: 'DU HAST EINEN PREIS GEWONNEN!',
        bonusPoints: '+{points} Bonuspunkte!',
        inARow: '{count} hintereinander!',
        prizesWon: 'Gewonnene Preise!',

        // Prize names
        prizeNames: {
            'Gift Box': 'Geschenkbox',
            'Lollipop': 'Lutscher',
            'Cookie': 'Keks',
            'Teddy Bear': 'Teddybär',
            'Balloon': 'Luftballon',
            'Ice Cream': 'Eiscreme',
            'Ribbon': 'Schleife',
            'Golden Star': 'Goldener Stern',
            'Medal': 'Medaille',
            'Circus Ticket': 'Zirkuskarte',
            'Butterfly': 'Schmetterling',
            'Rainbow': 'Regenbogen',
            'Paint Set': 'Malset',
            'Game Controller': 'Spielcontroller',
            'Storybook': 'Geschichtenbuch',
            'Puzzle Piece': 'Puzzleteil',
            'Music Note': 'Musiknote',
            'Rocket Ship': 'Rakete',
            'Crown': 'Krone',
            'Diamond': 'Diamant'
        },

        // Results screen
        amazingJob: 'Toll gemacht!',
        goodTry: 'Guter Versuch!',
        keepPracticing: 'Weiter üben!',
        score: 'Punkte',
        correctLabel: 'Richtig',
        playAgain: 'Nochmal spielen',
        differentGame: 'Anderes Spiel',
        home: 'Startseite',

        // Achievements
        perfectScore: 'Perfekte Punktzahl!',
        hotStreak: 'Heiße Serie!',
        mathStar: 'Mathe-Star!',
        flawless: 'Fehlerlos!',
        prizeCollector: 'Preissammler!',

        // Fraction problems
        whichIsBigger: 'Was ist größer: {f1} oder {f2}?',

        // Validation
        pleaseEnterName: 'Bitte gib deinen Namen ein!',
        pleaseSelectGrade: 'Bitte wähle mindestens eine Klassenstufe!',
        noPlayersYet: 'Noch keine Spieler! Klicke unten, um deinen ersten Spieler hinzuzufügen.',

        // PIN related
        createPin: 'Erstelle eine 4-stellige PIN:',
        pinHint: 'Das hält dein Profil privat!',
        enterPin: 'Gib deine PIN ein:',
        wrongPin: 'Falsche PIN! Versuche es erneut.',
        changePin: 'PIN ändern:',
        changePinHint: 'Leer lassen, um aktuelle PIN zu behalten',
        pleaseEnterPin: 'Bitte gib eine 4-stellige PIN ein!'
    },
    sq: {
        // App title and main
        appTitle: 'Aventura e Matematikës!',
        funMathForKids: 'Matematikë Argëtuese për Fëmijë!',
        whoIsPlaying: 'Kush po luan sot?',
        addNewPlayer: 'Shto Lojtar të Ri',
        managePlayers: 'Menaxho Lojtarët',

        // Registration
        createProfile: 'Krijo Profilin Tënd!',
        letsGetSetup: 'Le të të përgatisim për të mësuar!',
        whatsYourName: 'Si të quajnë?',
        enterName: 'Shkruaj emrin tënd...',
        pickAvatar: 'Zgjidh avatarin tënd!',
        selectGradeLevels: 'Zgjidh klasën tënde:',
        canChooseMultiple: 'Mund të zgjedhësh një ose më shumë!',
        selectAllGrades: 'Zgjidh të Gjitha Klasat',
        createProfileBtn: 'Krijo Profilin',
        selectLanguage: 'Zgjidh gjuhën tënde:',

        // Grade levels
        grade: 'Klasa',
        grades: 'Klasat',
        gradeOrdinal: { 1: 'e 1-rë', 2: 'e 2-të', 3: 'e 3-të', 4: 'e 4-të' },
        gradeDescriptions: {
            1: 'Numrat 1-20, Mbledhje e Thjeshtë',
            2: 'Numrat deri në 100, Mbledh & Zbrit',
            3: 'Shumëzim & Pjesëtim',
            4: 'Thyesa & Probleme me Fjalë'
        },

        // Edit profile
        editProfile: 'Ndrysho Profilin',
        name: 'Emri',
        avatar: 'Avatari',
        gradeLevels: 'Nivelet e Klasës',
        saveChanges: 'Ruaj Ndryshimet',

        // Manage users
        managePlayersTitle: 'Menaxho Lojtarët',
        editOrRemove: 'Ndrysho ose fshi profilet e lojtarëve',
        noPlayersToManage: 'Nuk ka lojtarë për të menaxhuar.',
        games: 'Lojëra',

        // Delete modal
        deletePlayer: 'Fshi Lojtarin?',
        deleteConfirm: 'Je i sigurt që dëshiron të fshish këtë lojtar? Kjo nuk mund të zhbëhet.',
        yesDelete: 'Po, Fshije',
        cancel: 'Anulo',

        // Welcome screen
        welcomeBack: 'Mirësevjen përsëri,',
        yourProgress: 'Progresi Yt',
        totalGames: 'Lojëra',
        totalStars: 'Yje Gjithsej',
        bestStreak: 'Seria më e Mirë',
        collectedPrizes: 'Çmimet e Mbledhura',
        startAdventure: 'Fillo Aventurën!',
        switchPlayer: 'Ndrysho Lojtarin',

        // Grade selection
        chooseLevel: 'Zgjidh Nivelin Tënd!',
        pickLevel: 'Zgjidh nivelin që dëshiron të praktikosh',

        // Game mode selection
        chooseGame: 'Zgjidh Lojën Tënde!',
        fillTheGap: 'Plotëso Boshllëkun',
        fillTheGapDesc: 'Gjej numrin që mungon!',
        quickQuiz: 'Kuiz i Shpejtë',
        quickQuizDesc: 'Përgjigju sa më shpejt!',
        matchGame: 'Loja e Përputhjes',
        matchGameDesc: 'Përputh problemet me përgjigjet!',
        bubblePop: 'Plasni Flluska',
        bubblePopDesc: 'Plasni përgjigjen e saktë!',
        speedChallenge: 'Sfida e Shpejtësisë',
        speedChallengeDesc: 'Sa mund të zgjidhësh?',
        memoryMatch: 'Loja e Kujtesës',
        memoryMatchDesc: 'Gjej çiftet përkatëse!',
        numberOrder: 'Radhit Numrat',
        numberOrderDesc: 'Radhit numrat!',
        trueFalse: 'E Vërtetë apo e Gabuar',
        trueFalseDesc: 'A është ekuacioni i saktë?',
        true: 'E Vërtetë',
        false: 'E Gabuar',
        sortAscending: 'Radhit nga më i vogli te më i madhi',
        sortDescending: 'Radhit nga më i madhi te më i vogli',
        timeUp: 'Koha mbaroi!',
        questionsAnswered: 'Pyetje të Përgjiguara',

        // Game screen
        back: 'Kthehu',
        checkAnswer: 'Kontrollo Përgjigjen!',
        questionOf: 'Pyetja {current} nga {total}',
        prizes: 'Çmimet:',

        // Character speech
        letsDoThis: 'Le ta bëjmë!',
        encouragement: [
            "Ti mundesh! 💪",
            "Vazhdo kështu! 🌟",
            "Pothuajse! 🎯",
            "Po ia del shkëlqyer! 🎉",
            "Fantastike! ✨",
            "Bravo! 🚀"
        ],
        correct: [
            "Shkëlqyeshëm! 🎉",
            "Perfekt! ⭐",
            "Mahnitëse! 🌟",
            "Brilante! 💫",
            "Yll! 🏆",
            "Mrekullueshëm! 🎊"
        ],
        incorrect: [
            "Provo përsëri! 💪",
            "Pothuajse! 🤔",
            "Vazhdo të provosh! 🌈",
            "Ti mundesh! ⭐",
            "Mos u dorëzo! 🎯"
        ],
        streak: [
            "Në zjarr! 🔥",
            "I pandalshëm! 💥",
            "Seri e pabesueshme! ⚡",
            "Magjistar i matematikës! 🧙‍♂️"
        ],

        // Feedback
        correctFeedback: ['Saktë!', 'Super!', 'Perfekt!', 'Punë e mirë!'],
        answerWas: 'Përgjigja ishte {answer}',

        // Prize popup
        youWonPrize: 'FITOVE NJË ÇMIM!',
        bonusPoints: '+{points} pikë bonus!',
        inARow: '{count} radhazi!',
        prizesWon: 'Çmimet e Fituara!',

        // Prize names
        prizeNames: {
            'Gift Box': 'Kuti Dhurate',
            'Lollipop': 'Lëpirëse',
            'Cookie': 'Biskotë',
            'Teddy Bear': 'Ariu Pelush',
            'Balloon': 'Tullumbace',
            'Ice Cream': 'Akullore',
            'Ribbon': 'Fjongo',
            'Golden Star': 'Yll i Artë',
            'Medal': 'Medalje',
            'Circus Ticket': 'Biletë Cirku',
            'Butterfly': 'Flutur',
            'Rainbow': 'Ylber',
            'Paint Set': 'Set Bojërash',
            'Game Controller': 'Kontrollues Loje',
            'Storybook': 'Libër Tregimesh',
            'Puzzle Piece': 'Copë Puzzle',
            'Music Note': 'Notë Muzikore',
            'Rocket Ship': 'Raketë',
            'Crown': 'Kurorë',
            'Diamond': 'Diamant'
        },

        // Results screen
        amazingJob: 'Punë e Shkëlqyer!',
        goodTry: 'Provim i Mirë!',
        keepPracticing: 'Vazhdo të Praktikosh!',
        score: 'Pikët',
        correctLabel: 'Saktë',
        playAgain: 'Luaj Përsëri',
        differentGame: 'Lojë Tjetër',
        home: 'Ballina',

        // Achievements
        perfectScore: 'Pikë Perfekte!',
        hotStreak: 'Seri e Nxehtë!',
        mathStar: 'Yll Matematike!',
        flawless: 'Pa Gabime!',
        prizeCollector: 'Mbledhës Çmimesh!',

        // Fraction problems
        whichIsBigger: 'Cila është më e madhe: {f1} apo {f2}?',

        // Validation
        pleaseEnterName: 'Ju lutem shkruani emrin tuaj!',
        pleaseSelectGrade: 'Ju lutem zgjidhni të paktën një nivel klase!',
        noPlayersYet: 'Ende pa lojtarë! Klikoni më poshtë për të shtuar lojtarin e parë.',

        // PIN related
        createPin: 'Krijo një PIN 4-shifror:',
        pinHint: 'Kjo e mban profilin tënd privat!',
        enterPin: 'Shkruaj PIN-in tënd:',
        wrongPin: 'PIN i gabuar! Provo përsëri.',
        changePin: 'Ndrysho PIN:',
        changePinHint: 'Lëre bosh për të mbajtur PIN-in aktual',
        pleaseEnterPin: 'Ju lutem shkruani një PIN 4-shifror!'
    }
};

// Get translation helper
function t(key, replacements = {}) {
    let text = translations[currentLanguage][key] || translations['en'][key] || key;

    // Handle replacements like {count}, {answer}, etc.
    for (const [placeholder, value] of Object.entries(replacements)) {
        text = text.replace(`{${placeholder}}`, value);
    }

    return text;
}

// Get array translation (for random messages)
function tArray(key) {
    return translations[currentLanguage][key] || translations['en'][key] || [];
}

// Get nested translation
function tNested(key, subKey) {
    const obj = translations[currentLanguage][key] || translations['en'][key];
    return obj ? obj[subKey] : subKey;
}

// Set language and update UI
function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('mathAdventureLanguage', lang);
    updateAllTranslations();
    updateHomeLangButtons();
}

// Update home language toggle button states
function updateHomeLangButtons() {
    document.querySelectorAll('.home-lang-toggle .lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === currentLanguage);
    });
}

// Load saved language
function loadLanguage() {
    const saved = localStorage.getItem('mathAdventureLanguage');
    if (saved && translations[saved]) {
        currentLanguage = saved;
    }
}

// Update all UI translations
function updateAllTranslations() {
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = t(key);
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.placeholder = t(key);
    });

    // Update titles
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        el.title = t(key);
    });

    // Update grade ordinals (1st, 2nd, 3rd, 4th -> 1., 2., 3., 4.)
    document.querySelectorAll('[data-i18n-grade]').forEach(el => {
        const gradeNum = el.getAttribute('data-i18n-grade');
        el.textContent = tNested('gradeOrdinal', gradeNum);
    });

    // Update page title
    document.title = t('appTitle') + ' - Fun Learning for Kids!';
}

// Available Avatars
const avatars = [
    '🦊', '🐰', '🐼', '🦁', '🐯', '🐨',
    '🐸', '🦄', '🐲', '🦋', '🐝', '🐢',
    '🐙', '🦀', '🐳', '🐬', '🦜', '🦩',
    '🦉', '🐺', '🐻', '🐮', '🐷', '🐵'
];

// User Management
let users = [];
let currentUser = null;
let deleteTargetId = null;
let pinLoginUserId = null; // User ID attempting to login with PIN

// ===== PIN Hashing =====
// Hash a PIN using SHA-256 for secure storage
async function hashPin(pin) {
    if (!pin) return null;

    // Add a salt to make rainbow table attacks harder
    const salt = 'MathAdventure2024';
    const data = new TextEncoder().encode(salt + pin);

    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    return hashHex;
}

// Verify a PIN against a stored hash
async function verifyPinHash(enteredPin, storedHash) {
    if (!enteredPin || !storedHash) return false;

    const enteredHash = await hashPin(enteredPin);
    return enteredHash === storedHash;
}

// Game State
const gameState = {
    grade: 1,
    mode: 'fill-blank',
    score: 0,
    streak: 0,
    bestStreak: 0,
    lives: 5,
    currentQuestion: 0,
    totalQuestions: 10,
    correctAnswers: 0,
    timeLeft: 60,
    timerInterval: null,
    soundEnabled: true,
    problems: [],
    matchState: {
        selectedProblem: null,
        selectedAnswer: null,
        matched: []
    },
    prizes: [], // Prizes won during the game
    lastPrizeStreak: 0 // Track when last prize was given
};

// Available Prizes - kids win these every 3 correct answers in a row!
// Names are keys that get translated
const prizes = [
    { emoji: '🎁', nameKey: 'Gift Box', points: 15 },
    { emoji: '🍭', nameKey: 'Lollipop', points: 10 },
    { emoji: '🍪', nameKey: 'Cookie', points: 10 },
    { emoji: '🧸', nameKey: 'Teddy Bear', points: 20 },
    { emoji: '🎈', nameKey: 'Balloon', points: 10 },
    { emoji: '🍦', nameKey: 'Ice Cream', points: 15 },
    { emoji: '🎀', nameKey: 'Ribbon', points: 10 },
    { emoji: '🌟', nameKey: 'Golden Star', points: 25 },
    { emoji: '🏅', nameKey: 'Medal', points: 20 },
    { emoji: '🎪', nameKey: 'Circus Ticket', points: 15 },
    { emoji: '🦋', nameKey: 'Butterfly', points: 10 },
    { emoji: '🌈', nameKey: 'Rainbow', points: 20 },
    { emoji: '🎨', nameKey: 'Paint Set', points: 15 },
    { emoji: '🎮', nameKey: 'Game Controller', points: 25 },
    { emoji: '📚', nameKey: 'Storybook', points: 15 },
    { emoji: '🧩', nameKey: 'Puzzle Piece', points: 10 },
    { emoji: '🎵', nameKey: 'Music Note', points: 10 },
    { emoji: '🚀', nameKey: 'Rocket Ship', points: 20 },
    { emoji: '👑', nameKey: 'Crown', points: 30 },
    { emoji: '💎', nameKey: 'Diamond', points: 30 }
];

// Get translated prize name
function getPrizeName(nameKey) {
    return tNested('prizeNames', nameKey);
}

// Grade Level Configurations
const gradeConfig = {
    1: {
        addition: { min: 1, max: 10 },
        subtraction: { min: 1, max: 10 },
        operations: ['addition'],
        timeBonus: 3
    },
    2: {
        addition: { min: 1, max: 50 },
        subtraction: { min: 1, max: 30 },
        operations: ['addition', 'subtraction'],
        timeBonus: 2
    },
    3: {
        addition: { min: 10, max: 100 },
        subtraction: { min: 10, max: 50 },
        multiplication: { min: 1, max: 10 },
        division: { min: 1, max: 10 },
        operations: ['addition', 'subtraction', 'multiplication', 'division'],
        timeBonus: 2
    },
    4: {
        addition: { min: 50, max: 500 },
        subtraction: { min: 20, max: 200 },
        multiplication: { min: 2, max: 12 },
        division: { min: 2, max: 12 },
        fractions: true,
        operations: ['addition', 'subtraction', 'multiplication', 'division', 'fractions'],
        timeBonus: 1
    }
};

// Get speech message (now uses translations)
function getSpeech(type) {
    const messages = tArray(type);
    return messages[Math.floor(Math.random() * messages.length)];
}

// DOM Elements
const screens = {
    login: document.getElementById('login-screen'),
    register: document.getElementById('register-screen'),
    edit: document.getElementById('edit-screen'),
    manage: document.getElementById('manage-screen'),
    welcome: document.getElementById('welcome-screen'),
    grade: document.getElementById('grade-screen'),
    mode: document.getElementById('mode-screen'),
    game: document.getElementById('game-screen'),
    results: document.getElementById('results-screen')
};

// Initialize the game
function init() {
    loadLanguage();
    loadUsers();
    renderAvatarGrids();
    renderLanguageSelector();
    setupEventListeners();
    setupPinInputs();
    renderUserProfiles();
    updateSoundToggle();
    updateAllTranslations();
    updateHomeLangButtons();
}

// Setup PIN input behavior for all PIN containers
function setupPinInputs() {
    const pinContainers = document.querySelectorAll('.pin-input-container');

    pinContainers.forEach(container => {
        const inputs = container.querySelectorAll('.pin-digit');
        const hiddenInput = container.nextElementSibling;

        inputs.forEach((input, index) => {
            // Handle input
            input.addEventListener('input', (e) => {
                const value = e.target.value.replace(/[^0-9]/g, '');
                e.target.value = value;

                if (value) {
                    e.target.classList.add('filled');
                    // Move to next input
                    if (index < inputs.length - 1) {
                        inputs[index + 1].focus();
                    }
                } else {
                    e.target.classList.remove('filled');
                }

                // Update hidden input with combined PIN
                updatePinValue(container, hiddenInput);

                // Check if PIN is complete (for verification modal)
                if (container.id === 'pin-verify-container') {
                    const pin = getPinFromContainer(container);
                    if (pin.length === 4) {
                        verifyPin(pin);
                    }
                }
            });

            // Handle backspace
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Backspace' && !e.target.value && index > 0) {
                    inputs[index - 1].focus();
                    inputs[index - 1].value = '';
                    inputs[index - 1].classList.remove('filled');
                    updatePinValue(container, hiddenInput);
                }
            });

            // Handle paste
            input.addEventListener('paste', (e) => {
                e.preventDefault();
                const pastedData = e.clipboardData.getData('text').replace(/[^0-9]/g, '').slice(0, 4);

                pastedData.split('').forEach((digit, i) => {
                    if (inputs[i]) {
                        inputs[i].value = digit;
                        inputs[i].classList.add('filled');
                    }
                });

                updatePinValue(container, hiddenInput);

                // Focus last filled or next empty
                const nextIndex = Math.min(pastedData.length, inputs.length - 1);
                inputs[nextIndex].focus();

                // Check if complete for verification
                if (container.id === 'pin-verify-container' && pastedData.length === 4) {
                    verifyPin(pastedData);
                }
            });

            // Only allow numbers
            input.addEventListener('keypress', (e) => {
                if (!/[0-9]/.test(e.key)) {
                    e.preventDefault();
                }
            });
        });
    });
}

// Get PIN value from a container
function getPinFromContainer(container) {
    const inputs = container.querySelectorAll('.pin-digit');
    let pin = '';
    inputs.forEach(input => {
        pin += input.value;
    });
    return pin;
}

// Update hidden input with PIN value
function updatePinValue(container, hiddenInput) {
    if (hiddenInput) {
        hiddenInput.value = getPinFromContainer(container);
    }
}

// Clear PIN inputs in a container
function clearPinInputs(container) {
    const inputs = container.querySelectorAll('.pin-digit');
    inputs.forEach(input => {
        input.value = '';
        input.classList.remove('filled', 'error', 'success');
    });
    const hiddenInput = container.nextElementSibling;
    if (hiddenInput && hiddenInput.type === 'hidden') {
        hiddenInput.value = '';
    }
}

// Show PIN error animation
function showPinError(container) {
    const inputs = container.querySelectorAll('.pin-digit');
    inputs.forEach(input => {
        input.classList.add('error');
    });

    setTimeout(() => {
        inputs.forEach(input => {
            input.classList.remove('error');
            input.value = '';
            input.classList.remove('filled');
        });
        inputs[0].focus();
    }, 600);
}

// Show PIN success animation
function showPinSuccess(container) {
    const inputs = container.querySelectorAll('.pin-digit');
    inputs.forEach(input => {
        input.classList.add('success');
    });
}

// Render language selector in registration form
function renderLanguageSelector() {
    const regLangSelector = document.getElementById('reg-language');
    const editLangSelector = document.getElementById('edit-language');

    [regLangSelector, editLangSelector].forEach(selector => {
        if (selector) {
            selector.innerHTML = `
                <option value="sq" ${currentLanguage === 'sq' ? 'selected' : ''}>🇦🇱 Shqip</option>
                <option value="en" ${currentLanguage === 'en' ? 'selected' : ''}>🇬🇧 English</option>
                <option value="de" ${currentLanguage === 'de' ? 'selected' : ''}>🇩🇪 Deutsch</option>
            `;

            // Add change listener to update UI when language is selected
            selector.addEventListener('change', (e) => {
                setLanguage(e.target.value);
                playSound('click');
            });
        }
    });
}

// ===== User Management =====
function loadUsers() {
    const saved = localStorage.getItem('mathAdventureUsers');
    if (saved) {
        users = JSON.parse(saved);
    }

    // Load sound preference
    const soundPref = localStorage.getItem('mathAdventureSoundEnabled');
    gameState.soundEnabled = soundPref !== 'false';
}

function saveUsers() {
    localStorage.setItem('mathAdventureUsers', JSON.stringify(users));
}

function generateUserId() {
    return 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

async function createUser(name, avatar, grades, language, pin) {
    // Hash the PIN before storing
    const hashedPin = pin ? await hashPin(pin) : null;

    const user = {
        id: generateUserId(),
        name: name,
        avatar: avatar,
        grades: grades,
        language: language || currentLanguage,
        pinHash: hashedPin, // Store hashed PIN (not plain text)
        stats: {
            totalGames: 0,
            totalScore: 0,
            bestStreak: 0
        },
        collectedPrizes: [], // Prizes collected across all games
        createdAt: new Date().toISOString()
    };
    users.push(user);
    saveUsers();
    return user;
}

function updateUser(id, updates) {
    const index = users.findIndex(u => u.id === id);
    if (index !== -1) {
        users[index] = { ...users[index], ...updates };
        saveUsers();
        return users[index];
    }
    return null;
}

function deleteUser(id) {
    users = users.filter(u => u.id !== id);
    saveUsers();
}

function getUserById(id) {
    return users.find(u => u.id === id);
}

// ===== Render Functions =====
function renderAvatarGrids() {
    const grids = ['avatar-grid', 'edit-avatar-grid'];
    grids.forEach(gridId => {
        const grid = document.getElementById(gridId);
        if (grid) {
            grid.innerHTML = avatars.map((avatar, i) => `
                <button class="avatar-option${i === 0 ? ' selected' : ''}" data-avatar="${avatar}">
                    ${avatar}
                </button>
            `).join('');

            // Add click handlers
            grid.querySelectorAll('.avatar-option').forEach(btn => {
                btn.addEventListener('click', () => {
                    grid.querySelectorAll('.avatar-option').forEach(b => b.classList.remove('selected'));
                    btn.classList.add('selected');
                    playSound('click');
                });
            });
        }
    });
}

function renderUserProfiles() {
    const container = document.getElementById('user-profiles');

    if (users.length === 0) {
        container.innerHTML = `
            <div class="no-users-message">
                <span class="big-emoji">👋</span>
                <p>${t('noPlayersYet')}</p>
            </div>
        `;
    } else {
        const gradeLabel = (grades) => grades.length > 1 ? t('grades') : t('grade');
        container.innerHTML = users.map(user => `
            <div class="user-profile-card" data-user-id="${user.id}">
                ${user.pinHash ? '<span class="profile-lock">🔒</span>' : ''}
                <span class="user-avatar">${user.avatar}</span>
                <span class="user-name">${user.name}</span>
                <span class="user-grades">${gradeLabel(user.grades)}: ${user.grades.join(', ')}</span>
            </div>
        `).join('');

        // Add click handlers
        container.querySelectorAll('.user-profile-card').forEach(card => {
            card.addEventListener('click', () => {
                const userId = card.dataset.userId;
                attemptLogin(userId);
            });
        });
    }

    // Show/hide manage button based on users
    const manageBtn = document.getElementById('manage-users-btn');
    if (manageBtn) {
        manageBtn.style.display = users.length > 0 ? 'block' : 'none';
    }
}

function renderManageUserList() {
    const container = document.getElementById('manage-user-list');

    if (users.length === 0) {
        container.innerHTML = `<p style="text-align: center; color: #666;">${t('noPlayersToManage')}</p>`;
    } else {
        container.innerHTML = users.map(user => `
            <div class="manage-user-card" data-user-id="${user.id}">
                <span class="user-avatar">${user.avatar}</span>
                <div class="manage-user-info">
                    <div class="user-name">${user.name}</div>
                    <div class="user-details">${t('grades')}: ${user.grades.join(', ')} | ${t('games')}: ${user.stats.totalGames}</div>
                </div>
                <div class="manage-user-actions">
                    <button class="edit-btn" data-user-id="${user.id}" title="${t('editProfile')}">✏️</button>
                    <button class="delete-btn" data-user-id="${user.id}" title="${t('deletePlayer')}">🗑️</button>
                </div>
            </div>
        `).join('');

        // Add click handlers
        container.querySelectorAll('.edit-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                openEditScreen(btn.dataset.userId);
            });
        });

        container.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                openDeleteModal(btn.dataset.userId);
            });
        });
    }
}

function renderGradeButtons() {
    const container = document.getElementById('grade-buttons');
    if (!currentUser) return;

    const colors = ['#74b9ff', '#81ecec', '#ffeaa7', '#fab1a0'];
    const stars = ['⭐', '⭐⭐', '⭐⭐⭐', '⭐⭐⭐⭐'];

    container.innerHTML = currentUser.grades.map((grade, i) => `
        <button class="grade-btn" data-grade="${grade}" style="border-color: ${colors[grade-1]}">
            <span class="grade-number">${tNested('gradeOrdinal', grade)}</span>
            <span class="grade-label">${t('grade')}</span>
            <span class="grade-desc">${tNested('gradeDescriptions', grade)}</span>
            <span class="grade-stars">${stars[grade-1]}</span>
        </button>
    `).join('');

    // Add click handlers
    container.querySelectorAll('.grade-btn').forEach(btn => {
        btn.addEventListener('click', () => selectGrade(parseInt(btn.dataset.grade)));
    });
}

// ===== Event Listeners Setup =====
function setupEventListeners() {
    // Home language toggle buttons
    document.querySelectorAll('.home-lang-toggle .lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            setLanguage(lang);
            updateHomeLangButtons();
            renderUserProfiles(); // Re-render profiles with new language
            playSound('click');
        });
    });

    // Add user button
    document.getElementById('add-user-btn').addEventListener('click', () => {
        resetRegistrationForm();
        showScreen('register-screen');
        playSound('click');
    });

    // Manage users button
    document.getElementById('manage-users-btn').addEventListener('click', () => {
        renderManageUserList();
        showScreen('manage-screen');
        playSound('click');
    });

    // Registration form
    document.getElementById('register-btn').addEventListener('click', registerUser);

    // Select all grades checkbox
    document.getElementById('select-all-grades').addEventListener('change', (e) => {
        document.querySelectorAll('input[name="grade"]').forEach(cb => {
            cb.checked = e.target.checked;
        });
    });

    // Edit form save button
    document.getElementById('save-edit-btn').addEventListener('click', saveUserEdit);

    // Delete modal buttons
    document.getElementById('confirm-delete-btn').addEventListener('click', confirmDelete);
    document.getElementById('cancel-delete-btn').addEventListener('click', closeDeleteModal);

    // PIN modal cancel button
    document.getElementById('cancel-pin-btn').addEventListener('click', closePinModal);

    // Switch user button
    document.getElementById('switch-user-btn').addEventListener('click', () => {
        currentUser = null;
        renderUserProfiles();
        showScreen('login-screen');
        playSound('click');
    });

    // Start button
    document.getElementById('start-btn').addEventListener('click', () => {
        renderGradeButtons();
        updatePlayerDisplays();
        showScreen('grade-screen');
        playSound('start');
    });

    // Mode selection
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', () => selectMode(btn.dataset.mode));
    });

    // Back buttons
    document.querySelectorAll('.back-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            // Stop timer if going back from game
            if (gameState.timerInterval) {
                clearInterval(gameState.timerInterval);
            }
            showScreen(btn.dataset.target);
            playSound('click');
        });
    });

    // Results screen buttons
    document.getElementById('play-again-btn').addEventListener('click', playAgain);
    document.getElementById('change-mode-btn').addEventListener('click', () => showScreen('mode-screen'));
    document.getElementById('home-btn').addEventListener('click', () => showScreen('welcome-screen'));

    // Sound toggle
    document.getElementById('sound-toggle').addEventListener('click', toggleSound);
}

// ===== User Actions =====
function resetRegistrationForm() {
    document.getElementById('reg-name').value = '';
    document.querySelectorAll('input[name="grade"]').forEach(cb => cb.checked = false);
    document.getElementById('select-all-grades').checked = false;

    // Reset avatar selection
    const avatarGrid = document.getElementById('avatar-grid');
    avatarGrid.querySelectorAll('.avatar-option').forEach((btn, i) => {
        btn.classList.toggle('selected', i === 0);
    });

    // Reset PIN inputs
    const pinContainer = document.querySelector('#register-screen .pin-input-container');
    if (pinContainer) {
        clearPinInputs(pinContainer);
    }
}

async function registerUser() {
    const name = document.getElementById('reg-name').value.trim();
    const selectedAvatar = document.querySelector('#avatar-grid .avatar-option.selected');
    const avatar = selectedAvatar ? selectedAvatar.dataset.avatar : avatars[0];
    const grades = Array.from(document.querySelectorAll('input[name="grade"]:checked'))
        .map(cb => parseInt(cb.value))
        .sort((a, b) => a - b);
    const language = document.getElementById('reg-language').value || currentLanguage;
    const pin = document.getElementById('reg-pin').value;

    // Validation
    if (!name) {
        alert(t('pleaseEnterName'));
        return;
    }

    if (grades.length === 0) {
        alert(t('pleaseSelectGrade'));
        return;
    }

    // Validate PIN (must be 4 digits if provided)
    if (pin && pin.length !== 4) {
        alert(t('pleaseEnterPin'));
        return;
    }

    // Create user with language preference and PIN (will be hashed)
    const user = await createUser(name, avatar, grades, language, pin || null);

    // Auto-login the new user
    loginUser(user.id);
    playSound('start');
}

// Attempt to login - check if PIN is required
function attemptLogin(userId) {
    const user = getUserById(userId);
    if (!user) return;

    if (user.pinHash) {
        // Show PIN modal
        openPinModal(user);
    } else {
        // No PIN, login directly
        loginUser(userId);
    }
}

// Open PIN verification modal
function openPinModal(user) {
    pinLoginUserId = user.id;

    document.getElementById('pin-modal-avatar').textContent = user.avatar;
    document.getElementById('pin-modal-name').textContent = user.name;
    document.getElementById('pin-error').classList.add('hidden');

    const container = document.getElementById('pin-verify-container');
    clearPinInputs(container);

    document.getElementById('pin-modal').classList.remove('hidden');

    // Focus first PIN input
    setTimeout(() => {
        container.querySelector('.pin-digit').focus();
    }, 100);

    playSound('click');
}

// Close PIN modal
function closePinModal() {
    pinLoginUserId = null;
    document.getElementById('pin-modal').classList.add('hidden');

    const container = document.getElementById('pin-verify-container');
    clearPinInputs(container);
}

// Verify entered PIN
async function verifyPin(enteredPin) {
    if (!pinLoginUserId) return;

    const user = getUserById(pinLoginUserId);
    if (!user) return;

    const container = document.getElementById('pin-verify-container');

    // Compare hashed PINs
    const isMatch = await verifyPinHash(enteredPin, user.pinHash);

    if (isMatch) {
        // Success!
        showPinSuccess(container);
        playSound('correct');

        setTimeout(() => {
            closePinModal();
            loginUser(user.id);
        }, 400);
    } else {
        // Wrong PIN
        document.getElementById('pin-error').classList.remove('hidden');
        showPinError(container);
        playSound('wrong');
    }
}

function loginUser(userId) {
    const user = getUserById(userId);
    if (!user) return;

    currentUser = user;

    // Set language to user's preference
    if (user.language && translations[user.language]) {
        setLanguage(user.language);
    }

    // Update welcome screen
    document.getElementById('welcome-avatar').textContent = user.avatar;
    document.getElementById('welcome-name').textContent = user.name;
    document.getElementById('total-games').textContent = user.stats.totalGames;
    document.getElementById('total-score').textContent = user.stats.totalScore;
    document.getElementById('best-streak-stat').textContent = user.stats.bestStreak;

    // Display collected prizes
    const prizesSection = document.getElementById('welcome-prizes-section');
    const prizesList = document.getElementById('welcome-prizes-list');

    if (user.collectedPrizes && user.collectedPrizes.length > 0) {
        prizesSection.classList.remove('hidden');
        prizesList.innerHTML = user.collectedPrizes.map(prize =>
            `<span class="welcome-prize-item" title="${getPrizeName(prize.nameKey)}">${prize.emoji}</span>`
        ).join('');
    } else {
        prizesSection.classList.add('hidden');
        prizesList.innerHTML = '';
    }

    showScreen('welcome-screen');
    playSound('click');
}

function openEditScreen(userId) {
    const user = getUserById(userId);
    if (!user) return;

    document.getElementById('edit-user-id').value = user.id;
    document.getElementById('edit-name').value = user.name;

    // Set avatar
    const avatarGrid = document.getElementById('edit-avatar-grid');
    avatarGrid.querySelectorAll('.avatar-option').forEach(btn => {
        btn.classList.toggle('selected', btn.dataset.avatar === user.avatar);
    });

    // Set grades
    document.querySelectorAll('input[name="edit-grade"]').forEach(cb => {
        cb.checked = user.grades.includes(parseInt(cb.value));
    });

    // Set language
    const langSelector = document.getElementById('edit-language');
    if (langSelector) {
        langSelector.value = user.language || 'en';
    }

    // Clear PIN inputs (don't show current PIN for security)
    const pinContainer = document.getElementById('edit-pin-container');
    if (pinContainer) {
        clearPinInputs(pinContainer);
    }

    showScreen('edit-screen');
    playSound('click');
}

async function saveUserEdit() {
    const userId = document.getElementById('edit-user-id').value;
    const name = document.getElementById('edit-name').value.trim();
    const selectedAvatar = document.querySelector('#edit-avatar-grid .avatar-option.selected');
    const avatar = selectedAvatar ? selectedAvatar.dataset.avatar : avatars[0];
    const grades = Array.from(document.querySelectorAll('input[name="edit-grade"]:checked'))
        .map(cb => parseInt(cb.value))
        .sort((a, b) => a - b);
    const language = document.getElementById('edit-language').value || currentLanguage;
    const newPin = document.getElementById('edit-pin').value;

    // Validation
    if (!name) {
        alert(t('pleaseEnterName'));
        return;
    }

    if (grades.length === 0) {
        alert(t('pleaseSelectGrade'));
        return;
    }

    // Validate PIN if entered (must be 4 digits or empty)
    if (newPin && newPin.length !== 4) {
        alert(t('pleaseEnterPin'));
        return;
    }

    // Get current user to preserve PIN hash if not changed
    const currentUserData = getUserById(userId);

    // Hash new PIN if provided, otherwise keep existing hash
    let pinHashToSave;
    if (newPin) {
        pinHashToSave = await hashPin(newPin);
    } else {
        pinHashToSave = currentUserData ? currentUserData.pinHash : null;
    }

    // Update user with language and hashed PIN
    updateUser(userId, { name, avatar, grades, language, pinHash: pinHashToSave });

    // Refresh manage list and go back
    renderManageUserList();
    showScreen('manage-screen');
    playSound('correct');
}

function openDeleteModal(userId) {
    const user = getUserById(userId);
    if (!user) return;

    deleteTargetId = userId;
    document.getElementById('delete-modal-text').textContent = t('deleteConfirm');
    document.getElementById('delete-modal').classList.remove('hidden');
}

function closeDeleteModal() {
    deleteTargetId = null;
    document.getElementById('delete-modal').classList.add('hidden');
}

function confirmDelete() {
    if (deleteTargetId) {
        deleteUser(deleteTargetId);
        closeDeleteModal();
        renderManageUserList();
        renderUserProfiles();
        playSound('pop');

        // If we deleted the current user, go back to login
        if (currentUser && currentUser.id === deleteTargetId) {
            currentUser = null;
            showScreen('login-screen');
        }
    }
}

function updatePlayerDisplays() {
    if (!currentUser) return;
    const display = `${currentUser.avatar} ${currentUser.name}`;
    document.getElementById('player-display').textContent = display;
    document.getElementById('mode-player-display').textContent = display;
}

// ===== Game Functions =====
function selectGrade(grade) {
    gameState.grade = grade;
    showScreen('mode-screen');
    playSound('click');
}

function selectMode(mode) {
    gameState.mode = mode;
    resetGameState();
    generateProblems();
    showScreen('game-screen');
    startGamePlay();
    playSound('start');
}

function resetGameState() {
    gameState.score = 0;
    gameState.streak = 0;
    gameState.bestStreak = 0;
    gameState.lives = 5;
    gameState.currentQuestion = 0;
    gameState.correctAnswers = 0;
    gameState.timeLeft = 60;
    gameState.problems = [];
    gameState.matchState = {
        selectedProblem: null,
        selectedAnswer: null,
        matched: []
    };
    gameState.prizes = [];
    gameState.lastPrizeStreak = 0;

    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
    }
}

function showScreen(screenId) {
    Object.values(screens).forEach(screen => {
        if (screen) screen.classList.remove('active');
    });
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
    }
}

// ===== Problem Generation =====
function generateProblems() {
    gameState.problems = [];
    const config = gradeConfig[gameState.grade];

    for (let i = 0; i < gameState.totalQuestions; i++) {
        const operation = config.operations[Math.floor(Math.random() * config.operations.length)];
        gameState.problems.push(generateProblem(operation, config));
    }
}

function generateProblem(operation, config) {
    let num1, num2, answer, display, blankPosition;

    switch (operation) {
        case 'addition':
            num1 = randomInt(config.addition.min, config.addition.max);
            num2 = randomInt(config.addition.min, config.addition.max);
            answer = num1 + num2;
            display = `${num1} + ${num2} = ?`;
            blankPosition = 'answer';
            break;

        case 'subtraction':
            num1 = randomInt(config.subtraction.min, config.subtraction.max);
            num2 = randomInt(1, num1);
            answer = num1 - num2;
            display = `${num1} - ${num2} = ?`;
            blankPosition = 'answer';
            break;

        case 'multiplication':
            num1 = randomInt(config.multiplication.min, config.multiplication.max);
            num2 = randomInt(config.multiplication.min, config.multiplication.max);
            answer = num1 * num2;
            display = `${num1} × ${num2} = ?`;
            blankPosition = 'answer';
            break;

        case 'division':
            num2 = randomInt(config.division.min, config.division.max);
            answer = randomInt(1, 10);
            num1 = num2 * answer;
            display = `${num1} ÷ ${num2} = ?`;
            blankPosition = 'answer';
            break;

        case 'fractions':
            return generateFractionProblem();

        default:
            return generateProblem('addition', config);
    }

    // Randomly make the blank a different position for fill-in-blank mode
    if (gameState.mode === 'fill-blank' && Math.random() > 0.5) {
        const blankNum = Math.random() > 0.5 ? 1 : 2;
        if (operation === 'addition') {
            if (blankNum === 1) {
                display = `? + ${num2} = ${answer}`;
                answer = num1;
                blankPosition = 'first';
            } else {
                display = `${num1} + ? = ${answer}`;
                answer = num2;
                blankPosition = 'second';
            }
        }
    }

    return {
        display,
        answer,
        num1,
        num2,
        operation,
        blankPosition
    };
}

function generateFractionProblem() {
    const types = ['compare', 'add_simple', 'equivalent'];
    const type = types[Math.floor(Math.random() * types.length)];

    let display, answer, options;

    switch (type) {
        case 'compare':
            const fractions = [
                { num: 1, den: 2, value: 0.5 },
                { num: 1, den: 4, value: 0.25 },
                { num: 3, den: 4, value: 0.75 },
                { num: 1, den: 3, value: 0.33 },
                { num: 2, den: 3, value: 0.67 }
            ];
            const f1 = fractions[Math.floor(Math.random() * fractions.length)];
            let f2 = fractions[Math.floor(Math.random() * fractions.length)];
            while (f2.value === f1.value) {
                f2 = fractions[Math.floor(Math.random() * fractions.length)];
            }
            display = t('whichIsBigger', { f1: `${f1.num}/${f1.den}`, f2: `${f2.num}/${f2.den}` });
            answer = f1.value > f2.value ? `${f1.num}/${f1.den}` : `${f2.num}/${f2.den}`;
            options = [`${f1.num}/${f1.den}`, `${f2.num}/${f2.den}`];
            break;

        case 'add_simple':
            const den = [2, 4][Math.floor(Math.random() * 2)];
            const n1 = randomInt(1, den - 1);
            const n2 = randomInt(1, den - n1);
            display = `${n1}/${den} + ${n2}/${den} = ?`;
            answer = `${n1 + n2}/${den}`;
            break;

        case 'equivalent':
            const pairs = [
                { base: '1/2', equiv: '2/4' },
                { base: '1/2', equiv: '3/6' },
                { base: '1/4', equiv: '2/8' },
                { base: '2/4', equiv: '1/2' }
            ];
            const pair = pairs[Math.floor(Math.random() * pairs.length)];
            display = `${pair.base} = ?`;
            answer = pair.equiv;
            options = [pair.equiv, '1/3', '3/5', '2/3'].sort(() => Math.random() - 0.5);
            break;
    }

    return {
        display,
        answer,
        operation: 'fractions',
        type,
        options
    };
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ===== Game Play =====
function startGamePlay() {
    document.getElementById('game-character-emoji').textContent = currentUser ? currentUser.avatar : '🦊';
    updateStats();
    updateProgress();
    updatePrizeCollection(); // Reset prize display

    // Reset timer color
    document.getElementById('timer').style.color = '';

    // Start timer
    gameState.timerInterval = setInterval(updateTimer, 1000);

    // Start the appropriate game mode
    switch (gameState.mode) {
        case 'fill-blank':
            renderFillBlank();
            break;
        case 'quiz':
            renderQuiz();
            break;
        case 'match':
            renderMatch();
            break;
        case 'bubble':
            renderBubble();
            break;
        case 'speed':
            renderSpeedChallenge();
            break;
        case 'memory':
            renderMemoryMatch();
            break;
        case 'order':
            renderNumberOrder();
            break;
        case 'truefalse':
            renderTrueFalse();
            break;
    }

    updateSpeech(getSpeech('encouragement'));
}

function updateStats() {
    document.getElementById('score').textContent = gameState.score;
    document.getElementById('streak').textContent = gameState.streak;
    document.getElementById('lives').textContent = gameState.lives;
    document.getElementById('timer').textContent = gameState.timeLeft;
}

function updateProgress() {
    const progress = (gameState.currentQuestion / gameState.totalQuestions) * 100;
    document.getElementById('progress-fill').style.width = `${progress}%`;
    document.getElementById('progress-text').textContent =
        t('questionOf', { current: gameState.currentQuestion + 1, total: gameState.totalQuestions });
}

function updateTimer() {
    gameState.timeLeft--;
    document.getElementById('timer').textContent = gameState.timeLeft;

    if (gameState.timeLeft <= 10) {
        document.getElementById('timer').style.color = '#e74c3c';
    }

    if (gameState.timeLeft <= 0) {
        endGame();
    }
}

function updateSpeech(message) {
    document.getElementById('character-speech').textContent = message;
}

// ===== Fill the Blank Mode =====
function renderFillBlank() {
    const problem = gameState.problems[gameState.currentQuestion];
    const gameArea = document.getElementById('game-area');

    let html = '<div class="math-problem">';
    const parts = problem.display.split('?');
    html += `<span>${parts[0]}</span>`;
    html += `<input type="number" class="blank-input" id="answer-input" autofocus>`;
    if (parts[1]) {
        html += `<span>${parts[1]}</span>`;
    }
    html += '</div>';
    html += `<button class="big-button" id="submit-answer">${t('checkAnswer')} ✓</button>`;

    gameArea.innerHTML = html;

    const input = document.getElementById('answer-input');
    const submitBtn = document.getElementById('submit-answer');

    input.focus();
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') checkFillBlankAnswer();
    });
    submitBtn.addEventListener('click', checkFillBlankAnswer);
}

function checkFillBlankAnswer() {
    const input = document.getElementById('answer-input');
    const userAnswer = input.value.trim();
    const problem = gameState.problems[gameState.currentQuestion];

    if (userAnswer === '') return;

    const isCorrect = parseInt(userAnswer) === problem.answer || userAnswer === String(problem.answer);

    input.classList.add(isCorrect ? 'correct' : 'incorrect');
    input.disabled = true;

    handleAnswer(isCorrect, problem.answer);
}

// ===== Quiz Mode =====
function renderQuiz() {
    const problem = gameState.problems[gameState.currentQuestion];
    const gameArea = document.getElementById('game-area');

    let options;
    if (problem.options) {
        options = problem.options;
    } else {
        options = generateOptions(problem.answer);
    }

    let html = `<div class="math-problem"><span>${problem.display}</span></div>`;
    html += '<div class="quiz-options">';

    options.forEach(opt => {
        html += `<button class="quiz-option" data-answer="${opt}">${opt}</button>`;
    });

    html += '</div>';

    gameArea.innerHTML = html;

    document.querySelectorAll('.quiz-option').forEach(btn => {
        btn.addEventListener('click', () => checkQuizAnswer(btn, problem.answer));
    });
}

function generateOptions(correctAnswer) {
    const options = [correctAnswer];
    const isNumber = typeof correctAnswer === 'number';

    while (options.length < 4) {
        let wrong;
        if (isNumber) {
            const offset = randomInt(-5, 5);
            wrong = correctAnswer + offset;
            if (wrong < 0) wrong = correctAnswer + Math.abs(offset);
        } else {
            wrong = `${randomInt(1, 5)}/${randomInt(2, 8)}`;
        }

        if (!options.includes(wrong) && wrong !== 0) {
            options.push(wrong);
        }
    }

    return options.sort(() => Math.random() - 0.5);
}

function checkQuizAnswer(btn, correctAnswer) {
    const userAnswer = btn.dataset.answer;
    const isCorrect = userAnswer == correctAnswer || userAnswer === String(correctAnswer);

    document.querySelectorAll('.quiz-option').forEach(b => {
        b.disabled = true;
        if (b.dataset.answer == correctAnswer || b.dataset.answer === String(correctAnswer)) {
            b.classList.add('correct');
        }
    });

    if (!isCorrect) {
        btn.classList.add('incorrect');
    }

    handleAnswer(isCorrect, correctAnswer);
}

// ===== Match Game Mode =====
function renderMatch() {
    const gameArea = document.getElementById('game-area');

    // Select 5 problems with unique answers to avoid matching confusion
    const usedAnswers = new Set();
    const matchProblems = [];

    for (const problem of gameState.problems) {
        const answerKey = String(problem.answer);
        if (!usedAnswers.has(answerKey) && matchProblems.length < 5) {
            usedAnswers.add(answerKey);
            matchProblems.push(problem);
        }
    }

    // If we don't have enough unique answers, generate more problems
    const config = gradeConfig[gameState.grade];
    while (matchProblems.length < 5) {
        const operation = config.operations[Math.floor(Math.random() * config.operations.length)];
        const newProblem = generateProblem(operation, config);
        const answerKey = String(newProblem.answer);
        if (!usedAnswers.has(answerKey)) {
            usedAnswers.add(answerKey);
            matchProblems.push(newProblem);
        }
    }

    const problems = matchProblems.map((p, i) => ({
        id: i,
        display: p.display.replace(' = ?', ''),
        answer: p.answer
    }));

    // Shuffle answers
    const shuffledAnswers = problems.map(p => ({
        id: p.id,
        value: p.answer
    })).sort(() => Math.random() - 0.5);

    // Create horizontal rows with problems on left, line in middle, answers on right
    let html = '<div class="match-game">';
    html += '<div class="match-header"><span>' + t('matchGameDesc') + '</span></div>';

    // Problems column
    html += '<div class="match-grid">';
    html += '<div class="match-col match-problems">';
    problems.forEach(p => {
        html += `<div class="match-item match-problem" data-id="${p.id}">
            <span class="match-text">${p.display}</span>
            <span class="match-dot"></span>
        </div>`;
    });
    html += '</div>';

    // Lines column (SVG for drawing connections)
    html += '<div class="match-lines"><svg id="match-svg" width="100%" height="100%"></svg></div>';

    // Answers column
    html += '<div class="match-col match-answers">';
    shuffledAnswers.forEach(a => {
        html += `<div class="match-item match-answer" data-id="${a.id}">
            <span class="match-dot"></span>
            <span class="match-text">${a.value}</span>
        </div>`;
    });
    html += '</div>';
    html += '</div></div>';

    gameArea.innerHTML = html;

    document.querySelectorAll('.match-problem').forEach(el => {
        el.addEventListener('click', () => selectMatchProblem(el));
    });

    document.querySelectorAll('.match-answer').forEach(el => {
        el.addEventListener('click', () => selectMatchAnswer(el));
    });

    gameState.matchState.matched = [];
}

function selectMatchProblem(el) {
    if (el.classList.contains('matched')) return;

    document.querySelectorAll('.match-problem').forEach(p => p.classList.remove('selected'));
    el.classList.add('selected');
    gameState.matchState.selectedProblem = el;
    playSound('click');

    checkMatch();
}

function selectMatchAnswer(el) {
    if (el.classList.contains('matched')) return;

    document.querySelectorAll('.match-answer').forEach(a => a.classList.remove('selected'));
    el.classList.add('selected');
    gameState.matchState.selectedAnswer = el;
    playSound('click');

    checkMatch();
}

function checkMatch() {
    const { selectedProblem, selectedAnswer, matched } = gameState.matchState;

    if (!selectedProblem || !selectedAnswer) return;

    const problemId = selectedProblem.dataset.id;
    const answerId = selectedAnswer.dataset.id;

    if (problemId === answerId) {
        selectedProblem.classList.add('matched');
        selectedAnswer.classList.add('matched');
        selectedProblem.classList.remove('selected');
        selectedAnswer.classList.remove('selected');
        matched.push(problemId);

        // Draw connecting line
        drawMatchLine(selectedProblem, selectedAnswer);

        gameState.score += 10;
        gameState.streak++;
        gameState.correctAnswers++;
        playSound('correct');
        updateSpeech(getSpeech('correct'));

        if (matched.length === 5) {
            gameState.score += 50;
            setTimeout(() => endGame(), 1000);
        }
    } else {
        selectedProblem.classList.add('wrong');
        selectedAnswer.classList.add('wrong');

        setTimeout(() => {
            selectedProblem.classList.remove('wrong', 'selected');
            selectedAnswer.classList.remove('wrong', 'selected');
        }, 500);

        gameState.streak = 0;
        gameState.lives--;
        playSound('wrong');
        updateSpeech(getSpeech('incorrect'));

        if (gameState.lives <= 0) {
            setTimeout(() => endGame(), 500);
        }
    }

    gameState.matchState.selectedProblem = null;
    gameState.matchState.selectedAnswer = null;

    if (gameState.streak > gameState.bestStreak) {
        gameState.bestStreak = gameState.streak;
    }

    updateStats();
}

// Draw a line connecting matched problem and answer
function drawMatchLine(problemEl, answerEl) {
    const svg = document.getElementById('match-svg');
    if (!svg) return;

    const svgRect = svg.getBoundingClientRect();
    const problemDot = problemEl.querySelector('.match-dot');
    const answerDot = answerEl.querySelector('.match-dot');

    if (!problemDot || !answerDot) return;

    const problemRect = problemDot.getBoundingClientRect();
    const answerRect = answerDot.getBoundingClientRect();

    const x1 = problemRect.left + problemRect.width / 2 - svgRect.left;
    const y1 = problemRect.top + problemRect.height / 2 - svgRect.top;
    const x2 = answerRect.left + answerRect.width / 2 - svgRect.left;
    const y2 = answerRect.top + answerRect.height / 2 - svgRect.top;

    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', x1);
    line.setAttribute('y1', y1);
    line.setAttribute('x2', x2);
    line.setAttribute('y2', y2);
    line.setAttribute('class', 'match-line');

    svg.appendChild(line);
}

// ===== Bubble Pop Mode =====
function renderBubble() {
    const problem = gameState.problems[gameState.currentQuestion];
    const gameArea = document.getElementById('game-area');

    const options = generateOptions(problem.answer);
    const colors = ['#e74c3c', '#3498db', '#2ecc71', '#9b59b6', '#f39c12', '#1abc9c'];

    let html = '<div class="bubble-game-wrapper">';
    html += `<div class="bubble-question">${problem.display}</div>`;
    html += '<div class="bubble-container" id="bubble-container"></div>';
    html += '</div>';

    gameArea.innerHTML = html;

    const container = document.getElementById('bubble-container');
    const containerWidth = container.offsetWidth - 80;

    // Shuffle the order in which bubbles appear so correct answer isn't predictable
    const shuffledIndices = options.map((_, i) => i).sort(() => Math.random() - 0.5);

    // Spread bubbles across horizontal positions to avoid overlap
    const positions = [];
    const bubbleWidth = 75;
    const spacing = Math.floor(containerWidth / options.length);

    shuffledIndices.forEach((optIndex, i) => {
        const opt = options[optIndex];
        setTimeout(() => {
            const bubble = document.createElement('div');
            bubble.className = 'bubble';
            bubble.dataset.answer = opt;
            bubble.textContent = opt;
            bubble.style.backgroundColor = colors[i % colors.length];

            // Spread bubbles evenly with some randomness
            const basePos = (i * spacing) + 10;
            const randomOffset = randomInt(-15, 15);
            bubble.style.left = `${Math.max(10, Math.min(basePos + randomOffset, containerWidth))}px`;

            // Slower animation: 7-10 seconds instead of 3-5
            bubble.style.animationDelay = `${i * 0.8}s`;
            bubble.style.animationDuration = `${randomInt(7, 10)}s`;

            bubble.addEventListener('click', () => popBubble(bubble, problem.answer));

            container.appendChild(bubble);
        }, i * 400);
    });
}

function popBubble(bubble, correctAnswer) {
    const userAnswer = bubble.dataset.answer;
    const isCorrect = userAnswer == correctAnswer || userAnswer === String(correctAnswer);

    bubble.classList.add('pop');
    playSound(isCorrect ? 'pop' : 'wrong');

    setTimeout(() => {
        bubble.remove();

        if (isCorrect) {
            handleAnswer(true, correctAnswer);
        } else {
            gameState.lives--;
            gameState.streak = 0;
            updateStats();
            updateSpeech(getSpeech('incorrect'));

            if (gameState.lives <= 0) {
                endGame();
            }
        }
    }, 300);
}

// ===== Speed Challenge Mode =====
function renderSpeedChallenge() {
    const problem = gameState.problems[gameState.currentQuestion];
    const gameArea = document.getElementById('game-area');

    let html = '<div class="speed-challenge">';
    html += '<div class="speed-score-display">';
    html += `<span class="speed-answered">${t('questionsAnswered')}: <strong id="speed-count">${gameState.correctAnswers}</strong></span>`;
    html += '</div>';
    html += `<div class="math-problem speed-problem"><span>${problem.display}</span></div>`;
    html += `<input type="number" class="blank-input speed-input" id="speed-input" autofocus>`;
    html += `<button class="big-button" id="speed-submit">${t('checkAnswer')} ⚡</button>`;
    html += '</div>';

    gameArea.innerHTML = html;

    const input = document.getElementById('speed-input');
    const submitBtn = document.getElementById('speed-submit');

    input.focus();
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') checkSpeedAnswer();
    });
    submitBtn.addEventListener('click', checkSpeedAnswer);
}

function checkSpeedAnswer() {
    const input = document.getElementById('speed-input');
    const userAnswer = input.value.trim();
    const problem = gameState.problems[gameState.currentQuestion];

    if (userAnswer === '') return;

    const isCorrect = parseInt(userAnswer) === problem.answer || userAnswer === String(problem.answer);

    if (isCorrect) {
        gameState.score += 15;
        gameState.streak++;
        gameState.correctAnswers++;
        gameState.timeLeft += 2; // Bonus time for correct answers
        playSound('correct');
        updateSpeech(getSpeech('correct'));

        if (gameState.streak > gameState.bestStreak) {
            gameState.bestStreak = gameState.streak;
        }

        // Check for prize
        if (gameState.streak > 0 && gameState.streak % 3 === 0 && gameState.streak > gameState.lastPrizeStreak) {
            const prizeWon = awardPrize();
            gameState.lastPrizeStreak = gameState.streak;
            showPrize(prizeWon, () => {
                nextSpeedQuestion();
            });
            updateStats();
            return;
        }
    } else {
        gameState.streak = 0;
        gameState.lastPrizeStreak = 0;
        gameState.lives--;
        playSound('wrong');
        updateSpeech(getSpeech('incorrect'));
    }

    updateStats();

    if (gameState.lives <= 0) {
        endGame();
        return;
    }

    nextSpeedQuestion();
}

function nextSpeedQuestion() {
    gameState.currentQuestion++;

    // Generate more problems if needed (infinite mode)
    if (gameState.currentQuestion >= gameState.problems.length) {
        const config = gradeConfig[gameState.grade];
        for (let i = 0; i < 10; i++) {
            const operation = config.operations[Math.floor(Math.random() * config.operations.length)];
            gameState.problems.push(generateProblem(operation, config));
        }
        gameState.totalQuestions = gameState.problems.length;
    }

    updateProgress();
    renderSpeedChallenge();
}

// ===== Memory Match Mode =====
function renderMemoryMatch() {
    const gameArea = document.getElementById('game-area');
    const config = gradeConfig[gameState.grade];

    // Generate 6 unique problem-answer pairs for 12 cards
    const memoryPairs = [];
    const usedAnswers = new Set();

    while (memoryPairs.length < 6) {
        const operation = config.operations[Math.floor(Math.random() * config.operations.length)];
        const problem = generateProblem(operation, config);
        const answerKey = String(problem.answer);

        if (!usedAnswers.has(answerKey) && problem.operation !== 'fractions') {
            usedAnswers.add(answerKey);
            memoryPairs.push({
                problem: problem.display.replace(' = ?', ''),
                answer: problem.answer
            });
        }
    }

    // Create cards array with problems and answers
    const cards = [];
    memoryPairs.forEach((pair, i) => {
        cards.push({ id: i, type: 'problem', content: pair.problem, pairId: i });
        cards.push({ id: i + 6, type: 'answer', content: pair.answer, pairId: i });
    });

    // Shuffle cards
    cards.sort(() => Math.random() - 0.5);

    let html = '<div class="memory-game">';
    html += `<div class="memory-header"><span>${t('memoryMatchDesc')}</span></div>`;
    html += '<div class="memory-grid">';

    cards.forEach((card, index) => {
        html += `<div class="memory-card" data-index="${index}" data-pair-id="${card.pairId}" data-type="${card.type}">
            <div class="memory-card-inner">
                <div class="memory-card-front">❓</div>
                <div class="memory-card-back">${card.content}</div>
            </div>
        </div>`;
    });

    html += '</div></div>';

    gameArea.innerHTML = html;

    // Initialize memory state
    gameState.memoryState = {
        flippedCards: [],
        matchedPairs: 0,
        totalPairs: 6,
        canFlip: true
    };

    // Add click handlers
    document.querySelectorAll('.memory-card').forEach(card => {
        card.addEventListener('click', () => flipMemoryCard(card));
    });
}

function flipMemoryCard(card) {
    if (!gameState.memoryState.canFlip) return;
    if (card.classList.contains('flipped') || card.classList.contains('matched')) return;

    card.classList.add('flipped');
    gameState.memoryState.flippedCards.push(card);
    playSound('click');

    if (gameState.memoryState.flippedCards.length === 2) {
        gameState.memoryState.canFlip = false;
        checkMemoryMatch();
    }
}

function checkMemoryMatch() {
    const [card1, card2] = gameState.memoryState.flippedCards;
    const pairId1 = card1.dataset.pairId;
    const pairId2 = card2.dataset.pairId;
    const type1 = card1.dataset.type;
    const type2 = card2.dataset.type;

    // Match if same pairId but different types (problem matches answer)
    const isMatch = pairId1 === pairId2 && type1 !== type2;

    setTimeout(() => {
        if (isMatch) {
            card1.classList.add('matched');
            card2.classList.add('matched');
            gameState.memoryState.matchedPairs++;
            gameState.score += 20;
            gameState.streak++;
            gameState.correctAnswers++;
            playSound('correct');
            updateSpeech(getSpeech('correct'));

            if (gameState.streak > gameState.bestStreak) {
                gameState.bestStreak = gameState.streak;
            }

            // Check for prize
            if (gameState.streak > 0 && gameState.streak % 3 === 0 && gameState.streak > gameState.lastPrizeStreak) {
                const prizeWon = awardPrize();
                gameState.lastPrizeStreak = gameState.streak;
                showPrize(prizeWon, null);
            }

            // Check if game is complete
            if (gameState.memoryState.matchedPairs === gameState.memoryState.totalPairs) {
                gameState.score += 100; // Completion bonus
                setTimeout(() => endGame(), 1000);
            }
        } else {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            gameState.streak = 0;
            gameState.lastPrizeStreak = 0;
            gameState.lives--;
            playSound('wrong');
            updateSpeech(getSpeech('incorrect'));

            if (gameState.lives <= 0) {
                setTimeout(() => endGame(), 500);
            }
        }

        gameState.memoryState.flippedCards = [];
        gameState.memoryState.canFlip = true;
        updateStats();
    }, 800);
}

// ===== Number Order Mode =====
function renderNumberOrder() {
    const gameArea = document.getElementById('game-area');
    const config = gradeConfig[gameState.grade];

    // Generate 5 unique numbers/results to sort
    const numbers = new Set();
    while (numbers.size < 5) {
        const operation = config.operations[Math.floor(Math.random() * config.operations.length)];
        if (operation !== 'fractions') {
            const problem = generateProblem(operation, config);
            if (problem.answer > 0 && problem.answer < 1000) {
                numbers.add(problem.answer);
            }
        }
    }

    const numbersArray = Array.from(numbers);
    const isAscending = Math.random() > 0.5;
    const correctOrder = [...numbersArray].sort((a, b) => isAscending ? a - b : b - a);
    const shuffledNumbers = [...numbersArray].sort(() => Math.random() - 0.5);

    gameState.orderState = {
        correctOrder,
        currentOrder: [],
        remainingNumbers: shuffledNumbers,
        isAscending
    };

    let html = '<div class="number-order-game">';
    html += `<div class="order-instruction">${isAscending ? t('sortAscending') : t('sortDescending')}</div>`;
    html += '<div class="order-slots" id="order-slots">';
    for (let i = 0; i < 5; i++) {
        html += `<div class="order-slot" data-position="${i}"></div>`;
    }
    html += '</div>';
    html += '<div class="order-numbers" id="order-numbers">';
    shuffledNumbers.forEach(num => {
        html += `<button class="order-number" data-value="${num}">${num}</button>`;
    });
    html += '</div>';
    html += '</div>';

    gameArea.innerHTML = html;

    document.querySelectorAll('.order-number').forEach(btn => {
        btn.addEventListener('click', () => selectOrderNumber(btn));
    });
}

function selectOrderNumber(btn) {
    const value = parseInt(btn.dataset.value);
    const position = gameState.orderState.currentOrder.length;

    if (position >= 5) return;

    const expectedValue = gameState.orderState.correctOrder[position];

    if (value === expectedValue) {
        // Correct position
        gameState.orderState.currentOrder.push(value);
        btn.classList.add('correct');
        btn.disabled = true;

        // Add to slot
        const slot = document.querySelector(`.order-slot[data-position="${position}"]`);
        slot.textContent = value;
        slot.classList.add('filled');

        gameState.score += 10;
        gameState.streak++;
        playSound('correct');

        if (gameState.streak > gameState.bestStreak) {
            gameState.bestStreak = gameState.streak;
        }

        // Check for prize
        if (gameState.streak > 0 && gameState.streak % 3 === 0 && gameState.streak > gameState.lastPrizeStreak) {
            const prizeWon = awardPrize();
            gameState.lastPrizeStreak = gameState.streak;
            showPrize(prizeWon, null);
        }

        updateStats();

        // Check if complete
        if (gameState.orderState.currentOrder.length === 5) {
            gameState.correctAnswers++;
            gameState.score += 50; // Completion bonus
            updateSpeech(getSpeech('correct'));

            setTimeout(() => {
                gameState.currentQuestion++;
                if (gameState.currentQuestion >= gameState.totalQuestions) {
                    endGame();
                } else {
                    updateProgress();
                    renderNumberOrder();
                }
            }, 1000);
        }
    } else {
        // Wrong position
        btn.classList.add('wrong');
        setTimeout(() => btn.classList.remove('wrong'), 500);

        gameState.streak = 0;
        gameState.lastPrizeStreak = 0;
        gameState.lives--;
        playSound('wrong');
        updateSpeech(getSpeech('incorrect'));
        updateStats();

        if (gameState.lives <= 0) {
            setTimeout(() => endGame(), 500);
        }
    }
}

// ===== True or False Mode =====
function renderTrueFalse() {
    const gameArea = document.getElementById('game-area');
    const config = gradeConfig[gameState.grade];

    // Generate a problem
    const operation = config.operations.filter(op => op !== 'fractions')[Math.floor(Math.random() * config.operations.filter(op => op !== 'fractions').length)];
    const problem = generateProblem(operation, config);

    // 50% chance to show correct answer, 50% chance to show wrong answer
    const showCorrect = Math.random() > 0.5;
    let displayedAnswer;

    if (showCorrect) {
        displayedAnswer = problem.answer;
    } else {
        // Generate a wrong answer
        const offset = randomInt(1, 5) * (Math.random() > 0.5 ? 1 : -1);
        displayedAnswer = problem.answer + offset;
        if (displayedAnswer < 0) displayedAnswer = problem.answer + Math.abs(offset);
    }

    const equation = problem.display.replace('?', displayedAnswer);

    gameState.trueFalseState = {
        isTrue: showCorrect,
        correctAnswer: problem.answer
    };

    let html = '<div class="true-false-game">';
    html += `<div class="tf-equation">${equation}</div>`;
    html += '<div class="tf-buttons">';
    html += `<button class="tf-btn tf-true" data-answer="true">✓ ${t('true')}</button>`;
    html += `<button class="tf-btn tf-false" data-answer="false">✗ ${t('false')}</button>`;
    html += '</div>';
    html += '</div>';

    gameArea.innerHTML = html;

    document.querySelectorAll('.tf-btn').forEach(btn => {
        btn.addEventListener('click', () => checkTrueFalse(btn));
    });
}

function checkTrueFalse(btn) {
    const userAnswer = btn.dataset.answer === 'true';
    const isCorrect = userAnswer === gameState.trueFalseState.isTrue;

    document.querySelectorAll('.tf-btn').forEach(b => b.disabled = true);

    if (isCorrect) {
        btn.classList.add('correct');
        gameState.score += 10;
        gameState.streak++;
        gameState.correctAnswers++;
        playSound('correct');
        updateSpeech(getSpeech('correct'));

        if (gameState.streak > gameState.bestStreak) {
            gameState.bestStreak = gameState.streak;
        }

        // Check for prize
        if (gameState.streak > 0 && gameState.streak % 3 === 0 && gameState.streak > gameState.lastPrizeStreak) {
            const prizeWon = awardPrize();
            gameState.lastPrizeStreak = gameState.streak;
            showPrize(prizeWon, () => {
                proceedToNextTrueFalse();
            });
            updateStats();
            return;
        }
    } else {
        btn.classList.add('wrong');
        // Highlight correct answer
        const correctBtn = document.querySelector(`.tf-btn[data-answer="${gameState.trueFalseState.isTrue}"]`);
        correctBtn.classList.add('correct');

        gameState.streak = 0;
        gameState.lastPrizeStreak = 0;
        gameState.lives--;
        playSound('wrong');
        updateSpeech(getSpeech('incorrect'));
    }

    updateStats();

    if (gameState.lives <= 0) {
        setTimeout(() => endGame(), 1000);
        return;
    }

    setTimeout(() => {
        proceedToNextTrueFalse();
    }, 1200);
}

function proceedToNextTrueFalse() {
    gameState.currentQuestion++;

    if (gameState.currentQuestion >= gameState.totalQuestions) {
        endGame();
    } else {
        updateProgress();
        renderTrueFalse();
    }
}

// ===== Answer Handling =====
function handleAnswer(isCorrect, correctAnswer) {
    let prizeWon = null;

    if (isCorrect) {
        gameState.score += 10 + (gameState.streak * 2);
        gameState.streak++;
        gameState.correctAnswers++;
        gameState.timeLeft += gradeConfig[gameState.grade].timeBonus;

        if (gameState.streak > gameState.bestStreak) {
            gameState.bestStreak = gameState.streak;
        }

        // Check for prize! Award every 3 consecutive correct answers
        if (gameState.streak > 0 && gameState.streak % 3 === 0 && gameState.streak > gameState.lastPrizeStreak) {
            prizeWon = awardPrize();
            gameState.lastPrizeStreak = gameState.streak;
        }

        playSound('correct');

        if (gameState.streak >= 5) {
            updateSpeech(getSpeech('streak'));
        } else {
            updateSpeech(getSpeech('correct'));
        }

        showFeedback(true);
    } else {
        gameState.streak = 0;
        gameState.lastPrizeStreak = 0; // Reset prize streak when wrong
        gameState.lives--;
        playSound('wrong');
        updateSpeech(getSpeech('incorrect'));
        showFeedback(false, correctAnswer);
    }

    updateStats();

    if (gameState.lives <= 0) {
        setTimeout(() => endGame(), 1500);
        return;
    }

    // Show prize popup if won, then continue game
    if (prizeWon) {
        showPrize(prizeWon, () => {
            proceedToNextQuestion();
        });
    } else {
        setTimeout(() => {
            proceedToNextQuestion();
        }, 1500);
    }
}

function proceedToNextQuestion() {
    gameState.currentQuestion++;

    if (gameState.currentQuestion >= gameState.totalQuestions) {
        endGame();
    } else {
        updateProgress();
        switch (gameState.mode) {
            case 'fill-blank':
                renderFillBlank();
                break;
            case 'quiz':
                renderQuiz();
                break;
            case 'bubble':
                renderBubble();
                break;
        }
    }
}

// ===== Prize System =====
function awardPrize() {
    const randomPrize = prizes[Math.floor(Math.random() * prizes.length)];
    const prizeInstance = { ...randomPrize, wonAt: gameState.streak };
    gameState.prizes.push(prizeInstance);
    gameState.score += randomPrize.points;
    updatePrizeCollection();
    return prizeInstance;
}

function updatePrizeCollection() {
    const prizeCollection = document.getElementById('prize-collection');
    const collectedPrizes = document.getElementById('collected-prizes');

    if (gameState.prizes.length > 0) {
        prizeCollection.classList.remove('hidden');
        collectedPrizes.innerHTML = gameState.prizes.map((prize, i) => `
            <span class="collected-prize-item" style="animation-delay: ${i * 0.1}s" title="${getPrizeName(prize.nameKey)}">
                ${prize.emoji}
            </span>
        `).join('');
    } else {
        prizeCollection.classList.add('hidden');
        collectedPrizes.innerHTML = '';
    }
}

function showPrize(prize, callback) {
    const prizePopup = document.getElementById('prize-popup');
    const prizeEmoji = document.getElementById('prize-emoji');
    const prizeName = document.getElementById('prize-name');
    const prizePoints = document.getElementById('prize-points');
    const prizeStreakMsg = document.getElementById('prize-streak-msg');

    prizeEmoji.textContent = prize.emoji;
    prizeName.textContent = getPrizeName(prize.nameKey);
    prizePoints.textContent = t('bonusPoints', { points: prize.points });
    prizeStreakMsg.textContent = `🔥 ${t('inARow', { count: gameState.streak })} 🔥`;

    prizePopup.classList.remove('hidden');
    prizePopup.classList.add('show');
    playSound('prize');

    // Auto-close after 2.5 seconds
    setTimeout(() => {
        prizePopup.classList.remove('show');
        prizePopup.classList.add('hidden');
        if (callback) callback();
    }, 2500);
}

function showFeedback(isCorrect, correctAnswer = null) {
    const feedback = document.getElementById('feedback');
    const emoji = feedback.querySelector('.feedback-emoji');
    const text = feedback.querySelector('.feedback-text');

    if (isCorrect) {
        emoji.textContent = ['🎉', '⭐', '🌟', '💫', '🏆'][Math.floor(Math.random() * 5)];
        const feedbackMessages = tArray('correctFeedback');
        text.textContent = feedbackMessages[Math.floor(Math.random() * feedbackMessages.length)];
    } else {
        emoji.textContent = ['😅', '🤔', '💪'][Math.floor(Math.random() * 3)];
        text.textContent = t('answerWas', { answer: correctAnswer });
    }

    feedback.classList.remove('hidden');

    setTimeout(() => {
        feedback.classList.add('hidden');
    }, 1200);
}

// ===== End Game =====
function endGame() {
    clearInterval(gameState.timerInterval);

    // Calculate stars
    const percentage = (gameState.correctAnswers / gameState.totalQuestions) * 100;
    let stars = 1;
    if (percentage >= 70) stars = 2;
    if (percentage >= 90) stars = 3;

    // Update user stats and save prizes
    if (currentUser) {
        currentUser.stats.totalGames++;
        currentUser.stats.totalScore += gameState.score;
        if (gameState.bestStreak > currentUser.stats.bestStreak) {
            currentUser.stats.bestStreak = gameState.bestStreak;
        }

        // Save prizes won during this game to user's collection
        if (!currentUser.collectedPrizes) {
            currentUser.collectedPrizes = [];
        }
        if (gameState.prizes.length > 0) {
            const newPrizes = gameState.prizes.map(prize => ({
                emoji: prize.emoji,
                nameKey: prize.nameKey,
                points: prize.points,
                wonAt: new Date().toISOString()
            }));
            currentUser.collectedPrizes = currentUser.collectedPrizes.concat(newPrizes);
        }

        updateUser(currentUser.id, {
            stats: currentUser.stats,
            collectedPrizes: currentUser.collectedPrizes
        });
    }

    // Show results
    showScreen('results-screen');

    const titleEmoji = percentage >= 70 ? '🎉' : percentage >= 50 ? '👍' : '💪';
    const titleText = percentage >= 70 ? t('amazingJob') : percentage >= 50 ? t('goodTry') : t('keepPracticing');
    document.getElementById('results-title').textContent = `${titleEmoji} ${titleText} ${titleEmoji}`;

    document.getElementById('results-character').textContent = currentUser ? currentUser.avatar : '🦊';
    document.getElementById('final-score').textContent = gameState.score;
    document.getElementById('correct-count').textContent = `${gameState.correctAnswers}/${gameState.totalQuestions}`;
    document.getElementById('best-streak').textContent = gameState.bestStreak;

    // Animate stars
    const starsContainer = document.getElementById('stars-earned');
    starsContainer.querySelectorAll('span').forEach((star, i) => {
        star.classList.remove('active');
        setTimeout(() => {
            if (i < stars) {
                star.classList.add('active');
                playSound('star');
            }
        }, (i + 1) * 500);
    });

    // Show prizes won
    const prizesWonDiv = document.getElementById('prizes-won');
    const prizesList = document.getElementById('prizes-list');
    document.getElementById('prizes-title').textContent = t('prizesWon');
    if (gameState.prizes.length > 0) {
        prizesWonDiv.classList.remove('hidden');
        prizesList.innerHTML = gameState.prizes.map((prize, i) => `
            <div class="prize-item" style="animation-delay: ${i * 0.1}s">
                <span class="prize-item-emoji">${prize.emoji}</span>
                <span class="prize-item-name">${getPrizeName(prize.nameKey)}</span>
            </div>
        `).join('');
    } else {
        prizesWonDiv.classList.add('hidden');
        prizesList.innerHTML = '';
    }

    // Show achievements
    const achievements = [];
    if (gameState.correctAnswers === gameState.totalQuestions) achievements.push(`🏆 ${t('perfectScore')}`);
    if (gameState.bestStreak >= 5) achievements.push(`🔥 ${t('hotStreak')}`);
    if (gameState.score >= 100) achievements.push(`⭐ ${t('mathStar')}`);
    if (gameState.lives === 5) achievements.push(`❤️ ${t('flawless')}`);
    if (gameState.prizes.length >= 3) achievements.push(`🎁 ${t('prizeCollector')}`);

    const achievementsDiv = document.getElementById('achievements');
    achievementsDiv.innerHTML = achievements.map(a => `<div class="achievement">${a}</div>`).join('');

    if (percentage >= 70) {
        launchConfetti();
    }

    playSound(percentage >= 70 ? 'win' : 'end');
}

function playAgain() {
    resetGameState();
    generateProblems();
    showScreen('game-screen');
    startGamePlay();
    playSound('start');
}

// ===== Sound System =====
const sounds = {
    click: { frequency: 800, duration: 0.1, type: 'sine' },
    correct: { frequency: 523.25, duration: 0.15, type: 'sine', sequence: [523.25, 659.25, 783.99] },
    wrong: { frequency: 200, duration: 0.3, type: 'sawtooth' },
    pop: { frequency: 600, duration: 0.1, type: 'sine' },
    star: { frequency: 880, duration: 0.2, type: 'sine' },
    start: { frequency: 440, duration: 0.1, type: 'sine', sequence: [440, 554.37, 659.25] },
    win: { frequency: 523.25, duration: 0.15, type: 'sine', sequence: [523.25, 659.25, 783.99, 1046.50] },
    end: { frequency: 392, duration: 0.2, type: 'sine' },
    prize: { frequency: 587.33, duration: 0.12, type: 'sine', sequence: [587.33, 739.99, 880, 1046.50, 1174.66] }
};

let audioContext = null;

function initAudio() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
}

function playSound(soundName) {
    if (!gameState.soundEnabled) return;

    initAudio();

    const sound = sounds[soundName];
    if (!sound) return;

    if (sound.sequence) {
        sound.sequence.forEach((freq, i) => {
            setTimeout(() => playTone(freq, sound.duration, sound.type), i * 100);
        });
    } else {
        playTone(sound.frequency, sound.duration, sound.type);
    }
}

function playTone(frequency, duration, type) {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = frequency;
    oscillator.type = type;

    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration);
}

function toggleSound() {
    gameState.soundEnabled = !gameState.soundEnabled;
    localStorage.setItem('mathAdventureSoundEnabled', gameState.soundEnabled);
    updateSoundToggle();
}

function updateSoundToggle() {
    const btn = document.getElementById('sound-toggle');
    btn.textContent = gameState.soundEnabled ? '🔊' : '🔇';
    btn.classList.toggle('muted', !gameState.soundEnabled);
}

// ===== Confetti =====
function launchConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const pieces = [];
    const colors = ['#ff6b6b', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff', '#5f27cd'];

    for (let i = 0; i < 150; i++) {
        pieces.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            size: Math.random() * 10 + 5,
            color: colors[Math.floor(Math.random() * colors.length)],
            speedY: Math.random() * 3 + 2,
            speedX: Math.random() * 4 - 2,
            rotation: Math.random() * 360,
            rotationSpeed: Math.random() * 10 - 5
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        let activePieces = 0;

        pieces.forEach(piece => {
            if (piece.y < canvas.height) {
                activePieces++;

                ctx.save();
                ctx.translate(piece.x, piece.y);
                ctx.rotate(piece.rotation * Math.PI / 180);

                ctx.fillStyle = piece.color;
                ctx.fillRect(-piece.size / 2, -piece.size / 2, piece.size, piece.size);

                ctx.restore();

                piece.y += piece.speedY;
                piece.x += piece.speedX;
                piece.rotation += piece.rotationSpeed;
            }
        });

        if (activePieces > 0) {
            requestAnimationFrame(animate);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }

    animate();
}

// Initialize on load
window.addEventListener('DOMContentLoaded', init);

// Handle window resize for confetti canvas
window.addEventListener('resize', () => {
    const canvas = document.getElementById('confetti-canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
