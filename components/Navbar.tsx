import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white p-4">
      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/upload">Upload</Link>
        <Link href="/flashcards">Flashcards</Link>
        <Link href="/quizzes">Quizzes</Link>
        <Link href="/settings">Settings</Link>
      </div>
    </nav>
  );
}