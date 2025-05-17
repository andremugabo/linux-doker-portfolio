const Experience = ({ data, theme }) => {
    if (!data) return null;
  
    return (
      <section id="experience" className="py-12">
        <h2 className="text-3xl font-bold mb-8">Experience & Projects</h2>
        <div className="space-y-6">
          {data.map((exp, index) => (
            <div key={index} className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <h3 className="text-xl font-semibold">{exp.role} at {exp.company}</h3>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-3`}>{exp.duration}</p>
              <p>{exp.details}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Experience;