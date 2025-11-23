import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Social Media Growth Campaign",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800",
    description: "300% engagement increase for e-commerce brand",
    client: "E-Commerce Brand",
  },
  {
    id: 2,
    title: "AI Chatbot Implementation",
    category: "AI Solutions",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800",
    description: "40% support cost reduction with intelligent automation",
    client: "Tech Startup",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    category: "Web Dev",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800",
    description: "Full-stack development with modern architecture",
    client: "Retail Company",
  },
  {
    id: 4,
    title: "ML Model Training",
    category: "AI Solutions",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    description: "Predictive analytics for business intelligence",
    client: "Finance Firm",
  },
  {
    id: 5,
    title: "Content Management System",
    category: "Web Dev",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    description: "Custom CMS with advanced features",
    client: "Media Company",
  },
  {
    id: 6,
    title: "Brand Strategy & Social Management",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800",
    description: "500K followers growth in 6 months",
    client: "Fashion Brand",
  },
];

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const categories = ["All", "Social Media", "AI Solutions", "Web Dev", "Training"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="section portfolio-section">
      <div className="container">
        <h2 className="section-title">Featured Projects & Results</h2>
        <p className="section-subtitle">See how we've transformed businesses</p>

        <div className="portfolio-filters">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`filter-btn ${activeFilter === category ? "active" : ""}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="portfolio-card">
              <div className="portfolio-image">
                <img src={project.image} alt={project.title} />
                <div className="portfolio-overlay">
                  <div>
                    <h4 style={{ color: "#ffffff", marginBottom: "8px" }}>{project.title}</h4>
                    <p style={{ color: "#E8E8E8", fontSize: "14px" }}>{project.description}</p>
                  </div>
                </div>
              </div>
              <div className="portfolio-content">
                <span className="portfolio-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p style={{ fontSize: "14px", marginBottom: "8px" }}>{project.description}</p>
                <p style={{ fontSize: "12px", color: "#006494" }}>{project.client}</p>
                <a href="#" style={{ color: "#006494", fontWeight: 600, marginTop: "12px", display: "inline-block" }}>
                  View Case Study →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <button className="btn btn-primary">View All Projects</button>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
