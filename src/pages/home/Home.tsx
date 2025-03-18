import { useEffect, useState } from "react";
import { db } from "../../services/firebaseConnection";
import { getDocs, collection, orderBy, query } from "firebase/firestore";

type LinkProps = {
  id: string;
  name: string;
  url: string;
  bg: string;
  color: string;
};

const Home = () => {
  const [links, setLinks] = useState<LinkProps[]>([]);

  useEffect(() => {
    function loadLinks() {
      const linksRef = collection(db, "links");
      const queryRef = query(linksRef, orderBy("created", "asc"));

      getDocs(queryRef).then((snapshot) => {
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

        setLinks(lista);
      });
    }

    loadLinks();
  }, []);

  return (
    <div className="flex flex-col w-full h-screen py-4 items-center">
      <h1 className="text-3xl md:text-4xl font-bold text-white mt-20 ">
        Bruno Dorigon
      </h1>
      <span className="text-gray-300 mb-5 mt-3">Veja meus links ⬇️</span>

      <main className="flex flex-col w-11/12 max-w-xl items-center">
        {links.map((link) => (
          <section
            className="bg-blue-600  text-white mb-4 w-full py-2 px-3 text-center rounded-lg select-none transition-transform  hover:scale-105 duration-300 ease-in-out cursor-pointer"
            style={{ backgroundColor: link.bg }}
            key={link.id}
          >
            <a href={link.url} target="_blank">
              <p
                className="text-base md:text-lg font-medium"
                style={{ color: link.color }}
              >
                {link.name}
              </p>
            </a>
          </section>
        ))}
      </main>
    </div>
  );
};

export default Home;
