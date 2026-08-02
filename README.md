# ⏱️ React Stopwatch

A simple and responsive Stopwatch application built with **React** to practice React Hooks and timer management.

## 🌐 Live Demo

🔗 Live Preview: https://stop-watch-chi-lac.vercel.app/

## 🚀 Features

* Start the stopwatch
* Stop/Pause the stopwatch
* Reset the timer
* Display time in **HH : MM : SS** format
* Automatic cleanup to prevent memory leaks
* Responsive UI using Bootstrap

## 🛠️ Technologies Used

* React
* JavaScript (ES6+)
* React Hooks

  * `useState`
  * `useEffect`
  * `useRef`
* Bootstrap 5

## 📚 What I Learned

During this project, I practiced:

* Managing component state with `useState`
* Using `useEffect` to handle side effects
* Working with `setInterval()` and cleaning it up correctly
* Using `useRef` to store the interval ID without causing re-renders
* Converting elapsed seconds into Hours, Minutes, and Seconds
* Formatting time using `padStart()`
* Organizing React components and event handlers

## ▶️ Getting Started

1. Clone the repository

```bash
git clone <repository-url>
```

2. Install dependencies

```bash
npm install
```

3. Run the development server

```bash
npm run dev
```

4. Open your browser and visit:

```
http://localhost:5173
```

## 📁 Project Structure

```text
src/
├── App.jsx
├── StopWatch.jsx
├── main.jsx
└── index.css
```

## 🎯 Future Improvements

* Add Lap functionality
* Add keyboard shortcuts
* Save timer state using Local Storage
* Add Dark/Light mode
* Add animations and sound effects
* Improve accessibility (ARIA support)

---

Made with ❤️ using React.
