import Image from "next/image";
import data from "../../data/sportsBar.json";
import RatingStar from "../../components/RaitingStar/RaitingStar";

export default function Bar({ params }) {
  const bar = data.sportsBars.find((item) => item.id === +params.id);

  return (
    <main className="flex-1">
      <section className="py-40">
        <div className="container">
          <div className="bg-main rounded-md px-3 py-4 max-w-2xl mx-auto flex flex-col gap-2">
            <div className="flex flex-col justify-between flex-1 gap-1">
              <p className="text-orange text-xl font-bold text-center">
                {bar.name}
              </p>
              <p className="text-white text-lg">{bar.location}</p>
              <p className="text-accent text-base">{bar.description}</p>
              <div className="flex items-center gap-4">
                <p className="text-white text-2xl">{bar.rating.toFixed(1)}</p>
                <RatingStar value={bar.rating} />
              </div>
            </div>
            <div className="w-full h-60 relative">
              <Image
                src={bar.image}
                alt={bar.name}
                className="object-cover object-center"
                fill={true}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
