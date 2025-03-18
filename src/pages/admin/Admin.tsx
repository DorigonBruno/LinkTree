import { useState } from "react";
import Header from "../../components/header/Header";
import Input from "../../components/input/Input";
import { FiTrash } from "react-icons/fi";

const Admin = () => {
  const [nameInput, setNameInput] = useState("");
  const [url, setUrl] = useState("");
  const [textColorInput, setTextColorInput] = useState("#fff");
  const [backgroundColorInput, setBackgroundColorInput] = useState("#000");

  return (
    <div className="flex flex-col items-center w-full min-h-screen pb-7 px-2">
      <Header />

      <form className="flex flex-col my-8 w-full max-w-xl">
        <label className="text-white font-medium my-2">Nome do Link</label>
        <Input
          type="text"
          placeholder="Digite o nome do link"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />

        <label className="text-white font-medium my-2">URL do Link</label>
        <Input
          type="url"
          placeholder="https://google.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <section className="flex my-4 gap-5">
          <div className="flex items-center gap-2">
            <label className="text-white font-medium my-2">
              Cor do texto do Link
            </label>
            <input
              type="color"
              value={textColorInput}
              onChange={(e) => setTextColorInput(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-2">
            <label className="text-white font-medium my-2">
              Cor de fundo do Link:
            </label>
            <input
              type="color"
              value={backgroundColorInput}
              onChange={(e) => setBackgroundColorInput(e.target.value)}
            />
          </div>
        </section>

        {nameInput !== "" && (
          <div className="flex items-center justify-start flex-col mb-7 p-2 border-gray-100/25 border rounded-md">
            <label className="text-white font-medium mb-3">
              Veja como está ficando
            </label>
            <article
              className="w-11/12 max-w-lg flex flex-col items-center justify-between bg-amber-400 rounded px-1 py-2"
              style={{
                marginBottom: 8,
                marginTop: 8,
                backgroundColor: backgroundColorInput,
              }}
            >
              <p className="font-medium" style={{ color: textColorInput }}>
                {nameInput}
              </p>
            </article>
          </div>
        )}

        <button
          className="bg-blue-600 font-medium h-9 rounded-md text-white gap-4 flex justify-center items-center mb-7 cursor-pointer"
          type="submit"
        >
          Cadastrar
        </button>
      </form>

      <h2 className="font-bold text-white text-2xl mb-4">Meus Link</h2>

      <article
        className="flex justify-between items-center w-11/12 max-w-xl rounded py-3 px-2 mb-2 font-medium select-none"
        style={{ backgroundColor: "#2563eb", color: "#FFF" }}
      >
        <p>Nome do Link</p>

        <div>
          <button className="cursor-pointer border border-dashed p-1 rounded bg-neutral-900">
            <FiTrash size={18} color="#FFF" />
          </button>
        </div>
      </article>
    </div>
  );
};

export default Admin;
