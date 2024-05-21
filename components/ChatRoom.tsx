"use client";
import { HeaderNavi, HeaderTitle } from "./Navi";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  useEffect,
  useRef,
  useLayoutEffect,
  forwardRef,
  ComponentPropsWithoutRef,
  useState,
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  RefObject,
  useImperativeHandle,
} from "react";
import { useMeasure } from "@uidotdev/usehooks";
import { ChatResponse } from "@/app/api/chat/route";
import { EmojiIcon, CategoryIcon } from "./Icons";

interface MessageContextProp {}

const MessageContext = createContext<MessageContextProp>(
  {} as MessageContextProp
);

type MessageProp = {
  text: string;
  own: boolean;
};

const Message = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<"div"> & MessageProp
>(({ text, own, ...props }, ref) => {
  return (
    <div
      className={cn(
        "text-text-primary font-cnL ",
        "MessageBubble",
        own && "Own"
      )}
    >
      {text}
    </div>
  );
});

const MessageContainer = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<"div"> & { messages: MessageProp[] }
>(({ messages, ...props }, ref) => {
  const markerRef = useRef(null);

  return (
    <div
      ref={ref}
      className="w-full overflow-auto px-[1rem] flex flex-col gap-[5px]"
    >
      {messages.map((m, index) => (
        <Message {...m} key={index} />
      ))}
      <div className="w-full h-[2px]" ref={markerRef}></div>
    </div>
  );
});

const MessageInput = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<"div"> & {
    submit: Dispatch<SetStateAction<MessageProp[]>>;
    container: RefObject<HTMLDivElement>;
  }
>(({ submit, container, ...props }, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div
      ref={ref}
      className="w-full bg-background-secondary h-[70px] gap-[20px] flex flex-row items-center justify-between px-[1rem]"
    >
      <input
        ref={inputRef}
        type="text"
        className="grow h-[70%] bg-background-primary rounded-sm text-text-primary "
        onKeyDown={(ev) => {
          if (ev.key === "Enter") {
            if (inputRef.current?.value) {
              let text = inputRef.current.value;
              inputRef.current.value = "";
              submit((m) => {
                return m.concat([{ text, own: true }]);
              });
            }
          }
        }}
      ></input>
      <div className="flex flex-row items-center gap-[10px] h-full aspect-square InputEmoji">
        <EmojiIcon />
        <CategoryIcon />
      </div>
    </div>
  );
});
export function Chat() {
  const searchParams = useSearchParams();
  const topicId = searchParams.get("id");
  const [upperRef, { height: upperHeight }] = useMeasure(); // there is setState inside the returned ref callback
  const containerRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<MessageProp[]>([]);

  useLayoutEffect(() => {
    if (upperHeight === null) {
      return;
    } else {
      containerRef.current!.style.height = `calc(100vh   - ${upperHeight!}px - 70px)`;
    }
  }, [upperHeight]);

  useEffect(
    () => {
      fetch(`/api/chat?id=${topicId}`)
        .then((resp) => {
          return resp.json();
        })
        .then((data) => {
          let { topic, record } = data as ChatResponse;
          setMessages(
            record.map((r) => {
              return {
                text: r,
                own: false,
              };
            })
          );
        });
    },
    [
      /* initial fetching */
    ]
  );

  return (
    <MessageContext.Provider value={{}}>
      <div className="w-full flex flex-col justify-between">
        <div
          className="w-full before:block before:w-full before:h-[20px] px-[1rem]"
          ref={upperRef}
        >
          <HeaderNavi>
            <HeaderTitle>聊天</HeaderTitle>
          </HeaderNavi>
        </div>
        <MessageContainer ref={containerRef} messages={messages} />
        <MessageInput submit={setMessages} container={containerRef} />
      </div>
    </MessageContext.Provider>
  );
}
