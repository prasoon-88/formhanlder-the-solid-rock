import Avtar from "./components/Avtar";
import Button from "./components/button";
import Checkbox from "./components/checkbox";


function App() {
  return <div>
    <h1 className="bg-layout-divider">hello world</h1>
    <Avtar color="primary" size="lg" border="lg" />
    <Button children="click me" variant="flat" color="warning" radius="lg" size="lg"  />
    <Checkbox color="primary" size="lg" radius="md"/>


  </div>;
}

export default App;
