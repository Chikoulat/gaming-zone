import { useBuildContext } from "../context/PreBuildContext";
import stores from "../data/stores.json";
import img1 from "../assets/images/Image 107.png";
import img2 from "../assets/images/Image 108.png";
import img3 from "../assets/images/Image 109.png";
import img4 from "../assets/images/Image 110.png";
import pcCase from "../assets/built pc/case.png";
import mobo from "../assets/built pc/mobo.png";
import GPU from "../assets/built pc/gpu.png";
import CPU from "../assets/built pc/cpu.png";
import RAM from "../assets/built pc/ram.png";
import SSD from "../assets/built pc/ssd.png";
import PSU from "../assets/built pc/psu.png";
import CPUFan from "../assets/built pc/cpu-fan.png";
import Phone from "../assets/images/phone.png";
import Map from "../assets/images/map.png";

function PreBuild() {
  const { index, products } = useBuildContext();
  const id = index - 1;
  const cssBuild =
    "flex items-center justify-center bg-prebuilproduct bg-no-repeat bg-center gap-10 py-2";

  return (
    <section className="text-white">
      <div className="bg-builds bg-cover bg-no-repeat bg-bottom pb-20">
        <h1 className="text-center text-5xl py-8">PREBUILT COMPUTER</h1>
      </div>
      <div className="bg-prebuiltpage bg-contain bg-top4 bg-no-repeat">
        <div className="flex items-center gap-8 pr-100 mr-32 w-full py-24">
          <div className="flex flex-col justify-center gap-4 px-44">
            <h1 className="text-3xl">{products[id].name}</h1>
            <p>{products[id].description}</p>
          </div>
          <img
            src={products[id].img}
            alt={products[id].name}
            className="size-1/3"
          />
        </div>{" "}
        <div className="flex items-center justify-between bg-bar text-2xl">
          <h1 className="pl-4">{products[id].name}</h1>
          <div>
            <button className="bg-button bg-cover bg-center px-36 py-6 -mr-10">
              Buy now
            </button>
            <button className="bg-buttonC bg-cover bg-center px-36 py-6">
              Customize
            </button>
          </div>
        </div>
        <div>
          <div className="flex flex-row-reverse justify-center gap-24 pt-4">
            <div className="flex flex-col justify-around">
              <h2 className="text-4xl text-newred">FLEXIBILITY</h2>
              <h3 className="text-4xl w-80">TAKE COMMAND OF TRUE POWER</h3>
              <p className="w-500">
                When you need the maximum amount of PC power with innovative,
                high-performance custom cooling, the ORIGIN PC GENESIS desktop
                lays down the foundation to create your dream machine. Designed
                for the gamer and PC enthusiast, the HydroX powered GENESIS is
                professionally built and backed by a 24/7 support team. Choose
                from the latest high end PC hardware with support for the latest
                graphics cards and processors cooled by the latest in HydroX
                cooling technology.
              </p>
            </div>
            <img src={img1} alt="img1" />
          </div>
          <div className="flex items-center justify-center gap-24 my-10">
            <div className="flex flex-col justify-around">
              <h2 className="text-4xl text-newred">FLEXIBILITY</h2>
              <h3 className="text-4xl w-80">TAKE COMMAND OF TRUE POWER</h3>
              <p className="w-500">
                When you need the maximum amount of PC power with innovative,
                high-performance custom cooling, the ORIGIN PC GENESIS desktop
                lays down the foundation to create your dream machine. Designed
                for the gamer and PC enthusiast, the HydroX powered GENESIS is
                professionally built and backed by a 24/7 support team. Choose
                from the latest high end PC hardware with support for the latest
                graphics cards and processors cooled by the latest in HydroX
                cooling technology.
              </p>
            </div>
            <img src={img2} alt="img2" />
          </div>
          <div className="flex flex-row-reverse justify-center items-center gap-24 px-32 my-10">
            <div>
              <h2 className="text-4xl text-newred">FLEXIBILITY</h2>
              <h3 className="text-4xl w-80">TAKE COMMAND OF TRUE POWER</h3>
              <p className="w-500">
                When you need the maximum amount of PC power with innovative,
                high-performance custom cooling, the ORIGIN PC GENESIS desktop
                lays down the foundation to create your dream machine. Designed
                for the gamer and PC enthusiast, the HydroX powered GENESIS is
                professionally built and backed by a 24/7 support team. Choose
                from the latest high end PC hardware with support for the latest
                graphics cards and processors cooled by the latest in HydroX
                cooling technology.
              </p>
            </div>
            <img src={img3} alt="img3" />
          </div>
          <div className="flex items-center justify-center gap-24 px-32 pb-4">
            <div>
              <h2 className="text-4xl text-newred">FLEXIBILITY</h2>
              <h3 className="text-4xl w-80">TAKE COMMAND OF TRUE POWER</h3>
              <p className="w-500">
                When you need the maximum amount of PC power with innovative,
                high-performance custom cooling, the ORIGIN PC GENESIS desktop
                lays down the foundation to create your dream machine. Designed
                for the gamer and PC enthusiast, the HydroX powered GENESIS is
                professionally built and backed by a 24/7 support team. Choose
                from the latest high end PC hardware with support for the latest
                graphics cards and processors cooled by the latest in HydroX
                cooling technology.
              </p>
            </div>
            <img src={img4} alt="img4" />
          </div>
        </div>
      </div>
      <div className="p-12 px-40 bg-secondary">
        <h1 className="text-5xl text-newred"> Technical specifications </h1>

        {products && (
          <div className="grid grid-cols-3 gap-4 py-6">
            <div className={cssBuild}>
              <img src={pcCase} alt="Case" />
              <div className="pr-40">
                <h3>Case</h3>
                <p>{products[id].specs.case}</p>
              </div>
            </div>
            <div className={cssBuild}>
              <img src={mobo} alt="MOBO" />
              <div className="pr-24">
                <h3>Motherboard</h3>
                <p>{products[id].specs.motherboard}</p>
              </div>
            </div>
            <div className={cssBuild}>
              <img src={CPU} alt="CPU" />
              <div className="pr-40">
                <h3>CPU</h3>
                <p>{products[id].specs.processor}</p>
              </div>
            </div>
            <div className={cssBuild}>
              <img src={RAM} alt="RAM" />
              <div className="pr-52">
                <h3>RAM</h3>
                <p>{products[id].specs.ram}</p>
              </div>
            </div>
            <div className={`${cssBuild} gap-10`}>
              <img src={CPUFan} alt="CPU fan" />
              <div className="pr-24">
                <h3>CPU cooler</h3>
                <p>{products[id].specs.cpuFan}</p>SSD
              </div>
            </div>
            <div className={`${cssBuild} gap-7`}>
              <img src={GPU} alt="GPU" />
              <div className="pr-36">
                <h3>GPU</h3>
                <p>{products[id].specs.graphicsCard}</p>
              </div>
            </div>
            <div className={`${cssBuild}`}>
              <img src={SSD} alt="SSD" />
              <div className="pr-48">
                <h3>SSD</h3>
                <p>{products[id].specs.ssdDrive}</p>
              </div>
            </div>
            <div className={`${cssBuild} gap-8`}>
              <img src={PSU} alt="PSU" />
              <div className="pr-40">
                <h3>Power supply</h3>
                <p>{products[id].specs.PSU}</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-wrap justify-center gap-4 my-6">
        {stores.map((store) => (
          <div
            key={store.id}
            className="flex flex-col gap-3 bg-stores bg-no-repeat bg-contain bg-center py-10 px-12 text-black"
          >
            <img
              src={store.logo}
              alt={store.name}
              className="size-1/2 mx-auto"
            />
            <hr className="border-2 border-black my-4" />
            <p className="font-bold text-3xl">{store.name}</p>
            <div className="flex gap-4">
              <img src={Phone} alt="Phone" />
              <p>{store.phone}</p>
            </div>
            <div className="flex gap-4">
              <img src={Map} alt="Map" />
              <p>{store.adress}</p>
            </div>
            <div className="flex justify-center items-center gap-2 text-white">
              <button className="flex items-center gap-3 bg-button bg-center bg-contain bg-no-repeat px-12 py-1">
                Call
              </button>
              <button className="flex items-center gap-3 bg-button bg-center bg-contain bg-no-repeat px-12 py-1 ">
                Visit
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PreBuild;
