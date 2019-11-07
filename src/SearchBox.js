import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
        type="search"
        placeholder="Search Your favourite character"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
