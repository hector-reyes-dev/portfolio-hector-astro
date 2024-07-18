import { useEffect, useRef, useState } from "react";
import { guests } from "@wedding/constants/guests";

export const GuestsForm = () => {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [link, setLink] = useState<string>("");
  const selectRef = useRef<HTMLSelectElement>(null);

  const ConfirmLink = (name: string) =>
    `https://wa.me/5215574972300?text=Hola,%20soy%20${name}.%20Confirmo%20mi%20asistencia%20a%20la%20boda.%20Saludos.`;

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    setLink(ConfirmLink(selectedValue));
  }, [selectedValue]);

  return (
    <form className="flex flex-col gap-4">
      <label
        htmlFor="guests"
        className="block mb-0 text-sm uppercase font-medium tracking-widest text-wedding-black"
      >
        Selecciona tu nombre
      </label>
      <select
        id="guests"
        className="bg-gray-50 p-4 border rounded-md border-light text-gray-900 focus:ring-wedding-secondary focus:border-wedding-secondary block w-full"
        onChange={handleSelectChange}
        ref={selectRef}
      >
        <option defaultValue={undefined}>Selecciona tu nombre</option>
        {guests.map(({ name }) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
      <a
        href={selectedValue ? link : "#"}
        target="_blank"
        className="w-full bg-wedding-secondary text-wedding-white rounded-sm uppercase flex justify-center py-4 tracking-wider hover:bg-wedding-white hover:text-wedding-secondary hover:border hover:border-wedding-secondary"
        onClick={(e) => {
          if (!selectedValue) {
            e.preventDefault();
            alert("Por favor, selecciona tu nombre.");
          }
        }}
      >
        Confirmar asistencia
      </a>
    </form>
  );
};
