import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { FiArrowLeft, FiCpu, FiLayers, FiShield, FiGlobe, FiZap, FiCode, FiDatabase } from 'react-icons/fi';
import { useRef } from 'react';
import './EngineeringHealMind.css';

const EngineeringHealMind = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={containerRef}
      className="engineering-healmind-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Back Button */}
      <motion.button
        className="eng-back-button"
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
        className="eng-hero"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <motion.div
          className="eng-category"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          <FiCpu className="category-icon" />
          <span>AI, DEEP LEARNING & PRODUCT</span>
        </motion.div>
        
        <motion.h1
          className="eng-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Engineering HealMind_AI
        </motion.h1>
        
        <motion.p
          className="eng-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Building Voice-First, Multilingual, Emotion-Aware AI
        </motion.p>

        <motion.div
          className="eng-meta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <div className="eng-author">
            <span className="eng-author-name">Nithin Rajulapati</span>
            <span className="eng-author-role">Founder & CTO @ Neuralyn LLC</span>
          </div>
          <div className="eng-date">Published: November 2025</div>
        </motion.div>
      </motion.section>

      {/* Introduction */}
      <motion.section
        className="eng-section intro-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="eng-section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Introduction: The Technical Challenge That Shouldn't Exist (But Does)
        </motion.h2>
        <motion.div
          className="eng-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="lead-paragraph">
            Here's something that blows my mind: We have AI systems that can recognize faces in a crowd of millions. Systems that can generate entire essays. Systems that can drive cars.
          </p>
          <p className="challenge-paragraph">
            Yet, when you try to build an AI that understands your emotional state while speaking in your native language, at 3 AM, on a smartphone with a slow internet connection—suddenly, it's impossibly hard.
          </p>
          <p>
            Welcome to the engineering reality of HealMind_AI.
          </p>
          <p>
            At Neuralyn, we're not building just another chatbot. We're building a system that must:
          </p>
          <div className="requirements-grid">
            <motion.div
              className="requirement-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <FiGlobe className="req-icon" />
              <span>Work in 50+ languages and dialects</span>
            </motion.div>
            <motion.div
              className="requirement-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <FiZap className="req-icon" />
              <span>Detect emotion from voice tone, not just words</span>
            </motion.div>
            <motion.div
              className="requirement-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <FiLayers className="req-icon" />
              <span>Respond culturally appropriately</span>
            </motion.div>
            <motion.div
              className="requirement-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <FiCpu className="req-icon" />
              <span>Run on edge devices</span>
            </motion.div>
            <motion.div
              className="requirement-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <FiShield className="req-icon" />
              <span>Maintain HIPAA/GDPR compliance</span>
            </motion.div>
            <motion.div
              className="requirement-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <FiCode className="req-icon" />
              <span>Operate with latency under 500ms</span>
            </motion.div>
            <motion.div
              className="requirement-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <FiDatabase className="req-icon" />
              <span>Scale to millions of concurrent users</span>
            </motion.div>
          </div>
          <p className="reality-text">
            This isn't academic. This is production-grade AI serving humans in crisis.
          </p>
          <p>
            In this deep dive, I'm going to walk you through how we engineered HealMind_AI—the architectural decisions, the technical challenges, the compromises, and the breakthroughs that made it possible.
          </p>
        </motion.div>
      </motion.section>

      {/* Part 1: Architecture Overview */}
      <motion.section
        className="eng-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="part-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <span className="part-number">PART 1</span>
          <h2 className="eng-section-title">The Architecture Overview</h2>
        </motion.div>

        <motion.div
          className="eng-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="subsection-title">The Three Layers</h3>
          <p>
            HealMind_AI operates on a three-layer architecture:
          </p>

          <div className="architecture-layers">
            <motion.div
              className="layer-card layer-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="layer-number">01</div>
              <h4>Voice Processing & Emotion Detection</h4>
              <ul>
                <li>Speech-to-text in 50+ languages</li>
                <li>Real-time tone and sentiment analysis</li>
                <li>Cultural context enrichment</li>
              </ul>
            </motion.div>

            <motion.div
              className="layer-card layer-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="layer-number">02</div>
              <h4>Dialogue & Response Generation</h4>
              <ul>
                <li>Context-aware conversational AI</li>
                <li>Multi-turn memory management</li>
                <li>Culturally-intelligent response generation</li>
              </ul>
            </motion.div>

            <motion.div
              className="layer-card layer-3"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="layer-number">03</div>
              <h4>Safety & Compliance</h4>
              <ul>
                <li>Crisis detection and escalation</li>
                <li>HIPAA/GDPR encryption</li>
                <li>Audit logging and accountability</li>
              </ul>
            </motion.div>
          </div>

          <p className="differentiation-text">
            What makes this different from a typical LLM deployment is the integrated focus on emotion and culture. Most AI systems are optimized for accuracy or speed. We're optimized for human connection at scale.
          </p>
        </motion.div>
      </motion.section>

      {/* Part 2: Voice Processing */}
      <motion.section
        className="eng-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="part-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <span className="part-number">PART 2</span>
          <h2 className="eng-section-title">Voice Processing — The Foundation</h2>
        </motion.div>

        <motion.div
          className="eng-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="challenge-title">Challenge #1: Multilingual Speech Recognition</h3>
          <p>
            Building a single speech-to-text system that works across 50+ languages sounds simple until you realize the nightmare:
          </p>

          <div className="challenge-list">
            <div className="challenge-item">
              <strong>Language variation:</strong> There's no single "English." There's American English, British English, Indian English (with distinct phonetics), Nigerian English, etc.
            </div>
            <div className="challenge-item">
              <strong>Accent diversity:</strong> A Telugu speaker's English sounds different from a Japanese speaker's English. Standard models are trained on Western accents.
            </div>
            <div className="challenge-item">
              <strong>Code-mixing:</strong> Real people mix languages. A Telugu speaker in the US might say: "I'm feeling mana (ours/family) vibes today" — mixing Telugu and English.
            </div>
            <div className="challenge-item">
              <strong>Dialect shifts:</strong> The same language spoken differently across regions.
            </div>
          </div>

          <h4 className="solution-title">Our Solution:</h4>

          <div className="solution-box">
            <h5>Multi-Model Architecture:</h5>
            <ul>
              <li>We fine-tuned separate models for high-density language groups (Mandarin, Spanish, English, Hindi, etc.)</li>
              <li>Used a meta-classifier to detect the language being spoken and route to the appropriate model</li>
              <li>Implemented code-mixing detection using a specialized model trained on multilingual corpora</li>
            </ul>
          </div>

          <div className="solution-box">
            <h5>Accent Normalization:</h5>
            <ul>
              <li>Built proprietary datasets of speakers from different regions and accents</li>
              <li>Used data augmentation techniques (pitch shifting, time stretching) to make models robust to accent variations</li>
              <li>Implemented confidence scoring—if confidence is low, we ask for clarification rather than guessing</li>
            </ul>
          </div>

          <div className="solution-box">
            <h5>Real-Time Processing:</h5>
            <ul>
              <li>Deployed Riva (NVIDIA's speech recognition framework) with streaming inference</li>
              <li>Achieved sub-100ms latency for speech-to-text on edge GPUs</li>
              <li>Implemented VAD (Voice Activity Detection) to reduce processing overhead</li>
            </ul>
          </div>

          <div className="tech-stack-box">
            <h5>Tech Stack:</h5>
            <div className="tech-items">
              <div className="tech-item">
                <strong>Speech-to-Text:</strong> Riva + OpenAI Whisper (fine-tuned on Neuralyn dataset)
              </div>
              <div className="tech-item">
                <strong>Language Detection:</strong> FastText + Custom ensemble
              </div>
              <div className="tech-item">
                <strong>Accent Adaptation:</strong> Domain-specific fine-tuning with LoRA (Low-Rank Adaptation)
              </div>
            </div>
          </div>

          <h3 className="challenge-title">Challenge #2: Emotion Detection from Voice</h3>
          <p>
            This is where it gets really interesting. Text tells you what someone said. Voice tells you how they feel.
          </p>
          <p>
            Traditional sentiment analysis looks at words. But words lie. A person might say "I'm fine" while their voice cracks. That's the data we need to capture.
          </p>

          <h4 className="solution-title">What We Detect:</h4>

          <div className="detection-grid">
            <div className="detection-category">
              <h5>Tone of Voice:</h5>
              <ul>
                <li>Pitch (average, variance, contour)</li>
                <li>Speaking rate and rhythm</li>
                <li>Volume and intensity</li>
                <li>Voice quality (breathy, tense, hoarse, etc.)</li>
              </ul>
            </div>
            <div className="detection-category">
              <h5>Prosody:</h5>
              <ul>
                <li>Intonation patterns (rising at end = question, falling = statement)</li>
                <li>Stress patterns (emphasis on certain syllables)</li>
                <li>Pauses and hesitations (cognitive load indicator)</li>
              </ul>
            </div>
            <div className="detection-category">
              <h5>Acoustic Markers:</h5>
              <ul>
                <li>Jitter (voice tremor, indicates anxiety or fatigue)</li>
                <li>Shimmer (breathiness, indicates emotional dysregulation)</li>
                <li>Zero-crossing rate (roughness/smoothness)</li>
              </ul>
            </div>
          </div>

          <div className="emotion-states-box">
            <h5>Emotional States We Classify:</h5>
            <div className="emotion-pairs">
              <span>Calm / Anxious</span>
              <span>Sad / Content</span>
              <span>Stressed / Relaxed</span>
              <span>Lonely / Connected</span>
              <span>Hopeful / Hopeless</span>
            </div>
          </div>

          <div className="code-block">
            <div className="code-header">
              <span className="code-lang">Architecture</span>
            </div>
            <pre className="code-content">
{`Raw Audio → Feature Extraction (librosa) → 

  ↓

Multi-Task DNN (MobileNetV3 backbone):

  ├─→ Arousal (calm ↔ anxious)

  ├─→ Valence (sad ↔ happy)

  ├─→ Stress Level (0-1 scale)

  ├─→ Engagement (disconnected ↔ present)

  ├─→ Fatigue (rested ↔ exhausted)

  └─→ Hope Index (hopeless ↔ hopeful)`}
            </pre>
          </div>

          <div className="code-block">
            <div className="code-header">
              <span className="code-lang">Python</span>
            </div>
            <pre className="code-content">
{`import librosa
import tensorflow as tf
from transformers import TFAutoModel

# Multi-task emotion detection model
class EmotionDetector(tf.keras.Model):
    def __init__(self):
        super().__init__()
        self.backbone = TFAutoModel.from_pretrained("mobile-net-v3-small")
        
        # Task-specific heads
        self.arousal_head = tf.keras.layers.Dense(1, activation='sigmoid')
        self.valence_head = tf.keras.layers.Dense(1, activation='sigmoid')
        self.stress_head = tf.keras.layers.Dense(1, activation='sigmoid')
        # ... more heads
        
    def call(self, audio_features):
        x = self.backbone(audio_features)
        return {
            'arousal': self.arousal_head(x),
            'valence': self.valence_head(x),
            'stress': self.stress_head(x),
            # ...
        }`}
            </pre>
          </div>

          <div className="metrics-box">
            <h5>Performance Metrics:</h5>
            <ul>
              <li>Emotion detection accuracy: <strong>87%</strong> (validation set)</li>
              <li>Cultural calibration improves accuracy to <strong>91%</strong> for specific cultures</li>
              <li>Latency: <strong>150ms</strong> for 10-second audio clip on CPU</li>
            </ul>
          </div>
        </motion.div>
      </motion.section>

      {/* Part 3: Dialogue & Response Generation */}
      <motion.section
        className="eng-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="part-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <span className="part-number">PART 3</span>
          <h2 className="eng-section-title">Dialogue & Response Generation</h2>
        </motion.div>

        <motion.div
          className="eng-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="challenge-title">Challenge #3: Context-Aware Conversational Understanding</h3>
          <p>
            This is where we move from sensing emotions to actually responding to them.
          </p>

          <div className="problem-example">
            <p className="example-label">The Problem:</p>
            <p>
              Your average LLM-based chatbot works like this:
            </p>
            <div className="dialogue-example">
              <div className="dialogue-user">User: "I'm stressed about my visa status"</div>
              <div className="dialogue-ai">LLM: "Have you considered meditation?"</div>
            </div>
            <p className="example-note">
              Unhelpful, right? Because the LLM doesn't understand the cultural weight of visa anxiety. For an immigrant, visa status isn't just "stress"—it's existential. It's identity. It's belonging.
            </p>
          </div>

          <h4 className="solution-title">Our Solution: Multi-Context Awareness</h4>

          <div className="code-block">
            <div className="code-header">
              <span className="code-lang">Context Flow</span>
            </div>
            <pre className="code-content">
{`User Input (voice) 
  ↓
[Emotion Detection: Anxious, Stressed, Hopeless]
[Language: Hindi]
[Background: International Student, Visa Status]
[Time Context: 3 AM (crisis mode)]
  ↓
Context Manager maintains:
  - Conversation history (last 20 turns)
  - Emotional trajectory (is user getting better or worse?)
  - Cultural context (triggers, values, norms)
  - Safety flags (suicidal ideation? substance abuse?)
  ↓
Response Generation (with culture-aware prompt engineering)
  ↓
Emotion-Aligned Response (tone, pace, language)`}
            </pre>
          </div>

          <h3 className="challenge-title">Challenge #4: Cultural Intelligence</h3>
          <p>
            Here's the thing about mental health: It's culturally encoded.
          </p>
          <p>
            A response that's therapeutic in one culture might be dismissive in another.
          </p>

          <div className="cultural-examples">
            <div className="cultural-example">
              <h5>Example 1: Family Pressure</h5>
              <div className="example-comparison">
                <div className="example-side">
                  <strong>American perspective:</strong>
                  <p>"You need to set boundaries with your family"</p>
                </div>
                <div className="example-side">
                  <strong>South Asian perspective:</strong>
                  <p>"Family obligations are non-negotiable; let's process the tension within that reality"</p>
                </div>
              </div>
            </div>
            <div className="cultural-example">
              <h5>Example 2: Shame & Vulnerability</h5>
              <div className="example-comparison">
                <div className="example-side">
                  <strong>Western culture:</strong>
                  <p>"It's okay to cry and express emotions"</p>
                </div>
                <div className="example-side">
                  <strong>Some Eastern cultures:</strong>
                  <p>"Emotional control is a strength; let's find constructive outlets"</p>
                </div>
              </div>
            </div>
          </div>

          <div className="code-block">
            <div className="code-header">
              <span className="code-lang">Python</span>
            </div>
            <pre className="code-content">
{`class CulturallyIntelligentDialogue:
    def __init__(self, user_cultural_profile):
        self.user_profile = user_cultural_profile  # e.g., Indian, US-based, tech worker
        self.cultural_context = self.load_cultural_templates()
    
    def generate_response(self, user_input, emotion_state):
        # Detect the concern
        concern = self.identify_concern(user_input)  # e.g., "family_pressure"
        
        # Get culturally-appropriate response
        template = self.cultural_context[self.user_profile.culture][concern]
        
        # Personalize
        response = template.format(
            user_emotion=emotion_state,
            user_context=self.user_profile.background,
            language_preference=self.user_profile.language
        )
        
        return response`}
            </pre>
          </div>

          <h3 className="challenge-title">Challenge #5: Memory Management at Scale</h3>
          <p>
            With millions of concurrent conversations, storing full conversation history in a database becomes prohibitively expensive.
          </p>

          <h4 className="solution-title">Our Solution: Hierarchical Memory</h4>

          <div className="code-block">
            <div className="code-header">
              <span className="code-lang">Memory Architecture</span>
            </div>
            <pre className="code-content">
{`Hot Memory (Last 5 turns):
  - In-context window of LLM
  - Used for immediate coherence
  - Stored in GPU/CPU cache
  
Warm Memory (Last 50 turns):
  - Compressed conversation summary
  - Key emotional checkpoints
  - Stored in Redis (fast access)
  
Cold Memory (Full history):
  - Encrypted in S3 with 30-day retention
  - Accessed only for insights/clinical review
  - Compliant with data retention policies`}
            </pre>
          </div>

          <div className="tech-stack-box">
            <h5>Tech Stack:</h5>
            <div className="tech-items">
              <div className="tech-item">
                <strong>Redis:</strong> Session cache (warm memory)
              </div>
              <div className="tech-item">
                <strong>PostgreSQL:</strong> Conversation metadata
              </div>
              <div className="tech-item">
                <strong>S3:</strong> Encrypted cold storage
              </div>
              <div className="tech-item">
                <strong>Compression:</strong> Abstractive summarization using BART
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Part 4: Safety & Compliance */}
      <motion.section
        className="eng-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="part-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <span className="part-number">PART 4</span>
          <h2 className="eng-section-title">Safety & Compliance</h2>
        </motion.div>

        <motion.div
          className="eng-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="challenge-title">Challenge #6: Crisis Detection</h3>
          <p>
            This is the most critical and legally sensitive part of our system.
          </p>

          <div className="crisis-detection-box">
            <h5>We Need to Detect:</h5>
            <ul>
              <li>Suicidal ideation</li>
              <li>Self-harm plans</li>
              <li>Substance abuse indicators</li>
              <li>Domestic violence</li>
              <li>Child abuse</li>
            </ul>
            <h5>And we need to do this without:</h5>
            <ul>
              <li>False positives (causing unnecessary panic)</li>
              <li>False negatives (missing genuine crises)</li>
              <li>Bias (treating the same indicators differently based on demographics)</li>
            </ul>
          </div>

          <div className="code-block">
            <div className="code-header">
              <span className="code-lang">Python</span>
            </div>
            <pre className="code-content">
{`class CrisisDetection:
    def __init__(self):
        self.crisis_phrases = self.load_multilingual_phrases()
        self.ml_model = self.load_crisis_detection_model()
        self.escalation_service = CrisisEscalationService()
    
    def detect_crisis(self, user_input, emotion_state):
        # Rule-based
        if any(phrase in user_input for phrase in self.crisis_phrases):
            return self.escalate_immediately(user_input)
        
        # ML-based
        crisis_score = self.ml_model.predict(user_input, emotion_state)
        
        if crisis_score > 0.8:  # High confidence
            return self.escalate_with_options(user_input)
        elif crisis_score > 0.5:  # Uncertain
            return self.route_to_human_specialist(user_input)
        else:
            return self.continue_conversation(user_input)`}
            </pre>
          </div>

          <h3 className="challenge-title">Challenge #7: HIPAA/GDPR Compliance</h3>
          <p>
            We're handling mental health data—which is some of the most sensitive data on the planet.
          </p>

          <div className="compliance-grid">
            <div className="compliance-item">
              <h5>HIPAA (US):</h5>
              <ul>
                <li>Patient authorization for data collection</li>
                <li>Encryption in transit and at rest (AES-256)</li>
                <li>Access logging (who accessed what data and when)</li>
                <li>Data breach notification protocol</li>
                <li>Business associate agreements with all vendors</li>
              </ul>
            </div>
            <div className="compliance-item">
              <h5>GDPR (EU):</h5>
              <ul>
                <li>Right to access user's data</li>
                <li>Right to deletion ("right to be forgotten")</li>
                <li>Data portability</li>
                <li>Privacy-by-design</li>
                <li>Data Protection Impact Assessments</li>
              </ul>
            </div>
          </div>

          <div className="tech-stack-box">
            <h5>Tech Stack:</h5>
            <div className="tech-items">
              <div className="tech-item">
                <strong>Encryption:</strong> TLS 1.3, AES-256-GCM
              </div>
              <div className="tech-item">
                <strong>Key Management:</strong> AWS KMS
              </div>
              <div className="tech-item">
                <strong>Access Control:</strong> Cognito + Custom RBAC
              </div>
              <div className="tech-item">
                <strong>Audit Logging:</strong> CloudTrail, custom audit tables
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Part 5: Scalability */}
      <motion.section
        className="eng-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="part-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <span className="part-number">PART 5</span>
          <h2 className="eng-section-title">Scalability Architecture</h2>
        </motion.div>

        <motion.div
          className="eng-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="challenge-title">Challenge #8: Scaling to Millions</h3>
          <p>
            When you go from thousands to millions of users, everything breaks. We needed to design for scale from day one.
          </p>

          <div className="architecture-diagram">
            <div className="diagram-box">
              <div className="diagram-line"></div>
              <div className="diagram-node">CDN (CloudFront)</div>
              <div className="diagram-branch">
                <div className="diagram-node">API Gateway</div>
                <div className="diagram-node">WebSocket Server</div>
              </div>
              <div className="diagram-node large">Kubernetes Cluster</div>
              <div className="diagram-services">
                <div className="diagram-service">Dialogue Service</div>
                <div className="diagram-service">Emotion Detection</div>
                <div className="diagram-service">Safety Check</div>
              </div>
              <div className="diagram-node">Cache Layer (Redis)</div>
              <div className="diagram-node">Data Layer (PostgreSQL)</div>
            </div>
          </div>

          <div className="performance-targets">
            <h5>Performance Targets:</h5>
            <ul>
              <li>P99 latency: <strong>&lt; 200ms</strong></li>
              <li>Throughput: <strong>100K concurrent connections</strong></li>
              <li>Availability: <strong>99.99%</strong> (4 nines)</li>
            </ul>
          </div>
        </motion.div>
      </motion.section>

      {/* Part 6: MLOps */}
      <motion.section
        className="eng-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="part-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <span className="part-number">PART 6</span>
          <h2 className="eng-section-title">Deployment & MLOps</h2>
        </motion.div>

        <motion.div
          className="eng-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="challenge-title">Challenge #9: Continuous Improvement Without Breaking Prod</h3>
          <p>
            With mental health AI, downtime isn't just inconvenient—it's dangerous.
          </p>

          <div className="code-block">
            <div className="code-header">
              <span className="code-lang">MLOps Pipeline</span>
            </div>
            <pre className="code-content">
{`Model Development (Local)
  ↓
Version Control (GitHub + DVC)
  ↓
Automated Testing (unit + integration)
  ↓
Shadow Mode Deployment
  (new model runs alongside old, no user impact)
  ↓
Canary Deployment
  (1% of users get new model)
  ↓
Monitor (emotion detection accuracy, crisis detection rates)
  ↓
If metrics improve → Gradual rollout (10% → 50% → 100%)
If metrics degrade → Automatic rollback
  ↓
Full Deployment`}
            </pre>
          </div>

          <div className="tech-stack-box">
            <h5>Tech Stack:</h5>
            <div className="tech-items">
              <div className="tech-item">
                <strong>GitHub Actions:</strong> CI/CD pipeline
              </div>
              <div className="tech-item">
                <strong>TensorFlow Serving:</strong> Model serving
              </div>
              <div className="tech-item">
                <strong>KServe:</strong> Kubernetes native model serving
              </div>
              <div className="tech-item">
                <strong>Prometheus:</strong> Metrics collection
              </div>
              <div className="tech-item">
                <strong>ELK Stack:</strong> Logging
              </div>
              <div className="tech-item">
                <strong>Grafana:</strong> Dashboards and alerting
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Part 7: Lessons Learned */}
      <motion.section
        className="eng-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="part-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <span className="part-number">PART 7</span>
          <h2 className="eng-section-title">The Lessons I Learned</h2>
        </motion.div>

        <motion.div
          className="eng-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="lessons-list">
            <motion.div
              className="lesson-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="lesson-number">1</div>
              <div className="lesson-content">
                <h4>Voice &gt; Text (For Mental Health)</h4>
                <p>This was my foundational insight. Mental health isn't about information transfer; it's about human connection. Voice conveys emotion text simply can't.</p>
              </div>
            </motion.div>

            <motion.div
              className="lesson-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="lesson-number">2</div>
              <div className="lesson-content">
                <h4>Culture Matters More Than Technology</h4>
                <p>We could optimize our models forever, but if they don't understand cultural context, they fail. Investment in cultural-specific tuning &gt; investment in raw ML performance.</p>
              </div>
            </motion.div>

            <motion.div
              className="lesson-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="lesson-number">3</div>
              <div className="lesson-content">
                <h4>Safety Must Be Obsessive</h4>
                <p>One false negative on suicide detection isn't a "model accuracy issue." It's a human tragedy. We treat safety like a product feature, not a compliance checkbox.</p>
              </div>
            </motion.div>

            <motion.div
              className="lesson-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="lesson-number">4</div>
              <div className="lesson-content">
                <h4>Simplicity at Scale is Hard</h4>
                <p>Every line of code we add increases complexity, bugs, and latency. We constantly ask: "Does this feature help users?" If not, we delete it.</p>
              </div>
            </motion.div>

            <motion.div
              className="lesson-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="lesson-number">5</div>
              <div className="lesson-content">
                <h4>Edge Computing is Essential</h4>
                <p>Wifi drops. Connections fail. Backup internet is spotty in many countries. We designed HealMind_AI to work offline, then sync when connectivity returns.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* Conclusion */}
      <motion.section
        className="eng-section conclusion-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="eng-section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Conclusion: Building for Humans, Not Metrics
        </motion.h2>
        <motion.div
          className="eng-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="conclusion-text">
            At the end of the day, all this engineering—the multi-task learning, the cultural calibration, the crisis detection, the scaling architecture—is in service of one thing:
          </p>
          <p className="mission-text">
            A person at 3 AM who needs help, in their language, from an AI that understands their culture and their pain.
          </p>
          <p className="mission-text">
            That's the goal we optimize for.
          </p>
          <p className="mission-text">
            Not accuracy metrics. Not throughput. <strong>Human connection and safety.</strong>
          </p>
        </motion.div>
      </motion.section>

      {/* Resources */}
      <motion.section
        className="eng-section resources-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="eng-section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Resources & References
        </motion.h2>
        <motion.div
          className="eng-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="resources-grid">
            <div className="resource-category">
              <h4>Papers:</h4>
              <ul>
                <li>Latif et al. (2022): "Speech Emotion Recognition Using Transfer Learning"</li>
                <li>Sap et al. (2020): "Social Bias Frames: Reasoning about Social and Power Implications of Language"</li>
              </ul>
            </div>
            <div className="resource-category">
              <h4>Frameworks & Tools:</h4>
              <ul>
                <li>TensorFlow / PyTorch</li>
                <li>Kubernetes / Docker</li>
                <li>Riva (Speech Recognition)</li>
                <li>HuggingFace Transformers</li>
              </ul>
            </div>
            <div className="resource-category">
              <h4>Further Reading:</h4>
              <ul>
                <li>AWS Best Practices for ML</li>
                <li>Google Cloud MLOps Guide</li>
                <li>Production Machine Learning Systems (PMLS) Design Pattern</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Author Bio */}
      <motion.section
        className="eng-section author-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="author-bio-box">
          <h3>About the Author</h3>
          <p>
            <strong>Nithin Rajulapati</strong> is the Founder & CTO of Neuralyn LLC. He's obsessed with building AI systems that work for humans, especially those the mainstream tech world forgets about. Currently building HealMind_AI—available in 50+ languages, with emotion detection that actually works.
          </p>
          <div className="author-links">
            <a href="https://www.linkedin.com/in/nithin-rajulapati-69133a1aa" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <span>|</span>
            <a href="https://github.com/Nani1-glitch" target="_blank" rel="noopener noreferrer">GitHub</a>
            <span>|</span>
            <a href="https://healmind.neuralyn.health" target="_blank" rel="noopener noreferrer">HealMind_AI</a>
          </div>
          <p className="closing-quote">
            The best technology is invisible. You just feel understood.
          </p>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default EngineeringHealMind;

