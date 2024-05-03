"use client";
import {
  useForm,
  SubmitHandler,
  UseFormGetFieldState,
  FieldValues,
  useFormState,
  UseFormStateReturn,
} from "react-hook-form";
import { z } from "zod";
import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import ActionButton from "./ActionButton";
import * as Select from "@radix-ui/react-select";
import { CircleIcon } from "@radix-ui/react-icons";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import MailIcon from "@/public/icons/mail.svg";
import MailArrowIcon from "@/public/icons/mail-arrow.svg";
import Image from "next/image";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { useClickAway, useWindowSize } from "@uidotdev/usehooks";

const validCharacters = /[\da-zA-Z,<.>/?`~!@#$%\^&*()_+\-=\[\]\\{}|'";:]/g;
const numericCharacters = /[\d]/g;
const lowerCaseCharacters = /[a-z]/g;
const upperCaseCharacters = /[A-Z]/g;
const specialCharacters = /[,<.>/?`~!@#$%\^&*()_+\-=\[\]\\{}|'";:]/g;
const passwordMinLen: number = 8;
const passwordMaxLen: number = 18;
const separator = "&";

const notContain = (val: string, pattern: RegExp) => val.search(pattern) == -1;
const contain = (val: string, pattern: RegExp) => val.search(pattern) != -1;

const FormTitlePrimitive = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <p
    className={cn(
      "text-text-primary font-cnB text-3xl w-fit self-center",
      className
    )}
  >
    {children}
  </p>
);

const FormTitle = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div"> & {
    scope: React.RefObject<HTMLDivElement>;
  }
>(({ scope, className }, ref) => {
  return (
    <div
      id="AuthFormTitle"
      ref={ref}
      className={cn(
        "justify-center flex flex-row w-[300px] mx-auto h-[40px] relative",
        className
      )}
    >
      <FormTitlePrimitive>登录</FormTitlePrimitive>
      <FormTitlePrimitive>注册</FormTitlePrimitive>
      <div ref={scope} className="block"></div>
    </div>
  );
});

const FormInput = React.forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithoutRef<"input">
>((props, ref) => (
  <input
    ref={ref}
    className={cn(
      "AuthFormInput",
      "w-[334px] h-[70px] pl-[36px] py-[30px] border-solid border-[1px] border-white/10  rounded-2xl bg-transparent "
    )}
    {...props}
  />
));

interface SignupData {
  email: string;
  password: string;
  gender: string;
  region: string;
}

const FieldMessagePrimitive = ({
  className,
  text,
}: {
  className?: string;
  text: string;
}) => {
  return (
    <div
      className={cn(
        "flex justify-start gap-[10px] items-center",
        "AuthFormMessage",
        className
      )}
    >
      <CircleIcon className="w-[16] h-[16]" />
      <span className="font-cnB text-sm">{text}</span>
    </div>
  );
};

function FieldMessage<T extends FieldValues>(
  props: ReturnType<UseFormGetFieldState<T>> & {
    displayText: string;
  }
) {
  const { isTouched, invalid, error, displayText } = props;

  const colorClassname = isTouched ? (invalid ? "Invalid" : "Valid") : "";
  const text = isTouched ? error?.message || displayText : displayText;
  const display = isTouched ? "static" : "hidden";
  return (
    <FieldMessagePrimitive
      className={cn(colorClassname, display)}
      text={text}
    />
  );
}

const PasswordFieldText: { [index: number]: string } = {
  1: `密码长度需在${passwordMinLen}到${passwordMaxLen}之间`,
  2: "密码需要包含至少一位小写字母",
  3: "密码需要包含至少一位大写字母",
  4: "密码需要包含至少一位特殊字符",
  5: "密码需要包含至少一位数字",
  6: "密码不得含有非法字符",
};
function PasswordFieldMessage<T extends FieldValues>(
  props: ReturnType<UseFormGetFieldState<T>>
) {
  const { isTouched, invalid, error, isValidating, isDirty } = props;

  const display = isDirty ? "static" : "hidden";

  if (props.error?.type == "required") {
    return (
      <FieldMessagePrimitive
        className={cn("Invalid", "static")}
        text={props.error.message!}
      />
    );
  } else {
    const invalidItems = props.error?.message?.split(separator);
    return (
      <div className={cn("self-start ", display)}>
        <p className="font-cnB text-text-secondary text-sm mb-[6px]">
          创建密码需要符合
        </p>
        {Object.entries(PasswordFieldText).map((pairs, index) => {
          return (
            <FieldMessagePrimitive
              key={index}
              text={pairs[1]}
              className={cn(
                invalidItems?.includes(pairs[0]) ? "Invalid" : "Valid",
                "static"
              )}
            />
          );
        })}
      </div>
    );
  }
}

