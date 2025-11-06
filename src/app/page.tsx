import Navigation from '../components/Navigation';

const projects = [
  {
    title: 'Brand Identity Design',
    description: 'Complete brand identity package including logo design, color palette, typography, and brand guidelines for a tech startup.',
    tags: ['Logo Design', 'Brand Identity', 'Adobe Illustrator', 'Figma'],
    link: '#',
    image: '/api/placeholder/400/250',
    category: 'Branding'
  },
  {
    title: 'Mobile App UI/UX',
    description: 'User interface and experience design for a fitness tracking mobile application with intuitive navigation and modern aesthetics.',
    tags: ['UI/UX Design', 'Mobile Design', 'Figma', 'Prototyping'],
    link: '#',
    image: '/api/placeholder/400/250',
    category: 'UI/UX'
  },
  {
    title: 'Print Design Collection',
    description: 'Series of print materials including brochures, business cards, and promotional materials for various clients across different industries.',
    tags: ['Print Design', 'Adobe InDesign', 'Typography', 'Layout'],
    link: '#',
    image: '/api/placeholder/400/250',
    category: 'Print'
  },
  
];

const skills = [
  { name: 'Adobe Photoshop', level: 95 },
  { name: 'Adobe Illustrator', level: 90 },
  { name: 'Adobe InDesign', level: 85 },
  { name: 'Figma', level: 90 },
  { name: 'Adobe XD', level: 80 },
  { name: 'Sketch', level: 75 },
  { name: 'After Effects', level: 70 },
  { name: 'Procreate', level: 85 },
];

const services = [
  {
    icon: '🎨',
    title: 'Brand Identity',
    description: 'Creating memorable brand identities that tell your story and connect with your audience.'
  },
  {
    icon: '📱',
    title: 'UI/UX Design',
    description: 'Designing intuitive and beautiful user interfaces for web and mobile applications.'
  },
  {
    icon: '🖨️',
    title: 'Print Design',
    description: 'Professional print materials including brochures, business cards, and marketing collateral.'
  },
  {
    icon: '🌐',
    title: 'Web Design',
    description: 'Modern, responsive website designs that engage users and drive conversions.'
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-light">
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 px-4 bg-gradient-to-br from-light via-purple/10 to-accent/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-fade-in">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-primary via-pink to-secondary rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
                A
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-text-primary mb-6">
              Hi, I'm <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Addis</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary mb-4 max-w-3xl mx-auto">
              Creative Graphics Designer
            </p>
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              Transforming ideas into stunning visual experiences through innovative design, brand storytelling, and creative problem-solving.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#projects" 
                className="bg-gradient-to-r from-primary to-pink text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 font-medium transform hover:-translate-y-1"
              >
                View My Portfolio
              </a>
              <a 
                href="#contact" 
                className="border-2 border-primary text-primary px-8 py-4 rounded-full hover:bg-primary hover:text-white transition-all duration-300 font-medium"
              >
                Let's Collaborate
              </a>
            </div>
            
            {/* Creative Elements */}
            <div className="mt-16 flex justify-center space-x-8 opacity-60">
              <div className="w-4 h-4 bg-primary rounded-full animate-bounce"></div>
              <div className="w-4 h-4 bg-secondary rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
              <div className="w-4 h-4 bg-accent rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              <div className="w-4 h-4 bg-pink rounded-full animate-bounce" style={{animationDelay: '0.3s'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-primary mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h3 className="text-2xl font-semibold text-text-primary mb-6">
                Bringing Ideas to Life Through Design
              </h3>
              <p className="text-text-secondary mb-6 leading-relaxed">
                I'm a passionate Graphics Designer with over 2 years of experience creating compelling visual solutions. 
                I specialize in brand identity, UI/UX design, and print media to help businesses communicate their message effectively.
              </p>
              <p className="text-text-secondary mb-6 leading-relaxed">
                My design philosophy centers on the belief that great design should not only look beautiful but also solve problems 
                and create meaningful connections between brands and their audiences.
              </p>
              <p className="text-text-secondary mb-6 leading-relaxed">
                When I'm not designing, you can find me exploring art galleries, sketching in my notebook, 
                or experimenting with new design trends and techniques.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-text-secondary">2+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>
                  <span className="text-text-secondary">20+ Projects Completed</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span className="text-text-secondary">10+ Happy Clients</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 via-pink/10 to-secondary/10 p-8 rounded-2xl">
              <div className="text-center">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-4 shadow-xl ring-4 ring-primary/20">
                  <img 
                    src="/addis-photo.jpg" 
                    alt="Addis - Graphics Designer" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-text-secondary italic text-center">
                  "Design is not just what it looks like and feels like. Design is how it works." - Steve Jobs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-purple/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-primary mb-4">What I Do</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
            <p className="text-text-secondary max-w-2xl mx-auto">
              I offer a comprehensive range of design services to help your brand stand out and connect with your audience.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-primary mb-4">Design Tools & Skills</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Proficient in industry-standard design tools and always learning new technologies to stay ahead of design trends.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gradient-to-br from-light to-purple/5 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-text-primary group-hover:text-primary transition-colors">{skill.name}</span>
                  <span className="text-text-secondary font-medium">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-primary via-pink to-secondary h-3 rounded-full transition-all duration-1000 shadow-sm"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-light via-accent/5 to-purple/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-primary mb-4">Featured Work</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
            <p className="text-text-secondary max-w-2xl mx-auto">
              A showcase of my recent design projects spanning brand identity, digital design, and creative solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group transform hover:-translate-y-2">
                <div className="h-56 bg-gradient-to-br from-primary/20 via-pink/20 to-secondary/20 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"></div>
                  <div className="text-7xl opacity-30 group-hover:scale-110 transition-transform duration-500">
                    {project.category === 'Branding' && '🎨'}
                    {project.category === 'UI/UX' && '📱'}
                    {project.category === 'Print' && '📄'}
                    {project.category === 'Web Design' && '🌐'}
                    {project.category === 'Digital' && '💻'}
                    {project.category === 'Packaging' && '📦'}
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="bg-gradient-to-r from-primary/10 to-secondary/10 text-primary px-3 py-1 text-xs rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {/* <a 
                    href={project.link} 
                    className="inline-flex items-center text-primary hover:text-secondary transition-colors font-semibold group-hover:translate-x-1 transform transition-transform duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Case Study
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-primary via-pink to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">Let's Create Something Amazing</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
            Ready to bring your vision to life? I'm available for new projects and creative collaborations. 
            Let's discuss how we can make your brand stand out!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a 
              href="mailto:addisalemnegash333@gmail.com" 
              className="bg-white text-primary px-8 py-4 rounded-full font-semibold inline-flex items-center justify-center hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get In Touch
            </a>
            <a 
              href="https://t.me/Addis333" 
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold inline-flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              Telegram
            </a>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a href="https://www.instagram.com/7addis?igsh=NTc4MTIwNjQ2YQ==" className="text-white/80 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/addisalem-negash-334898325" className="text-white/80 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/20 rounded-full"></div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Addis. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
