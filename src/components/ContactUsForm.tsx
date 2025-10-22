export default function ContactUsForm() {
  return (
    <form className="bg-white p-6 rounded-2xl shadow-md w-fit mx-auto flex flex-col gap-4">
      <h2 className="text-h3 font-semibold text-primary text-center mb-2">Om Devi ma Hardware pasal</h2>

      {/* Email field */}
      <input
        type="email"
        placeholder="Your Email"
        className="border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        required
      />

      {/* Message field */}
      <textarea
        placeholder="Your Message"
        rows={4}
        className="border border-gray-300 rounded-2xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
        required
      />

      {/* Buttons */}
      <div className="flex gap-4 justify-end mt-2">
        <button
          type="submit"
          className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition"
        >
          Send Message
        </button>

        <button
          type="reset"
          className="border border-red-300 text-red-500 px-6 py-2 rounded-full hover:bg-red-500 hover:text-white transition"
        >
          Clear
        </button>
      </div>
    </form>
  )
}
