import React, { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const TechTag = ({ name }) => (
  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-md text-sm font-medium hover:bg-blue-200 transition-colors">
    {name}
  </span>
);

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const experiences = [
    {
      title: "Software Engineer and AI Mentee",
      company: "Microsoft Corporation",
      period: "July–Aug 2024",
      location: "New York City, NY",
      highlights: [
        "Selected as 1 of 18 students nationwide for Microsoft's prestigious NYC Summer Mentorship Program, establishing commitment by commuting weekly between North Carolina and NYC",
        "Led development of 'Meal Pilot' during AI for Good Hackathon, integrating Microsoft Copilot Studio with Azure Maps API to match users with healthy dining options across NYC Metro Area",
        "Collaborated directly with Microsoft Software Engineers and Product Managers, participating in technical architecture reviews",
        "Engaged with Microsoft leadership including VP of Military Affairs Chris Cortez, and participated in strategic visits to LinkedIn and Microsoft Garage"
      ],
      tech: ["Azure", "Copilot Studio", "Maps API"]
    },
    {
      title: "Software Engineer Intern (Fullstack)",
      company: "Duke Office of Information Technology: Code+ Program",
      period: "May–July 2024",
      location: "Durham, NC",
      highlights: [
        "Architected first-of-its-kind predictive occupancy analysis system using ML and IoT integration, processing real-time data from campus-wide Wi-Fi networks and CO2 sensors",
        "Developed end-to-end ML pipeline using Python for occupancy prediction, combining Splunk Wi-Fi and sensor data streams",
        "Built robust REST API architecture using FastAPI and PostgreSQL, implementing CI/CD pipelines with Docker Compose",
        "Directed backend development of interactive visualization dashboard using GeoPandas and Voila widgets"
      ],
      tech: ["Python", "ML", "IoT", "FastAPI", "PostgreSQL", "Docker", "GeoPandas"]
    },
    {
      title: "Professional 3D Printing Research Specialist",
      company: "Duke OIT Co-Lab Pro",
      period: "June 2023 - Present",
      location: "Durham, NC",
      highlights: [
        "Led end-to-end client success for Duke's professional 3D printing service, managing project lifecycles for 24 stakeholders",
        "Achieved 95% client satisfaction rate through technical consulting and precise execution of 3D heart modeling projects",
        "Optimized over 50 complex prints through precise CAD file preparation and post-processing"
      ],
      tech: ["CAD", "3D Printing", "Technical Consulting"]
    }
  ];

  const projects = [
    {
      title: "Mini-Amazon E-commerce Platform",
      description: "Full-stack inventory management system for multi-seller marketplace",
      tech: ["Python", "PostgreSQL", "FastAPI", "Docker"],
      highlights: [
        "Architected inventory management system handling complex database relationships",
        "Enabled real-time inventory tracking and multi-seller product management",
        "Implemented automated order fulfillment workflows",
        "Collaborated in agile team of 4 to integrate with cart and purchase modules"
      ]
    }
  ];

  const education = {
    school: "Duke University",
    degree: "BS in Computer Science",
    graduation: "May 2026",
    details: [
      "Coursework: Data Structures and Algorithms, Computer Architecture, Discrete Math, Database Systems",
      "Honors: Full-ride scholarship awardee, Scholarship to participate in SHPE National Convention 2024"
    ]
  };

  const technologies = {
    languages: ["Python", "Java", "SQL", "R", "HTML", "CSS", "C"],
    technologies: ["Jupyter", "PostgreSQL", "Docker Compose", "CI/CD", "Linux", "Virtual Machines"]
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = [aboutRef, educationRef, experienceRef, projectsRef];
    sections.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => sections.forEach((ref) => ref.current && observer.unobserve(ref.current));
  }, []);

  return (
    <div className="min-h-screen bg-white bg-opacity-90">
      <div className="h-screen flex flex-col justify-center items-center bg-white bg-opacity-80 relative">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Software Engineer
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Duke University Computer Science '26 | Microsoft NYC Mentee
          </p>
        </div>
        <button 
          onClick={() => scrollToSection(aboutRef)}
          className="absolute bottom-12 cursor-pointer hover:scale-110 transition-transform"
          aria-label="Scroll to content"
        >
          <ChevronDown className="h-8 w-8 text-gray-400 animate-bounce" />
        </button>
      </div>

      <nav className="sticky top-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-8">
            {[
              { id: 'about', ref: aboutRef, label: 'About' },
              { id: 'education', ref: educationRef, label: 'Education' },
              { id: 'experience', ref: experienceRef, label: 'Experience' },
              { id: 'projects', ref: projectsRef, label: 'Projects' }
            ].map(({ id, ref, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(ref)}
                className={`px-3 py-4 text-sm font-medium transition-colors ${
                  activeSection === id 
                    ? 'text-gray-900 border-b-2 border-gray-900' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <section id="about" ref={aboutRef} className="min-h-screen py-16">
          <div className="prose max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
            <p className="text-lg text-gray-700">
              As a Computer Science student at Duke University, I merge software engineering expertise 
              with a passion for impactful technology solutions. My journey from rural Brazil to Duke 
              has given me a unique perspective on technology's power to bridge global opportunities.
            </p>
          </div>
        </section>

        <section id="education" ref={educationRef} className="min-h-screen py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Education</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{education.school}</h3>
                <p className="text-lg text-gray-600">{education.degree}</p>
              </div>
              <p className="text-gray-500">{education.graduation}</p>
            </div>
            <ul className="mt-4 space-y-2">
              {education.details.map((detail, idx) => (
                <li key={idx} className="text-gray-700 flex items-start">
                  <span className="mr-2">•</span>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="experience" ref={experienceRef} className="min-h-screen py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Experience</h2>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                    <p className="text-lg text-gray-600">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-500">{exp.period}</p>
                    <p className="text-gray-500">{exp.location}</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-gray-700 flex items-start">
                      <span className="mr-2">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.tech.map((tech, idx) => (
                    <TechTag key={idx} name={tech} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" ref={projectsRef} className="min-h-screen py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Projects</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <TechTag key={idx} name={tech} />
                  ))}
                </div>
                <ul className="mt-4 space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-gray-700 text-sm flex items-start">
                      <span className="mr-2">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;
