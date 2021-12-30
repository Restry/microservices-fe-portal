import React from "react";
import HelloWorld from "./components/Helloworld";
import RenderForm from "./components/RenderForm";
import './index.less'

const App: React.FC<{}> = () => {
  return (
    <div className="container">
      <HelloWorld />
      <RenderForm />
    </div>
  );
};

export default App;