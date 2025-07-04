'use client';
import React, { useState } from "react";
import OtpVerify from "../otp/otpVerify";
import { useNavigate } from "react-router-dom";


export default function StartJourney() {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [otpError, setOtpError] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [verified, setVerified] = useState(false);
  const navigate = useNavigate();


  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!mobile.trim()) {
      setErrorMsg("Phone number cannot be empty.");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(mobile)) {
      setErrorMsg("Please enter a valid 10-digit Indian mobile number.");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(
        "https://reg-backend-staging.fabelle-hamper.vtour.tech/user/send-otp",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ phoneNo: mobile }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        setOtpSent(true);
      } else {
        setErrorMsg(data.message || "Failed to send OTP.");
      }
    } catch (error) {
      setErrorMsg("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

const handleVerifyOtp = async () => {
  setOtpError("");

  if (!otp || otp.length !== 4) {
    setOtpError("Please enter a valid 4-digit OTP.");
    return;
  }

  try {
    setLoading(true);
    const response = await fetch(
      "https://reg-backend-staging.fabelle-hamper.vtour.tech/user/verify-otp",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phoneNo: mobile,
          otp: otp,
        }),
      }
    );

    const data = await response.json();
    if (response.ok) {
      localStorage.setItem("authToken", data.data); // Store token
      setVerified(true);
      navigate("/sibling-equation-test"); // Navigate after success
    } else {
      setOtpError(data.message || "Invalid OTP.");
    }
  } catch (error) {
    setOtpError("Something went wrong during verification.");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="h-[100vh]">
      <div className="w-full max-w-4xl z-10 bg-[#2d1b0e]/40 backdrop-blur-md border border-[#6e4a2f]/30 rounded-2xl p-6 md:p-12 shadow-2xl shadow-black/40 mx-auto mt-[10%]">
        {!otpSent ? (
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-serif text-[#d4af37] leading-tight">
              She’s always known your sweet side. Time you showed hers.
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-[#f3e9e0]/80 text-lg">
              This Rakhi, skip the last-minute scramble. Build her a box as
              unique as your bond — with handcrafted truffles and a touch of
              memory.
            </p>
            <form className="mt-12 max-w-md mx-auto" onSubmit={handleSendOtp}>
              <label htmlFor="mobile" className="text-[#d4af37] font-bold">
                Enter your mobile number to begin.
              </label>
              <p className="text-[#f3e9e0]/70 text-sm mb-4">
                We’ll text you an OTP faster than she finishes a box of
                truffles.
              </p>
              <div>
                <div className="flex gap-3">
                  <input
                    id="mobile"
                    type="tel"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="10-digit mobile number"
                    className="flex-grow bg-[#4a2c1a]/50 border border-[#6e4a2f] rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-[#b98a53] to-[#d4af37] text-[#2d1b0e] font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#d4af37]/20 flex items-center"
                  >
                    {loading ? "Sending..." : "Send OTP"}
                  </button>
                </div>
                {errorMsg && (
                  <p className="text-red-400 mb-2 text-sm text-left">
                    {errorMsg}
                  </p>
                )}
              </div>
              <p className="mt-4 text-xs text-[#f3e9e0]/50">
                Your data stays secure just like the secrets she still hasn’t
                told Mom.
              </p>
            </form>
          </div>
        ) : (
          <div className="animate-fade-in text-center">
            <h1 className="text-4xl md:text-5xl font-serif text-[#d4af37] leading-tight mb-4">
              Enter your OTP
            </h1>
            <p className="text-white text-lg mb-6">
              Please enter the 4-digit OTP sent to your mobile number:
            </p>

            <OtpVerify setOtp={setOtp} />
            {otpError && (
              <p className="text-red-400 mt-2 text-sm text-center">
                {otpError}
              </p>
            )}

            <button
              onClick={handleVerifyOtp}
              className="mx-auto mt-6 bg-gradient-to-r from-[#b98a53] to-[#d4af37] text-[#2d1b0e] font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#d4af37]/20 flex items-center"
            >
              {loading ? "Verifying..." : "Submit"}
            </button>

            {verified && (
              <p className="mt-6 text-green-400 font-medium text-lg">
                OTP verified successfully!
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
