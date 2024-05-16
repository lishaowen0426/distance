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

interface MessageProps {
  avatar?: string[];
  text?: string;
  time?: string;
}

const MessageAvatar = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<"div"> & { urls?: string[] }
>(({ urls, ...props }, ref) => {
  return (
    <div className="">
      {urls?.slice(0, 4).map((u) => {
        return <img src={u} alt="avatar" />;
      })}
    </div>
  );
});
const MessageCard = forwardRef<
  HTMLDivElement,
  PropsWithChildren<ComponentPropsWithoutRef<"div">> & MessageProps
>(({ avatar, text, time, className, ...props }, ref) => {
  return (
    <div ref={ref} className="w-full flex flex-row justify-between">
      <MessageAvatar urls={avatar} />
      <button>
        <EllipsisVertical stroke="white" />
      </button>
    </div>
  );
});

const msg = [
  <MessageCard avatar={[mockAvatar]} />,
  <MessageCard avatar={[mockAvatar, mockAvatar]} />,
  <MessageCard avatar={[mockAvatar, mockAvatar, mockAvatar]} />,
  <MessageCard avatar={[mockAvatar, mockAvatar, mockAvatar, mockAvatar]} />,
  <MessageCard
    avatar={[mockAvatar, mockAvatar, mockAvatar, mockAvatar, mockAvatar]}
  />,
];

const ChatContainer = forwardRef<
  HTMLDivElement,
  PropsWithChildren<ComponentPropsWithoutRef<"div">>
>((props, ref) => {
  return (
    <div ref={ref} className="w-full space-y-[5px] overflow-auto">
      {msg}
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
      containerRef.current!.style.height = `calc(100vh - 20px  - ${
        upperHeight! + lowerHeight!
      }px)`;
    }
  }, [lowerHeight, upperHeight]);

  return (
    <ChatContext.Provider value={{ selected, setSelected }}>
      <div className="w-full" ref={ref}>
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
    </ChatContext.Provider>
  );
}
