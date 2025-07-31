import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Palette, Zap, Users, Download, MapPin, Calendar } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  
  // Refs for sections
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    [homeRef, aboutRef, projectsRef, contactRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionRef) => {
    sectionRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const skills = [
    { name: 'React', icon: '⚛️', level: 90 },
    { name: 'Next.js', icon: '⏭️', level: 55 },
    { name: 'Node.js', icon: '🟢', level: 85 },
    { name: 'Express.js', icon: '🚀', level: 80 },
    { name: 'MongoDB', icon: '🍃', level: 80 },
    { name: 'Tailwind CSS', icon: '🎨', level: 90 },
    { name: 'Firebase', icon: '🔥', level: 75 },
    { name: 'Supabase', icon: '🟦', level: 70 },
    { name: 'GitHub', icon: '🐙', level: 85 },
    { name: 'Vercel', icon: '▲', level: 80 },
    { name: 'n8n', icon: '🛠️', level: 65 }
  ];

  const projects = [
    {
      id: 1,
      title: "Food Delivery Website",
      description: "A full-stack food delivery platform with real-time order tracking, payment integration, and restaurant management dashboard.",
      image: "https://i.postimg.cc/kgWFbqS0/Screenshot-2025-07-31-090111.png",
      tags: ["React", "Node.js", "MongoDB", "Rupay", "Tailwind CSS"],
      liveUrl: "https://food-delivery-website-m58u.vercel.app/",
      githubUrl: "https://github.com/Ragul198/Food-Delivery-Website"
    },
    {
      id: 2,
      title: "Weather Forecast App",
      description: "Real-time weather application with 5-day forecasts, location detection, and interactive maps using weather API.",
      image: "https://i.postimg.cc/gcvZsNjh/Screenshot-2025-07-31-091056.png",
      tags: ["React.js", "Tailwind CSS", "OpenWeather API , mongoDB"],
      liveUrl: "https://weather-forcast-lac.vercel.app/",
      githubUrl: "https://github.com/Ragul198/Weather-forcast"
    },
    {
      id: 3,
      title: "Netflix Clone",
      description: "Streaming platform clone with user authentication, video playback, and personalized recommendations.",
      image: "https://i.postimg.cc/vTLxmHkh/Screenshot-2025-07-31-091042.png",
      tags: ["React", "Firebase", "TMDB API"],
      liveUrl: "https://movie-clone-two-gamma-11.vercel.app/",
      githubUrl: "https://github.com/Ragul198/Netflix_clone"
    },
    {
      id: 4,
      title: "Chatt-App",
      description: "Simple chat app using socket.io for real-time messaging.",
      image: "https://i.postimg.cc/MKqjFVfF/Screenshot-2025-07-31-091051.png",
      tags: ["MERN Stack", "JWT Auth", "Socket.io", "Tailwind CSS"],
      liveUrl: "https://chatapp-forntend.vercel.app/",
      githubUrl: "https://github.com/Ragul198/CHATAPP"
    },
    {
      id: 5,
      title: "Personal Portfolio",
      description: "Simple Portfolio using React and Tailwind CSS to showcase my projects, experience, and contact links.",
      image: "https://i.postimg.cc/44VWcDcR/Screenshot-2025-07-31-095406.png",
      tags: ["React", "Tailwind CSS"],
      liveUrl: "https://portfolio-me-three-chi.vercel.app/",
      githubUrl: "https://github.com/Ragul198/portfolio_Me"
    }
  ];

  const workExperience = [
    {
      company: "DelchemyTech LLP",
      position: "Fullstack Developer ",
      duration: "2025-04 - 2025-06",
      description: "Completed a 1-month remote Web Development Internship at DelchemyTech LLP, where I worked on building and optimizing web applications using modern technologies, gained hands-on experience with real-world projects, and collaborated closely with the development team to deliver functional and scalable solutions.",
      color: "from-purple-500 to-pink-500"
    },
    {
      company: "Nanlogical Solutions Pvt. Ltd.",
      position: "Fullstack Developer -Trainee",
      duration: "2023 - 2023",
      description: "Developed multiple fullstack applications to master web development technologies and best practices at Nanlogical Solutions Pvt. Ltd 1 month remote Web Development Internship.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      company: "Personal Projects",
      position: "Self-Taught Developer",
      duration: "2020 - 2022",
      description: "Developed multiple fullstack applications to master web development technologies and best practices.",
      color: "from-green-500 to-yellow-500"
    }
  ];

  const navigationItems = [
    { name: 'Home', ref: homeRef },
    { name: 'About', ref: aboutRef },
    { name: 'Projects', ref: projectsRef },
    { name: 'Contact', ref: contactRef }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-slate-900/80 backdrop-blur-md border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              &lt;RAGUL/&gt;
            </div>
            <div className="hidden md:flex space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.ref)}
                  className={`hover:text-purple-400 transition-colors duration-300 relative group ${
                    activeSection === item.name.toLowerCase() ? 'text-purple-400' : ''
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-purple-400 transition-all duration-300 ${
                    activeSection === item.name.toLowerCase() ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" ref={homeRef} className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="z-10 animate-fade-in">
              <div className="mb-6">
                <p className="text-purple-400 font-semibold mb-2 text-lg">Hello! I Am</p>
                <h1 className="text-5xl md:text-7xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                    RAGUL A
                  </span>
                </h1>
                <h2 className="text-2xl md:text-4xl font-bold text-gray-300 mb-6">
                  Fullstack Developer (MERN)
                </h2>
              </div>

              <div className="mb-8">
                <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                  A passionate fullstack developer specializing in the MERN stack. I build robust, scalable web applications with clean code and intuitive user interfaces.
                </p>
                
                <div className="flex items-center space-x-6 text-gray-400 mb-6">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>[Tamilnadu , India]</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>[Searching for a job]</span>
                  </div>
                </div>

                <blockquote className="border-l-4 border-purple-400 pl-4 text-gray-300 italic mb-8">
                  "Turning ideas into functional, beautiful web applications."
                </blockquote>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://drive.google.com/uc?export=download&id=1GERqcQOEnCeDJyUvufrrQJorHSh3Prua"  rel="noopener noreferrer">
                <button 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-full hover:scale-105 transition-transform duration-300 font-semibold flex items-center justify-center space-x-2"
                >
                  <Download className="w-5 h-5" />
                  <span>Download CV</span>
                </button>
                </a>
                <button 
                  onClick={() => scrollToSection(contactRef)}
                  className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-full hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold"
                >
                  Get In Touch
                </button>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="z-10 animate-fade-in-delay">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-md rounded-3xl p-8 border border-purple-500/20">
                  <div className="relative">
                    <div className="w-80 h-80 mx-auto relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl animate-spin-slow"></div>
                      <div className="absolute inset-2 bg-slate-900 rounded-xl overflow-hidden flex items-center justify-center">
                        <img src="https://i.postimg.cc/JzwJ5vcj/Screenshot-2025-01-03-160257.png" alt="" />
                      </div>
                    </div>
                    
                    {/* Floating Tech Icons */}
                    <div className="absolute -top-4 -right-4 bg-purple-500 p-3 rounded-full animate-bounce">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute -bottom-4 -left-4 bg-pink-500 p-3 rounded-full animate-bounce delay-1000">
                      <Palette className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute top-1/2 -left-8 bg-cyan-500 p-3 rounded-full animate-bounce delay-500">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Skills */}
      <section id="about" ref={aboutRef} className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div 
                key={skill.name}
                className="bg-slate-800/50 backdrop-blur-md p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex flex-col items-center text-center">
                  <span className="text-3xl mb-2">{skill.icon}</span>
                  <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workExperience.map((work, index) => (
              <div 
                key={index}
                className="bg-slate-800/50 backdrop-blur-md p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 group"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${work.color} mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{work.company}</h3>
                <h4 className="text-purple-400 font-semibold mb-2">{work.position}</h4>
                <p className="text-gray-400 text-sm mb-3">{work.duration}</p>
                <p className="text-gray-300 text-sm">{work.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={projectsRef} className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            My Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="group flex flex-col bg-slate-800/50 backdrop-blur-md rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="relative overflow-hidden rounded-t-xl">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <div className="flex space-x-3">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="bg-purple-500 p-2 rounded-full hover:bg-purple-600 transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <a href={project.githubUrl} target='_blank' className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition-colors">
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-gray-300 mb-6 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Interested in working together or have questions about my work? Feel free to reach out!
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            {[
              { icon: Github, href: "https://github.com/Ragul198", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/ragul-a-190820030and7032004/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:ragul198a@gmail.com", label: "Email" }
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center hover:bg-purple-500 transition-all duration-300 hover:scale-110"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          
          <p className="text-gray-400">
            ragul198a@gmail.com
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 border-t border-purple-500/20">
        <p>&copy; {new Date().getFullYear()} Ragul A. All rights reserved.</p>
      </footer>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s forwards;
          opacity: 0;
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;