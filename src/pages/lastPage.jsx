import React, { useState } from "react";

function LastPage(props) {

  return (
    <div className="lastPage">
      <div>
        <button
          className="magicBtn"
          onClick={() => {
            props.handleClick();
            props.setClickYes(true);
          }}
        >
          Yes
        </button>
        <button
          className="magicBtn"
          style={{
         
          }}
          onClick={() => {
            props.handleClick();
            props.setClickYes(false);
         
          }}
        >
          No
        </button>
      </div>
    </div>
  );
}

export default LastPage;
