import {Badge, } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";    
import Image from "next/image"
import { Target, Globe, Lightbulb, Award, Users } from "lucide-react";
import { FaHeart } from "react-icons/fa";

export const metadata = {
  title: "About Us - HopeForward",
  description: "Learn about NGOTemplate's mission, vision, and impact in creating positive change worldwide.",
}

export default function Footer() {

    const values = [
    {
      icon: FaHeart,
      title: "Compassion",
      description: "We approach every situation with empathy and understanding, putting people first in all we do.",
    },
    {
      icon: Users,
      title: "Community",
      description: "We believe in the power of collective action and work hand-in-hand with local communities.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for the highest standards in our programs and maintain transparency in our operations.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace creative solutions and adapt to changing needs to maximize our impact.",
    },
    ]

    const team = [
    {
      name: "Sarah Johnson",
      role: "Executive Director",
      image: "/placeholder.svg?height=300&width=300",
      bio: "With over 15 years in international development, Sarah leads our strategic vision and global partnerships.",
    },
    {
      name: "Michael Chen",
      role: "Program Director",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Michael oversees our field operations and ensures program quality across all our initiatives.",
    },
    {
      name: "Dr. Amara Okafor",
      role: "Healthcare Director",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Dr. Okafor brings 20 years of medical experience to lead our healthcare and wellness programs.",
    },
    {
      name: "David Rodriguez",
      role: "Education Director",
      image: "/placeholder.svg?height=300&width=300",
      bio: "David develops and implements our educational initiatives, focusing on sustainable learning solutions.",
    },
    ]

    return (
        <div className="min-h-screen bg-slate-900 text-white">
        
            {/* Hero Section */}
            <section className="py-20 lg:py-25">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <Badge variant="secondary" className="bg-teal-900/50 text-teal-300 border-teal-700 mb-4">
                    About HopeForward
                    </Badge>
                    <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                    Empowering Communities,
                    <span className="text-teal-400"> Transforming Lives</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                    Since 2009, we've been dedicated to creating sustainable positive change in communities worldwide through
                    education, healthcare, and environmental initiatives.
                    </p>
                </div>
                </div>
            </section>

            {/* Mission and Vision */}
            <section className="py-20 bg-slate-800/30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                    <Image
                        src="/images/team.jpg"
                        alt="Our Mission"
                        width={600}
                        height={500}
                        className="rounded-lg shadow-xl"
                    />
                    </div>
                    <div className="space-y-8">
                    <div className="flex items-start space-x-4">
                        <div className="bg-teal-600 p-3 rounded-lg">
                        <Target className="h-8 w-8" />
                        </div>
                        <div>
                        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                        <p className="text-slate-300 text-lg leading-relaxed">
                            To empower underserved communities through sustainable development programs that focus on education,
                            healthcare, and environmental stewardship, creating lasting positive change that communities can
                            build upon for generations.
                        </p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="bg-teal-600 p-3 rounded-lg">
                        <Globe className="h-8 w-8" />
                        </div>
                        <div>
                        <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                        <p className="text-slate-300 text-lg leading-relaxed">
                            A world where every person has access to quality education, healthcare, and a clean environment,
                            regardless of their geographic location or economic circumstances. We envision thriving communities
                            that are self-sufficient and resilient.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-20 bg-slate-800/30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Values</h2>
                    <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                    These core values guide everything we do and shape how we approach our work in communities worldwide.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => {
                    const Icon = value.icon
                    return (
                        <Card key={index} className="bg-slate-800 border-slate-700 text-center">
                        <CardContent className="p-6">
                            <div className="bg-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Icon className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                            <p className="text-slate-300 text-sm leading-relaxed">{value.description}</p>
                        </CardContent>
                        </Card>
                    )
                    })}
                </div>
                </div>
            </section>

            {/* Our Team */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6">Leadership Team</h2>
                    <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                    Meet the dedicated leaders who guide our mission and ensure our programs create lasting impact.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((value, index) => (
                    <Card key={index} className="bg-slate-800 border-slate-700">
                        <CardContent className="p-6 text-center">
                        <Image
                            src={value.image || "/placeholder.svg"}
                            alt={value.name}
                            width={200}
                            height={200}
                            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                        />
                        <h3 className="text-xl font-bold text-white mb-1">{value.name}</h3>
                        <p className="text-teal-400 font-medium mb-3">{value.role}</p>
                        <p className="text-slate-300 text-sm leading-relaxed">{value.bio}</p>
                        </CardContent>
                    </Card>
                    ))}
                </div>
                </div>
            </section>
        </div>
    );
}
