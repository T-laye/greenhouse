"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons
import Button from "./ui/Button";
import axios from "@/config/axios";

// OtpInput component
const OtpInput = () => {
  const router = useRouter();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const inputRefs = useRef([]);

  const searchParams = useSearchParams();
  const queryEmail = searchParams.get("email");

  useEffect(() => {
    setEmail(queryEmail || "");
    inputRefs.current[0]?.focus();
  }, [queryEmail]);

  const handleChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
    if (e.key === "Backspace") {
      setError(false);
    }
  };

  const handleInput = (e, index) => {
    e.target.value = e.target.value.replace(/\D/g, ""); // Allows only digits
    handleChange(index, e.target.value);
  };

  const renderOtpInputs = () => {
    return otp.map((value, index) => (
      <input
        key={index}
        ref={(ref) => {
          if (ref) inputRefs.current[index] = ref;
        }}
        type="text"
        maxLength={1}
        value={value}
        onChange={(e) => handleInput(e, index)}
        onKeyDown={(e) => handleKeyDown(index, e)}
        className={`w-full h-[56px] p-2 text-center outline-none border rounded-md sm:text-lg ${
          value ? "border-primary text-primary" : ""
        }`}
      />
    ));
  };

  async function handleSubmit() {
    setLoading(true);
    try {
      const otpString = otp.join("");

      const res = await axios.post("/users/resetrequest/", {
        email,
        otp: otpString,
        new_password: newPassword,
        password_again: confirmPassword,
      });

      if (res) {
        setLoading(false);
        router.push(`/createAccount?email=${email}`);
        toast.success(
          "OTP verified successfully! Redirecting to account creation.."
        );
      }
    } catch (error) {
      toast.error(error.response.data.error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <div className="flex justify-center gap-2 mb-4">{renderOtpInputs()}</div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="w-full p-2 mb-4 border rounded-md"
      />
      <div className="relative mb-4">
        <input
          type={showNewPassword ? "text" : "password"}
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="New Password"
          className="w-full p-2 border rounded-md"
        />
        <div
          className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
          onClick={() => setShowNewPassword(!showNewPassword)}
        >
          {showNewPassword ? <FaEyeSlash /> : <FaEye />}
        </div>
      </div>
      <div className="relative mb-4">
        <input
          type={showConfirmPassword ? "text" : "password"}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          className="w-full p-2 border rounded-md"
        />
        <div
          className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
        >
          {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
        </div>
      </div>

      <Toaster
        position="top-center"
        gutter={12}
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 5000 },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "whitesmoke",
            color: "green",
          },
        }}
      />

      {error && !otp.includes("") && (
        <div className="text-xs text-center mt-2 text-error">Invalid OTP</div>
      )}

      <Button
        type="submit"
        css="text-white bg-forest-green-500 w-full mt-8"
        loading={loading}
        fn={handleSubmit}
      >
        Submit
      </Button>
    </div>
  );
};

export default OtpInput;
