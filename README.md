---
layout: null
---
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ampuero & Jules - Landing Page</title>
    <style>
        /* CSS Reset and Variables */
        :root {
            --bg-color: #0f172a;
            --text-main: #f8fafc;
            --text-muted: #94a3b8;
            --accent-1: #3b82f6; /* Blue */
            --accent-2: #8b5cf6; /* Purple */
            --accent-3: #10b981; /* Green */
        }
        
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
            background-color: var(--bg-color);
            color: var(--text-main);
            line-height: 1.6;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            overflow-x: hidden;
            background-image: 
                radial-gradient(circle at 15% 50%, rgba(59, 130, 246, 0.12), transparent 25%),
                radial-gradient(circle at 85% 30%, rgba(139, 92, 246, 0.12), transparent 25%);
        }

        .container {
            max-width: 900px;
            padding: 3rem 2rem;
            text-align: center;
            animation: fadeIn 1.2s ease-out;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* SVG Graphics */
        .hero-graphic {
            margin-bottom: 2rem;
            display: flex;
            justify-content: center;
        }

        .hero-svg {
            width: 180px;
            height: 180px;
            filter: drop-shadow(0 10px 20px rgba(0,0,0,0.3));
        }

        .spin-slow {
            transform-origin: center;
            animation: spin 25s linear infinite;
        }

        .spin-slow-reverse {
            transform-origin: center;
            animation: spin 30s linear infinite reverse;
        }

        .pulse-opacity {
            animation: pulseOp 4s ease-in-out infinite;
        }

        @keyframes spin { 100% { transform: rotate(360deg); } }
        @keyframes pulseOp { 0%, 100% { opacity: 0.7; } 50% { opacity: 1; } }

        /* Typography */
        h1 {
            font-size: 3.5rem;
            font-weight: 800;
            margin-bottom: 1rem;
            background: linear-gradient(135deg, var(--accent-1), var(--accent-2));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            letter-spacing: -1px;
        }

        .subtitle {
            font-size: 1.25rem;
            color: var(--text-muted);
            max-width: 600px;
            margin: 0 auto 3rem auto;
        }

        .text-accent {
            color: var(--text-main);
            font-weight: 600;
            border-bottom: 2px solid var(--accent-2);
        }

        /* Features Grid */
        .features {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
        }

        .card {
            background: rgba(30, 41, 59, 0.6);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 16px;
            padding: 2rem;
            backdrop-filter: blur(10px);
            transition: all 0.3s ease;
            text-align: left;
        }

        .card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
            border-color: rgba(139, 92, 246, 0.3);
        }

        .card-icon {
            width: 48px;
            height: 48px;
            margin-bottom: 1.5rem;
        }

        .card h3 {
            font-size: 1.25rem;
            margin-bottom: 0.75rem;
            color: var(--text-main);
        }

        .card p {
            font-size: 0.95rem;
            color: var(--text-muted);
        }

        /* Status indicator */
        .status {
            display: inline-flex;
            align-items: center;
            background: rgba(16, 185, 129, 0.1);
            padding: 0.5rem 1rem;
            border-radius: 9999px;
            border: 1px solid rgba(16, 185, 129, 0.2);
            margin-bottom: 2rem;
        }

        .status-dot {
            width: 8px;
            height: 8px;
            background-color: var(--accent-3);
            border-radius: 50%;
            margin-right: 8px;
            box-shadow: 0 0 0 rgba(16, 185, 129, 0.4);
            animation: pulse-ring 2s infinite;
        }

        @keyframes pulse-ring {
            0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4); }
            70% { box-shadow: 0 0 0 6px rgba(16, 185, 129, 0); }
            100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }

        .status-text {
            color: var(--accent-3);
            font-size: 0.875rem;
            font-weight: 500;
        }

        /* Footer */
        footer {
            margin-top: 4rem;
            padding-top: 2rem;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
            color: var(--text-muted);
            font-size: 0.9rem;
        }

        /* Responsive */
        @media (max-width: 768px) {
            h1 { font-size: 2.5rem; }
            .container { padding: 2rem 1rem; }
        }
    </style>
</head>
<body>

    <div class="container">
        
        <div class="status">
            <div class="status-dot"></div>
            <span class="status-text">Trabajo en Progreso - Online</span>
        </div>

        <div class="hero-graphic">
            <svg class="hero-svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="gradPrimary" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:1" />
                    </linearGradient>
                    <linearGradient id="gradSecondary" x1="100%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style="stop-color:#10b981;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#3b82f6;stop-opacity:1" />
                    </linearGradient>
                </defs>
                <!-- Outer Ring -->
                <circle cx="100" cy="100" r="85" fill="none" stroke="url(#gradPrimary)" stroke-width="2" stroke-dasharray="10 15" class="spin-slow"/>
                <!-- Inner Ring -->
                <circle cx="100" cy="100" r="65" fill="none" stroke="url(#gradSecondary)" stroke-width="3" stroke-dasharray="20 10" class="spin-slow-reverse"/>
                <!-- Center Triangle -->
                <path d="M100 45 L150 125 L50 125 Z" fill="url(#gradPrimary)" class="pulse-opacity" />
                <!-- Core -->
                <circle cx="100" cy="105" r="15" fill="#0f172a" />
            </svg>
        </div>

        <h1>Ampuero's Hub</h1>
        
        <p class="subtitle">
            ¡Bienvenido! Esta página es el resultado de una colaboración en conjunto entre <span class="text-accent">Ampuero</span> y <span class="text-accent">Jules (IA)</span>. Comenzamos como una landing page básica, pero estamos elaborando algo asombroso y moderno.
        </p>

        <div class="features">
            <!-- Card 1 -->
            <div class="card">
                <svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
                <h3>Diseño Responsivo</h3>
                <p>Estructura pensada para lucir perfecta en cualquier dispositivo, con un esquema de colores profundos y vibrantes.</p>
            </div>

            <!-- Card 2 -->
            <div class="card">
                <svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <h3>Efectos Visuales</h3>
                <p>Gráficos SVG modernos, animaciones suaves y una experiencia de usuario interactiva y pulida.</p>
            </div>

            <!-- Card 3 -->
            <div class="card">
                <svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4-4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                <h3>Trabajo en Equipo</h3>
                <p>Próximamente añadiremos los gráficos regulares y más contenido. La sinergia entre humano e IA sigue creando.</p>
            </div>
        </div>

        <footer>
            <p>Construyendo el futuro, una línea de código a la vez.</p>
            <p style="margin-top: 0.5rem;">&copy; 2024 Ampuero & Jules</p>
        </footer>

    </div>

</body>
</html>
