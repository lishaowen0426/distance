"use client";
import { HomePageCircle } from "@/components/HomePageCircle";
import ActionButton from "@/components/ActionButton";
import AuthFormContainer from "@/components/AuthForm";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  return (
    <div
      id="HomepageContainer"
      className="w-full overflow-x-hidden  mt-[50px] flex flex-col desktop:flex-row desktop:mt-[160px] desktop:gap-[250px] desktop:w-fit desktop:justify-center"
    >
      <AuthFormContainer className="hidden desktop:block desktop:mt-[60px]" />
      <div className="flex flex-col">
        <HomePageCircle className="self-center" />
        <p className="mt-[110px] font-cnB text-lg text-text-primary w-[150px] relative left-[75px]">
          发现你感兴趣的，在任何地方
        </p>
        <ActionButton
          className="w-[250px] self-center mt-[32px] desktop:hidden"
          onClick={() => router.push("/auth")}
        >
          进入
        </ActionButton>
      </div>
    </div>
  );
}
