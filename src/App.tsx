import { Button } from "antd";

import "./App.css";
import { ProjectScreen } from "./screens/project-list/index";

function App() {
  return (
    <div className="App">
      <Button type="primary">Button</Button>
      <ProjectScreen />
    </div>
  );
}

export default App;
