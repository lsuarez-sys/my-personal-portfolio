import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Gamepad2, Music, Dumbbell, Plane, BookOpen, Film, CookingPot, Moon, UtensilsCrossed } from "lucide-react";

const hobbies = [
  {
    title: "Singing & Listening to Music",
    icon: Music,
    description: "Music is part of my life, i loved to sing because it makes everything better.",
  },
  {
    title: "Watching Movies",
    icon: Film,
    description: "I enjoy watching movies, especially hollywood and horror movies.",
  },
  {
    title: "Reading Books",
    icon: BookOpen,
    description: "I love reading books, especially novels and Biography books.",
  },
  {
    title: "Cooking",
    icon: CookingPot,
    description: "I enjoy cooking and experimenting with new recipes in the kitchen.",
  },
  {
    title: "Sleeping",
    icon: Moon,
    description: "I love sleeping, it helps me recharge and feel refreshed for the day ahead.",
  },
  {
    title: "Eating",
    icon: UtensilsCrossed,
    description: "I love eating, it's a great way to relax and enjoy different cuisines.",
  },
];

export default function Hobbies() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Hobbies & Interests</h1>
        <p className="text-muted-foreground mt-1">What I enjoy doing outside of coding.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hobbies.map((hobby) => {
          const Icon = hobby.icon;
          return (
            <Card key={hobby.title} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-primary/10 rounded-lg text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">{hobby.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{hobby.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}