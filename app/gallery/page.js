"use client"
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaTimes, FaArrowLeft, FaArrowRight, FaFilter } from 'react-icons/fa';

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [filteredImages, setFilteredImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Sample gallery images data
  const galleryImages = [
    {
      id: 1,
      src: '/images/gallery/new14.jpeg',
      category: 'termite',
      title: 'Termite Inspection',
      description: 'Our technician performing a thorough termite inspection'
    },
    {
      id: 2,
      src: '/images/gallery/1.webp',
      category: 'termite',
      title: 'Termite Baiting System',
      description: 'Installing advanced termite bait stations around a property'
    },
    {
      id: 3,
      src: '/images/gallery/new4.jpg',
      category: 'cockroach',
      title: 'Cockroach Treatment',
      description: 'Applying gel bait in kitchen areas for cockroach control'
    },
    {
      id: 4,
      src: '/images/gallery/new2.JPG',
      category: 'mosquito',
      title: 'Mosquito Fogging',
      description: 'Outdoor mosquito fogging treatment in residential area'
    },
    {
      id: 5,
      src: '/images/gallery/new13.jpeg',
      category: 'rodent',
      title: 'Rodent Proofing',
      description: 'Sealing entry points to prevent rodent access'
    },
    {
      id: 6,
      src: '/images/gallery/new7.jpg',
      category: 'rodent',
      title: 'Tamper-Proof Bait Station',
      description: 'Safe rodent bait station installation'
    },
    {
      id: 7,
      src: '/images/gallery/new8.jpg',
      category: 'bedbug',
      title: 'Bed Bug Heat Treatment',
      description: 'Professional heat treatment for bed bug eradication'
    },
    {
      id: 8,
      src: '/images/gallery/new9.jpg',
      category: 'bedbug',
      title: 'Bed Bug Inspection',
      description: 'Thorough inspection of mattress and furniture'
    },
    {
      id: 9,
      src: '/images/gallery/new10.jpg',
      category: 'ant',
      title: 'Ant Baiting',
      description: 'Strategic placement of ant bait stations'
    },
    {
      id: 10,
      src: '/images/gallery/new11.jpg',
      category: 'bird',
      title: 'Bird Netting Installation',
      description: 'Installing professional bird netting for pigeon control'
    },
    {
      id: 11,
      src: '/images/gallery/new5.jpg',
      category: 'bird',
      title: 'Bird Spiking',
      description: 'Applying bird spikes to ledges and roofs'
    },
    {
      id: 12,
      src: '/images/gallery/new3.jpg',
      category: 'fly',
      title: 'Fly Control',
      description: 'Installing fly control units in commercial kitchen'
    },
    {
      id: 13,
      src: '/images/gallery/new1.jpg',
      category: 'team',
      title: 'Certified Technicians',
      description: 'Our team of certified pest control experts'
    },
    {
      id: 14,
      src: '/images/gallery/new12.jpg',
      category: 'equipment',
      title: 'Advanced Equipment',
      description: 'State-of-the-art pest control equipment'
    },
    {
      id: 15,
      src: '/videos/video1.mp4',
      category: 'certification',
      title: 'Industry Standards in Action',
      description: 'Showcasing our team implementing certified pest control procedures at commercial sites.',
      isVideo: true
    },
    {
      id: 16,
      src: '/videos/video2.mp4',
      category: 'results',
      title: 'Pest Control Video',
      description: 'Demonstrating effective pest management and results for industrial clients.',
      isVideo: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'termite', name: 'Termite Control' },
    { id: 'cockroach', name: 'Cockroach Control' },
    { id: 'mosquito', name: 'Mosquito Control' },
    { id: 'rodent', name: 'Rodent Control' },
    { id: 'bedbug', name: 'Bed Bug Control' },
    { id: 'ant', name: 'Ant Control' },
    { id: 'bird', name: 'Bird Control' },
    { id: 'fly', name: 'Fly Control' },
    { id: 'team', name: 'Our Team' },
    { id: 'results', name: 'Results' }
  ];

  // Filter images based on category and search term
  useEffect(() => {
    let result = galleryImages;
    
    if (selectedCategory !== 'all') {
      result = result.filter(image => image.category === selectedCategory);
    }
    
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(image => 
        image.title.toLowerCase().includes(term) || 
        image.description.toLowerCase().includes(term) ||
        image.category.toLowerCase().includes(term)
      );
    }
    
    setFilteredImages(result);
  }, [selectedCategory, searchTerm]);

  const navigateImage = (direction) => {
    if (!selectedImage) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    }
    
    setSelectedImage(filteredImages[newIndex]);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen">
      <Head>
        <title>Our Gallery | Progressive care service</title>
        <meta name="description" content="View our pest control gallery showcasing our services, team, and results." />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 bg-green-700 text-white overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center relative z-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Gallery</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore our work, team, and the results we've achieved for our clients
          </p>
        </motion.div>
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </section>

      {/* Filters and Search */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8"
          >
            {/* <div className="flex items-center bg-white rounded-lg shadow-sm px-4 py-2 w-full md:w-auto">
              <FaSearch className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search gallery..."
                className="outline-none w-full bg-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button onClick={() => setSearchTerm('')} className="ml-2 text-gray-400 hover:text-gray-600">
                  <FaTimes />
                </button>
              )}
            </div> */}

            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category.id 
                    ? 'bg-green-600 text-white shadow-md' 
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Results count */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center text-gray-600 mb-2"
          >
            Showing {filteredImages.length} {filteredImages.length === 1 ? 'item' : 'items'}
            {selectedCategory !== 'all' && ` in ${categories.find(c => c.id === selectedCategory)?.name}`}
            {searchTerm && ` for "${searchTerm}"`}
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredImages.length > 0 ? (
            <motion.div
              variants={containerVariants}
            //   initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  variants={itemVariants}
                  className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer bg-white transform transition-transform hover:scale-105"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="aspect-w-1 aspect-h-1 h-64 relative">
                    {image.isVideo ? (
                      <div className="w-full h-full bg-gray-800 flex items-center justify-center relative">
                        <video className="w-full h-full object-cover opacity-90">
                          <source src={image.src} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                          <div className="bg-black bg-opacity-50 rounded-full p-3">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="w-full h-full bg-gray-200 relative">
                        <Image
                          src={image.src}
                          alt={image.title}
                          fill
                          className="object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center hidden">
                          <span className="text-gray-500">Image not found</span>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="absolute inset-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end">
                    <div className="p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 w-full">
                      <h3 className="font-semibold text-sm md:text-base">{image.title}</h3>
                      <p className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-5xl text-gray-300 mb-4">😔</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No items found</h3>
              <p className="text-gray-500">
                Try selecting a different category or adjusting your search term
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full max-h-full bg-black rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-10 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all"
                onClick={() => setSelectedImage(null)}
              >
                <FaTimes className="text-xl" />
              </button>

              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-70 transition-all"
                onClick={() => navigateImage('prev')}
              >
                <FaArrowLeft className="text-xl" />
              </button>

              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-70 transition-all"
                onClick={() => navigateImage('next')}
              >
                <FaArrowRight className="text-xl" />
              </button>

              <div className="flex flex-col h-full">
                <div className="flex-grow relative h-96 bg-gray-800 flex items-center justify-center">
                  {selectedImage.isVideo ? (
                    <video className="w-full h-full object-contain" controls autoPlay>
                      <source src={selectedImage.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <Image
                      src={selectedImage.src}
                      alt={selectedImage.title}
                      fill
                      className="object-contain"
                    />
                  )}
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{selectedImage.title}</h3>
                  <p className="text-gray-600">{selectedImage.description}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">See Our Work in Person</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Ready to protect your property with our professional pest control services?
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/contact" 
              className="bg-white text-green-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Request Free Inspection
            </a>
            <a 
              href="tel:1355555555" 
              className="border-2 border-white text-white hover:bg-white hover:text-green-700 font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Call Now: (355) 555-5555
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default GalleryPage;