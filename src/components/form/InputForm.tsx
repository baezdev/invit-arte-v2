import { MouseEventHandler, useState } from "react";

interface Props {
  name: string;
  label: string;
  type: string;
  holder: string;
  icon: JSX.Element;
}

export const InputForm = ({ name, label, type, holder, icon }: Props) => {
  const [inputType, setInputType] = useState(type);

  function showPassword() {
    inputType === "password" ? setInputType("text") : setInputType("password");
  }

  return (
    <>
      <label htmlFor={name} className="block mb-3 font-semibold">
        {label}
      </label>
      <div className="flex justify-between gap-x-3 py-3 px-4 border-2 border-gray-200 focus-within:border-primary bg-gray-50 rounded-xl items-center [&>svg]:focus-within:fill-primary focus-within:bg-white transition-all duration-200">
        {icon}
        <input
          type={inputType}
          className="flex-1 text-lg font-medium bg-transparent outline-none"
          placeholder={holder}
        />
        {/* <img src="/icons/check.svg" alt="" /> */}
        {name === "password" && (
          <button
            className="px-4 py-1 text-xs font-semibold border rounded-lg text-primary border-primary bg-primary bg-opacity-10"
            type="button"
            onClick={showPassword}
          >
            Ver
          </button>
        )}
      </div>
    </>
  );
};
