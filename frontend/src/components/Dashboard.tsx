import React from 'react';

function Dashboard() {
  return (
    <div className="min-h-screen bg-[#002147]">
      {/* Navigation */}
      <nav className="bg-[#002147]/80 backdrop-blur-lg border-b border-[#D2B48C]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-[#D2B48C] text-xl font-bold">SkillTrack</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-[#D2B48C] hover:text-[#D2B48C]/80 transition-colors">
                Profile
              </button>
              <button className="text-[#D2B48C] hover:text-[#D2B48C]/80 transition-colors">
                Settings
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Stats Card */}
          <div className="bg-[#002147]/80 backdrop-blur-lg border border-[#D2B48C]/20 rounded-xl p-6">
            <h3 className="text-[#D2B48C] text-lg font-semibold mb-2">Current Streak</h3>
            <p className="text-3xl font-bold text-white">7 days</p>
            <p className="text-[#D2B48C]/80 mt-2">Keep going!</p>
          </div>

          {/* Skills Card */}
          <div className="bg-[#002147]/80 backdrop-blur-lg border border-[#D2B48C]/20 rounded-xl p-6">
            <h3 className="text-[#D2B48C] text-lg font-semibold mb-2">Active Skills</h3>
            <p className="text-3xl font-bold text-white">3</p>
            <p className="text-[#D2B48C]/80 mt-2">In progress</p>
          </div>

          {/* Progress Card */}
          <div className="bg-[#002147]/80 backdrop-blur-lg border border-[#D2B48C]/20 rounded-xl p-6">
            <h3 className="text-[#D2B48C] text-lg font-semibold mb-2">Overall Progress</h3>
            <p className="text-3xl font-bold text-white">75%</p>
            <p className="text-[#D2B48C]/80 mt-2">Great job!</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-[#D2B48C] mb-4">Recent Activity</h2>
          <div className="bg-[#002147]/80 backdrop-blur-lg border border-[#D2B48C]/20 rounded-xl p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white">Completed daily practice</p>
                  <p className="text-[#D2B48C]/80 text-sm">2 hours ago</p>
                </div>
                <span className="text-[#D2B48C]">✓</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white">Updated skill progress</p>
                  <p className="text-[#D2B48C]/80 text-sm">5 hours ago</p>
                </div>
                <span className="text-[#D2B48C]">✓</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white">Started new skill</p>
                  <p className="text-[#D2B48C]/80 text-sm">1 day ago</p>
                </div>
                <span className="text-[#D2B48C]">✓</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
