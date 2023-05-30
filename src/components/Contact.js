import { useRef, useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../hoc/SectionWrapper";
import { slideIn, growUp } from "../utils/motion";
import { UkImage } from "./UkImage";
import emailjs from "@emailjs/browser";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (form.name && form.email && form.message) {
      emailjs
        .send(
          process.env.NEXT_PUBLIC_EJS_SERVICE,
          process.env.NEXT_PUBLIC_EJS_TEMPLATE,
          {
            from_name: form.name,
            from_email: form.email,
            message: form.message,
          },
          process.env.NEXT_PUBLIC_EJS_PUBLIC_KEY
        )
        .then(
          () => {
            setLoading(false);

            toast.success(
              "Thank you. I will get back to you as soon as possible."
            );

            setForm({
              name: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            setLoading(false);
            console.error(error);
            toast.error("Ahh, something went wrong. Please try again.");
          }
        );
    } else {
      toast.error("Please fill in the form below.");
      setLoading(false);
    }
  };
  return (
    <>
      <div className=" min-h-[100vh] w-full bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto h-full flex items-start">
          <div className="p-4 hidden lg:flex flex-col w-[50%] h-full ">
            <UkImage />
          </div>
          <div className="px-4 py-2 sm:py-4 flex flex-col  w-[100%] md:w-[80%] lg:w-[50%] mx-auto">
            <motion.div
              variants={slideIn("right", "tween", 0.1, 1)}
              className="flex flex-col bg-white rounded-2xl shadow-xl p-4 sm:p-10 mt-10"
            >
              <div className="flex flex-col h-full w-full">
                <h1 className="text-2xl sm:text-3xl pb-2 font-bold text-gray-900 ">
                  Contact
                </h1>

                <motion.span
                  className="bg-indigo-600 h-2 rounded-r-lg"
                  variants={growUp("160px", "spring", 0.6, 1)}
                ></motion.span>
              </div>{" "}
              <p className="mt-4 text-xs sm:text-base font-normal text-gray-900 ">
                Let&apos;s work together to bring ideas to life
                <span className="text-indigo-700 font-bold">!</span>
              </p>
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="mt-6 flex flex-col gap-8"
              >
                <label className="flex flex-col">
                  <span className="text-gray-900 font-medium mb-2">Name</span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What do people call you?"
                    className="py-4 px-3 sm:px-6 text-sm sm:text-base placeholder:text-gray-400 text-gray-600 rounded-lg outline-none border-[1px] border-gray-300 focus:border-indigo-500 font-normal"
                  />
                </label>
                <label className="flex flex-col">
                  <span className="text-gray-900 font-medium mb-2">Email</span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What's your email address?"
                    className="py-4 px-3 sm:px-6 text-sm sm:text-base placeholder:text-gray-400 text-gray-600 rounded-lg outline-none border-[1px] border-gray-300 focus:border-indigo-500 font-normal"
                  />
                </label>
                <label className="flex flex-col">
                  <span className="text-gray-900 font-medium mb-2">
                    Message
                  </span>
                  <textarea
                    rows={5}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What can I do for you?"
                    className="py-4 px-3 sm:px-6 text-sm sm:text-base placeholder:text-gray-400 text-gray-700 rounded-lg outline-none border-[1px] border-gray-300 focus:border-indigo-500 font-normal"
                  />
                </label>

                <button
                  type="submit"
                  disabled={!form.name || !form.email || !form.message}
                  className="bg-indigo-700 hover:bg-indigo-600  transition-all py-3 px-8 rounded-xl outline-none w-full text-white font-bold shadow-md disabled:opacity-50  disabled:cursor-not-allowed "
                >
                  {loading ? "Sending..." : "Send"}
                </button>
              </form>
            </motion.div>
            <div className="p-4 flex lg:hidden flex-col w-[100%] h-full ">
              <UkImage />
            </div>
          </div>
        </div>
      </div>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 5000,
          style: {
            background: "#ffffff",
            color: "#fff",
            maxWidth: 500,
            textAlign: "center",
            marginTop: "200px",
          },
          success: {
            icon: false,
            style: {
              background: "#4F46E5",
            },
          },
          error: {
            icon: false,
            style: {
              background: "#d32f2f",
            },
          },
        }}
      />
    </>
  );
};

export default SectionWrapper(Contact, "contact");
