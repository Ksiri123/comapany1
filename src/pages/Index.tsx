import { ArrowRight, Briefcase, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const Home = () => {
  return (
    <div className="animate-fade-up">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-secondary min-h-[600px] flex items-center">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Join Us in Shaping <span className="text-primary-light">the Future!</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              We help businesses transform through innovative technology solutions
              and expert consulting.
            </p>
            <Link
              to="/careers"
              className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-md hover:bg-primary-light transition-colors"
            >
              Explore Careers
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose IIT Labs Private Limited Company?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  {highlight.icon}
                  <h3 className="text-xl font-semibold text-gray-900 ml-3">
                    {highlight.title}
                  </h3>
                </div>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Carousel */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Success Stories
          </h2>
          
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {successStories.map((story, index) => (
                <CarouselItem key={index}>
                  <Card>
                    <CardContent className="p-6">
                      <p className="text-lg text-gray-600 mb-4">"{story.quote}"</p>
                      <div className="flex items-center">
                        <div className="ml-3">
                          <p className="font-semibold text-gray-900">{story.name}</p>
                          <p className="text-sm text-gray-500">{story.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
    </div>
  );
};

const highlights = [
  {
    icon: <Briefcase className="w-8 h-8 text-primary" />,
    title: "Expert Team",
    description:
      "Our team of seasoned professionals brings years of industry experience and technical expertise.At IITLabs, our expert team brings deep industry experience in Mathematics, Computing, and AI, driving innovation through cutting-edge research and collaboration to create next-generation solutions.",
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Collaborative Culture",
    description:
      "We foster an environment of innovation, learning, and growth through teamwork.At IITLabs, we thrive on collaboration, innovation, and continuous learning. Our expert team in Mathematics, Computing, and AI works together to develop cutting-edge solutions, fostering an inclusive and knowledge-driven environment.",
  },
  {
    icon: <Award className="w-8 h-8 text-primary" />,
    title: "Proven Results",
    description:
      "Our track record speaks for itself, with successful projects across various industries.At IITLabs, our success is defined by impactful projects across AI, computing, and enterprise solutions. From optimizing business processes to developing cutting-edge AI applications, our innovations have driven efficiency and growth across multiple industries. Our commitment to research, development, and real-world implementation ensures that we consistently deliver high-quality, results-driven solutions. ",
  },
];

const successStories = [
  {
    quote: "Working at IIT Labs Private Limited Company has been an incredible journey of growth and innovation.",
    name: "Sarah Johnson",
    role: "Data science",
  },
  {
    quote: "The collaborative culture and cutting-edge projects make every day exciting.",
    name: "Michael Chen",
    role: "Project Manager",
  },
  {
    quote: "I've found amazing opportunities to learn and advance my career here.",
    name: "Emily Rodriguez",
    role: "Data Analyst",
  },
  {
      quote: "I've found amazing opportunities to learn and advance my career here.",
      name: "Emily Rodriguez",
      role: "Software Doveloper",
  },
];

export default Home;