import Card from "./card"

export default function Services() {
  return (
    <div className="flex flex-col items-center justify-center pt-12 pb-20 gap-12">
      <h1 className="text-3xl md:text-4xl font-bold text-text-800">Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-stretch gap-6 mx-5 max-w-2xs sm:max-w-2xl md:max-w-3xl lg:max-w-5xl">
        <Card
          title="Daily Visits"
          description="I take care of your pets with regular visits for feeding, playtime and companionship."
        />
        <Card
          title="Walks"
          description="I make sure your pet gets the exercise and fresh air they need with daily walks tailored to their energy level."
        />
        <Card
          title="Health Care"
          description="Administration of medications, special care and attention to pets with specific health needs."
        />
        <Card
          title="Updates and Reports"
          description="I send you updates, messages and photos so you always know how your pet is doing."
        />
      </div>
    </div>
  );
}
