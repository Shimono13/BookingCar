import { useState } from "react";
import Splash from "./components/Splash";

function App() {
  const [page, setPage] = useState("splash");

  return <Splash></Splash>;
}

export default App;
