import React from "react";

export function SiblingEquationTest() {
  return (
    <div className="w-full max-w-4xl z-10 bg-[#2d1b0e]/40 backdrop-blur-md border border-[#6e4a2f]/30 rounded-2xl p-6 md:p-12 shadow-2xl shadow-black/40 mx-auto mt-[10%]">
      <div className="animate-fade-in">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-[#d4af37]">
            The Sibling Equation Test
          </h1>
          <p className="text-[#f3e9e0]/80 mt-4 text-lg">
            Answer 8 simple questions — 6 multiple-choice and 2 open-hearted.
            There are no right answers. Just real ones. Because what you say
            decides what she unwraps.
          </p>
        </div>
        <div>
          <div>
            <h2 className="text-2xl text-white mb-4">
              1. You caught her binge-watching... what?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button className="p-5 bg-[#4a2c1a]/50 border-2 rounded-lg text-left transition-all duration-300 text-[#f3e9e0] text-base border-[#6e4a2f] hover:border-[#d4af37]/70 hover:bg-[#4a2c1a]">
                A classic romantic drama she’s seen ten times
              </button>

              <button className="p-5 bg-[#4a2c1a]/50 border-2 rounded-lg text-left transition-all duration-300 text-[#f3e9e0] text-base border-[#6e4a2f] hover:border-[#d4af37]/70 hover:bg-[#4a2c1a]">
                Crime documentaries — while calmly texting relatives
              </button>

              <button className="p-5 bg-[#4a2c1a]/50 border-2 rounded-lg text-left transition-all duration-300 text-[#f3e9e0] text-base border-[#6e4a2f] hover:border-[#d4af37]/70 hover:bg-[#4a2c1a]">
                Reality shows she pretends to hate but secretly loves
              </button>

              <button className="p-5 bg-[#4a2c1a]/50 border-2 rounded-lg text-left transition-all duration-300 text-[#f3e9e0] text-base border-[#6e4a2f] hover:border-[#d4af37]/70 hover:bg-[#4a2c1a]">
                None of these quite capture her screen time choices
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
