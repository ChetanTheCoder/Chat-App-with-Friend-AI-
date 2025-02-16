const HexagonGlowPattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
      <div className="max-w-md text-center">
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`w-20 h-20 bg-primary/20 clip-hexagon ${
                i % 2 === 0 ? "animate-pulse" : "animate-ping"
              }`}
            />
          ))}
        </div>
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-lg text-base-content/60">{subtitle}</p>
      </div>
    </div>
  );
};

export default HexagonGlowPattern;
