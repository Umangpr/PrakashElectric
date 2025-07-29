import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-white/10 rounded-lg">
                <Zap className="h-6 w-6" />
              </div>
              <span className="font-bold text-xl">Prakash Electric Works Motihari</span>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Your trusted electronics repair shop in Motihari, Bihar. We provide 
              professional repair services for motors, generators, fans, stabilizers, 
              and complete house wiring solutions.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+91 9934900409</span>
                <span>+91 6202707996</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>prakashelectric99@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Balua Bazar, Motihari, Bihar 845401</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2 text-sm">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
              <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Our Services</h3>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/80">
              <span>Motor Repair</span>
              <span>Generator Repair</span>
              <span>Fan Repair</span>
              <span>Stabilizer Repair</span>
              <span>House Wiring</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; 2025 Prakash Electric Works Motihari. All rights reserved. | Serving Bihar with quality electronics repair services.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
