import * as React from "react";

import OtpVerify from "../otp/otpVerify";

export function StartJourney() {
  return (
    <div className=" h-[100vh]">
      <div className="w-full max-w-4xl z-10 bg-[#2d1b0e]/40 backdrop-blur-md border border-[#6e4a2f]/30 rounded-2xl p-6 md:p-12 shadow-2xl shadow-black/40 mx-auto mt-[10%]">
        {/* <div className="text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-serif text-[#d4af37] leading-tight">
            She’s always known your sweet side. Time you showed hers.
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-[#f3e9e0]/80 text-lg">
            This Rakhi, skip the last-minute scramble. Build her a box as unique
            as your bond — with handcrafted truffles and a touch of memory.
          </p>
          <form className="mt-12 max-w-md mx-auto">
            <label htmlFor="mobile" className="text-[#d4af37] font-bold">
              Enter your mobile number to begin.
            </label>
            <p className="text-[#f3e9e0]/70 text-sm mb-4">
              We’ll text you an OTP faster than she finishes a box of truffles.
            </p>
            <div className="flex gap-3">
              <input
                id="mobile"
                type="tel"
                placeholder="10-digit mobile number"
                className="flex-grow bg-[#4a2c1a]/50 border border-[#6e4a2f] rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-[#b98a53] to-[#d4af37] text-[#2d1b0e] font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#d4af37]/20 flex items-center"
              >
                Send OTP
              </button>
            </div>
            <p className="mt-4 text-xs text-[#f3e9e0]/50">
              Your data stays secure just like the secrets she still hasn’t told
              Mom.
            </p>
          </form>
        </div> */}
        <div>
          <h1 className="text-4xl text-center md:text-5xl font-serif text-[#d4af37] leading-tight mb-4">
            Enter Your Otp:
          </h1>
          <OtpVerify setOtp={undefined} />
          <button
            type="submit"
            className="mx-auto mt-6 bg-gradient-to-r from-[#b98a53] to-[#d4af37] text-[#2d1b0e] font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#d4af37]/20 flex items-center">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
