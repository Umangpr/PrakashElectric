import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SEOHead from "@/components/SEOHead";
import { 
  Wrench, 
  Zap, 
  Settings, 
  Shield, 
  Clock, 
  MapPin,
  Phone,
  Star,
  CheckCircle
} from "lucide-react";

const Home = () => {
  const services = [
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Motor Repair",
      description: "Professional motor repair and maintenance services"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Generator Repair", 
      description: "Complete generator servicing and repair solutions"
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Fan Repair",
      description: "All types of ceiling and table fan repairs"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Stabilizer Repair",
      description: "Voltage stabilizer repair and installation"
    }
  ];

  const features = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Quick Service",
      description: "Same day repairs for most items"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Quality Work",
      description: "Guaranteed repairs with warranty"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Local Experts",
      description: "Serving Motihari community since years"
    }
  ];

  return (
    <>
      <SEOHead
        title="Professional Electronics Repair Services"
        description="Prakash Electric Works Motihari offers expert motor, generator, fan, stabilizer repair and house wiring services in Motihari, Bihar. Quick, reliable, and affordable electronics repair solutions."
        keywords="electronics repair motihari, motor repair bihar, generator repair, fan repair, stabilizer repair, house wiring motihari, electrical services bihar"
      />

      {/* Hero Section - Urban Company Style */}
      <section className="bg-background py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground leading-tight">
                Electronics repair at your 
                <span className="text-primary"> doorstep</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-muted-foreground leading-relaxed">
                Professional motor, generator, fan, stabilizer repair and house wiring services in Motihari, Bihar. Quick, reliable, affordable.
              </p>
              
              {/* Service Categories Grid - Urban Company Style */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                <div className="flex items-center gap-3 p-3 border border-border rounded-lg hover:shadow-soft transition-all cursor-pointer">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Settings className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">Motor Repair</span>
                </div>
                <div className="flex items-center gap-3 p-3 border border-border rounded-lg hover:shadow-soft transition-all cursor-pointer">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Zap className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">Generator Repair</span>
                </div>
                <div className="flex items-center gap-3 p-3 border border-border rounded-lg hover:shadow-soft transition-all cursor-pointer">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Wrench className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">Fan Repair</span>
                </div>
                <div className="flex items-center gap-3 p-3 border border-border rounded-lg hover:shadow-soft transition-all cursor-pointer">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Shield className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">House Wiring</span>
                </div>
              </div>

              {/* <Link to="/book-service">
                <Button variant="urban" size="lg" className="w-full sm:w-auto">
                  Book now
                </Button>
              </Link> */}

              <div className="flex flex-row sm:flex-row gap-4 justify-center max-w-md ">
              <Link to="/book-service" className="flex-1">
                <Button variant="urban" size="lg" className="w-full">
                  Book service
                </Button>
              </Link>
              <a href="tel:+919934900409" className="flex-1">
                <Button variant="outline" size="lg" className="w-full">
                  <Phone className="h-4 w-4 mr-2" />
                  Call now
                </Button>
              </a>
            </div>
              
            </div>

            {/* Hero Image Section */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="bg-muted rounded-2xl p-8 aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Wrench className="h-12 w-12 text-primary-foreground" />
                    </div>
                    <p className="text-lg font-semibold text-foreground">Professional Repair Services</p>
                    <p className="text-muted-foreground mt-2">Trusted by 1000+ customers in Motihari</p>
                  </div>
                </div>
                
                {/* Rating Badge */}
                <div className="absolute -bottom-4 left-4 bg-card shadow-primary rounded-lg p-3 border">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[1,2,3,4,5].map((i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <span className="font-semibold text-sm">4.8</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Service Rating*</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Urban Company Style */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">1000+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">4.8</div>
              <div className="text-sm text-muted-foreground">Service Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services - Urban Company Cards */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular services</h2>
            <p className="text-lg text-muted-foreground">
              Most requested repair services in Motihari
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service Card 1 */}
            <div className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-soft transition-all">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <Settings className="h-16 w-16 text-primary" />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">Motor repair & maintenance</h3>
                <p className="text-muted-foreground text-sm mb-4">Professional motor servicing</p>
                <Button variant="outline" size="sm" className="w-full">Book now</Button>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-soft transition-all">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <Zap className="h-16 w-16 text-primary" />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">Generator service</h3>
                <p className="text-muted-foreground text-sm mb-4">Complete generator solutions</p>
                <Button variant="outline" size="sm" className="w-full">Book now</Button>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-soft transition-all">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <Wrench className="h-16 w-16 text-primary" />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">House wiring service</h3>
                <p className="text-muted-foreground text-sm mb-4">Complete electrical solutions</p>
                <Button variant="outline" size="sm" className="w-full">Book now</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Urban Company Style */}
      <section className="py-16 bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-2xl p-8 md:p-12 text-center text-foreground">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Get your electronics repaired today
            </h2>
            <p className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto">
              Professional repair services with warranty. Same-day service available for most repairs in Motihari.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Link to="/book-service" className="flex-1">
                <Button variant="urban" size="lg" className="w-full">
                  Book service
                </Button>
              </Link>
              <a href="tel:+919934900409" className="flex-1">
                <Button variant="outline" size="lg" className="w-full">
                  <Phone className="h-4 w-4 mr-2" />
                  Call now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
