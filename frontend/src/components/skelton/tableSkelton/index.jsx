import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonItem = ({ qty}) => {
  return (
    <section>
      <p className="text-center">Loading....</p>
      <h2>
      <Skeleton height={35} width={500}/>
      </h2>
      <ul className="flex justify-between flex-wrap p-0">
        {Array(qty)
          .fill()
          .map((item, index) => (
            <li className="my-[2px]" key={index}>
              <Skeleton height={25} width={500}/>
            </li>
          ))}
      </ul>
    </section>
  );
};

const SkeletonTable = ({qty}) => {
  return (<SkeletonItem qty={qty}/>);
};

export default SkeletonTable;
