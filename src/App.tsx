import React,{ useState, useEffect } from 'react';
import { Github, Linkedin, Mail, BookOpen, Briefcase, GraduationCap, ExternalLink, 
  Code, Database, Cloud, Trophy, Users, Lightbulb, Rocket, Menu, X } from 'lucide-react';

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredAward, setHoveredAward] = useState<number | null>(null);

  // Background slideshow images
  const backgroundImages = [
    "./images/backblue.jpg",
    "./images/volleywin.jpg",
    "./images/robawards.jpg",
    "./images/ustun.jpg"
  ];

  // Award images
  const awardImages = [
    "./images/mcflogo.jpg",
    "./images/Micromouse2.jpg",
    "./images/mvpaward.jpg",
    "./images/robawards.jpg"
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 shadow-lg backdrop-blur-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center">
          <button 
              onClick={scrollToTop} 
              className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-blue-500 cursor-pointer"
            >
              Nigel Takunda Kadonzvo
            </button>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-blue-400 transition-colors">About</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-blue-400 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('experience')} className="text-gray-300 hover:text-blue-400 transition-colors">Experience</button>
              <button onClick={() => scrollToSection('leadership')} className="text-gray-300 hover:text-blue-400 transition-colors">Leadership</button>
              <button onClick={() => scrollToSection('education')} className="text-gray-300 hover:text-blue-400 transition-colors">Education</button>
              <button onClick={() => scrollToSection('awards')} className="text-gray-300 hover:text-blue-400 transition-colors">Awards</button>
              <button onClick={() => scrollToSection('interests')} className="text-gray-300 hover:text-blue-400 transition-colors">Interests</button>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-300 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 shadow-lg">
            <div className="flex flex-col space-y-4 p-4">
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-blue-400 transition-colors py-2">About</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-blue-400 transition-colors py-2">Projects</button>
              <button onClick={() => scrollToSection('experience')} className="text-gray-300 hover:text-blue-400 transition-colors py-2">Experience</button>
              <button onClick={() => scrollToSection('leadership')} className="text-gray-300 hover:text-blue-400 transition-colors py-2">Leadership</button>
              <button onClick={() => scrollToSection('education')} className="text-gray-300 hover:text-blue-400 transition-colors py-2">Education</button>
              <button onClick={() => scrollToSection('awards')} className="text-gray-300 hover:text-blue-400 transition-colors py-2">Awards</button>
              <button onClick={() => scrollToSection('interests')} className="text-gray-300 hover:text-blue-400 transition-colors py-2">Interests</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Slideshow */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Slideshow background */}
        {backgroundImages.map((image, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentSlide === index ? 'opacity-20' : 'opacity-0'
            }`}
          >
            <img 
              src={image}
              alt={`Background ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}


        <div className="relative z-10 text-center px-4">
          <div className="mb-8 relative">
            <div className="w-[20%] h-[20%] mx-auto relative">
              <img
                src="./images/Nigel_Kadonzvo-4.jpg"
                alt="Profile"
                className="w-full h-full rounded-full object-cover border-4 border-blue-400 shadow-lg shadow-blue-400/20"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400/20 to-purple-500/20"></div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-blue-500">
            Nigel Takunda Kadonzvo
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Computer Engineer | Researcher | Tech Enthusiast 
          </p>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/ntkad" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/nigel-takunda-kadonzvo/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:ntkadonzvo@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Core Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg transform hover:scale-105 transition-transform">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-400/10 rounded-lg flex items-center justify-center">
                <Code size={32} className="text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Engineering Software</h3>
              <ul className="text-gray-400 space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  SOLIDWORKS
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  PCB Design: Proteus, EasyEDA
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  IDEs: Arduino, STM32
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  VIVADO
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Circuit Simulation: LTSpice, Proteus
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Tensorflow, PyTorch, Scikit-learn
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  LogiSim
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-lg transform hover:scale-105 transition-transform">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-400/10 rounded-lg flex items-center justify-center">
                <Database size={32} className="text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Programming Languages</h3>
              <ul className="text-gray-400 space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                  Python
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                  Java
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                  C / C++
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                  MATLAB
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                  LaTex
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                  Assembly Language
                </li>
              </ul>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg transform hover:scale-105 transition-transform">
              <div className="w-16 h-16 mx-auto mb-4 bg-cyan-400/10 rounded-lg flex items-center justify-center">
                <Cloud size={32} className="text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Soft Skills</h3>
              <ul className="text-gray-400 space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                  Research
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                  Team Leadership
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                  Problem Solving
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                  Critical Thinking
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                  Project Management
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <BookOpen className="text-blue-400" />
            About Me
          </h2>
          <p className="text-gray-300 leading-relaxed text-justify">
          I'm a senior Computer Engineering student at Ashesi University with a deep passion for robotics, embedded systems, and high-performance computing. 
          I’m particularly interested in applying machine learning to edge devices, optimizing efficiency for real-world problem-solving.
          I thrive on research and innovation, constantly exploring new ways to push technological boundaries. 
          Beyond academics, I’m a strong advocate for diversity and inclusion, believing that varied perspectives lead to better solutions. 
          Outside of engineering, I enjoy playing volleyball, where strategy, teamwork, and quick decision-making fuel my competitive spirit.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id = "projects" className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
            <Rocket className="text-blue-400" />
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src="./images/anomaly.jpg"
                alt="Project 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Early Anomaly Detector in Electrical Motors.</h3>
                <p className="text-blue-400">Final Capstone Project, Ashesi University</p>
                <p className="text-gray-400 mb-4 text-justify">Developing an IoT-based monitoring system for rotating electrical machinery, 
                  integrating TinyML and thermal imaging for real-time anomaly detection and predictive maintenance. Implementing 
                  and testing machine learning algorithms to enhance detection accuracy, 
                  enabling proactive maintenance, reducing downtime, and optimizing industrial efficiency.</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-blue-400/20 text-blue-400 rounded-full text-sm">IoT</span>
                  <span className="px-3 py-1 bg-purple-400/20 text-purple-400 rounded-full text-sm">ML</span>
                  <span className="px-3 py-1 bg-green-400/20 text-green-400 rounded-full text-sm">Embedded Systems</span>
                  <span className="px-3 py-1 bg-gray-400/20 text-gray-400 rounded-full text-sm">Motors</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src="./images/aero.png"
                alt="Project 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Real-Time Robotic Navigation.</h3>
                <p className="text-blue-400">Robotics, Ashesi University</p>
                <p className="text-gray-400 mb-4 text-justify">Developed an EV3 robot navigation system with a team, using the A* algorithm 
                  for optimal pathfinding. Built a React-based web app with a 10x10 grid for user-configurable 
                  navigation and real-time path updates. Integrated a Flask-based client-server architecture for seamless robot communication.</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-blue-400/20 text-blue-400 rounded-full text-sm">ROS</span>
                  <span className="px-3 py-1 bg-purple-400/20 text-purple-400 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-green-400/20 text-green-400 rounded-full text-sm">AI</span>
                  <span className="px-3 py-1 bg-gray-400/20 text-gray 400 rounded-full text-sm">Web Developement</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src="./images/filtering.jpg"
                alt="Project 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-justify">Audio Filter.</h3>
                <p className="text-blue-400">Signals and Systems, Ashesi University</p>
                <p className="text-gray-400 mb-4 text-justify">Spearheaded a team of three to implement an audio filter in MATLAB App 
                  Designer, utilizing advanced signal processing and Fast Fourier Transforms (FFT) to analyze human body micro signals for biomedical treatments.
                   Collected and cleaned diverse data sets using MATLAB Data Cleaner, 
                  ensuring accuracy and reliability for unbiased analysis.</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-blue-400/20 text-blue-400 rounded-full text-sm">MATLAB</span>
                  <span className="px-3 py-1 bg-purple-400/20 text-purple-400 rounded-full text-sm">Signal Processing</span>
                  <span className="px-3 py-1 bg-gray-400/20 text-gray-400 rounded-full text-sm">App Designer</span>
                  <span className="px-3 py-1 bg-green-400/20 text-green-400 rounded-full text-sm">Fourier Transforms</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src="./images/embedd2.jpg"
                alt="Project 4"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-justify">Real-Time Embedded Control for a Robotic Cart Using STM32.</h3>
                <p className="text-blue-400">Embedded Systems, Ashesi University</p>
                <p className="text-gray-400 mb-4 text-justify">I developed a robotic cart as part of an embedded systems 
                  project, gaining hands-on experience with ARM-based microcontrollers, particularly STM32. 
                  I mastered bit-level manipulation to configure GPIO, ADC, PWM, UART, and timers, enabling 
                  precise control. To ensure real-time, low-latency performance, I implemented interrupt-driven 
                  and non-blocking C programming techniques, optimizing responsiveness. This project 
                  strengthened my skills in embedded system design and real-time control.</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-blue-400/20 text-blue-400 rounded-full text-sm">Embedded Systems</span>
                  <span className="px-3 py-1 bg-purple-400/20 text-purple-400 rounded-full text-sm">C </span>
                  <span className="px-3 py-1 bg-gray-400/20 text-gray-400 rounded-full text-sm">ARM</span>
                  <span className="px-3 py-1 bg-green-400/20 text-green-400 rounded-full text-sm">FreeRTOS</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src="./images/mauto.jpg"
                alt="Project 5"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-justify">Smart Environmental Monitoring and Control System.</h3>
                <p className="text-blue-400">Internet of Things, Ashesi University</p>
                <p className="text-gray-400 mb-4 text-justify">Developed an IoT-based environmental 
                  monitoring and control system using ESP32, integrating temperature, humidity,
                   and light sensors for real-time data collection. Implemented dual communication 
                   via HTTP POST and MQTT, with a web interface for monitoring and device configuration.
                    The system controlled an AC fan automatically based on temperature thresholds, with 
                    manual override options. Additionally, a machine learning model was 
                  trained to predict temperature trends using collected sensor data.</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-blue-400/20 text-blue-400 rounded-full text-sm">IoT</span>
                  <span className="px-3 py-1 bg-purple-400/20 text-purple-400 rounded-full text-sm">Web Dev</span>
                  <span className="px-3 py-1 bg-green-400/20 text-green-400 rounded-full text-sm">Machine Learning</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src="./images/stats.png"
                // src="https:/./images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80"
                alt="Project 6"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-justify">Investigating the Best Calcium Chloride Concentration for High Water 
                  Absorption and Slow-Release Rate in Hydrogels for Agricultural Irrigation.</h3>
                <p className="text-blue-400">Statistics, Ashesi University</p>
                <p className="text-gray-400 mb-4 text-justify">I worked with a team to find better ways 
                  to help crops stay hydrated in dry regions. We focused on hydrogels materials 
                  that absorb and slowly release water to improve irrigation. By testing 
                  different formulas, we figured out which one held water the longest, 
                  making it more useful for farmers in areas with little rainfall. Our 
                  research aimed to support more sustainable and efficient farming.</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-blue-400/20 text-blue-400 rounded-full text-sm">Statistical Analysis</span>
                  <span className="px-3 py-1 bg-purple-400/20 text-purple-400 rounded-full text-sm">Lab Techinques</span>
                  <span className="px-3 py-1 bg-green-400/20 text-green-400 rounded-full text-sm">MATLAB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id = "experience" className="py-20 px-4 md:px-8 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
            <Briefcase className="text-blue-400" />
            Professional Experience
          </h2>
          
          <div className="space-y-12">
            <div className="bg-gray-900 p-6 rounded-lg hover:bg-gray-850 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">Computer Engineering Intern</h3>
                  <p className="text-blue-400">KTech Hub, Ghana</p>
                </div>
                <span className="text-gray-400">May 2024 - August 2024</span>
              </div>
              <ul className="text-gray-300 space-y-2 text-justify">
                <li>• Developed and organized 10 coding courses (Python, HTML), driving 100+ sales and boosting platform engagement</li>
                <li>• Engaged in community discussions, addressing user inquiries and promoting knowledge sharing</li>
                <li>• Contributed to a 20% rise in user satisfaction through active support and engagement</li>
              </ul>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg hover:bg-gray-850 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">Electronics Intern</h3>
                  <p className="text-blue-400">FlighTech, Zimbabwe</p>
                </div>
                <span className="text-gray-400">May 2023 - August 2023</span>
              </div>
              <ul className="text-gray-300 space-y-2 text-justify">
                <li>• Developed a drone control system using MATLAB and microcontroller programming, automating crop health monitoring</li>
                <li>• Optimized power controller circuits with Altium Designer and LTspice, improving power management</li>
                <li>• Enhanced drone efficiency, achieving a 5% labor reduction and 15% longer flight time.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id = "leadership" className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
            <Users className="text-blue-400" />
            Leadership & Community
          </h2>
          <div className="space-y-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2"> School Team Captain, Ashesi University</h3>
              <p className="text-gray-400 mb-4 text-justify">As captain of the Ashesi Volleyball team, I led the team to multiple victories while fostering a strong, inclusive team culture. 
                Working with a diverse group, I prioritized teamwork, discipline, and mentorship, 
                especially supporting new players, particularly girls, in developing their skills and confidence in the sport.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Lead Project Coordinator, Ashesi University</h3>
              <p className="text-gray-400 mb-4 text-justify">Managed the daily progress of 12 student-led projects and startups, providing guidance to ensure successful implementation. 
                Assisted teams in applying the design thinking process to enhance project development and problem-solving. 
                Additionally, organized and executed a 12-hour hackathon, engaging 30 students in collaboratively developing innovative, 
                user-centered solutions under time constraints.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Ashesi Wiki President, Ashesi University</h3>
              <p className="text-gray-400 mb-4 text-justify">As the Ashesi Wiki President, I led a team of 45 students to promote 
                  open-source knowledge and improve information accessibility. In 2023, I organized a mapping initiative using HOT 
                  (Humanitarian OpenStreetMap) tools to support infrastructure mapping efforts after
                    the Turkey-Syria earthquake, contributing to disaster response and recovery.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Code4All Initiative Voluteer, Ashesi University</h3>
              <p className="text-gray-400 mb-4 text-justify"> I worked with a team to tutor
                 Ghanaian high school students in programming, guiding them in developing projects using Python and HTML. We also taught them how to use Microsoft
                  Office tools for project management, data handling,
                 presentations, and document creation, equipping them with essential digital skills for academic and professional growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id = "education" className="py-20 px-4 md:px-8 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
            <GraduationCap className="text-blue-400" />
            Education
          </h2>
          
          <div className="space-y-12">
            {/* <div className="bg-gray-900 p-6 rounded-lg hover:bg-gray-850 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">Master of Science in Computer Science</h3>
                  <p className="text-blue-400">Stanford University</p>
                </div>
                <span className="text-gray-400">2016 - 2018</span>
              </div>
              <p className="text-gray-300">Focus on Machine Learning and Distributed Systems</p>
            </div> */}

            <div className="bg-gray-900 p-6 rounded-lg hover:bg-gray-850 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">Bachelor of Science in Computer Engineering</h3>
                  <p className="text-blue-400">Ashesi University, Ghana</p>
                </div>
                <span className="text-gray-400"> September 2021 - May 2025</span>
              </div>
              {/* <p className="text-gray-300">Graduated with Honors</p> */}
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Scholarships Section */}
      <section id = "awards" className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
            <Trophy className="text-blue-400" />
            Awards & Recognition
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Award 1 */}
            <div 
              className="relative bg-gray-800 p-6 rounded-lg border border-blue-400/20 overflow-hidden"
              onMouseEnter={() => setHoveredAward(0)}
              onMouseLeave={() => setHoveredAward(null)}
            >
              {/* Award content */}
              <div className="bg-gray-800 p-6 rounded-lg border border-blue-400/20">
                <h3 className="text-xl font-semibold mb-2">MasterCard Foundation Scholarship</h3>
                <p className="text-gray-400">Ashesi University, 2021</p>
                <p className="text-gray-300 mt-2">Awarded for academic excellence and leadership in community development.</p>
              </div>

              {/* Award image on hover */}
              <div 
                className={`absolute inset-0 transition-opacity duration-300 ${
                  hoveredAward === 0 ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img 
                  src={awardImages[0]} 
                  alt="Outstanding Research Award" 
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-gray-900/30"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-semibold mb-1 text-white">MasterCard Foundation Scholarship</h3>
                  <p className="text-blue-300">Ashesi University, 2021</p>
                </div>
              </div>
            </div>

            {/* Award 2 */}
            <div 
              className="relative bg-gray-800 p-6 rounded-lg border border-purple-400/20 overflow-hidden"
              onMouseEnter={() => setHoveredAward(1)}
              onMouseLeave={() => setHoveredAward(null)}
            >
              {/* Award content */}
              <div className="bg-gray-800 p-6 rounded-lg border border-purple-400/20">
                <h3 className="text-xl font-semibold mb-2">3rd Place Micromouse Competition</h3>
                <p className="text-gray-400">Ashesi University, 2024</p>
                <p className="text-gray-300 mt-2">Achieved for outstanding performance in autonomous robotics and maze navigation.</p>
              </div>

              {/* Award image on hover */}
              <div 
                className={`absolute inset-0 transition-opacity duration-300 ${
                  hoveredAward === 1 ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img 
                  src={awardImages[1]} 
                  alt="Merit Scholarship" 
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-gray-900/30"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-semibold mb-1 text-white">3rd Place Micromouse Competition</h3>
                  <p className="text-purple-300">Ashesi University, 2024</p>
                </div>
              </div>
            </div>

            {/* Award 3 */}
            <div 
              className="relative bg-gray-800 p-6 rounded-lg border border-green-400/20 overflow-hidden"
              onMouseEnter={() => setHoveredAward(2)}
              onMouseLeave={() => setHoveredAward(null)}
            >
              {/* Award content */}

              <div className="bg-gray-800 p-6 rounded-lg border border-green-400/20">
                <h3 className="text-xl font-semibold mb-2">Most Valuable Player</h3>
                <p className="text-gray-400">Ashesi University, 2024</p>
                <p className="text-gray-300 mt-2">Recognized for outstanding performance, leadership, 
                  and contributions to the team as a setter.</p>
              </div>

              {/* Award image on hover */}
              <div 
                className={`absolute inset-0 transition-opacity duration-300 ${
                  hoveredAward === 2 ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img 
                  src={awardImages[2]} 
                  alt="Innovation Excellence Award" 
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-gray-900/30"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-semibold mb-1 text-white">Most Valuable Player</h3>
                  <p className="text-green-300">Ashesi University, 2024</p>
                </div>
              </div>
            </div>

            {/* Award 4 */}
            <div 
              className="relative bg-gray-800 p-6 rounded-lg border border-cyan-400/20 overflow-hidden"
              onMouseEnter={() => setHoveredAward(3)}
              onMouseLeave={() => setHoveredAward(null)}
            >
              {/* Award content */}
              
              <div className="bg-gray-800 p-6 rounded-lg border border-cyan-400/20">
                <h3 className="text-xl font-semibold mb-2">Best Robotics Project</h3>
                <p className="text-gray-400">Ashesi University, 2024</p>
                <p className="text-gray-300 mt-2">Recognized for innovation, teamwork, and excellence in robotics development.</p>
              </div>

              {/* Award image on hover */}
              <div 
                className={`absolute inset-0 transition-opacity duration-300 ${
                  hoveredAward === 3 ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img 
                  src={awardImages[3]} 
                  alt="Best Paper Award" 
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-gray-900/30"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-semibold mb-1 text-white">Best Robotics Project</h3>
                  <p className="text-cyan-300">Ashesi University, 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section id = "interests" className="py-20 px-4 md:px-8 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
            <Lightbulb className="text-blue-400" />
            Interests & Hobbies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <img 
                src="./images/research.jpg"
                alt="AI Research"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Research and Innovation</h3>
              <p className="text-gray-400">Exploring advancements in artificial intelligence, 
                computer architecture, high-performance computing, and robotics.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <img 
                src="./images/gaming.jpg"
                alt="Robotics"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Gaming</h3>
              <p className="text-gray-400">Gaming sharpens my problem-solving, strategic thinking, and teamwork; 
                skills I apply in engineering and technology.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <img 
                src="./images/volley.jpg"
                alt="Photography"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Volleyball Enthusiast</h3>
              <p className="text-gray-400">Passionate about volleyball, specializing as a setter 
                and enjoying the strategy, teamwork, and competitive spirit of the game.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 px-4 text-center text-gray-400">
        <p>© 2025 Nigel Takunda Kadonzvo. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;