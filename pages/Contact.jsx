export const Contact = () => {

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const FormInputData = Object.fromEntries(formData.entries());
    console.log(FormInputData);

    e.target.reset();
  };

  return (
    <div className="container mx-auto my-32 px-4">
      <div className="max-w-md mx-auto px-6 sm:px-10 py-8 rounded-2xl shadow-2xl shadow-stone-800/70 bg-zinc-900 text-white">

        <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">Contact Us </h2>

        <form onSubmit={handleFormSubmit} className="space-y-6">
          <div>
            <input
              className="w-full px-4 py-2 border border-neutral-700 rounded-lg bg-black focus:outline-none focus:ring-2 focus:ring-zinc-600 transition duration-300"
              placeholder="Enter your name"
              name="name"
              id="name"
              type="text"
              required
              autoComplete="off"
            />
          </div>

          <div>
            <input
              className="w-full px-4 py-2 border border-neutral-700 rounded-lg bg-black focus:outline-none focus:ring-2 focus:ring-zinc-600 transition duration-300"
              placeholder="Enter your email"
              name="email"
              id="email"
              type="email"
              required
              autoComplete="off"
            />
          </div>

          <div>
            <textarea
              className="w-full px-4 py-2 border border-neutral-700 rounded-lg bg-black focus:outline-none focus:ring-2 focus:ring-zinc-600 transition duration-300"
              rows="4"
              placeholder="Enter your message"
              name="message"
              id="message"
              required
              autoComplete="off"
            ></textarea>
          </div>

          <button className="w-full bg-zinc-800 border border-neutral-700 hover:bg-zinc-700 text-white py-2 px-4 rounded-2xl transition duration-300"
            type="submit"> Send</button>
        </form>
      </div>
    </div>
  );
};
