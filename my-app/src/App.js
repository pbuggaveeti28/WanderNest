import "./App.css";
import Navbar from "./Navbar.js";
import Hero from "./Hero.js";
import Card from "./Card.js";
import data from "./data.js";
function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  );
}
export default App;
