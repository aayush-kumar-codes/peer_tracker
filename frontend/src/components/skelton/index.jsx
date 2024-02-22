import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../skelton/skelton.css"

const SkeletonItem = ({ qty, extraNode }) => {
  return (
    <section>
      <p className="text-white">Loading....</p>
      <h2 className="section-title">
        <Skeleton height={30} width={200} />
      </h2>
      <ul className="list">
        {Array(qty)
          .fill()
          .map((item, index) => (
            <li className="card" key={index}>
              <Skeleton height={90} width={300} />
            </li>
          ))}
      </ul>
      <p className="section-title">
        <Skeleton height={20} width={100} />
      </p>
      <p className="section-title">
        <Skeleton height={25} width={200} />
      </p>
      {extraNode && <p className="section-title">
        <Skeleton height={20} width={270} />
      </p>}
    </section>
  );
};

const SkeletonCard = ({ extraNode }) => {
  return (<SkeletonItem extraNode={extraNode} />);
};

export default SkeletonCard;
