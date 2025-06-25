
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Anjali M.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b820?w=400&h=400&fit=crop&crop=face',
      rating: 5,
      review: "I've never felt so confident. The hair removal was painless and effective! The staff is incredibly professional and the results are amazing.",
      service: 'Permanent Hair Removal'
    },
    {
      name: 'Riya K.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      rating: 5,
      review: "Love their facials — my skin glows every time I visit! The personalized treatment plan really works for my sensitive skin.",
      service: 'Facial Treatment'
    },
    {
      name: 'Shruti P.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face',
      rating: 5,
      review: "The vibe is so peaceful and clean. Highly recommend their services. It's like a mini spa retreat every time I visit.",
      service: 'Full Service Package'
    },
    {
      name: 'Priya S.',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face',
      rating: 5,
      review: "Best manicure and pedicure in town! The attention to detail is exceptional and the results last so much longer than other places.",
      service: 'Nail Care'
    },
    {
      name: 'Meera J.',
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&crop=face',
      rating: 5,
      review: "Their bridal makeup package was perfect for my wedding day. I looked absolutely stunning and felt beautiful throughout the ceremony.",
      service: 'Bridal Makeup'
    },
    {
      name: 'Kavya L.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face',
      rating: 5,
      review: "The head massage here is heavenly! It's the perfect stress buster after a long week. The environment is so calming and relaxing.",
      service: 'Head Massage'
    },
    {
      name: 'Neha R.',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=face',
      rating: 5,
      review: "Clean, hygienic, and professional. The waxing service is gentle yet effective. I'm a regular customer now and couldn't be happier.",
      service: 'Waxing Services'
    },
    {
      name: 'Aditi V.',
      image: 'https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=400&h=400&fit=crop&crop=face',
      rating: 5,
      review: "Amazing experience every single time! The staff remembers my preferences and always makes me feel special. Truly personalized service.",
      service: 'Regular Customer'
    },
    {
      name: 'Divya M.',
      image: 'https://images.unsplash.com/photo-1545912452-8aea7e25a3d3?w=400&h=400&fit=crop&crop=face',
      rating: 5,
      review: "The anti-aging facial has transformed my skin completely. I look years younger and my skin feels so soft and supple. Highly recommended!",
      service: 'Anti-Aging Facial'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light/10 via-white to-accent/20">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            What Our Clients Say
          </h1>
          <p className="text-xl text-gray-600 mb-8 animate-fade-in">
            Don't just take our word for it. Here's what our beautiful clients have to say about their experience with us.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  {/* Profile Section */}
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-primary font-medium">{testimonial.service}</p>
                    </div>
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  {/* Review */}
                  <blockquote className="text-gray-600 italic leading-relaxed">
                    "{testimonial.review}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <p className="text-gray-600">Satisfaction Rate</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-4xl font-bold text-primary mb-2">3+</div>
              <p className="text-gray-600">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Loved Our Service?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Share your story with us and join our growing family of satisfied clients!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Link to="/contact">Book Your Experience</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
