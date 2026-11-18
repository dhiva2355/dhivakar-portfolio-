import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Instagram,
  Mail, Menu, X, Code2, Cloud, Layers3, Video, ExternalLink
} from 'lucide-react'

const navItems = ['About', 'Work', 'Skills', 'Experience', 'Contact']

const projects = [
  {
    number: '01',
    title: 'Build Vision AI',
    type: 'AI · CONSTRUCTION TECHNOLOGY',
    description: 'An AI-powered concept for understanding construction blueprints, exploring plan layers and assisting with early-stage project estimation.',
    tags: ['AI', 'Computer Vision', 'Product Concept'],
    status: 'IDEA / PROTOTYPE',
  },
  {
    number: '02',
    title: 'Personal AI Assistant',
    type: 'AI · AUTOMATION',
    description: 'A Jarvis-inspired assistant concept focused on bringing useful everyday tasks together through a conversational interface.',
    tags: ['Python', 'AI', 'Automation'],
    status: 'IN DEVELOPMENT',
  },
  {
    number: '03',
    title: 'Campus Connect',
    type: 'WEB · STUDENT EXPERIENCE',
    description: 'A college companion concept to make student information such as attendance, marks, schedules and updates easier to access.',
    tags: ['React', 'UI/UX', 'Web App'],
    status: 'CONCEPT',
  },
]

