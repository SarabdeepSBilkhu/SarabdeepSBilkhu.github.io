import "boxicons/css/boxicons.min.css";
import { FiUser, FiCode, FiHeart, FiTarget, FiAward } from "react-icons/fi";
import ScrollReveal from "../components/ScrollReveal";


const About = () => {
  const interests = [
    { icon: FiCode, title: "Open Source", description: "Contributing to projects that improve real tools and systems." },
    { icon: FiHeart, title: "User Experience", description: "Designing clear, functional interfaces." },
    { icon: FiTarget, title: "Problem Solving", description: "Turning complex challenges into practical solutions." },
    { icon: FiAward, title: "Continuous Learning", description: "Adapting to new technologies and improving skills." }
  ];



  return (
    <main className="flex flex-1 flex-col justify-between h-full">
      <div className="w-full px-4 md:px-10 lg:px-20 py-8 relative">
        <ScrollReveal
            className="introducing-container lg:text-xl sm:text-lg 
            text-sm w-full md:w-[300px] h-[33px] font-bold
            flex items-center justify-center mb-8 relative"
          >
            <FiUser className="text-white text-2xl mr-3 z-10" />  
            <div className="text-white">
              About Me
            </div>
          </ScrollReveal>
        
        {/* Avatar - positioned absolutely on desktop, static on mobile */}
        <ScrollReveal className="hidden lg:block lg:absolute lg:top-4 lg:right-20 lg:w-[520px] lg:h-[550px] rounded-lg shadow-2xl overflow-hidden">
          <img 
            className="w-full h-full object-cover rounded-lg shadow-2xl"
            src="/avatar.PNG"
            alt="Sarabdeep Singh Bilkhu"
          />
        </ScrollReveal>
        
        {/* Mobile Avatar */}
        <ScrollReveal className="lg:hidden w-full mx-auto rounded-lg shadow-2xl overflow-hidden mb-8">
          <img 
            className="w-full h-auto rounded-lg shadow-2xl"
            src="/avatar.PNG"
            alt="Sarabdeep Singh Bilkhu"
          />
        </ScrollReveal>
        
        {/* About content - with right margin on desktop to make space for avatar */}
        <div className="lg:mr-[580px]">
          <div className="max-w-full">
            <ScrollReveal>
              <p className="text-justify mb-8 leading-relaxed text-lg font-medium text-gray-200">
                I am Sarabdeep Singh Bilkhu, a software developer focused on practical engineering 
                and effective user experiences.
              </p>
            </ScrollReveal>

            <div className="flex flex-col gap-6">
              <ScrollReveal delay={0.1}>
                <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors duration-300">
                  <div>
                    <h4 className="font-bold text-lg text-white">Full-Stack Development</h4>
                    <p className="text-gray-400">Design and build full-stack applications.</p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors duration-300">
                  <div>
                    <h4 className="font-bold text-lg text-white">Backend Engineering</h4>
                    <p className="text-gray-400">Develop APIs, databases, and backend systems.</p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors duration-300">
                  <div>
                    <h4 className="font-bold text-lg text-white">Frontend Implementation</h4>
                    <p className="text-gray-400">Create responsive user interfaces.</p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors duration-300">
                  <div>
                    <h4 className="font-bold text-lg text-white">Code Quality</h4>
                    <p className="text-gray-400">Write maintainable, performance-focused code.</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
        
        {/* Technical Skills and Interests - each covers full width, stacked vertically */}
        <div className="mt-12 flex flex-col gap-10">
          {/* Skills Section */}

          {/* Interests Section */}
          <div className="w-full bg-black/40 rounded-xl p-8 shadow-lg">
            <ScrollReveal>
              <h3 className="text-2xl font-bold mb-6 text-white text-center">Interests & Values</h3>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {interests.map((interest, index) => (
                <ScrollReveal
                  key={interest.title}
                  className="p-5 rounded-lg glass-effect border border-white/10 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
                  delay={index * 0.1}
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <interest.icon className="text-blue-400 w-6 h-6" />
                    <h4 className="font-semibold text-lg">{interest.title}</h4>
                  </div>
                  <p className="text-base text-gray-300">{interest.description}</p>
                </ScrollReveal>
              ))}
            </div>

             </div>{/* End of Interests Container */}
        </div>
      </div>
    </main>
  );
};
export default About;
