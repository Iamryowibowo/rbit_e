import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [messageStatus, setMessageStatus] = useState(null); // "success" | "error"

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setMessageStatus(null);

    emailjs
      .sendForm(
        emailjs.sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          formRef.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSending(false);
          setMessageStatus("success");
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
          setIsSending(false);
          setMessageStatus("error");
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-20 px-5 md:px-10"
    >
      <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
      <p className="text-gray-400 mb-10">
        💬 Have questions or ideas? Let’s talk! 🚀
      </p>

      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="w-full max-w-lg flex flex-col gap-5"
      >
        <div>
          <label htmlFor="name" className="block mb-1 font-medium">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            placeholder="Enter your name"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 font-medium">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="you@example.com"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-1 font-medium">
            Your Message
          </label>
          <textarea
            name="message"
            id="message"
            rows="5"
            required
            placeholder="How can I help you?"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          disabled={isSending}
          className={`px-6 py-3 rounded-full font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300 ease-in-out ${
            isSending
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gray-600 hover:bg-gray-500 shadow-md hover:shadow-xl"
          }`}
        >
          {isSending && (
            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          )}
          {isSending ? "Sending..." : "Send Message"}
        </button>

        {messageStatus === "success" && (
          <p className="text-green-600 font-medium mt-2">
            ✅ Pesan berhasil dikirim!
          </p>
        )}
        {messageStatus === "error" && (
          <p className="text-red-600 font-medium mt-2">
            ❌ Gagal mengirim pesan. Coba lagi nanti.
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
