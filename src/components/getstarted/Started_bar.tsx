"use client";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import React from "react";
import { AuroraBackgroundDemo } from "./AuroraBackgroundDemo";

function Started_bar() {
  const router = useRouter(); // Create an instance of router

  const navigateToClientPage = () => {
    router.push("/client"); // Navigate to the client page
  };

  return (
    <div className="w-full h-[400px] md:h-[468px] bg-red-400">
      <AuroraBackgroundDemo navigateToClientPage={navigateToClientPage} />
    </div>
  );
}

export default Started_bar;
