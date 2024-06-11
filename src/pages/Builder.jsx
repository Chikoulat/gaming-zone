import { useState, useMemo } from "react";
import { useProductContext } from "../context/ProductContext";
import { useCartContext } from "../context/CartContext";
import DOMPurify from "dompurify";
import { Filters } from "../service/MultiFilter.js";
import pcCase from "../assets/built pc/case.png";
import mobo from "../assets/built pc/mobo.png";
import GPU from "../assets/built pc/gpu.png";
import CPU from "../assets/built pc/cpu.png";
import RAM from "../assets/built pc/ram.png";
import SSD from "../assets/built pc/ssd.png";
import PSU from "../assets/built pc/psu.png";
import CPUFan from "../assets/built pc/cpu-fan.png";
import processor from "../assets/products/CPU.jpg";
import graphic from "../assets/products/GPU.jpg";
import randomMemory from "../assets/products/ram.jpg";
import drive from "../assets/products/drive.jpg";
import motherboard from "../assets/products/Motherboard.jpg";
import powerSupply from "../assets/products/PSU.jpg";
import cooler from "../assets/products/CPU fan.jpg";
import monitor from "../assets/products/monitor.jpg";
import cases from "../assets/products/case.jpg";

const itemsPerPage = 8;

const categoryMap = {
  processor,
  graphic,
  randomMemory,
  storage: drive,
  motherboard,
  powerSupply,
  cooler,
  monitor,
  case: cases,
};

function Builder() {
  const cssBuild =
    "flex items-center justify-end bg-prebuilproduct bg-no-repeat bg-center bg-cover xs:px-2 xs:py-1 xs:gap-12 xl:gap-8 xl:pr-24 xl:px-4 xl:py-2";

  return (
    <section className="text-white py-12">
      <h1 className="text-5xl text-center">PC BUILDER</h1>
      <div className="flex justify-center ">
        <div className="bg-amd bg-center bg-no-repeat w-full h-150 flex items-end justify-center ">
          <button className="text-xl bg-redB bg-center bg-no-repeat bg-cover px-12 py-6 relative  hover:bg-red hover:px-12 hover:py-6 hover:bg-contain">
            Build
          </button>
        </div>
        <div className="bg-intel bg-center bg-no-repeat w-full h-150 flex items-end justify-center ">
          <button className="text-xl bg-blueB bg-center bg-no-repeat bg-cover px-12 py-6 relative hover:bg-blue hover:px-12 hover:py-6 hover:bg-contain">
            Build
          </button>
        </div>
      </div>

      <div className="flex">
        <div className="flex flex-col items-center gap-4 xl:py-6 xl:px-12">
          <div className={cssBuild}>
            <img src={pcCase} alt="Case" className="xs:w-10 xl:w-12" />
            <div className="">
              <h3 className="w-40">Case</h3>
              <button>Please select an item</button>
            </div>
          </div>
          <div className={cssBuild}>
            <img src={mobo} alt="MOBO" className="xs:w-10 xl:w-12" />
            <div className="">
              <h3 className="w-40">Motherboard</h3>
              <button>Please select an item</button>
            </div>
          </div>
          <div className={cssBuild}>
            <img src={CPU} alt="CPU" className="xs:w-10 xl:w-12" />
            <div className="">
              <h3 className="w-40">CPU</h3>
              <button>Please select an item</button>
            </div>
          </div>
          <div className={cssBuild}>
            <img src={RAM} alt="RAM" className="xs:w-10 xl:w-12" />
            <div className="">
              <h3 className="w-40">RAM</h3>
              <button>Please select an item</button>
            </div>
          </div>
          <div className={`${cssBuild} `}>
            <img src={CPUFan} alt="CPU fan" className="xs:w-10 xl:w-12" />
            <div className="">
              <h3 className="w-40">CPU cooler</h3>
              <button>Please select an item</button>
            </div>
          </div>
          <div className={`${cssBuild} `}>
            <img src={GPU} alt="GPU" className="xs:w-10 xl:w-12" />
            <div className="">
              <h3 className="w-40">GPU</h3>
              <button>Please select an item</button>
            </div>
          </div>
          <div className={`${cssBuild}`}>
            <img src={SSD} alt="SSD" className="xs:w-10 xl:w-10" />
            <div className="">
              <h3 className="w-40">SSD</h3>
              <button>Please select an item</button>
            </div>
          </div>
          <div className={`${cssBuild} `}>
            <img src={PSU} alt="PSU" className="xs:w-10 xl:w-12" />
            <div className="">
              <h3 className="w-40">Power supply</h3>
              <button>Please select an item</button>
            </div>
          </div>
        </div>

        <div>
          <h1>hehehehe</h1>
        </div>
      </div>
    </section>
  );
}

export default Builder;
