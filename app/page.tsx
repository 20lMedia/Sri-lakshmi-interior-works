import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  ChefHat,
  Layers,
  TreePine,
  Phone,
  Mail,
  MapPin,
  Star,
  CheckCircle,
  ArrowRight,
  Users,
  Award,
  Clock,
  Sparkles,
  Zap,
  Shield,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="container mx-auto px-4 lg:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-50 h-16 rounded-lg flex items-center justify-center overflow-hidden">
              <img
                src="/sml-images/logo.jpg"
                alt="Sri Lakshmi Interior Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div></div>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#home"
              className="text-slate-700 hover:text-slate-900 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="#services"
              className="text-slate-700 hover:text-slate-900 transition-colors font-medium"
            >
              Services
            </Link>
            <Link
              href="#portfolio"
              className="text-slate-700 hover:text-slate-900 transition-colors font-medium"
            >
              Portfolio
            </Link>
            <Link
              href="#contact"
              className="text-slate-700 hover:text-slate-900 transition-colors font-medium"
            >
              Contact
            </Link>
          </nav>
          <Button className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-6">
            View Gallery
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-gray-50"
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge
                  variant="secondary"
                  className="bg-slate-100 mt-[25px] text-slate-700 hover:bg-slate-200"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Premium Interior Solutions
                </Badge>
                <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight">
                  Crafting
                  <span className="block bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
                    Modern Spaces
                  </span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                  Specialized in Modular Kitchens, Mica Works & Wardrobe Works.
                  Transforming homes with contemporary design and premium
                  craftsmanship in Puducherry.
                </p>
              </div>

              {/* Service Pills */}
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm border border-gray-100">
                  <ChefHat className="w-5 h-5 text-slate-700 mr-2" />
                  <span className="text-slate-700 font-medium">
                    Modular Kitchen
                  </span>
                </div>
                <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm border border-gray-100">
                  <Layers className="w-5 h-5 text-slate-700 mr-2" />
                  <span className="text-slate-700 font-medium">Mica Works</span>
                </div>
                <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm border border-gray-100">
                  <TreePine className="w-5 h-5 text-slate-700 mr-2" />
                  <span className="text-slate-700 font-medium">
                    Wardrobe Works
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-8 h-12"
                >
                  View Our Work
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/sml-images/1.jpg"
                  alt="Modern kitchen design showcase"
                  width={600}
                  height={700}
                  className="rounded-3xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-r from-slate-200 to-gray-200 rounded-3xl -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-r from-slate-100 to-gray-100 rounded-3xl -z-10"></div>

              {/* Floating Cards */}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-20">
            <Badge variant="secondary" className="bg-slate-100 text-slate-700">
              Our Specializations
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              Our Core Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We specialize in three key areas of interior design and execution,
              delivering exceptional quality and modern aesthetics for your
              home.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Modular Kitchen */}
            <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50"></div>
              <CardContent className="relative p-8 space-y-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl flex items-center justify-center">
                  <ChefHat className="h-8 w-8 text-white" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-slate-900">
                    Modular Kitchen
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Contemporary modular kitchen designs with smart storage
                    solutions, premium appliances integration, and modern
                    aesthetics that transform your cooking space.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center text-slate-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Custom Design & Layout</span>
                  </div>
                  <div className="flex items-center text-slate-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Premium Hardware & Fittings</span>
                  </div>
                  <div className="flex items-center text-slate-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Smart Storage Solutions</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-full">
                  Explore Kitchens
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Mica Works */}
            <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50"></div>
              <CardContent className="relative p-8 space-y-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                  <Layers className="h-8 w-8 text-white" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-slate-900">
                    Mica Works
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    High-quality mica laminates and decorative surfaces that add
                    elegance and durability to your furniture and interiors with
                    a wide range of textures and finishes.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center text-slate-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Premium Mica Laminates</span>
                  </div>
                  <div className="flex items-center text-slate-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Texture & Pattern Variety</span>
                  </div>
                  <div className="flex items-center text-slate-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Scratch & Heat Resistant</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-full">
                  View Mica Works
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Wardrobe Works */}
            <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50"></div>
              <CardContent className="relative p-8 space-y-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                  <TreePine className="h-8 w-8 text-white" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-slate-900">
                    Wardrobe Works
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Custom Wardrobeen furniture and carpentry work using premium
                    quality Wardrobe with expert craftsmanship to create
                    timeless pieces that enhance your living spaces.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center text-slate-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Custom Furniture Design</span>
                  </div>
                  <div className="flex items-center text-slate-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Premium Wardrobe Quality</span>
                  </div>
                  <div className="flex items-center text-slate-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Expert Craftsmanship</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-full">
                  Discover Wardrobe Works
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge
                  variant="secondary"
                  className="bg-slate-200 text-slate-700"
                >
                  Why Choose Us
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                  Modern Design Meets
                  <span className="block text-slate-600">
                    Expert Craftsmanship
                  </span>
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed">
                  We combine contemporary design principles with traditional
                  craftsmanship to deliver interiors that are both beautiful and
                  functional.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Expert Team</h3>
                  <p className="text-slate-600 text-sm">
                    Skilled professionals with 15+ years experience
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">
                    Quality Materials
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Premium grade materials from trusted suppliers
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">
                    Timely Delivery
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Project completion within promised timelines
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">
                    Trusted Service
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Comprehensive Trusted Service on all our work
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/wcu.jpeg"
                alt="Modern interior workspace"
                width={500}
                height={600}
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-r from-slate-200 to-gray-200 rounded-3xl -z-10"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-r from-slate-100 to-gray-100 rounded-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-20">
            <Badge variant="secondary" className="bg-slate-100 text-slate-700">
              Our Work
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              Recent Projects
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Explore our latest projects showcasing modern modular kitchens,
              elegant mica works, and premium Wardrobe works.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Modern Modular Kitchen",
                category: "Kitchen",
                color: "from-orange-500 to-red-500",
                images: "/sml-images/18.jpg",
              },
              {
                title: "Elegant Mica Wardrobes",
                category: "Mica Works",
                color: "from-blue-500 to-cyan-500",
                images: "/sml-images/2.jpg",
              },
              {
                title: "Custom Wardrobe Furniture",
                category: "Wardrobe Works",
                color: "from-green-500 to-emerald-500",
                images: "/sml-images/3.jpg",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 rounded-3xl"
              >
                <div className="relative h-80">
                  <Image
                    src={project.images}
                    alt={project.title}
                    width={400}
                    height={320}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-6 left-6 right-6">
                      <Badge
                        className={`bg-gradient-to-r ${project.color} text-white border-0 mb-3`}
                      >
                        {project.category}
                      </Badge>
                      <h3 className="text-xl font-bold text-white">
                        {project.title}
                      </h3>
                      <p className="text-white/80 text-sm mt-1">Puducherry</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/projects">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-slate-200 text-slate-700 hover:bg-slate-50 rounded-full px-8"
              >
                View All Projects
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-20">
            <Badge variant="secondary" className="bg-slate-200 text-slate-700">
              Testimonials
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              What Our Clients Say
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients
              have to say about our work.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Eniyan R",
                location: "Puducherry",
                service: "Modular Kitchen",
                text: "The modular kitchen design exceeded our expectations. The team's attention to detail and modern approach transformed our cooking space completely.",
                rating: 5,
              },
              {
                name: "Vijay Sai",
                location: "Puduchery",
                service: "Mica Works",
                text: "Outstanding mica work throughout our home. The quality of laminates and finishing is top-notch. Highly professional team.",
                rating: 5,
              },
              {
                name: "Mani kandan",
                location: "Puducherry",
                service: "Wardrobe Works",
                text: "Beautiful custom furniture that perfectly fits our space. The craftsmanship in Wardrobe work is exceptional and truly premium quality.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg rounded-3xl">
                <CardContent className="p-8 space-y-6">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-600 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="space-y-2">
                    <div className="font-bold text-slate-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-slate-600">
                      {testimonial.location}
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-slate-100 text-slate-700 text-xs"
                    >
                      {testimonial.service}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 mt-[45px] gap-8 pt-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-slate-900">100+</div>
            <div className="text-sm text-slate-600 mt-1">
              Projects Completed{" "}
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-slate-900">15+</div>
            <div className="text-sm text-slate-600 mt-1">
              Years of Experinece
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-slate-900">4.9★</div>
            <div className="text-sm text-slate-600 mt-1">Average Ratings </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-20">
            <Badge variant="secondary" className="bg-slate-100 text-slate-700">
              Get In Touch
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              Start Your Project
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Ready to transform your space? Contact us for a free consultation
              and let's discuss your dream interior.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-6">
                <div className="bg-slate-50 p-6 rounded-2xl">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-slate-200 rounded-xl flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-slate-700" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-2">
                        Visit Our Office
                      </h3>
                      <p className="text-slate-600">
                        288, Bhagat Singh Street, Naveena Garden, Puducherry,
                        605013
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-slate-200 rounded-xl flex items-center justify-center">
                      <a href="tel:+919843600607">
                        <Phone className="h-6 w-6 text-slate-700 hover:text-slate-900 transition-colors" />
                      </a>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-2">Call Us</h3>
                      <a
                        href="tel:+919843600607"
                        className="text-slate-600 block hover:underline"
                      >
                        +91 98436 00607
                      </a>
                      <a
                        href="tel:+919843600662"
                        className="text-slate-600 block hover:underline mt-2"
                      >
                        +91 98436 00662
                      </a>
                      <a
                        href="tel:+04132910607"
                        className="text-slate-600 block hover:underline mt-2"
                      >
                        +0413 2910607
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-slate-200 rounded-xl flex items-center justify-center">
                      <Mail className="h-6 w-6 text-slate-700" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-2">
                        Email Us
                      </h3>
                      <p className="text-slate-600">
                        srilakshmiinteriors1@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-slate-900 to-slate-700 p-6 rounded-2xl text-white">
                <h3 className="font-bold mb-3">Business Hours</h3>
                <div className="space-y-2 text-slate-200">
                  <p>Monday - Saturday: 9:00 AM - 9:00 PM</p>
                  <p>Sunday: 10:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <Card className="border-0 shadow-xl rounded-3xl">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-3">
                          Full Name
                        </label>
                        <Input
                          placeholder="Enter your name"
                          className="h-12 rounded-xl border-slate-200"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-3">
                          Phone Number
                        </label>
                        <Input
                          placeholder="Enter your phone"
                          className="h-12 rounded-xl border-slate-200"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-3">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        className="h-12 rounded-xl border-slate-200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-3">
                        Service Required
                      </label>
                      <select className="w-full h-12 rounded-xl border border-slate-200 px-4 bg-white text-slate-700">
                        <option>Select a service</option>
                        <option>Modular Kitchen</option>
                        <option>Mica Works</option>
                        <option>Wardrobe Works</option>
                        <option>Complete Interior</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-3">
                        Project Details
                      </label>
                      <Textarea
                        placeholder="Tell us about your project requirements, budget, timeline..."
                        className="min-h-[120px] rounded-xl border-slate-200"
                      />
                    </div>
                    <a
                      href="https://wa.me/919843600607"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white h-12 rounded-xl text-lg font-semibold">
                        Send Message
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </a>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              Find Us on the Map
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Visit us at our location or find us easily on Google Maps.
            </p>
          </div>
          <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d18603.91007561368!2d79.8164307!3d11.9209984!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a536114d801c46d%3A0x5e9aa810451455f1!2sSRI%20LAKSHMI%20INTERIOR%20WORKS!5e1!3m2!1sen!2sin!4v1748430242362!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div>
                  <div className="text-xl font-bold">Sri Lakshmi</div>
                  <div className="text-xs text-slate-400 -mt-1">
                    Interior Works
                  </div>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Crafting modern spaces with specialized expertise in modular
                kitchens, mica works, and Wardrobe works across Puducherry and
                Tamil Nadu.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-6 text-lg">Our Services</h3>
              <ul className="space-y-3 text-slate-400">
                <li className="hover:text-white transition-colors cursor-pointer">
                  Modular Kitchen
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Mica Works
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Wardrobe Works
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Interior Consultation
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-6 text-lg">Quick Links</h3>
              <ul className="space-y-3 text-slate-400">
                <li>
                  <Link
                    href="#services"
                    className="hover:text-white transition-colors"
                  >
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#portfolio"
                    className="hover:text-white transition-colors"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Get Quote
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-6 text-lg">Contact Info</h3>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Puducherry, Tamil Nadu
                </li>
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  +91 98436 00607
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  srilakshmiinteriors1@gmail.com
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>
              &copy; {new Date().getFullYear()} Sri Lakshmi Interior Works. All
              rights reserved. | Managed by{" "}
              <a
                href="https://20lmedia.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                20L Media
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
