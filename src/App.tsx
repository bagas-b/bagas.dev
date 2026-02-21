import React, { useState } from 'react';
import { ArrowRight, Menu, ArrowUp, ArrowDown, CheckCircle2, Code2, Smartphone, Zap, Blocks, Globe, Mail, Send, Share2, FilePlus } from 'lucide-react';

export default function App() {
  const [activeService, setActiveService] = useState(1);

  return (
    <div className="antialiased selection:bg-neutral-200 selection:text-neutral-900 bg-neutral-50 text-neutral-900 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/85 backdrop-blur-md border-b border-neutral-200/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="text-lg font-semibold tracking-widest uppercase">Bagas.Dev</a>

          <div className="hidden md:flex gap-8 text-sm font-medium text-neutral-500">
            <a href="#services" className="transition-colors hover:text-neutral-900">Services</a>
            <a href="#pricing" className="transition-colors hover:text-neutral-900">Pricing</a>
            <a href="#contact" className="transition-colors hover:text-neutral-900">Contact</a>
          </div>

          <a href="#contact" className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium tracking-wide transition-colors group bg-neutral-900 text-neutral-50 hover:bg-neutral-800">
            Let's Talk
            <ArrowRight className="w-3.5 h-3.5 text-neutral-50" />
          </a>

          <button className="md:hidden p-2 text-neutral-600" aria-label="Open menu">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-24 pb-12 lg:pt-32 lg:pb-12 overflow-hidden bg-white">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col gap-10 lg:gap-14">
              <div className="space-y-2 lg:space-y-4">
                <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-medium leading-[0.9] tracking-tighter uppercase text-neutral-900">
                  Bagas
                </h1>
                <div className="flex items-center gap-4 lg:gap-6 flex-wrap">
                  <div className="h-14 md:h-20 w-32 md:w-56 rounded-full overflow-hidden relative shrink-0 border shadow-sm border-neutral-100">
                    <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop" alt="Coding" className="w-full h-full object-cover" />
                  </div>
                  <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-medium leading-[0.9] tracking-tighter uppercase text-neutral-900">
                    — Developer
                  </h1>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-start md:items-center gap-8 lg:gap-12 mt-2">
                <p className="text-neutral-500 text-base md:text-lg max-w-sm font-light leading-relaxed">
                  I build web and mobile applications specializing in no-code platforms like Bubble.io and modern vibe coding techniques.
                </p>
                <a href="#contact" className="inline-flex items-center justify-center h-14 px-10 rounded-full text-sm font-medium tracking-wider uppercase transition-all shrink-0 shadow-lg bg-neutral-900 text-white hover:bg-neutral-800 shadow-neutral-900/20">
                  Start your project
                </a>
              </div>

              <div className="flex flex-wrap gap-x-12 gap-y-6 pt-4">
                <div className="flex items-center gap-3">
                  <span className="font-serif text-4xl md:text-5xl tracking-tight text-neutral-800">No-Code</span>
                  <span className="text-xs text-neutral-500 leading-tight max-w-[110px] font-medium">Bubble.io Expert</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-serif text-4xl md:text-5xl tracking-tight text-neutral-800">Vibe</span>
                  <span className="text-xs text-neutral-500 leading-tight max-w-[120px] font-medium">AI-Assisted Coding</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-serif text-4xl md:text-5xl tracking-tight text-neutral-800">Fast</span>
                  <span className="text-xs text-neutral-500 leading-tight max-w-[120px] font-medium">Rapid Prototyping</span>
                </div>
              </div>

              <div className="hidden md:block relative h-64 w-full rounded-[2rem] overflow-hidden mt-auto group shadow-sm border border-neutral-100">
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop" alt="Workspace" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute right-6 bottom-6 flex flex-col gap-2 z-10">
                  <button className="w-10 h-10 rounded-full backdrop-blur border flex items-center justify-center transition-colors shadow-sm bg-white/90 border-white/20 hover:bg-white text-neutral-900" aria-label="Scroll">
                    <ArrowUp className="w-4 h-4" />
                  </button>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t to-transparent pointer-events-none from-neutral-900/10"></div>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-5 relative h-[600px] lg:h-auto min-h-[600px] rounded-[2rem] overflow-hidden shadow-xl group bg-neutral-100">
              <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop" alt="Code editor" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />

              <div className="absolute top-6 right-6 flex gap-3 z-20">
                <a href="#contact" className="w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-md bg-white hover:bg-neutral-100 text-neutral-900" aria-label="Contact me">
                  <Send className="w-4 h-4" />
                </a>
              </div>

              <div className="absolute top-6 left-6 max-w-[220px] rounded-2xl p-3 shadow-xl z-20 bg-white">
                <div className="h-24 rounded-xl overflow-hidden mb-3 relative">
                  <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop" alt="App preview" className="w-full h-full object-cover" />
                </div>
                <p className="text-xs font-medium mb-3 leading-snug text-neutral-600">
                  From idea to production. I build scalable applications tailored to your business needs.
                </p>
                <button className="w-8 h-8 rounded-full flex items-center justify-center ml-auto transition-colors bg-neutral-900 text-white hover:bg-neutral-800" aria-label="More">
                  <ArrowDown className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t to-transparent flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 z-20 from-black/80 via-black/40">
                <p className="text-sm max-w-xs font-light leading-relaxed drop-shadow-sm text-white/90">
                  Specializing in Bubble.io and modern web technologies to bring your vision to life.
                </p>
                <a href="#services" className="px-8 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shrink-0 shadow-lg bg-white text-neutral-900 hover:bg-neutral-100">
                  My Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Visual Break */}
      <div className="w-full h-96 md:h-[600px] relative overflow-hidden bg-neutral-200">
        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2700&auto=format&fit=crop" alt="Team collaboration" className="w-full h-full object-cover grayscale opacity-90" />
        <div className="absolute inset-0 bg-neutral-900/10"></div>
      </div>

      {/* Services */}
      <section id="services" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:flex justify-between items-end">
            <div>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">What I Do</h2>
              <p className="text-neutral-500 max-w-md">
                I leverage the power of no-code tools and AI-assisted development to build robust, scalable, and beautiful applications faster than traditional methods.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px border rounded-2xl overflow-hidden shadow-sm bg-neutral-200 border-neutral-200">
            <div className="p-8 group transition-colors bg-white hover:bg-neutral-50">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 bg-neutral-100 text-neutral-900">
                <Blocks className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-medium tracking-tight mb-2">Bubble.io Development</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Full-stack web application development using Bubble.io. From database design to complex workflows and responsive UI.
              </p>
            </div>

            <div className="p-8 group transition-colors bg-white hover:bg-neutral-50">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 bg-neutral-100 text-neutral-900">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-medium tracking-tight mb-2">Vibe Coding</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Utilizing AI tools and modern frameworks to rapidly prototype and build custom coded solutions with high efficiency.
              </p>
            </div>

            <div className="p-8 group transition-colors bg-white hover:bg-neutral-50">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 bg-neutral-100 text-neutral-900">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-medium tracking-tight mb-2">Web Applications</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Responsive, fast, and SEO-friendly web apps tailored to your business requirements and user needs.
              </p>
            </div>

            <div className="p-8 group transition-colors bg-white hover:bg-neutral-50">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 bg-neutral-100 text-neutral-900">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-medium tracking-tight mb-2">Mobile-First Design</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Ensuring your application looks and functions perfectly across all devices, from desktop to mobile.
              </p>
            </div>

            <div className="p-8 group transition-colors bg-white hover:bg-neutral-50">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 bg-neutral-100 text-neutral-900">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-medium tracking-tight mb-2">UI/UX Implementation</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Translating Figma designs into pixel-perfect, interactive, and accessible user interfaces.
              </p>
            </div>

            <div className="p-8 group transition-colors bg-white hover:bg-neutral-50">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 bg-neutral-100 text-neutral-900">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-medium tracking-tight mb-2">API Integrations</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Connecting your app with third-party services like Stripe, OpenAI, SendGrid, and custom REST APIs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Models */}
      <section className="border-t pt-24 pr-6 pb-24 pl-6 bg-white border-neutral-200" id="pricing">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-semibold tracking-widest text-neutral-500 uppercase block mb-20">Pricing models</span>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative items-start">
            <div className="w-full lg:w-5/12 lg:sticky lg:top-32 h-[300px] lg:h-[500px] rounded-2xl overflow-hidden shadow-sm order-2 lg:order-1 hidden lg:block bg-neutral-100">
              <div className="relative w-full h-full">
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=2160&q=80" alt="Hourly Rate" className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${activeService === 1 ? 'opacity-100' : 'opacity-0'} z-10`} />
                <img src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=2160&q=80" alt="Project Based" className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${activeService === 2 ? 'opacity-100' : 'opacity-0'} z-10`} />
                <img src="https://images.unsplash.com/photo-1552581234-26160f608093?w=2160&q=80" alt="Why Me" className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${activeService === 3 ? 'opacity-100' : 'opacity-0'} z-10`} />
                <div className="absolute inset-0 bg-gradient-to-t to-transparent z-20 pointer-events-none from-neutral-900/20"></div>
              </div>
            </div>

            <div className="w-full lg:w-7/12 flex flex-col order-1 lg:order-2">
              {/* Option 1 */}
              <div className="border-b py-8 cursor-pointer border-neutral-200" onClick={() => setActiveService(1)}>
                <div className="flex items-start gap-6 md:gap-12">
                  <span className={`text-xl font-mono transition-colors pt-2 ${activeService === 1 ? 'text-neutral-900' : 'text-neutral-400'}`}>01</span>
                  <div className="flex-1 w-full">
                    <div className="flex justify-between items-start w-full">
                      <h3 className={`text-2xl md:text-3xl font-medium tracking-tight transition-colors mb-4 ${activeService === 1 ? 'text-neutral-900' : 'text-neutral-500'}`}>Hourly Rate — $20/hr</h3>
                      <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ml-4 shrink-0 ${activeService === 1 ? 'border-neutral-900 bg-neutral-900 text-white' : 'border-neutral-200 bg-transparent text-neutral-400'}`}>
                        <ArrowRight className={`w-4 h-4 transition-transform ${activeService === 1 ? '' : '-rotate-45'}`} />
                      </div>
                    </div>

                    <div className={`grid transition-[grid-template-rows] duration-500 ease-out ${activeService === 1 ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                      <div className="overflow-hidden">
                        <div className={`pt-2 pb-4 transition-opacity duration-500 delay-100 ${activeService === 1 ? 'opacity-100' : 'opacity-0'}`}>
                          <div className="lg:hidden w-full h-64 rounded-xl overflow-hidden mb-6 relative bg-neutral-100">
                            <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=2160&q=80" alt="Hourly Rate" className="absolute inset-0 w-full h-full object-cover" />
                          </div>
                          <p className="text-neutral-500 leading-relaxed max-w-lg mb-6 text-base">
                            Perfect for ongoing maintenance, small feature additions, or projects where the scope is not fully defined yet. You pay only for the hours worked.
                          </p>
                          <ul className="space-y-2">
                            <li className="flex items-center gap-3 text-sm text-neutral-500"><span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span> Flexible scope and requirements</li>
                            <li className="flex items-center gap-3 text-sm text-neutral-500"><span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span> Regular progress updates</li>
                            <li className="flex items-center gap-3 text-sm text-neutral-500"><span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span> Transparent time tracking</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Option 2 */}
              <div className="border-b py-8 cursor-pointer border-neutral-200" onClick={() => setActiveService(2)}>
                <div className="flex items-start gap-6 md:gap-12">
                  <span className={`text-xl font-mono transition-colors pt-2 ${activeService === 2 ? 'text-neutral-900' : 'text-neutral-400'}`}>02</span>
                  <div className="flex-1 w-full">
                    <div className="flex justify-between items-start w-full">
                      <h3 className={`text-2xl md:text-3xl font-medium tracking-tight transition-colors mb-4 ${activeService === 2 ? 'text-neutral-900' : 'text-neutral-500'}`}>Project Based — From $500</h3>
                      <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ml-4 shrink-0 ${activeService === 2 ? 'border-neutral-900 bg-neutral-900 text-white' : 'border-neutral-200 bg-transparent text-neutral-400'}`}>
                        <ArrowRight className={`w-4 h-4 transition-transform ${activeService === 2 ? '' : '-rotate-45'}`} />
                      </div>
                    </div>

                    <div className={`grid transition-[grid-template-rows] duration-500 ease-out ${activeService === 2 ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                      <div className="overflow-hidden">
                        <div className={`pt-2 pb-4 transition-opacity duration-500 delay-100 ${activeService === 2 ? 'opacity-100' : 'opacity-0'}`}>
                          <div className="lg:hidden w-full h-64 rounded-xl overflow-hidden mb-6 relative bg-neutral-100">
                            <img src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=2160&q=80" alt="Project Based" className="absolute inset-0 w-full h-full object-cover" />
                          </div>
                          <p className="text-neutral-500 leading-relaxed max-w-lg mb-6 text-base">
                            Ideal for well-defined projects like MVPs, landing pages, or complete web apps. We agree on a fixed price and timeline before starting.
                          </p>
                          <ul className="space-y-2">
                            <li className="flex items-center gap-3 text-sm text-neutral-500"><span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span> Fixed budget and timeline</li>
                            <li className="flex items-center gap-3 text-sm text-neutral-500"><span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span> Clear deliverables</li>
                            <li className="flex items-center gap-3 text-sm text-neutral-500"><span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span> End-to-end development</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Option 3 */}
              <div className="border-b py-8 cursor-pointer border-neutral-200" onClick={() => setActiveService(3)}>
                <div className="flex items-start gap-6 md:gap-12">
                  <span className={`text-xl font-mono transition-colors pt-2 ${activeService === 3 ? 'text-neutral-900' : 'text-neutral-400'}`}>03</span>
                  <div className="flex-1 w-full">
                    <div className="flex justify-between items-start w-full">
                      <h3 className={`text-2xl md:text-3xl font-medium tracking-tight transition-colors mb-4 ${activeService === 3 ? 'text-neutral-900' : 'text-neutral-500'}`}>Why Work With Me</h3>
                      <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ml-4 shrink-0 ${activeService === 3 ? 'border-neutral-900 bg-neutral-900 text-white' : 'border-neutral-200 bg-transparent text-neutral-400'}`}>
                        <ArrowRight className={`w-4 h-4 transition-transform ${activeService === 3 ? '' : '-rotate-45'}`} />
                      </div>
                    </div>

                    <div className={`grid transition-[grid-template-rows] duration-500 ease-out ${activeService === 3 ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                      <div className="overflow-hidden">
                        <div className={`pt-2 pb-4 transition-opacity duration-500 delay-100 ${activeService === 3 ? 'opacity-100' : 'opacity-0'}`}>
                          <div className="lg:hidden w-full h-64 rounded-xl overflow-hidden mb-6 relative bg-neutral-100">
                            <img src="https://images.unsplash.com/photo-1552581234-26160f608093?w=2160&q=80" alt="Why Me" className="absolute inset-0 w-full h-full object-cover" />
                          </div>
                          <p className="text-neutral-500 leading-relaxed max-w-lg mb-6 text-base">
                            I combine the speed of no-code tools with the quality of traditional development to deliver exceptional results.
                          </p>
                          <ul className="space-y-2">
                            <li className="flex items-center gap-3 text-sm text-neutral-500"><span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span> Fast turnaround times</li>
                            <li className="flex items-center gap-3 text-sm text-neutral-500"><span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span> Clean and scalable architecture</li>
                            <li className="flex items-center gap-3 text-sm text-neutral-500"><span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span> Excellent communication</li>
                            <li className="flex items-center gap-3 text-sm text-neutral-500"><span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span> Post-launch support</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-32 px-6 text-center bg-neutral-900 text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 text-white">Let's build something</h2>
          <p className="text-neutral-400 text-base md:text-lg mb-10 max-w-lg mx-auto">
            Ready to turn your idea into reality? Tell me about your project, and let's discuss how I can help you achieve your goals.
          </p>

          <form className="max-w-md mx-auto space-y-4 text-left">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input type="text" id="name" placeholder="Name" className="w-full border rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all placeholder:text-neutral-500 bg-neutral-800 border-neutral-700 text-white" />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input type="email" id="email" placeholder="Email" className="w-full border rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all placeholder:text-neutral-500 bg-neutral-800 border-neutral-700 text-white" />
            </div>
            <div>
              <label htmlFor="project" className="sr-only">Project Type</label>
              <select id="project" defaultValue="" className="w-full border rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all text-neutral-400 bg-neutral-800 border-neutral-700 appearance-none">
                <option value="" disabled>Select Project Type</option>
                <option value="bubble">Bubble.io App</option>
                <option value="vibe">Vibe Coding / Custom Web</option>
                <option value="mobile">Mobile App</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea id="message" rows={4} placeholder="Tell me about your project..." className="w-full border rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all placeholder:text-neutral-500 bg-neutral-800 border-neutral-700 text-white"></textarea>
            </div>

            <button type="button" className="w-full font-medium rounded-md px-4 py-3 text-sm transition-colors flex justify-center items-center gap-2 bg-white text-neutral-900 hover:bg-neutral-200">
              Send Message
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t pt-16 pb-8 px-6 bg-white border-neutral-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <a href="#" className="text-lg font-semibold tracking-widest uppercase block mb-6">Bagas.Dev</a>
              <p className="text-neutral-500 text-sm max-w-xs leading-relaxed">
                Building scalable web and mobile applications with Bubble.io and modern vibe coding techniques.
              </p>
            </div>

            <div>
              <h4 className="font-medium text-sm mb-4 text-neutral-900">Links</h4>
              <ul className="space-y-3 text-sm text-neutral-500">
                <li><a href="#services" className="transition-colors hover:text-neutral-900">Services</a></li>
                <li><a href="#pricing" className="transition-colors hover:text-neutral-900">Pricing</a></li>
                <li><a href="#contact" className="transition-colors hover:text-neutral-900">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-sm mb-4 text-neutral-900">Contact</h4>
              <ul className="space-y-3 text-sm text-neutral-500">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  hello@bagas.dev
                </li>
                <li className="flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  bagas.dev
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-neutral-100">
            <p className="text-xs text-neutral-400">© 2026 Bagas. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="transition-colors text-neutral-400 hover:text-neutral-900" aria-label="Share">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="#contact" className="transition-colors text-neutral-400 hover:text-neutral-900" aria-label="Contact">
                <FilePlus className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
