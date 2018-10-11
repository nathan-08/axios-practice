import React from 'react';
import ButtonContainer from '../ButtonContainer/ButtonContainer';

function Header({ create, read, update, delete: deleteFn, statusClass, statusText }) {
    return (
      <section>
        <header>
          <div className="header-instructions">
            <h3> Axios CRUD Practice </h3>
            <p>
              Create a JSON object in the editor on the left and use the buttons to interact with the server. Results from
              the server will be displayed on the right.
            </p>
          </div>
          <ButtonContainer create={create} read={read} update={update} delete={deleteFn} />
        </header>
        <section className="status">
          <span className={statusClass}> {statusText} </span>
        </section>
      </section>
    );
  }

  export default Header;