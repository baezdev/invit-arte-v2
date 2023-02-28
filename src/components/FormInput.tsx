import { useRef } from "preact/hooks";

export const FormInput = () => {
  const inputRef: any = useRef();

  return (
    <div
      class="h-[75px] border-2 pt-8 px-9 text-lg relative focus-within:border-primary  transition-all duration-200 cursor-text w-full rounded-lg"
      onClick={() => inputRef?.current?.focus()}
    >
      <label
        for=""
        class="absolute text-base top-[8px] transition-all duration-200 text-gray-400"
      >
        Nombre
      </label>
      <input
        type="text"
        name=""
        id=""
        class="outline-none bg-transparent text-xl"
        ref={inputRef}
      />
    </div>
  );
};
