import React from "react";

const heroImage =
  "https://images.pexels.com/photos/4254160/pexels-photo-4254160.jpeg?auto=compress&cs=tinysrgb&w=1600";

const outcomes = [
  { label: "Energy Cost Reduction", value: "30%", detail: "via dynamic optimization of HVAC, lighting, and process loads." },
  { label: "Emissions Avoided", value: "12K tCO₂e", detail: "through clean energy orchestration and demand response programs." },
  { label: "Payback Period", value: "18 months", detail: "average across multi-site rollouts with incentive capture." },
];

const levers = [
  {
    title: "Smart Loads",
    description:
      "AI adjusts HVAC, chillers, industrial equipment, and EV charging based on occupancy, tariffs, and weather forecasts.",
    icon: "https://raw.githubusercontent.com/feathericons/feather/master/icons/sliders.svg",
  },
  {
    title: "Distributed Energy Resources",
    description:
      "Optimize solar, storage, microgrids, and generators to shave peaks, island critical systems, and monetize flexibility.",
    icon: "https://raw.githubusercontent.com/feathericons/feather/master/icons/battery-charging.svg",
  },
  {
    title: "Sustainability Intelligence",
    description:
      "Automate ESG reporting, scope 1-3 tracking, and capitalize on incentives with trusted measurement and verification.",
    icon: "https://raw.githubusercontent.com/feathericons/feather/master/icons/pie-chart.svg",
  },
];

const portfolioTiles = [
  {
    title: "Corporate & Commercial",
    image: "https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg?auto=compress&cs=tinysrgb&w=1600",
    text: "Integrate smart BMS, occupancy analytics, and clean energy assets to meet enterprise sustainability goals.",
  },
  {
    title: "Industrial & Logistics",
    image: "https://images.pexels.com/photos/221047/pexels-photo-221047.jpeg?auto=compress&cs=tinysrgb&w=1600",
    text: "Balance production energy demands, process heat recovery, and microgrid resiliency with predictive controls.",
  },
  {
    title: "Retail & Hospitality",
    image: "https://images.pexels.com/photos/696996/pexels-photo-696996.jpeg?auto=compress&cs=tinysrgb&w=1600",
    text: "Deliver comfortable experiences while orchestrating refrigeration, kitchen, and EV loads across distributed sites.",
  },
];

const roadmap = [
  {
    stage: "Benchmark & Blueprint",
    detail:
      "Consolidate utility data, evaluate tariffs, and baseline performance across sites. Prioritize projects with financial modeling.",
  },
  {
    stage: "Connect & Control",
    detail:
      "Deploy IoT gateways, integrate BMS, and instrument critical loads. Establish digital twin with real-time metering and forecasting.",
  },
  {
    stage: "Optimize & Automate",
    detail:
      "Run AI optimization to orchestrate loads, DERs, and demand response. Automate fault detection and predictive maintenance.",
  },
  {
    stage: "Report & Reinvest",
    detail:
      "Automate ESG and compliance reporting, verify savings, and reinvest in clean energy upgrades with transparent ROI tracking.",
  },
];

