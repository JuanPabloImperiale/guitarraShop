/* eslint-disable react/prop-types */

export default function Header({
  cart,
  removeFromCart,
  increaseGuitar,
  decreaseGuitar,
  clearCart,
  isEmpty,
  cartTotal,
  cartIconTotal,
}) {
  return (
    <header className="py-5 header">
      <div className="container-xl">
        <div className="row justify-content-center justify-content-md-between">
          <div className="col-8 col-md-3">
            <a href="index.html">
              <img
                className="img-fluid"
                src="/img/logo.svg"
                alt="imagen logo"
              />
              
            </a>
          </div>
          <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
            <div className="carrito">
              <img
                className="img-fluid"
                src="/img/carrito.png"
                alt="imagen carrito"
              />
              {cartIconTotal > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: "30px",
                    backgroundColor: "#e99401",
                    color: "white",
                    borderRadius: "50%",
                    padding: "0.2em 0.7em",
                    fontSize: "0.8em",
                  }}
                >
                  {cartIconTotal}
                </span>
              )}

              <div id="carrito" className="bg-white p-3">
                {isEmpty ? (
                  <p className="text-center">El carrito esta vacio</p>
                ) : (
                  <>
                    <table className="w-100 table">
                      <thead>
                        <tr>
                          <th>Imagen</th>
                          <th>Nombre</th>
                          <th>Precio</th>
                          <th>Cantidad</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart.map((guitar) => (
                          <tr key={guitar.id}>
                            <td>
                              <img
                                className="img-fluid"
                                src={`/img/${guitar.image}.jpg`}
                                alt="imagen guitarra"
                              />
                            </td>
                            <td>{guitar.name}</td>
                            <td className="fw-bold">${guitar.price}</td>
                            <td className="flex align-items-start gap-4">
                              <button
                                type="button"
                                className="btn btn-dark"
                                onClick={() => decreaseGuitar(guitar.id)}
                              >
                                -
                              </button>
                              {guitar.quantity}
                              <button
                                type="button"
                                className="btn btn-dark"
                                onClick={() => increaseGuitar(guitar.id)}
                              >
                                +
                              </button>
                            </td>
                            <td>
                              <button
                                className="btn btn-danger"
                                type="button"
                                onClick={() => removeFromCart(guitar.id)}
                              >
                                X
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    <p className="text-end">
                      Total pagar: <span className="fw-bold">${cartTotal}</span>
                    </p>
                    <button
                      className="btn btn-dark w-100 mt-3 p-2"
                      onClick={clearCart}
                    >
                      Vaciar Carrito
                    </button>
                  </>
                )}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
