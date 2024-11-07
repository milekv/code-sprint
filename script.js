// Inicjalizacja edytora Ace
const editor1 = ace.edit("editor-1");
editor1.setTheme("ace/theme/monokai");
editor1.getSession().setMode("ace/mode/javascript");

const editor2 = ace.edit("editor-2");
editor2.setTheme("ace/theme/monokai");
editor2.getSession().setMode("ace/mode/javascript");

// Funkcja do uruchamiania kodu
function runCode(challengeId) {
    let userCode = '';
    let outputElement = document.getElementById('output-' + challengeId);
    
    if (challengeId === 1) {
        userCode = editor1.getValue();
    } else if (challengeId === 2) {
        userCode = editor2.getValue();
    }
    
    try {
        const result = eval(userCode);
        outputElement.textContent = 'Wynik: ' + result;
        outputElement.style.color = 'green';
    } catch (error) {
        outputElement.textContent = 'Błąd: ' + error;
        outputElement.style.color = 'red';
    }
}

