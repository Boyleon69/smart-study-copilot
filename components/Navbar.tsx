export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white p-4">
      <div className="flex gap-6">
        <span>Home</span>
        <span>Dashboard</span>
        <span>Upload</span>
        <span>Flashcards</span>
        <span>Quizzes</span>
        <span>Settings</span>
      </div>
    </nav>
  );
}