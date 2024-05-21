"use client";
import {
  ComponentPropsWithoutRef,
  forwardRef,
  ReactNode,
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  PropsWithChildren,
  useRef,
  useLayoutEffect,
} from "react";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { useAnimate } from "framer-motion";
import { Search } from "./AvatarSearch";
import { HeaderNavi, HeaderTitle } from "./Navi";
import { NaviContext } from "./Navi";
import { useMeasure } from "@uidotdev/usehooks";
import { Props } from "next/script";
import { EllipsisVertical } from "lucide-react";

interface ChatContextProps {
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
}

const ChatContext = createContext<ChatContextProps>({} as ChatContextProps);

const ModeButton = ({
  children,
  cb,
  ...props
}: PropsWithChildren<Omit<ComponentPropsWithoutRef<"button">, "onClick">> & {
  cb: () => void;
}) => (
  <button
    className={cn(
      "text-action-button bg-transparent grow font-cnB text-xl h-[40px] z-10"
    )}
    {...props}
    onClick={() => {
      cb();
    }}
  >
    {children}
  </button>
);

const ChatSwitch = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<"div">>(
  ({ className, ...props }, ref) => {
    const { selected, setSelected } = useContext(ChatContext);
    const [scope, animate] = useAnimate();

    return (
      <div
        className={cn("relative w-[80%] h-fit flex flex-row ", className)}
        {...props}
      >
        <ModeButton
          cb={() => {
            setSelected(0);
            animate(scope.current, { left: 0 }, { duration: 0.5 });
          }}
        >
          私聊
        </ModeButton>
        <ModeButton
          cb={() => {
            setSelected(1);
            animate(scope.current, { left: "50%" }, { duration: 0.5 });
          }}
        >
          群聊
        </ModeButton>
        <div
          className="h-full w-[50%] absolute bg-background-chosen rounded-2xl z-0"
          ref={scope}
        ></div>
      </div>
    );
  }
);

const mockAvatar =
  "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80";

interface DirectMessageProps {
  avatar?: string;
  text?: string;
  time?: string;
}

interface GroupMessageProps {
  avatar?: string[];
  text?: string;
  time?: string;
  location: string;
  member: string;
}
const DirectMessageAvatar = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<"div"> & { url?: string }
>(({ url, ...props }, ref) => {
  return (
    <div className="h-[60%] aspect-square">
      <img
        src={url}
        alt="avatar"
        className="aspect-square object-cover rounded-2xl"
      />
    </div>
  );
});
const GroupMessageAvatar = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<"div"> & { urls?: string[] }
>(({ urls, ...props }, ref) => {
  return (
    <div className="h-[80%] aspect-square grid grid-rows-2 grid-cols-2 gap-[5%]">
      {urls?.slice(0, 4).map((u, index) => {
        return (
          <img
            src={u}
            alt="avatar"
            key={index}
            className="aspect-square object-cover rounded-2xl"
          />
        );
      })}
    </div>
  );
});

const MessageTime = ({ time }: { time?: string }) => {
  return (
    <div className="font-cnB text-text-secondary text-sm  grow basis-auto w-max whitespace-nowrap">
      {time}
    </div>
  );
};

const MessageContent = ({
  text,
  location,
  member,
}: {
  text?: string;
  location?: string;
  member?: string;
}) => {
  return (
    <div className="font-cnB text-text-primary text-l px-[1rem]  gap-[10px] overflow-hidden whitespace-nowrap text-ellipsis flex flex-col">
      <div className="overflow-hidden whitespace-nowrap text-ellipsis">
        {text}
      </div>
      <div className="flex flex-row text-text-secondary text-xs gap-[10px]">
        <div>{location}</div>
        <div>{member}</div>
      </div>
    </div>
  );
};
const DirectMessageCard = forwardRef<
  HTMLDivElement,
  PropsWithChildren<ComponentPropsWithoutRef<"div">> & DirectMessageProps
>(({ avatar, text, time, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "w-full flex flex-row justify-between items-center h-[80px]",
        className
      )}
    >
      <DirectMessageAvatar url={avatar} />
      <MessageContent text={text} />
      <MessageTime time={time} />
      <button
        type="button"
        className="w-[48px] h-[48px] flex justify-center items-center"
      >
        <EllipsisVertical stroke="white" />
      </button>
    </div>
  );
});

