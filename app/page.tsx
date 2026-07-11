export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col">
      
      <header className="p-6">
        <h1 className="text-3xl font-bold text-blue-500">
          NameTrace
        </h1>
      </header>


      <section className="flex-1 flex flex-col items-center justify-center px-6">

        <h2 className="text-5xl font-bold text-center mb-6">
          Search any name
        </h2>

        <p className="text-slate-400 text-center max-w-xl mb-10">
          Find web pages where a name appears or is mentioned.
        </p>


        <div className="flex w-full max-w-xl">

          <input
            type="text"
            placeholder="Enter a name..."
            className="
              flex-1
              px-5
              py-4
              rounded-l-xl
              bg-slate-800
              border
              border-slate-700
              outline-none
            "
          />


          <button
            className="
              px-8
              bg-blue-600
              hover:bg-blue-700
              rounded-r-xl
              font-semibold
            "
          >
            Search
          </button>

        </div>


        <div className="mt-12 text-sm text-slate-500">
          Fast • Simple • Powerful
        </div>


      </section>


      <footer className="p-6 text-center text-slate-500">
        © 2026 NameTrace
      </footer>


    </main>
  );
}