import AvatarSearch from "@/components/AvatarSearch";
import { HeadCard, HeadCarousel } from "@/components/CardCarousel";
import { TopicCard, TopicContainer } from "@/components/TopicCard";
export default function Page() {
  return (
    <>
      <AvatarSearch />
      <HeadCarousel className="mt-[20px]">
        <HeadCard key="slide1">Card 1</HeadCard>
        <HeadCard key="slide2">Card 2</HeadCard>
        <HeadCard key="slide3">Card 3</HeadCard>
        <HeadCard key="slide4">Card 4</HeadCard>
      </HeadCarousel>
      <TopicContainer>
        <TopicCard city="katsushika" />
      </TopicContainer>
    </>
  );
}
