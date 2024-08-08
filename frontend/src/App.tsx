import Avtar from "./components/Avtar";
import Badge from "./components/Badge";

function App() {
  return <div>
    <h1 className="bg-layout-divider">hello world</h1>
    <Avtar color={"success"} size={"sm"} border={"sm"} shadow={"md"}/>
    <Badge color={"primary"} size={"lg"} shadow={"2xl"}/>
  </div>;
}

export default App;
