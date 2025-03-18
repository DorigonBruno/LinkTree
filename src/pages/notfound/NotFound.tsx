import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center ">
      <h1 className="text-3xl md:text-5xl text-white font-bold mt-20">
        404
      </h1>
      <h1 className="text-3xl md:text-5xl text-white font-bold mb-3 mt-2">
        Página não encontrada
      </h1>
      <p className="mb-4 text-gray-400 text-lg">
        Você caiu em uma página que não existe
      </p>
      <Link to="/" className="underline text-white font-medium">
        Voltar
      </Link>
    </div>
  );
};

export default NotFound;
