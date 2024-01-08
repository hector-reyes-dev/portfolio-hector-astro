import { useEffect, useState } from "react";

const messages = [
  "✨ ¡Me alegro de verte aquí!",
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
  "🧊 Próximo experto en ThreeJS",
  "🦄 Aquí un unicornio",
];

const getRandom = (items: string[]) =>
  items[Math.floor(Math.random() * items.length)];

export const RandomMessage = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage(getRandom(messages));
  }, []);

  const styles =
    "w-fit bg-white bg-opacity-80 text-dark-gray py-1 px-4 rounded-full text-sm shadow-sm";

  return <span className={message ? styles : "opacity-0"}>{message}</span>;
};
