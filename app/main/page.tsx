"use client";
import AvatarSearch from "@/components/AvatarSearch";
import { HeadCard, Carousel } from "@/components/CardCarousel";
import {
  TopicCard,
  TopicContainer,
  TopicNavi,
  TopicNaviItem,
  type TopicContent,
} from "@/components/TopicCard";
import { LoremIpsum } from "lorem-ipsum";
import { getRandomInt } from "@/lib/utils";
import { useMeasure } from "@uidotdev/usehooks";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 3,
    min: 1,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

const SLIDES = Array.from(Array(20).keys());
const NAVI = [
  "体育",
  "音乐",
  "文学",
  "美食",
  "电影",
  "电视剧",
  "舞蹈",
  "健身",
  "科技",
  "金融",
];

const LOCATIONS = [
  "葛飾区",
  "江戸川区",
  "台東区",
  "墨田区",
  "江東区",
  "中央区",
  "港区",
  "品川区",
  "新宿区",
  "文京区",
];

const topics: TopicContent[] = Array(100)
  .fill(1)
  .map(() => {
    return {
      title: lorem.generateSentences(1),
      desciption: lorem.generateParagraphs(1),
      location: LOCATIONS[getRandomInt(0, 10)],
      postedAt: "一小时前",
      online: 135,
      member: 458,
    };
  });
export default function Page() {
  const [upperRef, { height: upperHeight }] = useMeasure();
  const [lowerRef, { height: lowerHeight }] = useMeasure();
  return (
    <>
      <div className="w-full" id="TopicPageUpper" ref={upperRef}>
        <AvatarSearch />
        <Carousel className="mt-[20px]">
          {SLIDES.map((index) => {
            return (
              <HeadCard key={index}>
                <div className="h-full w-full font-cnB  text-text-primary text-3xl flex items-center justify-center">
                  {index + 1}
                </div>
              </HeadCard>
            );
          })}
        </Carousel>
        <TopicNavi>
          {NAVI.map((r, index) => {
            return <TopicNaviItem key={index}>{r}</TopicNaviItem>;
          })}
        </TopicNavi>
      </div>
      <TopicContainer restHeight={upperHeight! + lowerHeight!}>
        {topics.map((t, index) => {
          return (
            <TopicCard
              suppressHydrationWarning
              key={index}
              city="katsushika"
              {...t}
            />
          );
        })}
      </TopicContainer>
      <div id="TopicPageLower" ref={lowerRef}></div>
    </>
  );
}
