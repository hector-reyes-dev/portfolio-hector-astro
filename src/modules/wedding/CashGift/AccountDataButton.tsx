interface Props {
  subtitle: string;
  title: string;
  children: any;
}

export const AccountDataButton = ({ subtitle, title, children }: Props) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(title);
    alert(`${title} Se copió al portapapeles`);
  };

  return (
    <button
      onClick={() => handleCopy()}
      className="mb-6 flex flex-row gap-4 items-center justify-start"
    >
      {children}
      <div className="flex-col items-start text-left">
        <span className="uppercase text-xs">{subtitle}</span>
        <p className="text-lg text-wedding-main font-bold">{title}</p>
      </div>
    </button>
  );
};
