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
    "flex items-center justify- bg-prebuilproduct bg-no-repeat bg-center bg-cover xs:px-2 xs:py-1 xs:gap-12 xl:gap-10 xl:px-5 xl:py-2";

  return (
    <section className="text-white">
      <div className="bg-builds bg-cover bg-no-repeat bg-bottom xl:pb-20">
        <h1 className="text-center xs:text-xl xl:text-5xl pb-10">
          PREBUILT COMPUTER
        </h1>
      </div>
      <div className="bg-prebuiltpage bg-contain bg-top4 bg-no-repeat py-12">
        <h1 className="xs:text-3xl xl:text-7xl text-center xl:pt-10">
          {products[id].name}
        </h1>
        <div className="flex justify-center items-center xs:flex-col xl:flex-row ">
          <p className="xl:w-1/2 px-12">{products[id].details}</p>

          <img
            src={products[id].img}
            alt={products[id].name}
            className="xs:size-1/2 xl:w-96"
          />
        </div>{" "}
        <div className="flex items-center justify-between bg-bar xs:my-10 xl:my-5 xl:text-2xl">
          <h1 className="pl-4">{products[id].name}</h1>
          <div>
            <button className="bg-button bg-no-repeat bg-center xs:-mr-20 xl:-mr-10 xs:bg-contain xs:px-20 xl:px-36 xl:py-6 xl:bg-cover">
              Buy now
            </button>
            <button className="bg-buttonC bg-center bg-no-repeat xs:bg-contain xs:px-8 xl:bg-cover xl:px-36 xl:py-6">
              Customize
            </button>
          </div>
        </div>
        <div>
          <div className="flex xs:flex-col xl:flex-row-reverse justify-center gap-24 pt-4">
            <div className="flex flex-col justify-around">
              <h2 className="text-4xl text-newred">FLEXIBILITY</h2>
              <h3 className="text-4xl w-80">TAKE COMMAND OF TRUE POWER</h3>
              <p className="xl:w-500">
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
          <div className="flex xs:flex-col xl:flex-row items-center justify-center gap-24 my-10">
            <div className="flex flex-col justify-around">
              <h2 className="text-4xl text-newred">FLEXIBILITY</h2>
              <h3 className="text-4xl w-80">TAKE COMMAND OF TRUE POWER</h3>
              <p className="xl:w-500">
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
          <div className="flex xs:flex-col xl:flex-row-reverse justify-center items-center gap-24 px-32 my-10">
            <div>
              <h2 className="text-4xl text-newred">FLEXIBILITY</h2>
              <h3 className="text-4xl w-80">TAKE COMMAND OF TRUE POWER</h3>
              <p className="xl:w-500">
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
          <div className="flex xs:flex-col xl:flex-row items-center justify-center gap-24 px-32 pb-4">
            <div>
              <h2 className="text-4xl text-newred">FLEXIBILITY</h2>
              <h3 className="text-4xl w-80">TAKE COMMAND OF TRUE POWER</h3>
              <p className="xl:w-500">
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
      <div className="p-12 xl:px-40 bg-secondary">
        <h1 className="xs:text-3xl xl:text-5xl text-newred pb-12">
          {" "}
          Technical specifications{" "}
        </h1>

        {products && (
          <div className="xs:flex xs:flex-col xl:grid xl:grid-cols-3 gap-4 xl:py-6">
            <div className={cssBuild}>
              <img src={pcCase} alt="Case" className="xs:w-10 xl:w-12" />
              <div className="">
                <h3 className="w-40">Case</h3>
                <p>{products[id].specs.case}</p>
              </div>
            </div>
            <div className={cssBuild}>
              <img src={mobo} alt="MOBO" className="xs:w-10 xl:w-12" />
              <div className="">
                <h3 className="w-40">Motherboard</h3>
                <p>{products[id].specs.motherboard}</p>
              </div>
            </div>
            <div className={cssBuild}>
              <img src={CPU} alt="CPU" className="xs:w-10 xl:w-12" />
              <div className="">
                <h3 className="w-40">CPU</h3>
                <p>{products[id].specs.processor}</p>
              </div>
            </div>
            <div className={cssBuild}>
              <img src={RAM} alt="RAM" className="xs:w-10 xl:w-12" />
              <div className="">
                <h3 className="w-40">RAM</h3>
                <p>{products[id].specs.ram}</p>
              </div>
            </div>
            <div className={`${cssBuild} `}>
              <img src={CPUFan} alt="CPU fan" className="xs:w-10 xl:w-12" />
              <div className="">
                <h3 className="w-40">CPU cooler</h3>
                <p>{products[id].specs.cpuFan}</p>
              </div>
            </div>
            <div className={`${cssBuild} `}>
              <img src={GPU} alt="GPU" className="xs:w-10 xl:w-12" />
              <div className="">
                <h3 className="w-40">GPU</h3>
                <p>{products[id].specs.graphicsCard}</p>
              </div>
            </div>
            <div className={`${cssBuild}`}>
              <img src={SSD} alt="SSD" className="xs:w-10 xl:w-12" />
              <div className="">
                <h3 className="w-40">SSD</h3>
                <p>{products[id].specs.ssdDrive}</p>
              </div>
            </div>
            <div className={`${cssBuild} `}>
              <img src={PSU} alt="PSU" className="xs:w-10 xl:w-12" />
              <div className="">
                <h3 className="w-40">Power supply</h3>
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
