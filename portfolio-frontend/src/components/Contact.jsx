const Contact = ({ data, theme }) => {
    if (!data) return null;
  
    return (
      <section id="contact" className="py-12">
        <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
        <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
          <p className="mb-2"><span className="font-semibold">Location:</span> {data.location}</p>
          <p className="mb-2"><span className="font-semibold">Availability:</span> {data.availability}</p>
          <p className="mb-2"><span className="font-semibold">Email:</span> {data.contact?.email}</p>
          <p className="mb-4"><span className="font-semibold">Phone:</span> {data.contact?.phone}</p>
          
          <div className="flex space-x-4 mt-4">
            {data.socials?.github && (
              <a href={data.socials.github} target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
                <span className="sr-only">GitHub</span>
                <i className={`fab fa-github text-2xl ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}></i>
              </a>
            )}
            {data.socials?.linkedin && (
              <a href={data.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
                <span className="sr-only">LinkedIn</span>
                <i className={`fab fa-linkedin text-2xl ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}></i>
              </a>
            )}
            {data.socials?.twitter && (
              <a href={data.socials.twitter} target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
                <span className="sr-only">Twitter</span>
                <i className={`fab fa-twitter text-2xl ${theme === 'dark' ? 'text-blue-400' : 'text-blue-400'}`}></i>
              </a>
            )}
            {data.socials?.dribbble && (
              <a href={data.socials.dribbble} target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
                <span className="sr-only">Dribbble</span>
                <i className={`fab fa-dribbble text-2xl ${theme === 'dark' ? 'text-pink-400' : 'text-pink-500'}`}></i>
              </a>
            )}
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;