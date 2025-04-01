import { SignUp, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import Image from "next/image";

export default function SignupPage() {
  return (
    <>
      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
        <div className="h-full lg:flex flex-col items-center justify-center px-4">
          <div className=" text-center space-y-4 pt-16">
            <h2 className="font-bold text-3xl text-[#2e2A47]">Welcome!</h2>
            <p className=" text-base text-[#7e8ca0]">
              Create a free account to get started!
            </p>
            <div className=" flex items-center justify-center mt-8">
              <ClerkLoaded>
                <SignUp path="/sign-up" />
              </ClerkLoaded>
              <ClerkLoading>
                <Loader2 className="animate-spin text-muted-foreground" />
              </ClerkLoading>
            </div>
          </div>
        </div>
        <div className="h-full bg-blue-600 hidden lg:flex items-center justify-center">
          <Image src={"/image/logo.svg"} height={100} width={100} alt="logo" />
        </div>
      </div>
    </>
  );
}
