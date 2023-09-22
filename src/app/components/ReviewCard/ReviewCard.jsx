import Image from "next/image";

const ReviewCard = ({ name, text, photo }) => (
  <div className="bg-main rounded-md px-3 py-4 flex flex-col gap-2 h-60 overflow-auto">
    <div className="flex-1">
      <p className="text-orange text-lg font-bold text-center">{name}</p>
      <p className="text-white text-base font-normal">{text}</p>
    </div>
    <div className="relative w-20 h-20 rounded-full overflow-hidden">
      <Image
        className="object-cover object-center"
        fill={true}
        alt={name}
        src={photo}
      />
    </div>
  </div>
);

export default ReviewCard;
