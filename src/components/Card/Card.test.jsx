import { render } from "@testing-library/react";
import Card from ".";

const item = {
  name: "Chocolate",
  imagePath: "/images/chocolate.png",
};

const basket = [
  {
    name: "Chocolate",
    imagePath: "/images/chocolate.png",
    id: "c3ad",
  },
  {
    name: "Chocolate",
    imagePath: "/images/chocolate.png",
    id: "c3ad",
  },
  {
    name: "Vanilla",
    imagePath: "/images/vanilla.png",
    id: "ad58",
  },
];

//prop verileri test etmek
test("bunu sonra bir ara yapicam", async () => {
  render(<Card item={item} basket={basket} setBasket={() => {}} />);
});
