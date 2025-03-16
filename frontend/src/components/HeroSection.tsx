import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative flex flex-col items-center min-h-screen bg-[#002147] py-16 lg:py-24 overflow-hidden">
      {/* Dot Pattern Background */}
      <div className="absolute inset-0 w-full h-full opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(#D2B48C 2px, transparent 2px)`,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at center, black, transparent 70%)'
        }}></div>
      </div>

      {/* Animated Blobs */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute w-[500px] h-[500px] -top-20 -left-20 bg-[#D2B48C]/10 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute w-[500px] h-[500px] -bottom-20 -right-20 bg-[#D2B48C]/10 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute w-[500px] h-[500px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#D2B48C]/10 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            Tired of Starting Over?
            <span className="block mt-2 bg-gradient-to-r from-[#D2B48C] to-[#D2B48C]/80 text-transparent bg-clip-text">
              Let's Build Consistency Together
            </span>
          </h1>
          <p className="mt-6 text-xl text-[#D2B48C] max-w-3xl mx-auto leading-relaxed">
            Our skill tracker helps you stay accountable, visualize progress, and keep going—one step at a time.      
          </p>
          
          <div className="mt-12 flex justify-center">
            <Link
              to="/dashboard"
              className="px-12 py-5 bg-gradient-to-r from-[#D2B48C] via-[#D2B48C]/90 to-[#D2B48C] text-[#002147] rounded-lg hover:from-[#D2B48C]/90 hover:via-[#D2B48C] hover:to-[#D2B48C]/90 transition-all duration-300 text-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-[#D2B48C]/30 transform hover:-translate-y-1"
            >
              Start Your Streak Now
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="p-6 rounded-xl bg-[#002147]/80 backdrop-blur-lg border border-[#D2B48C]/20 hover:border-[#D2B48C]/40 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-[#D2B48C]">Track Daily</h3>
              <p className="mt-2 text-[#D2B48C]/80">Log your progress consistently</p>
            </div>
            <div className="p-6 rounded-xl bg-[#002147]/80 backdrop-blur-lg border border-[#D2B48C]/20 hover:border-[#D2B48C]/40 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-[#D2B48C]">Visualize Growth</h3>
              <p className="mt-2 text-[#D2B48C]/80">See your improvement over time</p>
            </div>
            <div className="p-6 rounded-xl bg-[#002147]/80 backdrop-blur-lg border border-[#D2B48C]/20 hover:border-[#D2B48C]/40 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-[#D2B48C]">Achieve Goals</h3>
              <p className="mt-2 text-[#D2B48C]/80">Reach your milestones faster</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;