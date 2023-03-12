"use client";

import Person from "./Person";
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }: { id: number; open: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-4 w-4 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function Category({ name }: { name: string }) {
  const [open, setOpen] = useState(1);

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Fragment>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader
          className="text-gray-100 hover:text-gray-100 border-none bg-blue-gray-800 px-2 py-1 rounded text-base"
          onClick={() => handleOpen(1)}
        >
          {name}
        </AccordionHeader>
        <AccordionBody className="text-gray-100 pl-2 py-1">
          <ul className="space-y-1">
            <li className="hover:bg-gray-800 px-2 py-1 rounded">
              <Person id="23" name="Eugene Shatilo" />
            </li>
            <li className="hover:bg-gray-800 px-2 py-1 rounded">
              <Person id="56" name="Elena Kovarskaya" />
            </li>
          </ul>
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
}
