import PropTypes from "prop-types";
import { useCartContext } from "../../context/CartContext";
import delItem from "../../assets/delete item.png";
import pcCase from "../../assets/built pc/case.png";
import mobo from "../../assets/built pc/mobo.png";
import GPU from "../../assets/built pc/gpu.png";
import CPU from "../../assets/built pc/cpu.png";
import RAM from "../../assets/built pc/ram.png";
import SSD from "../../assets/built pc/ssd.png";
import PSU from "../../assets/built pc/psu.png";
import CPUFan from "../../assets/built pc/cpu-fan.png";

const itemIcons = {
  case: pcCase,
  motherboard: mobo,
  GPU: GPU,
  CPU: CPU,
  RAM: RAM,
  storage: SSD,
  "power supply": PSU,
  cooler: CPUFan,
};

const cssBuild =
  "flex items-center justify-end bg-prebuilproduct bg-no-repeat bg-center bg-cover xs:px-2 xs:py-1 xs:gap-12 xl:gap-8 xl:pr-24 xl:px-4 xl:py-2 ";

function BuilderItem({ item, category, handleClear, handleCategory }) {
  const icon = itemIcons[category];

  const { removeFromCart } = useCartContext();

  return (
    <section>
      <div className={cssBuild}>
        {item ? (
          <>
            <div>
              <img
                src={item.images}
                alt={item.name}
                className="xs:w-10 xl:w-12"
              />
              <div>
                <h3 className="w-40 overflow-hidden overflow-ellipsis whitespace-nowrap">
                  <button onClick={handleCategory} value={category}>
                    {item.name}
                  </button>
                </h3>
                <div className="flex gap-16">
                  <p>{item.price} dz</p>
                  <button
                    onClick={() => {
                      handleClear(item);
                      removeFromCart(item);
                    }}
                    className="flex justify-end"
                  >
                    <img className="w-5" src={delItem} alt="cancel" />
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <img src={icon} alt={category} className="xs:w-10" />
            <div>
              <h3 className="w-40">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </h3>
              <button onClick={handleCategory} value={category}>
                Please select an item
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

BuilderItem.propTypes = {
  item: PropTypes.oneOfType([
    PropTypes.shape({
      images: PropTypes.string,
      name: PropTypes.string,
    }),
    PropTypes.oneOf([null]),
  ]),
  category: PropTypes.string.isRequired,
  handleClear: PropTypes.func.isRequired,
  handleCategory: PropTypes.func.isRequired,
};

export default BuilderItem;
