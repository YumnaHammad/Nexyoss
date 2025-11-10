import React from "react";
import heroImage from "../../assets/images/nexyos/CCTVSurveillanceCamerasBg.jpg";
import featureUnifiedIcon from "../../assets/images/icon/cloudwhite.png";
import featureAutomationIcon from "../../assets/images/icon/AI.png";
import featureResilienceIcon from "../../assets/images/icon/POE.png";
import layoutImage from "../../assets/images/nexyos/panaromic.png";
import collaborationImage from "../../assets/images/nexyos/Store1.jpg";
import insightsImage from "../../assets/images/nexyos/Protect_your_customers.png";
import operationsImage from "../../assets/images/nexyos/Recorders and Video Management Systems.jpg";
import smartCityImage from "../../assets/images/Solution/solution-for-urban-roadways.jpg";
import enterpriseImage from "../../assets/images/Solution/solution-for-offices.jpg";
import controlRoomImage from "../../assets/images/Solution/solution-for-factories.jpg";

const stats = [
  { label: "Mission Critical Sites", value: "1200+", color: "text-warning" },
  { label: "Average Response Time Improvement", value: "34%", color: "text-info" },
  { label: "Integrations & APIs", value: "60+", color: "text-success" },
];

const featureHighlights = [
  {
    title: "Unified Command Center",
    description:
      "Aggregate live camera feeds, sensors, and analytics dashboards into configurable video walls and operator workspaces.",
    icon: featureUnifiedIcon,
  },
  {
    title: "Context-Aware Automation",
    description:
      "Trigger automated layouts and alerts when incidents, occupancy spikes, or scheduled events occur.",
    icon: featureAutomationIcon,
  },
  {
    title: "Edge-to-Cloud Resilience",
    description:
      "Ensure reliable operations with redundant nodes, smart failover, and encrypted remote access for distributed teams.",
    icon: featureResilienceIcon,
  },
];

const capabilityBlocks = [
  {
    title: "Dynamic Layout Engine",
    subtitle: "Design any command room",
    description:
      "Drag and drop feeds, apps, and KPIs onto video walls, create saved presets for shift change, and sync layouts across distributed teams instantly.",
    bullets: [
      "Scale from single consoles to immersive multi-surface command centers.",
      "Preview and publish screen arrangements without interrupting live monitoring.",
      "Embed SCADA, mapping, and analytics widgets alongside camera streams.",
    ],
    image: layoutImage,
  },
  {
    title: "Real-Time Collaboration",
    subtitle: "Connect operators everywhere",
    description:
      "Operators share incidents, annotate video, and escalate with built-in collaboration tools while keeping sensitive evidence secure.",
    bullets: [
      "Automated alert routing to security, facilities, or emergency response teams.",
      "Red team / blue team workflows for training and after-action reviews.",
      "Native integrations with Teams, Slack, and email for quick distribution.",
    ],
    image: collaborationImage,
  },
  {
    title: "Intelligent Insights",
    subtitle: "Decisions backed by data",
    description:
      "AI and analytics surface anomalies, predict maintenance windows, and present contextual overlays to guide every response.",
    bullets: [
      "Adaptive dashboards that react to weather, occupancy, and sensor thresholds.",
      "Time-series reporting to prove compliance and document incidents.",
      "Export-ready insights for executive briefings and board updates.",
    ],
    image: insightsImage,
  },
];

const integrationPartners = [
  "Milestone XProtect",
  "Genetec Security Center",
  "Nexyos Video Surveillance",
  "SCADA & BMS Platforms",
  "Smart HVAC & Lighting",
  "Emergency Notification Systems",
];

const useCases = [
  {
    title: "Critical Infrastructure",
    description:
      "Monitor substations, pipelines, energy grids, and utilities with consolidated situational awareness and automated risk alerts.",
    image: operationsImage,
  },
  {
    title: "Smart City Operations",
    description:
      "Coordinate traffic, public safety, and environmental data across agencies while keeping citizens informed in real time.",
    image: smartCityImage,
  },
  {
    title: "Campus & Enterprise",
    description:
      "Unify security, facilities, IT, and emergency response into a single action framework for multi-site organizations.",
    image: enterpriseImage,
  },
];

const workflow = [
  {
    title: "Assess",
    description: "Ingest sensors, VMS, third-party data, and operator notes into a unified timeline.",
  },
  {
    title: "Decide",
    description: "AI-driven playbooks highlight next steps while escalation paths trigger automatically.",
  },
  {
    title: "Act",
    description: "Automate signage, notify teams, and sync video wall presets within seconds.",
  },
  {
    title: "Review",
    description: "Generate incident summaries, KPIs, and evidence packages for continuous improvement.",
  },
];

