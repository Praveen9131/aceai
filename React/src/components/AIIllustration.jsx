import React from "react";

function AIIllustration() {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative", overflow: "hidden" }}>
      <svg
        viewBox="0 0 800 600"
        style={{ width: "100%", height: "100%", display: "block" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#0a0e27", stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: "#1a1f3a", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#0f1419", stopOpacity: 1 }} />
          </linearGradient>

          <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#00d4ff", stopOpacity: 0.9 }} />
            <stop offset="50%" style={{ stopColor: "#0099cc", stopOpacity: 0.8 }} />
            <stop offset="100%" style={{ stopColor: "#0066ff", stopOpacity: 0.9 }} />
          </linearGradient>

          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "#00d4ff", stopOpacity: 0.3 }} />
            <stop offset="50%" style={{ stopColor: "#0066ff", stopOpacity: 0.5 }} />
            <stop offset="100%" style={{ stopColor: "#00d4ff", stopOpacity: 0.3 }} />
          </linearGradient>

          <radialGradient id="glowGradient" cx="50%" cy="50%">
            <stop offset="0%" style={{ stopColor: "#00d4ff", stopOpacity: 0.6 }} />
            <stop offset="50%" style={{ stopColor: "#0066ff", stopOpacity: 0.3 }} />
            <stop offset="100%" style={{ stopColor: "#0066ff", stopOpacity: 0 }} />
          </radialGradient>

          <linearGradient id="brainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#00ffff", stopOpacity: 0.8 }} />
            <stop offset="50%" style={{ stopColor: "#0099ff", stopOpacity: 0.6 }} />
            <stop offset="100%" style={{ stopColor: "#0066ff", stopOpacity: 0.4 }} />
          </linearGradient>

          {/* Glow filters */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="strongGlow">
            <feGaussianBlur stdDeviation="5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Animated patterns */}
          <pattern id="dataStream" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="1" fill="#00d4ff" opacity="0.6">
              <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2s" repeatCount="indefinite" />
            </circle>
          </pattern>
        </defs>

        {/* Background */}
        <rect width="800" height="600" fill="url(#bgGradient)" />

        {/* Abstract background patterns */}
        <circle cx="100" cy="100" r="150" fill="url(#glowGradient)" opacity="0.2" />
        <circle cx="700" cy="500" r="120" fill="url(#glowGradient)" opacity="0.15" />
        <circle cx="400" cy="50" r="100" fill="url(#glowGradient)" opacity="0.1" />

        {/* Neural Network Connections */}
        <g id="neuralNetwork">
          {/* Main connections */}
          <line x1="200" y1="150" x2="300" y2="200" stroke="url(#connectionGradient)" strokeWidth="2" opacity="0.4" filter="url(#glow)" />
          <line x1="300" y1="200" x2="400" y2="180" stroke="url(#connectionGradient)" strokeWidth="2" opacity="0.4" filter="url(#glow)" />
          <line x1="400" y1="180" x2="500" y2="220" stroke="url(#connectionGradient)" strokeWidth="2" opacity="0.4" filter="url(#glow)" />
          <line x1="500" y1="220" x2="600" y2="200" stroke="url(#connectionGradient)" strokeWidth="2" opacity="0.4" filter="url(#glow)" />
          
          <line x1="250" y1="250" x2="350" y2="280" stroke="url(#connectionGradient)" strokeWidth="2" opacity="0.3" filter="url(#glow)" />
          <line x1="350" y1="280" x2="450" y2="300" stroke="url(#connectionGradient)" strokeWidth="2" opacity="0.3" filter="url(#glow)" />
          <line x1="450" y1="300" x2="550" y2="320" stroke="url(#connectionGradient)" strokeWidth="2" opacity="0.3" filter="url(#glow)" />
          
          <line x1="200" y1="350" x2="300" y2="380" stroke="url(#connectionGradient)" strokeWidth="2" opacity="0.35" filter="url(#glow)" />
          <line x1="300" y1="380" x2="400" y2="400" stroke="url(#connectionGradient)" strokeWidth="2" opacity="0.35" filter="url(#glow)" />
          <line x1="400" y1="400" x2="500" y2="420" stroke="url(#connectionGradient)" strokeWidth="2" opacity="0.35" filter="url(#glow)" />
          <line x1="500" y1="420" x2="600" y2="400" stroke="url(#connectionGradient)" strokeWidth="2" opacity="0.35" filter="url(#glow)" />

          {/* Cross connections */}
          <line x1="300" y1="200" x2="350" y2="280" stroke="url(#connectionGradient)" strokeWidth="1.5" opacity="0.25" filter="url(#glow)" />
          <line x1="400" y1="180" x2="450" y2="300" stroke="url(#connectionGradient)" strokeWidth="1.5" opacity="0.25" filter="url(#glow)" />
          <line x1="500" y1="220" x2="550" y2="320" stroke="url(#connectionGradient)" strokeWidth="1.5" opacity="0.25" filter="url(#glow)" />
          <line x1="350" y1="280" x2="300" y2="380" stroke="url(#connectionGradient)" strokeWidth="1.5" opacity="0.25" filter="url(#glow)" />
          <line x1="450" y1="300" x2="400" y2="400" stroke="url(#connectionGradient)" strokeWidth="1.5" opacity="0.25" filter="url(#glow)" />
        </g>

        {/* Neural Network Nodes */}
        <g id="nodes">
          <circle cx="200" cy="150" r="8" fill="url(#nodeGradient)" filter="url(#strongGlow)">
            <animate attributeName="r" values="8;10;8" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="300" cy="200" r="10" fill="url(#nodeGradient)" filter="url(#strongGlow)">
            <animate attributeName="r" values="10;12;10" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="400" cy="180" r="12" fill="url(#nodeGradient)" filter="url(#strongGlow)">
            <animate attributeName="r" values="12;14;12" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="500" cy="220" r="10" fill="url(#nodeGradient)" filter="url(#strongGlow)">
            <animate attributeName="r" values="10;12;10" dur="2.2s" repeatCount="indefinite" />
          </circle>
          <circle cx="600" cy="200" r="8" fill="url(#nodeGradient)" filter="url(#strongGlow)">
            <animate attributeName="r" values="8;10;8" dur="2s" repeatCount="indefinite" />
          </circle>
          
          <circle cx="250" cy="250" r="7" fill="url(#nodeGradient)" filter="url(#glow)">
            <animate attributeName="r" values="7;9;7" dur="2.3s" repeatCount="indefinite" />
          </circle>
          <circle cx="350" cy="280" r="9" fill="url(#nodeGradient)" filter="url(#glow)">
            <animate attributeName="r" values="9;11;9" dur="2.7s" repeatCount="indefinite" />
          </circle>
          <circle cx="450" cy="300" r="11" fill="url(#nodeGradient)" filter="url(#glow)">
            <animate attributeName="r" values="11;13;11" dur="3.2s" repeatCount="indefinite" />
          </circle>
          <circle cx="550" cy="320" r="8" fill="url(#nodeGradient)" filter="url(#glow)">
            <animate attributeName="r" values="8;10;8" dur="2.4s" repeatCount="indefinite" />
          </circle>
          
          <circle cx="200" cy="350" r="6" fill="url(#nodeGradient)" filter="url(#glow)">
            <animate attributeName="r" values="6;8;6" dur="2.1s" repeatCount="indefinite" />
          </circle>
          <circle cx="300" cy="380" r="8" fill="url(#nodeGradient)" filter="url(#glow)">
            <animate attributeName="r" values="8;10;8" dur="2.6s" repeatCount="indefinite" />
          </circle>
          <circle cx="400" cy="400" r="10" fill="url(#nodeGradient)" filter="url(#glow)">
            <animate attributeName="r" values="10;12;10" dur="2.9s" repeatCount="indefinite" />
          </circle>
          <circle cx="500" cy="420" r="9" fill="url(#nodeGradient)" filter="url(#glow)">
            <animate attributeName="r" values="9;11;9" dur="2.8s" repeatCount="indefinite" />
          </circle>
          <circle cx="600" cy="400" r="7" fill="url(#nodeGradient)" filter="url(#glow)">
            <animate attributeName="r" values="7;9;7" dur="2.5s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Abstract Brain / AI Silhouette */}
        <g id="aiBrain" transform="translate(400, 300)">
          {/* Brain outline */}
          <path
            d="M -40,-30 Q -50,-20 -45,-10 Q -40,0 -30,5 Q -20,10 -10,8 Q 0,6 10,8 Q 20,10 30,5 Q 40,0 45,-10 Q 50,-20 40,-30 Q 30,-35 20,-32 Q 10,-30 0,-32 Q -10,-30 -20,-32 Q -30,-35 -40,-30 Z"
            fill="url(#brainGradient)"
            opacity="0.6"
            filter="url(#strongGlow)"
          >
            <animate attributeName="opacity" values="0.4;0.7;0.4" dur="3s" repeatCount="indefinite" />
          </path>
          
          {/* Neural pathways inside brain */}
          <path d="M -20,-10 Q -10,0 0,5 Q 10,0 20,-10" stroke="#00ffff" strokeWidth="1.5" fill="none" opacity="0.5" filter="url(#glow)" />
          <path d="M -15,0 Q 0,10 15,0" stroke="#00ffff" strokeWidth="1.5" fill="none" opacity="0.5" filter="url(#glow)" />
          <circle cx="-10" cy="-5" r="2" fill="#00ffff" opacity="0.8" filter="url(#glow)" />
          <circle cx="0" cy="0" r="2.5" fill="#00ffff" opacity="0.8" filter="url(#glow)" />
          <circle cx="10" cy="-5" r="2" fill="#00ffff" opacity="0.8" filter="url(#glow)" />
        </g>

        {/* Holographic Interface - Charts */}
        <g id="holographicUI" opacity="0.7">
          {/* Chart 1 - Line Chart */}
          <g transform="translate(100, 450)">
            <rect x="0" y="0" width="120" height="80" fill="rgba(0, 212, 255, 0.1)" stroke="#00d4ff" strokeWidth="1" rx="4" filter="url(#glow)" />
            <polyline
              points="10,60 30,50 50,40 70,30 90,20 100,15"
              fill="none"
              stroke="#00d4ff"
              strokeWidth="2"
              filter="url(#glow)"
            />
            <circle cx="10" cy="60" r="2" fill="#00d4ff" filter="url(#glow)" />
            <circle cx="30" cy="50" r="2" fill="#00d4ff" filter="url(#glow)" />
            <circle cx="50" cy="40" r="2" fill="#00d4ff" filter="url(#glow)" />
            <circle cx="70" cy="30" r="2" fill="#00d4ff" filter="url(#glow)" />
            <circle cx="90" cy="20" r="2" fill="#00d4ff" filter="url(#glow)" />
            <circle cx="100" cy="15" r="2" fill="#00d4ff" filter="url(#glow)" />
          </g>

          {/* Chart 2 - Bar Chart */}
          <g transform="translate(250, 480)">
            <rect x="0" y="0" width="100" height="50" fill="rgba(0, 102, 255, 0.1)" stroke="#0066ff" strokeWidth="1" rx="4" filter="url(#glow)" />
            <rect x="10" y="30" width="12" height="20" fill="#0066ff" opacity="0.7" filter="url(#glow)" />
            <rect x="28" y="20" width="12" height="30" fill="#0066ff" opacity="0.7" filter="url(#glow)" />
            <rect x="46" y="15" width="12" height="35" fill="#0066ff" opacity="0.7" filter="url(#glow)" />
            <rect x="64" y="25" width="12" height="25" fill="#0066ff" opacity="0.7" filter="url(#glow)" />
            <rect x="82" y="10" width="12" height="40" fill="#0066ff" opacity="0.7" filter="url(#glow)" />
          </g>

          {/* Code Snippet */}
          <g transform="translate(550, 450)">
            <rect x="0" y="0" width="180" height="100" fill="rgba(0, 212, 255, 0.08)" stroke="#00d4ff" strokeWidth="1" rx="4" filter="url(#glow)" />
            <text x="10" y="20" fontFamily="monospace" fontSize="10" fill="#00d4ff" opacity="0.8">
              <tspan x="10" dy="0">def train_model():</tspan>
              <tspan x="15" dy="15">  model = NeuralNet()</tspan>
              <tspan x="15" dy="15">  optimizer = Adam()</tspan>
              <tspan x="15" dy="15">  return model</tspan>
            </text>
          </g>

          {/* ML Graph */}
          <g transform="translate(100, 200)">
            <rect x="0" y="0" width="140" height="100" fill="rgba(0, 153, 255, 0.1)" stroke="#0099ff" strokeWidth="1" rx="4" filter="url(#glow)" />
            <ellipse cx="70" cy="50" rx="40" ry="30" fill="none" stroke="#0099ff" strokeWidth="2" opacity="0.6" filter="url(#glow)" />
            <circle cx="50" cy="40" r="4" fill="#0099ff" filter="url(#glow)" />
            <circle cx="70" cy="50" r="4" fill="#0099ff" filter="url(#glow)" />
            <circle cx="90" cy="60" r="4" fill="#0099ff" filter="url(#glow)" />
            <line x1="50" y1="40" x2="70" y2="50" stroke="#0099ff" strokeWidth="1.5" opacity="0.5" filter="url(#glow)" />
            <line x1="70" y1="50" x2="90" y2="60" stroke="#0099ff" strokeWidth="1.5" opacity="0.5" filter="url(#glow)" />
          </g>
        </g>

        {/* Data Streams */}
        <g id="dataStreams">
          <g opacity="0.6">
            <circle cx="150" cy="100" r="2" fill="#00d4ff" filter="url(#glow)">
              <animateMotion dur="3s" repeatCount="indefinite">
                <mpath href="#streamPath1" />
              </animateMotion>
            </circle>
            <path id="streamPath1" d="M 150,100 Q 200,150 250,200" fill="none" />
          </g>
          
          <g opacity="0.5">
            <circle cx="650" cy="150" r="2" fill="#0066ff" filter="url(#glow)">
              <animateMotion dur="2.5s" repeatCount="indefinite">
                <mpath href="#streamPath2" />
              </animateMotion>
            </circle>
            <path id="streamPath2" d="M 650,150 Q 600,200 550,250" fill="none" />
          </g>
          
          <g opacity="0.4">
            <circle cx="100" cy="400" r="2" fill="#00ffff" filter="url(#glow)">
              <animateMotion dur="4s" repeatCount="indefinite">
                <mpath href="#streamPath3" />
              </animateMotion>
            </circle>
            <path id="streamPath3" d="M 100,400 Q 200,350 300,300" fill="none" />
          </g>
        </g>

        {/* Algorithmic Patterns */}
        <g id="patterns" opacity="0.3">
          <circle cx="50" cy="300" r="3" fill="#00d4ff" filter="url(#glow)">
            <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="750" cy="250" r="3" fill="#0066ff" filter="url(#glow)">
            <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="700" cy="100" r="3" fill="#00ffff" filter="url(#glow)">
            <animate attributeName="opacity" values="0.2;0.6;0.2" dur="1.8s" repeatCount="indefinite" />
          </circle>
          <circle cx="50" cy="500" r="3" fill="#00d4ff" filter="url(#glow)">
            <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2.2s" repeatCount="indefinite" />
          </circle>
        </g>
      </svg>
    </div>
  );
}

export default AIIllustration;



