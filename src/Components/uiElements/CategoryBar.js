import React from "react";

const CategoryBar = ({ onSelect }) => {
  const selectHandler = (e) => {
    onSelect(e.target.textContent.toLowerCase());
  };
  return (
    <div className="categoryBar">
      <button onClick={selectHandler} className="category-btn">
        All
      </button>
      <button onClick={selectHandler} className="category-btn">
        Food
      </button>
      <button onClick={selectHandler} className="category-btn">
        Transport
      </button>
      <button onClick={selectHandler} className="category-btn">
        Entertainment
      </button>
      <button onClick={selectHandler} className="category-btn">
        Rent
      </button>
      <button onClick={selectHandler} className="category-btn">
        Stationary
      </button>
      <button onClick={selectHandler} className="category-btn">
        Misc
      </button>
    </div>
  );
};

export default CategoryBar;
