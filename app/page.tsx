export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white">
      <h1 className="text-6xl font-bold mb-4">
        Smart Study Copilot
      </h1>

      <p className="text-xl text-slate-300 mb-8">
        Upload notes. Chat with documents. Generate quizzes and flashcards.
      </p>

      <button className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700">
        Get Started
      </button>
    </main>
  );
}