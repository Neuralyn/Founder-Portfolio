import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { FiArrowLeft, FiCircle, FiAlertCircle, FiTarget, FiTrendingUp, FiShield, FiUsers, FiCheckCircle, FiBook, FiLink } from 'react-icons/fi';
import { useRef } from 'react';
import './BuildingAsImmigrant.css';

const BuildingAsImmigrant = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={containerRef}
      className="immigrant-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Back Button */}
      <motion.button
        className="imm-back-button"
        onClick={() => navigate('/blog')}
        whileHover={{ scale: 1.05, x: -5 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <FiArrowLeft /> BACK
      </motion.button>

      {/* Hero Section */}
      <motion.section
        className="imm-hero"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <motion.div
          className="imm-category"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          <FiCircle className="category-icon" />
          <span>FOUNDING NEURALYN & LEADERSHIP</span>
        </motion.div>
        
        <motion.h1
          className="imm-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          The Realities of Building and Fundraising as an Immigrant in the US Startup Scene
        </motion.h1>

        <motion.div
          className="imm-meta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <div className="imm-author">
            <span className="imm-author-name">Nithin Rajulapati</span>
            <span className="imm-author-role">Founder & CTO @ Neuralyn LLC</span>
          </div>
          <div className="imm-date">Published: November 2025</div>
        </motion.div>
      </motion.section>

      {/* Prologue */}
      <motion.section
        className="imm-prologue"
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
          The Moment Everything Changed
        </motion.h2>
        <motion.div
          className="prologue-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p>
            I still remember the email. It was June 2025, and my OPT (Optional Practical Training) had just been approved—12 months to work in the US after graduation.
          </p>
          <p>
            I read it three times. Each time, the weight hit differently.
          </p>
          <div className="deadline-box">
            <p className="deadline-text">
              <strong>12 months</strong> to build a company. <strong>12 months</strong> to prove it was worth investing in. <strong>12 months</strong> before I'd have to leave the country if I couldn't secure H-1B sponsorship or find an investor who believed in me enough to navigate the visa nightmare.
            </p>
          </div>
          <p className="realization-text">
            That's when I realized: <strong>The immigration status isn't just a background detail. It's your entire risk calculus.</strong>
          </p>
          <p>
            For American founders, fundraising is hard. For immigrant founders, it's fundraising while balancing visa timelines, investor skepticism, and the constant pressure of proving you belong here.
          </p>
          <p className="closing-text">
            This is the story of what I've learned—and what I wish someone had told me before I started.
          </p>
        </motion.div>
      </motion.section>

      {/* Part 1: Unique Challenges */}
      <motion.section
        className="imm-part"
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
          The Unique Challenges of Being an Immigrant Founder
        </motion.h2>

        <motion.div
          className="part-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="challenge-header">Challenge #1: The Visa Lottery</h3>
          <p>
            Let me be direct: Your visa status is a major due diligence item for investors.
          </p>
          <p>
            Most American founders don't think about this. They can move states, pivot companies, take sabbaticals. They have optionality.
          </p>
          <p className="emphasis-box">
            Immigrant founders don't.
          </p>

          <div className="reality-section">
            <h4>The Reality:</h4>
            <p>
              When I graduated in May 2025, I had one status: F-1 student visa on OPT (12-month work authorization).
            </p>
            <p>
              That 12 months is a hard deadline. On May 15, 2026, if I'm not:
            </p>
            <ul className="deadline-list">
              <li>Sponsored for H-1B by my employer, or</li>
              <li>Part of a company with significant VC backing that can navigate visa sponsorship, or</li>
              <li>In a different status (green card, marriage, etc.)</li>
            </ul>
            <p className="consequence-text">
              ...I have to leave the country. Even if Neuralyn is on the verge of success.
            </p>
          </div>

          <div className="investor-concerns">
            <h4>For Investors, This Means:</h4>
            <div className="concerns-grid">
              <div className="concern-item">
                <FiAlertCircle className="concern-icon" />
                <div>
                  <strong>Key person risk:</strong> If the founder has to leave, does the company collapse?
                </div>
              </div>
              <div className="concern-item">
                <FiAlertCircle className="concern-icon" />
                <div>
                  <strong>Execution risk:</strong> Does visa uncertainty slow decision-making?
                </div>
              </div>
              <div className="concern-item">
                <FiAlertCircle className="concern-icon" />
                <div>
                  <strong>Operational risk:</strong> How much time will visa/immigration issues take away from building?
                </div>
              </div>
            </div>
            <p className="quote-text">
              I've talked to a dozen investors who said (honestly): "We love the vision. But the visa thing makes this riskier."
            </p>
          </div>

          <h3 className="challenge-header">Challenge #2: Unconscious (And Sometimes Conscious) Bias</h3>
          <p>
            I haven't experienced overt discrimination. But I've experienced something subtler and more insidious: assumptions based on my accent, my name, my background.
          </p>

          <div className="bias-examples">
            <motion.div
              className="bias-example"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h5>The "Are You Sure This is Your Idea?" Question</h5>
              <p>
                During one pitch, an investor asked: "So this is your original idea, right? You didn't copy this from another company you worked at?"
              </p>
              <p className="comparison-note">
                I was 24 years old, pitching my own company. An American founder would never be asked this.
              </p>
            </motion.div>

            <motion.div
              className="bias-example"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h5>The Founder Legitimacy Doubt</h5>
              <p>
                Investors asked more questions about me than about the market opportunity:
              </p>
              <ul>
                <li>"Where are your parents from?"</li>
                <li>"How did you get into the US?"</li>
                <li>"What's your relationship with India?"</li>
              </ul>
              <p className="comparison-note">
                With American founders, they typically ask about go-to-market strategy and unit economics.
              </p>
            </motion.div>

            <motion.div
              className="bias-example"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h5>The Accent Underestimation</h5>
              <p>
                I've noticed investors sometimes underestimate credibility based on accent. One investor actually said (in a later conversation): "I wasn't sure about you at first—your English felt different."
              </p>
              <p className="comparison-note">
                My English is fluent. But it carries the cadence of someone multilingual. That shouldn't matter, but it does.
              </p>
            </motion.div>

            <motion.div
              className="bias-example"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h5>The "Founder Track Record" Catch-22</h5>
              <p>
                American founders build credibility through previous exits or big company experience (Google, Meta, Apple).
              </p>
              <p>
                I'm fresh out of IIT. I had no startup exits. No FAANG on my resume.
              </p>
              <p>
                So I had to prove competence differently—through traction, through customer interviews, through clinical validation. That's harder and slower.
              </p>
            </motion.div>
          </div>

          <h3 className="challenge-header">Challenge #3: Capital Availability Disparity</h3>
          <p>
            Here's a stat that haunts me: <strong>Immigrant-founded startups raise 28% less funding than American-founded startups, even controlling for sector and stage.</strong>
          </p>

          <div className="why-section">
            <h4>Why?</h4>
            <div className="why-grid">
              <div className="why-item">
                <strong>Network effects:</strong> VCs invest in networks. I didn't have a deep network in American tech when I started.
              </div>
              <div className="why-item">
                <strong>Pattern matching:</strong> Investors back founders who remind them of previous successes. Most previous successes were American (or American-educated) men.
              </div>
              <div className="why-item">
                <strong>Risk aversion:</strong> Visa risk is real. Even if it's manageable, it's an additional variable VCs have to think through.
              </div>
            </div>
          </div>

          <div className="result-box">
            <h4>The Result:</h4>
            <p>
              While an American founder in my space might raise $500K–$1M pre-seed, I'm raising $150K–$250K. For the same team, same product, same traction.
            </p>
            <p>That means:</p>
            <ul>
              <li>Fewer hires</li>
              <li>Longer bootstrapping periods</li>
              <li>More personal risk</li>
              <li>Less runway for mistakes</li>
            </ul>
          </div>

          <h3 className="challenge-header">Challenge #4: The Imposter Syndrome Multiplier</h3>
          <p>
            There's academic research showing immigrant professionals experience heightened imposter syndrome. I believe it.
          </p>
          <p>Why it's worse for immigrant founders:</p>
          <div className="imposter-factors">
            <div className="factor-item">
              <strong>Comparison Bias:</strong> "That founder went to Stanford and raised $5M. I went to IIT and raised $250K. Am I really competent, or just benefiting from market timing?"
            </div>
            <div className="factor-item">
              <strong>The Origin Story Doubt:</strong> "Would investors have backed me if I weren't solving this specific immigrant problem? Or would I just be another AI startup?"
            </div>
            <div className="factor-item">
              <strong>The Gratitude Trap:</strong> "I got a visa. I got an education. I got this opportunity. Who am I to ask for more?"
            </div>
          </div>
          <p className="insight-text">
            This is insidious because it shapes how aggressively you pursue opportunities. You might take less funding because you feel grateful for what you have, rather than what you deserve.
          </p>
        </motion.div>
      </motion.section>

      {/* Part 2: How I Navigated */}
      <motion.section
        className="imm-part"
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
          How I Navigated These Challenges
        </motion.h2>

        <motion.div
          className="part-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="strategies-list">
            <motion.div
              className="strategy-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="strategy-number">01</div>
              <div className="strategy-content">
                <h3>Strategy #1: Turn Visa Status Into Founder Signal</h3>
                <p>
                  Initially, I saw my visa status as a liability. Then I reframed it.
                </p>
                <p className="strategy-insight">
                  The Reality: My visa uncertainty meant I had to commit fully. I couldn't work on Neuralyn part-time while waiting for something better. This company was my only option.
                </p>
                <p>
                  Investors realized this. It became proof of conviction.
                </p>
                <p>
                  I started leading with it: "I'm building this because I've lived this problem. And my visa timeline means I'm fully committed to making this work or leaving the US—there's no middle ground."
                </p>
                <p>
                  This changed conversations. Instead of seeing it as risk, some investors saw it as founder commitment.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="strategy-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="strategy-number">02</div>
              <div className="strategy-content">
                <h3>Strategy #2: Lean Into The Unfair Advantage</h3>
                <p>
                  I have experiences most American founders don't:
                </p>
                <ul>
                  <li><strong>Multilingual understanding:</strong> I understand the mental health crisis in 5+ languages and cultures</li>
                  <li><strong>Immigrant founder network:</strong> I have access to a diaspora of talented people facing similar challenges</li>
                  <li><strong>Firsthand market research:</strong> I've lived my target market</li>
                </ul>
                <p>
                  Rather than downplaying these, I made them central to the pitch.
                </p>
                <p className="strategy-quote">
                  "I'm not entering the mental health market generically. I'm entering it with deep cultural and linguistic expertise that's extremely hard to replicate. That's why we'll win."
                </p>
              </div>
            </motion.div>

            <motion.div
              className="strategy-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="strategy-number">03</div>
              <div className="strategy-content">
                <h3>Strategy #3: Build Social Proof Aggressively</h3>
                <p>
                  Without the pedigree of Stanford or prior exits, I had to build credibility differently.
                </p>
                <p>I obsessed over:</p>
                <ul>
                  <li><strong>Customer validation:</strong> 25+ customer interviews, detailed feedback, case studies</li>
                  <li><strong>Third-party validation:</strong> Google for Startups acceptance became my "stamp of approval"</li>
                  <li><strong>Academic rigor:</strong> Initiated clinical validation studies with partner therapists</li>
                  <li><strong>Media presence:</strong> Started writing about the problem, building thought leadership</li>
                </ul>
                <p>
                  This took longer than if I had a Stanford degree, but it was actually more defensible because it came from real traction.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="strategy-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="strategy-number">04</div>
              <div className="strategy-content">
                <h3>Strategy #4: Find Visa-Aware Investors</h3>
                <p>
                  Not all investors understand visa dynamics. Some do and have experience with immigrant founders.
                </p>
                <p>I prioritized talking to:</p>
                <ul>
                  <li><strong>Immigrant VCs:</strong> VCs who've gone through the visa journey themselves (Leo Polovets at Susa Ventures, for example)</li>
                  <li><strong>Diversity-focused funds:</strong> Funds explicitly committed to backing underrepresented founders</li>
                  <li><strong>International VCs:</strong> Investors who work with global founders regularly</li>
                  <li><strong>Angels with visa experience:</strong> Wealthy professionals who've navigated immigration themselves</li>
                </ul>
                <p>
                  These investors understood the constraints and didn't treat it as a deal-breaker.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="strategy-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="strategy-number">05</div>
              <div className="strategy-content">
                <h3>Strategy #5: Get Ahead of the Visa Question</h3>
                <p>
                  Rather than wait for investors to ask, I addressed it head-on.
                </p>
                <p className="strategy-quote">
                  In every pitch: "I'm currently on OPT, which is valid through May 2026. We're looking at immigration options including H-1B sponsorship, which is standard for high-growth startups. Here's how we're planning for that."
                </p>
                <p>
                  By leading with it, I controlled the narrative. And by showing I'd already thought it through, I signaled competence.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="strategy-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="strategy-number">06</div>
              <div className="strategy-content">
                <h3>Strategy #6: Build a Diverse Co-Founder Team</h3>
                <p>
                  Here's something I wish I'd done earlier: make sure your co-founder team covers different backgrounds and risks.
                </p>
                <p>
                  One of my co-founders is a US citizen. This actually gave us optionality:
                </p>
                <ul>
                  <li>If I face visa challenges, the company can still operate</li>
                  <li>We're not a key-person-dependent visa risk</li>
                </ul>
                <p>
                  This was attractive to investors because it solved the risk profile.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* Part 3: Lessons */}
      <motion.section
        className="imm-part"
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
          Lessons on Fundraising as an Immigrant
        </motion.h2>

        <motion.div
          className="part-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="lessons-grid">
            <motion.div
              className="lesson-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <FiTarget className="lesson-icon" />
              <h4>Lesson #1: Bias Exists, But It's Not Deterministic</h4>
              <p>
                Yes, immigrant founders face bias. But some of the best investors actively work to overcome their own biases.
              </p>
              <p>
                I've met VCs who specifically seek out immigrant founders because they believe different perspectives lead to better companies.
              </p>
              <p className="lesson-takeaway">
                The key: Find investors who get it. Don't waste time on those who don't.
              </p>
            </motion.div>

            <motion.div
              className="lesson-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <FiTrendingUp className="lesson-icon" />
              <h4>Lesson #2: Your Background Isn't a Liability—It's Your Unfair Advantage</h4>
              <p>
                The mental health crisis in India is different from the mental health crisis in the US. The immigrant experience shapes unique insights.
              </p>
              <p>
                I used to downplay this. "I'm building a company for global users."
              </p>
              <p>
                Now I lead with it: "I'm building this because I understand the specific pain of 2.6 billion underserved people, from lived experience."
              </p>
              <p className="lesson-takeaway">
                That specificity is actually a huge advantage in fundraising and product development.
              </p>
            </motion.div>

            <motion.div
              className="lesson-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <FiShield className="lesson-icon" />
              <h4>Lesson #3: Visa Uncertainty Demands Aggressive Fundraising</h4>
              <p>
                I don't have the luxury of taking 3 years to raise $5M in sequential rounds.
              </p>
              <p>
                I had to compress timelines. Raise faster. Get to scale quickly.
              </p>
              <p className="lesson-takeaway">
                This actually forced better execution because there's no time to waste. It also made my pitch more compelling: "We have 12 months to prove this works. Here's how."
              </p>
            </motion.div>

            <motion.div
              className="lesson-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <FiUsers className="lesson-icon" />
              <h4>Lesson #4: Build Community, Not Just Pitch Relationships</h4>
              <p>
                Some of my best support came not from individual VCs, but from communities:
              </p>
              <ul>
                <li><strong>IIT alumni network:</strong> Other IIT founders facing similar challenges</li>
                <li><strong>Google for Startups cohort:</strong> Other immigrant founders</li>
                <li><strong>Immigrant founder groups:</strong> Slack communities, Discord servers</li>
              </ul>
              <p className="lesson-takeaway">
                These communities validated my idea, gave advice, made introductions, and most importantly, made me feel less alone.
              </p>
              <p>
                If you're an immigrant founder, find your people.
              </p>
            </motion.div>

            <motion.div
              className="lesson-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <FiCheckCircle className="lesson-icon" />
              <h4>Lesson #5: Tell Your Story, But Not Your Trauma</h4>
              <p>
                There's a fine line between authentic storytelling and emotional manipulation.
              </p>
              <p>
                I tell the story of my 3 AM panic attack because it's true and it illustrates the problem. But I don't weaponize my immigrant status for pity.
              </p>
              <p className="lesson-takeaway">
                Investors back winners, not tragic stories.
              </p>
              <p>
                The narrative should be: "I understand this market deeply. I'm the right person to build this. And here's the traction to prove it."
              </p>
              <p>
                Not: "Please fund me because I've suffered."
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* Part 4: Practical Checklist */}
      <motion.section
        className="imm-part checklist-part"
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
          The Practical Immigrant Founder Checklist
        </motion.h2>

        <motion.div
          className="part-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="checklist-grid">
            <motion.div
              className="checklist-category"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3>Legal & Immigration</h3>
              <ul>
                <li>Get clarity on your visa status and timeline (consult immigration lawyer)</li>
                <li>Understand H-1B requirements for your company</li>
                <li>Have a plan for visa sponsorship costs ($5K–$10K per person, typically)</li>
                <li>Know the rules for equity and founder compensation on different visa statuses</li>
                <li>Build relationships with immigration-savvy lawyers early</li>
              </ul>
            </motion.div>

            <motion.div
              className="checklist-category"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3>Fundraising</h3>
              <ul>
                <li>Research investors with immigrant founder experience</li>
                <li>Lead with your unfair advantage (cultural insight, market understanding, etc.)</li>
                <li>Build social proof aggressively (traction, partnerships, validation)</li>
                <li>Address visa status proactively in pitch materials</li>
                <li>Don't settle for investors who treat immigration as a red flag</li>
              </ul>
            </motion.div>

            <motion.div
              className="checklist-category"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3>Operational</h3>
              <ul>
                <li>Ensure your co-founder team isn't entirely visa-dependent</li>
                <li>Create optionality (remote work, offshore operations, etc.)</li>
                <li>Build your immigrant founder network early</li>
                <li>Get mentorship from immigrants who've built before</li>
                <li>Plan for potential visa challenges (6-month plan B, 12-month plan C)</li>
              </ul>
            </motion.div>

            <motion.div
              className="checklist-category"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3>Mindset</h3>
              <ul>
                <li>Recognize imposter syndrome is normal, but don't let it limit you</li>
                <li>Remember that bias is real, but not deterministic</li>
                <li>Lean into your unique perspective as a feature, not a bug</li>
                <li>Build conviction that your lived experience is your unfair advantage</li>
                <li>Surround yourself with people who believe in you and your mission</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* Part 5: What I Wish I'd Known */}
      <motion.section
        className="imm-part"
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
          What I Wish I'd Known Earlier
        </motion.h2>

        <motion.div
          className="part-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="wish-list">
            <motion.div
              className="wish-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="wish-number">1</div>
              <div className="wish-content">
                <h4>"Immigrant Founder" is Actually a Brand</h4>
                <p>
                  Instead of hiding it, I should have led with it. "Building for the world's underserved populations—from lived experience of being underserved."
                </p>
                <p>
                  Investors eat that up when it's authentic.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="wish-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="wish-number">2</div>
              <div className="wish-content">
                <h4>VCs Are More Diverse Than You Think</h4>
                <p>
                  I met brilliant immigrant VCs who were hungry to back immigrant founders. I just had to find them.
                </p>
                <p>
                  Spend time with investors who've walked in your shoes.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="wish-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="wish-number">3</div>
              <div className="wish-content">
                <h4>Visa Uncertainty Isn't Your Fault, But It's Your Responsibility</h4>
                <p>
                  You can't control visa policy. But you can control how you plan for it.
                </p>
                <p>
                  Being proactive about visa strategy actually impressed investors more than hoping it would work out.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="wish-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="wish-number">4</div>
              <div className="wish-content">
                <h4>The Grind is Real, But Worth It</h4>
                <p>
                  Being an immigrant founder building in a space you understand deeply is hard.
                </p>
                <p>
                  But the authenticity, the mission clarity, and the unfair advantage make it worth it.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="wish-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="wish-number">5</div>
              <div className="wish-content">
                <h4>You're Allowed to Celebrate Small Wins</h4>
                <p>
                  While American founders were raising from top-tier VCs, I was excited about Google for Startups.
                </p>
                <p>
                  But that validation was real, and it mattered. I stopped comparing my journey to others and started celebrating my own path.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* Part 6: The Bigger Picture */}
      <motion.section
        className="imm-part"
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
          The Bigger Picture
        </motion.h2>

        <motion.div
          className="part-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="subsection-title">What Immigrant Founders Bring to the Startup Ecosystem</h3>
          <p>
            Despite the challenges, immigrant founders are disproportionately valuable:
          </p>
          <div className="value-grid">
            <div className="value-item">
              <strong>Different perspectives:</strong> We see problems others miss
            </div>
            <div className="value-item">
              <strong>Global mindset:</strong> We think about markets in terms of billions, not millions
            </div>
            <div className="value-item">
              <strong>Resourcefulness:</strong> We know how to do more with less
            </div>
            <div className="value-item">
              <strong>Mission clarity:</strong> We build because we're running toward something, not away from something
            </div>
          </div>

          <div className="stats-box">
            <h4>The stats:</h4>
            <ul>
              <li>~50% of US billion-dollar startups have immigrant co-founders</li>
              <li>Immigrant-founded companies generate higher revenue-per-founder</li>
              <li>Immigrant entrepreneurs are more likely to hire and promote diverse teams</li>
            </ul>
            <p className="stats-note">
              Yet immigrant founders still face friction in fundraising.
            </p>
          </div>

          <div className="call-to-action">
            <h4>The Call to Action for VCs</h4>
            <p>
              If you're a VC, you're leaving money on the table by not backing immigrant founders. The best companies are built by people who understand their markets deeply. Often, that means someone from the market.
            </p>
            <p>
              For immigrant founders: Don't accept discrimination as normal. You're not trying to fit into an existing system. You're building the next generation of companies.
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* Conclusion */}
      <motion.section
        className="imm-conclusion"
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
          Conclusion: The Privilege of Being Needed
        </motion.h2>
        <motion.div
          className="conclusion-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p>
            I'm an immigrant founder building in an underserved space. I have 12 months of legal work authorization. I've raised $250K, not $5M.
          </p>
          <p>
            By standard venture metrics, I'm behind.
          </p>
          <p className="clarity-text">
            But here's what I have: clarity on why I'm building this.
          </p>
          <p>
            I'm not building Neuralyn because it's a good market opportunity (though it is). I'm building it because 2.6 billion people need it. Because I've lived the need.
          </p>
          <p>
            That clarity attracts the right people. The right investors. The right team.
          </p>
          <p>
            And on hard days—when I'm debugging a multilingual NLP model at 2 AM, or when an investor passes because of visa concerns—that clarity is enough.
          </p>
          <p className="message-text">
            To other immigrant founders: Your immigration status, your accent, your background—these aren't weaknesses. They're your unfair advantages.
          </p>
          <p className="message-text">
            You see what others can't. You understand markets that others ignore. You have conviction that others lack.
          </p>
          <p className="final-message">
            That's what builds transformative companies.
          </p>
        </motion.div>
      </motion.section>

      {/* Resources */}
      <motion.section
        className="imm-resources"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="resources-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Resources for Immigrant Founders
        </motion.h2>
        <motion.div
          className="resources-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="resources-grid">
            <div className="resource-section">
              <h3>
                <FiUsers className="section-icon" />
                Organizations & Communities
              </h3>
              <ul>
                <li><strong>Immigrant Founders:</strong> Slack community for immigrant founders</li>
                <li><strong>Techstars:</strong> Diversity-focused programs with immigrant founder support</li>
                <li><strong>Y Combinator:</strong> Actively backs immigrant founders; attend office hours</li>
                <li><strong>Susa Ventures:</strong> VC explicitly supportive of immigrant founders</li>
                <li><strong>Backstage Capital:</strong> Focus on underestimated founders</li>
              </ul>
            </div>

            <div className="resource-section">
              <h3>
                <FiShield className="section-icon" />
                Legal & Visa
              </h3>
              <ul>
                <li><strong>Immigration Lawyers:</strong> Get referrals from other founders or startup communities</li>
                <li><strong>IIUSA (SEVIS Community):</strong> Resources for students transitioning to work visa</li>
                <li><strong>INFOUSA:</strong> Non-profit with immigration resources</li>
              </ul>
            </div>

            <div className="resource-section">
              <h3>
                <FiTrendingUp className="section-icon" />
                Mentorship & Funding
              </h3>
              <ul>
                <li><strong>Founders Fund:</strong> Known for backing bold, unconventional founders</li>
                <li><strong>a16z:</strong> Has immigrant founder mentors</li>
                <li><strong>Facebook's Startup Program:</strong> Has immigrant-focused cohorts</li>
                <li><strong>500 Global:</strong> Strong immigrant founder portfolio</li>
              </ul>
            </div>

            <div className="resource-section">
              <h3>
                <FiBook className="section-icon" />
                Reading
              </h3>
              <ul>
                <li>"From Startup to Scale-up" (Ames & Seagraves): Includes chapters on international founders</li>
                <li>"The Lean Startup" (Ries): Mindset for resource-constrained teams</li>
                <li>"Zero to One" (Thiel): Foundational thinking for contrarian founders</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Author Bio */}
      <motion.section
        className="imm-author-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="author-bio-box">
          <h3>About the Author</h3>
          <p>
            <strong>Nithin Rajulapati</strong> is an immigrant founder building Neuralyn—a voice-first, emotionally intelligent mental wellness AI for 2.6 billion underserved people globally.
          </p>
          <p>
            He's experienced the full immigrant founder journey: international student on F-1 visa, OPT work authorization, visa uncertainty, investor skepticism, and the privilege of building something that matters.
          </p>
          <p>
            He writes about building, fundraising, visa reality, and why immigrant founders are the future of tech.
          </p>
          <div className="author-links">
            <a href="https://www.linkedin.com/in/nithin-rajulapati-69133a1aa" target="_blank" rel="noopener noreferrer">
              <FiLink className="link-icon" /> LinkedIn
            </a>
            <span>|</span>
            <a href="https://github.com/Nani1-glitch" target="_blank" rel="noopener noreferrer">
              <FiLink className="link-icon" /> GitHub
            </a>
            <span>|</span>
            <a href="mailto:cto@neuralyn.health" target="_blank" rel="noopener noreferrer">
              <FiLink className="link-icon" /> Email
            </a>
          </div>
          <p className="closing-quote">
            The best founders aren't always born with privilege. Sometimes they're born from necessity.
          </p>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default BuildingAsImmigrant;

