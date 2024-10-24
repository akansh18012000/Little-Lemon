import React from "react";
import Cards from "./Cards";
import Bruchetta from "../assets/bruchetta.svg";
import LemonDessert from "../assets/lemon dessert.jpg";
import GreekSalad from "../assets/greek salad.jpg";

const Specials = () => {
  return (
    <div className="specials">
      <div className="spcials-heading-container">
        <h2>This Week's Specials!</h2>
        <button>Online Menu</button>
      </div>
      <div className="specials-cards-container">
        <Cards
          img={GreekSalad}
          name={"Greek Salad"}
          price={"$12.99"}
          description={
            " Experience the vibrant flavors of the Mediterranean with our traditional Greek Salad. This refreshing dish features a colorful medley of ripe tomatoes, crisp cucumbers, tangy red onions, and sweet green bell peppers, all tossed with briny Kalamata olives and creamy feta cheese. Finished with a generous drizzle of extra virgin olive oil and a sprinkle of aromatic oregano, our Greek Salad is a perfect blend of simplicity and taste. Enjoy it as a delightful side or a light, wholesome main course."
          }
        />
        <Cards
          img={Bruchetta}
          name={"Bruchetta"}
          price={"$5.99"}
          description={
            "Indulge in the classic Italian flavors of our Bruschetta. This appetizer features toasted artisan bread topped with a vibrant mix of ripe tomatoes, fresh basil, and garlic, all drizzled with extra virgin olive oil and a hint of balsamic glaze. Each bite offers a perfect balance of crunch and freshness, making it an ideal start to your meal. Enjoy the simplicity and elegance of this timeless favorite."
          }
        />
        <Cards
          img={LemonDessert}
          name={"Lemon Dessert"}
          price={"$5.00"}
          description={
            "Delight in the zesty and refreshing flavors of our Lemon Dessert. This exquisite treat features a luscious lemon custard layered with a buttery graham cracker crust, topped with a light, airy whipped cream. Each bite delivers a perfect balance of tartness and sweetness, making it a refreshing end to any meal. Perfect for lemon lovers, this dessert is a bright and tangy finale to your dining experience."
          }
        />
      </div>
    </div>
  );
};

export default Specials;
