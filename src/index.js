import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import GameWrapper from "./GameWrapper";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<GameWrapper />, document.getElementById("root"));
registerServiceWorker();
