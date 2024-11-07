// Przykładowe zadania w formacie JSON
const tasks = {
    "python": {
        "junior": [
            {
                "title": "Zadanie 1",
                "description": "Napisz program, który obliczy sumę dwóch liczb.",
                "solution": "def sum_two_numbers(a, b):\n    return a + b"
            },
            {
                "title": "Zadanie 2",
                "description": "Napisz program, który zwróci największy element w tablicy.",
                "solution": "def max_in_list(lst):\n    return max(lst)"
            }
        ],
        "mid": [
            {
                "title": "Zadanie 3",
                "description": "Napisz funkcję, która odwróci łańcuch znaków.",
                "solution": "def reverse_string(s):\n    return s[::-1]"
            }
        ]
    },
    "javascript": {
        "junior": [
            {
                "title": "Zadanie 1",
                "description": "Napisz funkcję, która obliczy sumę dwóch liczb.",
                "solution": "function sumTwoNumbers(a, b) {\n    return a + b;\n}"
            }
        ]
    }
};

// Funkcja losująca zadanie
document.getElementById('start-challenge').addEventListener('click', function() {
    const language = document.getElementById('language-select').value;
    const level = document.getElementById('level-select').value;
    const challenges = tasks[language][level];
    const randomIndex = Math.floor(Math.random() * challenges.length);
    const task = challenges[randomIndex];

    // Wyświetlenie tytułu i opisu zadania
    document.getElementById('challenge-title').innerText = task.title;
    document.getElementById('challenge-description').innerText = task.description;

    // Ukrycie sekcji wyboru i pokazanie sekcji z wyzwaniem
    document.getElementById('selection').style.display = 'none';
    document.getElementById('challenge').style.display = 'block';
});

// Funkcja uruchamiająca kod i sprawdzająca wynik
document.getElementById('run-challenge').addEventListener('click', function() {
    const userCode = document.getElementById('code-editor').value;
    const language = document.getElementById('language-select').value;
    const level = document.getElementById('level-select').value;
    const challenges = tasks[language][level];
    const task = challenges.find(t => t.title === document.getElementById('challenge-title').innerText);
    const correctSolution = task.solution;

    // Sprawdzenie rozwiązania (proste porównanie)
    if (userCode.trim() === correctSolution.trim()) {
        document.getElementById('result').innerText = 'Brawo! Twój kod jest poprawny!';
    } else {
        document.getElementById('result').innerText = 'Kod jest niepoprawny. Spróbuj ponownie.';
    }
});
