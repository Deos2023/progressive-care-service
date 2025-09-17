"use client"
import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FaSearch, FaTimes, FaArrowLeft, FaArrowRight, FaFilter, FaPlay, FaExpand } from 'react-icons/fa';

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [filteredImages, setFilteredImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

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
    setIsLoading(false);
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
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Our Gallery | Progressive Care Service</title>
        <meta name="description" content="View our pest control gallery showcasing our services, team, and results." />
      </Head>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative py-28 bg-gradient-to-br from-green-700 to-green-900 text-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-72 h-72 bg-white/10 rounded-full"
          ></motion.div>
          <motion.div 
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-1/3 right-1/3 w-56 h-56 bg-green-400/20 rounded-full"
          ></motion.div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-green-200"
          >
            Our Gallery
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-8"
          >
            Explore our work, team, and the results we've achieved for our clients
          </motion.p>
        </div>
      </motion.section>

      {/* Filters and Search */}
      <motion.section 
        ref={sectionRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            variants={staggerChildren}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8"
          >
            {/* <motion.div variants={fadeInUp} className="flex items-center bg-white rounded-xl shadow-lg px-5 py-3 w-full md:w-auto border border-gray-200">
              <FaSearch className="text-gray-400 mr-3" />
              <input
                type="text"
                placeholder="Search gallery..."
                className="outline-none w-full bg-transparent placeholder-gray-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <motion.button 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  onClick={() => setSearchTerm('')} 
                  className="ml-2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <FaTimes />
                </motion.button>
              )}
            </motion.div> */}

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 justify-center">
              {categories.map(category => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-md ${
                    selectedCategory === category.id 
                    ? 'bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg' 
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  {category.name}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>

          {/* Results count */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center text-gray-600 mb-2 font-medium"
          >
            Showing {filteredImages.length} {filteredImages.length === 1 ? 'item' : 'items'}
            {selectedCategory !== 'all' && ` in ${categories.find(c => c.id === selectedCategory)?.name}`}
            {searchTerm && ` for "${searchTerm}"`}
          </motion.p>
        </div>
      </motion.section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-600"></div>
            </div>
          ) : filteredImages.length > 0 ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  variants={itemVariants}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer bg-white transform transition-all duration-300"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="aspect-w-1 aspect-h-1 h-64 relative">
                    {image.isVideo ? (
                      <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
                        <motion.div 
                          initial={{ scale: 1 }}
                          whileHover={{ scale: 1.05 }}
                          className="absolute inset-0 bg-black/40 flex items-center justify-center"
                        >
                          <motion.div 
                            whileHover={{ scale: 1.1 }}
                            className="bg-white/20 backdrop-blur-sm rounded-full p-4 border-2 border-white/30"
                          >
                            <FaPlay className="text-3xl text-white" />
                          </motion.div>
                        </motion.div>
                        <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1.5 rounded-full text-sm">
                          Video
                        </div>
                      </div>
                    ) : (
                      <div className="w-full h-full relative overflow-hidden">
                        <motion.div 
                          initial={{ scale: 1 }}
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                          className="w-full h-full"
                        >
                          <Image
                            src={image.src}
                            alt={image.title}
                            fill
                            className="object-cover"
                            onLoadingComplete={() => setIsLoading(false)}
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            }}
                          />
                        </motion.div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 w-full">
                            <h3 className="font-semibold text-sm md:text-base mb-1">{image.title}</h3>
                            <p className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              {image.description}
                            </p>
                          </div>
                        </div>
                        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-black/50 rounded-full p-2 backdrop-blur-sm">
                            <FaExpand className="text-white text-sm" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-20"
            >
              <div className="text-6xl text-gray-300 mb-4">📷</div>
              <h3 className="text-2xl font-semibold text-gray-600 mb-3">No items found</h3>
              <p className="text-gray-500 max-w-md mx-auto">
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
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="relative max-w-5xl w-full max-h-[90vh] bg-black rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.7)" }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-4 right-4 z-10 text-white bg-black/50 rounded-full p-3 backdrop-blur-sm border border-white/20"
                onClick={() => setSelectedImage(null)}
              >
                <FaTimes className="text-xl" />
              </motion.button>

              {/* Navigation buttons */}
              {filteredImages.length > 1 && (
                <>
                  <motion.button
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.7)" }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white bg-black/50 rounded-full p-3 backdrop-blur-sm border border-white/20"
                    onClick={() => navigateImage('prev')}
                  >
                    <FaArrowLeft className="text-xl" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.7)" }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white bg-black/50 rounded-full p-3 backdrop-blur-sm border border-white/20"
                    onClick={() => navigateImage('next')}
                  >
                    <FaArrowRight className="text-xl" />
                  </motion.button>
                </>
              )}

              <div className="flex flex-col h-full">
                <div className="flex-grow relative h-[70vh] bg-gray-900 flex items-center justify-center">
                  {selectedImage.isVideo ? (
                    <video 
                      className="w-full h-full object-contain" 
                      controls 
                      autoPlay 
                      playsInline
                    >
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
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="p-6 bg-gradient-to-t from-black to-gray-900 border-t border-gray-800"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">{selectedImage.title}</h3>
                  <p className="text-gray-300">{selectedImage.description}</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6"
          >
            See Our Work in Person
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl mb-10 max-w-3xl mx-auto"
          >
            Ready to protect your property with our professional pest control services?
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center gap-6"
          >
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact" 
              className="bg-white text-green-700 hover:bg-gray-100 font-bold py-4 px-10 rounded-full transition-all shadow-lg hover:shadow-xl"
            >
              Request Free Inspection
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:9831679025" 
              className="border-2 border-white text-white hover:bg-white hover:text-green-700 font-bold py-4 px-10 rounded-full transition-all shadow-lg hover:shadow-xl"
            >
              Call Now: 9831679025
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default GalleryPage;