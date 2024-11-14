const tasks = {
  "python": {
    "junior": [
      {
        "title": "Suma liczb",
        "description": "Napisz funkcję, która oblicza sumę liczb od 1 do n.",
        "solution": "n * (n + 1) // 2"
      },
      {
        "title": "Odwrócenie napisu",
        "description": "Stwórz funkcję, która odwraca podany ciąg znaków."
      },
      {
        "title": "Funkcja Parzysta",
        "description": "Napisz funkcję, która sprawdza, czy liczba jest parzysta."
      }
    ],
    "mid": [
      {
        "title": "Szukaj w tablicy",
        "description": "Zaimplementuj funkcję wyszukiwania elementu w posortowanej tablicy."
      },
      {
        "title": "Zlicz wystąpienia",
        "description": "Napisz funkcję, która liczy wystąpienia danego elementu w tablicy."
      },
      {
        "title": "Sortowanie bąbelkowe",
        "description": "Zaimplementuj algorytm sortowania bąbelkowego."
      }
    ],
    "senior": [
      {
        "title": "Algorytm Dijkstra",
        "description": "Zaimplementuj algorytm Dijkstry do znajdowania najkrótszej drogi w grafie."
      },
      {
        "title": "Dynamiczne programowanie",
        "description": "Rozwiąż problem plecakowy za pomocą dynamicznego programowania."
      },
      {
        "title": "System autoryzacji",
        "description": "Zbuduj system autoryzacji oparty na tokenach JWT."
      }
    ]
  },
  "javascript": {
    "junior": [
      {
        "title": "Sumowanie liczb",
        "description": "Stwórz funkcję, która sumuje liczby w tablicy.",
        "solution": "arr.reduce((a, b) => a + b, 0)"
      },
      {
        "title": "Odwrócenie napisu",
        "description": "Napisz funkcję, która odwraca tekst."
      },
      {
        "title": "Sprawdzanie parzystości",
        "description": "Zaimplementuj funkcję, która sprawdza, czy liczba jest parzysta."
      }
    ],
    "mid": [
      {
        "title": "Kolejka FIFO",
        "description": "Zbuduj strukturę danych do implementacji kolejki FIFO."
      },
      {
        "title": "Promisy w JavaScript",
        "description": "Stwórz funkcję zwracającą obietnicę (Promise) w JavaScript."
      },
      {
        "title": "Zliczanie wystąpień",
        "description": "Zlicz, ile razy występuje dany element w tablicy."
      }
    ],
    "senior": [
      {
        "title": "Asynchroniczność",
        "description": "Zaimplementuj asynchroniczną funkcję za pomocą async/await."
      },
      {
        "title": "Algorytm wyszukiwania binarnego",
        "description": "Zaimplementuj algorytm wyszukiwania binarnego."
      },
      {
        "title": "Wzorzec projektowy Singleton",
        "description": "Zaimplementuj wzorzec projektowy Singleton w JavaScript."
      }
    ]
  },
  "cpp": {
    "junior": [
      {
        "title": "Suma liczb",
        "description": "Napisz funkcję, która oblicza sumę liczb od 1 do n.",
        "solution": "return n * (n + 1) / 2;"
      },
      {
        "title": "Odwrócenie napisu",
        "description": "Stwórz funkcję, która odwraca podany ciąg znaków."
      },
      {
        "title": "Funkcja Parzysta",
        "description": "Napisz funkcję, która sprawdza, czy liczba jest parzysta."
      }
    ],
    "mid": [
      {
        "title": "Szukaj w tablicy",
        "description": "Zaimplementuj funkcję wyszukiwania elementu w posortowanej tablicy."
      },
      {
        "title": "Zlicz wystąpienia",
        "description": "Napisz funkcję, która liczy wystąpienia danego elementu w tablicy."
      },
      {
        "title": "Sortowanie bąbelkowe",
        "description": "Zaimplementuj algorytm sortowania bąbelkowego."
      }
    ],
    "senior": [
      {
        "title": "Algorytm Dijkstra",
        "description": "Zaimplementuj algorytm Dijkstry do znajdowania najkrótszej drogi w grafie."
      },
      {
        "title": "Dynamiczne programowanie",
        "description": "Rozwiąż problem plecakowy za pomocą dynamicznego programowania."
      },
      {
        "title": "System autoryzacji",
        "description": "Zbuduj system autoryzacji oparty na tokenach JWT."
      }
    ]
  },
  "java": {
    "junior": [
      {
        "title": "Suma liczb",
        "description": "Napisz funkcję, która oblicza sumę liczb od 1 do n.",
        "solution": "return n * (n + 1) / 2;"
      },
      {
        "title": "Odwrócenie napisu",
        "description": "Stwórz funkcję, która odwraca podany ciąg znaków."
      },
      {
        "title": "Funkcja Parzysta",
        "description": "Napisz funkcję, która sprawdza, czy liczba jest parzysta."
      }
    ],
    "mid": [
      {
        "title": "Szukaj w tablicy",
        "description": "Zaimplementuj funkcję wyszukiwania elementu w posortowanej tablicy."
      },
      {
        "title": "Zlicz wystąpienia",
        "description": "Napisz funkcję, która liczy wystąpienia danego elementu w tablicy."
      },
      {
        "title": "Sortowanie bąbelkowe",
        "description": "Zaimplementuj algorytm sortowania bąbelkowego."
      }
    ],
    "senior": [
      {
        "title": "Algorytm Dijkstra",
        "description": "Zaimplementuj algorytm Dijkstry do znajdowania najkrótszej drogi w grafie."
      },
      {
        "title": "Dynamiczne programowanie",
        "description": "Rozwiąż problem plecakowy za pomocą dynamicznego programowania."
      },
      {
        "title": "System autoryzacji",
        "description": "Zbuduj system autoryzacji oparty na tokenach JWT."
      }
    ]
  }
};

document.getElementById('start-challenge').addEventListener('click', function() {
  const language = document.getElementById('language-select').value;
  const level = document.getElementById('level-select').value;
  const challenges = tasks[language][level];
  
  const randomIndex = Math.floor(Math.random() * challenges.length);
  const task = challenges[randomIndex];

  document.getElementById('challenge-title').innerText = task.title;
  document.getElementById('challenge-description').innerText = task.description;

  document.getElementById('selection').style.display = 'none';
  document.getElementById('challenge').style.display = 'block';
});

document.getElementById('run-challenge').addEventListener('click', function() {
  const userCode = document.getElementById('code-editor').value;
  const language = document.getElementById('language-select').value;
  const level = document.getElementById('level-select').value;
  const challenges = tasks[language][level];
  const task = challenges.find(t => t.title === document.getElementById('challenge-title').innerText);
  const correctSolution = task.solution || '';

  if (userCode.trim() === correctSolution.trim()) {
    document.getElementById('result').innerText = 'Brawo! Twój kod jest poprawny!';
  } else {
    document.getElementById('result').innerText = 'Kod jest niepoprawny. Spróbuj ponownie.';
  }
});
