const LeftContainer: React.FC = () => {
  return (
    <header
      className="flex flex-auto flex-col text-white gap-[18px] text-center
                min-h-[210px]
                pt-20 sm:pt-24 mb-12
    "
    >
      <h1 className="text-3xl font-bold tracking-[0.02em]">
        Learn to code by watching others
      </h1>

      <p className="font-medium">
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.
      </p>
    </header>
  );
};

export default LeftContainer;
