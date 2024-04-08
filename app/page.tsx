import JokeFetcher from "@/components/joke-fetcher";
import { LoginForm } from "@/components/login-form";
import { SignupForm } from "@/components/signup-form";
import Image from "next/image"; 
import React from "react";

export default function Home() {
  return (
    <main >
      <JokeFetcher></JokeFetcher>
      
    </main>
  );
}
