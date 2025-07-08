import Image from "next/image";

const ProjectCard = ({ title, description, imageUrl, techStack, githubUrl }) => {
  return (
    <div className="bg-white dark:bg-[#2a374a] p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 h-full flex flex-col">
      <div className="mb-4">
        <Image 
          src={imageUrl} 
          alt={`${title} Project`}
          width={500} 
          height={300} 
          className="rounded-md w-full h-auto object-cover aspect-video" // aspect-video untuk rasio tetap
        />
      </div>
      <h3 className="text-2xl font-bold text-[#C6F10E] mb-2">{title}</h3>
      <p className="dark:text-gray-300 text-gray-700 mb-4 flex-grow">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {techStack.map((tech, index) => (
          <span key={index} className="bg-gray-700 text-white text-sm font-medium px-2.5 py-0.5 rounded">
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-auto">
        <a 
          href={githubUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block text-black bg-[#C6F10E] hover:bg-lime-400 transition-colors px-4 py-2 rounded-lg font-semibold"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;