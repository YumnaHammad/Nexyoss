import React from "react";

const heroImage =
  "https://images.pexels.com/photos/358489/pexels-photo-358489.jpeg?auto=compress&cs=tinysrgb&w=1600";

const metroSegments = [
  {
    title: "Urban Arterials",
    description:
      "AI adaptive signal control balances pedestrian, bicyclist, and vehicle flow using real-time telemetry from cameras and radar.",
    image:
      "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Expressways & Tunnels",
    description:
      "Incident detection, lane control signage, and micro-weather insights keep high-speed corridors safe and congestion-free.",
    image:
      "https://images.pexels.com/photos/1486403/pexels-photo-1486403.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Transit Priority",
    description:
      "Vehicle-to-infrastructure (V2I) communications deliver green waves and curbside optimization for buses, shuttles, and LRT.",
    image:
      "https://images.pexels.com/photos/2120482/pexels-photo-2120482.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

const performanceMetrics = [
  { label: "Average Travel Time Reduction", value: "27%", color: "text-warning" },
  { label: "Incident Clearance Acceleration", value: "3.1×", color: "text-success" },
  { label: "CO₂ Emissions Avoided", value: "18K tons", color: "text-info" },
  { label: "Citizen Satisfaction Score", value: "4.6 ★", color: "text-primary" },
];

const corridorStack = [
  {
    heading: "Sense Everything",
    bullets: [
      "Edge AI detects queues, near-misses, congestion, and weather anomalies.",
      "Integrate probe data, Bluetooth, Waze, and AVL feeds in one pane.",
    ],
  },
  {
    heading: "Predict & Decide",
    bullets: [
      "Short-term traffic forecasting models update every 60 seconds.",
      "Decision support playbooks recommend diversions, metering, and pricing.",
    ],
  },
  {
    heading: "Act & Coordinate",
    bullets: [
      "Automatically update signal timing, lane control, traveler info, and toll pricing.",
      "Coordinate multi-agency responses with secure chat, map overlays, and SOP triggers.",
    ],
  },
];

const timeline = [
  {
    year: "Week 0 – Discover",
    text: "Joint workshops capture corridor pain points, KPIs, and data sources. Digital twin scope defined.",
  },
  {
    year: "Week 6 – Pilot Lanes",
    text: "Deploy edge sensors, connect SCATS/NEMA controllers, and validate adaptive timing in limited footprint.",
  },
  {
    year: "Month 3 – City Rollout",
    text: "Expand to arterial grid & expressway segments, add automated incident response and traveler messaging.",
  },
  {
    year: "Month 6 – Mobility Marketplace",
    text: "Expose APIs for MaaS partners, ride-share, freight, and micro-mobility providers to join the ecosystem.",
  },
];

const Intelligent_Traffic_Solution = () => {
  return (
    <section className="solution-page overflow-hidden pt-5 pb-5 pb-lg-6">
      <header
        className="position-relative overflow-hidden mb-5"
        style={{
          backgroundImage: `linear-gradient(128deg, rgba(10,18,74,0.82), rgba(0,140,140,0.85)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="position-absolute top-0 bottom-0 start-0 end-0 bg-gradient-primary opacity-25" />
        <div className="container position-relative text-white py-5 py-lg-6">
          <div className="row g-4 align-items-center">
            <div className="col-xl-6 col-lg-7" data-aos="fade-right">
              <span className="badge bg-warning text-dark fw-semibold text-uppercase letter-spacing mb-3">
                Intelligent Traffic Solution
              </span>
              <h1 className="display-4 fw-bold mb-3 lh-sm">
                Orchestrate Safer, Faster, Greener Mobility Across Every Corridor
              </h1>
              <p className="lead text-white-75 mb-4">
                Nexyos connects sensors, signal controllers, video analytics, and mobility partners into one AI-driven platform that
                anticipates congestion, resolves incidents, and keeps travelers moving.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <a href="#metro" className="btn btn-light fw-semibold text-uppercase px-4 shadow-sm">
                  Explore Corridors
                </a>
                <a href="/contact" className="btn btn-outline-light fw-semibold text-uppercase px-4">
                  Request A Control Room Tour
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 ms-xl-auto" data-aos="fade-left" data-aos-delay="100">
              <div className="rounded-4 bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-10 shadow-lg p-4">
                <h2 className="h5 fw-semibold text-white mb-3">Why agencies choose Nexyos</h2>
                <ul className="list-unstyled text-white-75 small mb-0">
                  <li className="mb-2 d-flex gap-2">
                    <span className="mt-1 bullet-dot bg-warning"></span>
                    Proven deployments in 16 national ITS programs and 42 metro areas.
                  </li>
                  <li className="mb-2 d-flex gap-2">
                    <span className="mt-1 bullet-dot bg-warning"></span>
                    Open standards: NTCIP, TMDD, DATEX II, MQTT, and GTFS-RT ready out of the box.
                  </li>
                  <li className="mb-2 d-flex gap-2">
                    <span className="mt-1 bullet-dot bg-warning"></span>
                    Cyber-hardened with 24/7 SOC, secure remote maintenance, and zero-trust design.
                  </li>
                  <li className="d-flex gap-2">
                    <span className="mt-1 bullet-dot bg-warning"></span>
                    Turnkey command center upgrades, staffing, and managed services programs.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="py-5 py-lg-6">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4" data-aos="fade-up">
            {performanceMetrics.map((metric) => (
              <div className="col" key={metric.label}>
                <div className="card h-100 border-0 shadow-sm rounded-4 py-4 px-3 hover-lift bg-light-subtle text-center">
                  <div className={`display-6 fw-bold ${metric.color}`}>{metric.value}</div>
                  <p className="fw-semibold text-muted mb-1">{metric.label}</p>
                  <p className="small text-secondary mb-0">Rolling 12-month average across global deployments.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="metro" className="py-5 py-lg-6 bg-light">
        <div className="container">
          <h2 className="h3 fw-bold text-center mb-4" data-aos="fade-up">
            A Platform Built For Every Mode And Corridor Type
          </h2>
          <div className="row g-4">
            {metroSegments.map((segment, index) => (
              <div className="col-lg-4" key={segment.title} data-aos="fade-up" data-aos-delay={index * 80}>
                <div className="card h-100 border-0 rounded-4 overflow-hidden hover-lift shadow-sm">
                  <div className="ratio ratio-4x3">
                    <img src={segment.image} alt={segment.title} className="w-100 h-100" style={{ objectFit: "cover" }} />
                  </div>
                  <div className="card-body p-4">
                    <h3 className="h5 fw-semibold">{segment.title}</h3>
                    <p className="text-muted mb-0">{segment.description}</p>
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
            <div className="col-lg-5" data-aos="fade-right">
              <h2 className="h3 fw-bold mb-3">End-To-End Traffic Operations Stack</h2>
              <p className="text-muted mb-4">
                Nexyos collapses siloed platforms into a single workflow that senses, predicts, and acts in seconds. Pick the modules
                you need now and expand with confidence.
              </p>
              <ul className="list-unstyled text-muted small">
                {corridorStack.map((stage) => (
                  <li key={stage.heading} className="mb-4">
                    <h3 className="h6 fw-semibold text-primary mb-2">{stage.heading}</h3>
                    <ul className="mb-0 ps-3">
                      {stage.bullets.map((bullet) => (
                        <li key={bullet} className="mb-1">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-7" data-aos="fade-left">
              <div className="rounded-4 overflow-hidden shadow-lg">
                <iframe
                  title="Traffic Digital Twin"
                  src="https://www.youtube.com/embed/Ow8dxG9lLLQ?rel=0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-100"
                  style={{ aspectRatio: "16/9", border: 0 }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 py-lg-6 bg-dark text-white">
        <div className="container">
          <h2 className="h3 fw-bold text-center mb-4" data-aos="fade-up">
            Deployment Roadmap Tailored To Your City
          </h2>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            {timeline.map((item, index) => (
              <div className="col" key={item.year} data-aos="fade-up" data-aos-delay={index * 70}>
                <div className="card h-100 bg-white bg-opacity-10 border-0 rounded-4 hover-lift p-4">
                  <h3 className="h6 fw-semibold text-warning mb-2">{item.year}</h3>
                  <p className="text-white-50 mb-0">{item.text}</p>
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
              <h2 className="h3 fw-bold mb-3">Put Nexyos Mobility Cloud To Work For Your Region</h2>
              <p className="text-muted mb-4">
                Our transportation strategists help agencies modernize operations centers, secure funding, and deliver measurable
                improvements—without ripping and replacing established infrastructure.
              </p>
              <ul className="text-muted small mb-0">
                <li className="mb-2">Mobility master planning, business case, and KPI framework development.</li>
                <li className="mb-2">Program management and change enablement across DOT, public safety, and transit partners.</li>
                <li>24/7 managed services, analytics-as-a-service, and adaptive maintenance programs.</li>
              </ul>
            </div>
            <div className="col-lg-5" data-aos="fade-left">
              <div
                className="card border-0 h-100 text-white rounded-4 shadow-lg"
                style={{
                  background: "linear-gradient(135deg, rgba(11,70,122,0.95), rgba(8,149,184,0.86))",
                }}
              >
                <div className="card-body p-5 d-flex flex-column justify-content-between h-100">
                  <div>
                    <h3 className="h4 fw-semibold mb-3">Schedule A Strategic Mobility Session</h3>
                    <p className="text-white-75 mb-4">
                      Partner with Nexyos experts to analyze current systems, prioritize corridors, and fast-track your intelligent
                      transportation roadmap.
                    </p>
                    <p className="text-white-75 small mb-0">
                      “We cut incident response times by 41% while keeping citizens informed in real time.” — Director of Traffic, LATAM
                      Smart City Program
                    </p>
                  </div>
                  <div className="pt-4">
                    <a href="/contact" className="btn btn-light fw-semibold text-uppercase px-4">
                      Book Consultation
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

export default Intelligent_Traffic_Solution;
