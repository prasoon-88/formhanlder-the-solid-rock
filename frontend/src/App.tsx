
import Avtar from "./components/Avtar";
import Badge from "./components/Badge";
import Input from "./components/input";
function App() {
  return <div>
    <h1 className="bg-layout-divider">hello world</h1>
    <Avtar color={"success"} size={"sm"} border={"sm"} shadow={"md"}/>
    <Badge color={"primary"} size={"lg"} shadow={"2xl"}/>
    <Input color="primary" varient="underlined" />
  </div>;
}

export default App;
