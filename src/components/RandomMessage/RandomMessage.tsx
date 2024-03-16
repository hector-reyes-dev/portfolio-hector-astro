import { useEffect, useState } from "react";
import "./styles.css";

const messages = [
  "✨ ¡Me alegro de verte aquí!",
  "👋 ¡Bienvenid@ a mi portafolio!",
  "🚀 ¿Y si trabajamos algo juntos?",
  "🏆 Estoy listo para crear tu próximo proyecto",
  "💼 ¿Ya conoces mis servicios?",
  "🎮 ¡Encontraste un huevo de pascua!",
  "🧙‍♂️ Aquí hay algo más que solo estilos",
  "🎉 npm install -g fun",
  "💎 <h1>Bienvenid@</h1>",
  "🤔 ¿FullStack? Sí",
  "💖 Carol's version",
  "👀 ¡Busca más allá de lo visible!",
  "🧊 Aprendiz ThreeJS",
  "🦄 Sigue el camino del unicornio",
];

const getRandom = (items: string[]) =>
  items[Math.floor(Math.random() * items.length)];

export const RandomMessage = () => {
  const [message, setMessage] = useState("");
  const [styles, setStyles] = useState({});

  const containerStyles =
    "typewriter py-1 px-4 bg-white rounded-full shadow-sm text-dark-gray text-sm";

  useEffect(() => {
    setMessage(getRandom(messages));
    const messageWidth = message.length;

    setStyles({
      display: message.length > 0 ? "block" : "none",
      maxWidth: `${messageWidth}ch`,
      animation: `typing 3s steps(${messageWidth}) forwards`,
    });
  }, [message]);

  return (
    <span className={containerStyles}>
      <span style={styles}>{message ? message : "..."}</span>
    </span>
  );
};
