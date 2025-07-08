const SkillCategory = ({ title, skills }) => {
  return (
    <div className="bg-white dark:bg-[#2a374a] p-6 shadow-lg rounded-lg w-full sm:w-80">
      <h3 className="text-xl font-semibold mb-4 text-[#C6F10E]">{title}</h3>
      <div className="flex flex-wrap justify-center gap-2">
        {skills.map((skill, index) => (
          <span key={index} className="bg-[#0a2940] text-white text-sm px-3 py-1 rounded-full">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;