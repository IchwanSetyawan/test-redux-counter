import React, { useState } from "react";
import { addChart, minChart } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";

const CounterCard = () => {
  const dispatch = useDispatch();
  const counterChart = useSelector((value) => value.value);

  //   const [data, setData] = useState([]);

  return (
    <>
      <div className="col px-3 counter-list   ">
        <div className="row align-items-start">
          <div className=" col top-detail d-flex justify-content-end">
            <div
              className={
                counterChart <= 0
                  ? "btn btn-secondary btn-sm px-3 disabled"
                  : "btn btn-secondary btn-sm px-3"
              }
              onClick={() => dispatch(minChart(counterChart))}
            >
              -
            </div>
            <span className="result-counter px-3">{counterChart}</span>
            <div
              className="btn btn-secondary  btn-sm px-3"
              onClick={() => dispatch(addChart(addChart(counterChart)))}
            >
              +
            </div>
          </div>
        </div>
        <div className="row align-items-end">
          <div className=" col bottom-detail d-flex justify-content-end">
            <h4>${counterChart * 17}</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default CounterCard;
