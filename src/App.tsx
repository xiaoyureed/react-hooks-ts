import React from "react";
import Demos from "./demos/Demos";
import { ViewportContextProvider } from "./demos/layout/responsive_layout/good/HooksAndContext";

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

      <ViewportContextProvider>
        <Demos />
      </ViewportContextProvider>
    </>
  );
}

export default App;
