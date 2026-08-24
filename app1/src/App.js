import React from "react";
import {userContext} from "./context"
import Header from "./context-header";
import Content from "./context-content"
import Content2 from "./context-content2"
import Header2 from "./context-header2"

function App() {
  return (
    <userContext.Provider value={"Tom Jerry"}>
      <Header2 />
      <Content2 />
    </userContext.Provider>
  );
}
export default App;