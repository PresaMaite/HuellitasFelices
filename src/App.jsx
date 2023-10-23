import "./App.css";

import { AppRouter } from "./routes/AppRouter";

function App() {
  const animals = [
    { type: "CAT", description: "Cat 1", image: "assets/cats/cat1.jpg" },
    { type: "DOG", description: "Dog 1", image: "assets/d/dog1.jpg" },
  ];
  return (
    <>
      <AppRouter></AppRouter>
    </>
  );
}

export default App;
