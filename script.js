// Inicjalizacja edytora kodu (użyjemy Ace Editor)
const editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/javascript"); // Domyślnie ustawiamy na JavaScript

// Obiekty wyzwań
const challenges = {
    javascript: {
        junior: [
            { title: "FizzBuzz", description: "Wypisz liczby od 1 do 100." },
            { title: "Palindrome", description: "Sprawdź, czy ciąg jest palindromem." }
        ],
        mid: [
            { title: "Sum of Squares", description: "Oblicz sumę kwadratów liczb." }
        ],
        senior: [
            { title: "Prime Numbers", description: "Znajdź liczby pierwsze do 1000." }
        ]
    }
};
// Funkcja losująca zadanie na podstawie języka i poziomu
function getRandomChallenge(language, level) {
    fetch('tasks.json')
        .then(response => response.json())
        .then(tasks => {
            const challenges = tasks[language][level];
            const randomIndex = Math.floor(Math.random() * challenges.length);
            const task = challenges[randomIndex];
            document.getElementById('challenge-title').innerText = task.title;
            document.getElementById('challenge-description').innerText = task.description;
        })
        .catch(error => console.error('Błąd:', error));
}

// Funkcja, która uruchamia odpowiednie wyzwanie
function startChallenge() {
    const language = document.getElementById("language").value;
    const difficulty = document.getElementById("difficulty").value;

    // Zmieniamy wygląd i treść w zależności od wyboru
    document.getElementById("challengeTitle").innerText = `${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} Challenge`;

    // Ładujemy odpowiednie wyzwania
    loadChallenges(language, difficulty);

    // Ukrycie sekcji wyboru i wyświetlenie sekcji z wyzwaniem
    document.getElementById("selection").style.display = "none";
    document.getElementById("challenge").style.display = "block";

    // Zmiana trybu edytora w zależności od języka
    switch (language) {
        case "javascript":
            editor.getSession().setMode("ace/mode/javascript");
            break;
        case "python":
            editor.getSession().setMode("ace/mode/python");
            break;
        case "java":
            editor.getSession().setMode("ace/mode/java");
            break;
    }
}

// Funkcja ładowania wyzwań na podstawie wybranego języka i poziomu
function loadChallenges(language, difficulty) {
    const selectedChallenges = challenges[language][difficulty];
    let challengeHtml = '';
    
    selectedChallenges.forEach(challenge => {
        challengeHtml += `
            <div class="challenge-card">
                <h3>${challenge.title}</h3>
                <p>${challenge.description}</p>
            </div>
        `;
    });

    document.getElementById('rankingTable').innerHTML = challengeHtml;
}

// Funkcja do uruchomienia kodu użytkownika (backendowa część nie została tu uwzględniona)
function runCode() {
    const userCode = editor.getValue();
    const output = document.getElementById("output");

    try {
        const result = eval(userCode);  // Uwaga: eval jest niebezpieczny w produkcji, użyj w backendzie!
        output.textContent = 'Wynik: ' + result;
        output.style.color = 'green';
    } catch (error) {
        output.textContent = 'Błąd: ' + error;
        output.style.color = 'red';
    }
}
