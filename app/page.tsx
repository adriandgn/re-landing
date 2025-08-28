import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground px-6 py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/grad-3.jpg')",
          }}
        />
        <img className="absolute right-20 re-iso h-200" src="/SVG/iso.svg" alt="" />
        <div className="absolute inset-0 bg-primary/10" />
        <div className="relative max-w-6xl mx-auto z-10">
          <div className="space-y-16">
          <div className="space-y-10">
              <img className="h-40" src="/SVG/v4-1.svg" alt="" />
            </div>
            <div className="space-y-4 text-left">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-left leading-tight color-white text-balance">
                Re: is a playground <br /> for wardrobe <br /><span className="re-breathe2">rEinVEnTi0n</span>
              </h1>
              <p className="text-xl md:text-2xl font-medium color-white text-pretty">
                Use AI to redesign your clothes and bring them to life through collaborative upcycling.
              </p>
            </div>

            <div className="pt-8">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6 h-auto font-bold border-4 border-secondary-foreground shadow-[8px_8px_0px_0px] shadow-secondary-foreground hover:shadow-[4px_4px_0px_0px] hover:translate-x-1 hover:translate-y-1 transition-all"
              >
                START REDESIGNING
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* B2C Key Benefits Section */}
      <section className="relative px-6 py-34 overflow-hidden">
        <div className="relative max-w-4xl mx-auto z-10">

          <div className="list space-y-10">
            {[
              {
                title: "Effortless Style Reinvention",
                description: "Use AI-powered design suggestions. No design skills needed.",
                bg: "bg-accent",
              },
              {
                title: "Custom Fit from What You Already Own",
                description: "Turn existing clothes into perfectly tailored pieces.",
                bg: "bg-primary",
              },
              {
                title: "Rediscover What You Already Love",
                description: "Unlock styling inspiration and breathe new life into overlooked items.",
                bg: "bg-accent",
              },
              {
                title: "Sustainable Without Hassle",
                description: "Reduce waste and keep garments out of landfills.",
                bg: "bg-primary",
              },
              {
                title: "Collaboration with Creatives",
                description: "Bring designs to life through trusted upcycling partners.",
                bg: "bg-accent",
              },
              {
                title: "Transparent, Affordable Transformation",
                description: "Redesign suggestions are free.",
                bg: "bg-primary",
              },
              {
                title: "Wardrobe That Evolves With You",
                description: "Build a digital wardrobe that tracks redesigns and unlocks future possibilities.",
                bg: "bg-accent md:col-span-2 lg:col-span-3",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className={`${benefit.bg} ${benefit.bg === "bg-primary" ? "text-primary-foreground mr-12" : "text-accent-foreground ml-12"} border-4 border-primary rounded-md shadow-[8px_8px_0px_0px] shadow-primary ${benefit.bg.includes("col-span") ? benefit.bg.split(" ").slice(1).join(" ") : ""}`}
              >
                <CardHeader>
                  <CardTitle className="text-3xl font-bold">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription
                    className={`${benefit.bg === "bg-primary" ? "text-primary-foreground" : "text-accent-foreground"} text-lg`}
                  >
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The R&D Engine Section */}
      <section className="relative bg-muted px-6 py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
          style={{
            backgroundImage: "url('/ai-technology-and-fashion-design-collaboration-fut.png')",
          }}
        />
        <div className="absolute inset-0 bg-muted/90" />
        <div className="relative max-w-4xl mx-auto z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-4 border-foreground shadow-[8px_8px_0px_0px] shadow-foreground">
              <CardHeader>
                <div className="w-12 h-12 bg-accent text-accent-foreground rounded-md border-2 border-foreground flex items-center justify-center font-bold text-xl mb-4">
                  01
                </div>
                <CardTitle className="text-lg font-bold">Direct User Onboarding</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Onboards early adopters and garments via a direct-to-user app.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-4 border-foreground shadow-[8px_8px_0px_0px] shadow-foreground">
              <CardHeader>
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-md border-2 border-foreground flex items-center justify-center font-bold text-xl mb-4">
                  02
                </div>
                <CardTitle className="text-lg font-bold">Data Collection</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Gathers data: materials, wear & brand patterns, user preferences.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-4 border-foreground shadow-[8px_8px_0px_0px] shadow-foreground">
              <CardHeader>
                <div className="w-12 h-12 bg-accent text-accent-foreground rounded-md border-2 border-foreground flex items-center justify-center font-bold text-xl mb-4">
                  03
                </div>
                <CardTitle className="text-lg font-bold">AI-Enabled Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <CardDescription className="text-base font-semibold">Key AI capabilities:</CardDescription>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Badge
                        variant="outline"
                        className="border-2 border-foreground bg-accent text-accent-foreground font-bold"
                      >
                        •
                      </Badge>
                      <span className="text-sm">Automated redesign / real-time upcycling options</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge
                        variant="outline"
                        className="border-2 border-foreground bg-accent text-accent-foreground font-bold"
                      >
                        •
                      </Badge>
                      <span className="text-sm">Tech pack generation for decentralized production</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-foreground text-background px-6 py-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('/circular-fashion-revolution-with-diverse-people-we.png')",
          }}
        />
        <div className="absolute inset-0 bg-foreground/85" />
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to reinvent your wardrobe?</h3>
          <p className="text-lg mb-8 text-background/80">
            Join the circular fashion revolution with AI-powered redesign.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="text-lg px-8 py-6 h-auto font-bold border-4 border-secondary-foreground shadow-[8px_8px_0px_0px] shadow-secondary-foreground hover:shadow-[4px_4px_0px_0px] hover:translate-x-1 hover:translate-y-1 transition-all"
          >
            GET STARTED NOW
          </Button>
        </div>
      </footer>
    </div>
  )
}
