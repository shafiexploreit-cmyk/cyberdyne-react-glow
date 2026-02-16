const items = [
  "7+ Years Experience",
  "200+ Happy Clients",
  "15+ Products",
  "Expert Team",
  "24/7 Support",
  "Global Reach",
  "ISO Certified",
  "Trusted Partner",
];

const MarqueeBanner = () => (
  <div className="bg-primary overflow-hidden py-3">
    <div className="animate-marquee whitespace-nowrap flex">
      {[...items, ...items].map((item, i) => (
        <span key={i} className="mx-8 text-sm font-medium text-primary-foreground">
          ✦ {item}
        </span>
      ))}
    </div>
  </div>
);

export default MarqueeBanner;
