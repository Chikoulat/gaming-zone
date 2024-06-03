import support from "../assets/images/customer-support.png";
import message from "../assets/images/message.png";
import handshake from "../assets/images/handshake.png";
import question from "../assets/images/question.png";

function Contact() {
  const inputCSS =
    "w-80 h-12 bg-transparent text-white text-lg px-8 mb-8 relative bg-input bg-cover bg-no-repeat bg-center";
  return (
    <section className="my-8">
      <div className="relative bg-cover bg-center bg-contact">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black " />
        <h1 className="text-white text-center my-4 p-20 xs:text-3xl xl:text-7xl">
          Send us a message
        </h1>

        <form action="">
          <div className="flex flex-col items-center">
            <div className="xs:flex xs:flex-col xs:items-center xl:grid xl:grid-col xl:grid-cols-2 gap-2">
              <input
                type="text"
                required
                placeholder="Name"
                className={inputCSS}
              />
              <input
                type="email"
                required
                placeholder="Email"
                className={inputCSS}
              />
              <input
                type="tel"
                required
                placeholder="Phone"
                className={inputCSS}
              />
              <input type="text" placeholder="Company" className={inputCSS} />
            </div>
            <textarea
              required
              cols="30"
              rows="10"
              placeholder="Message"
              className={`${inputCSS} xs:h-40 xl:h-340 xl:w-500 bg-message bg-contain pt-8`}
            ></textarea>
            <button
              type="submit"
              className="h-12 bg-button bg-center bg-no-repeat bg-cover text-white text-xl relative xs:px-12 xl:px-24"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
      <div className="flex justify-center">
        <div className="text-white gap-6 flex justify-center items-center xs:w-5/6 xs:flex-wrap xl:flex-nowrap xs:px-4 xl:px-12 py-12 xl:w-auto">
          <div className="">
            <img
              src={message}
              alt="Message"
              className="bg-info bg-center bg-cover bg-no-repeat xs:p-4 xl:p-2"
            />
            <h4 className="xs:w-2 xl:w-full">Technical Support</h4>
          </div>
          <hr className="border-2 border-gzred w-full rotate-90 xs:hidden xl:block" />

          <div className="">
            <img
              src={support}
              alt="Support"
              className="bg-info bg-center bg-cover bg-no-repeat xs:p-4 xl:p-2"
            />
            <h4 className="xs:w-2 xl:w-full">Customer Support</h4>
          </div>
          <hr className="border-2 border-gzred w-full rotate-90 xs:hidden xl:block" />

          <div className="">
            <img
              src={question}
              alt="Question"
              className="bg-info bg-center bg-cover bg-no-repeat xs:p-4 xl:p-2"
            />
            <h4 className="xs:w-2 xl:w-full">General Inquiries</h4>
          </div>
          <hr className="border-2 border-gzred w-full rotate-90 xs:hidden xl:block" />

          <div className="">
            <img
              src={handshake}
              alt="Handshake"
              className="bg-info bg-center bg-cover bg-no-repeat xs:p-4 xl:p-2"
            />
            <h4 className="xs:w-2 xl:w-full">Business Inquiries</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
