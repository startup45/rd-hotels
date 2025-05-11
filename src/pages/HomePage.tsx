
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CalendarRange, Utensils, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';

const HomePage = () => {
  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      location: 'Chennai',
      comment: 'An exceptional stay experience. The staff went above and beyond to ensure our comfort. Will definitely return!',
      rating: 5,
    },
    {
      id: 2,
      name: 'Priya Sharma',
      location: 'Bangalore',
      comment: 'The rooms were immaculate and the restaurant served delicious food. Perfect for both business and leisure.',
      rating: 5,
    },
    {
      id: 3,
      name: 'John Mathew',
      location: 'Kochi',
      comment: 'My wife and I had a wonderful anniversary celebration at RD Hotels. The special arrangements were perfect.',
      rating: 4,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070')`,
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30" />
        </div>
        <div className="relative h-full flex items-center container-custom">
          <div className="max-w-3xl text-white animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
              Where Comfort Meets Class in Perundurai
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Experience luxury, elegance, and exceptional service at RD Hotels, the premier destination in Tamil Nadu.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/booking" className="btn-primary">
                Book Your Stay
              </Link>
              <Link to="/rooms" className="btn-outline text-white border-white hover:bg-white hover:text-charcoal">
                Explore Our Rooms
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight Cards */}
      <section className="py-16 bg-ivory">
        <div className="container-custom">
          <h2 className="section-title text-center mx-auto">Experience Luxury</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Room Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=2070" 
                  alt="Luxurious Room" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <CalendarRange className="h-5 w-5 text-gold mr-2" />
                  <h3 className="font-serif text-xl">Elegant Rooms</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Spacious, comfortable rooms designed with your relaxation in mind. Modern amenities with classic charm.
                </p>
                <Link to="/rooms" className="text-maroon font-medium hover:text-maroon-dark">
                  View Rooms →
                </Link>
              </div>
            </div>

            {/* Restaurant Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=2070" 
                  alt="Restaurant" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <Utensils className="h-5 w-5 text-gold mr-2" />
                  <h3 className="font-serif text-xl">Fine Dining</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Savor exquisite cuisine at our Suvai Restaurant or enjoy refreshing drinks at our Chill & Chip Bar.
                </p>
                <Link to="/dining" className="text-maroon font-medium hover:text-maroon-dark">
                  Explore Dining →
                </Link>
              </div>
            </div>

            {/* Events Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2070" 
                  alt="Events" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <Users className="h-5 w-5 text-gold mr-2" />
                  <h3 className="font-serif text-xl">Events & Conferences</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Perfect venues for weddings, corporate events, and celebrations with professional planning services.
                </p>
                <Link to="/events" className="text-maroon font-medium hover:text-maroon-dark">
                  View Venues →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="section-title">Welcome to RD Hotels</h2>
              <p className="mb-4">
                Located in the heart of Perundurai, Tamil Nadu, RD Hotels combines elegant luxury with warm hospitality to create an unforgettable stay experience.
              </p>
              <p className="mb-4">
                Our hotel features spacious rooms, exceptional dining options, state-of-the-art conference facilities, and attentive service that caters to both business and leisure travelers.
              </p>
              <p className="mb-6">
                Whether you're visiting for business, a family vacation, or a special celebration, our dedicated team is committed to making your stay memorable.
              </p>
              <Link to="/about" className="btn-outline">
                Discover Our Story
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2074" 
                  alt="RD Hotels Interior" 
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-5 -left-5 w-24 h-24 bg-gold flex items-center justify-center rounded">
                  <div className="text-center">
                    <span className="block text-2xl font-bold">15+</span>
                    <span className="text-xs">Years of Excellence</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-ivory">
        <div className="container-custom">
          <h2 className="section-title text-center mx-auto">Guest Experiences</h2>
          
          <div className="mt-12">
            <Carousel className="w-full">
              <CarouselContent>
                {testimonials.map((testimonial) => (
                  <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                    <div className="h-full p-6 bg-white rounded-lg shadow-md">
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`h-5 w-5 ${i < testimonial.rating ? 'text-gold' : 'text-gray-300'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="mb-4 text-gray-600 italic">"{testimonial.comment}"</p>
                      <div>
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.location}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden md:flex">
                <CarouselPrevious className="text-maroon border-maroon" />
                <CarouselNext className="text-maroon border-maroon" />
              </div>
            </Carousel>
          </div>
          
          <div className="text-center mt-10">
            <Button variant="outline" className="border-maroon text-maroon hover:bg-maroon hover:text-white">
              View All Reviews
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cover bg-center relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070')`,
          }}
        >
          <div className="absolute inset-0 bg-maroon/80" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            Ready for an Unforgettable Stay?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Book your luxury accommodation today and experience the perfect blend of comfort, elegance and exceptional service.
          </p>
          <Link to="/booking" className="bg-gold hover:bg-gold-dark text-charcoal px-8 py-3 rounded-lg font-medium transition-colors duration-300">
            Book Your Stay Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
