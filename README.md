# biqsolo.github.oi<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ApexDigital | Creative Agency & Digital Solutions</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        brand: {
                            50: '#f2fcf3',
                            500: '#22c55e',
                            600: '#16a34a',
                            700: '#15803d',
                            900: '#052e16',
                        }
                    }
                }
            }
        }
    </script>
    <!-- FontAwesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body class="bg-slate-950 text-slate-100 font-sans antialiased selection:bg-brand-500 selection:text-white">

    <!-- Announcement Bar -->
    <div class="bg-brand-600 text-white text-xs sm:text-sm font-semibold py-2 px-4 text-center">
        ⚡ Fast 24-Hour Express Delivery Available on All Services! 
        <a href="#contact" class="underline hover:text-slate-200 ml-1">Calculate Price &rarr;</a>
    </div>

    <!-- Navigation Header -->
    <header class="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <!-- Logo -->
            <div class="flex items-center space-x-3">
                <div class="w-10 h-10 rounded-xl bg-brand-500 flex items-center justify-center text-slate-950 font-bold text-xl shadow-lg shadow-brand-500/20">
                    A
                </div>
                <div>
                    <span class="text-xl font-extrabold tracking-tight text-white">Apex<span class="text-brand-500">Digital</span></span>
                    <span class="block text-[10px] uppercase tracking-widest text-slate-400 font-semibold -mt-1">Creative Agency</span>
                </div>
            </div>

            <!-- Desktop Nav Links -->
            <nav class="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
                <a href="#services" class="hover:text-brand-500 transition-colors">Services</a>
                <a href="#portfolio" class="hover:text-brand-500 transition-colors">Portfolio</a>
                <a href="#about" class="hover:text-brand-500 transition-colors">About</a>
                <a href="#contact" class="hover:text-brand-500 transition-colors">Contact</a>
            </nav>

            <!-- Call to Action Button -->
            <div class="hidden md:flex items-center space-x-4">
                <a href="#contact" class="px-5 py-2.5 rounded-lg bg-brand-500 hover:bg-brand-600 text-slate-950 font-bold text-sm transition-all shadow-md shadow-brand-500/10">
                    Get Started
                </a>
            </div>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="relative py-20 lg:py-32 overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div class="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-brand-500 text-xs font-semibold mb-8">
                <span class="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
                <span>PROFESSIONAL DIGITAL SOLUTIONS IN NIGERIA</span>
            </div>
            
            <h1 class="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                Transform Your Brand with <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-emerald-300">World-Class Digital Design</span>
            </h1>

            <p class="max-w-2xl mx-auto text-lg sm:text-xl text-slate-400 mb-10 leading-relaxed">
                Elevate your business with stunning flyers, professional CVs, brand logos, engaging social media content, and high-converting websites.
            </p>

            <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#contact" class="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-500 hover:bg-brand-600 text-slate-950 font-bold text-base transition-all shadow-lg shadow-brand-500/20">
                    Request a Quote
                </a>
                <a href="#services" class="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold text-base border border-slate-800 transition-all">
                    Explore Services
                </a>
            </div>
        </div>
    </section>

    <!-- Services Grid -->
    <section id="services" class="py-20 bg-slate-900/50 border-t border-slate-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <h2 class="text-3xl sm:text-4xl font-extrabold text-white">What We Offer</h2>
                <p class="mt-4 text-slate-400 text-base sm:text-lg">Tailored digital services to grow your personal brand or business enterprise.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Service 1 -->
                <div class="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-brand-500/50 transition-all group">
                    <div class="w-12 h-12 rounded-xl bg-brand-500/10 text-brand-500 flex items-center justify-center text-xl mb-6 group-hover:bg-brand-500 group-hover:text-slate-950 transition-colors">
                        <i class="fa-solid fa-paintbrush"></i>
