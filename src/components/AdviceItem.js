import React, { useState } from "react";
import { getAdvice } from "../helpers/getAdvice";
import { Dice } from "./icons/Dice";
import { PatternDivider } from "./icons/PatternDivider";

export const AdviceItem = () => {
  const [advice, setAdvice] = useState("Click to find some new advices");
  const [id, setId] = useState();
  const hanldeChangeAdvice = () => {
    getAdvice().then(({ advice, id }) => {
      setAdvice(advice);
      setId(id);
    });
  };

  return (
    <div className="container">
      <section className="id-advice">
        <p className="id"> {id} </p>
        <div>
          <p> {advice} </p>
        </div>
      </section>
      <section className="divider-button">
        <PatternDivider className={"pattern-divider"} />
        <button onClick={hanldeChangeAdvice}>
          <Dice className="dice" />
        </button>
      </section>
    </div>
  );
};
