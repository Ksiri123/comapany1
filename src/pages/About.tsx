import { Users } from "lucide-react";

const About = () => {
  return (
    <div className="animate-fade-up">
      {/* Hero Section */}
      <section className="bg-primary-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              About IIT Labs Private Limited 
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're a team of passionate technologists dedicated to helping
              businesses succeed in the digital age.
            </p>
          </div>
        </div>
      </section>
       {/* Who we are*/}
       <section className="py-20">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Who we are
              </h2>
              <p className="text-gray-600 mb-4">
              
              Founded in 2013, IITLabs was established with a vision to develop cutting-edge intelligence that empowers humans to solve complex problems more efficiently. We are driven by the belief in the value of rigorous intellectual debate as the foundation for executing any plan. To achieve this, we have assembled a team of exceptional talent, supported by extensive academic research in their respective domains.
              </p>
              <p className="text-gray-600">
              Our core team comprises researchers and scientists specializing in Mathematics and Computing, with substantial academic and industry experience from various renowned institutions.</p>
              <p className="text-gray-600 mb-4">
              At IITLabs, the majority of our investment is dedicated to Research and Development, continually exploring better and more optimal ways to achieve our goals. Over time, we have also welcomed some of the finest business experts into our team to guide our efforts, ensuring a unified focus on enabling developers and enterprises to create advanced, next-generation products powered by AI.
                </p>
            </div>
            <div className="flex justify-center">
            <img src="/Ai.jpeg" alt="Team" className="w-full max-w-xs md:max-w-md lg:max-w-lg h-auto" />
            </div>
          </div>
        </div>
      </section>


      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-gray-600 mb-4">
              To lead the financial services industry towards a future where AI is not only powerful but also ethical, transparent, and compliant. We envision a world where banks, insurers, and financial institutions can harness the full potential of AI while upholding the highest standards of responsibility and trust.
              </p>
              <p className="text-gray-600">
              Our mission is to empower financial institutions to adopt AI with confidence. Through innovative, customizable, and auditable AI solutions, we enable BFSIs to streamline operations, enhance decision-making, and manage risks effectively, all while ensuring adherence to regulatory standards and ethical practices.
              </p>
            </div>
            <div className="flex justify-center">
              <Users className="w-48 h-48 text-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
            

            To lead the financial services industry towards a future where AI is not only powerful but also ethical, transparent, and compliant. We envision a world where banks, insurers, and financial institutions can harness the full potential of AI while upholding the highest standards of responsibility and trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-24 h-24 rounded-full bg-primary-light mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl text-primary font-bold">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-center mb-2">{member.role}</p>
                <p className="text-gray-500 text-center text-sm">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const team = [
  {
    name: "John Smith",
    role: "CEO & Founder",
    description:
      "20+ years of experience in technology consulting and business strategy.",
  },
  {
    name: "Sarah Johnson",
    role: "CTO",
    description:
      "Expert in cloud architecture and digital transformation initiatives.",
  },
  {
    name: "Duuvada Ramprasad",
    role: "Manager",
    description:
      "Specialized in emerging technologies and innovative solution design.",
  },
];

export default About;