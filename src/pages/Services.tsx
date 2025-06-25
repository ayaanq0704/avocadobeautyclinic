
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: '⚡',
      title: 'Permanent Hair Removal',
      subtitle: 'Thermolysis / Electrolysis / Microllysis',
      description: 'Safe, precise, and effective for all skin types. Get long-term smooth skin with our advanced hair removal techniques.',
      features: ['FDA Approved Technology', 'All Skin Types', 'Permanent Results', 'Minimal Discomfort']
    },
    {
      icon: '✨',
      title: 'Facials & Clean-ups',
      subtitle: 'Glow-boosting treatments',
      description: 'Glow-boosting facial treatments and deep cleansing sessions tailored to your skin type for radiant, healthy skin.',
      features: ['Deep Cleansing', 'Customized Treatment', 'Hydrating Masks', 'Anti-aging Benefits']
    },
    {
      icon: '🌟',
      title: 'Waxing',
      subtitle: 'Gentle & skin-friendly',
      description: 'Smooth, hair-free skin with gentle waxing techniques. Hygienic and skin-friendly approach for lasting smoothness.',
      features: ['Premium Wax', 'Hygienic Process', 'Skilled Technicians', 'Post-care Guidance']
    },
    {
      icon: '💆‍♀️',
      title: 'Head Massages',
      subtitle: 'Relaxation therapy',
      description: 'Soothing massages to relax your scalp and mind. Choose from oil or dry massages for complete relaxation.',
      features: ['Stress Relief', 'Improved Circulation', 'Choice of Oils', 'Calming Environment']
    },
    {
      icon: '💅',
      title: 'Manicure & Pedicure',
      subtitle: 'Complete nail care',
      description: 'Pamper your hands and feet with perfect finishes. Includes cuticle care, nail shaping, and premium polish.',
      features: ['Cuticle Care', 'Nail Art Options', 'Quality Products', 'Relaxing Experience']
    },
    {
      icon: '💄',
      title: 'Makeup Services',
      subtitle: 'Professional artistry',
      description: 'Makeup for every occasion — bridal, party, or casual. Transform your look with our trained professionals.',
      features: ['Bridal Makeup', 'Party Look', 'Premium Products', 'Photo-ready Finish']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light/10 via-white to-accent/20">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            What We Offer
          </h1>
          <p className="text-xl text-gray-600 mb-8 animate-fade-in">
            Comprehensive beauty treatments designed to enhance your natural beauty and boost your confidence.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="text-center pb-4">
                  <div className="text-4xl mb-4 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </CardTitle>
                  <p className="text-primary font-medium">{service.subtitle}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button asChild className="w-full bg-primary hover:bg-primary-dark">
                    <Link to="/contact">Book This Service</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Not Sure Which Service Is Right for You?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our beauty experts are here to help you choose the perfect treatment plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Link to="/contact">Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6">
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
