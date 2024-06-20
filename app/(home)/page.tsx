"use client";
import { HomePageCircle } from "@/components/HomePageCircle";
import ActionButton from "@/components/ActionButton";
import AuthFormContainer from "@/components/AuthForm";
import { useRouter } from "next/navigation";
import LinearGradient from "@/components/magicui/linear-gradient";
import { SeparateAway } from "@/components/magicui/separate-away";
import HomePageBackground from "@/components/HomePageBackground";
import WavyText from "@/components/magicui/wavy-text";
import GradualSpacing from "@/components/magicui/gradual-spacing";
import { ComponentPropsWithoutRef, ReactNode, forwardRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/dialog";
/*
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
*/

interface UserInfo {
  email: string;
  password: string;
}

const ButtonGroup = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<"div">>(
  (props, ref) => {
    const { register: reg1, handleSubmit: handle1 } = useForm<UserInfo>();
    const { register: reg2, handleSubmit: handle2 } = useForm<UserInfo>();
    const onSubmit: SubmitHandler<UserInfo> = (data) => console.log(data);

    return (
      <div id="homepage-button-group">
        <Dialog>
          <DialogTrigger asChild>
            <button>注册</button>
          </DialogTrigger>
          <DialogContent
            className="dialog-content"
            onOpenAutoFocus={(e) => e.preventDefault()}
          >
            <form
              className="auth-form"
              id="register-form"
              onSubmit={handle1(onSubmit)}
            >
              <input type="text" placeholder="邮箱" {...reg1("email")}></input>
              <input
                type="password"
                placeholder="密码"
                {...reg1("password")}
              ></input>
              <button type="submit" form="register-form">
                注册
              </button>
            </form>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
            <button>登陆</button>
          </DialogTrigger>
          <DialogContent
            className="dialog-content"
            onOpenAutoFocus={(e) => e.preventDefault()}
          >
            <form
              className="auth-form"
              id="login-form"
              onSubmit={handle2(onSubmit)}
            >
              <input type="text" {...reg2("email")} placeholder="邮箱"></input>
              <input
                type="password"
                {...reg2("password")}
                placeholder="密码"
              ></input>
              <button type="submit" id="login-form">
                登陆
              </button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
);

export default function Home() {
  return (
    <>
      <WavyText word="距离" id="home-primary-title" />
      <GradualSpacing
        text="发现你感兴趣的, 在任何地方"
        className="font-bold text-2xl"
        id="home-secondary-title"
      />
      <ButtonGroup />
    </>
  );
}
