import { Card, CardContent } from "@/components/ui/card";
import { Music, Film, BookOpen, UtensilsCrossed, Moon, Utensils } from "lucide-react";

const hobbies = [
  {
    title: "Singing & Listening to Music",
    description: "Music is part of my life, I loved to sing because it makes everything better.",
    icon: Music,
    // Fresh Green
    color: "bg-emerald-100/70 border-emerald-200 hover:bg-emerald-100",
    iconColor: "bg-emerald-200/80 text-emerald-800",
  },
  {
    title: "Watching Movies",
    description: "I enjoy watching movies, especially hollywood and horror movies.",
    icon: Film,
    // Buttercup Yellow
    color: "bg-amber-100/70 border-amber-200 hover:bg-amber-100",
    iconColor: "bg-amber-200/80 text-amber-800",
  },
  {
    title: "Reading Books",
    description: "I love reading books, especially novels and Biography books.",
    icon: BookOpen,
    // Seaspray Blue-Green
    color: "bg-sky-100/70 border-sky-200 hover:bg-sky-100",
    iconColor: "bg-sky-200/80 text-sky-800",
  },
  {
    title: "Cooking",
    description: "I enjoy cooking and experimenting with new recipes in the kitchen.",
    icon: UtensilsCrossed,
    // Turquoise
    color: "bg-cyan-100/70 border-cyan-200 hover:bg-cyan-100",
    iconColor: "bg-cyan-200/80 text-cyan-800",
  },
  {
    title: "Sleeping",
    description: "I love sleeping, it helps me recharge and feel refreshed for the day ahead.",
    icon: Moon,
    // Limeade Bright Pastel Green
    color: "bg-lime-100/70 border-lime-200 hover:bg-lime-100",
    iconColor: "bg-lime-200/80 text-lime-800",
  },
  {
    title: "Eating",
    description: "I love eating, it's a great way to relax and enjoy different cuisines.",
    icon: Utensils,
    // Mint
    color: "bg-teal-100/70 border-teal-200 hover:bg-teal-100",
    iconColor: "bg-teal-200/80 text-teal-800",
  },
];

export default function Hobbies() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
          Hobbies &amp; Interests
        </h1>
        <p className="text-muted-foreground">
          What I enjoy doing outside of coding.
        </p>
      </div>

      {/* 6 Custom Pastel Colored Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {hobbies.map((hobby) => {
          const Icon = hobby.icon;

          return (
            <Card
              key={hobby.title}
              className={`border transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${hobby.color}`}
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  {/* Matching Icon Box */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${hobby.iconColor}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-lg text-slate-800 leading-snug">
                    {hobby.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {hobby.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}