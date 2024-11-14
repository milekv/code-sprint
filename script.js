const tasks = {
  "python": {
    "junior": [
      {
        "title": "Suma liczb",
        "description": "Napisz funkcję, która oblicza sumę liczb od 1 do n.",
        "solution": "def sum_numbers(n):\n    return sum(range(1, n+1))"
      },
      {
        "title": "Odwrócenie napisu",
        "description": "Stwórz funkcję, która odwraca podany ciąg znaków.",
        "solution": "def reverse_string(s):\n    return s[::-1]"
      },
      {
        "title": "Funkcja Parzysta",
        "description": "Napisz funkcję, która sprawdza, czy liczba jest parzysta.",
        "solution": "def is_even(n):\n    return n % 2 == 0"
      }
    ],
    "mid": [
      {
        "title": "Szukaj w tablicy",
        "description": "Zaimplementuj funkcję wyszukiwania elementu w posortowanej tablicy.",
        "solution": "def search_in_array(arr, target):\n    return target in arr"
      },
      {
        "title": "Zlicz wystąpienia",
        "description": "Napisz funkcję, która liczy wystąpienia danego elementu w tablicy.",
        "solution": "def count_occurrences(arr, target):\n    return arr.count(target)"
      },
      {
        "title": "Sortowanie bąbelkowe",
        "description": "Zaimplementuj algorytm sortowania bąbelkowego.",
        "solution": "def bubble_sort(arr):\n    for i in range(len(arr)):\n        for j in range(0, len(arr)-i-1):\n            if arr[j] > arr[j+1]:\n                arr[j], arr[j+1] = arr[j+1], arr[j]"
      }
    ],
    "senior": [
      {
        "title": "Algorytm Dijkstra",
        "description": "Zaimplementuj algorytm Dijkstry do znajdowania najkrótszej drogi w grafie.",
        "solution": "import heapq\n\ndef dijkstra(graph, start):\n    distances = {vertex: float('infinity') for vertex in graph}\n    distances[start] = 0\n    priority_queue = [(0, start)]\n    while priority_queue:\n        current_distance, current_vertex = heapq.heappop(priority_queue)\n        if current_distance > distances[current_vertex]:\n            continue\n        for neighbor, weight in graph[current_vertex].items():\n            distance = current_distance + weight\n            if distance < distances[neighbor]:\n                distances[neighbor] = distance\n                heapq.heappush(priority_queue, (distance, neighbor))\n    return distances"
      },
      {
        "title": "Dynamiczne programowanie",
        "description": "Rozwiąż problem plecakowy za pomocą dynamicznego programowania.",
        "solution": "def knapsack(weights, values, capacity):\n    n = len(weights)\n    dp = [[0 for _ in range(capacity+1)] for _ in range(n+1)]\n    for i in range(n+1):\n        for w in range(capacity+1):\n            if i == 0 or w == 0:\n                dp[i][w] = 0\n            elif weights[i-1] <= w:\n                dp[i][w] = max(values[i-1] + dp[i-1][w-weights[i-1]], dp[i-1][w])\n            else:\n                dp[i][w] = dp[i-1][w]\n    return dp[n][capacity]"
      },
      {
        "title": "System autoryzacji",
        "description": "Zbuduj system autoryzacji oparty na tokenach JWT.",
        "solution": "import jwt\nfrom datetime import datetime, timedelta\n\ndef create_jwt(user_id):\n    expiration_time = datetime.utcnow() + timedelta(hours=1)\n    payload = {'user_id': user_id, 'exp': expiration_time}\n    return jwt.encode(payload, 'secret', algorithm='HS256')"
      }
    ]
  },
  "javascript": {
    "junior": [
      {
        "title": "Sumowanie liczb",
        "description": "Stwórz funkcję, która sumuje liczby w tablicy.",
        "solution": "function sumNumbers(arr) {\n  return arr.reduce((a, b) => a + b, 0);\n}"
      },
      {
        "title": "Odwrócenie napisu",
        "description": "Napisz funkcję, która odwraca tekst.",
        "solution": "function reverseString(s) {\n  return s.split('').reverse().join('');\n}"
      },
      {
        "title": "Sprawdzanie parzystości",
        "description": "Zaimplementuj funkcję, która sprawdza, czy liczba jest parzysta.",
        "solution": "function isEven(n) {\n  return n % 2 === 0;\n}"
      }
    ],
    "mid": [
      {
        "title": "Kolejka FIFO",
        "description": "Zbuduj strukturę danych do implementacji kolejki FIFO.",
        "solution": "class Queue {\n  constructor() {\n    this.items = [];\n  }\n  enqueue(item) {\n    this.items.push(item);\n  }\n  dequeue() {\n    return this.items.shift();\n  }\n}"
      },
      {
        "title": "Promisy w JavaScript",
        "description": "Stwórz funkcję zwracającą obietnicę (Promise) w JavaScript.",
        "solution": "function myPromise() {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      resolve('Success');\n    }, 1000);\n  });\n}"
      },
      {
        "title": "Zliczanie wystąpień",
        "description": "Zlicz, ile razy występuje dany element w tablicy.",
        "solution": "function countOccurrences(arr, target) {\n  return arr.filter(item => item === target).length;\n}"
      }
    ],
    "senior": [
      {
        "title": "Asynchroniczność",
        "description": "Zaimplementuj asynchroniczną funkcję za pomocą async/await.",
        "solution": "async function fetchData(url) {\n  const response = await fetch(url);\n  const data = await response.json();\n  return data;\n}"
      },
      {
        "title": "Algorytm wyszukiwania binarnego",
        "description": "Zaimplementuj algorytm wyszukiwania binarnego.",
        "solution": "function binarySearch(arr, target) {\n  let left = 0, right = arr.length - 1;\n  while (left <= right) {\n    let mid = Math.floor((left + right) / 2);\n    if (arr[mid] === target) {\n      return mid;\n    }\n    if (arr[mid] < target) {\n      left = mid + 1;\n    } else {\n      right = mid - 1;\n    }\n  }\n  return -1;\n}"
      },
      {
        "title": "Wzorzec projektowy Singleton",
        "description": "Zaimplementuj wzorzec projektowy Singleton w JavaScript.",
        "solution": "const Singleton = (function() {\n  let instance;\n  function createInstance() {\n    return {name: 'Singleton'};\n  }\n  return function() {\n    if (!instance) {\n      instance = createInstance();\n    }\n    return instance;\n  };\n})();"
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
