import { Check } from "lucide-react";

const Services = () => {
  return (
    <div className="animate-fade-up">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-light via-white to-primary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-up">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Comprehensive technology solutions tailored to your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6 p-4 rounded-full bg-primary-light w-16 h-16 flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start text-gray-600 group"
                    >
                      <Check className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="group-hover:text-primary transition-colors">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-up">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Let's discuss how we can help you achieve your technology goals.
          </p>
          <button className="px-8 py-4 bg-white text-primary rounded-full hover:bg-primary-light transition-colors duration-300 font-semibold shadow-lg hover:shadow-xl animate-fade-up" style={{ animationDelay: "0.3s" }}>
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  );
};

const services = [
  {
    title: "Digital Transformation",
    description:
      "Transform your business with cutting-edge digital solutions and strategies.",
    features: [
      "Technology Assessment",
      "Digital Strategy Development",
      "Process Automation",
      "Cloud Migration",
    ],
    icon: Check,
  },
  {
    title: "Custom Software Development",
    description:
      "Build scalable, custom software solutions tailored to your needs.",
    features: [
      "Web Applications",
      "Mobile Apps",
      "Enterprise Software",
      "API Integration",
    ],
    icon: Check,
  },
  {
    title: "IT Consulting",
    description:
      "Expert guidance to help you make informed technology decisions.",
    features: [
      "Technology Strategy",
      "Architecture Design",
      "Security Assessment",
      "Performance Optimization",
    ],
    icon: Check,
  },
];

export default Services;