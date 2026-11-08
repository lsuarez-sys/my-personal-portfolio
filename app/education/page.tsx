import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

const educationList = [
  {
    Graduate: "GAS, General Academic Strand",
    institution: "Pamukid National High School",
    period: "2022 - 2024",
    description: "Completed the General Academic Strand (GAS) program, focusing on a broad range of subjects to prepare for higher education.",
    achievements: ["Graduated with honors"],
  },
];

export default function Education() {
  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Education</h1>
        <p className="text-muted-foreground mt-1">Academic background.</p>
      </div>

      <div className="space-y-6">
        {educationList.map((item, idx) => (
          <Card key={idx} className="border border-lime-200 bg-lime-100/70 hover:bg-lime-100 transition-all duration-300 shadow-sm">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-lime-200/80 border border-lime-300 rounded-xl text-lime-800 shrink-0">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-slate-800">{item.Graduate}</CardTitle>
                    <CardDescription className="text-slate-600">{item.institution}</CardDescription>
                  </div>
                </div>
                <span className="text-sm font-semibold px-3 py-1 bg-lime-200/60 border border-lime-300 text-lime-900 rounded-full">
                  {item.period}
                </span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-700 leading-relaxed">{item.description}</p>
              <div>
                <h4 className="text-sm font-semibold flex items-center gap-1.5 mb-2 text-slate-800">
                  <Award className="h-4 w-4 text-lime-700" /> Key Highlights
                </h4>
                <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                  {item.achievements.map((ach, i) => (
                    <li key={i}>{ach}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}