"use client";
import { HomePageCircle } from "@/components/HomePageCircle";
import ActionButton from "@/components/ActionButton";
import AuthFormContainer from "@/components/AuthForm";
import { useRouter } from "next/navigation";
import LinearGradient from "@/components/magicui/linear-gradient";
import { SeparateAway } from "@/components/magicui/separate-away";
export default function Home() {
  const router = useRouter();
  return (
    <div
      id="HomepageContainer"
      className="w-full h-full overflow-x-hidden  flex flex-col desktop:flex-row  desktop:gap-[250px] justify-center items-center"
    >
      <AuthFormContainer className="hidden desktop:block desktop:mt-[60px]" />
      <div className="flex flex-col">
        <HomePageCircle className="self-center" />
        <div className="h-[50px]"></div>

        <SeparateAway
          upper_text="发现你感兴趣的"
          lower_text="在任何地方"
          duration={3}
          className="font-cnB  text-text-primary text-2xl relative left-[75px]"
        />
        <ActionButton
          className="w-[250px] self-center mt-[32px] desktop:hidden"
          onClick={() => router.push("/auth")}
        >
          进入
        </ActionButton>
      </div>
      <LinearGradient />
    </div>
  );
}
