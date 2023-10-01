import { useState } from "react";
import Header from "./Header";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <Header cart={cart} />
      {/* Other components */}
    </div>
  );
}

export default App;
