const SpiralBinding = () => {
  const holes = Array.from({ length: 13 });
  return (
    <div className="flex justify-around items-center px-6 py-1 relative z-20">
      {holes.map((_, i) => (
        <div key={i} className="calendar-spiral-hole" />
      ))}
    </div>
  );
};

export default SpiralBinding;
