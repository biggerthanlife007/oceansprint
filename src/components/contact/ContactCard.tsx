import React from "react";
import { IconType } from "react-icons/lib";

interface ContactCardProps {
  icon: IconType;
  title: string;
  description: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-start mx-20 gap-3">
      <Icon className="text-7xl text-[#4068e2]" />
      <div className="text-white">
        <p className="text-xl font-bold">{title}</p>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ContactCard;
