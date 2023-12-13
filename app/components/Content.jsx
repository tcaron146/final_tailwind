import Button from "./Button";

const Content = () => {
  return (
    <div className="flex justify-around">
      <form className="w-full max-w-sm bg-gradient-to-r from-highlights to-pinkish border-2 border-primary/25 pt-6 pr-6 pb6 rounded-lg">
        <div className="md:flex md:items-center mb-1">
          <div className="md:w-1/3">
            <label
              className="block text-primary font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              Email:
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-input appearance-none border-2 border-primary rounded w-full py-2 px-4 text-btnTxt leading-tight focus:outline-none focus:bg-input focus:border-highlights"
              id="email"
              type="text"
              placeholder="davids@davids.house"
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-2">
          <div className="md:w-1/3">

          </div>
        </div>
        <div className="md:flex md:items-center pb-4">
          <div className="md:w-1/3" />
          <div className="md:w-2/3">
          <button className="px-4 py-2 font-semibold text-sm bg-secondary text-primary border-2 border-hidden rounded-md hover:border-hidden hover:ring-2 hover:ring-btns">Create account</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Content;
