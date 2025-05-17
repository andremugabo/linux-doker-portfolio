const Footer = ({ theme }) => {
    return (
      <footer className={`py-6 text-center ${theme === 'dark' ? 'bg-gray-800 text-gray-400' : 'bg-gray-200 text-gray-600'}`}>
        &copy; {new Date().getFullYear()} Mugabo. All rights reserved.
      </footer>
    );
  };
  
  export default Footer;