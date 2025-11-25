// ===== Math Adventure - Game Logic with User Management =====

// Available Avatars
const avatars = [
    '🦊', '🐰', '🐼', '🦁', '🐯', '🐨',
    '🐸', '🦄', '🐲', '🦋', '🐝', '🐢',
    '🐙', '🦀', '🐳', '🐬', '🦜', '🦩',
    '🦉', '🐺', '🐻', '🐮', '🐷', '🐵'
];

// Grade descriptions
const gradeDescriptions = {
    1: 'Numbers 1-20, Simple Addition',
    2: 'Numbers to 100, Add & Subtract',
    3: 'Multiplication & Division',
    4: 'Fractions & Word Problems'
};

// User Management
let users = [];
let currentUser = null;
let deleteTargetId = null;

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
const prizes = [
    { emoji: '🎁', name: 'Gift Box', points: 15 },
    { emoji: '🍭', name: 'Lollipop', points: 10 },
    { emoji: '🍪', name: 'Cookie', points: 10 },
    { emoji: '🧸', name: 'Teddy Bear', points: 20 },
    { emoji: '🎈', name: 'Balloon', points: 10 },
    { emoji: '🍦', name: 'Ice Cream', points: 15 },
    { emoji: '🎀', name: 'Ribbon', points: 10 },
    { emoji: '🌟', name: 'Golden Star', points: 25 },
    { emoji: '🏅', name: 'Medal', points: 20 },
    { emoji: '🎪', name: 'Circus Ticket', points: 15 },
    { emoji: '🦋', name: 'Butterfly', points: 10 },
    { emoji: '🌈', name: 'Rainbow', points: 20 },
    { emoji: '🎨', name: 'Paint Set', points: 15 },
    { emoji: '🎮', name: 'Game Controller', points: 25 },
    { emoji: '📚', name: 'Storybook', points: 15 },
    { emoji: '🧩', name: 'Puzzle Piece', points: 10 },
    { emoji: '🎵', name: 'Music Note', points: 10 },
    { emoji: '🚀', name: 'Rocket Ship', points: 20 },
    { emoji: '👑', name: 'Crown', points: 30 },
    { emoji: '💎', name: 'Diamond', points: 30 }
];

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

// Speech messages
const speeches = {
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
    ]
};

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
    loadUsers();
    renderAvatarGrids();
    setupEventListeners();
    renderUserProfiles();
    updateSoundToggle();
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

