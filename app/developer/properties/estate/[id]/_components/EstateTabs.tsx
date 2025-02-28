"use client";

import React, { memo } from "react";
import { usePathname, useParams } from "next/navigation";
import Link from "next/link";

type Props = {
  items: {
    title: string;
    key: string;
  }[];
};

const EstateTabs = memo((props: Props) => {
  const pathname = usePathname();
  const { id } = useParams();

  return (
    <div className="bg-transparent h-fit px-0 flex flex-row justify-between items-center w-full gap-y-5 flex-wrap border-b border-b-gray-300 bg-white px-5">
      <div className="flex flex-row justify-start items-center gap-x-3 gap-y-5 flex-wrap">
        {props?.items?.map((tag) => {
          const isActive = pathname.includes(tag.key);

          return (
            <Link
              href={`/developer/properties/estate/${id}/${tag.key}`}
              key={tag.key}
              className={`flex h-full text-sm items-center gap-x-2 px-3 transition-all duration-200 ease-in-out transform hover:scale-105 text-gray-700 hover:border-b-2 hover:border-b-giddaa-500 hover:text-giddaa-500
            ${
              isActive
                && "border-b-2 border-b-giddaa-500 !text-giddaa-500 font-semibold"
            }`}
            >
              {tag.title}
            </Link>
          );
        })}
      </div>

    </div>
  );
});

EstateTabs.displayName = 'EstateTabs';

export default EstateTabs;
