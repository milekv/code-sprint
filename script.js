// Inicjalizacja edytora kodu (użyjemy Ace Editor)
const editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/javascript"); // Domyślnie ustawiamy na JavaScript

// Funkcja, która uruchamia odpowiednie wyzwanie
function startChallenge() {
    const language = document.getElementById("language").value;
    const difficulty = document.getElementById("difficulty").value;

    // Zmieniamy wygląd i treść w zależności od wyboru
    document.getElementById("challengeTitle").innerText = `${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} Challenge`;

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
