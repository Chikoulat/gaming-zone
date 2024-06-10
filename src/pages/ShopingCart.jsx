import { useCartContext } from "../context/CartContext.jsx";
import { NavLink } from "react-router-dom";
import delItem from "../assets/delete item.png";
import CPU from "../assets/products/CPU.jpg";
import GPU from "../assets/products/GPU.jpg";
import RAM from "../assets/products/ram.jpg";
import drive from "../assets/products/drive.jpg";
import motherboard from "../assets/products/Motherboard.jpg";
import PSU from "../assets/products/PSU.jpg";
import cooler from "../assets/products/CPU fan.jpg";
import monitor from "../assets/products/monitor.jpg";
import cases from "../assets/products/case.jpg";

function ShopingCart() {
  const {
    cart,
    addToCart,
    decreaseQuantity,
    removeFromCart,
    clearCart,
    getCartTotal,
  } = useCartContext();

  const categoryMap = {
    CPU,
    GPU,
    RAM,
    storage: drive,
    motherboard,
    "power supply": PSU,
    cooler,
    monitor,
    case: cases,
  };

  if (cart.length === 0) {
    return (
      <section className="text-white text-center">
        <div className="bg-builds bg-cover bg-no-repeat bg-bottom pb-20">
          <h1 className=" text-5xl py-8">SHOPPING CART</h1>
        </div>
        <div className="py-12">
          <div>
            <h1 className="text-5xl pb-10">
              Nothing in your cart yet, please visit our products
            </h1>
            <div className="flex gap-12 justify-center items-center">
              {" "}
              <NavLink
                to="/products"
                className="text-xl bg-button bg-center bg-cover bg-no-repeat py-3 px-20"
              >
                Our products
              </NavLink>
              <iframe src="https://lottie.host/embed/f91ca4d1-019e-4406-8ac4-223ccb029a99/eiSvsl97ll.json" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="text-white">
      <div className="bg-builds bg-cover bg-no-repeat bg-bottom xl:pb-20">
        <h1 className="text-center xs:text-xl xl:text-5xl py-8">
          SHOPPING CART
        </h1>
      </div>
      <div className="py-12 xs:text-sm xl:text-base">
        <div className="flex xs:justify-between xl:justify-around bg-header bg-center bg-no-repeat 3xl:bg-cover 3xl:gap-110 3xl:mx-32 py-3 xl:pl-36 3xl:pl-0">
          <p>Product</p>
          <div className="flex xs:gap-10 xl:gap-28 3xl:gap-40">
            <p>Price</p>
            <p>Quantity</p>
            <p>Sub-total</p>
          </div>
        </div>

        {cart &&
          cart.map((item) => (
            <div key={item.id}>
              <div className="flex items-center py-4 xs:px-2 xl:px-52 xl:gap-12">
                <button type="button" onClick={() => removeFromCart(item)}>
                  <img className="w-1/2" src={delItem} alt="cancel" />
                </button>
                <img
                  src={categoryMap[item.category]}
                  alt={item.name}
                  className="xs:hidden xl:block xl:w-32"
                />
                <p className=" xs:w-96 xl:w-500">{item.name}</p>
                <p className="xs:px-3  xl:px-0 xl:w-40 text-center">
                  {" "}
                  {item.price} dz{" "}
                </p>
                <div className="flex justify-between items-center bg-button bg-center bg-no-repeat xs:bg-contain xs:px-6 xs:gap-4 xl:bg-cover xl:px-10 xl:gap-8">
                  <button
                    onClick={() => decreaseQuantity(item)}
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    onClick={() => addToCart(item)}
                    disabled={item.quantity === item.stock}
                  >
                    +
                  </button>
                </div>
                <p className="w-40 text-center">
                  {item.price * item.quantity} dz
                </p>
              </div>
              <hr className="w-5/6 mx-auto" />
            </div>
          ))}
        <div className="flex justify-evenly items-center xs:gap-10 xs:flex-col xl:flex-row xl:gap-20 py-10">
          {" "}
          <div>
            <input type="text" className="xl:w-60" />
            <button className="bg-buttonC bg-center bg-contain bg-no-repeat px-8 py-1 ">
              Apply coupon
            </button>
          </div>
          <div>
            <button
              onClick={clearCart}
              className="bg-button bg-center bg-no-repeat bg-cover px-10"
            >
              Clear Cart
            </button>
          </div>
          {getCartTotal() > 0 && (
            <div className="xl:py-10">
              <table className=" w-full text-center mb-8">
                <thead className="bg-newred border">
                  <tr>
                    <th className="px-4 py-2">
                      <h2> Total basket </h2>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">
                      <h4>Total: {getCartTotal()}</h4>
                    </td>
                  </tr>
                </tbody>
              </table>
              <NavLink
                to="/checkout"
                className="bg-button bg-center bg-cover font-bold py-2 px-6"
              >
                Proceed to checkout
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ShopingCart;
