import { Link } from "react-router";
import Input from "../../components/input/Input";
import { FormEvent, useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    alert("ola");

    // setEmail("");
    // setPassword("");
  }

  return (
    <div className="flex w-full h-screen items-center justify-center flex-col">
      <Link to="/">
        <h1 className="mt-11 text-white mb-7 font-bold text-5xl">
          Dev
          <span className="bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent">
            Link
          </span>
        </h1>
      </Link>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl flex flex-col px-1"
      >
        <Input
          type="email"
          placeholder="Digite o email.."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Input
          type="password"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          className="h-9 bg-blue-600 hover:bg-blue-700 transition duration-300 ease-in-out rounded border-0 text-lg font-medium text-white cursor-pointer"
          type="submit"
        >
          Acessar
        </button>
      </form>
    </div>
  );
};

export default Login;
