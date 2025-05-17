const Header = ({ data, theme }) => {
    return (
      <header id="app" className="flex flex-col md:flex-row justify-between items-center py-12">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <p className={`text-lg ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>{data?.title}</p>
          <h1 className="text-4xl font-bold my-4">
            Hi, I'm <span className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}>{data?.name}</span>
          </h1>
          <p className="text-lg mb-6">{data?.about}</p>
          <a href="#contact" className={`px-6 py-2 rounded-md ${theme === 'dark' ? 'bg-purple-600 hover:bg-purple-700' : 'bg-purple-500 hover:bg-purple-600'} text-white font-medium transition-colors`}>
            Contact Me
          </a>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img 
            src={data?.picture} 
            alt="Profile" 
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-gray-300 shadow-xl"
          />
        </div>
      </header>
    );
  };
  
  export default Header;