"use client";
import {
  useForm,
  SubmitHandler,
  UseFormGetFieldState,
  FieldValues,
  useFormState,
  UseFormStateReturn,
} from "react-hook-form";
import { RecordType, z } from "zod";
import React, { ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import ActionButton from "./ActionButton";
import * as Select from "@radix-ui/react-select";
import { CircleIcon } from "@radix-ui/react-icons";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import MailIcon from "@/public/icons/mail.svg";
import MailArrowIcon from "@/public/icons/mail-arrow.svg";
import Image from "next/image";
import { useState, useRef } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { useClickAway, useWindowSize } from "@uidotdev/usehooks";
import { motion, AnimatePresence } from "framer-motion";

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

const FormInput = React.forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithoutRef<"input">
>((props, ref) => (
  <input
    ref={ref}
    className={cn(
      "AuthFormInput",
      "w-[334px] h-[70px] pl-[36px] py-[30px] border-solid border-[1px] border-white/10  rounded-2xl bg-transparent focus:outline-none "
    )}
    {...props}
  />
));

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
          密码需要符合
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

const AuthForm = React.forwardRef<
  HTMLDivElement,
  {
    className?: string;
    container: HTMLDivElement | null;
  }
>(({ className, container }, ref) => {
  const [login, setLogin] = useState(true);
  const [modal, setModal] = useState(false);
  const { register, handleSubmit, formState, getFieldState, control } =
    useForm<AuthData>({
      mode: "onTouched",
      defaultValues: {
        email: "",
        password: "",
      },
    });
  const onSubmit: SubmitHandler<AuthData> = (data) => {
    console.log(data);
    setModal(true);
  };
  return (
    <AnimatePresence>
      <Modal key="auth-modal" open={modal} setOpen={setModal} />
      <motion.form
        id="AuthForm"
        className={className}
        key="auth-form"
        exit={{ x: "calc(-1*var(--auth-form-width))", opacity: 0 }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="space-y-[16px] flex flex-col items-center">
          <FormTitlePrimitive>{login ? "登录" : "注册"}</FormTitlePrimitive>
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

        <ActionButton form="AuthForm" type="submit" className="mt-[35px]">
          {login ? "登录" : "注册"}
        </ActionButton>
        <div className="mt-[60px]">
          <AuthSpan login={login} setLogin={setLogin} />
        </div>
      </motion.form>
    </AnimatePresence>
  );
});

interface AuthData {
  email: string;
  password: string;
}

const AuthSpan = ({
  login,
  setLogin,
}: {
  login: boolean;
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
}) => (
  <p className="text-text-primary font-cnB text-center">
    {login ? "尚未拥有账户？" : "已经拥有账户？"}
    <button
      className="text-text-link bg-none border-none"
      onClick={() => setLogin((cur) => !cur)}
    >
      {login ? "立刻注册！" : "马上登录！"}
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
        "w-[325px] desktop:w-[500px] h-[430px] bg-background-primary rounded-t-2xl flex flex-col items-center justify-between"
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
      <ActionButton className="w-[200px]">继续</ActionButton>
      <div className="h-[64px]"></div>
    </div>
  );
});

const Modal = React.forwardRef<
  React.ElementRef<typeof Dialog.Root>,
  Dialog.DialogProps & {
    setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  }
>(({ setOpen, ...props }, ref) => {
  const closeRef =
    setOpen &&
    useClickAway<HTMLDivElement>(() => {
      setOpen(false);
    });
  return (
    <Dialog.Root {...props}>
      <Dialog.Portal>
        <Dialog.DialogOverlay className="DialogOverlay" />
        <Dialog.Content ref={closeRef} className="DialogContent">
          <MailModal />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
});

const AuthFormContainer: React.FunctionComponent<
  React.ComponentPropsWithRef<"div">
> = ({ className }) => {
  const [container, setContainer] = useState<HTMLDivElement | null>(null);
  return (
    <div ref={setContainer} className={cn("AuthFormContainer", className)}>
      <AuthForm container={container} />
    </div>
  );
};
export default AuthFormContainer;

type FormInput = { email: string; password: string };

export const LoginForm = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<"div">
>((props, ref) => {
  const { register, handleSubmit } = useForm<FormInput>();
  return (
    <form className="auth-form">
      <input
        type="text"
        {...register("email")}
        placeholder="メールアドレス"
      ></input>

      <input
        type="password"
        {...register("password")}
        placeholder="パスワード"
      ></input>
    </form>
  );
});
