import React from "react";

const Tablet = ({ item, onRemoveSearch }) => {
  return (
    <div className="tablet">
      <p>{item}</p>
      <div onClick={onRemoveSearch.bind("this",item)}>
        <p>X</p>
      </div>
    </div>
  );
};

export default Tablet;
