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
          className="animate-fadeIn absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/grad-3.jpg')",
          }}
        />
        <img className="absolute left-150 top-0 re-iso h-400" src="/SVG/iso.svg" alt="" />
        <img
          src="/fashion-design-studio-with-fabric-swatches-and-ske.png"
          alt="Imagen enmascarada"
          className="absolute left-150 top-0 re-iso h-400 [mask-image:url('/SVG/iso.svg')] [-webkit-mask-image:url('/SVG/iso.svg')] [mask-size:contain] [-webkit-mask-size:contain] [mask-repeat:no-repeat] [-webkit-mask-repeat:no-repeat] [mask-position:center] [-webkit-mask-position:center]"
        />
        <div className="absolute inset-0 bg-primary/10" />
        <div className="relative max-w-6xl mx-auto z-10">
          <div className="space-y-16">
          <div className="space-y-10">
              <img className="h-30 drop-shadow-xl" src="/SVG/V4-1.svg" alt="" />
            </div>
            <div className="space-y-4 text-left">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-left leading-tight  color-white text-balance">
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

      <section className="relative bg-primary text-primary-foreground px-6 py-24 md:py-32 overflow-hidden">
        <div className="relative max-w-6xl mx-auto z-10">
          <div className="grid grid-cols-2 justify-center">
            <div className="space-y-16">
              <div className="space-y-10">
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-left leading-tight color-white text-balance" style={{lineHeight: "1"}}><span className="re-breathe2"><span className="text-secondary">rE-</span><br />in-<br />VEn-<br />Tion</span></h1>  
              </div>  
            </div>
            <div className="space-y-4 text-left my-auto">
            <h1 className="text-4xl md:text-6xl lg:text-5xl font-bold text-left leading-tight color-white text-balance" style={{lineHeight: "1.2"}}>
                Re: is a <span className="text-primary text-secondary">playground for wardrobe reinvention</span> where curious fashion lovers use AI to redesign their clothes and bring them to life through collaborative upcycling.
              </h1>
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
                className={`${benefit.bg} ${benefit.bg === "bg-primary" ? "text-primary-foreground mr-12" : "text-accent-foreground ml-12"} border-4 border-primary rounded-md shadow-[8px_8px_0px_0px] shadow-primary ${benefit.bg.includes("col-span") ? benefit.bg.split(" ").slice(1).join(" ") : ""} opacity-0`}
                data-animate="animate-in slide-in-from-bottom duration-700"
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

      {/* Smartphone App Showcase Section */}
      <section className="relative bg-secondary px-6 py-24 overflow-hidden">
        <div className="relative max-w-6xl mx-auto z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Smartphone Mockup */}
            <div className="relative flex justify-center">
              <div className="relative">
                {/* Phone Frame */}
                <div className="w-100 h-[640px] bg-foreground rounded-2xl border-foreground shadow-[16px_16px_0px_0px] shadow-foreground/50 relative overflow-hidden">
                  {/* Screen */}
                  <div className="absolute inset-4 bg-background overflow-hidden">
                    {/* App Screen Content */}
                    <div className="h-full flex flex-col">
                      {/* Header */}
                      <div className="bg-primary text-primary-foreground p-4 border-b-4 border-foreground">
                        <h3 className="font-bold text-lg">Re: Wardrobe</h3>
                      </div>

                      {/* Main Content */}
                      <div className="flex-1 p-4 space-y-4">
                        <div className="bg-accent text-accent-foreground p-3 border-2 border-foreground">
                          <div className="text-sm font-bold mb-1">CURRENT ITEM</div>
                          <div className="text-xs">Vintage Denim Jacket</div>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-muted p-2 border-2 border-foreground text-xs">
                            <div className="font-bold">AI SUGGESTION 1</div>
                            <div>Cropped + Patches</div>
                          </div>
                          <div className="bg-muted p-2 border-2 border-foreground text-xs">
                            <div className="font-bold">AI SUGGESTION 2</div>
                            <div>Oversized Vest</div>
                          </div>
                        </div>

                        <div className="bg-primary text-primary-foreground p-3 border-2 border-foreground text-center">
                          <div className="text-sm font-bold">REDESIGN NOW</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-8">
              <div className="space-y-6">
                <Card className="border-4 border-primary shadow-[8px_8px_0px_0px] shadow-primary bg-accent text-accent-foreground opacity-0" data-animate="animate-in fade-in slide-in-from-right duration-900">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold flex items-center gap-3">
                      SNAP & UPLOAD
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-accent-foreground/80 text-base">
                      Take photos of your clothes and instantly get AI-powered redesign suggestions
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-4 border-primary shadow-[8px_8px_0px_0px] shadow-primary bg-primary text-secondary opacity-0" data-animate="animate-in fade-in slide-in-from-right duration-900">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold flex items-center gap-3">
                      AI DESIGN ENGINE
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-primary-foreground text-base">
                      Advanced algorithms analyze fit, style, and sustainability to create perfect redesigns
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-4 border-primary shadow-[8px_8px_0px_0px] shadow-primary bg-accent text-accent-foreground opacity-0" data-animate="animate-in fade-in slide-in-from-right duration-900">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold flex items-center gap-3">
                      CONNECT WITH MAKERS
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-accent-foreground text-base">
                      Find trusted local upcyclers and collaborate to bring your designs to life
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-4 border-primary shadow-[8px_8px_0px_0px] shadow-primary bg-primary text-primary-foreground opacity-0" data-animate="animate-in fade-in slide-in-from-right duration-900">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold flex items-center gap-3">
                      TRACK IMPACT
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-primary-foreground text-base">
                      Monitor your sustainability impact and see how much waste you've prevented
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The R&D Engine Section */}
      <section className="relative bg-muted px-6 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-muted/90" />
        <div className="relative max-w-6xl mx-auto z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              className="border-4 border-foreground shadow-[8px_8px_0px_0px] shadow-foreground opacity-0"
              data-animate="animate-in fade-in slide-in-from-left duration-900"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-accent text-accent-foreground rounded-md border-2 border-foreground flex items-center justify-center font-bold text-xl mb-4">
                  01
                </div>
                <CardTitle className="text-3xl font-bold">Direct User Onboarding</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  Onboards early adopters and garments via a direct-to-user app.
                </CardDescription>
              </CardContent>
            </Card>

            <Card
              className="border-4 border-foreground shadow-[8px_8px_0px_0px] shadow-foreground opacity-0"
              data-animate="animate-in fade-in slide-in-from-left duration-700"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-md border-2 border-foreground flex items-center justify-center font-bold text-xl mb-4">
                  02
                </div>
                <CardTitle className="text-3xl font-bold">Data Collection</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  Gathers data: materials, wear & brand patterns, user preferences.
                </CardDescription>
              </CardContent>
            </Card>

            <Card
              className="border-4 border-foreground shadow-[8px_8px_0px_0px] shadow-foreground opacity-0"
              data-animate="animate-in fade-in slide-in-from-left duration-500"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-accent text-accent-foreground rounded-md border-2 border-foreground flex items-center justify-center font-bold text-xl mb-4">
                  03
                </div>
                <CardTitle className="text-3xl font-bold">AI-Enabled Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <CardDescription className="text-lg font-semibold">Key AI capabilities:</CardDescription>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Badge
                        variant="outline"
                        className="border-2 border-foreground bg-accent text-accent-foreground font-bold"
                      >
                        •
                      </Badge>
                      <span className="text-base">Automated redesign / real-time upcycling options</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge
                        variant="outline"
                        className="border-2 border-foreground bg-accent text-accent-foreground font-bold"
                      >
                        •
                      </Badge>
                      <span className="text-base">Tech pack generation for decentralized production</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="relative bg-secondary text-background px-6 py-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/grad-3.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-secondary/55" />
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <h3 className="text-4xl md:text-6xl lg:text-8xl font-bold text-primary mb-4">Ready to reinvent your wardrobe?</h3>
          <p className="text-2xl md:text-4xl lg:text-5xl mb-8 text-background/80">
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
      </section>
      {/* Footer */}
      <footer className="relative bg-primary text-background px-6 py-16 overflow-hidden">
        <div className="absolute inset-0 bg-primary/55" />
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-background/80">
              Powered by <a href="https://www.wereyve.com/" target="_blank" rel="noopener noreferrer" className="text-secondary/80 font-bold">Re:YVE</a>          </p>
        </div>
      </footer>
    </div>
  )
}
