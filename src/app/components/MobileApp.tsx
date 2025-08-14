"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

interface MobileAppProps {
  appName: string;
  skill: string;
  description: string;
  image: string;
  link: string;
}

const MobileApp: React.FC<MobileAppProps> = ({
  appName,
  skill,
  description,
  image,
  link,
}) => {
  return (
    <div>
      <div className="flex-1 bg-white flex flex-col items-center justify-center w-full ">
        <img src={image} alt={appName} width={200} height={250} />
        <h3 className="text-gray-600 font-semibold pt-4 text-xs text-[var(--primary-color)] text-center">
          {skill}
        </h3>
        <h2 className="text-xl font-semibold mb-2 pt-1 text-center">
          {appName}
        </h2>
        <p className="text-gray-600 text-sm text-center">{description}</p>
        <Link href={link} passHref target="_blank" rel="noopener noreferrer">
          <button className="cursor-pointer mt-4 px-2 py-1 bg-white border border-[var(--primary-color)] text-[var(--primary-color)] rounded-full hover:bg-[var(--primary-color)] hover:text-white transition-colors">
            <span className="text-sm inline-flex items-center py-1 px-1">
              Github{" "}
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MobileApp;
