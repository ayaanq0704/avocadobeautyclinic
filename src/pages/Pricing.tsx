
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const Pricing = () => {
  const pricingData = [
    {
      category: 'Permanent Hair Removal',
      icon: '⚡',
      services: [
        { name: 'Upper Lip', price: '₹500', duration: '15 mins' },
        { name: 'Chin', price: '₹600', duration: '20 mins' },
        { name: 'Underarms', price: '₹1,500', duration: '30 mins' },
        { name: 'Full Arms', price: '₹8,000', duration: '90 mins' },
        { name: 'Full Legs', price: '₹12,000', duration: '120 mins' },
        { name: 'Bikini Line', price: '₹2,500', duration: '45 mins' }
      ]
    },
    {
      category: 'Facials & Clean-ups',
      icon: '✨',
      services: [
        { name: 'Basic Cleanup', price: '₹800', duration: '45 mins' },
        { name: 'Deep Cleansing Facial', price: '₹1,200', duration: '60 mins' },
        { name: 'Anti-Aging Facial', price: '₹1,800', duration: '75 mins' },
        { name: 'Hydrating Facial', price: '₹1,500', duration: '60 mins' },
        { name: 'Brightening Facial', price: '₹1,600', duration: '60 mins' },
        { name: 'Acne Treatment Facial', price: '₹1,400', duration: '70 mins' }
      ]
    },
    {
      category: 'Waxing Services',
      icon: '🌟',
      services: [
        { name: 'Eyebrow Shaping', price: '₹200', duration: '15 mins' },
        { name: 'Upper Lip', price: '₹150', duration: '10 mins' },
        { name: 'Underarms', price: '₹300', duration: '20 mins' },
        { name: 'Full Arms', price: '₹600', duration: '30 mins' },
        { name: 'Half Legs', price: '₹500', duration: '25 mins' },
        { name: 'Full Legs', price: '₹800', duration: '45 mins' }
      ]
    },
    {
      category: 'Relaxation & Massage',
      icon: '💆‍♀️',
      services: [
        { name: 'Head Massage (Dry)', price: '₹400', duration: '30 mins' },
        { name: 'Head Massage (Oil)', price: '₹500', duration: '30 mins' },
        { name: 'Scalp Treatment', price: '₹800', duration: '45 mins' },
        { name: 'Stress Relief Massage', price: '₹1,000', duration: '60 mins' }
      ]
    },
    {
      category: 'Nail Care',
      icon: '💅',
      services: [
        { name: 'Basic Manicure', price: '₹400', duration: '30 mins' },
        { name: 'Deluxe Manicure', price: '₹600', duration: '45 mins' },
        { name: 'Basic Pedicure', price: '₹500', duration: '40 mins' },
        { name: 'Deluxe Pedicure', price: '₹700', duration: '60 mins' },
        { name: 'Manicure + Pedicure', price: '₹850', duration: '75 mins' },
        { name: 'Nail Art (per nail)', price: '₹50', duration: '5 mins' }
      ]
    },
    {
      category: 'Makeup Services',
      icon: '💄',
      services: [
        { name: 'Party Makeup', price: '₹1,500', duration: '60 mins' },
        { name: 'Bridal Makeup', price: '₹3,500', duration: '90 mins' },
        { name: 'Engagement Makeup', price: '₹2,500', duration: '75 mins' },
        { name: 'Casual Makeup', price: '₹800', duration: '30 mins' },
        { name: 'HD Makeup', price: '₹2,000', duration: '75 mins' },
        { name: 'Airbrush Makeup', price: '₹2,800', duration: '90 mins' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light/10 via-white to-accent/20">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            Affordable Beauty. 
            <span className="text-primary">Transparent Pricing.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 animate-fade-in">
            Quality beauty treatments at honest prices. No hidden costs, no surprises.
          </p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pricingData.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-in" style={{ animationDelay: `${categoryIndex * 0.1}s` }}>
                <CardHeader className="text-center bg-gradient-to-r from-primary/5 to-primary-light/5">
                  <div className="text-3xl mb-2">{category.icon}</div>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {category.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="flex items-center space-x-3">
                          <Check className="h-4 w-4 text-primary" />
                          <div>
                            <span className="font-medium text-gray-900">{service.name}</span>
                            <p className="text-sm text-gray-500">{service.duration}</p>
                          </div>
                        </div>
                        <span className="font-bold text-primary text-lg">{service.price}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Package Deals */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Special Packages</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-2 border-primary/20 hover:border-primary transition-colors duration-300">
              <CardHeader className="text-center">
                <div className="text-2xl mb-2">🌟</div>
                <CardTitle className="text-xl">Beauty Basic</CardTitle>
                <p className="text-3xl font-bold text-primary">₹2,500</p>
                <p className="text-sm text-gray-500">Save ₹400</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><Check className="h-4 w-4 text-primary mr-2" />Facial</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-primary mr-2" />Manicure</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-primary mr-2" />Pedicure</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-primary mr-2" />Eyebrow Shaping</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <CardHeader className="text-center bg-primary text-white">
                <div className="text-2xl mb-2">✨</div>
                <CardTitle className="text-xl">Beauty Deluxe</CardTitle>
                <p className="text-3xl font-bold">₹4,500</p>
                <p className="text-sm opacity-90">Save ₹800</p>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><Check className="h-4 w-4 text-primary mr-2" />Anti-Aging Facial</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-primary mr-2" />Deluxe Manicure</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-primary mr-2" />Deluxe Pedicure</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-primary mr-2" />Head Massage</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-primary mr-2" />Full Arms Waxing</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary transition-colors duration-300">
              <CardHeader className="text-center">
                <div className="text-2xl mb-2">👰</div>
                <CardTitle className="text-xl">Bridal Package</CardTitle>
                <p className="text-3xl font-bold text-primary">₹8,500</p>
                <p className="text-sm text-gray-500">Save ₹1,500</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><Check className="h-4 w-4 text-primary mr-2" />Bridal Makeup</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-primary mr-2" />Facial + Cleanup</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-primary mr-2" />Manicure + Pedicure</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-primary mr-2" />Full Body Waxing</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-primary mr-2" />Head Massage</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Book Your Treatment?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us today to schedule your appointment or ask about our current offers.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
            <Link to="/contact">Book Now & Save</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