const DirectMsg = [
  <DirectMessageCard
    avatar={mockAvatar}
    key="d1"
    text="吃饭了吗？吃饭了吗吃饭了吗吃饭了吗吃饭了吗吃饭了吗"
    time="12月31日"
  />,
  <DirectMessageCard
    avatar={mockAvatar}
    key="d2"
    text="吃饭了吗？吃饭了吗吃饭了吗吃饭了吗吃饭了吗吃饭了吗"
    time="17点46分"
  />,
];

const GroupMessageCard = forwardRef<
  HTMLDivElement,
  PropsWithChildren<ComponentPropsWithoutRef<"div">> & GroupMessageProps
>(({ avatar, text, time, location, member, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "w-full flex flex-row justify-between items-center h-[80px]",
        className
      )}
    >
      <GroupMessageAvatar urls={avatar} />
      <MessageContent text={text} location={location} member={member} />
      <MessageTime time={time} />
      <button
        type="button"
        className="w-[48px] h-[48px] flex justify-center items-center"
      >
        <EllipsisVertical stroke="white" />
      </button>
    </div>
  );
});
const GroupMsg = [
  <GroupMessageCard
    avatar={[mockAvatar]}
    key="g1"
    text="吃饭了吗？吃饭了吗吃饭了吗吃饭了吗吃饭了吗吃饭了吗"
    time="12月31日"
    location="新宿区"
    member="144/653"
  />,
  <GroupMessageCard
    avatar={[mockAvatar, mockAvatar]}
    key="g2"
    text="吃饭了吗？吃饭了吗吃饭了吗吃饭了吗吃饭了吗吃饭了吗"
    time="12月31日"
    location="新宿区"
    member="144/653"
  />,
  <GroupMessageCard
    avatar={[mockAvatar, mockAvatar, mockAvatar]}
    key="g3"
    text="吃饭了吗？吃饭了吗吃饭了吗吃饭了吗吃饭了吗吃饭了吗"
    time="12月31日"
    location="新宿区"
    member="144/653"
  />,
  <GroupMessageCard
    avatar={[mockAvatar, mockAvatar, mockAvatar, mockAvatar]}
    key="g4"
    text="吃饭了吗？吃饭了吗吃饭了吗吃饭了吗吃饭了吗吃饭了吗"
    time="12月31日"
    location="新宿区"
    member="144/653"
  />,
  <GroupMessageCard
    avatar={[mockAvatar, mockAvatar, mockAvatar, mockAvatar, mockAvatar]}
    key="g5"
    text="吃饭了吗？吃饭了吗吃饭了吗吃饭了吗吃饭了吗吃饭了吗"
    time="12月31日"
    location="新宿区"
    member="144/653"
  />,
];
const ChatContainer = forwardRef<
  HTMLDivElement,
  PropsWithChildren<ComponentPropsWithoutRef<"div">>
>((props, ref) => {
  const { selected } = useContext(ChatContext);
  return (
    <div ref={ref} className="w-full pt-[1rem] space-y-[5px] overflow-auto">
      {selected == 0 ? DirectMsg : GroupMsg}
    </div>
  );
});

export default function ChatPage() {
  const [selected, setSelected] = useState(0);
  const { height: lowerHeight } = useContext(NaviContext);
  const [ref, { height: upperHeight }] = useMeasure();
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (lowerHeight === null || upperHeight === null) {
      return;
    } else {
      containerRef.current!.style.height = `calc(100vh   - ${
        upperHeight! + lowerHeight!
      }px)`;
    }
  }, [lowerHeight, upperHeight]);

  return (
    <ChatContext.Provider value={{ selected, setSelected }}>
      <div className="w-full before:block before:w-full before:h-[20px] px-[1rem]">
        <div className="w-full " ref={ref}>
          <HeaderNavi>
            <HeaderTitle>聊天</HeaderTitle>
          </HeaderNavi>
          <div className="w-full flex flex-col justify-start items-center">
            <ChatSwitch />
            <div className="w-full h-[20px]"></div>
            <Search className="w-[85%] p-0 rounded-[20px] h-[40px]" />
          </div>
        </div>
        <ChatContainer ref={containerRef} />
      </div>
    </ChatContext.Provider>
  );
}
