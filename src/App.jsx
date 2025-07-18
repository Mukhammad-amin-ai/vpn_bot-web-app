import { RouterProvider } from "react-router-dom";
import router from "./router";

function App() {
  return (
    <>
      <div className="max-w-[500px] w-full m-[0_auto]">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
