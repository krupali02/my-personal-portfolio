"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

interface WebsiteAppProps {
  appName: string;
  skill: string;
  description: string;
  image: string;
  link1: string;
  link2: string;
}

const WebsiteApp: React.FC<WebsiteAppProps> = ({
  appName,
  skill,
  description,
  image,
  link1,
  link2,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-5 mb-12">
      <div className="flex flex-col md:flex-row gap-0 w-full">
        {/* Column 1: Image */}
        <div className="flex-1 flex  items-center">
          <img src={image} alt={appName} width={400} height={250} />
        </div>
        {/* Column 2: Description */}
        <div className="flex-1 flex flex-col justify-center">
          <h3 className="text-gray-600 font-semibold pt-4 text-xs text-[var(--primary-color)]">
            {skill}
          </h3>
          <h2 className="text-xl font-semibold mb-2 pt-1">{appName}</h2>
          <p className="text-gray-600 text-sm mb-4">{description}</p>
          <div className="flex gap-2">
            <Link
              href={link1}
              passHref
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="cursor-pointer px-2 py-1 bg-white border border-[var(--primary-color)] text-[var(--primary-color)] rounded-full hover:bg-[var(--primary-color)] hover:text-white transition-colors">
                <span className="text-sm inline-flex items-center py-1 px-1">
                  Github{" "}
                </span>
              </button>
            </Link>
            <Link
              href={link2}
              passHref
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="cursor-pointer px-2 py-1 bg-white border border-[var(--primary-color)] text-[var(--primary-color)] rounded-full hover:bg-[var(--primary-color)] hover:text-white transition-colors">
                <span className="text-sm inline-flex items-center py-1 px-1">
                  Website{" "}
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteApp;
