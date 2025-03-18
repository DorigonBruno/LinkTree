import { useState } from "react";
import Header from "../../components/header/Header";
import Input from "../../components/input/Input";

const Admin = () => {
  const [name, setNameInput] = useState("");
  const [url, setUrl] = useState("");
  const [textColorInput, setTextColorInput] = useState("#fff");
  const [backgroundColorInput, setBackgroundColorInput] = useState("#121212");

  return (
    <div className="flex flex-col items-center w-full min-h-screen pb-7 px-2">
      <Header />

      <form className="flex flex-col my-8 w-full max-w-xl">
        <label className="text-white font-medium my-2">Nome do Link</label>
        <Input
          type="text"
          placeholder="Digite o nome do link"
          value={name}
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
              GitHub
            </p>
          </article>
        </div>
      </form>
    </div>
  );
};

export default Admin;
