import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'motion/react'
import './index.css'
import { TypewriterText } from './components/TypewriterText'

const App = () => {
  const [hoveredWork, setHoveredWork] = useState<string | null>(null)
  const navigate = useNavigate()
  const formRef = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comment: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const workItems = [
    { year: '2024', items: [
      { name: 'LLM FOR LOGGING', type: 'ANOMALY DETECTION', link: 'https://github.com/Nani1-glitch/LLM-for-Logging-' },
      { name: 'LIVE LANGUAGE TRANSLATOR', type: 'NATURAL LANGUAGE PROCESSING', link: 'https://github.com/Nani1-glitch/Live-Language-Translator-' },
      { name: 'FACE EXPRESSION ANALYSIS', type: 'COMPUTER VISION', link: 'https://github.com/Nani1-glitch' },
      { name: 'GEO MAGNET LOCATION FINDER', type: 'GEOSPATIAL ANALYSIS', link: 'https://github.com/Nani1-glitch' },
      { name: 'HAND GESTURE RECOGNITION', type: 'COMPUTER VISION', link: 'https://github.com/Nani1-glitch' },
      { name: 'BERT FOR LOG DATA ANALYSIS', type: 'MACHINE LEARNING', link: 'https://github.com/Nani1-glitch' },
    ]},
    { year: '2023', items: [
      { name: 'HEART ATTACK PREDICTION', type: 'HEALTHCARE & MACHINE LEARNING', link: 'https://github.com/Nani1-glitch/hearty' },
      { name: 'AIR CANVAS', type: 'COMPUTER VISION', link: 'https://github.com/Nani1-glitch/Air-Canvas-' },
      { name: 'AIR CURSOR CONTROL', type: 'COMPUTER VISION', link: 'https://github.com/Nani1-glitch/Air-Cursor-Control' },
      { name: 'REINFORCEMENT LEARNING', type: 'MACHINE LEARNING', link: 'https://github.com/Nani1-glitch' },
    ]},
    { year: '2022', items: [
      { name: 'MULTI DISEASE CHATBOT', type: 'HEALTHCARE & MACHINE LEARNING', link: 'https://github.com/Nani1-glitch/Disease-Chatbot-' },
      { name: 'WEB SCRAPING', type: 'DATA ENGINEERING', link: 'https://github.com/Nani1-glitch' },
      { name: 'AI ALGORITHMS IN PYTHON', type: 'ARTIFICIAL INTELLIGENCE', link: 'https://github.com/Nani1-glitch' },
    ]},
  ]

  return (
          <motion.div
      className="app"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <header className="header">
        <div className="header-line" />
        <div className="header-content">
          <div className="header-left">NITHIN RAJULAPATI</div>
          <nav className="header-center">
            <a href="#about" className="nav-link">ABOUT</a>
            <span>,</span>
            <a href="#work" className="nav-link"> WORK</a>
            <span>,</span>
            <a href="#services" className="nav-link"> SERVICES</a>
            <span>,</span>
            <a href="#blog" className="nav-link" onClick={(e) => { e.preventDefault(); navigate('/blog'); }}> BLOG</a>
            <span>,</span>
            <a href="https://www.neuralyn.health/" target="_blank" rel="noopener noreferrer" className="nav-link"> NEURALYN</a>
          </nav>
          <div className="header-right">
            <div className="coordinates">41.8781° N | 87.6298° W</div>
            <a href="#contact" className="get-in-touch nav-link">GET IN TOUCH</a>
          </div>
      </div>
        </header>

      {/* Hero Section - Home Page Only */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          {/* FOUNDER & CTO - Top */}
          <div className="hero-title-container">
            <div className="hero-title-wrapper">
              <h1 className="hero-title">FOUNDER & CTO</h1>
              <div className="hero-tag">[NEURALYN]</div>
            </div>
          </div>
          
          {/* Thin Line */}
          <div className="hero-line" />
          
          {/* Second Half - Hey Text and Image */}
          <div className="hero-text-container">
            <div className="hero-text-content">
              <TypewriterText 
                text="HEY! I AM NITHIN, AN AI & MACHINE LEARNING SPECIALIST" 
                speed={30}
                delay={500}
                as="h2"
              />
              <TypewriterText 
                text="Experienced AI and machine learning expert, based in Chicago and operating globally. Over 6 years of leadership in building intelligent systems for healthcare, computer vision, and NLP. Skilled in Python, neural networks, and data science—delivering scalable solutions that drive real impact."
                speed={15}
                delay={3000}
                as="p"
              />
            </div>
            <div className="hero-image-wrapper">
              <div className="hero-image-container">
                <div className="ripple-ring ring-1"></div>
                <div className="ripple-ring ring-2"></div>
                <div className="ripple-ring ring-3"></div>
                <div className="hero-image-frame">
                  <img 
                    src="/images/Image-2.JPG" 
                    alt="Nithin Rajulapati" 
                    className="hero-image"
                  />
                </div>
              </div>
            </div>
                  </div>
                </div>
      </section>

      {/* Selected Work Section */}
      <section id="work" className="work-section">
        <div className="work-line" />
        <div className="work-content">
          <div className="work-header">
            <div className="work-title-container">
              <TypewriterText 
                text="SELECTED" 
                speed={50}
                delay={200}
                as="h2"
                className="work-title"
              />
              <TypewriterText 
                text="WORK" 
                speed={50}
                delay={1200}
                as="h2"
                className="work-title"
              />
              <span className="work-number">[13]</span>
            </div>
            <div className="work-copyright">©2026/25</div>
                </div>
          
          <div className="work-list">
            <div className="work-sidebar">
              <div className="work-social">
                <a href="https://github.com/Nani1-glitch" target="_blank" rel="noopener noreferrer" className="nav-link">GITHUB</a>
                <a href="https://www.linkedin.com/in/nithin-rajulapati-69133a1aa" target="_blank" rel="noopener noreferrer" className="nav-link">LINKEDIN</a>
                    </div>
              <div className="work-achievements">
                <div className="achievement-item">Wrote 100,000+ lines of code</div>
                <div className="achievement-item">Built Multilingual AI</div>
                <div className="achievement-item">Scaled Cloud Infrastructure</div>
                <div className="achievement-item">Processed Massive Data</div>
                <div className="achievement-item">Trained Large Models</div>
                <div className="achievement-item">Deployed Accurate ASR</div>
                <div className="achievement-item">Real-Time Voice Pipeline</div>
                <div className="achievement-item">Privacy-First Architecture</div>
                <div className="achievement-item">Clinical-Grade Training</div>
                <div className="achievement-item">Optimized Model Performance</div>
                <div className="achievement-item">Global CDN Reach</div>
                    </div>
                  </div>
            
            <div className="work-items">
              {workItems.map((yearGroup) => (
                <div key={yearGroup.year} className="work-year-group">
                  <TypewriterText 
                    text={yearGroup.year}
                    speed={100}
                    delay={2000}
                    as="div"
                    className="work-year nav-link"
                  />
                  <div className="work-year-line" />
                  {yearGroup.items.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.link || '#'}
                      target={item.link ? "_blank" : undefined}
                      rel={item.link ? "noopener noreferrer" : undefined}
                      className={`work-item ${hoveredWork === `${yearGroup.year}-${idx}` ? 'hovered' : ''}`}
                      onMouseEnter={() => setHoveredWork(`${yearGroup.year}-${idx}`)}
                      onMouseLeave={() => setHoveredWork(null)}
                      style={{ textDecoration: 'none', display: 'block' }}
                    >
                      <div className="work-item-content">
                        <div className="work-item-name nav-link">{item.name}</div>
                        <div className="work-item-type nav-link">{item.type}</div>
                </div>
                      {hoveredWork === `${yearGroup.year}-${idx}` && item.link && (
                        <div className="work-item-url">{item.link}</div>
                      )}
                      <div className="work-item-line" />
                    </a>
                  ))}
                      </div>
                    ))}
                  </div>
                </div>
            </div>
          </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="services-line" />
        <div className="services-content">
          <div className="services-header">
            <TypewriterText 
              text="/AI"
              speed={50}
              delay={300}
              as="div"
              className="services-logo"
            />
            <div className="services-intro">
              <TypewriterText 
                text="SERVICES"
                speed={50}
                delay={600}
                as="span"
                className="services-label"
              />
              <p className="services-intro-text">
                <TypewriterText 
                  text="AS AN "
                  speed={10}
                  delay={1200}
                  as="span"
                  className="text-gray"
                />
                <TypewriterText 
                  text="AI SPECIALIST "
                  speed={10}
                  delay={1400}
                  as="span"
                  className="text-white"
                />
                <TypewriterText 
                  text="I DEVELOP "
                  speed={10}
                  delay={1600}
                  as="span"
                  className="text-gray"
                />
                <TypewriterText 
                  text="INTELLIGENT "
                  speed={10}
                  delay={1800}
                  as="span"
                  className="text-white"
                />
                <TypewriterText 
                  text="SYSTEMS AND "
                  speed={10}
                  delay={2000}
                  as="span"
                  className="text-gray"
                />
                <TypewriterText 
                  text="POWERFUL MODELS "
                  speed={10}
                  delay={2200}
                  as="span"
                  className="text-white"
                />
                <TypewriterText 
                  text="THAT TRANSFORM "
                  speed={10}
                  delay={2400}
                  as="span"
                  className="text-gray"
                />
                <TypewriterText 
                  text="DATA INTO "
                  speed={10}
                  delay={2600}
                  as="span"
                  className="text-gray"
                />
                <TypewriterText 
                  text="ACTIONABLE INSIGHTS. "
                  speed={10}
                  delay={2800}
                  as="span"
                  className="text-white"
                />
                <TypewriterText 
                  text="I CREATE "
                  speed={10}
                  delay={3000}
                  as="span"
                  className="text-gray"
                />
                <TypewriterText 
                  text="SCALABLE SOLUTIONS "
                  speed={10}
                  delay={3200}
                  as="span"
                  className="text-white"
                />
                <TypewriterText 
                  text="ACROSS "
                  speed={10}
                  delay={3400}
                  as="span"
                  className="text-gray"
                />
                <TypewriterText 
                  text="HEALTHCARE, "
                  speed={10}
                  delay={3600}
                  as="span"
                  className="text-white"
                />
                <TypewriterText 
                  text="COMPUTER VISION, AND "
                  speed={10}
                  delay={3800}
                  as="span"
                  className="text-gray"
                />
                <TypewriterText 
                  text="NATURAL LANGUAGE "
                  speed={10}
                  delay={4000}
                  as="span"
                  className="text-white"
                />
                <TypewriterText 
                  text="PROCESSING. MY "
                  speed={10}
                  delay={4200}
                  as="span"
                  className="text-gray"
                />
                <TypewriterText 
                  text="APPROACH COMBINES "
                  speed={10}
                  delay={4400}
                  as="span"
                  className="text-white"
                />
                <TypewriterText 
                  text="DEEP "
                  speed={10}
                  delay={4600}
                  as="span"
                  className="text-gray"
                />
                <TypewriterText 
                  text="TECHNICAL EXPERTISE "
                  speed={10}
                  delay={4800}
                  as="span"
                  className="text-white"
                />
                <TypewriterText 
                  text="WITH "
                  speed={10}
                  delay={5000}
                  as="span"
                  className="text-gray"
                />
                <TypewriterText 
                  text="PRACTICAL "
                  speed={10}
                  delay={5200}
                  as="span"
                  className="text-white"
                />
                <TypewriterText 
                  text="APPLICATION TO DELIVER "
                  speed={10}
                  delay={5400}
                  as="span"
                  className="text-gray"
                />
                <TypewriterText 
                  text="MEANINGFUL RESULTS."
                  speed={10}
                  delay={5600}
                  as="span"
                  className="text-white"
                />
              </p>
            </div>
            </div>
          
          <div className="services-list">
            <div className="service-item">
              <span className="service-number">[1]</span>
              <div className="service-content">
                <TypewriterText 
                  text="ARTIFICIAL INTELLIGENCE"
                  speed={40}
                  delay={3000}
                  as="h3"
                  className="service-title muted nav-link"
                />
                <p className="service-description nav-link" style={{ whiteSpace: 'pre-line' }}>
                  <TypewriterText 
                    text="DEVELOPING INTELLIGENT SYSTEMS WITH\nADVANCED ALGORITHMS AND NEURAL\nNETWORKS FOR COMPLEX PROBLEM SOLVING"
                    speed={15}
                    delay={4500}
                    as="span"
                  />
                </p>
            </div>
            </div>
            
            <div className="service-item">
              <span className="service-number">[2]</span>
              <div className="service-content">
                <TypewriterText 
                  text="MACHINE LEARNING"
                  speed={40}
                  delay={6000}
                  as="h3"
                  className="service-title muted nav-link"
                />
                <p className="service-description nav-link" style={{ whiteSpace: 'pre-line' }}>
                  <TypewriterText 
                    text="BUILDING PREDICTIVE MODELS AND\nDATA-DRIVEN SOLUTIONS FROM CONCEPT\nTO PRODUCTION DEPLOYMENT"
                    speed={15}
                    delay={7500}
                    as="span"
                  />
                </p>
              </div>
            </div>
            
            <div className="service-item">
              <span className="service-number">[3]</span>
              <div className="service-content">
                <TypewriterText 
                  text="PYTHON DEVELOPMENT"
                  speed={40}
                  delay={9000}
                  as="h3"
                  className="service-title muted nav-link"
                />
                <p className="service-description nav-link" style={{ whiteSpace: 'pre-line' }}>
                  <TypewriterText 
                    text="HIGH-QUALITY BACKEND DEVELOPMENT\nAND AI APPLICATION ARCHITECTURE\nAT PROFESSIONAL STANDARDS"
                    speed={15}
                    delay={10500}
                    as="span"
                  />
                </p>
              </div>
            </div>
            
            <div className="service-item">
              <span className="service-number">[4]</span>
              <div className="service-content">
                <TypewriterText 
                  text="NATURAL LANGUAGE PROCESSING"
                  speed={40}
                  delay={12000}
                  as="h3"
                  className="service-title muted nav-link"
                />
                <p className="service-description nav-link">
                  <TypewriterText 
                    text="Designing conversational AI systems that understand, interpret, and respond to human language with emotional intelligence and context awareness."
                    speed={15}
                    delay={13500}
                    as="span"
                  />
                </p>
              </div>
            </div>
            
            <div className="service-item">
              <span className="service-number">[5]</span>
              <div className="service-content">
                <TypewriterText 
                  text="CLOUD ARCHITECTURE"
                  speed={40}
                  delay={15000}
                  as="h3"
                  className="service-title muted nav-link"
                />
                <p className="service-description nav-link">
                  <TypewriterText 
                    text="Building scalable, distributed systems for robust global deployment, leveraging automation, security, and zero-downtime orchestration."
                    speed={15}
                    delay={16500}
                    as="span"
                  />
                </p>
              </div>
            </div>
            
            <div className="service-item">
              <span className="service-number">[6]</span>
              <div className="service-content">
                <TypewriterText 
                  text="VOICE TECHNOLOGY"
                  speed={40}
                  delay={18000}
                  as="h3"
                  className="service-title muted nav-link"
                />
                <p className="service-description nav-link">
                  <TypewriterText 
                    text="Developing advanced speech recognition pipelines that accurately transcribe and analyze spoken language across accents and languages."
                    speed={15}
                    delay={19500}
                    as="span"
                  />
                </p>
              </div>
            </div>
            
            <div className="service-item">
              <span className="service-number">[7]</span>
              <div className="service-content">
                <TypewriterText 
                  text="DISTRIBUTED SYSTEMS"
                  speed={40}
                  delay={21000}
                  as="h3"
                  className="service-title muted nav-link"
                />
                <p className="service-description nav-link">
                  <TypewriterText 
                    text="Engineering resilient, fault-tolerant infrastructures enabling seamless real-time collaboration and data processing across diverse environments."
                    speed={15}
                    delay={22500}
                    as="span"
                  />
                </p>
              </div>
            </div>
            
            <div className="service-item">
              <span className="service-number">[8]</span>
              <div className="service-content">
                <TypewriterText 
                  text="DATA ENGINEERING"
                  speed={40}
                  delay={24000}
                  as="h3"
                  className="service-title muted nav-link"
                />
                <p className="service-description nav-link">
                  <TypewriterText 
                    text="Managing large-scale data processing, integration, and analytics pipelines powering insights, personalization, and predictive workflows."
                    speed={15}
                    delay={25500}
                    as="span"
                  />
                </p>
              </div>
            </div>
            
            <div className="service-item">
              <span className="service-number">[9]</span>
              <div className="service-content">
                <TypewriterText 
                  text="BACKEND ENGINEERING"
                  speed={40}
                  delay={27000}
                  as="h3"
                  className="service-title muted nav-link"
                />
                <p className="service-description nav-link">
                  <TypewriterText 
                    text="Crafting reliable server-side logic and microservice architectures that ensure speed, privacy, and scalable performance for millions of users."
                    speed={15}
                    delay={28500}
                    as="span"
                  />
                </p>
              </div>
            </div>
            
            <div className="service-item">
              <span className="service-number">[10]</span>
              <div className="service-content">
                <TypewriterText 
                  text="SECURE COMPUTING"
                  speed={40}
                  delay={30000}
                  as="h3"
                  className="service-title muted nav-link"
                />
                <p className="service-description nav-link">
                  <TypewriterText 
                    text="Implementing privacy-first, compliant systems using best-in-class encryption, session management, and regulatory standards for healthcare AI."
                    speed={15}
                    delay={31500}
                    as="span"
                  />
                </p>
              </div>
            </div>
            
            <div className="service-item">
              <span className="service-number">[11]</span>
              <div className="service-content">
                <TypewriterText 
                  text="CONVERSATIONAL DESIGN"
                  speed={40}
                  delay={33000}
                  as="h3"
                  className="service-title muted nav-link"
                />
                <p className="service-description nav-link">
                  <TypewriterText 
                    text="Orchestrating frictionless user experiences through multimodal dialogue flows and inclusive voice-first interfaces for mental wellness care."
                    speed={15}
                    delay={34500}
                    as="span"
                  />
                </p>
              </div>
            </div>
              </div>
            </div>
          </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-line" />
        <div className="about-content">
          <TypewriterText 
            text="ABOUT"
            speed={50}
            delay={300}
            as="h2"
            className="section-title"
          />
          <div className="about-text">
            <TypewriterText 
              text="Welcome to my story. I'm Nithin Rajulapati—Founder, CTO, and, above all, a relentless believer that mental wellness is a right, not a privilege. Every line of code I write, every team I build, and every initiative I lead is driven by a singular mission: to make mental wellness universally accessible and deeply personal."
              speed={15}
              delay={800}
              as="p"
            />
            <TypewriterText 
              text="Fueled by a foundation of curiosity, empathy, and technical ingenuity, my journey began not in boardrooms, but in the lived experiences of everyday people - the voices so often unheard, the hopes oft underserved. My academic and professional path has woven through the corridors of world-class institutions and dynamic startups alike, but it's always been the spark of real human impact that's kept me moving forward."
              speed={15}
              delay={6000}
              as="p"
            />
            <TypewriterText 
              text="As the Founder & CTO of Neuralyn LLC, I'm building HealMind_AI, a voice-first, emotionally intelligent mental health companion supporting 50+ languages and backed by Google for Startups. This isn't just technology; this is meaningful, multidisciplinary care empowering individuals across the globe to be heard, healed, and uplifted, one conversation at a time."
              speed={15}
              delay={12000}
              as="p"
            />
            <TypewriterText 
              text="My approach is both visionary and hands-on: translating breakthrough AI and neuroscience research into solutions that are beautiful in their simplicity, practical in their deployment, and compassionate at every touchpoint. I lead diverse, passionate teams united by a belief that innovation should serve humanity, not just markets. I champion inclusion, ethical AI, and collaboration as cornerstones of sustainable change."
              speed={15}
              delay={18000}
              as="p"
            />
            <TypewriterText 
              text="In my world, design matters. Function matters more. People matter most."
              speed={15}
              delay={24000}
              as="p"
            />
            <TypewriterText 
              text="If you resonate with bold missions, impossible standards, and the conviction that tomorrow's world must and will hear every voice, it would be a privilege to connect."
              speed={15}
              delay={27000}
              as="p"
            />
            </div>
            </div>
          </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-line" />
        <div className="contact-content">
          <div className="contact-main">
            <div className="contact-title-container">
              <div className="contact-icons">
                <div className="contact-icon">🌐</div>
                <div className="contact-icon filled">●</div>
              </div>
              <TypewriterText 
                text="GET IN TOUCH"
                speed={50}
                delay={300}
                as="h2"
                className="contact-title"
              />
            </div>
            
            <form 
              ref={formRef}
              className="contact-form"
              onSubmit={async (e) => {
                e.preventDefault()
                
                // Validation
                if (!formData.name.trim() || !formData.email.trim() || !formData.comment.trim()) {
                  setSubmitStatus('error')
                  setTimeout(() => setSubmitStatus('idle'), 3000)
                  return
                }

                // Email validation
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                if (!emailRegex.test(formData.email)) {
                  setSubmitStatus('error')
                  setTimeout(() => setSubmitStatus('idle'), 3000)
                  return
                }

                setIsSubmitting(true)
                setSubmitStatus('idle')

                try {
                  // Using FormSubmit - free service that sends emails directly
                  const formDataToSend = new FormData()
                  formDataToSend.append('name', formData.name)
                  formDataToSend.append('email', formData.email)
                  formDataToSend.append('phone', formData.phone || 'Not provided')
                  formDataToSend.append('message', formData.comment)
                  formDataToSend.append('_to', 'nithin@neuralyn.health')
                  formDataToSend.append('_subject', `Contact Form Submission from ${formData.name}`)
                  formDataToSend.append('_replyto', formData.email)
                  formDataToSend.append('_captcha', 'false')
                  
                  const response = await fetch('https://formsubmit.co/ajax/nithin@neuralyn.health', {
                    method: 'POST',
                    body: formDataToSend,
                  })

                  const result = await response.json()

                  if (response.ok && result.success) {
                    setSubmitStatus('success')
                    setFormData({ name: '', email: '', phone: '', comment: '' })
                    
                    setTimeout(() => {
                      setSubmitStatus('idle')
                    }, 5000)
                  } else {
                    throw new Error('Failed to send message')
                  }
                } catch (error) {
                  console.error('Error sending email:', error)
                  setSubmitStatus('error')
                  setTimeout(() => setSubmitStatus('idle'), 3000)
                } finally {
                  setIsSubmitting(false)
                }
              }}
            >
              <TypewriterText 
                text="DROP ME A MESSAGE"
                speed={30}
                delay={1000}
                as="div"
                className="form-label"
              />
              <div className="form-fields">
                <div className="form-row">
                  <label className="nav-link">NAME</label>
                  <input 
                    type="text" 
                    placeholder="YOUR NAME" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="form-row">
                  <label className="nav-link">EMAIL</label>
                  <input 
                    type="email" 
                    placeholder="YOUR EMAIL" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div className="form-row">
                  <label className="nav-link">PHONE</label>
                  <input 
                    type="tel" 
                    placeholder="YOUR PHONE" 
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div className="form-row">
                  <label className="nav-link">COMMENT</label>
                  <textarea 
                    placeholder="TELL ME ABOUT YOUR PROJECT OR COLLABORATION OPPORTUNITY" 
                    rows={4}
                    value={formData.comment}
                    onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                    required
                  />
                  </div>
                  </div>
              <motion.button
                type="submit"
                className="form-submit-button"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
              </motion.button>
              {submitStatus === 'success' && (
                <motion.div
                  className="form-message success"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ✓ MESSAGE SENT SUCCESSFULLY!
                </motion.div>
              )}
              {submitStatus === 'error' && (
                <motion.div
                  className="form-message error"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ✗ ERROR SENDING MESSAGE. PLEASE TRY AGAIN.
                </motion.div>
              )}
            </form>
            
            <div className="contact-info">
              <div className="contact-info-item">
                <span className="contact-info-label nav-link">EMAIL</span>
                <a href="mailto:cto@neuralyn.health" className="contact-info-value nav-link">cto@neuralyn.health</a>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-label nav-link">PHONE</span>
                <a href="tel:+13124091816" className="contact-info-value nav-link">+1 (312) 409-1816</a>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-label nav-link">LOCATION</span>
                <span className="contact-info-value nav-link">CHICAGO, ILLINOIS, USA</span>
                  </div>
                    </div>
                  </div>
            </div>
          </section>
    </motion.div>
  )
}

export default App
