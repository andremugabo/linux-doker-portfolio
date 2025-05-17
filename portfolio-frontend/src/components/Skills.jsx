const Skills = ({ data, theme }) => {
    if (!data) return null;
  
    return (
      <section id="skills" className="py-12">
        <h2 className="text-3xl font-bold mb-8">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(data).map(([category, skills]) => (
            <div key={category} className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <h3 className="text-xl font-semibold mb-3">{category}</h3>
              <ul className="space-y-2">
                {skills.map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <span className={`w-2 h-2 rounded-full mr-2 ${theme === 'dark' ? 'bg-blue-400' : 'bg-blue-600'}`}></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Skills;