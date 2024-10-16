import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic",
      features: ["Single project", "Basic support", "Limited customization"],
      price: 19.99,
    },
    {
      id: 2,
      name: "Standard",
      features: [
        "Up to 5 projects",
        "Priority support",
        "Advanced customization",
      ],
      price: 49.99,
    },
    {
      id: 3,
      name: "Premium",
      features: [
        "Unlimited projects",
        "24/7 support",
        "Full customization",
        "Access to exclusive tools",
      ],
      price: 99.99,
    },
  ];

  return (
    <div className="mt-12">
      <h2>best price </h2>
      <div className="grid grid-cols-3 gap-4">
        {priceOptions.map((Option) => (
          <PriceOption key={Option.id} option={Option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
