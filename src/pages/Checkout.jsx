import { useCartContext } from "../context/CartContext.jsx";
import CPU from "../assets/products/CPU.jpg";
import GPU from "../assets/products/GPU.jpg";
import RAM from "../assets/products/ram.jpg";
import drive from "../assets/products/drive.jpg";
import motherboard from "../assets/products/Motherboard.jpg";
import PSU from "../assets/products/PSU.jpg";
import cooler from "../assets/products/CPU fan.jpg";
import monitor from "../assets/products/monitor.jpg";
import cases from "../assets/products/case.jpg";

function Checkout() {
  const { cart, getCartTotal } = useCartContext();

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
  const inputCSS =
    "w-80 h-12 bg-transparent text-white text-lg px-8 mb-8 relative bg-input bg-cover bg-no-repeat bg-center";
  return (
    <section className="text-white">
      <div className="bg-builds bg-cover bg-no-repeat bg-bottom xl:pb-20">
        <h1 className="text-center xs:text-xl xl:text-5xl pb-10">CHECKOUT</h1>
      </div>
      <div className="flex xl:justify-center items-center gap-10 px-40 py-12 xs:flex-col xl:flex-row">
        <div>
          <h1 className="text-white text-center my-4  text-3xl">
            Billing infomation
          </h1>

          <form action="">
            <div className="flex flex-col items-center">
              <div className="xs:flex xs:flex-col xs:items-center xl:grid xl:grid-col xl:grid-cols-2 gap-2">
                <input
                  type="text"
                  required
                  placeholder="Last name"
                  className={inputCSS}
                />
                <input
                  type="text"
                  required
                  placeholder="First name"
                  className={inputCSS}
                />
                <input type="text" placeholder="Wilaya" className={inputCSS} />
                <input type="text" placeholder="Street" className={inputCSS} />
                <input
                  type="tel"
                  required
                  placeholder="Phone"
                  className={inputCSS}
                />
                <input
                  type="email"
                  required
                  placeholder="Email"
                  className={inputCSS}
                />
              </div>
              <textarea
                required
                cols="30"
                rows="10"
                placeholder="note"
                className={`${inputCSS} xs:h-40 xl:h-40 xl:w-500 bg-message bg-contain pt-8`}
              ></textarea>
            </div>
          </form>
        </div>

        <div className="bg-neutral-800">
          <h1 className="text-center text-xl py-6">Your order</h1>
          <div className="flex justify-evenly py-2 xs:gap-36 xl:gap-60 3xl:gap-100">
            <p>Product</p>
            <p>Sub-total</p>
          </div>
          <div className="xs:px-10 xl:px-5">
            {cart &&
              cart.map((item) => (
                <div key={item.id}>
                  <div className="flex items-center py-2 xs:justify-center xl:justify-evenly xs:gap-8 xl:gap-16 3xl:gap-96">
                    <div className="flex gap-4">
                      <img
                        src={categoryMap[item.category]}
                        alt={item.name}
                        className="xs:w-10 xl:w-20"
                      />
                      <p className="w-60">{item.name}</p>
                    </div>

                    <p className="w-24">{item.price * item.quantity} dz</p>
                  </div>
                </div>
              ))}
          </div>
          <hr />
          <div className="flex items-center justify-between py-4 xs:px-12">
            <p>Dispatch</p>
            <div className="flex flex-col">
              <div className="flex gap-2">
                <label className="w-32">Yalidine office</label>
                <input type="checkbox" />
                <p className="text-newred"> 300 da </p>
              </div>
              <div className="flex gap-2">
                <label className="w-32">Yalidine Home</label>
                <input type="checkbox" />
                <p className="text-newred"> 500 da</p>
              </div>
              <div className="flex gap-2">
                <label className="w-32">From our store</label>
                <input type="checkbox" />
                <p className="text-newred">free</p>
              </div>
            </div>
          </div>
          <hr />
          <div className="flex justify-between px-12 py-4 xs:text-base xl:text-xl">
            <p>Total</p>
            <p className="text-newred">{getCartTotal()} da</p>
          </div>
          <hr />
          <div>
            <div className="flex flex-col gap-2 py-4 xs:px-12 xl:px-4 3xl:px-16">
              <div className="p-3">
                <input type="checkbox" />
                <label htmlFor="" className="px-8">
                  Cash on delivery
                </label>
              </div>
              <hr />
              <div className="p-3">
                <input type="checkbox" />
                <label htmlFor="" className="px-8">
                  CCP payment
                </label>
              </div>
            </div>
            <p className="py-2 xs:px-16 xl:px-8 3xl:px-32">
              Your personal data will be used to process your order, support
              your experience on this website and for other purposes described
              in our privacy policy.
            </p>
            <div className="flex justify-center py-4">
              <button className="bg-button bg-center bg-contain bg-no-repeat px-10 py-2">
                Buy now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
