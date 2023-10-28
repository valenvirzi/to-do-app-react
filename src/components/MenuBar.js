import React from "react";

const MenuBar = () => {
  const toggleTheme = () => {};
  return (
    <div className="menu-bar">
      <div className="container">
        <div></div>
        <button className="menu-bar__add-btn" type="button">
          <img
            className="add-btn__img"
            alt="Add Task"
            src="https://www.svgrepo.com/show/532997/plus-large.svg"
          ></img>
        </button>
        <button className="menu-bar__toggle-btn" onClick={toggleTheme}></button>
      </div>
    </div>
  );
};

export default MenuBar;
