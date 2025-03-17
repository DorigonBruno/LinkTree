import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>

const Input = (props: InputProps) => {
  return (
    <input
      className="border-none h-9 bg-white rounded-md outline-none px-2 mb-3"
      {...props}
    />
  );
};

export default Input;