const DisplayControl = () => {
  return (
    <section className="solution-page overflow-hidden pt-5 pb-5 pb-lg-6">
      <header
        className="solution-hero display-control position-relative"
        style={{
          backgroundImage: `linear-gradient(118deg, rgba(3,48,86,0.92), rgba(17,128,203,0.82)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container py-5 py-lg-6  text-white">
          <div className="row align-items-center justify-content-between g-4">
            <div className="col-lg-7" data-aos="fade-right">
              
              <h1 className="display-4 fw-bold mb-3 py-16 lh-sm">
                Command Rooms That Think Ahead Of Every Incident
              </h1>
              <p className="lead text-white-75 mb-4">
                Nexyos Display &amp; Control orchestrates mission-critical environments with a 360° view of video,
                IoT, analytics, and workflows—in a single pane optimized for fast, confident decisions.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <a href="#capabilities" className="btn btn-warning text-uppercase fw-semibold px-4 shadow">
                  Explore Capabilities
                </a>
                <a href="/sales-inquiry" className="btn btn-outline-light text-uppercase fw-semibold px-4">
                  Book A Live Demo
                </a>
              </div>
            </div>
            <div className="col-lg-4" data-aos="fade-left" data-aos-delay="120">
              <div className="p-4 rounded-4 bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-10 shadow-lg">
                <h2 className="h5 text-white fw-semibold mb-3">Built For Mission Control</h2>
                <ul className="text-white-75 mb-0 list-unstyled small">
                  <li className="mb-2 d-flex align-items-start gap-2">
                    <span className="mt-1 bullet-dot bg-warning"></span>
                    Smart city operation centers and emergency response hubs
                  </li>
                  <li className="mb-2 d-flex align-items-start gap-2">
                    <span className="mt-1 bullet-dot bg-warning"></span>
                    Airports, transit authorities, and intelligent transport systems
                  </li>
                  <li className="mb-2 d-flex align-items-start gap-2">
                    <span className="mt-1 bullet-dot bg-warning"></span>
                    Enterprise campuses and critical infrastructure networks
                  </li>
                  <li className="d-flex align-items-start gap-2">
                    <span className="mt-1 bullet-dot bg-warning"></span>
                    Defense &amp; security fusion centers with 24/7 coverage
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="py-5 py-lg-6">
        <div className="container">
          <div className="row g-4" data-aos="fade-up">
            {stats.map((item) => (
              <div className="col-md-4" key={item.label}>
                <div className="card h-100 border-0 shadow-sm rounded-4 text-center py-4 px-3 hover-lift">
                  <div className={`display-5 fw-bold ${item.color}`}>{item.value}</div>
                  <p className="text-muted mb-0">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-5 pb-lg-6">
        <div className="container">
          <div className="row g-4">
            {featureHighlights.map((feature, index) => (
              <div className="col-md-4" data-aos="fade-up" data-aos-delay={index * 80} key={feature.title}>
                <div className="card h-100 border-0 shadow-sm rounded-4 position-relative overflow-hidden hover-lift">
                  <div className="position-absolute top-0 start-0 end-0 h-100 bg-gradient-primary opacity-0 transition-opacity" />
                  <div className="card-body p-4 text-center position-relative">
                    <div
                      className="rounded-circle bg-light d-inline-flex align-items-center justify-content-center mb-3 shadow-sm"
                      style={{ width: 72, height: 72 }}
                    >
                      <img src={feature.icon} alt={feature.title} style={{ width: 40, height: 40 }} />
                    </div>
                    <h3 className="h5 fw-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted mb-0">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="capabilities" className="bg-light py-5 py-lg-6">
        <div className="container">
          <h2 className="h3 fw-bold text-center mb-3" data-aos="fade-up">
            Everything A Modern Command Center Needs
          </h2>
          <p className="text-center text-muted mb-5" data-aos="fade-up" data-aos-delay="80">
            Combine live video, telemetry, geospatial intelligence, and response workflows in one adaptive environment.
          </p>
          <div className="row g-4">
            {capabilityBlocks.map((block, index) => (
              <div className="col-lg-4" data-aos="fade-up" data-aos-delay={index * 100} key={block.title}>
                <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden hover-lift">
                  <div className="ratio ratio-16x9">
                    <img src={block.image} alt={block.title} className="w-100 h-100" style={{ objectFit: "cover" }} />
                  </div>
                  <div className="card-body p-4 d-flex flex-column">
                    <span className="badge bg-primary bg-opacity-10 text-primary mb-2">{block.subtitle}</span>
                    <h3 className="h5 fw-semibold mb-2">{block.title}</h3>
                    <p className="text-muted mb-3">{block.description}</p>
                    <ul className="text-muted mb-0 ps-3 small">
                      {block.bullets.map((bullet) => (
                        <li className="mb-2" key={bullet}>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 py-lg-6">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6" data-aos="fade-right">
            <h2 className="h3 fw-bold mb-3">Connect Your Entire Technology Stack</h2>
            <p className="text-muted mb-4">
              Nexyos Display & Control is vendor-agnostic and API-first. Integrate legacy VMS, next-gen AI analytics, building
              management systems, and public safety platforms with ready-made connectors and open standards.
            </p>
            <div className="d-flex flex-wrap gap-2">
              {integrationPartners.map((partner) => (
                <span key={partner} className="badge bg-secondary bg-opacity-10 text-secondary fw-semibold px-3 py-2">
                  {partner}
                </span>
              ))}
            </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="rounded-4 overflow-hidden shadow-lg position-relative">
                <img src={controlRoomImage} alt="Control room overview" className="w-100" style={{ maxHeight: 360, objectFit: "cover" }} />
                <div className="position-absolute bottom-0 start-0 end-0 bg-dark bg-opacity-50 text-white px-4 py-3">
                  <p className="mb-0 small">
                    Unified dashboards, live alerts, and automation rules keep teams synchronized even across distributed locations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark text-white py-5 py-lg-6">
        <div className="container">
          <h2 className="h3 fw-bold text-center mb-4" data-aos="fade-up">
            Where Nexyos Display & Control Delivers
          </h2>
          <div className="row g-4">
            {useCases.map((useCase, index) => (
              <div className="col-lg-4" data-aos="fade-up" data-aos-delay={index * 80} key={useCase.title}>
                <div className="card h-100 bg-white bg-opacity-10 border-0 rounded-4 overflow-hidden hover-lift">
                  <div className="ratio ratio-16x9">
                    <img src={useCase.image} alt={useCase.title} className="w-100 h-100" style={{ objectFit: "cover" }} />
                  </div>
                  <div className="card-body p-4 d-flex flex-column">
                    <h3 className="h5 fw-semibold text-white mb-2">{useCase.title}</h3>
                    <p className="text-white-50 mb-0">{useCase.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 py-lg-6">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-7" data-aos="fade-right">
            <h2 className="h3 fw-bold mb-3">Incident To Insight In Four Steps</h2>
            <p className="text-muted mb-4">
              Our operational workflow keeps every stakeholder aligned—from first alert through post-event analysis.
            </p>
            <div className="row row-cols-1 row-cols-md-2 g-3">
              {workflow.map((step, index) => (
                <div className="col" key={step.title}>
                  <div className="card h-100 border-0 shadow-sm rounded-4 p-3 hover-lift" data-aos="fade-up" data-aos-delay={index * 70}>
                    <div className="d-flex align-items-start gap-3">
                      <div className="rounded-circle bg-primary text-white fw-bold d-flex align-items-center justify-content-center" style={{ width: 46, height: 46 }}>
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="h6 fw-semibold mb-1">{step.title}</h3>
                        <p className="text-muted mb-0 small">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
            <div className="col-lg-5" data-aos="fade-left">
              <div
                className="card border-0 h-100 text-white rounded-4 shadow-lg"
                style={{
                  background: "linear-gradient(135deg, rgba(12,92,160,0.95), rgba(40,180,170,0.85))",
                }}
              >
                <div className="card-body p-5 d-flex flex-column justify-content-between h-100">
                  <div>
                    <h3 className="h4 fw-semibold mb-3">Accelerate Deployment With Nexyos Experts</h3>
                    <p className="text-white-75 mb-4">
                      From control room design to integration and training, our professional services team brings certified experience
                      delivering complex command environments around the globe.
                    </p>
                    <ul className="text-white-75 list-unstyled mb-0">
                      <li className="mb-2">• Rapid deployment packs and on-site commissioning</li>
                      <li className="mb-2">• 24/7 monitoring, patching, and health diagnostics</li>
                      <li>• Governance, compliance, and cyber-hardening best practices</li>
                    </ul>
                  </div>
                  <div className="pt-4">
                    <a href="/contact" className="btn btn-light fw-semibold text-uppercase px-4">
                      Schedule A Consultation
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default DisplayControl;
