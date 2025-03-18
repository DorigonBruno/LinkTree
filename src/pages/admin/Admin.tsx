import { FormEvent, useState, useEffect } from "react";
import { FiTrash } from "react-icons/fi";
import Header from "../../components/header/Header";
import Input from "../../components/input/Input";
import { ToastContainer, toast } from "react-toastify";

import { db } from "../../services/firebaseConnection";
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  orderBy,
  doc,
  deleteDoc,
} from "firebase/firestore";

type LinkProps = {
  id: string;
  name: string;
  url: string;
  bg: string;
  color: string;
};

const Admin = () => {
  const [nameInput, setNameInput] = useState("");
  const [url, setUrl] = useState("");
  const [textColorInput, setTextColorInput] = useState("#ffffff");
  const [backgroundColorInput, setBackgroundColorInput] = useState("#000000");
  const [items, setItems] = useState<LinkProps[]>([]);

  useEffect(() => {
    const linksRef = collection(db, "links");
    const queryRef = query(linksRef, orderBy("created", "asc"));

    const unsub = onSnapshot(queryRef, (snapshot) => {
      const lista = [] as LinkProps[];

      snapshot.forEach((doc) => {
        lista.push({
          id: doc.id,
          name: doc.data().name,
          url: doc.data().url,
          bg: doc.data().bg,
          color: doc.data().color,
        });
      });

      setItems(lista);
    });

    return () => {
      unsub();
    };
  }, []);

  async function handleRegister(e: FormEvent) {
    e.preventDefault();

    if (nameInput === "" || url === "") {
      toast.warning("Preencha todos os campos");
      return;
    }

    addDoc(collection(db, "links"), {
      name: nameInput,
      url: url,
      bg: backgroundColorInput,
      color: textColorInput,
      created: new Date(),
    })
      .then(() => {
        toast.success("Cadastrado com sucesso");
        setNameInput("");
        setUrl("");
      })
      .catch((error) => {
        console.log("Erro ao cadastrar no banco ", error);
      });
  }

  async function handleDeleteLinks(id: string) {
    const docRef = doc(db, "links", id);

    await deleteDoc(docRef);
  }

  return (
    <div className="flex flex-col items-center w-full min-h-screen pb-7 px-2">
      <Header />

      <form
        className="flex flex-col my-8 w-full max-w-xl"
        onSubmit={handleRegister}
      >
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
          className="bg-blue-600 font-medium h-9 rounded-md text-white flex items-center justify-center mb-7 cursor-pointer"
          type="submit"
        >
          Cadastrar
        </button>
      </form>

      <h2 className="font-bold text-white text-2xl mb-4">Meus Link</h2>

      {items.map((item) => (
        <article
          className="flex justify-between items-center w-11/12 max-w-xl rounded py-3 px-2 mb-2 font-medium select-none"
          style={{ backgroundColor: item.bg, color: item.color }}
          key={item.id}
        >
          <p>{item.name}</p>

          <div>
            <button
              className="cursor-pointer p-1 rounded bg-neutral-900"
              onClick={() => handleDeleteLinks(item.id)}
            >
              <FiTrash size={18} color="#FFF" />
            </button>
          </div>
        </article>
      ))}

      <ToastContainer autoClose={1000} />
    </div>
  );
};

export default Admin;
