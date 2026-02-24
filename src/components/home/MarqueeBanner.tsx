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
  <div className="bg-gradient-to-r from-primary via-primary/90 to-primary overflow-hidden py-3.5 shadow-lg shadow-primary/20">
    <div className="animate-marquee whitespace-nowrap flex">
      {[...items, ...items].map((item, i) => (
        <span key={i} className="mx-10 text-sm font-medium text-primary-foreground/90 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary inline-block" />
          {item}
        </span>
      ))}
    </div>
  </div>
);

export default MarqueeBanner;
