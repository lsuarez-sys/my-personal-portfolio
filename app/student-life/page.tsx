import { Card, CardContent } from "@/components/ui/card";
import {
  GraduationCap,
  BookOpen,
  Code2,
  Users,
  Lightbulb,
  Coffee,
  Laptop,
  Heart,
} from "lucide-react";

const experiences = [
  {
    title: "Academic Journey",
    description:
      "Every class, lesson, and activity helps me gain new knowledge and become a better student.",
    icon: GraduationCap,
  },
  {
    title: "Learning and Exploring",
    description:
      "I enjoy learning new concepts, exploring technology, and improving my skills through school activities.",
    icon: BookOpen,
  },
  {
    title: "Projects and Activities",
    description:
      "Working on school projects allows me to apply what I have learned and develop my creativity.",
    icon: Code2,
  },
  {
    title: "Friendships and Connections",
    description:
      "Meeting different people, sharing ideas, and working with classmates make my student life meaningful.",
    icon: Users,
  },
];

const highlights = [
  {
    title: "Learning Something New",
    description: "Discovering new ideas and gaining knowledge every day.",
    icon: Lightbulb,
  },
  {
    title: "School Responsibilities",
    description: "Balancing assignments, projects, and academic activities.",
    icon: Laptop,
  },
  {
    title: "Little Breaks",
    description: "Taking time to relax and recharge between busy school days.",
    icon: Coffee,
  },
];

export default function StudentLife() {
  return (
    <main className="max-w-5xl mx-auto space-y-12">

      {/* Header */}
      <section className="space-y-3">
        <p className="text-sm font-semibold tracking-widest text-primary">
          BEHIND THE SCENES
        </p>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          My Student Life<span className="text-primary">.</span>
        </h1>

        <p className="text-muted-foreground max-w-2xl leading-relaxed">
          A glimpse into my journey as an Information Systems student,
          filled with learning experiences, challenges, friendships,
          and personal growth.
        </p>
      </section>

      {/* Introduction */}
      <Card className="border-none bg-primary/5 shadow-sm">
        <CardContent className="p-6 md:p-9 space-y-4">
          <div className="flex items-center gap-3">
            <GraduationCap className="w-7 h-7 text-primary" />
            <h2 className="text-2xl font-bold">
              More Than Just Studying
            </h2>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            Being a student is more than attending classes and
            completing requirements. It is about discovering my
            strengths, learning from mistakes, building friendships,
            and preparing myself for the future. My journey as an
            Information Systems student continues to teach me the
            importance of patience, responsibility, and determination.
          </p>
        </CardContent>
      </Card>

      {/* Experiences */}
      <section className="space-y-6">
        <div className="space-y-2">
          <p className="text-sm font-semibold tracking-widest text-primary">
            MY EXPERIENCES
          </p>

          <h2 className="text-2xl md:text-3xl font-bold">
            The Student Experience
          </h2>

          <p className="text-muted-foreground">
            Different parts of my journey that help me grow.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {experiences.map((item) => {
            const Icon = item.icon;

            return (
              <Card
                key={item.title}
                className="group hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Daily Highlights */}
      <section className="space-y-6">
        <div className="space-y-2">
          <p className="text-sm font-semibold tracking-widest text-primary">
            EVERYDAY MOMENTS
          </p>

          <h2 className="text-2xl md:text-3xl font-bold">
            Little Things That Matter
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <Card key={item.title} className="border shadow-sm">
                <CardContent className="p-5 space-y-3">
                  <Icon className="w-7 h-7 text-primary" />

                  <h3 className="font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Closing Message */}
      <Card className="border-none bg-primary/5">
        <CardContent className="p-8 md:p-10 text-center space-y-4">
          <Heart className="w-8 h-8 text-primary mx-auto" />

          <h2 className="text-2xl font-bold">
            Embracing the Journey, One Step at a Time.
          </h2>

          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            I may not be the student I aspire to be, but I am enjoying college life 
            and the process of learning, growing, and discovering what I can become
            what I can become. Every challenge is a lesson; 
            it helps me to grow, and those challenges that I face. 
            I learned to accept it and maximize its potential. 
            Every experience, every friendship, and every achievement is a memory worth keeping.
            And I am grateful for the opportunity to learn, explore, and grow as a student 
            and as a person. 
          </p>

          <p className="text-primary font-semibold">
            Learn. Experience. Grow. Repeat.
          </p>
        </CardContent>
      </Card>

    </main>
  );
}
