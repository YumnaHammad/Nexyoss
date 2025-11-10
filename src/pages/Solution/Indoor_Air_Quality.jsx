import React from "react";

const heroImage =
  "https://images.pexels.com/photos/4792492/pexels-photo-4792492.jpeg?auto=compress&cs=tinysrgb&w=1600";

const sensors = [
  {
    name: "Wellness Beacons",
    desc: "Compact, aesthetic sensors capture CO₂, TVOCs, particulates, humidity, and sound to monitor wellbeing.",
    icon: "https://raw.githubusercontent.com/feathericons/feather/master/icons/airplay.svg",
  },
  {
    name: "Environmental Gateways",
    desc: "Edge gateways aggregate data from BMS, HVAC, lighting, and occupancy for a single source of truth.",
    icon: "https://raw.githubusercontent.com/feathericons/feather/master/icons/cloud.svg",
  },
  {
    name: "Responder Automations",
    desc: "Automated playbooks adjust ventilation, trigger cleaning, and inform occupants when thresholds are breached.",
    icon: "https://raw.githubusercontent.com/feathericons/feather/master/icons/refresh-cw.svg",
  },
];

const healthImpacts = [
  {
    label: "CO₂ Exposure",
    value: "<800 ppm",
    detail: "Supports cognitive function and minimizes drowsiness in classrooms and meeting rooms.",
  },
  {
    label: "Particulate Matter",
    value: "↓ 63%",
    detail: "High-efficiency filtration with proactive maintenance reduces allergens and pollutants.",
  },
  {
    label: "Ventilation Effectiveness",
    value: "+45%",
    detail: "Dynamic ventilation and purging strategies protect high-density spaces throughout the day.",
  },
];

const habitats = [
  {
    title: "Workplace & Commercial",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600",
    points: [
      "Integrate IAQ insights with hot-desking, room booking, and WELL certification initiatives.",
      "Provide employees with transparency dashboards, wellness notifications, and comfort controls.",
    ],
  },
  {
    title: "Education & Healthcare",
    image: "https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg?auto=compress&cs=tinysrgb&w=1600",
    points: [
      "Monitor sensitive spaces—labs, clinics, classrooms—for pathogens, VOC spikes, and humidity thresholds.",
      "Execute rapid response workflows for cleaning staff and facility managers when anomalies occur.",
    ],
  },
  {
    title: "Hospitality & Residential",
    image: "https://images.pexels.com/photos/1181395/pexels-photo-1181395.jpeg?auto=compress&cs=tinysrgb&w=1600",
    points: [
      "Deliver guest-facing wellness experiences via mobile apps, digital signage, and voice assistants.",
      "Integrate with smart HVAC, window control, and scent diffusion for curated atmospheres.",
    ],
  },
];

const programSteps = [
  {
    title: "Assess",
    text: "Audit IAQ goals, regulatory requirements, and existing BMS/IoT assets. Define KPIs for wellbeing, energy, and sustainability.",
  },
  {
    title: "Instrument",
    text: "Deploy sensors and integrate BMS data. Establish baselines, occupancy profiles, and automated alerting thresholds.",
  },
  {
    title: "Act",
    text: "Enable automated ventilation, filtration, UV, and cleaning workflows. Share insights with occupants in real time.",
  },
  {
    title: "Improve",
    text: "Leverage analytics to optimize energy use, maintenance cycles, and occupant experience across the portfolio.",
  },
];

