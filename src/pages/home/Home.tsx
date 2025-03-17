const Home = () => {
  return (
    <div className="flex flex-col w-full h-screen py-4 items-center">
      <h1 className="text-3xl md:text-4xl font-bold text-white mt-20 ">
        BrunoDev
      </h1>
      <span className="text-gray-300 mb-5 mt-3">Veja meus links ⬇️</span>

      <main className="flex flex-col w-11/12 max-w-xl items-center">
        <section className="bg-white mb-4 w-full py-2 px-3 text-center rounded-lg select-none transition-transform hover:scale-105 duration-300 ease-in-out cursor-pointer">
          <a href="">
            <p className="text-base md:text-lg">Linkedin</p>
          </a>
        </section>
      </main>
    </div>
  );
};

export default Home;
