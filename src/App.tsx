import AppRoutes from "./routes";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div>
      <AppRoutes />
      <Analytics />
    </div>
  );
}

export default App;
