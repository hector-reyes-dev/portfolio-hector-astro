import React, { useState } from "react";

// Asegura que el componente funcione en Astro
// Si usas Astro, importa como <FloatingButton client:react />

const FloatingButton: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [score, setScore] = useState(10);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [thanks, setThanks] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/feedback-system/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ score, message, name }),
    });
    if (res.ok) {
      setOpen(false);
      setThanks(true);
      setTimeout(() => setThanks(false), 2000);
      setMessage("");
      setName("");
      setScore(10);
    }
  };

  return (
    <>
      <button
        aria-label="¿Cómo puedo mejorar?"
        onClick={() => setOpen(true)}
        className="fixed bottom-8 right-8 rounded-lg bg-purple text-white px-6 py-3 font-semibold shadow-lg z-50 text-base border-none cursor-pointer hover:bg-blue-700 transition-colors"
        type="button"
      >
        ¿Cómo puedo mejorar?
      </button>

      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-[100] flex items-center justify-center"
          onClick={() => setOpen(false)}
        >
          <form
            onClick={(e) => e.stopPropagation()}
            onSubmit={handleSubmit}
            className="m-4 bg-white rounded-2xl p-8 shadow-2xl min-w-[320px] max-w-[90vw] flex flex-col gap-4 w-full md:max-w-[500px]"
          >
            <label className="flex flex-col font-medium text-sm">
              Calificación:
              <div className="flex flex-row gap-2 mt-2 justify-between">
                {Array.from({ length: 10 }, (_, i) => {
                  const value = i + 1;
                  const selected = score === value;
                  return (
                    <button
                      key={value}
                      type="button"
                      aria-label={`Calificación ${value}`}
                      className={
                        `w-9 h-9 rounded-full flex items-center justify-center border text-base font-semibold transition-colors ` +
                        (selected
                          ? "bg-purple text-white border-purple shadow"
                          : "bg-white text-dark-gray border-light")
                      }
                      onClick={() => setScore(value)}
                    >
                      {value}
                    </button>
                  );
                })}
              </div>
              <div className="flex flex-row justify-between mt-1 text-xs text-gray-400">
                <span>Pobre</span>
                <span>Excelente</span>
              </div>
            </label>
            <label className="flex flex-col font-medium text-sm">
              Mensaje:
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="mt-1 rounded-md border border-light px-2 py-2 min-h-[80px] resize-y focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </label>
            <label className="flex flex-col font-medium text-sm">
              Nombre:
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 rounded-md border border-light px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </label>
            <div className="flex gap-4 justify-end mt-2">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="bg-gray-100 text-gray-800 rounded-lg px-4 py-2 hover:bg-gray-200 transition-colors"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="bg-purple text-white rounded-lg px-4 py-2 font-semibold hover:bg-blue-700 transition-colors"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      )}

      {thanks && (
        <div className="fixed bottom-24 right-8 bg-white text-blue-600 px-6 py-3 rounded-2xl shadow-lg z-[101] font-semibold">
          ¡Gracias por tu feedback!
        </div>
      )}
    </>
  );
};

export default FloatingButton;