const Indoor_Air_Quality = () => {
  return (
    <section className="solution-page overflow-hidden pt-5 pb-5 pb-lg-6">
      <header
        className="position-relative overflow-hidden mb-5"
        style={{
          backgroundImage: `linear-gradient(120deg, rgba(0,115,95,0.85), rgba(0,173,172,0.78)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="position-absolute top-0 bottom-0 start-0 end-0 bg-dark bg-opacity-25" />
        <div className="container position-relative text-white py-5 py-lg-6">
          <div className="row g-4 align-items-center">
            <div className="col-lg-7" data-aos="fade-right">
              <span className="badge bg-light text-success fw-semibold text-uppercase letter-spacing mb-3">
                Indoor Air Quality
              </span>
              <h1 className="display-4 fw-bold mb-3 lh-sm">Create Healthy, Transparent, and Responsive Indoor Environments</h1>
              <p className="lead text-white-75 mb-4">
                Nexyos harmonizes air sensing, building automation, and occupant engagement to deliver wellness outcomes without
                sacrificing energy performance.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <a href="#sensors" className="btn btn-light text-uppercase fw-semibold px-4 shadow-sm">
                  Explore Platform
                </a>
                <a href="/contact" className="btn btn-outline-light text-uppercase fw-semibold px-4">
                  Consult An IAQ Expert
                </a>
              </div>
            </div>
            <div className="col-lg-5" data-aos="fade-left" data-aos-delay="100">
              <div className="rounded-4 bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-10 shadow-lg p-4">
                <h2 className="h6 text-white fw-semibold mb-3">Key Outcomes</h2>
                <ul className="list-unstyled text-white-75 small mb-0">
                  <li className="mb-2">• Demonstrated WELL, RESET, and Fitwel compliance with automated reporting.</li>
                  <li className="mb-2">• Occupant trust and productivity gains via transparency dashboards and alerts.</li>
                  <li>• Energy savings of up to 20% by balancing ventilation needs with smart scheduling and occupancy insights.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="sensors" className="py-5 py-lg-6 container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {sensors.map((sensor, index) => (
            <div className="col" key={sensor.name} data-aos="fade-up" data-aos-delay={index * 80}>
              <div className="card h-100 border-0 shadow-sm rounded-4 hover-lift p-4 text-center">
                <div className="rounded-circle bg-light d-inline-flex align-items-center justify-content-center mb-3 shadow-sm" style={{ width: 72, height: 72 }}>
                  <img src={sensor.icon} alt={sensor.name} style={{ width: 34, height: 34 }} />
                </div>
                <h3 className="h5 fw-semibold mb-2">{sensor.name}</h3>
                <p className="text-muted mb-0">{sensor.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-5 py-lg-6 bg-light">
        <div className="container">
          <div className="row g-4">
            {healthImpacts.map((impact, index) => (
              <div className="col-lg-4" key={impact.label} data-aos="fade-up" data-aos-delay={index * 60}>
                <div className="card h-100 border-0 rounded-4 shadow-sm p-4 hover-lift">
                  <h3 className="display-6 fw-bold text-success mb-2">{impact.value}</h3>
                  <p className="fw-semibold text-muted mb-1">{impact.label}</p>
                  <p className="small text-secondary mb-0">{impact.detail}</p>
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
              <h2 className="h3 fw-bold mb-3">IAQ For Every Habitat</h2>
              <p className="text-muted mb-4">
                Organizations use Nexyos to achieve healthy buildings across their entire portfolio—from high-rise offices to
                classrooms and hospitality suites.
              </p>
            </div>
            <div className="col-lg-7" data-aos="fade-left">
              <div className="row row-cols-1 row-cols-lg-2 g-4">
                {habitats.map((space) => (
                  <div className="col" key={space.title}>
                    <div className="card border-0 rounded-4 shadow-sm overflow-hidden hover-lift">
                      <div className="ratio ratio-16x9">
                        <img src={space.image} alt={space.title} className="w-100 h-100" style={{ objectFit: "cover" }} />
                      </div>
                      <div className="card-body p-4">
                        <h3 className="h6 fw-semibold mb-2">{space.title}</h3>
                        <ul className="text-muted small ps-3 mb-0">
                          {space.points.map((point) => (
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
          </div>
        </div>
      </section>

      <section className="py-5 py-lg-6 bg-dark text-white">
        <div className="container">
          <h2 className="h3 fw-bold text-center mb-4" data-aos="fade-up">
            Build A Program People Trust
          </h2>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            {programSteps.map((step, index) => (
              <div className="col" key={step.title} data-aos="fade-up" data-aos-delay={index * 70}>
                <div className="card h-100 bg-white bg-opacity-10 border-0 rounded-4 hover-lift p-4">
                  <h3 className="h6 fw-semibold text-warning mb-2">
                    {index + 1}. {step.title}
                  </h3>
                  <p className="text-white-50 mb-0">{step.text}</p>
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
              <h2 className="h3 fw-bold mb-3">Partner With Nexyos For Healthier Buildings</h2>
              <p className="text-muted mb-4">
                Our wellness strategists, building engineers, and analytics teams help you move from reactive compliance to proactive
                occupant experience.
              </p>
              <ul className="text-muted small mb-0">
                <li className="mb-2">Comprehensive IAQ strategy, roadmap, and ROI modeling.</li>
                <li className="mb-2">BMS integration, commissioning, and managed wellness operations.</li>
                <li>Occupant engagement programs, ESG reporting, and continuous improvement coaching.</li>
              </ul>
            </div>
            <div className="col-lg-5" data-aos="fade-left">
              <div
                className="card border-0 h-100 text-white rounded-4 shadow-lg"
                style={{
                  background: "linear-gradient(135deg, rgba(0,140,125,0.95), rgba(0,190,160,0.85))",
                }}
              >
                <div className="card-body p-5 d-flex flex-column justify-content-between h-100">
                  <div>
                    <h3 className="h4 fw-semibold mb-3">IAQ Strategy Session</h3>
                    <p className="text-white-75 mb-4">
                      Collaborate with Nexyos experts to blueprint wellness goals, technology roadmap, and change management needed to
                      deliver healthier spaces across your portfolio.
                    </p>
                  </div>
                  <div className="pt-4">
                    <a href="/contact" className="btn btn-light fw-semibold text-uppercase px-4">
                      Book A Session
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

export default Indoor_Air_Quality;
