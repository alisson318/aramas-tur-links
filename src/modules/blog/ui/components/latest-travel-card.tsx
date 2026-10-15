import { PiArrowDown } from "react-icons/pi";

const LatestTravelCard = () => {
  return (
    <div className="p-4 lg:p-5 bg-muted rounded-xl w-full flex justify-between items-center">
      <div className="flex items-center gap-2">
        <p className="text-sm font-light">Latest Travel</p>
        <PiArrowDown size={14} />
      </div>
    </div>
  );
};

export default LatestTravelCard;
