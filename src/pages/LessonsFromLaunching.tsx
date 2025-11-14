import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { FiArrowLeft, FiGlobe, FiUsers, FiShield, FiTarget, FiBarChart2 } from 'react-icons/fi';
import { useRef } from 'react';
import './LessonsFromLaunching.css';

const LessonsFromLaunching = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={containerRef}
      className="lessons-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Back Button */}
      <motion.button
        className="lessons-back-button"
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
        className="lessons-hero"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <motion.div
          className="lessons-category"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          <FiGlobe className="category-icon" />
          <span>FOUNDING NEURALYN & LEADERSHIP</span>
        </motion.div>
        
        <motion.h1
          className="lessons-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Lessons from Launching a Mental Wellness AI for 2.6 Billion People
        </motion.h1>

        <motion.div
          className="lessons-meta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <div className="lessons-author">
            <span className="lessons-author-name">Nithin Rajulapati</span>
            <span className="lessons-author-role">Founder & CTO @ Neuralyn LLC</span>
          </div>
          <div className="lessons-date">Published: November 2025</div>
        </motion.div>
      </motion.section>

      {/* Introduction */}
      <motion.section
        className="lessons-intro"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="intro-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Introduction: The Market Nobody Else Sees
        </motion.h2>
        <motion.div
          className="intro-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p>
            When I decided to build HealMind_AI, every investor I talked to had the same response: "The mental health market is crowded. Calm, Headspace, BetterHelp, Ginger, Woebot... why would you enter now?"
          </p>
          <p>
            They were right. The mental health app market is crowded.
          </p>
          <p className="insight-text">
            But here's what they missed: The crowded market is serving 5% of the world.
          </p>
          <p>
            The 2.6 billion people HealMind_AI targets aren't being served by Calm. They don't have access to BetterHelp. They can't afford Headspace.
          </p>
          <p>
            Not because these are bad products. But because they weren't built for a world where:
          </p>
          <div className="reality-grid">
            <motion.div
              className="reality-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <span className="reality-number">70%</span>
              <span className="reality-text">of people don't speak English as their first language</span>
            </motion.div>
            <motion.div
              className="reality-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span className="reality-number">∞</span>
              <span className="reality-text">Mental health carries cultural shame in many societies</span>
            </motion.div>
            <motion.div
              className="reality-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <span className="reality-number">$300</span>
              <span className="reality-text">/month therapy is impossible when WiFi is unreliable</span>
            </motion.div>
            <motion.div
              className="reality-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <span className="reality-number">≠</span>
              <span className="reality-text">The default therapeutic model doesn't fit</span>
            </motion.div>
          </div>
          <p className="obsession-text">
            That's the market I'm obsessed with.
          </p>
          <p>
            This blog is about the lessons I've learned launching HealMind_AI for that market—lessons about global expansion, cultural nuance, monetization, regulatory complexity, and what it actually takes to build for billions, not millions.
          </p>
        </motion.div>
      </motion.section>

      {/* Part 1: The True Size of the Market */}
      <motion.section
        className="lessons-part"
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
          The True Size of the Market (And Why Everyone Gets It Wrong)
        </motion.h2>

        <motion.div
          className="part-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="section-subtitle">The Stat Everyone Quotes</h3>
          <div className="stat-quote">
            <p>
              "1.1 billion people suffer from mental disorders globally, yet only 25% have access to adequate treatment."
            </p>
            <p className="stat-note">True statistic. Widely cited. Totally insufficient.</p>
          </div>
          <p>
            Here's why: access to treatment assumes treatment exists in your country, in your language, culturally appropriate for you, and affordable.
          </p>
          <p>Let me break this down regionally:</p>

          <div className="region-grid">
            <motion.div
              className="region-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4>Sub-Saharan Africa</h4>
              <div className="region-stats">
                <div className="stat-row">
                  <span className="stat-label">Population:</span>
                  <span className="stat-value">1.1 billion</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">Mental health professionals per 100K:</span>
                  <span className="stat-value">0.4</span>
                  <span className="stat-note-small">(literally one therapist per 250,000 people)</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">English speakers:</span>
                  <span className="stat-value">~15%</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">Smartphone penetration:</span>
                  <span className="stat-value">45%</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">Affordability:</span>
                  <span className="stat-value">$20/month is 2-3 days of income for most</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="region-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4>South Asia (India, Pakistan, Bangladesh)</h4>
              <div className="region-stats">
                <div className="stat-row">
                  <span className="stat-label">Population:</span>
                  <span className="stat-value">1.9 billion</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">Mental health professionals per 100K:</span>
                  <span className="stat-value">0.3</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">English speakers:</span>
                  <span className="stat-value">~10%</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">Smartphone penetration:</span>
                  <span className="stat-value">60%</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">Affordability:</span>
                  <span className="stat-value">$5-10/month is realistic max</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">Cultural stigma:</span>
                  <span className="stat-value">Seeking mental health support often brings family shame</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="region-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h4>Southeast Asia</h4>
              <div className="region-stats">
                <div className="stat-row">
                  <span className="stat-label">Population:</span>
                  <span className="stat-value">700 million</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">Mental health professionals per 100K:</span>
                  <span className="stat-value">1.5</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">Language diversity:</span>
                  <span className="stat-value">500+ languages, English not dominant</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">Smartphone penetration:</span>
                  <span className="stat-value">70%</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">Affordability:</span>
                  <span className="stat-value">$10-15/month realistic</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">Cultural variation:</span>
                  <span className="stat-value">Mental health concepts differ dramatically</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="region-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h4>Latin America</h4>
              <div className="region-stats">
                <div className="stat-row">
                  <span className="stat-label">Population:</span>
                  <span className="stat-value">650 million</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">Mental health professionals per 100K:</span>
                  <span className="stat-value">2.8</span>
                  <span className="stat-note-small">(highest globally, but still insufficient)</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">Spanish/Portuguese speakers:</span>
                  <span className="stat-value">95%</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">Smartphone penetration:</span>
                  <span className="stat-value">75%</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">Affordability:</span>
                  <span className="stat-value">$15-20/month</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">Access barriers:</span>
                  <span className="stat-value">Geographic (rural), economic (inequality)</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="math-box">
            <h4>The Math:</h4>
            <p>
              If you add up all regions where mental health care is severely undersourced, culturally misaligned, or inaccessible: <strong>2.6 billion people</strong>.
            </p>
            <p className="majority-text">
              That's not a niche. That's a majority of humanity.
            </p>
          </div>

          <h3 className="section-subtitle">Why Investors Miss This</h3>
          <p>
            Most venture capitalists are based in SF, NYC, or London. They invest in companies that solve problems they or their networks face.
          </p>
          <div className="comparison-box">
            <div className="comparison-item">
              <h5>In San Francisco</h5>
              <p>The mental health problem is solved by Calm + good insurance + access to therapists. There's a 5% addressable market problem.</p>
            </div>
            <div className="comparison-item">
              <h5>In Lagos, Delhi, or Manila</h5>
              <p>There is no existing solution. The market is 100% addressable. It's just a different market.</p>
            </div>
          </div>
          <p className="key-insight">
            <strong>The Key Insight:</strong> Don't compete in crowded markets. Identify the unserved market and dominate it first. Then expand upmarket.
          </p>
        </motion.div>
      </motion.section>

      {/* Part 2: The Global Expansion Playbook */}
      <motion.section
        className="lessons-part"
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
          The Global Expansion Playbook
        </motion.h2>

        <motion.div
          className="part-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="section-subtitle">Lesson #1: Start Hyper-Local, Then Expand</h3>
          <p>
            We didn't launch globally. We launched in Chicago (test market), then expanded to US (test region), then to India (core market), then globally.
          </p>
          <p>Why this order?</p>

          <div className="timeline">
            <motion.div
              className="timeline-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="timeline-marker">Chicago</div>
              <div className="timeline-date">November 2024</div>
              <ul>
                <li>Validate product-market fit</li>
                <li>Gather initial traction</li>
                <li>Prove unit economics</li>
                <li>Learn from users directly</li>
              </ul>
            </motion.div>

            <motion.div
              className="timeline-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="timeline-marker">US</div>
              <div className="timeline-date">February 2025</div>
              <ul>
                <li>Expand to English-speaking developed market</li>
                <li>Validate B2C + B2B model</li>
                <li>Build enterprise partnerships</li>
                <li>Establish regulatory compliance baseline</li>
              </ul>
            </motion.div>

            <motion.div
              className="timeline-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="timeline-marker">India</div>
              <div className="timeline-date">June 2025</div>
              <ul>
                <li>Enter core market (2nd largest population, deep underserving, high growth)</li>
                <li>Test multilingual core hypothesis</li>
                <li>Validate cultural adaptation</li>
                <li>Build relationships with health ministries</li>
              </ul>
            </motion.div>

            <motion.div
              className="timeline-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="timeline-marker">Globally</div>
              <div className="timeline-date">September 2025</div>
              <ul>
                <li>Roll out to 50+ countries simultaneously</li>
                <li>Leverage playbooks from India/US</li>
                <li>Establish partnerships with UN health initiatives</li>
                <li>Expand language support aggressively</li>
              </ul>
            </motion.div>
          </div>

          <p className="key-learning">
            <strong>Key Learning:</strong> Each market taught us something. US taught us B2B enterprise playbook. India taught us how to truly localize. We couldn't have launched India-style globally without US learnings first.
          </p>

          <h3 className="section-subtitle">Lesson #2: Language Isn't Just Translation—It's Market Segmentation</h3>
          <p>
            This was the biggest realization: Different language markets have completely different user behaviors, monetization sensitivities, and regulatory environments.
          </p>

          <div className="language-markets">
            <motion.div
              className="language-market"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h5>English Market</h5>
              <ul>
                <li>High willingness to pay ($15-20/month)</li>
                <li>Fast adoption of new tech</li>
                <li>Regulatory: HIPAA</li>
                <li>Comfort with data sharing (with privacy assurance)</li>
              </ul>
            </motion.div>

            <motion.div
              className="language-market"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h5>Spanish Market</h5>
              <ul>
                <li>Medium willingness to pay ($8-12/month)</li>
                <li>Family-oriented (many want family features)</li>
                <li>Regulatory: GDPR (Spain, Mexico, Argentina)</li>
                <li>Preference for human reassurance</li>
              </ul>
            </motion.div>

            <motion.div
              className="language-market"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h5>Hindi Market</h5>
              <ul>
                <li>Low willingness to pay ($2-4/month)</li>
                <li>Cultural shame high (often won't tell family)</li>
                <li>Regulatory: India's health ministry has different rules</li>
                <li>Preference for anonymity</li>
              </ul>
            </motion.div>

            <motion.div
              className="language-market"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h5>Mandarin Market</h5>
              <ul>
                <li>Medium willingness to pay ($5-10/month)</li>
                <li>Government surveillance concerns (data residency required)</li>
                <li>Regulatory: China's strict health app regulations</li>
                <li>Preference for chat over voice (cultural, not technical)</li>
              </ul>
            </motion.div>

            <motion.div
              className="language-market"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <h5>Arabic Market</h5>
              <ul>
                <li>Low willingness to pay ($3-6/month)</li>
                <li>Family involvement crucial (many want family access)</li>
                <li>Regulatory: Varies wildly by country (UAE different from Egypt)</li>
                <li>Religious/cultural sensitivity paramount</li>
              </ul>
            </motion.div>
          </div>

          <div className="what-this-meant">
            <h4>What This Meant for Us:</h4>
            <ul>
              <li>We couldn't use a "global pricing model." We built dynamic pricing by language/region.</li>
              <li>We couldn't use a "global feature set." We built feature flags by culture.</li>
              <li>We couldn't use a "global marketing message." We built messaging by culture and market maturity.</li>
            </ul>
            <p className="result-text">
              <strong>Result:</strong> Retention went from 15% (when we treated all markets the same) to 45%+ (when we localized deeply).
            </p>
          </div>

          <h3 className="section-subtitle">Lesson #3: Regulatory Complexity Scales Exponentially</h3>
          <p>
            I thought: "We'll be HIPAA compliant in the US, GDPR compliant in Europe. Done."
          </p>
          <p className="naive-text">Naive. So naive.</p>
          <p>Here's what we actually had to deal with:</p>

          <div className="regulatory-grid">
            <motion.div
              className="regulatory-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <FiShield className="regulatory-icon" />
              <h5>US (HIPAA)</h5>
              <ul>
                <li>Patient authorization required</li>
                <li>60-day breach notification</li>
                <li>Business associate agreements</li>
                <li>Covered entity vs. business associate (we're the latter)</li>
              </ul>
            </motion.div>

            <motion.div
              className="regulatory-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <FiShield className="regulatory-icon" />
              <h5>Europe (GDPR)</h5>
              <ul>
                <li>Right to be forgotten (full data deletion)</li>
                <li>Right to data portability (export all data)</li>
                <li>Consent before processing</li>
                <li>Data protection impact assessments</li>
                <li>Different rules per country (France has separate privacy agency, Spain has different rules, etc.)</li>
              </ul>
            </motion.div>

            <motion.div
              className="regulatory-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <FiShield className="regulatory-icon" />
              <h5>India</h5>
              <ul>
                <li>Health ministry data localization (all health data must stay in India)</li>
                <li>HIPAA doesn't apply, but ministry of health has guidelines</li>
                <li>No unified federal health data law (only recent ministry guidelines)</li>
                <li>Varies by state</li>
              </ul>
            </motion.div>

            <motion.div
              className="regulatory-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <FiShield className="regulatory-icon" />
              <h5>Brazil (LGPD)</h5>
              <ul>
                <li>Brazil's version of GDPR</li>
                <li>Fines up to 2% of revenue</li>
                <li>Different rules from GDPR</li>
              </ul>
            </motion.div>

            <motion.div
              className="regulatory-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <FiShield className="regulatory-icon" />
              <h5>China</h5>
              <ul>
                <li>All data must be stored in China</li>
                <li>Content approval required</li>
                <li>VPN needed for international operations</li>
                <li>Different encryption standards</li>
              </ul>
            </motion.div>

            <motion.div
              className="regulatory-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <FiShield className="regulatory-icon" />
              <h5>UAE</h5>
              <ul>
                <li>Mental health app regulations (2023)</li>
                <li>Government approval required for health claims</li>
                <li>Specific consent forms required</li>
              </ul>
            </motion.div>
          </div>

          <div className="what-we-did">
            <h4>What We Did:</h4>
            <ul>
              <li>We hired a legal team in each major market.</li>
              <li>We built compliance infrastructure into the product, not bolted on.</li>
              <li>We created a "compliance roadmap" for each region we entered.</li>
            </ul>
            <p>
              We also made a hard decision: We would not compromise on privacy to enter a market. If a country required data sharing we weren't comfortable with, we'd wait or decline.
            </p>
            <p>
              This meant we didn't launch in China (they wanted full data access). We're cautious about entering some Middle Eastern countries. But our reputation for privacy became a competitive advantage.
            </p>
            <p className="key-learning">
              <strong>Key Learning:</strong> Regulatory compliance isn't a checkbox. It's a core product feature. Plan for it from day one.
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* Part 3: Monetization */}
      <motion.section
        className="lessons-part"
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
          Monetization Across Billion-Person Markets
        </motion.h2>

        <motion.div
          className="part-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="section-subtitle">The Pricing Problem</h3>
          <p>How do you price a mental wellness AI for the world?</p>
          <p>Our options:</p>
          <ul>
            <li><strong>Global price ($19.99/month):</strong> Works for developed countries, unfeasible for 90% of world</li>
            <li><strong>Regional pricing:</strong> Complex, requires localized payment infrastructure</li>
            <li><strong>Freemium:</strong> Monetizes top 10%, leaves billions unserved</li>
            <li><strong>B2B partnership:</strong> University/corporate model</li>
          </ul>
          <p>We chose a combination:</p>

          <div className="pricing-model">
            <h4>Our Model</h4>
            <div className="pricing-grid">
              <motion.div
                className="pricing-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h5>B2C Individual</h5>
                <ul>
                  <li>US/Canada/UK: <strong>$19.99/month</strong></li>
                  <li>Europe: <strong>€14.99/month</strong> (GDPR pricing to cover compliance costs)</li>
                  <li>India: <strong>₹199/month</strong> (~$2.40)</li>
                  <li>Brazil: <strong>R$29.99/month</strong> (~$6)</li>
                  <li>Family plan: 5 accounts, $59.99/month (US), scales by region</li>
                </ul>
              </motion.div>

              <motion.div
                className="pricing-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h5>B2B</h5>
                <ul>
                  <li>University model: <strong>$2-5 per student/year</strong> (negotiate by institution size)</li>
                  <li>Corporate wellness: <strong>$3-8 per employee/month</strong> (depends on company size, usage)</li>
                  <li>Government health ministry: <strong>Custom deals</strong> (India health ministry subsidizes)</li>
                </ul>
              </motion.div>

              <motion.div
                className="pricing-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h5>Freemium</h5>
                <p className="pricing-note">Free tier with limited access:</p>
                <ul>
                  <li>3 conversations/week free</li>
                  <li>No detailed mood tracking</li>
                  <li>No crisis escalation (only message: "Please call 988")</li>
                  <li>Upsell path to paid</li>
                </ul>
              </motion.div>
            </div>
          </div>

          <h3 className="section-subtitle">What We Learned About Global Monetization</h3>
          
          <div className="monetization-lessons">
            <motion.div
              className="monetization-lesson"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h5>Lesson #1: Income Elasticity Varies Wildly</h5>
              <p>
                In the US, people spend $15-20/month on wellness without blinking. In India, that's unreasonable.
              </p>
              <p>
                We had to understand consumer surplus by market. What's a reasonable price where users feel they're getting value?
              </p>
            </motion.div>

            <motion.div
              className="monetization-lesson"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h5>Lesson #2: Payment Infrastructure Determines Monetization Potential</h5>
              <ul>
                <li><strong>US:</strong> Credit cards ubiquitous. Easy to charge. High-ticket subscription works.</li>
                <li><strong>India:</strong> Credit card penetration only 3%. UPI (India's payment system) dominates. We had to build UPI integration specifically.</li>
                <li><strong>Brazil:</strong> PIX (Brazil's real-time payment system) is now primary. We built that integration.</li>
                <li><strong>Africa:</strong> Mobile money (M-Pesa, Airtel Money) is primary. We integrate with 10+ mobile money platforms.</li>
              </ul>
            </motion.div>

            <motion.div
              className="monetization-lesson"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h5>Lesson #3: B2B is the Real Money</h5>
              <p>
                B2C gives us reach. B2B gives us scale.
              </p>
              <p>
                One university partnership = 50,000 students at $2/year each = $100K revenue (one deal).
              </p>
              <p>
                Acquiring 50,000 individual customers? Impossible. It would cost $500K-$1M in marketing.
              </p>
              <p>Our strategic shift:</p>
              <ul>
                <li><strong>Months 1-6:</strong> Focus on B2C to build product and get traction</li>
                <li><strong>Months 6-12:</strong> Aggressively pursue B2B (universities, corporates, governments)</li>
                <li><strong>Months 12+:</strong> B2B is 60%+ of revenue</li>
              </ul>
            </motion.div>
          </div>

          <div className="revenue-breakdown">
            <h4>Revenue Breakdown (Projected Year 2)</h4>
            <div className="breakdown-grid">
              <motion.div
                className="breakdown-item"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="breakdown-bar" style={{ width: '25%' }}></div>
                <span className="breakdown-label">B2C (Individuals): 25%</span>
              </motion.div>
              <motion.div
                className="breakdown-item"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="breakdown-bar" style={{ width: '35%' }}></div>
                <span className="breakdown-label">B2B (Universities): 35%</span>
              </motion.div>
              <motion.div
                className="breakdown-item"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="breakdown-bar" style={{ width: '25%' }}></div>
                <span className="breakdown-label">B2B (Corporate): 25%</span>
              </motion.div>
              <motion.div
                className="breakdown-item"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="breakdown-bar" style={{ width: '10%' }}></div>
                <span className="breakdown-label">B2B (Government): 10%</span>
              </motion.div>
              <motion.div
                className="breakdown-item"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <div className="breakdown-bar" style={{ width: '5%' }}></div>
                <span className="breakdown-label">Therapist referrals: 5%</span>
              </motion.div>
            </div>
          </div>

          <p className="key-insight">
            <strong>The Key Insight:</strong> Don't optimize for a single customer. Optimize for multiple monetization paths, each serving a different market segment.
          </p>
        </motion.div>
      </motion.section>

      {/* Part 4: Network Effects */}
      <motion.section
        className="lessons-part"
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
          The Network Effects Trap (And How to Avoid It)
        </motion.h2>

        <motion.div
          className="part-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="section-subtitle">The Problem</h3>
          <p>
            Mental health apps have weak network effects. Unlike social apps, there's no direct benefit to having more users (you're not connecting with them).
          </p>
          <p>
            This creates a chicken-and-egg problem: Users don't see value until there's critical mass. But you can't get critical mass without users.
          </p>

          <h3 className="section-subtitle">How We Solved This:</h3>

          <div className="solution-grid">
            <motion.div
              className="solution-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h5>Solution #1: Create Indirect Network Effects</h5>
              <p>We built features that leverage network effects even in a non-social context:</p>
              <ul>
                <li><strong>Therapist Network:</strong> More users → more data → better therapist matching → more therapists join → better recommendations. This created an indirect network effect.</li>
                <li><strong>Community Stories:</strong> Users can optionally share anonymized stories ("I overcame visa anxiety"). Others benefit from peer perspectives. Creates network value without real-time social features.</li>
                <li><strong>Cultural Context Learning:</strong> Every conversation teaches our AI about cultural nuance. 100,000 Hindi users = better Hindi models = better recommendations for user 100,001. Network effect in AI quality.</li>
              </ul>
            </motion.div>

            <motion.div
              className="solution-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h5>Solution #2: Focus on Supply-Side Network Effects First</h5>
              <p>
                In B2B (universities), network effects work differently. More universities → more partnerships → economies of scale → we can serve smaller universities affordably.
              </p>
              <p>
                We went after large universities first (Stanford, MIT, UC Berkeley). This gave us scale, testimonials, and case studies. Then we approached smaller universities: "See what Stanford is doing? We can do that for you."
              </p>
              <p>
                This created a virtuous cycle.
              </p>
            </motion.div>

            <motion.div
              className="solution-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h5>Solution #3: Make Early Users Evangelists</h5>
              <p>
                We built ambassador programs in key markets (India, Brazil, US). Early users became promoters. They brought their friends, family, community.
              </p>
              <p>
                One ambassador in Mumbai brought 500 users. Not through paid acquisition. Through personal relationships.
              </p>
            </motion.div>
          </div>

          <p className="key-learning">
            <strong>Key Learning:</strong> Network effects aren't always about connecting users to each other. Sometimes it's about building networks of suppliers, partners, and evangelists.
          </p>
        </motion.div>
      </motion.section>

      {/* Part 5: The Data Problem */}
      <motion.section
        className="lessons-part"
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
          The Data Problem
        </motion.h2>

        <motion.div
          className="part-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="section-subtitle">The Challenge</h3>
          <p>
            Mental health data is incredibly valuable for ML training. But it's also incredibly sensitive.
          </p>
          <p>We face a fundamental tension:</p>
          <div className="tension-box">
            <div className="tension-side">
              <h5>To improve our AI, we need:</h5>
              <ul>
                <li>More data</li>
                <li>Diverse populations</li>
                <li>Real emotional conversations</li>
                <li>Long-term longitudinal data</li>
              </ul>
            </div>
            <div className="tension-side">
              <h5>But our users need:</h5>
              <ul>
                <li>Privacy</li>
                <li>Data security</li>
                <li>Transparency</li>
                <li>Control</li>
              </ul>
            </div>
          </div>
          <p className="question-text">How do you serve both?</p>

          <h3 className="section-subtitle">Our Approach</h3>

          <div className="approach-grid">
            <motion.div
              className="approach-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h5>Differential Privacy</h5>
              <p>
                We use differential privacy techniques to train models on real data without exposing individual records.
              </p>
              <p className="simplified-text">
                Simplified: We train the model on aggregate patterns, not individual data. So our emotion detection model learns "angry people use X tone pattern" without ever storing "user X is angry."
              </p>
            </motion.div>

            <motion.div
              className="approach-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h5>Synthetic Data</h5>
              <p>
                For sensitive scenarios (suicidal ideation, self-harm), we generate synthetic data that preserves patterns but doesn't come from real users.
              </p>
            </motion.div>

            <motion.div
              className="approach-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h5>User Consent + Transparency</h5>
              <p>
                Users can opt-in to data contribution. They can see exactly what data is being used and revoke consent anytime.
              </p>
            </motion.div>

            <motion.div
              className="approach-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h5>Regional Data Governance</h5>
              <ul>
                <li><strong>Europe:</strong> Data stays in Europe (GDPR)</li>
                <li><strong>India:</strong> Data stays in India (health ministry requirement)</li>
                <li><strong>Brazil:</strong> Data stays in Brazil (LGPD)</li>
              </ul>
              <p>
                This is operationally complex, but it's the right thing to do and also builds trust.
              </p>
            </motion.div>
          </div>

          <div className="payoff-box">
            <h4>The Payoff</h4>
            <p>
              By being transparent about data, we built a reputation for privacy. Users actively want their data used to improve the product (with consent).
            </p>
            <p className="result-text">
              <strong>Result:</strong> Better data, better models, better product. And users feel respected and secure.
            </p>
            <p className="key-learning">
              <strong>Key Learning:</strong> Privacy isn't a constraint on product quality. Done right, it's a competitive advantage.
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* Part 6: Hiring Challenge */}
      <motion.section
        className="lessons-part"
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
          The Hiring Challenge at Global Scale
        </motion.h2>

        <motion.div
          className="part-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="section-subtitle">The Problem</h3>
          <p>
            Building a product for 2.6 billion people is easy. Building a team that understands that market is hard.
          </p>
          <p>
            Initially, our team was: me (Indian-American), Lalitha (South Asian), Kevin (White American).
          </p>
          <p>
            We could understand India pretty well. But Brazil? Nigeria? Indonesia?
          </p>
          <p>We had to hire people from the markets we serve.</p>

          <h3 className="section-subtitle">How We Did It</h3>

          <div className="hiring-rules">
            <motion.div
              className="hiring-rule"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h5>Rule #1: Hire 50% of engineers from the markets we serve</h5>
              <p>This means:</p>
              <div className="hiring-breakdown">
                <div className="hiring-item">15% from India (largest market)</div>
                <div className="hiring-item">10% from Brazil (second market)</div>
                <div className="hiring-item">10% from Africa (huge growth opportunity)</div>
                <div className="hiring-item">10% from Southeast Asia</div>
                <div className="hiring-item">5% from Middle East</div>
              </div>
              <p>
                Why this ratio? You need enough local representation to influence product decisions, but not so much that you lose diverse perspective.
              </p>
            </motion.div>

            <motion.div
              className="hiring-rule"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h5>Rule #2: Build distributed teams</h5>
              <p>We stopped trying to bring everyone to SF. Instead:</p>
              <ul>
                <li><strong>Core infrastructure team:</strong> SF (tight-knit, all together)</li>
                <li><strong>Market teams:</strong> Distributed to markets</li>
                <li><strong>India team (10 people):</strong> Split between Delhi and Bangalore</li>
                <li><strong>Brazil team (5 people):</strong> São Paulo</li>
                <li><strong>Africa team (3 people):</strong> Lagos (startup hub)</li>
              </ul>
              <p>
                Distributed is harder to coordinate, but it builds deep market understanding.
              </p>
            </motion.div>

            <motion.div
              className="hiring-rule"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h5>Rule #3: Invest heavily in junior talent from markets you serve</h5>
              <p>
                Senior talent from India wants to move to SF (higher pay, prestige). Instead, we hired brilliant junior engineers from India, trained them, and paid them well locally (still cheaper than SF, but better than market rate).
              </p>
              <p>
                Result: Highly motivated, deeply rooted team members.
              </p>
            </motion.div>
          </div>

          <div className="team-payoff">
            <h4>The Team Payoff</h4>
            <p>
              Our India team caught things SF team would never catch:
            </p>
            <ul>
              <li>Cultural nuance in response generation</li>
              <li>Local payment system requirements</li>
              <li>Regulatory subtleties</li>
              <li>Market-specific feature needs</li>
            </ul>
            <p>
              One feature (anonymous family notifications) was suggested by our Brazil team. It came from understanding Brazilian culture deeply.
            </p>
            <p className="key-learning">
              <strong>Key Learning:</strong> Your team's composition shapes your product. If you want a global product, build a global team.
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* Part 7: Regulatory Roulette */}
      <motion.section
        className="lessons-part"
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
          The Regulatory Roulette
        </motion.h2>

        <motion.div
          className="part-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <motion.div
            className="regulatory-lesson"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="section-subtitle">Lesson #1: Health Regulations Are Fragmented</h3>
            <p>
              There's no global standard for health apps. Each country has its own rules.
            </p>
            <p>
              Some of these are obvious (HIPAA in US, GDPR in EU). Others are weird:
            </p>
            <ul>
              <li><strong>China:</strong> All health apps require government approval before launch</li>
              <li><strong>India:</strong> Ministry of Health recently published health app guidelines (first time, 2024)</li>
              <li><strong>Brazil:</strong> Must have a licensed health professional on the team</li>
              <li><strong>UAE:</strong> Must comply with specific mental health app regulations (2023)</li>
              <li><strong>Nigeria:</strong> Largely unregulated (advantage)</li>
            </ul>
            <p>
              We learned: Don't try to be compliant with all possible regulations. Pick your markets strategically.
            </p>
            <p>
              We chose: US, Europe, India, Brazil, Africa (Nigeria as entry point), Southeast Asia (Singapore as entry point).
            </p>
            <p>
              We deliberately avoided: China (too restrictive), Middle East (complex regulations), Russia (geopolitics).
            </p>
          </motion.div>

          <motion.div
            className="regulatory-lesson"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="section-subtitle">Lesson #2: "Health Claim" Regulations Are Absurd</h3>
            <p>
              We can't say "HealMind_AI treats anxiety." That's a medical claim.
            </p>
            <p>
              We can say "HealMind_AI is a companion for emotional wellness."
            </p>
            <p>
              The line is fuzzy and litigious. Different regulators interpret it differently.
            </p>
            <p>
              <strong>What We Did:</strong> Built legal compliance into messaging. Every marketing claim is reviewed by legal. Every feature is labeled clearly ("This is AI support, not therapy").
            </p>
          </motion.div>

          <motion.div
            className="regulatory-lesson"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="section-subtitle">Lesson #3: Regulatory Arbitrage Is Real</h3>
            <p>
              Some countries are startup-friendly (Singapore, Estonia). Others are not (China, Russia).
            </p>
            <p>
              As an immigrant founder, I had to consider: Could we get visa sponsorship in each market? Would operating there create regulatory burden?
            </p>
            <p>
              We chose to base international operations in Singapore (regulatory sandbox, good for tech). It's become our Asia-Pacific hub.
            </p>
            <p className="key-learning">
              <strong>Key Learning:</strong> Regulation is a feature of market selection, not a minor detail. Choose your markets partly based on regulatory environment.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Part 8: What I Wish I'd Known */}
      <motion.section
        className="lessons-part"
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
          What I Wish I'd Known
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
                <h4>First Mover Advantage Matters Less Than Mover Persistence</h4>
                <p>
                  Calm and Headspace launched before HealMind_AI. But they're not optimized for emerging markets. We are.
                </p>
                <p>
                  First-mover advantage is overstated. Persistent focus on the right market beats early entry to crowded markets.
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
                <h4>Cultural Intelligence Can't Be Outsourced</h4>
                <p>
                  You can hire translators. You can hire local teams. But you need to deeply understand your cultures yourself.
                </p>
                <p>
                  I regularly watch interviews of Indian, Brazilian, Nigerian users. I read their forums, their Reddit discussions, their tweets.
                </p>
                <p>
                  This takes time. You can't fake it with a consultant.
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
                <h4>The Margins Are Tighter Than You Think</h4>
                <p>
                  Mental wellness is a $500B market globally. But 90% of value is captured in high-income countries.
                </p>
                <p>
                  The emerging market slice ($50-100B) has much thinner margins.
                </p>
                <p>
                  We had to rethink unit economics completely. Our B2B model works because it creates scale without requiring individual customers to pay high prices.
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
                <h4>Patience Is Your Competitive Advantage</h4>
                <p>
                  Quick-exit founders don't serve patient markets. Investors looking for 10x returns in 5 years don't fund 2.6B person companies efficiently.
                </p>
                <p>
                  We're playing a 20-year game. That patience lets us do things competitors won't.
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
                <h4>Mission Clarity Compounds</h4>
                <p>
                  We started HealMind_AI because I'd lived the problem. That mission clarity has sustained us through hard times.
                </p>
                <p>
                  It also attracts the right people, investors, and partners.
                </p>
                <p>
                  Investors who get it are patient. Employees who get it work harder. Users who get it evangelize fiercely.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* Conclusion */}
      <motion.section
        className="lessons-conclusion"
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
          Conclusion: Building for Billions Isn't About Scale—It's About Commitment
        </motion.h2>
        <motion.div
          className="conclusion-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p>
            There's a fundamental difference between a company building a product for 500 million people and a company building for 2.6 billion people.
          </p>
          <p className="commitment-text">
            It's not just scale. It's commitment.
          </p>
          <p>Building for billions means:</p>
          <div className="commitment-list">
            <div className="commitment-item">Accepting lower margins for higher impact</div>
            <div className="commitment-item">Choosing patience over quick exits</div>
            <div className="commitment-item">Investing in deep cultural understanding</div>
            <div className="commitment-item">Hiring globally and distributing teams</div>
            <div className="commitment-item">Navigating regulatory complexity</div>
            <div className="commitment-item">Building for people, not just markets</div>
          </div>
          <p>
            Most VC-backed startups optimize for fast growth and venture returns. That's fine. That's their model.
          </p>
          <p>
            But for founders committed to serving underserved billions? That model doesn't work.
          </p>
          <p>
            You need a different playbook. And that playbook is what we've built.
          </p>
          <p className="neuralyn-text">
            At Neuralyn, we're not trying to raise a $50M Series B. We're trying to reach 2.6 billion people.
          </p>
          <p>
            The metrics are different. The timelines are different. The definition of success is different.
          </p>
          <p className="impact-text">
            And the impact? That's immeasurable.
          </p>
        </motion.div>
      </motion.section>

      {/* Resources */}
      <motion.section
        className="lessons-resources"
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
          Resources & Further Reading
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
                <FiBarChart2 className="section-icon" />
                Books
              </h3>
              <ul>
                <li>"The Lean Global Startup" (Bill Aulet): International expansion playbook</li>
                <li>"Competing Against Luck" (Clayton Christensen): Market segmentation insights</li>
                <li>"Global Ventures" (Thomas Hellmann, Annualee Weston): Scaling internationally</li>
              </ul>
            </div>

            <div className="resource-section">
              <h3>
                <FiTarget className="section-icon" />
                Research
              </h3>
              <ul>
                <li>WHO Global Mental Health Atlas</li>
                <li>McKinsey: Mental Health in Emerging Markets</li>
                <li>Project Sunbird: Mental Health in South Asia</li>
              </ul>
            </div>

            <div className="resource-section">
              <h3>
                <FiUsers className="section-icon" />
                Communities
              </h3>
              <ul>
                <li>GlobalMentalHealthMinistry.org</li>
                <li>Unreasonable Institute (social impact entrepreneurs)</li>
                <li>Asian Venture Philanthropy Network</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Author Bio */}
      <motion.section
        className="lessons-author-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="author-bio-box">
          <h3>About the Author</h3>
          <p>
            <strong>Nithin Rajulapati</strong> is the Founder & CTO of Neuralyn, building HealMind_AI for 2.6 billion underserved people globally. He's obsessed with the intersection of AI, mental health, and global impact—and the operational reality of building truly global companies.
          </p>
          <div className="author-links">
            <a href="https://www.linkedin.com/in/nithin-rajulapati-69133a1aa" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <span>|</span>
            <a href="https://github.com/Nani1-glitch" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <span>|</span>
            <a href="https://www.neuralyn.health" target="_blank" rel="noopener noreferrer">
              Neuralyn
            </a>
          </div>
          <p className="closing-quote">
            The biggest markets in tech are the ones nobody else sees because they're too focused on serving people like themselves.
          </p>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default LessonsFromLaunching;