function createUser(name, avatar, grades) {
    const user = {
        id: generateUserId(),
        name: name,
        avatar: avatar,
        grades: grades,
        stats: {
            totalGames: 0,
            totalScore: 0,
            bestStreak: 0
        },
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
                <p>No players yet! Click below to add your first player.</p>
            </div>
        `;
    } else {
        container.innerHTML = users.map(user => `
            <div class="user-profile-card" data-user-id="${user.id}">
                <span class="user-avatar">${user.avatar}</span>
                <span class="user-name">${user.name}</span>
                <span class="user-grades">Grade${user.grades.length > 1 ? 's' : ''}: ${user.grades.join(', ')}</span>
            </div>
        `).join('');

        // Add click handlers
        container.querySelectorAll('.user-profile-card').forEach(card => {
            card.addEventListener('click', () => {
                const userId = card.dataset.userId;
                loginUser(userId);
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
        container.innerHTML = '<p style="text-align: center; color: #666;">No players to manage.</p>';
    } else {
        container.innerHTML = users.map(user => `
            <div class="manage-user-card" data-user-id="${user.id}">
                <span class="user-avatar">${user.avatar}</span>
                <div class="manage-user-info">
                    <div class="user-name">${user.name}</div>
                    <div class="user-details">Grades: ${user.grades.join(', ')} | Games: ${user.stats.totalGames}</div>
                </div>
                <div class="manage-user-actions">
                    <button class="edit-btn" data-user-id="${user.id}" title="Edit">✏️</button>
                    <button class="delete-btn" data-user-id="${user.id}" title="Delete">🗑️</button>
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
            <span class="grade-number">${grade}${getOrdinalSuffix(grade)}</span>
            <span class="grade-label">Grade</span>
            <span class="grade-desc">${gradeDescriptions[grade]}</span>
            <span class="grade-stars">${stars[grade-1]}</span>
        </button>
    `).join('');

    // Add click handlers
    container.querySelectorAll('.grade-btn').forEach(btn => {
        btn.addEventListener('click', () => selectGrade(parseInt(btn.dataset.grade)));
    });
}

function getOrdinalSuffix(n) {
    const s = ['th', 'st', 'nd', 'rd'];
    const v = n % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
}

// ===== Event Listeners Setup =====
function setupEventListeners() {
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
}

function registerUser() {
    const name = document.getElementById('reg-name').value.trim();
    const selectedAvatar = document.querySelector('#avatar-grid .avatar-option.selected');
    const avatar = selectedAvatar ? selectedAvatar.dataset.avatar : avatars[0];
    const grades = Array.from(document.querySelectorAll('input[name="grade"]:checked'))
        .map(cb => parseInt(cb.value))
        .sort((a, b) => a - b);

    // Validation
    if (!name) {
        alert('Please enter your name!');
        return;
    }

    if (grades.length === 0) {
        alert('Please select at least one grade level!');
        return;
    }

    // Create user
    const user = createUser(name, avatar, grades);

    // Auto-login the new user
    loginUser(user.id);
    playSound('start');
}

function loginUser(userId) {
    const user = getUserById(userId);
    if (!user) return;

    currentUser = user;

    // Update welcome screen
    document.getElementById('welcome-avatar').textContent = user.avatar;
    document.getElementById('welcome-name').textContent = user.name;
    document.getElementById('total-games').textContent = user.stats.totalGames;
    document.getElementById('total-score').textContent = user.stats.totalScore;
    document.getElementById('best-streak-stat').textContent = user.stats.bestStreak;

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

    showScreen('edit-screen');
    playSound('click');
}

function saveUserEdit() {
    const userId = document.getElementById('edit-user-id').value;
    const name = document.getElementById('edit-name').value.trim();
    const selectedAvatar = document.querySelector('#edit-avatar-grid .avatar-option.selected');
    const avatar = selectedAvatar ? selectedAvatar.dataset.avatar : avatars[0];
    const grades = Array.from(document.querySelectorAll('input[name="edit-grade"]:checked'))
        .map(cb => parseInt(cb.value))
        .sort((a, b) => a - b);

    // Validation
    if (!name) {
        alert('Please enter a name!');
        return;
    }

    if (grades.length === 0) {
        alert('Please select at least one grade level!');
        return;
    }

    // Update user
    updateUser(userId, { name, avatar, grades });

    // Refresh manage list and go back
    renderManageUserList();
    showScreen('manage-screen');
    playSound('correct');
}

function openDeleteModal(userId) {
    const user = getUserById(userId);
    if (!user) return;

    deleteTargetId = userId;
    document.getElementById('delete-modal-text').textContent =
        `Are you sure you want to delete ${user.name}'s profile? This cannot be undone.`;
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
            display = `Which is bigger: ${f1.num}/${f1.den} or ${f2.num}/${f2.den}?`;
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
    }

    updateSpeech(speeches.encouragement[Math.floor(Math.random() * speeches.encouragement.length)]);
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
        `Question ${gameState.currentQuestion + 1} of ${gameState.totalQuestions}`;
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
    html += '<button class="big-button" id="submit-answer">Check Answer! ✓</button>';

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
    const matchProblems = gameState.problems.slice(0, 5);

    const problems = matchProblems.map((p, i) => ({
        id: i,
        display: p.display.replace(' = ?', ''),
        answer: p.answer
    }));

    const answers = problems.map(p => ({
        id: p.id,
        value: p.answer
    })).sort(() => Math.random() - 0.5);

    let html = '<div class="match-container">';
    html += '<div class="match-column">';
    problems.forEach(p => {
        html += `<div class="match-item match-problem" data-id="${p.id}">${p.display}</div>`;
    });
    html += '</div>';
    html += '<div class="match-column">';
    answers.forEach(a => {
        html += `<div class="match-item match-answer" data-id="${a.id}">${a.value}</div>`;
    });
    html += '</div>';
    html += '</div>';

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

        gameState.score += 10;
        gameState.streak++;
        gameState.correctAnswers++;
        playSound('correct');
        updateSpeech(speeches.correct[Math.floor(Math.random() * speeches.correct.length)]);

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
        updateSpeech(speeches.incorrect[Math.floor(Math.random() * speeches.incorrect.length)]);

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

// ===== Bubble Pop Mode =====
function renderBubble() {
    const problem = gameState.problems[gameState.currentQuestion];
    const gameArea = document.getElementById('game-area');

    const options = generateOptions(problem.answer);
    const colors = ['#e74c3c', '#3498db', '#2ecc71', '#9b59b6', '#f39c12', '#1abc9c'];

    let html = `<div class="bubble-question">${problem.display}</div>`;
    html += '<div class="bubble-container" id="bubble-container"></div>';

    gameArea.innerHTML = html;

    const container = document.getElementById('bubble-container');
    const containerWidth = container.offsetWidth - 100;

    options.forEach((opt, i) => {
        setTimeout(() => {
            const bubble = document.createElement('div');
            bubble.className = 'bubble';
            bubble.dataset.answer = opt;
            bubble.textContent = opt;
            bubble.style.backgroundColor = colors[i % colors.length];
            bubble.style.left = `${randomInt(20, Math.max(containerWidth, 50))}px`;
            bubble.style.animationDelay = `${i * 0.5}s`;
            bubble.style.animationDuration = `${randomInt(3, 5)}s`;

            bubble.addEventListener('click', () => popBubble(bubble, problem.answer));

            container.appendChild(bubble);
        }, i * 300);
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
            updateSpeech(speeches.incorrect[Math.floor(Math.random() * speeches.incorrect.length)]);

            if (gameState.lives <= 0) {
                endGame();
            }
        }
    }, 300);
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
            updateSpeech(speeches.streak[Math.floor(Math.random() * speeches.streak.length)]);
        } else {
            updateSpeech(speeches.correct[Math.floor(Math.random() * speeches.correct.length)]);
        }

        showFeedback(true);
    } else {
        gameState.streak = 0;
        gameState.lastPrizeStreak = 0; // Reset prize streak when wrong
        gameState.lives--;
        playSound('wrong');
        updateSpeech(speeches.incorrect[Math.floor(Math.random() * speeches.incorrect.length)]);
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
            <span class="collected-prize-item" style="animation-delay: ${i * 0.1}s" title="${prize.name}">
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
    prizeName.textContent = prize.name;
    prizePoints.textContent = `+${prize.points} bonus points!`;
    prizeStreakMsg.textContent = `🔥 ${gameState.streak} in a row! 🔥`;

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
        text.textContent = ['Correct!', 'Awesome!', 'Perfect!', 'Great job!'][Math.floor(Math.random() * 4)];
    } else {
        emoji.textContent = ['😅', '🤔', '💪'][Math.floor(Math.random() * 3)];
        text.textContent = `The answer was ${correctAnswer}`;
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

    // Update user stats
    if (currentUser) {
        currentUser.stats.totalGames++;
        currentUser.stats.totalScore += gameState.score;
        if (gameState.bestStreak > currentUser.stats.bestStreak) {
            currentUser.stats.bestStreak = gameState.bestStreak;
        }
        updateUser(currentUser.id, { stats: currentUser.stats });
    }

    // Show results
    showScreen('results-screen');

    const titleEmoji = percentage >= 70 ? '🎉' : percentage >= 50 ? '👍' : '💪';
    const titleText = percentage >= 70 ? 'Amazing Job!' : percentage >= 50 ? 'Good Try!' : 'Keep Practicing!';
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
    if (gameState.prizes.length > 0) {
        prizesWonDiv.classList.remove('hidden');
        prizesList.innerHTML = gameState.prizes.map((prize, i) => `
            <div class="prize-item" style="animation-delay: ${i * 0.1}s">
                <span class="prize-item-emoji">${prize.emoji}</span>
                <span class="prize-item-name">${prize.name}</span>
            </div>
        `).join('');
    } else {
        prizesWonDiv.classList.add('hidden');
        prizesList.innerHTML = '';
    }

    // Show achievements
    const achievements = [];
    if (gameState.correctAnswers === gameState.totalQuestions) achievements.push('🏆 Perfect Score!');
    if (gameState.bestStreak >= 5) achievements.push('🔥 Hot Streak!');
    if (gameState.score >= 100) achievements.push('⭐ Math Star!');
    if (gameState.lives === 5) achievements.push('❤️ Flawless!');
    if (gameState.prizes.length >= 3) achievements.push('🎁 Prize Collector!');

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
