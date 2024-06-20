import React from "react";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

interface BannerCardProps {
  bgColor: string;
  iconBgColor: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  textColor?: string;
  iconColor?: string;
}

const BannerCard: React.FC<BannerCardProps> = ({
  bgColor,
  iconBgColor,
  icon,
  title,
  description,
  textColor = "text-white",
  iconColor = "text-white",
}) => {
  return (
    <div className={`  ${textColor} p-4 border-none`}>
      <div className="flex gap-2 flex-col w-full">
        <div className="flex flex-row gap-2 items-center">
          <div
            className={`flex items-center justify-center ${iconBgColor} h-16 w-16`}
          >
            {React.cloneElement(icon as React.ReactElement, {
              className: `${iconColor} text-5xl`,
            })}
          </div>
          <p className="text-xl w-1/2 whitespace-nowrap font-semibold">
            {title}
          </p>
        </div>
        <p className="text-base w-full">{description}</p>
      </div>
    </div>
  );
};

export default BannerCard;
