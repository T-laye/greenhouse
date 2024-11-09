'use client'
import Button from "@/components/ui/Button";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="mt-56 sm:mt-52 flex justifycenter gap-2 flex-col items-center bged-300">
      <div className="mt-2 w-40">
        <Image
          className="w-full h-full object-contain"
          src="/images/Logo.png"
          alt="logo"
          height={100}
          width={100}
        />
      </div>
      <h3 className="text-xl font-bold ">Thank You!</h3>
      <p>Your order is being processed</p>

      <Button
        css={`px-28 py-2 mb-2
              bg-forest-green-800 whitespace-nowrap `}
        fn={() => router.push("/products")}
      >
        Go back to catalogue
      </Button>
    </div>
  );
};

export default Page;
