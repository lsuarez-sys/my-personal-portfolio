import { Card, CardContent } from "@/components/ui/card";
import {
  Code2,
  Database,
  Palette,
  Lightbulb,
  GraduationCap,
  Target,
  Heart,
  Sparkles,
} from "lucide-react";

const skills = [
  {
    title: "Web Development",
    description: "Building responsive, modern user interfaces with Next.js, React, and Tailwind CSS.",
    icon: Code2,
    color: "bg-pink-100/70 border-pink-300 hover:bg-pink-100",
    iconColor: "bg-pink-200 border border-pink-300 text-pink-700",
  },
  {
    title: "UI/UX Design",
    description: "Crafting clean, accessible, and intuitive user experiences with cohesive color systems.",
    icon: Palette,
    color: "bg-purple-100/70 border-purple-300 hover:bg-purple-100",
    iconColor: "bg-purple-200 border border-purple-300 text-purple-800",
  },
  {
    title: "Database Management",
    description: "Structuring and managing backend data using SQL databases and modern backend frameworks.",
    icon: Database,
    color: "bg-sky-100/70 border-sky-300 hover:bg-sky-100",
    iconColor: "bg-sky-200 border border-sky-300 text-sky-700",
  },
  {
    title: "Problem Solving",
    description: "Applying critical thinking to resolve bugs, optimize features, and continuous learning.",
    icon: Lightbulb,
    color: "bg-teal-100/70 border-teal-300 hover:bg-teal-100",
    iconColor: "bg-teal-200 border border-teal-300 text-teal-800",
  },
];

export default function About() {
  return (
    <div className="max-w-5xl mx-auto space-y-10">
      
      {/* Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>Get To Know Me</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
          About Me
        </h1>
        <p className="text-slate-600">
          A quick glimpse into who I am, what drives my passion for technology, and the journey I'm on.
        </p>
      </div>

      {/* 1. Introduction Card (Soft Pastel Yellow Theme) */}
      <Card className="border border-amber-200 bg-amber-100/70 hover:bg-amber-100 transition-all duration-300 shadow-sm overflow-hidden">
        <CardContent className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            
            {/* Left Icon Container Box */}
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-2xl bg-amber-200/80 border border-amber-300 flex items-center justify-center shrink-0 shadow-sm">
              <GraduationCap className="w-20 h-20 text-amber-800" />
            </div>

            {/* Right Text Content */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-amber-950">
                Hello, I'm Lara!
              </h2>

              <p className="text-slate-700 leading-relaxed">
                Currently I'm studying Bachelor of Science in Information Systems.
                I am a student enthusiastic about technology, creativity, 
                and continuous learning. I enjoy discovering how technology 
                can solve real-world problems and create meaningful experiences.
              </p>

              <p className="text-slate-700 leading-relaxed">
                I'm eager to learn new things, explore different
                areas of technology, and I want to contribute to projects
                someday that make a positive impact on the community.
                And I believe that studying programming and web development
                helps me to think critically and solve problems using technology.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 2. What I Do Section */}
      <section className="space-y-5">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">What I'm Exploring</h2>
          <p className="text-slate-600 mt-1">
            Areas that inspire me to learn and grow.
          </p>
        </div>

        {/* 4 Pastel Colored Skill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <Card
                key={skill.title}
                className={`border transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${skill.color}`}
              >
                <CardContent className="p-6 space-y-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${skill.iconColor}`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-semibold text-lg text-slate-900">
                    {skill.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {skill.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* 3. Personal Goals Box */}
      <Card className="border border-emerald-300 bg-emerald-100/70 hover:bg-emerald-100 transition-all duration-300 shadow-sm">
        <CardContent className="p-6 md:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-200 border border-emerald-300 text-emerald-800 shrink-0">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">My Goal</h2>
          </div>

          <p className="text-slate-700 leading-relaxed text-base">
            My goal in life is to become a UI/UX designer
            who can contribute to the tech industry and
            make a positive impact. I believe that
            every experience is an opportunity to learn something
            new, and every challenge helps me grow and improve.
          </p>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-200/80 border border-emerald-300 text-emerald-900 font-semibold text-sm">
            <Heart className="w-4 h-4 fill-emerald-400 text-emerald-800" />
            <span>Learn. Create. Explore. Grow.</span>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}