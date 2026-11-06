import { Card, CardContent } from "@/components/ui/card";
import {
  Code2,
  Database,
  Palette,
  Lightbulb,
  GraduationCap,
  Target,
  Heart,
} from "lucide-react";

const skills = [
  {
    title: "Web Development",
    description: "Creating responsive and user-friendly websites.",
    icon: Code2,
  },
  {
    title: "Database Management",
    description: "Organizing, managing, and working with data.",
    icon: Database,
  },
  {
    title: "UI/UX Design",
    description: "Designing simple, creative, and meaningful interfaces.",
    icon: Palette,
  },
  {
    title: "Problem Solving",
    description: "Exploring ideas and finding solutions through technology.",
    icon: Lightbulb,
  },
];

export default function About() {
  return (
    <div className="max-w-5xl mx-auto space-y-10">

      {/* Header */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-primary">
          GET TO KNOW ME
        </p>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          About Me
        </h1>
        <p className="text-muted-foreground">
          A little introduction about who I am and what I do.
        </p>
      </div>

      {/* Introduction */}
      <Card className="border-none shadow-sm">
        <CardContent className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">

            <div className="w-40 h-40 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
              <GraduationCap className="w-20 h-20 text-primary" />
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">
                Hello, I'm Lara!
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                Currently I'm Studying Bachelors of Science in Information Systems.
                I am a student enthusiastic about technology, creativity, 
                and continuous learning I enjoy discovering how technology 
                can solve real-world problems and create meaningful experiences.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                I'm eager to learn new things, explore different
                areas of technology, and I want to contribute to projects
                someday that make a positive impact, to the community.
                And I believe that studying programming and web development
                help me to think critically and, solve problems using technology.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* What I Do */}
      <section className="space-y-5">
        <div>
          <h2 className="text-2xl font-bold">What I'm Exploring</h2>
          <p className="text-muted-foreground mt-1">
            Areas that inspire me to learn and grow.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <Card
                key={skill.title}
                className="hover:shadow-md transition-all duration-300"
              >
                <CardContent className="p-6 space-y-3">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-semibold text-lg">
                    {skill.title}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    {skill.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Personal Goals */}
      <Card className="border-none bg-primary/5">
        <CardContent className="p-6 md:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <Target className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">My Goal</h2>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            My goal in life is to become a UI/UX designer
            who can contribute to the tech industry and
            make a positive impact. I believe that
            every experience is an opportunity to learn something
            new, and every challenge helps me grow and improve.
          </p>

          <div className="flex items-center gap-2 text-primary font-medium">
            <Heart className="w-5 h-5" />
            <span>Learn. Create. Explore. Grow.</span>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
