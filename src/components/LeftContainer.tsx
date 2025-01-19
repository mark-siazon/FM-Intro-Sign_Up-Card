const LeftContainer: React.FC = () => {
  return (
    <header
      className="flex flex-auto flex-col text-white gap-[18px] text-center lg:text-left
                min-h-[210px] lg:max-w-[367px] xl:max-w-[580px]
                pt-20 sm:pt-24 mb-12 lg:p-0 lg:m-0
    "
    >
      <h1 className="text-3xl md:text-5xl font-bold tracking-[0.02em] lg:leading-[52px]">
        Learn to code by watching others
      </h1>

      <p className="font-medium md:text-lg">
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.
      </p>
    </header>
  );
};

export default LeftContainer;
