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
import { EmojiIcon, CategoryIcon, ArrowDownIcon } from "./Icons";
import { TopicContent } from "./TopicCard";

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

type MessageContainerRef = {
  container: RefObject<HTMLDivElement>;
  scroll: RefObject<HTMLDivElement>;
};

const MessageContainer = forwardRef<
  MessageContainerRef,
  ComponentPropsWithoutRef<"div"> & { messages: MessageProp[] }
>(({ messages, ...props }, ref) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        container: containerRef,
        scroll: scrollRef,
      } satisfies MessageContainerRef;
    },
    []
  );

  return (
    <div ref={containerRef} className="w-full overflow-auto px-[1rem]">
      <div ref={scrollRef} className="flex flex-col gap-[3px]">
        {messages.map((m, index) => (
          <Message {...m} key={index} />
        ))}
        <div className="w-full h-[5px]"></div>
      </div>
    </div>
  );
});

const MessageInput = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<"div"> & {
    submit: Dispatch<SetStateAction<MessageProp[]>>;
  }
>(({ submit, ...props }, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div
      ref={ref}
      className="w-full bg-background-secondary h-[70px] gap-[20px] flex flex-row items-center justify-between px-[1rem]"
    >
      <input
        ref={inputRef}
        type="text"
        className="grow h-[70%] bg-background-primary rounded-sm text-text-primary pl-2 "
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

const TopicHeader = forwardRef<
  HTMLButtonElement,
  ComponentPropsWithoutRef<"button"> & TopicContent
>(
  (
    { title, desciption, location, postedAt, online, member, ...props },
    ref
  ) => {
    return (
      <button
        type="button"
        className="max-w-[70%] ml-[20px] mr-auto rounded-lg p-[5px] h-[90%] bg-background-secondary flex flex-row justify-between items-center"
      >
        <div className="font-cnB max-w-[90%] text-nowrap">
          <div className="text-text-primary overflow-hidden text-ellipsis">
            {title}
          </div>
          <div className="text-text-secondary overflow-hidden text-ellipsis flex flex-row text-xs font-cnL gap-[5px]">
            <div>{location}</div>
            <div>{postedAt}</div>
            <div className="">{`${online}/${member}`}</div>
          </div>
        </div>
        <ArrowDownIcon />
      </button>
    );
  }
);

export function Chat() {
  const searchParams = useSearchParams();
  const topicId = searchParams.get("id");
  const [upperRef, { height: upperHeight }] = useMeasure(); // there is setState inside the returned ref callback
  const containerRef = useRef<MessageContainerRef>(null);

  const [messages, setMessages] = useState<MessageProp[]>([]);
  const [topic, setTopic] = useState<TopicContent>({} as TopicContent);

  useLayoutEffect(() => {
    if (upperHeight === null) {
      return;
    } else {
      containerRef.current!.container.current!.style.height = `calc(100vh   - ${upperHeight!}px - 70px)`;
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
          setTopic(topic);
        });
    },
    [
      /* initial fetching */
    ]
  );

  useEffect(() => {
    let container = containerRef.current!.container.current!;
    let scroll = containerRef.current!.scroll.current!;
    container.scrollBy(0, scroll.offsetHeight);
  });

  return (
    <MessageContext.Provider value={{}}>
      <div className="w-full flex flex-col justify-between">
        <div
          className="w-full before:block before:w-full before:h-[20px] px-[1rem]"
          ref={upperRef}
        >
          <HeaderNavi>
            <TopicHeader {...topic} />
          </HeaderNavi>
        </div>
        <MessageContainer ref={containerRef} messages={messages} />
        <MessageInput submit={setMessages} />
      </div>
    </MessageContext.Provider>
  );
}
