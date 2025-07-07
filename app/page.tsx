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
    <div className="min-h-screen overflow-x-hidden bg-[#19222D]">
      <SplashCursor  />
      <Navbar />
      <div className="absolute top-0 right-0 left-0 bottom-0 w-full h-full">
        <Squares 
          speed={0.5} 
          squareSize={40}
          direction='diagonal' // up, down, left, right, diagonal
          borderColor='#F1FFB2'
          hoverFillColor='#C6F10E'
        />
      </div>
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
                {/* <div className="flex items-center">
                  <GradientText
                    colors={["#40ffaa", "#C6F10E", "#40ffaa", "#C6F10E", "#40ffaa"]}
                    animationSpeed={3}
                    showBorder={false}
                    className="px-8 py-6 rounded-lg border">
                    Consultation Now
                  </GradientText>
                </div> */}

                <div className="flex items-center"> 
                  <a href="#contact">
                    <GradientText
                    colors={["#40ffaa", "#C6F10E", "#40ffaa", "#C6F10E", "#40ffaa"]}
                    animationSpeed={3}
                    showBorder={false}
                    className="px-8 py-6 rounded-lg border">
                    Contact me
                    </GradientText>
                  </a>
                </div>

              </div>
            </div>
          </div>
          <div className="col-span-6 relative">
            <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />
          </div>
        </div>
      </div>

      <div id="projects" className="container mx-auto py-20">
        <h2 className="text-4xl font-bold text-center text-white mb-12">My Projects</h2>

        <div className="flex space-x-6 overflow-x-auto pb-4">
          {/* Project Card */}
          <div className="min-w-[320px] md:min-w-[400px] bg-[#2a374a] p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <Image src="/assets/project/e-learning.png" alt="Nama Proyek" width={500} height={300} className="rounded-md mb-4" />
            <h3 className="text-2xl font-bold text-[#C6F10E] mb-2">E-learning</h3>
            <p className="text-white mb-4">Project ini multi user, ada untuk admin dan user, admin bisa untuk upload modul dan upload soal, serta bisa melihat user sudah mengerjakan soal atau belum, dan untuk user bisa mengikuti ujian dan melihat materi, serta bisa melihat sertfikat yang di dapat</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-gray-700 text-white text-sm font-medium px-2.5 py-0.5 rounded">PHP</span>
              <span className="bg-gray-700 text-white text-sm font-medium px-2.5 py-0.5 rounded">Tailwind CSS</span>
              <span className="bg-gray-700 text-white text-sm font-medium px-2.5 py-0.5 rounded">JS</span>
            </div>
            <div className="flex gap-4 mt-4">
              <a href="https://github.com/1511Dhika/Project-elearning" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-black bg-[#C6F10E] px-4 py-2 rounded-lg font-semibold">GitHub
                  </a>
            </div>
          </div>
          <div className="min-w-[320px] md:min-w-[400px] bg-[#2a374a] p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <Image src="/path-to-your-project-image.jpg" alt="Nama Proyek" width={500} height={300} className="rounded-md mb-4" />
            <h3 className="text-2xl font-bold text-[#C6F10E] mb-2">Perpustakaan versi PHP</h3>
            <p className="text-white mb-4">Project ini multi user, ada untuk admin dan user, admin bisa untuk upload buku melihat siapa yang meminjam, melihat yang sudah mengambalikan atau belum dan untuk user bisa meminjam buku, melihat daftar buku</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-gray-700 text-white text-sm font-medium px-2.5 py-0.5 rounded">PHP</span>
              <span className="bg-gray-700 text-white text-sm font-medium px-2.5 py-0.5 rounded">Tailwind CSS</span>
              <span className="bg-gray-700 text-white text-sm font-medium px-2.5 py-0.5 rounded">JS</span>
            </div>
            <div className="flex gap-4 mt-4">
              <a href="https://github.com/1511Dhika/Perpustakaan-versiPHP" className="text-black bg-[#C6F10E] px-4 py-2 rounded-lg font-semibold">GitHub</a>
            </div>
          </div>
          <div className="min-w-[320px] md:min-w-[400px] bg-[#2a374a] p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <Image src="/assets/project/perpus-java.png" alt="Nama Proyek" width={500} height={300} className="rounded-md mb-4" />
            <h3 className="text-2xl font-bold text-[#C6F10E] mb-2">Perpustakaan versi Java</h3>
            <p className="text-white mb-4">Project ini multi user, ada untuk admin dan user, admin bisa untuk upload buku melihat siapa yang meminjam, melihat yang sudah mengambalikan atau belum dan untuk user bisa meminjam buku, melihat daftar buku</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-gray-700 text-white text-sm font-medium px-2.5 py-0.5 rounded">PHP</span>
              {/* <span className="bg-gray-700 text-white text-sm font-medium px-2.5 py-0.5 rounded">Tailwind CSS</span>
              <span className="bg-gray-700 text-white text-sm font-medium px-2.5 py-0.5 rounded">JS</span> */}
            </div>
            <div className="flex gap-4 mt-4">
              <a href="https://github.com/1511Dhika/Perpustakaan" className="text-black bg-[#C6F10E] px-4 py-2 rounded-lg font-semibold">GitHub</a>
            </div>
          </div>
        </div>
      </div>

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
