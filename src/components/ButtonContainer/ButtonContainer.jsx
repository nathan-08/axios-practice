import React from "react";

function ButtonContainer({ create, read, update, delete: deleteFn }) {
  return (
    <div className="button--container">
      <div className="button dark-color" onClick={create}>
        create
      </div>
      <div className="button dark-color" onClick={read}>
        read
      </div>
      <div className="button dark-color" onClick={update}>
        update
      </div>
      <div className="button dark-color" onClick={deleteFn}>
        delete
      </div>
    </div>
  );
}

export default ButtonContainer;
