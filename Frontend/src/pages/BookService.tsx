import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import SEOHead from "@/components/SEOHead";
import { useToast } from "@/hooks/use-toast";
import { 
  Calendar,
  Clock,
  User,
  Phone,
  MapPin,
  Wrench,
  CheckCircle
} from "lucide-react";

const BookService = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    serviceType: "",
    preferredDate: "",
    preferredTime: "",
    description: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceTypes = [
    "Motor Repair",
    "Generator Repair", 
    "Fan Repair",
    "Stabilizer Repair",
    "House Wiring",
    "Inverter Repair",
    "Water Pump Repair",
    "General Electrical Work",
    "Emergency Service"
  ];

  const timeSlots = [
    "9:00 AM - 11:00 AM",
    "11:00 AM - 1:00 PM", 
    "2:00 PM - 4:00 PM",
    "4:00 PM - 6:00 PM",
    "6:00 PM - 7:00 PM"
  ];

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);

  //   // Validate required fields
  //   if (!formData.name || !formData.phone || !formData.serviceType) {
  //     toast({
  //       title: "Missing Information",
  //       description: "Please fill in all required fields.",
  //       variant: "destructive"
  //     });
  //     setIsSubmitting(false);
  //     return;
  //   }

  //   // Simulate API call (replace with actual backend integration)
  //   setTimeout(() => {
  //     toast({
  //       title: "Service Booked Successfully!",
  //       description: `We'll call you at ${formData.phone} to confirm your appointment.`,
  //     });
      
  //     // Reset form
  //     setFormData({
  //       name: "",
  //       phone: "",
  //       address: "",
  //       serviceType: "",
  //       preferredDate: "",
  //       preferredTime: "",
  //       description: ""
  //     });
  //     setIsSubmitting(false);
  //   }, 1500);
  // };


  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  if (!formData.name || !formData.phone || !formData.serviceType) {
    toast({
      title: "Missing Information",
      description: "Please fill in all required fields.",
      variant: "destructive"
    });
    setIsSubmitting(false);
    return;
  }

  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/bookservice`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      toast({
        title: "Service Booked Successfully!",
        description: `We'll call you at ${formData.phone} to confirm your appointment.`,
      });

      setFormData({
        name: "",
        phone: "",
        address: "",
        serviceType: "",
        preferredDate: "",
        preferredTime: "",
        description: ""
      });
    } else {
      throw new Error("Failed to book service");
    }
  } catch (error) {
    toast({
      title: "Error",
      description: "Something went wrong. Please try again later.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};


  const handleChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  // Get minimum date (today)
  const today = new Date().toISOString().split('T')[0];

  return (
    <>
      <SEOHead
        title="Book Electronics Repair Service Online"
        description="Book professional electronics repair service in Motihari, Bihar. Schedule motor repair, generator service, fan repair, house wiring or any electrical work. Quick online booking with preferred date and time."
        keywords="book electronics repair motihari, schedule motor repair, generator service booking, electrical work appointment bihar, online booking electronics repair"
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Book Your Service
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Schedule your electronics repair service online. We'll confirm your appointment and be there on time.
          </p>
        </div>
      </section>

      <div className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wrench className="h-6 w-6 text-primary" />
                    Service Booking Form
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="address">Service Address</Label>
                      <Textarea
                        id="address"
                        placeholder="Enter complete address where service is needed"
                        value={formData.address}
                        onChange={(e) => handleChange("address", e.target.value)}
                        rows={3}
                      />
                    </div>

                    {/* Service Details */}
                    <div>
                      <Label htmlFor="serviceType">Type of Service *</Label>
                      <Select value={formData.serviceType} onValueChange={(value) => handleChange("serviceType", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select service type" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceTypes.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Scheduling */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="preferredDate">Preferred Date</Label>
                        <Input
                          id="preferredDate"
                          type="date"
                          min={today}
                          value={formData.preferredDate}
                          onChange={(e) => handleChange("preferredDate", e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="preferredTime">Preferred Time</Label>
                        <Select value={formData.preferredTime} onValueChange={(value) => handleChange("preferredTime", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select time slot" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((slot) => (
                              <SelectItem key={slot} value={slot}>
                                {slot}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="description">Problem Description</Label>
                      <Textarea
                        id="description"
                        placeholder="Describe the problem with your device or electrical system..."
                        value={formData.description}
                        onChange={(e) => handleChange("description", e.target.value)}
                        rows={4}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full" 
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Booking Service..." : (
                        <>
                          <Calendar className="h-5 w-5 mr-2" />
                          Book Service
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Booking Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Emergency Service</p>
                      <p className="text-sm text-muted-foreground">+91 9934900409<br/> +91 6202707996</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Shop Location</p>
                      <p className="text-sm text-muted-foreground">Balua Bazar, Motihari</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Working Hours</p>
                      <p className="text-sm text-muted-foreground">Mon-Sat: 9AM-7PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Service Process</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <p className="font-medium">Book Online</p>
                      <p className="text-sm text-muted-foreground">Fill the form with your details</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <p className="font-medium">Confirmation Call</p>
                      <p className="text-sm text-muted-foreground">We'll call to confirm appointment</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <p className="font-medium">Expert Service</p>
                      <p className="text-sm text-muted-foreground">Our technician visits your location</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">✓</div>
                    <div>
                      <p className="font-medium">Quality Guarantee</p>
                      <p className="text-sm text-muted-foreground">30-day warranty on all repairs</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-accent-light/10">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span className="font-medium">Free Diagnosis</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    No charge for problem diagnosis and quotation
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookService;