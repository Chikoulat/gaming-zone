function SingUp() {
  const inputCSS =
    "w-80 h-12 bg-transparent text-white text-lg px-8 mb-8 relative bg-input bg-cover bg-no-repeat bg-center";
  return (
    <section>
      <div className="relative bg-cover bg-center bg-singUp py-12">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black " />
        <h1 className="text-center xs:text-2xl xl:text-5xl text-white pb-12">
          SING UP
        </h1>
        <form action="">
          <div className="flex flex-col items-center">
            <div className="xs:flex xs:flex-col xs:items-center xl:grid xl:grid-col xl:grid-cols-2 gap-2">
              <input
                type="text"
                required
                placeholder="Full name"
                className={inputCSS}
              />
              <input
                type="text"
                required
                placeholder="Phone"
                className={inputCSS}
              />
              <input
                type="email"
                required
                placeholder="email"
                className={inputCSS}
              />
              <input
                type="email"
                required
                placeholder="Confirm email"
                className={inputCSS}
              />
              <input
                type="password"
                required
                placeholder="Password"
                className={inputCSS}
              />
              <input
                type="password"
                required
                placeholder="Confirm password"
                className={inputCSS}
              />
              <input
                type="text"
                required
                placeholder="adress"
                className={inputCSS}
              />
              <input
                type="text"
                required
                placeholder="wilaya"
                className={inputCSS}
              />
            </div>

            <button
              type="submit"
              className="h-12 bg-button bg-center bg-no-repeat bg-cover text-white text-xl relative xs:px-12 xl:px-24"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SingUp;
