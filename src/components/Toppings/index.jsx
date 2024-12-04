import axios from "axios";
import { useEffect, useState } from "react";

const Toppings = () => {
  const [data, setData] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/toppings")
      .then((res) => setData(res.data));
  }, []);

  const handleChange = (isChecked, item) => {
    isChecked
      ? setBasket([...basket, item])  //sepete ekle
      : setBasket(basket.filter((i) => i.name !== item.name)); //sepetten kaldir
  };

  return (
    <div className="container">
      <h1>Sos Cesitleri</h1>
      <p>
        Tanesi <span className="text-success">3$</span>
      </p>
      <h3>
        Soslar Ucreti <span data-testid="total">0</span>$
      </h3>

      <div className="row gap-3 p-3">
        {data.map((item) => (
          <div className="top-card" style={{ width: "150px" }}>
            <label
              htmlFor={item.name}
              className="d-flex flex-column align-items-center gap-3"
            >
              <img height={100} src={item.imagePath} alt="" />
              <p className="text-nowrap text-center">{item.name}</p>
            </label>

            <input
              onChange={(e) => handleChange(e.target.checked, item)}
              id={item.name}
              type="checkbox"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Toppings;
