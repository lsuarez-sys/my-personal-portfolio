import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[75vh] text-center px-4">
      
      {/* Decorative Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 border border-pink-200 text-pink-800 text-sm font-medium mb-6 shadow-sm">
        <Sparkles className="h-4 w-4 text-pink-600" />
        <span>Welcome to my digital portfolio</span>
      </div>

      {/* Main Title */}
      <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight max-w-3xl mb-4">
        Bonjour, I'm <span className="text-pink-600">Lara Suarez</span>
      </h1>

      {/* Subtitle */}
      <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mb-8 leading-relaxed">
        An Information Systems student passionate about building a functional, and creative web applications using modern technologies.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/about"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-pink-600 text-white font-medium shadow-sm hover:bg-pink-700 transition-colors"
        >
          <span>Learn More About Me</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-100 text-purple-900 border border-purple-200 font-medium hover:bg-purple-200/60 transition-colors"
        >
          Get in Touch
        </Link>
      </div>

    </div>
  );
}