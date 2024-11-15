import Header from "./components/header";
import Guitar from "./components/Guitar";
import { useCart } from "./hooks/useCart";

function App() {
  const {
    data,
    cart,
    addToCart,
    removeFromCart,
    decreaseGuitar,
    increaseGuitar,
    clearCart,
    title,
    subTitle,
    isEmpty,
    cartTotal
  } = useCart();

  return (
    <>
      <Header
        cart={cart}
        removeFromCart={removeFromCart}
        increaseGuitar={increaseGuitar}
        decreaseGuitar={decreaseGuitar}
        clearCart={clearCart}
        isEmpty ={ isEmpty}
        cartTotal = {cartTotal}
      />
      <main className="container-xl mt-5">
        <h2 className="text-center"> {title} </h2>
        <div className="row mt-5">
          {data.map((guitar) => {
            return (
              <Guitar key={guitar.id} guitar={guitar} addToCart={addToCart} />
            );
          })}
        </div>
      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">{subTitle}</p>
        </div>
      </footer>
    </>
  );
}

export default App;