const SelectInput = ({
  trigger,
  items,
}: {
  trigger: string;
  items: { value: string; text: string }[];
}) => (
  <Select.Root>
    <Select.Trigger className="text-text-secondary font-cnB flex flex-row justify-between  w-[334px] py-[20px] pl-[35px] pr-[20px]  border-solid border-[1px] border-white/10  rounded-2xl bg-transparent">
      <Select.Value placeholder={trigger} />
      <Select.Icon asChild>
        <ChevronDownIcon className="w-[24px] h-[24px] opacity-50" />
      </Select.Icon>
    </Select.Trigger>
    <Select.Portal>
      <Select.Content position="popper" className="SelectContent">
        <Select.Viewport className="SelectViewport">
          {items.map((r) => (
            <Select.Item
              value={r.value}
              className={cn(
                "SelectItem",
                " relative text-text-secondary font-cnB text-base"
              )}
            >
              <Select.ItemText>{r.text}</Select.ItemText>
            </Select.Item>
          ))}
        </Select.Viewport>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
);
const SignupForm = ({
  className,
  setLogin,
}: {
  className?: string;
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [modal, setModal] = useState(false);
  const { register, handleSubmit, formState, getFieldState, control } =
    useForm<SignupData>({
      mode: "onTouched",
      defaultValues: {
        email: "",
        password: "",
      },
    });
  const onSubmit: SubmitHandler<SignupData> = (data) => {
    console.log(data);
    setModal(true);
  };
  return (
    <div className={cn("flex flex-col  justify-between", className)}>
      <Modal open={modal} setOpen={setModal}></Modal>
      <form
        id="signup-form"
        className="AuthForm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="space-y-[16px] flex flex-col items-center">
          <FormTitlePrimitive>注册</FormTitlePrimitive>
          <div className="space-y-[10px]">
            <FormInput
              type="text"
              placeholder="请输入邮箱"
              {...register("email", {
                required: "请输入邮箱",
                validate: (value) => {
                  const schema = z.string().email();
                  const result = schema.safeParse(value);
                  return result.success || "请输入有效的邮箱地址";
                },
              })}
            />
            <FieldMessage
              {...getFieldState("email", formState)}
              displayText="请输入有效的邮箱"
            />
          </div>

          <div className="space-y-[10px]">
            <FormInput
              type="password"
              placeholder="密码"
              {...register("password", {
                required: "请输入密码",
                validate: (value) => {
                  return true;
                  const passwordSchema = z.string().superRefine((val, ctx) => {
                    if (
                      val.length < passwordMinLen ||
                      val.length > passwordMaxLen
                    ) {
                      ctx.addIssue({
                        code: z.ZodIssueCode.custom,
                        message: "1",
                      });
                    }
                    if (notContain(val, lowerCaseCharacters)) {
                      ctx.addIssue({
                        code: z.ZodIssueCode.custom,
                        message: "2",
                      });
                    }
                    if (notContain(val, upperCaseCharacters)) {
                      ctx.addIssue({
                        code: z.ZodIssueCode.custom,
                        message: "3",
                      });
                    }
                    if (notContain(val, specialCharacters)) {
                      ctx.addIssue({
                        code: z.ZodIssueCode.custom,
                        message: "4",
                      });
                    }
                    if (notContain(val, numericCharacters)) {
                      ctx.addIssue({
                        code: z.ZodIssueCode.custom,
                        message: "5",
                      });
                    }
                    if (val.replaceAll(validCharacters, "").length > 0) {
                      ctx.addIssue({
                        code: z.ZodIssueCode.custom,
                        message: "6",
                      });
                    }
                  });
                  const result = passwordSchema.safeParse(value);
                  const errMsg = result.error?.issues.reduce(
                    (accumulator, current, currentIndex) => {
                      if (currentIndex == 0) {
                        return current.message;
                      } else {
                        return `${accumulator}${separator}${current.message}`;
                      }
                    },
                    ""
                  );
                  return result.success || errMsg;
                },
              })}
            />
            <PasswordFieldMessage {...getFieldState("password")} />
          </div>
        </div>

        <ActionButton form="signup-form" type="submit" className="mt-[35px]">
          注册
        </ActionButton>
      </form>
      <div className="h-[60px]"></div>
      <SinupSpan setLogin={setLogin} />
    </div>
  );
};

interface LoginData {
  email: string;
  password: string;
}

const LoginForm = ({
  className,
  setLogin,
}: {
  className?: string;
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { register, handleSubmit } = useForm<LoginData>({
    mode: "onTouched",
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <div className={cn("flex flex-col  justify-between", className)}>
      <form className="AuthForm">
        <div className="space-y-[16px] flex flex-col items-center">
          <FormTitlePrimitive>登录</FormTitlePrimitive>
          <FormInput
            type="email"
            placeholder="请输入邮箱"
            {...register("email", {
              required: "请输入邮箱",
              validate: (value) => {
                const schema = z.string().email();
                const result = schema.safeParse(value);
                return result.success || "请输入有效的邮箱地址";
              },
            })}
          />
          <FormInput
            type="password"
            placeholder="密码"
            {...register("password", {
              required: "请输入密码",
              validate: (value) => {
                const schema = z.string().email();
                const result = schema.safeParse(value);
                return result.success || "请输入有效的邮箱地址";
              },
            })}
          />
        </div>
        <Link
          className="pl-[20px] font-cnB text-text-secondary my-[25px] hover:underline underline-offset-4"
          href="#"
        >
          忘记密码
        </Link>
        <ActionButton>登录</ActionButton>
      </form>
      <div className="h-[60px]"></div>
      <LoginSpan setLogin={setLogin} />
    </div>
  );
};

const LoginSpan = ({
  setLogin,
}: {
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
}) => (
  <p className="text-text-primary font-cnB text-center">
    尚未拥有账户？
    <button
      className="text-text-link bg-none border-none"
      onClick={() => setLogin(false)}
    >
      立刻注册！
    </button>
  </p>
);

const SinupSpan = ({
  setLogin,
}: {
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
}) => (
  <p className="text-text-primary font-cnB text-center">
    已经拥有账户？
    <button
      className="text-text-link bg-none border-none"
      onClick={() => setLogin(true)}
    >
      登录！
    </button>
  </p>
);

const MailModal = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div"> & {}
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "w-full h-[430px] bg-background-primary rounded-t-2xl flex flex-col items-center justify-between"
      )}
      {...props}
    >
      <div className="h-[64px]"></div>
      <div className="relative">
        <Image src={MailIcon} alt="mail icon" />
        <Image
          src={MailArrowIcon}
          alt="mail arrow icon"
          id="MailArrow"
          className="mx-auto"
        />
      </div>
      <p className="font-cnB text-text-primary">验证链接已经发送到邮箱</p>
      <ActionButton className="w-[325px]">继续</ActionButton>
      <div className="h-[64px]"></div>
    </div>
  );
});

const Modal: React.FunctionComponent<
  Dialog.DialogProps & {
    setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  }
> = ({ setOpen, ...props }) => {
  const closeRef =
    setOpen &&
    useClickAway<HTMLDivElement>(() => {
      setOpen(false);
    });
  return (
    <Dialog.Root {...props}>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay focus:outline-none" />
        <Dialog.Content ref={closeRef} className="fixed bottom-0 w-full">
          <MailModal />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

const AuthForm = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className }, ref) => {
  const [login, setLogin] = useState(true);
  return (
    <div ref={ref} className={cn("", className)}>
      {login ? (
        <LoginForm setLogin={setLogin} />
      ) : (
        <SignupForm setLogin={setLogin} />
      )}
    </div>
  );
});
export default AuthForm;
