import { Card, CardContent } from "@/components/ui/card";
import SEOHead from "@/components/SEOHead";
import { 
  Users, 
  Award, 
  Clock, 
  MapPin,
  Wrench,
  Heart
} from "lucide-react";

const About = () => {
  const stats = [
    { icon: <Users className="h-8 w-8" />, number: "500+", label: "Happy Customers" },
    { icon: <Clock className="h-8 w-8" />, number: "5+", label: "Years Experience" },
    { icon: <Wrench className="h-8 w-8" />, number: "1000+", label: "Repairs Completed" },
    { icon: <Award className="h-8 w-8" />, number: "98%", label: "Success Rate" }
  ];

  return (
    <>
      <SEOHead
        title="About Us - Your Trusted Electronics Repair Experts"
        description="Learn about Prakash Electric Works Motihari's journey, our experienced team, and our commitment to providing quality electronics repair services in Bihar. Family-owned business serving the community since years."
        keywords="about Prakash Electric Works motihari, electronics repair company bihar, motor repair experts, local business motihari, electrical services history"
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Prakash Electric Works Motihari
            </h1>
            <p className="text-xl text-white/90">
              Your trusted partner for all electronics repair needs in Motihari, Bihar
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Prakash Electric Works Motihari was founded with a simple mission: to provide reliable, 
                  affordable electronics repair services to the people of Motihari and surrounding 
                  areas in Bihar. What started as a small repair shop has grown into the most 
                  trusted name for electronics repair in our community.
                </p>
                <p>
                  Located in the heart of Motihari, we have been serving families and businesses 
                  for over 5 years. Our deep roots in the local community mean we understand 
                  the unique needs of our customers and are committed to providing personalized 
                  service that you can trust.
                </p>
                <p>
                  From simple fan repairs to complex motor rewinding and complete house wiring 
                  projects, we have the expertise and experience to handle all your electronics 
                  and electrical needs. Our reputation is built on quality work, fair pricing, 
                  and genuine care for our customers.
                </p>
              </div>
            </div>
            <div>
              <Card className="p-8 bg-accent-light/10">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 mb-6">
                    <Heart className="h-8 w-8 text-accent" />
                    <h3 className="text-2xl font-semibold">Our Mission</h3>
                  </div>
                  <p className="text-lg text-muted-foreground">
                    To be the most reliable and trusted electronics repair service in Motihari, 
                    providing quality repairs, honest pricing, and exceptional customer service 
                    to our community. We believe in building long-term relationships based on 
                    trust and quality workmanship.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-accent-light/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Achievements</h2>
            <p className="text-xl text-muted-foreground">
              Numbers that speak to our commitment and quality
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 text-primary flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Prakash Electric Works Motihari?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Here's what makes us the preferred choice for electronics repair in Bihar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-soft transition-all duration-200">
              <CardContent className="p-6">
                <MapPin className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
                <p className="text-muted-foreground">
                  Deep understanding of local electrical systems and common issues in Motihari area.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-soft transition-all duration-200">
              <CardContent className="p-6">
                <Award className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
                <p className="text-muted-foreground">
                  All our repairs come with warranty and we stand behind our workmanship.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-soft transition-all duration-200">
              <CardContent className="p-6">
                <Clock className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Quick Turnaround</h3>
                <p className="text-muted-foreground">
                  Most repairs completed the same day or within 24 hours of service.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experienced Team
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Our skilled technicians have years of experience in electronics repair and 
            electrical work. We continuously update our knowledge to work with the latest 
            technologies and equipment, ensuring we can handle any repair challenge you bring to us.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;