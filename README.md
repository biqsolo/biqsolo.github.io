# biqsolo.github.oi 
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>biqsoloDigital | Creative Agency & Digital Solutions</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        brand: {
                            500: '#22c55e',
                            600: '#16a34a',
                            700: '#15803d',
                        }
                    }
                }
            }
        }
    </script>
    <!-- FontAwesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body class="bg-slate-950 text-slate-100 font-sans antialiased">

    <!-- Announcement Bar -->
    <div class="bg-brand-600 text-white text-xs sm:text-sm font-semibold py-2.5 px-4 text-center">
        ⚡ Fast 24-Hour Express Delivery Available on All Services! 
        <a href="#contact" class="underline hover:text-slate-200 ml-1">Calculate Price &rarr;</a>
    </div>

    <!-- Navigation Header -->
    <header class="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div class="flex items-center space-x-3">
                <div class="w-10 h-10 rounded-xl bg-brand-500 flex items-center justify-center text-slate-950 font-bold text-xl shadow-lg shadow-brand-500/20">
                    A
                </div>
                <div>
                    <span class="text-xl font-extrabold tracking-tight text-white">Apex<span class="text-brand-500">Digital</span></span>
                    <span class="block text-[10px] uppercase tracking-widest text-slate-400 font-semibold -mt-1">Creative Agency</span>
                </div>
            </div>

            <nav class="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
                <a href="#services" class="hover:text-brand-500 transition-colors">Services</a>
                <a href="#about" class="hover:text-brand-500 transition-colors">About</a>
                <a href="#contact" class="hover:text-brand-500 transition-colors">Contact</a>
            </nav>

            <a href="#contact" class="hidden md:inline-flex px-5 py-2.5 rounded-lg bg-brand-500 hover:bg-brand-600 text-slate-950 font-bold text-sm transition-all shadow-md shadow-brand-500/10">
                Get Started
            </a>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="relative py-16 lg:py-28 overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div class="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-brand-500 text-xs font-semibold mb-6">
                <span class="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
                <span>PROFESSIONAL DIGITAL SOLUTIONS IN NIGERIA</span>
            </div>
            
            <h1 class="text-3xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                Transform Your Brand with <span class="text-brand-500">World-Class Digital Design</span>
            </h1>

            <p class="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 mb-8 leading-relaxed">
                Elevate your business with stunning flyers, professional CVs, brand logos, engaging social media content, and high-converting websites.
            </p>

            <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#contact" class="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-slate-950 font-bold text-base transition-all shadow-lg shadow-brand-500/20">
                    Request a Quote
                </a>
                <a href="#services" class="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold text-base border border-slate-800 transition-all">
                    Explore Services
                </a>
            </div>
        </div>
    </section>

    <!-- Services Grid -->
    <section id="services" class="py-16 bg-slate-900/60 border-t border-slate-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-3xl mx-auto mb-12">
                <h2 class="text-3xl font-extrabold text-white">What We Offer</h2>
                <p class="mt-3 text-slate-300 text-base">Tailored digital services to grow your personal brand or business enterprise.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <!-- Card 1 -->
                <div class="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-brand-500/50 transition-all">
                    <div class="w-12 h-12 rounded-xl bg-brand-500/10 text-brand-500 flex items-center justify-center text-xl mb-4">
                        <i class="fa-solid fa-paintbrush"></i>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-2">Graphic & Brand Design</h3>
                    <p class="text-slate-300 text-sm leading-relaxed">Eye-catching flyers, logos, brand identities, and social media banners designed to captivate your audience.</p>
                </div>

                <!-- Card 2 -->
                <div class="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-brand-500/50 transition-all">
                    <div class="w-12 h-12 rounded-xl bg-brand-500/10 text-brand-500 flex items-center justify-center text-xl mb-4">
                        <i class="fa-solid fa-file-lines"></i>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-2">Professional CV & Resume</h3>
                    <p class="text-slate-300 text-sm leading-relaxed">ATS-friendly resumes, compelling cover letters, and optimized LinkedIn profiles that secure job interviews.</p>
                </div>

                <!-- Card 3 -->
                <div class="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-brand-500/50 transition-all">
                    <div class="w-12 h-12 rounded-xl bg-brand-500/10 text-brand-500 flex items-center justify-center text-xl mb-4">
                        <i class="fa-solid fa-code"></i>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-2">Web Development</h3>
                    <p class="text-slate-300 text-sm leading-relaxed">Fast, responsive, modern static websites and landing pages built to convert visitors into paying clients.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer id="contact" class="border-t border-slate-800 bg-slate-950 py-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p class="text-slate-300 text-sm mb-2">&copy; 2026 ApexDigital. All rights reserved.</p>
            <p class="text-slate-500 text-xs">Designed and built for fast deployment on GitHub Pages.</p>
        </div>
    </footer>

</body>
</html>
