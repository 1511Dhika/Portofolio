import Image from "next/image";
import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import SplitText from "./components/SplitText/SplitText";
import BlurText from "./components/BlurText/BlurText";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import Squares from "./components/Squares/Squares";
import SplashCursor from "./components/SplashCursor/SplashCursor";
import GradientText from "./components/GradientText/GradientText";
import CircularText from "./components/CircularText/CircularText";
import ScrollVelocity from "./components/ScrollVelocity/ScrollVelocity";
import Navbar from "./components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white dark:bg-[#19222D]">
      <SplashCursor  />
      <Navbar />
      {/* <div className="absolute top-0 right-0 left-0 bottom-0 w-full h-full">
        <Squares 
          speed={0.5} 
          squareSize={40}
          direction='diagonal' // up, down, left, right, diagonal
          borderColor='#F1FFB2'
          hoverFillColor='#C6F10E'
        />
      </div> */}
      <div className="container mx-auto h-screen pt-20">
        <div className="grid grid-cols-12 ">
          <div className="col-span-6">
            <div className="flex items-center h-full">
              <div className="flex flex-col gap-6">
                <AnimatedContent
                  distance={150}
                  direction="horizontal"
                  reverse={false}
                  config={{ tension: 80, friction: 20 }}
                  initialOpacity={0.2}
                  animateOpacity
                  scale={1.1}
                  threshold={0.2}
                >
                  <div 
                  className="flex items-center gap-2">
                    <h1 className="text-2xl text-white font-bold">I'm Ready For Job</h1>
                    <RotatingText 
                        texts={['Web Design', 'Web Depelopment', 'Web Programing' ]}
                        mainClassName="px-2 sm:px-2 md:px-3 bg-[#C6F10E] text-black overflow-hidden py-0.5 sm:py-1  justify-center rounded-lg text-2xl font-bold inline-flex transition-all"
                        staggerFrom={"last"}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-120%" }}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                        rotationInterval={2000}
                    />
                  </div>
                </AnimatedContent>
                <div className="flex flex-col items-start">
                  <SplitText 
                    text="I'm Dhika Ramdhana"
                    className="text-6xl font-semibold text-start"
                    delay={50}
                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    threshold={0.2}
                    rootMargin="-50px"
                  />
                  <SplitText 
                    text="Junior Full Stack Developer"
                    className="text-6xl font-semibold text-start text-[#C6F10E]"
                    delay={75}
                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    threshold={0.2}
                    rootMargin="-50px"
                  />
                </div>
                
                <BlurText 
                  text="I am from Indonesia, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia nisi soluta possimus fugiat suscipit nam, tenetur explicabo quia obcaecati culpa esse consequuntur voluptate dolor labore rem. Laboriosam libero nesciunt architecto."
                  delay={75}
                  animateBy="words"
                  direction="top"
                  className="text-xl mb-8"
                />
              </div>
            </div>
          </div>

          <div className="col-span-6 relative">
            <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />
          </div>

        </div>
      </div>

      <div id="projects" className="container mx-auto py-20 px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">My Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="bg-[#2a374a] p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 h-full flex flex-col">
            <div className="mb-4">
              <Image 
                src="/assets/project/e-learning.png" 
                alt="E-learning Project" 
                width={500} 
                height={300} 
                className="rounded-md w-full h-auto object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-[#C6F10E] mb-2">E-learning</h3>
            <p className="text-white mb-4 flex-grow">
              This is a multi-user project with roles for both admins and users. Admins have the ability to upload learning modules and exam questions, and also track whether users have completed the exams. Users can participate in exams, access study materials, and view the certificates they have obtained.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-gray-700 text-white text-sm font-medium px-2.5 py-0.5 rounded">PHP</span>
              <span className="bg-gray-700 text-white text-sm font-medium px-2.5 py-0.5 rounded">Tailwind CSS</span>
              <span className="bg-gray-700 text-white text-sm font-medium px-2.5 py-0.5 rounded">JS</span>
            </div>
            <div className="mt-auto">
              <a 
                href="https://github.com/1511Dhika/Project-elearning" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block text-black bg-[#C6F10E] px-4 py-2 rounded-lg font-semibold"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="bg-[#2a374a] p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 h-full flex flex-col">
            <div className="mb-4">
              <Image 
                src="/assets/project/perpus-php.png" 
                alt="Library PHP Project" 
                width={500} 
                height={300} 
                className="rounded-md w-full h-auto object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-[#C6F10E] mb-2">Perpustakaan versi PHP</h3>
            <p className="text-white mb-4 flex-grow">
              This project supports multiple user roles: admin and user. The admin is able to upload books, track borrowers, and monitor book returns. Users can borrow books and browse the book catalog.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-gray-700 text-white text-sm font-medium px-2.5 py-0.5 rounded">PHP</span>
              <span className="bg-gray-700 text-white text-sm font-medium px-2.5 py-0.5 rounded">Tailwind CSS</span>
              <span className="bg-gray-700 text-white text-sm font-medium px-2.5 py-0.5 rounded">JS</span>
            </div>
            <div className="mt-auto">
              <a 
                href="https://github.com/1511Dhika/Perpustakaan-versiPHP" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block text-black bg-[#C6F10E] px-4 py-2 rounded-lg font-semibold"
              >
                GitHub
              </a>
            </div>
          </div>

          
          <div className="bg-[#2a374a] p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 h-full flex flex-col">
            <div className="mb-4">
              <Image 
                src="/assets/project/perpus-java.png" 
                alt="Library Java Project" 
                width={500} 
                height={300} 
                className="rounded-md w-full h-auto object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-[#C6F10E] mb-2">Perpustakaan versi Java</h3>
            <p className="text-white mb-4 flex-grow">
              This project supports multiple user roles: admin and user. The admin is able to upload books, track borrowers, and monitor book returns. Users can borrow books and browse the book catalog.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-gray-700 text-white text-sm font-medium px-2.5 py-0.5 rounded">Java</span>
            </div>
            <div className="mt-auto">
              <a 
                href="https://github.com/1511Dhika/Perpustakaan" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block text-black bg-[#C6F10E] px-4 py-2 rounded-lg font-semibold"
              >
                GitHub
              </a>
            </div>
          </div>

        </div>
      </div>

      <section id="skills" className="container mx-auto py-20 px-4 text-center">
        <h2 className="text-4xl font-bold text-center text-white mb-12">SKILLS</h2>

        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-[#2a374a] p-6 shadow-md w-full md:w-[300px]">
            <h3 className="text-xl font-semibold mb-4 text-[#C6F10E]">Programming Languages</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {["JavaScript", "Python", "Java", "C++", "PHP", "HTML", "CSS", "SQL"].map((lang, index) => (
                <span key={index} className="bg-[#0a2940] text-white text-sm px-3 py-1 rounded-full">{lang}</span>
              ))}
            </div>
          </div>

          <div className="bg-[#2a374a] p-6 shadow-md w-full md:w-[300px]">
            <h3 className="text-xl font-semibold mb-4 text-[#C6F10E]">Frameworks & Libraries</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {["Next.js", "Tailwind CSS", "Bootstrap", "CodeIgniter", "Laravel"].map((fw, index) => (
                <span key={index} className="bg-[#0a2940] text-white text-sm px-3 py-1 rounded-full">{fw}</span>
              ))}
            </div>
          </div>
        </div>
      </section>




      <div id="contact" className="container mx-auto py-20 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
        <p className="text-xl text-gray-300 mb-8">
          I'm currently looking for new opportunities. Feel free to send me an email.
        </p>
        <a href="mailto:emailanda@example.com" className="inline-block">
          <GradientText
            colors={["#40ffaa", "#C6F10E", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="px-8 py-4 rounded-lg text-xl font-bold">
            Say Hello
          </GradientText>
        </a>
      </div>
    </div>
  );
}
