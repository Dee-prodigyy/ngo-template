import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Heart, Users, Globe, Target, Calendar, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">

      {/* Hero Section */}
      <section className="relative py-15 lg:py-15 animate-fade-in">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-up">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-teal-900/50 text-teal-300 border-teal-700 animate-scale-in">
                  Making Good Visible
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-balance">
                  Creating Positive
                  <span className="gradient-text"> Impact</span> Together
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed text-pretty">
                  Join us in building a better world through sustainable development, education, and community
                  empowerment. Every action counts, every voice matters.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/volunteer">
                  <Button size="lg" className="btn-primary group">
                    Get Involved
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" className="btn-secondary">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <Image
                src="/images/home.jpg"
                alt="NGO Impact"
                width={400}
                height={400}
                className="rounded-lg shadow-2xl card-hover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in">
              <div className="text-3xl lg:text-4xl font-bold text-teal-400">50K+</div>
              <div className="text-slate-300 mt-2">Lives Impacted</div>
            </div>
            <div className="text-center animate-fade-in [animation-delay:0.1s]">
              <div className="text-3xl lg:text-4xl font-bold text-teal-400">25</div>
              <div className="text-slate-300 mt-2">Countries</div>
            </div>
            <div className="text-center animate-fade-in [animation-delay:0.2s]">
              <div className="text-3xl lg:text-4xl font-bold text-teal-400">100+</div>
              <div className="text-slate-300 mt-2">Projects</div>
            </div>
            <div className="text-center animate-fade-in [animation-delay:0.3s]">
              <div className="text-3xl lg:text-4xl font-bold text-teal-400">15</div>
              <div className="text-slate-300 mt-2">Years Active</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <Image
                src="/images/help.jpg"
                alt="About Us"
                width={600}
                height={500}
                className="rounded-lg shadow-xl card-hover"
              />
            </div>
            <div className="space-y-6 animate-slide-up [animation-delay:0.2s]">
              <div>
                <Badge variant="secondary" className="bg-teal-900/50 text-teal-300 border-teal-700 mb-4">
                  About Us
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">
                  Empowering Communities for a Better Tomorrow
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed mb-6 text-pretty">
                  Founded in 2009, HopeForward has been at the forefront of sustainable development and social change.
                  Our mission is to create lasting positive impact through education, healthcare, and community
                  empowerment programs.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <Target className="h-6 w-6 text-teal-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Our Mission</h3>
                    <p className="text-slate-300 text-sm">
                      To empower communities through sustainable development and education.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Globe className="h-6 w-6 text-teal-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Our Vision</h3>
                    <p className="text-slate-300 text-sm">
                      A world where every person has access to opportunities for growth and prosperity.
                    </p>
                  </div>
                </div>
              </div>
              <Link href="/about">
                <Button className="btn-secondary group">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <Badge variant="secondary" className="bg-teal-900/50 text-teal-300 border-teal-700 mb-4">
              Our Projects
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Making a Difference Worldwide</h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto text-pretty">
              Discover our ongoing initiatives that are transforming communities and creating sustainable change across
              the globe.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-800 border-slate-700 hover:border-teal-600 transition-all duration-300 card-hover animate-scale-in">
              <CardHeader className="p-0">
                <Image
                  src="/images/edu.jpg"
                  alt="Education Initiative"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <Badge className="bg-blue-900/50 text-blue-300 border-blue-700 mb-3">Education</Badge>
                <CardTitle className="text-white mb-3">Digital Learning Centers</CardTitle>
                <CardDescription className="text-slate-300 mb-4 text-pretty">
                  Establishing technology-enabled learning centers in rural communities to bridge the digital divide.
                </CardDescription>
                <div className="flex items-center text-sm text-slate-400">
                  <Users className="h-4 w-4 mr-2" />
                  2,500+ students impacted
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 hover:border-teal-600 transition-all duration-300 card-hover animate-scale-in [animation-delay:0.1s]">
              <CardHeader className="p-0">
                <Image
                  src="/images/hosp.jpg"
                  alt="Healthcare Initiative"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <Badge className="bg-green-900/50 text-green-300 border-green-700 mb-3">Healthcare</Badge>
                <CardTitle className="text-white mb-3">Mobile Health Clinics</CardTitle>
                <CardDescription className="text-slate-300 mb-4 text-pretty">
                  Bringing essential healthcare services to remote areas through our mobile clinic program.
                </CardDescription>
                <div className="flex items-center text-sm text-slate-400">
                  <Heart className="h-4 w-4 mr-2" />
                  15,000+ patients served
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 hover:border-teal-600 transition-all duration-300 card-hover animate-scale-in [animation-delay:0.2s]">
              <CardHeader className="p-0">
                <Image
                  src="/images/tap.jpg"
                  alt="Environment Initiative"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <Badge className="bg-emerald-900/50 text-emerald-300 border-emerald-700 mb-3">Environment</Badge>
                <CardTitle className="text-white mb-3">Clean Water Access</CardTitle>
                <CardDescription className="text-slate-300 mb-4 text-pretty">
                  Installing water purification systems and wells to provide clean drinking water to communities.
                </CardDescription>
                <div className="flex items-center text-sm text-slate-400">
                  <Globe className="h-4 w-4 mr-2" />
                  50+ communities served
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Link href="/projects">
              <Button className="btn-secondary group">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-slide-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Ready to Make a Difference?</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto text-pretty">
            Join thousands of supporters who are helping us create positive change around the world. Every contribution
            matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate">
              <Button size="lg" className="btn-primary group">
                Donate Now
                <Heart className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
              </Button>
            </Link>
            <Link href="/volunteer">
              <Button size="lg" className="btn-secondary">
                Become a Volunteer
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
