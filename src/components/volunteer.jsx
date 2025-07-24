"use client"


import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Users,
  Heart,
  Globe,
  GraduationCap,
  Stethoscope,
  Hammer,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
} from "lucide-react"

export default function VolunteerRegistration() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    personalInfo: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      address: "",
      city: "",
      country: "",
    },
    interests: [],
    availability: {
      timeCommitment: "",
      startDate: "",
      duration: "",
    },
    experience: {
      previousVolunteering: "",
      skills: "",
      motivation: "",
    },
  })

  const volunteerAreas = [
    { id: "education", label: "Education", icon: GraduationCap, description: "Teaching and educational support" },
    { id: "healthcare", label: "Healthcare", icon: Stethoscope, description: "Medical assistance and health programs" },
    { id: "construction", label: "Construction", icon: Hammer, description: "Building and infrastructure projects" },
    {
      id: "community",
      label: "Community Development",
      icon: Users,
      description: "Social programs and community building",
    },
    { id: "environment", label: "Environmental", icon: Globe, description: "Conservation and sustainability projects" },
    { id: "fundraising", label: "Fundraising", icon: Heart, description: "Event planning and donor relations" },
  ]

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  // Remove type annotation: interestId: string
  const handleInterestToggle = (interestId) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interestId)
        ? prev.interests.filter((id) => id !== interestId)
        : [...prev.interests, interestId],
    }))
  }

  // Remove type annotation: e: React.FormEvent
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    setCurrentStep(5) // Show success message
  }

  return (
    <section id="volunteer" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-teal-900/50 text-teal-300 border-teal-700 mb-4">
            Join Our Team
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">Volunteer Registration</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Ready to make a difference? Join our global community of volunteers and help us create positive change.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4 w-full">
              {[1, 2, 3, 4].map((step, index) => (
                <div key={step} className="flex items-center flex-1 last:flex-none">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium ${
                        currentStep >= step ? "bg-teal-600 text-white" : "bg-slate-700 text-slate-400"
                      }`}
                    >
                      {currentStep > step ? <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4" /> : step}
                    </div>
                  </div>
                  {index < 3 && (
                    <div className={`flex-1 h-0.5 sm:h-1 ml-2 sm:ml-4 ${currentStep > step ? "bg-teal-600" : "bg-slate-700"}`} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-sm text-slate-400">
              <span>Personal Info</span>
              <span>Interests</span>
              <span>Availability</span>
              <span>Experience</span>
            </div>
          </div>

          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">
                {currentStep === 1 && "Personal Information"}
                {currentStep === 2 && "Areas of Interest"}
                {currentStep === 3 && "Availability"}
                {currentStep === 4 && "Experience & Motivation"}
                {currentStep === 5 && "Registration Complete!"}
              </CardTitle>
              <CardDescription className="text-slate-400">
                {currentStep === 1 && "Tell us about yourself"}
                {currentStep === 2 && "What areas would you like to volunteer in?"}
                {currentStep === 3 && "When are you available to volunteer?"}
                {currentStep === 4 && "Share your experience and motivation"}
                {currentStep === 5 && "Thank you for joining our volunteer community!"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {currentStep === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-slate-300">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      className="bg-slate-700 border-slate-600 text-white"
                      value={formData.personalInfo.firstName}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          personalInfo: { ...prev.personalInfo, firstName: e.target.value },
                        }))
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-slate-300">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      className="bg-slate-700 border-slate-600 text-white"
                      value={formData.personalInfo.lastName}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          personalInfo: { ...prev.personalInfo, lastName: e.target.value },
                        }))
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-slate-300">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      className="bg-slate-700 border-slate-600 text-white"
                      value={formData.personalInfo.email}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          personalInfo: { ...prev.personalInfo, email: e.target.value },
                        }))
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-slate-300">
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      className="bg-slate-700 border-slate-600 text-white"
                      value={formData.personalInfo.phone}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          personalInfo: { ...prev.personalInfo, phone: e.target.value },
                        }))
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dateOfBirth" className="text-slate-300">
                      Date of Birth
                    </Label>
                    <Input
                      id="dateOfBirth"
                      type="date"
                      className="bg-slate-700 border-slate-600 text-white"
                      value={formData.personalInfo.dateOfBirth}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          personalInfo: { ...prev.personalInfo, dateOfBirth: e.target.value },
                        }))
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country" className="text-slate-300">
                      Country
                    </Label>
                    <Select
                      onValueChange={(value) =>
                        setFormData((prev) => ({
                          ...prev,
                          personalInfo: { ...prev.personalInfo, country: value },
                        }))
                      }
                    >
                      <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                        <SelectValue placeholder="Select your country" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-700 border-slate-600">
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="au">Nigeria</SelectItem>
                        <SelectItem value="other">Algeria</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-6">
                  <p className="text-slate-300">
                    Select the areas where you'd like to volunteer (you can choose multiple):
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {volunteerAreas.map((area) => {
                      const Icon = area.icon
                      const isSelected = formData.interests.includes(area.id)
                      return (
                        <div
                          key={area.id}
                          className={`p-4 rounded-lg border cursor-pointer transition-all ${
                            isSelected
                              ? "border-teal-600 bg-teal-900/20"
                              : "border-slate-600 bg-slate-700/50 hover:border-slate-500"
                          }`}
                          onClick={() => handleInterestToggle(area.id)}
                        >
                          <div className="flex items-start space-x-3">
                            <Icon className={`h-6 w-6 mt-1 ${isSelected ? "text-teal-400" : "text-slate-400"}`} />
                            <div>
                              <h3 className={`font-medium ${isSelected ? "text-teal-300" : "text-white"}`}>
                                {area.label}
                              </h3>
                              <p className="text-sm text-slate-400 mt-1">{area.description}</p>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label className="text-slate-300">Time Commitment</Label>
                    <Select
                      onValueChange={(value) =>
                        setFormData((prev) => ({
                          ...prev,
                          availability: { ...prev.availability, timeCommitment: value },
                        }))
                      }
                    >
                      <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                        <SelectValue placeholder="How much time can you commit?" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-700 border-slate-600">
                        <SelectItem value="few-hours">A few hours per week</SelectItem>
                        <SelectItem value="half-day">Half day per week</SelectItem>
                        <SelectItem value="full-day">Full day per week</SelectItem>
                        <SelectItem value="weekend">Weekends only</SelectItem>
                        <SelectItem value="flexible">Flexible schedule</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="startDate" className="text-slate-300">
                      Preferred Start Date
                    </Label>
                    <Input
                      id="startDate"
                      type="date"
                      className="bg-slate-700 border-slate-600 text-white"
                      value={formData.availability.startDate}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          availability: { ...prev.availability, startDate: e.target.value },
                        }))
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-slate-300">Duration of Commitment</Label>
                    <Select
                      onValueChange={(value) =>
                        setFormData((prev) => ({
                          ...prev,
                          availability: { ...prev.availability, duration: value },
                        }))
                      }
                    >
                      <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                        <SelectValue placeholder="How long would you like to volunteer?" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-700 border-slate-600">
                        <SelectItem value="1-3-months">1-3 months</SelectItem>
                        <SelectItem value="3-6-months">3-6 months</SelectItem>
                        <SelectItem value="6-12-months">6-12 months</SelectItem>
                        <SelectItem value="1-year-plus">1+ years</SelectItem>
                        <SelectItem value="ongoing">Ongoing</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}

              {currentStep === 4 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="previousVolunteering" className="text-slate-300">
                      Previous Volunteering Experience
                    </Label>
                    <Textarea
                      id="previousVolunteering"
                      placeholder="Tell us about any previous volunteering experience you have..."
                      className="bg-slate-700 border-slate-600 text-white min-h-[100px]"
                      value={formData.experience.previousVolunteering}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          experience: { ...prev.experience, previousVolunteering: e.target.value },
                        }))
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="skills" className="text-slate-300">
                      Relevant Skills
                    </Label>
                    <Textarea
                      id="skills"
                      placeholder="What skills do you bring that could help our mission?"
                      className="bg-slate-700 border-slate-600 text-white min-h-[100px]"
                      value={formData.experience.skills}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          experience: { ...prev.experience, skills: e.target.value },
                        }))
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="motivation" className="text-slate-300">
                      Why do you want to volunteer with us?
                    </Label>
                    <Textarea
                      id="motivation"
                      placeholder="Share your motivation for volunteering with HopeForward..."
                      className="bg-slate-700 border-slate-600 text-white min-h-[100px]"
                      value={formData.experience.motivation}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          experience: { ...prev.experience, motivation: e.target.value },
                        }))
                      }
                    />
                  </div>
                </div>
              )}

              {currentStep === 5 && (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-teal-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Welcome to the Team!</h3>
                  <p className="text-slate-300 mb-6">
                    Thank you for registering as a volunteer. We'll review your application and get back to you within
                    2-3 business days with next steps.
                  </p>
                  <div className="bg-slate-700/50 rounded-lg p-4 mb-6">
                    <p className="text-sm text-slate-400">
                      In the meantime, follow us on social media to stay updated on our latest projects and volunteer
                      opportunities.
                    </p>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              {currentStep < 5 && (
                <div className="flex justify-between pt-6">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handlePrevious}
                    disabled={currentStep === 1}
                    className="border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Previous
                  </Button>

                  {currentStep < 4 ? (
                    <Button type="button" onClick={handleNext} className="bg-teal-600 hover:bg-teal-700">
                      Next
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  ) : (
                    <Button type="submit" onClick={handleSubmit} className="bg-teal-600 hover:bg-teal-700">
                      Submit Application
                      <CheckCircle className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
