const Form = () => {
    return (
      <div className="flex flex-col items-center pt-4">
        <form className="flex items-center">
          <input
            type="email"
            className="min-h-10 w-64 px-4 text-white text-base border border-[#3A879E] rounded-l-md bg-transparent focus:border-blue-500 focus:outline-none"
            id="Email"
            name="Email"
            placeholder="Enter Your Email"
            autoComplete="off"
          />
          <input
            className="min-h-10 px-4 border-none border-l-0 rounded-r-md bg-[#3A879E] text-white text-base cursor-pointer transition-colors duration-300 hover:bg-[#396b9a]"
            value="Subscribe"
            type="submit"
          />
        </form>
      </div>
    );
  };
  
  export default Form;
  