"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Fuel,
  MapPin,
  Menu,
  Radio,
  ShieldCheck,
  X,
} from "lucide-react";

const asset = "/sites/safeobuddy";
const source = "https://safeobuddy.com";

const products = [
  {
    eyebrow: "GPS + BLE PADLOCK",
    name: "SafeObuddy GPS Smart Padlock",
    description: "GPS, remote unlock, tamper alerts, AIS-140 integration.",
    image: "padlock-hero-BehdicD8.jpg",
    href: `${source}/products/smart-container-lock`,
  },
  {
    eyebrow: "HARDWIRED SMART LOCK",
    name: "Fixed Container / Cargo / Trailer Smart Lock",
    description: "Hardwired, always-online, multi-sensor vehicle security hub.",
    image: "product-fixedlock-pW0p-a3E.jpg",
    href: `${source}/products/fixed-lock`,
  },
  {
    eyebrow: "AIS-140 CERTIFIED",
    name: "SafeObuddy VLTD AIS-140 4G+",
    description: "AIS-140 / ARAI certified GPS with dual SIM and panic input.",
    image: "product-vltd-DA1VK2ix.jpg",
    href: `${source}/products/vltd-ais140`,
  },
  {
    eyebrow: "2 / 3 / 4 CHANNEL",
    name: "ADAS / DMS AI Fleet Camera",
    description: "Driver safety + cargo bay AI with cloud DVR and event clips.",
    image: "product-camera-DbZAGpwu.jpg",
    href: `${source}/products/fleet-camera`,
  },
];

const industries = [
  { name: "E-Commerce", image: "usecase-ecom-D1BIkbqd.jpg" },
  { name: "Shipping Containers", image: "usecase-container-B4eN3fxA.jpg" },
  { name: "Milk Tankers", image: "usecase-milk-DO4brZ53.jpg" },
  { name: "Fuel Tankers", image: "usecase-fuel-BYrpu08C.jpg" },
  { name: "Closed Body Tankers", image: "usecase-trailer-Ds4PLqgI.jpg" },
  { name: "Oil & Gas (PESO)", image: "usecase-highvalue-DjwJhrnJ.jpg" },
  { name: "Mining Vehicles", image: "usecase-truck-FE5BeI4W.jpg" },
  { name: "Middle Mile", image: "usecase-cab-qx-ZLFKf.jpg" },
];

const faqs = [
  {
    question: "What is a smart container lock?",
    answer:
      "A smart container lock is an IoT padlock with GPS, Bluetooth and cellular connectivity that lets fleet operators lock, unlock and monitor cargo containers remotely. It sends tamper, geofence and battery alerts in real time.",
  },
  {
    question: "How does a GPS lock work?",
    answer:
      "A GPS lock combines a hardened mechanical shackle with a GPS module, SIM/eSIM and a rechargeable battery. The lock reports its location to a cloud platform and can only be opened via OTP, BLE app or backend approval inside a defined geofence.",
  },
  {
    question: "How much does a truck security lock cost?",
    answer:
      "Pricing depends on connectivity and certifications. BLE-only padlocks start lower; GPS + Keypad + BLE locks and PESO-certified locks for hazardous cargo are priced on quote. Contact SafeObuddy for fleet-volume pricing.",
  },
  {
    question: "Which lock prevents cargo theft best?",
    answer:
      "For long-haul and high-value cargo, a GPS + Keypad + BLE padlock integrated with a VLTD (AIS-140) device gives the strongest theft prevention — live location, geofence breach alerts, tamper detection and remote unlock control.",
  },
  {
    question: "Is the SafeObuddy lock AIS-140 compliant?",
    answer:
      "Yes. SafeObuddy offers AIS-140 certified VLTD devices that can be deployed standalone or integrated with our smart locks, meeting Indian commercial vehicle compliance.",
  },
];

const activity = [
  "Lock #KS-4821 secured · Mumbai → Delhi",
  "Geofence entry · Hub Bengaluru",
  "Driver score 96 · Route NH48",
  "Tamper attempt blocked · Container CSQU3054383",
  "Fuel top-up verified · Tanker TN-37-AB-1029",
  "POD delivered · Indore Hub",
];