const EnergyEfficiency = () => {
  return (
    <section className="solution-page overflow-hidden pt-5 pb-5 pb-lg-6">
      <header
        className="position-relative overflow-hidden mb-5"
        style={{
          backgroundImage: `linear-gradient(125deg, rgba(10,64,68,0.88), rgba(37,179,162,0.85)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="position-absolute top-0 bottom-0 start-0 end-0 bg-dark bg-opacity-25" />
        <div className="container position-relative text-white py-5 py-lg-6">
          <div className="row g-4 align-items-center">
            <div className="col-lg-7" data-aos="fade-right">
              <span className="badge bg-warning text-dark fw-semibold text-uppercase letter-spacing mb-3">
                Energy Efficiency
              </span>
              <h1 className="display-4 fw-bold mb-3 lh-sm">Accelerate Net-Zero And Profitability With Intelligent Energy Control</h1>
              <p className="lead text-white-75 mb-4">
                Nexyos orchestrates building systems, distributed energy resources, and sustainability programs to unlock continuous
                savings while meeting ESG goals.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <a href="#levers" className="btn btn-light text-uppercase fw-semibold px-4 shadow-sm">
                  Explore Levers
                </a>
                <a href="/contact" className="btn btn-outline-light text-uppercase fw-semibold px-4">
                  Start A Net-Zero Roadmap
                </a>
              </div>
            </div>
            <div className="col-lg-5" data-aos="fade-left" data-aos-delay="120">
              <div className="rounded-4 bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-10 shadow-lg p-4">
                <h2 className="h6 text-white fw-semibold mb-3">Programs At A Glance</h2>
                <ul className="text-white-75 small mb-0">
                  <li className="mb-2">• Smart portfolio command center with real-time carbon and cost dashboards.</li>
                  <li className="mb-2">• Integrated demand response and capacity market optimization.</li>
                  <li>• Incentive capture, financing, and continuous commissioning services.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="py-5 py-lg-6 container">
        <div className="row row-cols-1 row-cols-md-3 g-4" data-aos="fade-up">
          {outcomes.map((metric, index) => (
            <div className="col" key={metric.label} data-aos="fade-up" data-aos-delay={index * 70}>
              <div className="card h-100 border-0 shadow-sm rounded-4 hover-lift p-4 text-center">
                <h3 className="display-6 fw-bold text-success mb-2">{metric.value}</h3>
                <p className="fw-semibold text-muted mb-1">{metric.label}</p>
                <p className="small text-secondary mb-0">{metric.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="levers" className="py-5 py-lg-6 bg-light">
        <div className="container">
          <h2 className="h3 fw-bold text-center mb-4" data-aos="fade-up">
            Levers For Intelligent Energy Transformation
          </h2>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {levers.map((lever, index) => (
              <div className="col" key={lever.title} data-aos="fade-up" data-aos-delay={index * 80}>
                <div className="card h-100 border-0 shadow-sm rounded-4 hover-lift p-4 text-center">
                  <div className="rounded-circle bg-white d-inline-flex align-items-center justify-content-center mb-3 shadow-sm" style={{ width: 70, height: 70 }}>
                    <img src={lever.icon} alt={lever.title} style={{ width: 32, height: 32 }} />
                  </div>
                  <h3 className="h5 fw-semibold mb-2">{lever.title}</h3>
                  <p className="text-muted mb-0">{lever.description}</p>
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
              <h2 className="h3 fw-bold mb-3">Portfolio-Wide Impact</h2>
              <p className="text-muted mb-4">
                From corporate headquarters to industrial campuses, Nexyos helps leaders execute energy efficiency and sustainability
                programs with confidence.
              </p>
            </div>
            <div className="col-lg-7" data-aos="fade-left">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
                {portfolioTiles.map((item) => (
                  <div className="col" key={item.title}>
                    <div className="card h-100 border-0 rounded-4 shadow-sm overflow-hidden hover-lift">
                      <div className="ratio ratio-16x9">
                        <img src={item.image} alt={item.title} className="w-100 h-100" style={{ objectFit: "cover" }} />
                      </div>
                      <div className="card-body p-4">
                        <h3 className="h6 fw-semibold mb-2">{item.title}</h3>
                        <p className="text-muted mb-0 small">{item.text}</p>
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
            Energy Transformation Roadmap
          </h2>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            {roadmap.map((step, index) => (
              <div className="col" key={step.stage} data-aos="fade-up" data-aos-delay={index * 70}>
                <div className="card h-100 bg-white bg-opacity-10 border-0 rounded-4 hover-lift p-4">
                  <h3 className="h6 fw-semibold text-warning mb-2">
                    {index + 1}. {step.stage}
                  </h3>
                  <p className="text-white-50 mb-0">{step.detail}</p>
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
              <h2 className="h3 fw-bold mb-3">Unlock Incentives And Continuous Savings</h2>
              <p className="text-muted mb-4">
                Nexyos energy strategists, engineers, and analysts deliver turnkey execution—from assessment to automation and ongoing
                optimization.
              </p>
              <ul className="text-muted small mb-0">
                <li className="mb-2">Comprehensive energy audits, digital twins, and financing strategy.</li>
                <li className="mb-2">Implementation of smart controls, DER integration, and optimization services.</li>
                <li>Automated ESG reporting, carbon accounting, and performance verification.</li>
              </ul>
            </div>
            <div className="col-lg-5" data-aos="fade-left">
              <div
                className="card border-0 h-100 text-white rounded-4 shadow-lg"
                style={{
                  background: "linear-gradient(135deg, rgba(12,90,100,0.95), rgba(33,190,172,0.88))",
                }}
              >
                <div className="card-body p-5 d-flex flex-column justify-content-between h-100">
                  <div>
                    <h3 className="h4 fw-semibold mb-3">Energy Optimization Workshop</h3>
                    <p className="text-white-75 mb-4">
                      Partner with Nexyos to quantify savings potential, identify incentive pathways, and build an actionable roadmap to
                      net-zero.
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

export default EnergyEfficiency;
