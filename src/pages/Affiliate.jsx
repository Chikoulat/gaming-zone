import { useState } from "react";
import img from ".././assets/images/affiliate.png";
import FAQ from "../data/FAQ.json";
import { NavLink } from "react-router-dom";

function Affiliate() {
  const [open, setOpen] = useState(false);

  const handleSubmit = () => {
    document.getElementById("my_modal_2").showModal();
  };

  const inputCSS =
    "w-80 h-12 bg-transparent text-lg px-8 bg-input bg-cover bg-no-repeat bg-center";

  return (
    <section className="text-white pb-12">
      <div className=" bg-builds bg-cover bg-no-repeat bg-bottom xl:py-12 xl:z-10 relative">
        <h1 className="text-center pb-10 xs:text-3xl xl:text-5xl">
          BECOME AFFILIATE
        </h1>
      </div>
      <div className="flex justify-center py-2 mt-96">
        <img src={img} alt="affiliate" className="mx-auto absolute top-52" />
        <h2 className="realtive z-10 bottom-0 xs:text-xl xl:text-4xl">
          become an official gaming zone affiliate today !
        </h2>
      </div>

      <p className="relative xl:px-80 text-center text-lg py-2">
        Are you a passionate PC gamer with a social media account, Twitch.TV
        channel, YouTube channel, or have a new website with PC gaming related
        content? Want an easy way to earn some cash by partnering up with the
        best custom PC system builder in the world? Well, Gaming ZONE Affiliate
        program via Commission Junction (CJ) is the perfect choice for you!
      </p>
      <h2 className="text-6xl text-center pt-10">EARN</h2>
      <div className="flex xl:items-center gap-20 py-10 xs:flex-col-reverse xl:flex-row xl:px-80">
        <div className="xs:flex xs:flex-col xs:items-center xl:block">
          <p className="px-3 pb-6">
            With your unique URL link provided by Commission Junction, you can
            easily track and earn commission on any Gaming Zone PC system or
            Gearshop order referred by your channel or website! All commissions
            are determined by Gaming Zone and will be offered to you once you
            complete the signup process to join as a CJ Publisher.
          </p>
          <button className="bg-button bg-center bg-no-repeat py-2 xs:bg-contain xs:px-20 xl:bg-cover xl:px-10">
            Commission policy
          </button>
        </div>
        <img
          src="https://contentyum.com/wp-content/uploads/2024/02/contentyum-affiliate.svg"
          className=""
        />
      </div>
      <form action="" className="flex flex-col items-center gap-6 pt-6">
        <div className="xs:flex xs:flex-col xs:items-center xl:grid xl:grid-col xl:grid-cols-2 gap-6">
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
          <input
            type="email"
            required
            placeholder="Email"
            className={inputCSS}
          />
          <input type="tel" required placeholder="Phone" className={inputCSS} />

          <input type="text" placeholder="Facebook" className={inputCSS} />
          <input type="text" placeholder="Instagram" className={inputCSS} />
          <input type="text" placeholder="Tik Tok" className={inputCSS} />
          <input type="text" placeholder="Youtube" className={inputCSS} />
        </div>

        <button
          onClick={handleSubmit}
          className="h-12 bg-button bg-center bg-no-repeat bg-cover text-white text-xl relative px-20"
        >
          Join us
        </button>
      </form>
      <hr className="border-2 border-secondary my-6" />
      <h1 className="text-center text-gzred py-3 xs:text-2xl xl:text-5xl">
        Frequently asked questions
      </h1>
      <div className="grid xl:grid-cols-2 text-white">
        {FAQ &&
          FAQ.map((faq) => (
            <div key={faq.id}>
              <details
                className="bg-buttonC bg-cover bg-center bg-no-repeat my-4 xs:px-16 xl:px-20 xs:py-4 xl:py-6"
                open={open === faq.id}
                onClick={() => setOpen(open === faq.id ? null : faq.id)}
              >
                <summary className="flex items-center justify-between cursor-pointer">
                  <h5 className=" xs:text-sm xl:text-lg">{faq.question}</h5>

                  <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                      fill="black"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                </summary>

                <p className="mt-4">{faq.answer}</p>
              </details>
            </div>
          ))}
      </div>
      <dialog id="my_modal_2" className="py-10 rounded-md">
        {" "}
        <button
          onClick={() => document.getElementById("my_modal_2").close()}
          className="top-0 right-0 absolute bg-button bg-center bg-cover bg-no-repeat px-2 py-1 text-white"
        >
          x
        </button>
        <p className="py-4 xs:px-12 xl:px-28">
          Thank you for joining us, we will contact you soon. Would you like to
          go back to our products?
        </p>
        <div className="flex justify-center gap-4">
          <NavLink
            to="/products"
            className="bg-buttonB bg-center bg-cover bg-no-repeat px-10 text-white"
          >
            {" "}
            Products
          </NavLink>
          <NavLink
            to="/"
            className="bg-buttonB bg-center bg-cover bg-no-repeat px-10 text-white"
          >
            {" "}
            Home page
          </NavLink>
        </div>
      </dialog>
    </section>
  );
}

export default Affiliate;
