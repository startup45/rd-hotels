
import { useState } from "react";

const GalleryPage = () => {
  // Gallery categories
  const categories = ["All", "Rooms", "Dining", "Events", "Amenities"];
  
  // State for active category
  const [activeCategory, setActiveCategory] = useState("All");
  
  // Gallery images data with categories
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1551776235-dde6d482980b?q=80&w=2070",
      alt: "Luxury hotel lobby",
      category: "Amenities",
      title: "Main Lobby",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070",
      alt: "Luxury suite bedroom",
      category: "Rooms",
      title: "Executive Suite",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070",
      alt: "Hotel swimming pool",
      category: "Amenities",
      title: "Swimming Pool",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2070",
      alt: "Elegant hotel bathroom",
      category: "Rooms",
      title: "Deluxe Room Bathroom",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070",
      alt: "Restaurant dining setup",
      category: "Dining",
      title: "Suvai Restaurant",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1553444843-0873ea620097?q=80&w=2070",
      alt: "Room with view",
      category: "Rooms",
      title: "Standard Room",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2070",
      alt: "Wedding setup",
      category: "Events",
      title: "Wedding Ceremony",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1570057633712-870fa818841f?q=80&w=2070",
      alt: "Hotel gym",
      category: "Amenities",
      title: "Fitness Center",
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1560624052-449f5ddf0c31?q=80&w=2070",
      alt: "Breakfast buffet",
      category: "Dining",
      title: "Breakfast Setup",
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2070",
      alt: "Conference hall",
      category: "Events",
      title: "Conference Room",
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1535827841776-24afc1e255ac?q=80&w=2070",
      alt: "Hotel bar",
      category: "Dining",
      title: "Chill & Chip Bar",
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070",
      alt: "Family suite",
      category: "Rooms",
      title: "Family Suite",
    },
    {
      id: 13,
      src: "https://images.unsplash.com/photo-1621275471769-e6aa44d5a483?q=80&w=2070",
      alt: "Banquet hall",
      category: "Events",
      title: "Grand Ballroom",
    },
    {
      id: 14,
      src: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=2070",
      alt: "Coffee shop",
      category: "Dining",
      title: "Coffee Shop",
    },
    {
      id: 15,
      src: "https://images.unsplash.com/photo-1580483046931-628b3972c311?q=80&w=2070",
      alt: "Hotel spa",
      category: "Amenities",
      title: "Wellness Center",
    },
  ];
  
  // Filter images based on active category
  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  // State for the lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  // Open lightbox with selected image
  const openLightbox = (image) => {
    setCurrentImage(image);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
  };

  // Close lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };

  // Navigate to next image in lightbox
  const nextImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === currentImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setCurrentImage(filteredImages[nextIndex]);
  };

  // Navigate to previous image in lightbox
  const prevImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === currentImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentImage(filteredImages[prevIndex]);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 bg-cover bg-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1551776235-dde6d482980b?q=80&w=2070')`,
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative container-custom">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Photo Gallery
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Explore our hotel through our collection of images showcasing our elegant spaces, amenities, and services.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Filter */}
      <section className="py-12 bg-ivory">
        <div className="container-custom text-center">
          <div className="inline-flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                  activeCategory === category 
                    ? 'bg-maroon text-white' 
                    : 'bg-white text-charcoal hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <p className="text-gray-600 mb-8">
            Showing {filteredImages.length} photos in {activeCategory.toLowerCase()} category
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-16 pt-4 bg-ivory">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <div 
                key={image.id} 
                className="overflow-hidden rounded-lg shadow-md cursor-pointer group relative"
                onClick={() => openLightbox(image)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
                  <div className="p-4 w-full text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-serif text-lg">{image.title}</h3>
                    <p className="text-sm text-white/80">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && currentImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center" onClick={closeLightbox}>
          <div className="relative max-w-5xl w-full h-full flex items-center justify-center p-4" onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <button 
              className="absolute top-4 right-4 z-10 text-white p-2 hover:text-gold bg-black/50 rounded-full"
              onClick={closeLightbox}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Previous button */}
            <button 
              className="absolute left-4 z-10 text-white p-2 hover:text-gold bg-black/50 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Image */}
            <img 
              src={currentImage.src} 
              alt={currentImage.alt} 
              className="max-h-full max-w-full object-contain"
            />
            
            {/* Next button */}
            <button 
              className="absolute right-4 z-10 text-white p-2 hover:text-gold bg-black/50 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Caption */}
            <div className="absolute bottom-4 left-0 right-0 text-center text-white bg-black/50 py-2">
              <h3 className="font-serif text-lg">{currentImage.title}</h3>
              <p className="text-sm text-white/80">{currentImage.category}</p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">Experience RD Hotels in Person</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Pictures can only show so much. Visit us to experience the true luxury and hospitality of RD Hotels.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/booking" 
              className="bg-maroon hover:bg-maroon-dark text-white px-6 py-3 rounded transition-colors duration-300 font-medium"
            >
              Book Your Stay
            </a>
            <a 
              href="/contact" 
              className="border-2 border-maroon text-maroon hover:bg-maroon hover:text-white px-6 py-3 rounded transition-colors duration-300 font-medium"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