const fleetNames = [
  "DHL",
  "Maersk",
  "BlueDart",
  "Reliance",
  "Indian Oil",
  "Amul",
  "Flipkart",
  "Tata",
  "Vedanta",
  "Adani",
  "JK Tyre",
  "Hindustan Zinc",
];

function Brand() {
  return (
    <a className="brand" href={`${source}/`} aria-label="SafeObuddy home">
      <span className="brand-mark">K</span>
      <span>SafeObuddy<span className="brand-period">.</span></span>
    </a>
  );
}

function SiteHeader() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenus = () => {
    setOpenMenu(null);
    setMobileOpen(false);
  };

  return (
    <header className="site-header">
      <div className="site-header-inner container-x">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          <div className="nav-dropdown">
            <button
              className="nav-trigger"
              type="button"
              aria-expanded={openMenu === "products"}
              onClick={() => setOpenMenu(openMenu === "products" ? null : "products")}
            >
              Products <ChevronDown size={15} />
            </button>
            {openMenu === "products" && (
              <div className="dropdown-panel">
                <a href={`${source}/products/smart-container-lock`} onClick={closeMenus}>Smart GPS Padlock</a>
                <a href={`${source}/products/fixed-lock`} onClick={closeMenus}>Fixed Smart Lock</a>
                <a href={`${source}/products/vltd-ais140`} onClick={closeMenus}>AIS-140 VLTD</a>
                <a href={`${source}/products/fleet-camera`} onClick={closeMenus}>ADAS/DMS Camera</a>
              </div>
            )}
          </div>
          <div className="nav-dropdown">
            <button
              className="nav-trigger"
              type="button"
              aria-expanded={openMenu === "solutions"}
              onClick={() => setOpenMenu(openMenu === "solutions" ? null : "solutions")}
            >
              Solutions <ChevronDown size={15} />
            </button>
            {openMenu === "solutions" && (
              <div className="dropdown-panel">
                <a href={`${source}/solutions/cargo-theft-prevention`} onClick={closeMenus}>Cargo Theft Prevention</a>
                <a href={`${source}/solutions/fuel-theft-prevention`} onClick={closeMenus}>Fuel Theft Prevention</a>
                <a href={`${source}/solutions/container-security`} onClick={closeMenus}>Container Security</a>
                <a href={`${source}/solutions/trailer-security`} onClick={closeMenus}>Trailer &amp; Truck Security</a>
                <a href={`${source}/solutions/driver-safety-adas-dms`} onClick={closeMenus}>Driver Safety (ADAS/DMS)</a>
                <a href={`${source}/solutions/ais-140-vltd-compliance`} onClick={closeMenus}>AIS-140 VLTD Compliance</a>
              </div>
            )}
          </div>
          <a href={`${source}/industries`}>Industries</a>
          <a href={`${source}/software`}>Software</a>
          <a href={`${source}/blog`}>Blog</a>
          <a href={`${source}/contact`}>Contact</a>
        </nav>
        <div className="header-actions">
          <a className="login-link" href={`${source}/login`}>Login</a>
          <a className="button button-gold header-quote" href={`${source}/contact`}>Request Quote</a>
        </div>
        <div className="mobile-header-actions">
          <a className="login-link" href={`${source}/login`}>Login</a>
          <button
            className="icon-button"
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <nav className="mobile-nav container-x" aria-label="Mobile navigation">
          <button type="button" className="mobile-nav-trigger" aria-expanded={openMenu === "products"} onClick={() => setOpenMenu(openMenu === "products" ? null : "products")}>Products <ChevronDown size={15} /></button>
          {openMenu === "products" && <div className="mobile-nav-sub"><a href={`${source}/products/smart-container-lock`} onClick={closeMenus}>Smart GPS Padlock</a><a href={`${source}/products/fixed-lock`} onClick={closeMenus}>Fixed Smart Lock</a><a href={`${source}/products/vltd-ais140`} onClick={closeMenus}>AIS-140 VLTD</a><a href={`${source}/products/fleet-camera`} onClick={closeMenus}>ADAS/DMS Camera</a></div>}
          <button type="button" className="mobile-nav-trigger" aria-expanded={openMenu === "solutions"} onClick={() => setOpenMenu(openMenu === "solutions" ? null : "solutions")}>Solutions <ChevronDown size={15} /></button>
          {openMenu === "solutions" && <div className="mobile-nav-sub"><a href={`${source}/solutions/cargo-theft-prevention`} onClick={closeMenus}>Cargo Theft Prevention</a><a href={`${source}/solutions/fuel-theft-prevention`} onClick={closeMenus}>Fuel Theft Prevention</a><a href={`${source}/solutions/container-security`} onClick={closeMenus}>Container Security</a><a href={`${source}/solutions/trailer-security`} onClick={closeMenus}>Trailer &amp; Truck Security</a><a href={`${source}/solutions/driver-safety-adas-dms`} onClick={closeMenus}>Driver Safety (ADAS/DMS)</a><a href={`${source}/solutions/ais-140-vltd-compliance`} onClick={closeMenus}>AIS-140 VLTD Compliance</a></div>}
          <a href={`${source}/industries`} onClick={closeMenus}>Industries</a>
          <a href={`${source}/software`} onClick={closeMenus}>Software</a>
          <a href={`${source}/blog`} onClick={closeMenus}>Blog</a>
          <a href={`${source}/contact`} onClick={closeMenus}>Contact</a>
          <a className="button button-gold mobile-quote" href={`${source}/contact`} onClick={closeMenus}>Request Quote</a>
        </nav>
      )}
    </header>
  );
}

