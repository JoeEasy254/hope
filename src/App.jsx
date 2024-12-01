import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [colors, setColors] = useState([
    "white",
    "yellow",
    "aqua",
    "lime",
    "fuchsia",
    "orange",
    "lightcoral",
    "deepskyblue",
    "gold",
    "springgreen",
  ]);
  const [words, setWords] = useState([
    "You are stronger than you know.",
    "This too shall pass.",
    "Every storm runs out of rain.",
    "Your struggles are the seeds of your strength.",
    "It’s okay to not be okay. Take your time to heal.",
    "You are loved, even when it feels hard to believe.",
    "One step at a time, you’re making progress.",
    "Breathe. You’ve got this.",
    "You are enough, exactly as you are.",
    "Your story is not over; brighter chapters are ahead.",
    "Keep going; the world needs your light.",
    "Hardships often prepare us for extraordinary things.",
    "You matter. Your presence makes a difference.",
    "Small steps every day lead to big changes.",
    "Be kind to yourself; you’re doing your best.",
    "You are brave for trying, and even braver for continuing.",
    "It’s not weak to ask for help. It’s courageous.",
    "You’ve survived 100% of your hardest days.",
    "Your worth isn’t measured by your struggles.",
    "Even in darkness, stars shine brightly.",
    "You have everything within you to keep going.",
    "You are more resilient than you realize.",
    "Take things one moment at a time.",
    "Rest is not failure; it’s a part of growth.",
    "Better days are coming. Keep holding on.",
    "Your feelings are valid, but they do not define you.",
    "Hope is the smallest spark that lights the darkest paths.",
    "You are a masterpiece in progress.",
    "You are not alone. Someone cares deeply about you.",
    "Believe in your ability to rise again.",
  ]);

  const [currentColor, setCurrentColor] = useState("");

  useEffect(() => {
    const interval = setTimeout(() => {
      setCounter(Math.floor(Math.random() * words.length));
      setCurrentColor(colors[Math.floor(Math.random() * colors.length)]);
    }, 4000);

    return () => clearTimeout(interval);
  }, [counter]);

  return (
    <div className="app">
      <span>
        You are loved, cherished, and appreciated more than you may ever know;
        your presence brings light and joy to those around you. Joseph M. Ngugi.
        💖
      </span>
      <h1 style={{ color: currentColor }}>{words[counter]}</h1>
      <div id="container">
        {words.map((word, index) => (
          <div
            key={index}
            id={`box${index}`}
            className="box"
            style={{
              backgroundColor: index === counter ? currentColor : "#000",
              color: index === counter ? "#fff" : "",
              borderColor: "white",
            }}
          >
            {word}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
