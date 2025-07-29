import { Card, CardContent } from "@/components/ui/card";
import SEOHead from "@/components/SEOHead";

const Gallery = () => {
  // Using Unsplash images for electronics repair theme
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=500&h=400&fit=crop",
      alt: "Electronics repair work - Motor repair",
      title: "Motor Repair Service",
      description: "Professional motor rewinding and repair work"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=400&fit=crop",
      alt: "Circuit board repair and electronics",
      title: "Circuit Board Repair",
      description: "Precision electronics circuit repair"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=400&fit=crop",
      alt: "Generator repair and maintenance",
      title: "Generator Servicing",
      description: "Complete generator repair and maintenance"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=400&fit=crop",
      alt: "Professional repair tools and equipment",
      title: "Modern Equipment",
      description: "State-of-the-art repair tools and testing equipment"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=500&h=400&fit=crop",
      alt: "Electrical wiring and installation work",
      title: "House Wiring",
      description: "Professional electrical wiring and installation"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=500&h=400&fit=crop",
      alt: "Workshop and repair facility",
      title: "Our Workshop",
      description: "Well-equipped repair facility in Motihari"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=400&fit=crop",
      alt: "Technical documentation and repair process",
      title: "Quality Process",
      description: "Systematic approach to electronics repair"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=500&h=400&fit=crop",
      alt: "Electronics testing and quality check",
      title: "Quality Testing",
      description: "Thorough testing before delivery"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=500&h=400&fit=crop",
      alt: "Customer service and consultation",
      title: "Customer Service",
      description: "Professional consultation and customer support"
    }
  ];

  return (
    <>
      <SEOHead
        title="Gallery - See Our Electronics Repair Work"
        description="View our gallery showcasing professional electronics repair work, modern equipment, and satisfied customers in Motihari, Bihar. See the quality of our motor, generator, fan and electrical repair services."
        keywords="electronics repair gallery motihari, motor repair photos, generator repair images, workshop photos bihar, electrical services gallery"
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Work Gallery
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            See the quality of our electronics repair work and our modern facility in Motihari
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image) => (
              <Card key={image.id} className="group hover:shadow-soft transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {image.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {image.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-accent-light/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Work Speaks</h2>
            <p className="text-xl text-muted-foreground">
              Numbers that showcase our commitment to quality repair services
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Repairs Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Emergency Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do Best</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From simple fan repairs to complex motor rewinding, we handle all electronics repair needs in Motihari
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">🔧</span>
              </div>
              <h3 className="font-semibold mb-2">Motor Repair</h3>
              <p className="text-sm text-muted-foreground">Professional motor rewinding and repair services</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">⚡</span>
              </div>
              <h3 className="font-semibold mb-2">Generator Service</h3>
              <p className="text-sm text-muted-foreground">Complete generator maintenance and repair</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">🌀</span>
              </div>
              <h3 className="font-semibold mb-2">Fan Repair</h3>
              <p className="text-sm text-muted-foreground">All types of fan repairs and maintenance</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">🏠</span>
              </div>
              <h3 className="font-semibold mb-2">House Wiring</h3>
              <p className="text-sm text-muted-foreground">Complete electrical wiring solutions</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;