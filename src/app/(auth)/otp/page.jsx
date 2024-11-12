"use client";
/* eslint-disable @next/next/no-img-element */
import OtpForm from "@/components/OtpForm";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { MdOutlinePermDeviceInformation } from "react-icons/md";

const Page = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  // Timer state
  const [loading, setLoading] = useState(false);
  const [counter, setCounter] = useState(300); // 5 minutes in seconds
  const [isTimerActive, setIsTimerActive] = useState(true);

  // Countdown logic
  useEffect(() => {
    let timer;
    if (counter > 0 && isTimerActive) {
      timer = setTimeout(() => setCounter(counter - 1), 1000);
    } else {
      setIsTimerActive(false); // Stop the timer when it reaches 0
    }
    return () => clearTimeout(timer);
  }, [counter, isTimerActive]);

  const handleResendOtp = async () => {
    setLoading(true);
    const toastId = toast.loading("Resending OTP...");

    try {
      const res = await axios.post("/users/send-otp/", {
        email,
      });

      if (res) {
        toast.success("OTP resent successfully", { id: toastId });
        setCounter(300); // Reset timer to 5 minutes
        setIsTimerActive(true); // Restart the timer
      }
    } catch (error) {
      toast.error(error.response?.data?.error || "Failed to resend OTP", {
        id: toastId,
      });
    } finally {
      setLoading(false);
    }
  };

  // Format counter as mm:ss
  const formatTime = () => {
    const minutes = Math.floor(counter / 60);
    const seconds = counter % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <section className="flex justify-center">
      <div className="flex flex-col items-center md:items-start justify-center px-6 md:px-16">
        <div className="flex items-center justify-center w-full">
          <Link href="/">
            <img src="/images/Logo.png" alt="logo" className="mb-6" />
          </Link>
        </div>
        <div className="w-full">
          <h1 className="text-2xl font-bold mb-2 text-center">
            Verify your email address
          </h1>
          <p className="mb-6 text-center">
            We have sent a verification code to {email}
          </p>

          <OtpForm />

          <p className="text-center mt-4">
            Didn&apos;t receive the verification code? It might take a moment.{" "}
            <span className="block md:inline">
              You can request a new code in{" "}
              <span className="text-green-900">
                {isTimerActive ? `${formatTime()} minutes` : "now"}.
              </span>
            </span>
          </p>

          {!isTimerActive && (
            <button
              onClick={handleResendOtp}
              className="mt-4 text-blue-500 hover:underline"
            >
              Resend OTP
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Page;