function SectionHeading({
  label,
  children,
  description,
}: {
  label: string;
  children: React.ReactNode;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{label}</span>
      <h2>{children}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow hero-glow-left" />
      <div className="hero-glow hero-glow-right" />
      <div className="hero-grid container-x">
        <div className="hero-copy">
          <div className="eyebrow hero-eyebrow"><span className="pulse-dot" /> Smart Logistics Security · Live in 14 states</div>
          <h1>Cargo that <span>never</span><br />goes missing.</h1>
          <p>GPS smart padlocks, AIS-140 VLTD, ADAS cameras and AI fleet software — engineered for India&apos;s most demanding fleets.</p>
          <div className="hero-actions">
            <a className="button button-gold shine" href={`${source}/products`}>Explore Products <ArrowRight size={16} /></a>
            <a className="button button-outline" href={`${source}/contact`}>Request a Demo</a>
          </div>
          <div className="hero-stats">
            <div><strong>10K+</strong><span>Locks deployed</span></div>
            <div><strong>99.9%</strong><span>Uptime</span></div>
            <div><strong>24×7</strong><span>Command center</span></div>
          </div>
        </div>
        <div className="hero-visual-wrap">
          <div className="hero-image-glow" />
          <div className="hero-visual">
            <Image
              src={`${asset}/hero-lock-C8qY4Ofe.jpg`}
              alt="SafeObuddy smart GPS padlock mounted on a shipping container"
              fill
              priority
              sizes="(max-width: 767px) 100vw, 50vw"
              className="cover-image hero-image"
            />
          </div>
          <div className="lock-status glass-card"><span className="live-dot" /> <span className="status-live">LIVE</span><strong>Lock secured</strong><span>Mumbai → Delhi · 14:22</span></div>
          <div className="driver-score glass-card"><span>Driver score</span><strong>96<small>/100</small></strong></div>
        </div>
      </div>
      <div className="activity-bar">
        <div className="marquee-track">
          {[...activity, ...activity].map((item, index) => <span className="activity-item" key={`${item}-${index}`}><i />{item}</span>)}
        </div>
      </div>
    </section>
  );
}

function TrustedFleets() {
  return (
    <section className="trusted-section container-x">
      <p className="trusted-label">Trusted by fleets that move India</p>
      <div className="fleet-marquee">
        {[...fleetNames, ...fleetNames].map((name, index) => <span key={`${name}-${index}`}>{name}</span>)}
      </div>
    </section>
  );
}

