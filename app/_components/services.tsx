export default function Services() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Our Services</h1>
      <div className="grid grid-rows-2 grid-cols-2">
        <div className="p-10">
          <h2 className="text-2xl font-semibold mb-2">Daily Visits</h2>
          <p className="text-text-700 mb-4">Personalized daily visits to care for your pets, including feeding, playtime, and companionship.</p>
        </div>
        <div className="p-10">
          <h2 className="text-2xl font-semibold mb-2">Walks</h2>
          <p className="text-text-700 mb-4">Enjoy regular walks with your dog, ensuring they get the exercise and fresh air they need.</p>
        </div>
        <div className="p-10">
          <h2 className="text-2xl font-semibold mb-2">Health Care</h2>
          <p className="text-text-700 mb-4">Professional health care services, including medication administration and monitoring of your pet's well-being.</p>
        </div>
        <div className="p-10">
          <h2 className="text-2xl font-semibold mb-2">Updates and Reports</h2>
          <p className="text-text-700 mb-4">Regular updates and reports on your pet's activities and health during each visit.</p>
        </div>
      </div>
    </div>
  );
}
