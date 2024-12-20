function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex flex-col items-center justify-center p-4">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-10 w-32 h-32 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-32 h-32 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center">
        {/* Logo placeholder */}
        <div className="w-40 h-40 md:w-52 md:h-52 mb-8 mx-auto border-4 border-gray-300 rounded-full flex items-center justify-center bg-white/50 backdrop-blur-sm overflow-hidden">
          <span className="text-gray-400">
            <img src="sterling_experiences.jpg" alt="company logo" />
          </span>
        </div>

        {/* Main content */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 animate-fade-in">
          Sterling Experiences
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in animation-delay-500">
          Crafting Unforgettable Corporate Events
        </p>

        {/* Event elements */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in animation-delay-1000">
          <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg">
            🎭 Corporate Events
          </div>
          <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg">
            🎪 Team Building
          </div>
          <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg">
            🎉 Product Launches
          </div>
        </div>

        {/* Coming soon text */}
        <div className="animate-fade-in animation-delay-1500">
          <p className="text-lg md:text-xl text-gray-700 mb-2">
            Something exciting is coming soon
          </p>
          <div className="flex items-center justify-center space-x-2">
            <span className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce"></span>
            <span className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce animation-delay-200"></span>
            <span className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce animation-delay-400"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
