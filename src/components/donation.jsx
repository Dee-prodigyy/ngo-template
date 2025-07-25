"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Heart, CreditCard, Shield, Users, GraduationCap, Stethoscope, Globe, CheckCircle, Gift } from "lucide-react"

export default function DonationIntegration() {
  const [donationType, setDonationType] = useState("one-time")
  const [selectedAmount, setSelectedAmount] = useState("")
  const [customAmount, setCustomAmount] = useState("")
  const [selectedCause, setSelectedCause] = useState("")
  const [isRecurring, setIsRecurring] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("card")

  const predefinedAmounts = [25, 50, 100, 250, 500, 1000]

  const causes = [
    {
      id: "education",
      name: "Education Programs",
      icon: GraduationCap,
      description: "Support schools and learning centers",
    },
    {
      id: "healthcare",
      name: "Healthcare Initiatives",
      icon: Stethoscope,
      description: "Medical care and health programs",
    },
    { id: "water", name: "Clean Water Projects", icon: Globe, description: "Water purification and well construction" },
    { id: "community", name: "Community Development", icon: Users, description: "Economic empowerment programs" },
    { id: "emergency", name: "Emergency Relief", icon: Heart, description: "Disaster response and aid" },
    { id: "general", name: "Where Needed Most", icon: Gift, description: "Support our most urgent needs" },
  ]

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount.toString())
    setCustomAmount("")
  }

  const handleCustomAmountChange = (value) => {
    setCustomAmount(value)
    setSelectedAmount("")
  }

  const getCurrentAmount = () => {
    return customAmount || selectedAmount
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle donation submission
    console.log("Donation submitted:", {
      amount: getCurrentAmount(),
      cause: selectedCause,
      recurring: isRecurring,
      paymentMethod,
    })
  }

  return (
    <section id="donate" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-teal-900/50 text-teal-300 border-teal-700 mb-4">
            Make a Donation
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">Support Our Mission</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Your generous donation helps us create lasting positive impact in communities around the world.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Donation Form */}
            <div className="lg:col-span-2">
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Heart className="h-5 w-5 text-teal-400 mr-2" />
                    Make Your Donation
                  </CardTitle>
                  <CardDescription className="text-slate-400">Choose your donation amount and cause</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Donation Type */}
                  <div className="space-y-3">
                    <Label className="text-slate-300">Donation Type</Label>
                    <RadioGroup value={donationType} onValueChange={setDonationType} className="flex space-x-6">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="one-time" id="one-time" className="border-slate-600" />
                        <Label htmlFor="one-time" className="text-slate-300">
                          One-time
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="monthly" id="monthly" className="border-slate-600" />
                        <Label htmlFor="monthly" className="text-slate-300">
                          Monthly
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Amount Selection */}
                  <div className="space-y-4">
                    <Label className="text-slate-300">Donation Amount</Label>
                    <div className="grid grid-cols-3 gap-3">
                      {predefinedAmounts.map((amount) => (
                        <Button
                          key={amount}
                          type="button"
                          variant="outline"
                          className={`${
                            selectedAmount === amount.toString()
                              ? "bg-teal-600 hover:bg-teal-700 text-white border-teal-600 shadow-lg shadow-teal-600/20"
                              : "border-slate-600 text-slate-300 hover:bg-white hover:border-slate-500 bg-slate-800/50"
                          }`}
                          onClick={() => handleAmountSelect(amount)}
                        >
                          ${amount}
                        </Button>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="customAmount" className="text-slate-300">
                        Custom Amount
                      </Label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400">$</span>
                        <Input
                          id="customAmount"
                          type="number"
                          placeholder="Enter amount"
                          className="bg-slate-700 border-slate-600 text-white pl-8"
                          value={customAmount}
                          onChange={(e) => handleCustomAmountChange(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Cause Selection */}
                  <div className="space-y-4">
                    <Label className="text-slate-300">Choose a Cause</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {causes.map((cause) => {
                        const Icon = cause.icon
                        const isSelected = selectedCause === cause.id
                        return (
                          <div
                            key={cause.id}
                            className={`p-3 rounded-lg border cursor-pointer transition-all ${
                              isSelected
                                ? "border-teal-600 bg-teal-900/20"
                                : "border-slate-600 bg-slate-700/50 hover:border-slate-500"
                            }`}
                            onClick={() => setSelectedCause(cause.id)}
                          >
                            <div className="flex items-start space-x-3">
                              <Icon className={`h-5 w-5 mt-0.5 ${isSelected ? "text-teal-400" : "text-slate-400"}`} />
                              <div>
                                <h3 className={`font-medium text-sm ${isSelected ? "text-teal-300" : "text-white"}`}>
                                  {cause.name}
                                </h3>
                                <p className="text-xs text-slate-400 mt-1">{cause.description}</p>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div className="space-y-4">
                    <Label className="text-slate-300">Payment Method</Label>
                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3">
                      <div className="flex items-center space-x-2 p-3 border border-slate-600 rounded-lg">
                        <RadioGroupItem value="card" id="card" className="border-slate-600" />
                        <CreditCard className="h-4 w-4 text-slate-400" />
                        <Label htmlFor="card" className="text-slate-300">
                          Credit/Debit Card
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-3 border border-slate-600 rounded-lg">
                        <RadioGroupItem value="paypal" id="paypal" className="border-slate-600" />
                        <div className="h-4 w-4 bg-blue-600 rounded text-xs flex items-center justify-center text-white font-bold">
                          P
                        </div>
                        <Label htmlFor="paypal" className="text-slate-300">
                          PayPal
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Recurring Donation Option */}
                  {donationType === "one-time" && (
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="recurring"
                        checked={isRecurring}
                        onCheckedChange={setIsRecurring}
                        className="border-slate-600"
                      />
                      <Label htmlFor="recurring" className="text-slate-300 text-sm">
                        Make this a monthly recurring donation
                      </Label>
                    </div>
                  )}

                  {/* Submit Button */}
                  <Button
                    onClick={handleSubmit}
                    className="w-full bg-teal-600 hover:bg-teal-700 hover:cursor-pointer text-white font-medium py-3"
                    disabled={!getCurrentAmount() || !selectedCause}
                  >
                    <Heart className="mr-2 h-4 w-4" />
                    Donate ${getCurrentAmount() || "0"} {donationType === "monthly" || isRecurring ? "Monthly" : ""}
                  </Button>

                  {/* Security Notice */}
                  <div className="flex items-center space-x-2 text-sm text-slate-400 bg-slate-700/50 p-3 rounded-lg">
                    <Shield className="h-4 w-4" />
                    <span>Your donation is secure and encrypted. We never store your payment information.</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Impact Summary */}
            <div className="space-y-6">
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Your Impact</CardTitle>
                  <CardDescription className="text-slate-400">See how your donation makes a difference</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {getCurrentAmount() && (
                    <div className="space-y-3">
                      <div className="text-center p-4 bg-teal-900/20 rounded-lg border border-teal-700">
                        <div className="text-2xl font-bold text-teal-400">${getCurrentAmount()}</div>
                        <div className="text-sm text-slate-300">
                          {donationType === "monthly" || isRecurring ? "Monthly donation" : "One-time donation"}
                        </div>
                      </div>

                      {selectedCause && (
                        <div className="space-y-2">
                          <h4 className="font-medium text-white">Supporting:</h4>
                          <p className="text-sm text-slate-300">{causes.find((c) => c.id === selectedCause)?.name}</p>
                        </div>
                      )}

                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between text-slate-300">
                          <span>Your donation:</span>
                          <span>${getCurrentAmount()}</span>
                        </div>
                        <div className="flex justify-between text-slate-300">
                          <span>Processing fee:</span>
                          <span>$0.00</span>
                        </div>
                        <div className="border-t border-slate-600 pt-2 flex justify-between font-medium text-white">
                          <span>Total:</span>
                          <span>${getCurrentAmount()}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {!getCurrentAmount() && (
                    <div className="text-center py-8 text-slate-400">
                      <Heart className="h-8 w-8 mx-auto mb-2 opacity-50" />
                      <p className="text-sm">Select an amount to see your impact</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Impact Examples */}
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white text-lg">What Your Donation Can Do</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-3 text-sm">
                    <div className="w-8 h-8 bg-teal-900/50 rounded-full flex items-center justify-center">
                      <span className="text-teal-400 font-bold">$25</span>
                    </div>
                    <span className="text-slate-300">Provides school supplies for 5 children</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <div className="w-8 h-8 bg-teal-900/50 rounded-full flex items-center justify-center">
                      <span className="text-teal-400 font-bold">$50</span>
                    </div>
                    <span className="text-slate-300">Funds a health checkup for 10 people</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <div className="w-8 h-8 bg-teal-900/50 rounded-full flex items-center justify-center">
                      <span className="text-teal-400 font-bold">$100</span>
                    </div>
                    <span className="text-slate-300">Builds a water filtration system</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <div className="w-8 h-8 bg-teal-900/50 rounded-full flex items-center justify-center">
                      <span className="text-teal-400 font-bold">$250</span>
                    </div>
                    <span className="text-slate-300">Sponsors a child's education for 6 months</span>
                  </div>
                </CardContent>
              </Card>

              {/* Tax Deductible Notice */}
              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-teal-400 mt-0.5" />
                    <div className="text-sm">
                      <p className="text-white font-medium mb-1">Tax Deductible</p>
                      <p className="text-slate-400">
                        NGOTemplate is a 501(c)(3) nonprofit. Your donation is tax-deductible to the full extent allowed
                        by law.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
