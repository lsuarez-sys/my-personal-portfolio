import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Contact Me</h1>
        <p className="text-muted-foreground mt-1">
          Have a question, collaboration idea, or project in mind? Reach out below!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Side: 3 Info Cards */}
        <div className="space-y-4">
          
          {/* 1. Email Card - Powder Blue */}
          <Card className="border border-sky-200 bg-sky-100/70 text-slate-900 transition-all duration-300 hover:bg-sky-100 hover:shadow-md">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-sky-200/80 border border-sky-300 text-sky-800 shrink-0">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-slate-600 font-medium">Email</p>
                <p className="text-sm font-semibold text-slate-800">lsuarez@ncf.edu.ph</p>
              </div>
            </CardContent>
          </Card>

          {/* 2. Phone Card - Dusty Blue */}
          <Card className="border border-slate-300 bg-slate-200/60 text-slate-900 transition-all duration-300 hover:bg-slate-200/80 hover:shadow-md">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-slate-300/80 border border-slate-400/60 text-slate-800 shrink-0">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-slate-600 font-medium">Phone</p>
                <p className="text-sm font-semibold text-slate-800">+639663912279</p>
              </div>
            </CardContent>
          </Card>

          {/* 3. Location Card - Aqua Blue */}
          <Card className="border border-blue-200 bg-blue-100/70 text-slate-900 transition-all duration-300 hover:bg-blue-100 hover:shadow-md">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-blue-200/80 border border-blue-300 text-blue-800 shrink-0">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-slate-600 font-medium">Location</p>
                <p className="text-sm font-semibold text-slate-800">Pamukid, San Fernando, Cam. Sur</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Side: Contact Form - Turquoise Blue */}
        <Card className="md:col-span-2 border border-cyan-200 bg-cyan-100/70 transition-all duration-300 shadow-sm">
          <CardHeader>
            <CardTitle className="text-slate-900">Send a Message</CardTitle>
            <CardDescription className="text-slate-600">
              Fill out the form below and I'll get back to you soon.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-800">Name</label>
                  <Input id="name" placeholder="Lara Suarez" required className="bg-white/80 border-cyan-300 focus-visible:ring-cyan-600" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-800">Email</label>
                  <Input id="email" type="email" placeholder="lsuarez@ncf.edu.ph" required className="bg-white/80 border-cyan-300 focus-visible:ring-cyan-600" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-slate-800">Subject</label>
                <Input id="subject" placeholder="Project Inquiry / Hello" required className="bg-white/80 border-cyan-300 focus-visible:ring-cyan-600" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-800">Message</label>
                <Textarea id="message" rows={4} placeholder="Your message here..." required className="bg-white/80 border-cyan-300 focus-visible:ring-cyan-600" />
              </div>

              <Button type="submit" className="w-full sm:w-auto bg-cyan-700 hover:bg-cyan-800 text-white font-semibold shadow-sm">
                <Send className="mr-2 h-4 w-4" /> Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}