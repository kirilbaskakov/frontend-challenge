import Router from "@/components/Router";

import { FavoritesProvider } from "./store/FavoritesStore";

function App() {
  return (
    <FavoritesProvider>
      <Router />
    </FavoritesProvider>
  );
}

export default App;
