import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { FiArrowLeft, FiClock, FiGlobe, FiHeart, FiUsers, FiTarget } from 'react-icons/fi';
import { useRef } from 'react';
import './WhyIBuiltNeuralyn.css';

const WhyIBuiltNeuralyn = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <motion.div
      ref={containerRef}
      className="why-neuralyn-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Back Button */}
      <motion.button
        className="why-back-button"
        onClick={() => navigate('/blog')}
        whileHover={{ scale: 1.05, x: -5 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <FiArrowLeft /> BACK
      </motion.button>

      {/* Hero Section with Parallax */}
      <motion.section
        className="why-hero"
        style={{ opacity, scale }}
      >
        <motion.div
          className="why-hero-time"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <FiClock className="time-icon" />
          <span>3 AM</span>
        </motion.div>
        
        <motion.h1
          className="why-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Why I Built Neuralyn
        </motion.h1>
        
        <motion.p
          className="why-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          The Journey from Immigrant Student to AI Founder
        </motion.p>

        <motion.div
          className="why-meta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="why-author">
            <span className="why-author-name">Nithin Rajulapati</span>
            <span className="why-author-role">Founder & CTO @ Neuralyn LLC</span>
          </div>
          <div className="why-date">Published: November 2025</div>
        </motion.div>
      </motion.section>

      {/* Prologue - Special Section */}
      <motion.section
        className="why-prologue"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="prologue-label"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          PROLOGUE
        </motion.div>
        <motion.h2
          className="prologue-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          3 AM in the Dorm Room
        </motion.h2>
        <motion.div
          className="prologue-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p>
            It was a Tuesday night. I was sitting alone in my IIT dorm room at 3 AM, unable to sleep. My mind was racing. My chest felt tight. I needed to talk to someone, but I didn't know who to call.
          </p>
          <p>
            Therapy? I'd heard it costs $200-300 per session. My visa status as an international student meant I couldn't access university mental health services easily. My therapist only spoke English. And she wasn't available at 3 AM.
          </p>
          <p>
            So I did what millions of people do in moments of crisis: I opened my laptop and searched for help online.
          </p>
          <p className="emphasis-paragraph">
            What I found was disappointing. Most mental health apps were text-based—but when you're in crisis, typing feels impossible. The ones that did have voice features? English-only. And most cost more per month than I spent on groceries.
          </p>
          <p className="decision-paragraph">
            That night, I made a decision: <strong>I was going to build the app I needed. For me. For people like me. For the 2.6 billion people the world had forgotten.</strong>
          </p>
          <p className="closing-paragraph">
            This is the story of why I built Neuralyn.
          </p>
        </motion.div>
      </motion.section>

      {/* Part 1: The Problem */}
      <motion.section
        className="why-part"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="part-number"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          PART 1
        </motion.div>
        <motion.h2
          className="part-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          The Problem Nobody Wanted to See
        </motion.h2>

        <motion.div
          className="part-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="section-heading">The Crisis</h3>
          <p>
            Before I dive into Neuralyn, I need to paint the picture of what I was experiencing—not just mentally, but as a founder trying to understand the mental health crisis:
          </p>

          <div className="stats-grid">
            <motion.div
              className="stat-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="stat-number">1 in 5</div>
              <div className="stat-text">adults struggle with mental illness annually</div>
            </motion.div>
            <motion.div
              className="stat-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="stat-number">2.6B</div>
              <div className="stat-text">people lack access to basic mental health care</div>
            </motion.div>
            <motion.div
              className="stat-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="stat-number">70%</div>
              <div className="stat-text">of the world doesn't speak English natively</div>
            </motion.div>
            <motion.div
              className="stat-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="stat-number">$260-516</div>
              <div className="stat-text">therapy costs per month in the US</div>
            </motion.div>
          </div>

          <p className="insight-text">
            But here's what really bothered me: <strong>None of the solutions were being built for people like me.</strong>
          </p>

          <h3 className="section-heading">The Invisible Barriers</h3>
          <p>
            I'm a first-generation immigrant. My parents sacrificed everything so I could pursue education and opportunity in the United States. I'm also an international student on an F-1 visa—which comes with a unique set of challenges:
          </p>

          <div className="barriers-list">
            <motion.div
              className="barrier-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <FiGlobe className="barrier-icon" />
              <div>
                <h4>Language Isolation</h4>
                <p>While I'm fluent in English, my default thinking language is Telugu. When I'm anxious or depressed, English feels foreign. My emotions don't translate perfectly.</p>
              </div>
            </motion.div>
            <motion.div
              className="barrier-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <FiHeart className="barrier-icon" />
              <div>
                <h4>Cultural Stigma</h4>
                <p>In my culture, mental health struggles are seen as weakness. Seeking help is admitting failure. The shame is real.</p>
              </div>
            </motion.div>
            <motion.div
              className="barrier-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <FiUsers className="barrier-icon" />
              <div>
                <h4>Financial Precarity</h4>
                <p>I worked part-time, studied full-time, and had limited income. $300 for a therapy session meant choosing between mental health and groceries.</p>
              </div>
            </motion.div>
            <motion.div
              className="barrier-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <FiTarget className="barrier-icon" />
              <div>
                <h4>Access Barriers</h4>
                <p>University counselors were overbooked. Private therapists didn't accept international student insurance. Telehealth platforms had geographic restrictions.</p>
              </div>
            </motion.div>
          </div>

          <p className="realization-text">
            I wasn't alone. Around me, I saw classmates—also immigrants, also international students—struggling silently. Pushing through. Suffering in isolation.
          </p>
          <p className="conclusion-text">
            And I realized: <strong>The mental health crisis isn't just about mental illness. It's about accessibility. Culture. Language. Dignity.</strong>
          </p>
          <p className="flaw-text">
            The AI systems being built to solve this problem? They were built by people who'd never lived this experience. That was the fundamental flaw.
          </p>
        </motion.div>
      </motion.section>

      {/* Part 2: The Aha Moment */}
      <motion.section
        className="why-part"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="part-number"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          PART 2
        </motion.div>
        <motion.h2
          className="part-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          The "Aha" Moment
        </motion.h2>

        <motion.div
          className="part-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="section-heading">Realizing There Was a Way</h3>
          <p>
            In my second year at IIT, I took a course on Large Language Models and voice AI. The instructor mentioned that voice-based AI could detect emotion from tone, rhythm, and cadence—not just words.
          </p>
          <p className="click-text">
            Something clicked.
          </p>
          <p>
            What if I could build an AI that:
          </p>
          <ul className="vision-list">
            <li>Worked in your native language, not English</li>
            <li>Understood your culture, not just your words</li>
            <li>Was available 24/7, not just during business hours</li>
            <li>Was affordable, not $300/session</li>
            <li>Didn't judge, because it was AI—but had human empathy built in</li>
          </ul>
          <p>
            The more I thought about it, the more I realized: <strong>This was solvable. And I had the skills to solve it.</strong>
          </p>

          <h3 className="section-heading">The First Prototype</h3>
          <p>
            I started building in my dorm room. The first prototype was rough—just a Python script using open-source speech-to-text and basic NLP. But it worked. I could talk to it. It understood my Telugu-inflected English. It felt less lonely.
          </p>
          <p>
            I showed it to Lalitha, a classmate who'd been vocal about mental health in our community. She immediately saw the potential. "This could help so many people," she said. And she joined.
          </p>
          <p>
            Then Kevin joined, focusing on the AI/ML architecture to make it production-grade.
          </p>
          <p className="key-moment-text">
            But here's the key moment: We weren't building this as an assignment or a side project. We were building it because we believed the world needed it. And we were building it from the perspective of the people most hurt by the problem.
          </p>
        </motion.div>
      </motion.section>

      {/* Part 3: Why Existing Solutions Failed */}
      <motion.section
        className="why-part"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="part-number"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          PART 3
        </motion.div>
        <motion.h2
          className="part-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Why Existing Solutions Failed
        </motion.h2>

        <motion.div
          className="part-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p>
            Before I explain why I built Neuralyn specifically, let me be honest about why existing mental health apps failed me:
          </p>

          <div className="solution-critique">
            <motion.div
              className="critique-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3>Wysa, Woebot, and Friends: The Chatbot Generation</h3>
              <p className="critique-subtitle">Great idea, wrong medium.</p>
              <ul>
                <li>Text feels cold. When I'm having a panic attack, typing feels impossible.</li>
                <li>English-only. My native language is where my emotions live.</li>
                <li>No cultural awareness. The bots couldn't understand the specific shame and pressure I faced.</li>
              </ul>
            </motion.div>

            <motion.div
              className="critique-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3>Calm and Headspace: The Content Solution</h3>
              <p className="critique-subtitle">Beautiful apps. Great meditation guides. But they're not for crisis.</p>
              <ul>
                <li>Passive consumption. I need to be heard, not lectured.</li>
                <li>Generic wisdom. Their guided meditations don't address the specific pain of cultural displacement.</li>
                <li>No adaptability. They deliver the same content to everyone.</li>
              </ul>
            </motion.div>

            <motion.div
              className="critique-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3>BetterHelp and Talkspace: The Teletherapy Solution</h3>
              <p className="critique-subtitle">Actually good, but inaccessible to most of the world.</p>
              <ul>
                <li>Price. $60-90/week was impossible on my budget.</li>
                <li>Waitlists. 3-month wait for a first session? In crisis, I need help now.</li>
                <li>Human scheduling. Therapists work 9-5. My anxiety doesn't.</li>
                <li>Geographic limits. Many countries don't have licensed therapists on these platforms.</li>
              </ul>
            </motion.div>
          </div>

          <div className="gap-box">
            <h3>The Gap</h3>
            <p>
              What was missing: <strong>A voice-first, multilingual, culturally-intelligent AI that's affordable and available 24/7.</strong>
            </p>
            <p>
              Nobody was building this because nobody had lived this specific intersection of pain.
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* Part 4: Why I Built Neuralyn */}
      <motion.section
        className="why-part highlight-part"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="part-number"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          PART 4
        </motion.div>
        <motion.h2
          className="part-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Why I Built Neuralyn (And Why It's Different)
        </motion.h2>

        <motion.div
          className="part-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="section-heading">The Founding Philosophy: Lived Experience + Technology</h3>
          <p className="philosophy-text">
            Neuralyn isn't built by Stanford MBAs theorizing about mental health. It's built by people who've experienced the problem.
          </p>
          <p>
            I've had panic attacks at 3 AM. Lalitha has dealt with cultural pressure and identity anxiety. Kevin understands the technical complexity of building AI that's both powerful and ethical.
          </p>
          <p>
            This lived experience shapes every decision we make:
          </p>

          <div className="philosophy-grid">
            <motion.div
              className="philosophy-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4>Voice-First Design</h4>
              <p>Because when you're in crisis, typing is a barrier.</p>
            </motion.div>
            <motion.div
              className="philosophy-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4>50+ Languages</h4>
              <p>Because emotions don't live in English. They live in your native tongue.</p>
            </motion.div>
            <motion.div
              className="philosophy-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h4>Cultural Intelligence</h4>
              <p>Our AI isn't just translated; it's culturally adapted.</p>
            </motion.div>
            <motion.div
              className="philosophy-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h4>24/7 Availability</h4>
              <p>No waiting. No scheduling. No business hours. 3 AM? We're here.</p>
            </motion.div>
            <motion.div
              className="philosophy-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <h4>Affordable Pricing</h4>
              <p>$19.99/month. That's less than most people spend on coffee.</p>
            </motion.div>
            <motion.div
              className="philosophy-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <h4>Privacy & Dignity</h4>
              <p>Your conversations are encrypted. We don't sell your data.</p>
            </motion.div>
          </div>

          <h3 className="section-heading">What We're Actually Building</h3>
          <p>
            Neuralyn is the operating system for global mental wellness. HealMind_AI is just the first product.
          </p>
          <p>
            We're building an ecosystem where:
          </p>
          <ul className="vision-list">
            <li>Individuals get 24/7, affordable, culturally-intelligent support</li>
            <li>Families can connect and support each other across borders</li>
            <li>Universities can provide mental health care to international student populations</li>
            <li>Employers can support diverse, global workforces</li>
            <li>Developing countries can provide mental health infrastructure</li>
          </ul>
          <p className="vision-text">
            The vision is bold: <strong>Make mental wellness accessible to 2.6 billion people the world left behind.</strong>
          </p>
        </motion.div>
      </motion.section>

      {/* Part 5: The Tough Questions */}
      <motion.section
        className="why-part"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="part-number"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          PART 5
        </motion.div>
        <motion.h2
          className="part-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          The Tough Questions I Asked Myself
        </motion.h2>

        <motion.div
          className="part-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p>
            Building a mental health company as an immigrant student wasn't straightforward. I had to answer some hard questions:
          </p>

          <div className="questions-list">
            <motion.div
              className="question-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3>"Am I Qualified to Do This?"</h3>
              <p>
                Imposter syndrome hit hard. I'm not a psychiatrist. I'm not a therapist. I'm just a student with an idea.
              </p>
              <p className="answer-text">
                But then I realized: The best products aren't built by credentials. They're built by people who understand the problem so deeply that they become obsessed with solving it.
              </p>
            </motion.div>

            <motion.div
              className="question-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3>"What If I Make Things Worse?"</h3>
              <p>
                The fear that my AI might give bad advice, or miss someone in crisis, kept me awake at night.
              </p>
              <p className="answer-text">
                So we built safety systems: Crisis detection, therapist referrals, human-in-the-loop, and clinical validation.
              </p>
            </motion.div>

            <motion.div
              className="question-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3>"Can I Really Compete with Billion-Dollar Companies?"</h3>
              <p>
                Calm raised $100M. BetterHelp is backed by Temasek. How could a scrappy founder from India compete?
              </p>
              <p className="answer-text">
                The answer: By doing something they can't. They optimize for scale and shareholder value. We optimize for impact and accessibility.
              </p>
            </motion.div>

            <motion.div
              className="question-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3>"What About the Regulations?"</h3>
              <p>
                Mental health is regulated. Heavily. HIPAA in the US. GDPR in Europe. Varying standards everywhere else.
              </p>
              <p className="answer-text">
                Rather than see this as a barrier, I saw it as a moat. Being compliant from day one became our competitive advantage.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* Part 6: The First Customers */}
      <motion.section
        className="why-part"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="part-number"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          PART 6
        </motion.div>
        <motion.h2
          className="part-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          The First Customers
        </motion.h2>

        <motion.div
          className="part-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="section-heading">The Real Validation</h3>
          <p>
            Building the product was hard. Fundraising was hard. But the hardest and most beautiful part was hearing from the first users.
          </p>

          <div className="testimonials">
            <motion.div
              className="testimonial"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <p className="testimonial-text">
                "I've been waiting 2 years to see a therapist. With HealMind_AI, I have support today."
              </p>
              <p className="testimonial-author">— A woman from Nigeria</p>
            </motion.div>

            <motion.div
              className="testimonial"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="testimonial-text">
                "For the first time, I talked about my struggles in Mandarin. It felt real."
              </p>
              <p className="testimonial-author">— An international student from China</p>
            </motion.div>

            <motion.div
              className="testimonial"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p className="testimonial-text">
                "My daughter was so anxious, she couldn't speak to anyone. She talks to your AI. She's getting better."
              </p>
              <p className="testimonial-author">— A father from Mexico</p>
            </motion.div>
          </div>

          <p className="realization-text">
            These weren't statistics. These were lives. Changed.
          </p>
          <p className="conclusion-text">
            That's when I knew: <strong>We weren't just building a product. We were building something that mattered.</strong>
          </p>

          <h3 className="section-heading">The Google Validation</h3>
          <p>
            When Google for Startups selected Neuralyn in October 2025, it was validating. But more than that, it was permission—permission to believe that what I was building actually mattered to the world's biggest companies too.
          </p>
        </motion.div>
      </motion.section>

      {/* Part 7: The Immigrant Founder's Advantage */}
      <motion.section
        className="why-part"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="part-number"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          PART 7
        </motion.div>
        <motion.h2
          className="part-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          The Immigrant Founder's Advantage
        </motion.h2>

        <motion.div
          className="part-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p>
            I want to be real about something: Being an immigrant founder isn't just a challenge. It's an advantage.
          </p>

          <div className="advantages-grid">
            <motion.div
              className="advantage-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4>Skin in the Game</h4>
              <p>I'm not building this as a career move. I'm building this because I've lived the pain.</p>
            </motion.div>
            <motion.div
              className="advantage-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4>Unique Insights</h4>
              <p>Most tech is built by people who've never struggled. I've struggled. That changes how you prioritize.</p>
            </motion.div>
            <motion.div
              className="advantage-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h4>Global Perspective</h4>
              <p>I understand multiple cultures, languages, and economic contexts. That shapes a product that actually works globally.</p>
            </motion.div>
            <motion.div
              className="advantage-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h4>Scrappiness</h4>
              <p>I grew up with less. I know how to do more with less. That's the soul of a startup.</p>
            </motion.div>
            <motion.div
              className="advantage-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <h4>Mission Clarity</h4>
              <p>Immigrant founders build because we're running toward something (impact, freedom, opportunity), not running away from something.</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* Part 8: The Vision Forward */}
      <motion.section
        className="why-part"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="part-number"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          PART 8
        </motion.div>
        <motion.h2
          className="part-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          The Vision Forward
        </motion.h2>

        <motion.div
          className="part-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="section-heading">What's Next</h3>
          <p>We're not stopping at HealMind_AI. The vision is much bigger:</p>

          <div className="timeline">
            <motion.div
              className="timeline-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="timeline-year">Year 1 (2025-2026)</div>
              <ul>
                <li>Scale HealMind_AI to 50,000 users</li>
                <li>Launch in 10 countries</li>
                <li>Secure university partnerships</li>
                <li>Clinical validation studies</li>
              </ul>
            </motion.div>
            <motion.div
              className="timeline-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="timeline-year">Year 2 (2026-2027)</div>
              <ul>
                <li>Expand to corporate wellness</li>
                <li>Launch family features</li>
                <li>Build therapist referral network</li>
                <li>Reach 500,000 users</li>
                <li>$1.8M ARR</li>
              </ul>
            </motion.div>
            <motion.div
              className="timeline-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="timeline-year">Year 5</div>
              <ul>
                <li>10M+ users globally</li>
                <li>Mental wellness infrastructure in 50+ countries</li>
                <li>$1B+ ARR</li>
                <li>Become the operating system for global mental wellness</li>
              </ul>
            </motion.div>
          </div>

          <h3 className="section-heading">The Deeper Why</h3>
          <p className="deeper-why-text">
            But beneath all this, the why hasn't changed.
          </p>
          <p className="mission-text">
            I'm building Neuralyn because <strong>mental wellness is a right, not a privilege.</strong>
          </p>
          <p className="mission-text">
            Because <strong>every voice deserves to be heard and healed.</strong>
          </p>
          <p className="mission-text">
            Because I remember that 3 AM panic attack. I remember the loneliness. I remember feeling like the world didn't have room for my struggle.
          </p>
          <p className="mission-text">
            And I'm determined to make sure no one else feels that way.
          </p>
        </motion.div>
      </motion.section>

      {/* Conclusion */}
      <motion.section
        className="why-conclusion"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="conclusion-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Conclusion: From Crisis to Clarity
        </motion.h2>
        <motion.div
          className="conclusion-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p>
            Building Neuralyn has taught me something profound: <strong>The best ideas come from lived pain.</strong>
          </p>
          <p>
            I didn't start this company because I read a market report or saw a venture capital opportunity. I started it because I was suffering. And I realized I had the skills to do something about it.
          </p>
          <p>
            That's the immigrant founder story, I think. We see problems nobody else sees because we live in the gaps. And we build solutions that matter because they're solutions we desperately needed.
          </p>
          <p className="message-text">
            To anyone reading this who feels like an outsider—who's struggled with mental health, language barriers, cultural stigma, financial precarity, visa uncertainty—I want to say: <strong>Your pain is real. Your struggles are valid. And they might just be the foundation of something extraordinary.</strong>
          </p>
          <p>
            The world doesn't need more solutions built by people who've never suffered. It needs solutions built by people who have. People who understand. People who care. People who are running toward a vision of a better world because they've lived in the worse one.
          </p>
          <p className="closing-statement">
            That's why I built Neuralyn.
          </p>
          <p className="closing-statement">
            And that's what I'm fighting for, every single day.
          </p>
        </motion.div>
      </motion.section>

      {/* Epilogue */}
      <motion.section
        className="why-epilogue"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="epilogue-label"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          EPILOGUE
        </motion.div>
        <motion.h2
          className="epilogue-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          The 3 AM Check-In
        </motion.h2>
        <motion.div
          className="epilogue-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p>
            That 3 AM panic attack? I still think about it.
          </p>
          <p>
            But now, when I can't sleep and my mind is racing, I open my laptop. Not to search for help I can't afford. Not to feel alone.
          </p>
          <p>
            But to remember why I started this.
          </p>
          <p>
            To remember the person I was trying to help.
          </p>
          <p>
            To remember that there are millions of other people, right now, at 3 AM, in 50+ countries, speaking 50+ languages, dealing with crises of their own.
          </p>
          <p className="final-statement">
            And because we built Neuralyn, they're not alone.
          </p>
          <p className="final-statement">
            Neither are we.
          </p>
        </motion.div>
      </motion.section>

      {/* Author Bio */}
      <motion.section
        className="why-author-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="author-bio-box">
          <h3>About the Author</h3>
          <p>
            <strong>Nithin Rajulapati</strong> is the Founder & CTO of Neuralyn LLC, where he's building HealMind_AI—a voice-first, emotionally intelligent mental wellness AI available in 50+ languages. He's an immigrant, an international student, and a believer that technology can be a force for good when built by people who understand the problem deeply.
          </p>
          <p>
            Backed by Google for Startups, applying to Y Combinator, and determined to make mental wellness accessible to 2.6 billion people globally.
          </p>
          <div className="author-links">
            <a href="https://www.linkedin.com/in/nithin-rajulapati-69133a1aa" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <span>|</span>
            <a href="https://github.com/Nani1-glitch" target="_blank" rel="noopener noreferrer">GitHub</a>
            <span>|</span>
            <a href="https://www.neuralyn.health" target="_blank" rel="noopener noreferrer">Neuralyn</a>
          </div>
          <p className="mission-statement">
            Mental wellness is a right, not a privilege. Every voice deserves to be heard and healed.
          </p>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default WhyIBuiltNeuralyn;