function ProductSection() {
  return (
    <section className="section container-x" id="products">
      <SectionHeading label="Hardware" description="Locks, trackers and cameras — engineered to work together.">A complete <em>security stack</em></SectionHeading>
      <div className="product-grid">
        {products.map((product, index) => (
          <a className="product-card" href={product.href} key={product.name}>
            <div className="product-image-wrap">
              <Image src={`${asset}/${product.image}`} alt={product.name} fill sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 25vw" className="contain-image" />
              <span className="product-number">0{index + 1}</span>
            </div>
            <div className="product-content">
              <span className="product-eyebrow">{product.eyebrow}</span>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <span className="text-link">View product <ArrowRight size={15} /></span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Workflow() {
  const steps = [
    { number: "01", title: "Lock & arm", text: "Driver locks the container; device arms over BLE.", icon: ShieldCheck },
    { number: "02", title: "Track live", text: "GPS + cellular stream location every 10 seconds.", icon: MapPin },
    { number: "03", title: "Alert instantly", text: "Tamper, geofence and SOS push to WhatsApp & IVR.", icon: Radio },
    { number: "04", title: "Unlock securely", text: "OTP, BLE or backend approval inside geofence only.", icon: Check },
  ];
  return (
    <section className="workflow-section">
      <div className="container-x section">
        <SectionHeading label="Workflow">From dispatch <em>to delivery</em></SectionHeading>
        <div className="workflow-grid">
          {steps.map(({ number, title, text, icon: Icon }) => (
            <article className="workflow-step" key={number}>
              <div className="workflow-top"><span>{number}</span><Icon size={21} strokeWidth={1.5} /></div>
              <h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SoftwareSection() {
  const capabilities = ["Fuel Cards", "Driver Payments", "POD Tracking", "Vendor Management", "Digital Billing", "HRMS Payroll", "Tally / ERP", "WhatsApp Bot & IVR"];
  return (
    <section className="software-section">
      <div className="container-x software-grid">
        <div className="software-copy">
          <SectionHeading label="AI Software">One platform.<br /><em>Every workflow.</em></SectionHeading>
          <div className="software-pills">{capabilities.map((item) => <span key={item}><Check size={13} />{item}</span>)}</div>
          <a className="text-link software-link" href={`${source}/software`}>Explore Software <ArrowRight size={15} /></a>
        </div>
        <div className="dashboard-frame">
          <Image src={`${asset}/software-dashboard-qOt1Mu0t.jpg`} alt="SafeObuddy fleet dashboard with live GPS map of India" fill sizes="(max-width: 800px) 100vw, 55vw" className="cover-image" />
          <div className="dashboard-label"><span className="live-dot" /> LIVE FLEET VIEW</div>
        </div>
      </div>
    </section>
  );
}

function IndustrySection() {
  return (
    <section className="section container-x">
      <SectionHeading label="Industries">Built for <em>every fleet</em></SectionHeading>
      <div className="industry-grid">
        {industries.map((industry, index) => (
          <a className="industry-card" href={`${source}/industries`} key={industry.name}>
            <Image src={`${asset}/${industry.image}`} alt={industry.name} fill sizes="(max-width: 600px) 50vw, (max-width: 900px) 33vw, 25vw" className="cover-image industry-image" />
            <span className="industry-shade" />
            <span className="industry-index">0{index + 1}</span>
            <strong>{industry.name}</strong>
            <ArrowUpRight className="industry-arrow" size={17} />
          </a>
        ))}
      </div>
      <div className="fleet-photo">
        <Image src={`${asset}/industry-fleet-DfJ9wJ4f.jpg`} alt="Symmetric fleet of trucks at a logistics port" fill sizes="100vw" className="cover-image" />
        <div><span className="eyebrow">One connected network</span><strong>Every vehicle.<br />Every journey.</strong></div>
      </div>
    </section>
  );
}

function Testimonials() {
  const quotes = [
    { quote: "Cargo theft losses dropped 78% in the first quarter after we rolled out SafeObuddy smart locks across our long-haul fleet.", name: "Rajesh Kumar", role: "Fleet Director · Logistics Major" },
    { quote: "The WhatsApp alerts and live dashboard mean we know about a tamper attempt before the driver even radios in.", name: "Priya Mehta", role: "Operations Head · Cold Chain" },
    { quote: "AIS-140 compliant out of the box, integrated with Tally, and ROI inside 9 months. Best decision of the year.", name: "Anil Verma", role: "CFO · Bulk Tanker Co." },
  ];
  return (
    <section className="testimonial-section">
      <div className="container-x section">
        <SectionHeading label="Field results">What fleets <em>tell us</em></SectionHeading>
        <div className="testimonial-grid">
          {quotes.map((item) => <article className="quote-card" key={item.name}>
            <span className="quote-mark">“</span><p>{item.quote}</p>
            <div className="quote-person"><span className="avatar">{item.name.split(" ").map((part) => part[0]).join("")}</span><div><strong>{item.name}</strong><small>{item.role}</small></div></div>
          </article>)}
        </div>
      </div>
    </section>
  );
}

function Discovery() {
  const names = ["Amazon", "Flipkart", "Google", "ChatGPT", "Facebook", "Instagram", "LinkedIn", "WhatsApp"];
  return (
    <section className="discovery-section container-x">
      <SectionHeading label="Where to find us">Sold & discovered <em>everywhere</em></SectionHeading>
      <div className="discovery-list">{names.map((name, index) => <span key={name}><span className="discovery-index">0{index + 1}</span>{name}<ArrowUpRight size={16} /></span>)}</div>
    </section>
  );
}

function FAQ() {
  const [openItem, setOpenItem] = useState<number | null>(null);
  return (
    <section className="faq-section">
      <div className="container-x section faq-layout">
        <div className="faq-intro"><SectionHeading label="Knowledge">Frequently <em>asked</em></SectionHeading><p>Clear answers to help protect every mile of your journey.</p></div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <article className={`faq-item ${openItem === index ? "is-open" : ""}`} key={faq.question}>
              <button type="button" aria-expanded={openItem === index} aria-controls={`faq-answer-${index}`} onClick={() => setOpenItem(openItem === index ? null : index)}>
                <span>{faq.question}</span><span className="faq-toggle">{openItem === index ? "−" : "+"}</span>
              </button>
              {openItem === index && <p id={`faq-answer-${index}`}>{faq.answer}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className="cta-wrap container-x">
      <div className="cta-panel">
        <div className="cta-orb" />
        <span className="eyebrow">Protection starts here</span>
        <h2>Secure your fleet <em>today.</em></h2>
        <p>Talk to a SafeObuddy specialist about smart locks, GPS and AI software for your routes.</p>
        <div className="hero-actions cta-actions">
          <a className="button button-gold" href={`${source}/contact`}>Request Quote <ArrowRight size={16} /></a>
          <a className="button button-outline" href={`${source}/products`}>Browse Products</a>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container-x footer-main">
        <div className="footer-brand-col"><Brand /><p>Smart logistics security & IoT. Locks, GPS, cameras and AI software for fleets that move the world.</p><div className="footer-socials"><a href="https://facebook.com/safeobuddy/" aria-label="Facebook">f</a><a href="https://twitter.com/safeobuddy" aria-label="Twitter">𝕏</a><a href="https://instagram.com/safeobuddy/" aria-label="Instagram">◎</a><a href="https://linkedin.com/company/safeobudyy" aria-label="LinkedIn">in</a></div></div>
        <div className="footer-links"><h3>Products</h3><a href={`${source}/products/smart-container-lock`}>Smart Padlocks</a><a href={`${source}/products`}>Fixed Locks</a><a href={`${source}/products`}>GPS / AIS-140</a><a href={`${source}/products`}>Fleet Cameras</a></div>
        <div className="footer-links"><h3>Industries</h3><a href={`${source}/industries`}>E-Commerce</a><a href={`${source}/industries`}>Oil & Gas (PESO)</a><a href={`${source}/industries`}>Milk Tankers</a><a href={`${source}/industries`}>Mining</a></div>
        <div className="footer-links"><h3>Company</h3><a href={`${source}/about`}>About SafeObuddy</a><a href={`${source}/knowledge`}>Knowledge</a><a href={`${source}/blog`}>Blog</a><a href={`${source}/contact`}>Contact</a></div>
      </div>
      <div className="container-x footer-bottom"><span>© 2026 Dhanuka Electrotech Pvt Ltd. All rights reserved.</span><div><a href={`${source}/privacy`}>Privacy Policy</a><a href={`${source}/terms`}>Terms & Conditions</a><a href={`${source}/refund`}>Refund & Cancellations</a></div></div>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <Hero />
      <TrustedFleets />
      <ProductSection />
      <Workflow />
      <SoftwareSection />
      <IndustrySection />
      <Testimonials />
      <Discovery />
      <FAQ />
      <CallToAction />
      <SiteFooter />
      <a className="floating-contact" href={`${source}/contact`} aria-label="Talk to SafeObuddy"><Fuel size={17} /><span>Talk to us</span></a>
    </main>
  );
}
