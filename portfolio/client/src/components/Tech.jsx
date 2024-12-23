import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { Tooltip } from "react-tooltip";
import 'react-tooltip/dist/react-tooltip.css'

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
    <Tooltip id="my-tooltip" />
      {technologies.map((technology) => (
        <a data-tooltip-id="my-tooltip" data-tooltip-content={technology.name}>
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
       </a>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
