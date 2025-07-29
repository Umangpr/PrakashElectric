import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { 
  Settings, 
  Zap, 
  Fan, 
  Shield, 
  Home, 
  Wrench,
  CheckCircle,
  Clock,
  Phone
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Settings className="h-12 w-12" />,
      title: "Motor Repair",
      description: "Complete motor repair and rewinding services for all types of electric motors",
      features: [
        "Single phase and three phase motors",
        "Motor rewinding and coil replacement",
        "Bearing replacement and lubrication",
        "Motor testing and diagnostics",
        "Performance optimization"
      ],
      price: "Starting from ₹300"
    },
    {
      icon: <Zap className="h-12 w-12" />,
      title: "Generator Repair",
      description: "Professional generator servicing, repair and maintenance for home and commercial use",
      features: [
        "Engine servicing and repair",
        "Alternator repair and rewinding",
        "Fuel system cleaning",
        "Control panel repair",
        "Regular maintenance service"
      ],
      price: "Starting from ₹800"
    },
    {
      icon: <Fan className="h-12 w-12" />,
      title: "Fan Repair",
      description: "Expert repair services for ceiling fans, table fans, and exhaust fans",
      features: [
        "Motor winding and rewinding",
        "Capacitor replacement",
        "Speed regulator repair",
        "Blade balancing",
        "Noise reduction service"
      ],
      price: "Starting from ₹150"
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Stabilizer Repair",
      description: "Voltage stabilizer repair and installation for appliances protection",
      features: [
        "Automatic voltage regulator repair",
        "Circuit board replacement",
        "Display panel repair",
        "Relay and transformer service",
        "Installation and setup"
      ],
      price: "Starting from ₹250"
    },
    {
      icon: <Home className="h-12 w-12" />,
      title: "House Wiring",
      description: "Complete electrical wiring solutions for homes and offices",
      features: [
        "New wiring installation",
        "Rewiring old buildings",
        "Switch and socket installation",
        "Distribution board setup",
        "Safety inspection and testing"
      ],
      price: "₹35 per point"
    },
    {
      icon: <Wrench className="h-12 w-12" />,
      title: "General Electrical",
      description: "Other electrical repair and maintenance services",
      features: [
        "Inverter repair and servicing",
        "Water pump repair",
        "MCB and fuse replacement",
        "Earthing installation",
        "Emergency electrical services"
      ],
      price: "₹200 onwards"
    }
  ];

  const guarantees = [
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Quality Guarantee",
      description: "All repairs come with 30-day warranty"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Quick Service",
      description: "Same day service for most repairs"
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: "24/7 Support",
      description: "Emergency electrical services available"
    }
  ];

  return (
    <>
      <SEOHead
        title="Professional Electronics Repair Services in Motihari"
        description="Complete electronics repair services including motor repair, generator servicing, fan repair, stabilizer repair and house wiring in Motihari, Bihar. Expert technicians, quality guarantee, affordable prices."
        keywords="motor repair motihari, generator repair bihar, fan repair service, stabilizer repair, house wiring motihari, electrical services bihar, electronics repair shop"
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Expert Repair Services
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Professional electronics repair services in Motihari, Bihar with quality guarantee and quick turnaround
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-soft transition-all duration-200 hover:-translate-y-1">
                <CardHeader>
                  <div className="text-primary mb-4 flex justify-center">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-center">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-center">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center">
                    <div className="text-lg font-semibold text-primary mb-4">
                      {service.price}
                    </div>
                    <Link to="/book-service">
                      <Button className="w-full">
                        Book This Service
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Guarantees */}
      <section className="py-20 bg-accent-light/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Service Promise</h2>
            <p className="text-xl text-muted-foreground">
              Why customers trust Prakash Electric Works Motihari for their repair needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 text-primary flex justify-center">
                  {guarantee.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{guarantee.title}</h3>
                <p className="text-muted-foreground">{guarantee.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Your Electronics Fixed?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Book your repair service today or call us for immediate assistance. 
            We're here to solve all your electronics problems quickly and efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-service">
              <Button variant="accent" size="lg">
                Book Service Online
              </Button>
            </Link>
            <a href="tel:+919876543210">
              <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary">
                <Phone className="h-5 w-5 mr-2" />
                Call: +91 9934900409, +91 6202707996
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;