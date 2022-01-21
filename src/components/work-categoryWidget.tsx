// @ts-nocheck

import { ChevronRightIcon, ExternalLinkIcon } from "@heroicons/react/solid";
import React from "react";
const buttons = [
  {
    index: 0,
    url: "https://uk.rs-online.com/",
    text: "Did you know?",
  },
  {
    index: 1,
    url: "https://es.rs-online.com/",
    text: "For the inspired",
  },
  {
    index: 2,
    url: "https://de.rs-online.com/",
    text: "Button text 3",
  },
  {
    index: 3,
    url: "https://uk.rs-online.com/",
    text: "Button text 4",
  },
  {
    index: 4,
    url: "https://es.rs-online.com/",
    text: "Button text 5",
  },
  {
    index: 5,
    url: "https://de.rs-online.com/",
    text: "Button text 6",
  },
  {
    index: 6,
    url: "https://uk.rs-online.com/",
    text: "Button text qweqwe7",
  },
  {
    index: 7,
    url: "https://es.rs-online.com/",
    text: "Button text 8",
  },
];
<div className={"bg-green-200 box-border mx-auto my-6 w-full"}>
  {
    <div className="w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 p-6 box-border items-center">
      {buttons.map((button) => (
        <a
          href={button.url}
          title={button.text}
          style={{ color: "#1E5787", borderColor: "#1E5787" }}
          className={
            "w-11/12 relative inline-block border-2 border-solid box-border rounded-xl text-left my-4 mx-auto" +
            " p-6 text-sm"
          }
        >
          {button.text}{" "}
          <ChevronRightIcon
            className={
              "right-4 align-middle absolute inline w-6 h-6 leading-relaxed"
            }
          />
        </a>
      ))}
    </div>
  }
</div>;
