import React from "react";

const heroImage =
  "https://images.pexels.com/photos/373903/pexels-photo-373903.jpeg?auto=compress&cs=tinysrgb&w=1600";

const pillars = [
  {
    title: "Connected Workforce",
    text: "Collaborative tablets, wearable alerts, and vision analytics protect technicians and streamline changeovers.",
    icon: "https://raw.githubusercontent.com/feathericons/feather/master/icons/users.svg",
  },
  {
    title: "Adaptive Quality",
    text: "Edge AI inspects every unit, correlates with MES data, and drives instant root-cause alerts for upstream processes.",
    icon: "https://raw.githubusercontent.com/feathericons/feather/master/icons/check-circle.svg",
  },
  {
    title: "Energy & Asset Intelligence",
    text: "Digital twin dashboards optimize energy spend, schedule predictive maintenance, and monitor critical utilities.",
    icon: "https://raw.githubusercontent.com/feathericons/feather/master/icons/hexagon.svg",
  },
];

const metrics = [
  { label: "Unplanned Downtime Reduction", value: "39%", detail: "after deploying Nexyos predictive maintenance suite." },
  { label: "First Pass Yield Improvement", value: "21%", detail: "through automated vision inspection and SPC feedback." },
  { label: "Carbon Intensity Decrease", value: "18%", detail: "by correlating process, HVAC, and utility data in real time." },
];

const thread = [
  {
    heading: "Assess & Align",
    description:
      "Map production value streams, identify quick wins, and align IT/OT teams with a shared security and governance model.",
  },
  {
    heading: "Connect & Harmonize",
    description:
      "Ingest PLC, SCADA, historians, and ERP data with edge gateways; normalize into a unified manufacturing data lake.",
  },
  {
    heading: "Augment & Automate",
    description:
      "Deploy AI/ML models for predictive quality, maintenance, and energy optimization. Orchestrate workflows across MES and CMMS.",
  },
  {
    heading: "Scale & Sustain",
    description:
      "Roll out templates globally, benchmark sites, and manage adoption with Nexyos performance services and 24/7 command center.",
  },
];

const workcells = [
  {
    title: "Smart Assembly Cells",
    image: "https://images.pexels.com/photos/256297/pexels-photo-256297.jpeg?auto=compress&cs=tinysrgb&w=1600",
    points: [
      "Vision guided assembly ensures torque, orientation, and component verification.",
      "Digital work instructions adapt automatically to product variants and operator skill.",
    ],
  },
  {
    title: "Process Industries",
    image: "https://images.pexels.com/photos/286768/pexels-photo-286768.jpeg?auto=compress&cs=tinysrgb&w=1600",
    points: [
      "Real-time SPC correlates quality data with batch genealogy and environmental conditions.",
      "Adaptive control loops adjust temperature, pressure, and flow to maintain yield targets.",
    ],
  },
  {
    title: "Logistics & Warehouse",
    image: "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1600",
    points: [
      "Digital twin of intralogistics monitors AGVs, conveyors, and labor productivity.",
      "Computer vision ensures pallet integrity, dock safety, and automated inventory updates.",
    ],
  },
];

