import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonItem = ({ qty, width }) => {
  return (
    <section style={{ width: `${width}px`}}>
      <p className="text-center text-white">Loading....</p>
      <h2>
        <Skeleton height={35} width={width} />
      </h2>
      <ul className="">
        {Array(qty)
          .fill()
          .map((item, index) => (
            <li className="my-[2px]" key={index}>
              <Skeleton height={25} width={width} />
            </li>
          ))}
      </ul>
    </section>
  );
};

const SkeletonTable = ({ qty,width }) => {
  return (<SkeletonItem qty={qty} width={width} />);
};

export default SkeletonTable;
