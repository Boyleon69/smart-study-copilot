export default function Dashboard() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-6">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold">
            Documents
          </h2>
          <p className="text-3xl mt-2">0</p>
        </div>

        <div className="bg-slate-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold">
            Flashcards
          </h2>
          <p className="text-3xl mt-2">0</p>
        </div>

        <div className="bg-slate-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold">
            Quiz Score
          </h2>
          <p className="text-3xl mt-2">0%</p>
        </div>
      </div>
    </main>
  );
}
``