const skills = [
  { name: 'Java', level: 'Learning & building fundamentals', icon: Code2 },
  { name: 'Python', level: 'Learning & scripting', icon: Code2 },
  { name: 'AWS / Cloud', level: 'Cloud fundamentals & hands-on labs', icon: Cloud },
  { name: 'Web Development', level: 'HTML, CSS & JavaScript fundamentals', icon: Layers3 },
  { name: 'Video & Content', level: 'Shooting, editing & social media', icon: Video },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

function Reveal({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.16 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <div className="noise" aria-hidden="true" />
      <header className="site-header">
        <a className="wordmark" href="#home" onClick={closeMenu}>D<span>.</span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={14} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <motion.div className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
              <span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.25 }}>
              I build ideas<br />into <span className="muted-word">experiences.</span>
            </motion.h1>
            <motion.p className="hero-description" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65, duration: 0.8 }}>
              I'm <strong>Dhivakar</strong> — an engineering student exploring cloud technology,
              software development and creative digital experiences.
            </motion.p>
            <motion.div className="hero-actions" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
              <a className="button button-light" href="#work">Explore my work <ArrowUpRight size={16} /></a>
              <a className="text-link" href="#contact">Get in touch <ArrowRight size={15} /></a>
            </motion.div>
            <motion.div className="hero-meta" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.05 }}>
              <span>BASED IN INDIA</span><span className="meta-line" /><span>ENGINEERING · CLOUD · CREATIVE</span>
            </motion.div>
          </div>

          <motion.div className="portrait-wrap" initial={{ opacity: 0, scale: 0.94, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1, delay: 0.35 }}>
            <div className="portrait-frame">
              {/* Replace /profile.jpg with your own photo in the public folder. */}
              <img
                src="/profile.jpg"
                alt="Dhivakar portrait"
                onError={(event) => { event.currentTarget.style.display = 'none' }}
              />
              <div className="portrait-placeholder">
                <span className="placeholder-initials">D.</span>
                <span>YOUR PHOTO HERE</span>
                <small>Add your image as <code>public/profile.jpg</code></small>
              </div>
              <div className="portrait-caption"><span>FIG. 01</span><span>THE PERSON BEHIND THE PIXELS</span></div>
            </div>
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="floating-note"><span className="note-star">✳</span><span>Curious by nature.<br />Driven by creation.</span></div>
          </motion.div>

          <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a>
        </section>

        <section className="intro-strip">
          <div className="section-wrap strip-inner">
            <span>CURIOUS MIND</span><i>✳</i><span>CONTINUOUS LEARNER</span><i>✳</i><span>CREATIVE THINKER</span><i>✳</i><span>PROBLEM SOLVER</span>
          </div>
        </section>

        <section className="content-section section-wrap" id="about">
          <Reveal>
            <div className="section-label"><span>01 / ABOUT</span><span className="label-line" /></div>
            <div className="about-grid">
              <h2>Engineer by study.<br /><span className="muted-word">Creator by instinct.</span></h2>
              <div className="about-copy">
                <p className="large-copy">I’m a final-year B.E. Computer Science and Engineering student with an interest in cloud computing, software and emerging technologies.</p>
                <p>I enjoy exploring how ideas can become useful products — from AI-powered concepts to practical web experiences. Alongside technology, I work with content creation, video editing and social media, bringing a creative perspective to the way I approach problems.</p>
                <p>I'm currently strengthening my foundations, building projects and looking for opportunities to learn, contribute and grow.</p>
                <a className="text-link" href="#contact">Let's connect <ArrowUpRight size={15} /></a>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="content-section section-wrap" id="work">
          <Reveal>
            <div className="section-label"><span>02 / SELECTED WORK</span><span className="label-line" /><span className="section-count">03 PROJECTS</span></div>
            <div className="section-heading-row">
              <h2>Ideas in <span className="muted-word">progress.</span></h2>
              <p>A selection of concepts and projects<br />that reflect what I'm exploring.</p>
            </div>
          </Reveal>
          <div className="project-list">
            {projects.map((project, index) => (
              <Reveal key={project.number} delay={index * 0.08}>
                <article className="project-card">
                  <div className="project-number">{project.number}</div>
                  <div className="project-main">
                    <span className="project-type">{project.type}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tag-row">{project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
                  </div>
                  <div className="project-side">
                    <span className="project-status">{project.status}</span>
                    <span className="project-arrow"><ArrowUpRight size={22} /></span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="project-note">Project descriptions reflect concepts and work in progress. Add live demos and GitHub links as they become available.</p>
        </section>

        <section className="content-section section-wrap" id="skills">
          <Reveal>
            <div className="section-label"><span>03 / TOOLKIT</span><span className="label-line" /></div>
            <div className="section-heading-row">
              <h2>Tools I use.<br /><span className="muted-word">Skills I grow.</span></h2>
              <p>Always learning. Always experimenting.<br />Building one skill at a time.</p>
            </div>
          </Reveal>
          <div className="skills-grid">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <Reveal key={skill.name} delay={index * 0.06}>
                  <div className="skill-card">
                    <Icon size={20} strokeWidth={1.5} />
                    <h3>{skill.name}</h3>
                    <p>{skill.level}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </section>

        <section className="content-section section-wrap" id="experience">
          <Reveal>
            <div className="section-label"><span>04 / EXPERIENCE & LEADERSHIP</span><span className="label-line" /></div>
            <h2 className="experience-title">Learning through <span className="muted-word">doing.</span></h2>
          </Reveal>
          <div className="timeline">
            <Reveal>
              <div className="timeline-item">
                <span className="timeline-date">INTERNSHIP</span>
                <div><h3>Cloud Computing Intern</h3><p className="timeline-org">VdArt · Trichy</p><p>Explored AWS learning resources and hands-on fundamentals involving services such as Amazon S3, EC2 and Lambda.</p></div>
              </div>
            </Reveal>
            <Reveal>
              <div className="timeline-item">
                <span className="timeline-date">LEADERSHIP</span>
                <div><h3>Social Media Team President</h3><p className="timeline-org">M.A.M. College of Engineering</p><p>Contribute to social media, event coverage and creative communication while coordinating a student team.</p></div>
              </div>
            </Reveal>
            <Reveal>
              <div className="timeline-item">
                <span className="timeline-date">COMMUNITY</span>
                <div><h3>Events & Innovation</h3><p className="timeline-org">College activities and ideathons</p><p>Participated in innovation-focused activities and explored ideas around AI, technology and product development.</p></div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap">
            <Reveal>
              <div className="section-label"><span>05 / CONTACT</span><span className="label-line" /></div>
              <p className="contact-kicker">HAVE A PROJECT, ROLE OR IDEA?</p>
              <h2>Let's make<br /><span className="muted-word">something matter.</span></h2>
              
<a
  className="contact-email"
  href="mailto:dhivakar2355@gmail.com"
>
  dhivakar2355@gmail.com <ArrowUpRight size={22} />
</a>

<div className="social-links">
  <a href="https://github.com/dhiva2355" target="_blank" rel="noreferrer">
    <Github size={17} /> GitHub <ExternalLink size={12} />
  </a>

  <a href="https://www.linkedin.com/in/dhivakar-s-327a69348/" target="_blank" rel="noreferrer">
    <Linkedin size={17} /> LinkedIn <ExternalLink size={12} />
  </a>

  <a href="https://www.instagram.com/dhixva._/" target="_blank" rel="noreferrer">
    <Instagram size={17} /> Instagram <ExternalLink size={12} />
  </a>

  <a href="https://wa.me/917010287232" target="_blank" rel="noreferrer">
    <Mail size={17} /> WhatsApp <ExternalLink size={12} />
  </a>

  <a
    href="https://drive.google.com/file/d/1W2QGCDpofbfz2wTD2qJoIfWs_4gywNjA/view"
    target="_blank"
    rel="noreferrer"
  >
    <ArrowDown size={17} /> Resume <ExternalLink size={12} />
  </a>
</div>  
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="wordmark" href="#home">D<span>.</span></a>
        <span>DESIGNED & BUILT WITH INTENTION.</span>
        <span>© {new Date().getFullYear()} DHIVAKAR</span>
        <a href="#home" className="back-top">BACK TO TOP ↑</a>
      </footer>
    </>
  )
}

export default App
