import Image from "next/image";

const Contact = () => {
    return (
      <div className="body-font relative h-fit py-20 flex flex-col justify-center items-center text-black">
        <div className="mx-auto px-5 max-w-[1200px] flex flex-col lg:flex-row">
        <div className="lg:w-1/2  flex justify-center items-center mt-12 lg:mt-0">
            <Image src="/images/home-contact.png" alt="Contact Us" height={500} width={500} className="" />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-12 flex w-full flex-col text-center">
              <h1 className="mb-12 text-4xl font-bold leading-tight text-center sm:text-5xl text-green-700">Contact Us</h1>
              <p className="mx-auto text-base leading-relaxed lg:w-2/3 text-black">
                Feel free to reach out to us! Whether you have a question, feedback, or a collaboration proposal, we&apos;d love to hear from you.
              </p>
            </div>
  
            <div className="mx-auto md:w-2/3 lg:w-full">
              <div className="-m-2 flex flex-wrap">
                <div className="w-1/2 p-2">
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="peer w-full rounded border border-green-700 bg-white bg-opacity-40 py-1 px-3 text-base leading-8 text-black placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-green-700"
                      placeholder="Name"
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-green-700 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-orange-100 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-green-700"
                    >
                      Name
                    </label>
                  </div>
                </div>
                <div className="w-1/2 p-2">
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="peer w-full rounded border border-green-700 bg-white bg-opacity-40 py-1 px-3 text-base leading-8 text-black placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-green-700"
                      placeholder="Email"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-green-700 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-orange-100 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-green-700"
                    >
                      Email
                    </label>
                  </div>
                </div>
                <div className="mt-4 w-full p-2">
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      className="peer h-32 w-full resize-none rounded border border-green-700 bg-white bg-opacity-40 py-1 px-3 text-base leading-6 text-black placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-green-700"
                      placeholder="Message"
                    ></textarea>
                    <label
                      htmlFor="message"
                      className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-green-700 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-orange-100 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-green-700"
                    >
                      Message
                    </label>
                  </div>
                </div>
                <div className="w-full p-2">
                  <button className="mx-auto flex rounded border-0 bg-green-700 py-2 px-8 text-lg text-white hover:bg-green-600 focus:outline-none">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    );
  };
  
  export default Contact;
  