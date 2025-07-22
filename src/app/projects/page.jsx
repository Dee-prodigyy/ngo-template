import { Users, Heart, GraduationCap, Stethoscope, Leaf, MapPin, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Our Projects - NGOTemplate",
  description: "Discover our ongoing initiatives creating sustainable change in communities worldwide.",
}

export default function ProjectsPage() {

      const projects = [
    {
      id: 1,
      title: "Digital Learning Centers",
      category: "Education",
      location: "Rural Kenya",
      image: "/images/edu.jpg",
      description:
        "Establishing technology-enabled learning centers in rural communities to bridge the digital divide and provide quality education access.",
      impact: "2,500+ students impacted",
      status: "Active",
      startDate: "March 2023",
      icon: GraduationCap,
      categoryColor: "bg-blue-900/50 text-blue-300 border-blue-700",
    },
    {
      id: 2,
      title: "Mobile Health Clinics",
      category: "Healthcare",
      location: "Guatemala",
      image: "/images/hosp.jpg",
      description:
        "Bringing essential healthcare services to remote areas through our mobile clinic program, providing medical care and health education.",
      impact: "15,000+ patients served",
      status: "Active",
      startDate: "January 2022",
      icon: Stethoscope,
      categoryColor: "bg-green-900/50 text-green-300 border-green-700",
    },
    {
      id: 3,
      title: "Clean Water Access",
      category: "Environment",
      location: "Bangladesh",
      image: "/images/tap.jpg",
      description:
        "Installing water purification systems and wells to provide clean drinking water to communities affected by water scarcity.",
      impact: "50+ communities served",
      status: "Active",
      startDate: "June 2023",
      icon: Leaf,
      categoryColor: "bg-emerald-900/50 text-emerald-300 border-emerald-700",
    },
    ]   

    return (
        <div className="min-h-screen bg-slate-900 text-white">
            {/* Hero Section */}
            <section className="py-20 lg:py-22">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <Badge variant="secondary" className="bg-teal-900/50 text-teal-300 border-teal-700 mb-4">
                    Our Projects
                    </Badge>
                    <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                    Making a Difference
                    <span className="text-teal-400"> Worldwide</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                    Discover our ongoing initiatives that are transforming communities and creating sustainable change across
                    the globe. Each project is designed with and for the communities we serve.
                    </p>
                </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-20 bg-slate-700">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => {
                    const Icon = project.icon
                    return (
                        <Card
                        key={project.id}
                        className="bg-slate-800 border-slate-700 hover:border-teal-600 transition-colors"
                        >
                        <CardHeader className="p-0">
                            <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            width={400}
                            height={300}
                            className="w-full h-48 object-cover rounded-t-lg"
                            />
                        </CardHeader>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-3">
                            <Badge className={project.categoryColor}>{project.category}</Badge>
                            <Badge
                                variant="outline"
                                className={`${
                                project.status === "Active"
                                    ? "border-green-600 text-green-300"
                                    : "border-slate-600 text-slate-300"
                                }`}
                            >
                                {project.status}
                            </Badge>
                            </div>
                            <CardTitle className="text-white mb-3 flex items-center">
                            <Icon className="h-5 w-5 mr-2 text-teal-400" />
                            {project.title}
                            </CardTitle>
                            <div className="flex items-center text-sm text-slate-400 mb-3">
                            <MapPin className="h-4 w-4 mr-1" />
                            {project.location}
                            <Calendar className="h-4 w-4 ml-4 mr-1" />
                            {project.startDate}
                            </div>
                            <CardDescription className="text-slate-300 mb-4 leading-relaxed">
                            {project.description}
                            </CardDescription>
                            <div className="flex items-center justify-between">
                            <div className="flex items-center text-sm text-slate-400">
                                <Users className="h-4 w-4 mr-2" />
                                {project.impact}
                            </div>
                            <Button
                                size="sm"
                                variant="outline"
                                className="border-teal-600 text-teal-300 hover:bg-teal-600 hover:text-white bg-transparent"
                            >
                                Learn More
                            </Button>
                            </div>
                        </CardContent>
                        </Card>
                    )
                    })}
                </div>
                </div>
            </section>

            {/* Impact Summary */}
            <section className="py-20 bg-slate-800/30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6">Collective Impact</h2>
                    <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                    Together, our projects have created meaningful change across multiple sectors and regions.
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-teal-400 mb-2">150+</div>
                    <div className="text-slate-300">Active Projects</div>
                    </div>
                    <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-teal-400 mb-2">25</div>
                    <div className="text-slate-300">Countries</div>
                    </div>
                    <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-teal-400 mb-2">50K+</div>
                    <div className="text-slate-300">Lives Impacted</div>
                    </div>
                    <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-teal-400 mb-2">$2M+</div>
                    <div className="text-slate-300">Funds Deployed</div>
                    </div>
                </div>
                </div>
            </section>
        </div>
    );
}