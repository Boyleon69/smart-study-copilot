export default function Dashboard() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-8">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold">
            Documents
          </h2>
          <p className="text-3xl mt-2">0</p>
          <p className="text-slate-400 mt-2">
            PDFs uploaded
          </p>
        </div>

        <div className="bg-slate-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold">
            Flashcards
          </h2>
          <p className="text-3xl mt-2">0</p>
          <p className="text-slate-400 mt-2">
            Cards generated
          </p>
        </div>

        <div className="bg-slate-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold">
            Quiz Score
          </h2>
          <p className="text-3xl mt-2">0%</p>
          <p className="text-slate-400 mt-2">
            Average accuracy
          </p>
        </div>
      </div>

      <div className="mt-8 bg-slate-800 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">
          Recent Activity
        </h2>

        <p className="text-slate-400">
          No study activity yet.
        </p>
      </div>
    </main>
  );
}