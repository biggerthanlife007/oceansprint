import React, { FunctionComponent, ReactNode } from "react";
import { IconType } from "react-icons"; // Assuming you are using react-icons library

interface BannerCard2Props {
  icon: IconType;
  title: string;
  description: string;
}

const BannerCard2: FunctionComponent<BannerCard2Props> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div className="text-white flex flex-col gap-3 items-start justify-center">
      <Icon className="text-5xl" />
      <p className="text-2xl">{title}</p>
      <p className="text-base w-5/6">{description}</p>
    </div>
  );
};

export default BannerCard2;
