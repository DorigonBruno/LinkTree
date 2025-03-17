import { Link, useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import { FormEvent, useState } from "react";
import { auth } from "../../services/firebaseconnection";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Navigate } from "react-router";

import Input from "../../components/input/Input";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (email === "" || password === "") {
      toast.warning("Digite Email e senha");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/admin", { replace: true });
      })
      .catch((error) => {
        toast.error("Email ou Senha Inválidos");
        console.log("erro ao fazer o login ", error);
      });

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
        />

        <Input
          type="password"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="h-9 bg-blue-600 hover:bg-blue-700 transition duration-300 ease-in-out rounded border-0 text-lg font-medium text-white cursor-pointer"
          type="submit"
        >
          Acessar
        </button>
      </form>

      <ToastContainer autoClose={2000} />
    </div>
  );
};

export default Login;
