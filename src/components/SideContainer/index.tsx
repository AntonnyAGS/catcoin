import React, { useContext } from "react";
import { WorkManagerContext } from "../../contexts/work-manager.context";

import CatSad from "../../assets/cat-sad.svg";
import Cat from "../../assets/cat.svg";
import CatHappy from "../../assets/cat-happy.svg";

import "./style.css";

interface SideContainerProps {
  children: JSX.Element;
}

export const SideContainer = ({
  children,
}: SideContainerProps): JSX.Element => {
  const { amount, machineState, machine } = useContext(WorkManagerContext);

  const getCatToRender = () => {
    if (amount <= 5) {
      return CatSad;
    }

    if (amount <= 7) {
      return Cat;
    }

    return CatHappy;
  };

  return (
    <div className="side-container">
      {children}
      <div className="side-cat">
        <img src={getCatToRender()} alt="Cat" width="100%" />
      </div>
      <div className="side-machine">
        <div className="side-state">Estado: q{machineState || "0"}</div>
        <div className="side-transitions">
          Transições:{" "}
          {machine &&
            machine
              ?.map((el) => {
                const [state, value] = el;

                const resultValue =
                  typeof value === "string" ? value : `q${value}`;

                return `q${state} => ${resultValue}`;
              })
              .join(" | ")}
        </div>
      </div>
    </div>
  );
};

export default SideContainer;