const Manufacturing = () => {
  return (
    <section className="solution-page overflow-hidden pt-5 pb-5 pb-lg-6">
      <header
        className="position-relative overflow-hidden mb-5"
        style={{
          backgroundImage: `linear-gradient(110deg, rgba(8,40,90,0.85), rgba(0,118,132,0.82)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="position-absolute top-0 bottom-0 end-0 start-0 bg-dark bg-opacity-20" />
        <div className="container position-relative text-white py-5 py-lg-6">
          <div className="row g-4 align-items-center">
            <div className="col-lg-7" data-aos="fade-right">
              <span className="badge bg-warning text-dark fw-semibold text-uppercase letter-spacing mb-3">
                Smart Manufacturing
              </span>
              <h1 className="display-4 fw-bold mb-3 lh-sm">
                Reimagine Production With A Connected, Resilient, and Sustainable Factory
              </h1>
              <p className="lead text-white-75 mb-4">
                Nexyos unifies OT and IT data, empowers frontline teams, and orchestrates AI insights to accelerate continuous
                improvement across every plant in your network.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <a href="#pillars" className="btn btn-light text-uppercase fw-semibold px-4 shadow-sm">
                  Explore Pillars
                </a>
                <a href="/contact" className="btn btn-outline-light text-uppercase fw-semibold px-4">
                  Schedule A Plant Assessment
                </a>
              </div>
            </div>
            <div className="col-lg-5" data-aos="fade-left" data-aos-delay="120">
              <div className="rounded-4 bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-10 shadow-lg p-4">
                <h2 className="h6 text-white fw-semibold mb-3">Built For Global Operations</h2>
                <ul className="text-white-75 small list-unstyled mb-0">
                  <li className="mb-2 d-flex align-items-start gap-2">
                    <span className="mt-1 bullet-dot bg-warning"></span>
                    Supports automotive, electronics, FMCG, chemicals, and heavy industries.
                  </li>
                  <li className="mb-2 d-flex align-items-start gap-2">
                    <span className="mt-1 bullet-dot bg-warning"></span>
                    Secure edge architecture designed for OT zones & IEC 62443 compliance.
                  </li>
                  <li className="d-flex align-items-start gap-2">
                    <span className="mt-1 bullet-dot bg-warning"></span>
                    Managed services for 24/7 monitoring, analytics, and program governance.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="pillars" className="container py-5 py-lg-6">
        <div className="row row-cols-1 row-cols-md-3 g-4" data-aos="fade-up">
          {pillars.map((pillar, index) => (
            <div className="col" key={pillar.title} data-aos="fade-up" data-aos-delay={index * 80}>
              <div className="card h-100 border-0 shadow-sm rounded-4 hover-lift p-4 text-center">
                <div className="rounded-circle bg-light d-inline-flex align-items-center justify-content-center mb-3 shadow-sm" style={{ width: 70, height: 70 }}>
                  <img src={pillar.icon} alt={pillar.title} style={{ width: 32, height: 32 }} />
                </div>
                <h3 className="h5 fw-semibold mb-2">{pillar.title}</h3>
                <p className="text-muted mb-0">{pillar.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-5 py-lg-6 bg-light">
        <div className="container">
          <div className="row g-4">
            {metrics.map((metric, index) => (
              <div className="col-lg-4" key={metric.label} data-aos="fade-up" data-aos-delay={index * 60}>
                <div className="card h-100 border-0 rounded-4 shadow-sm p-4 hover-lift">
                  <h3 className="display-6 fw-bold text-primary mb-2">{metric.value}</h3>
                  <p className="fw-semibold text-muted mb-1">{metric.label}</p>
                  <p className="small text-secondary mb-0">{metric.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 py-lg-6">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-lg-5" data-aos="fade-right">
              <h2 className="h3 fw-bold mb-3">Digital Thread Journey</h2>
              <p className="text-muted mb-4">
                We guide your transformation with an outcome-first roadmap backed by domain experts, automation engineers, and data
                scientists.
              </p>
            </div>
            <div className="col-lg-7" data-aos="fade-left">
              <ol className="list-unstyled m-0">
                {thread.map((stage, index) => (
                  <li key={stage.heading} className="mb-4 d-flex gap-3 align-items-start">
                    <div className="rounded-circle bg-primary text-white fw-bold d-flex align-items-center justify-content-center" style={{ width: 44, height: 44 }}>
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="h6 fw-semibold mb-2">{stage.heading}</h3>
                      <p className="text-muted mb-0 small">{stage.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 py-lg-6 bg-dark text-white">
        <div className="container">
          <h2 className="h3 fw-bold text-center mb-4" data-aos="fade-up">
            Edge-Ready Workcells For Every Production Environment
          </h2>
          <div className="row g-4">
            {workcells.map((cell, index) => (
              <div className="col-lg-4" key={cell.title} data-aos="fade-up" data-aos-delay={index * 80}>
                <div className="card h-100 bg-white bg-opacity-10 border-0 rounded-4 overflow-hidden hover-lift">
                  <div className="ratio ratio-4x3">
                    <img src={cell.image} alt={cell.title} className="w-100 h-100" style={{ objectFit: "cover" }} />
                  </div>
                  <div className="card-body p-4">
                    <h3 className="h5 fw-semibold text-white mb-2">{cell.title}</h3>
                    <ul className="text-white-75 small mb-0 ps-3">
                      {cell.points.map((point) => (
                        <li key={point} className="mb-1">
                          {point}
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
          <div className="row g-4 align-items-center">
            <div className="col-lg-7" data-aos="fade-right">
              <h2 className="h3 fw-bold mb-3">Partner With Nexyos Manufacturing Specialists</h2>
              <p className="text-muted mb-4">
                Whether you are piloting a single line or scaling across a global enterprise, our team ensures your transformation
                delivers measurable outcomes from day one.
              </p>
              <ul className="text-muted small mb-0">
                <li className="mb-2">Industry 4.0 maturity assessments and business case development.</li>
                <li className="mb-2">Turnkey deployment services, OT security, and managed analytics.</li>
                <li>Change management, training, and continuous improvement coaching.</li>
              </ul>
            </div>
            <div className="col-lg-5" data-aos="fade-left">
              <div
                className="card border-0 h-100 text-white rounded-4 shadow-lg"
                style={{
                  background: "linear-gradient(135deg, rgba(15,82,134,0.95), rgba(17,150,160,0.85))",
                }}
              >
                <div className="card-body p-5 d-flex flex-column justify-content-between h-100">
                  <div>
                    <h3 className="h4 fw-semibold mb-3">Book A Factory Innovation Session</h3>
                    <p className="text-white-75 mb-4">
                      Co-create your roadmap with Nexyos architects, automation engineers, and data scientists. Discover how to unlock
                      productivity, resiliency, and sustainability at scale.
                    </p>
                  </div>
                  <div className="pt-4">
                    <a href="/contact" className="btn btn-light fw-semibold text-uppercase px-4">
                      Talk To Experts
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

export default Manufacturing;
