import React from "react";
import Demos from "./demos/Demos";

function App() {
  return (
    <>

      {/* env test */}
      {/* <div>
        <small>current mode: {process.env.NODE_ENV} </small>
        <form>
          <input type="text" value={process.env.REACT_APP_AA} />
        </form>
      </div> */}


      <Demos />

    </>
  );
}

export default App;
