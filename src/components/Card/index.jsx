const Card = ({ item, basket, setBasket }) => {

  //sepette bu urunler kac tane var?

  const found = basket.filter((i) => i.name === item.name);
  const amount = found.length;

  //karttaki butun elemanlari kaldir

  const handleReset= () =>{
    setBasket(basket.filter((i)=>i.name !== item.name ))
  }

  return (
    <div
      style={{ width: "190px" }}
      className="d-flex flex-column align-items-center gap-1 border rounded p-3 "
    >
      <img height={100} src={item.imagePath} alt="cesit-resim" />
      <span className="fs-5">{item.name}</span>

      <div className="d-flex gap-2 mt-4 align-items-center  ">
        <button onClick={handleReset} className="btn btn-sm btn-outline-danger ">Sifirla</button>
        <span className="fs-2">{amount}</span>
        <button
          onClick={() => setBasket([...basket, item])}
          className="btn btn-sm btn-outline-success"
        >
          Ekle
        </button>
      </div>
    </div>
  );
};
export default Card;
