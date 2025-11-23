import { FaStar } from "react-icons/fa";

const stats = [
  { number: "500+", label: "Happy Clients" },
  { number: "1000+", label: "Projects Delivered" },
  { number: "95%", label: "Success Rate" },
  { number: "50+", label: "Expert Trainers" },
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    title: "CEO, TechStart Inc.",
    avatar: "https://i.pravatar.cc/150?img=1",
    quote: "Aceai transformed our business with their AI solutions. The team is professional, innovative, and delivers exceptional results. Our productivity increased by 300%.",
    rating: 5,
    service: "AI Solutions",
  },
  {
    name: "Priya Sharma",
    title: "Student, Python Program",
    avatar: "https://i.pravatar.cc/150?img=2",
    quote: "The Python training program exceeded my expectations. Hands-on projects and expert guidance helped me land my dream job. Highly recommended!",
    rating: 5,
    service: "Training",
  },
  {
    name: "Amit Patel",
    title: "Founder, Digital Solutions",
    avatar: "https://i.pravatar.cc/150?img=3",
    quote: "Outstanding social media management. Our engagement increased by 500% and brand awareness skyrocketed. They truly understand digital marketing.",
    rating: 5,
    service: "Social Media",
  },
  {
    name: "Sneha Reddy",
    title: "CTO, E-Commerce Platform",
    avatar: "https://i.pravatar.cc/150?img=4",
    quote: "The web development team built us a scalable platform that handles millions of users. Professional, timely, and cost-effective solution.",
    rating: 5,
    service: "Web Development",
  },
  {
    name: "Vikram Singh",
    title: "Director, AI Startup",
    avatar: "https://i.pravatar.cc/150?img=5",
    quote: "Their Generative AI expertise helped us build cutting-edge products. The team's knowledge of LLMs and prompt engineering is exceptional.",
    rating: 5,
    service: "Generative AI",
  },
  {
    name: "Anjali Mehta",
    title: "Marketing Manager",
    avatar: "https://i.pravatar.cc/150?img=6",
    quote: "The agentic AI solution automated our entire customer support. 24/7 availability with intelligent responses. Game changer for our business!",
    rating: 5,
    service: "Agentic AI",
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="container">
        <div className="stats-row">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        <h2 className="section-title">What Our Clients & Students Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="star" />
                ))}
              </div>
              <p className="testimonial-quote">"{testimonial.quote}"</p>
              <div className="testimonial-author">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="testimonial-avatar"
                />
                <div className="testimonial-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.title}</p>
                  <p style={{ fontSize: "12px", color: "#6B7280", marginTop: "4px" }}>
                    {testimonial.service}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
