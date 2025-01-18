interface PricingCardProps {
  description: string;
  highlights: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  description,
  highlights,
}) => {
  return (
    <div
      className=" flex items-center justify-center bg-accent-blue text-white
        w-full max-h-[88px] md:max-h-[68px] py-5 px-14 sm:px-16
        rounded-lg shadow-[0px_7px_0px_rgba(0,_0,_0,_0.15)]
      "
    >
      <p>
        <span className="font-bold">{highlights}</span> {description}
      </p>
    </div>
  );
};

export default PricingCard;
