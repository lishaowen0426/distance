import { LoremIpsum } from "lorem-ipsum";
import { getRandomInt } from "@/lib/utils";
import { type TopicContent } from "@/components/TopicCard";

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

export interface TopicResponse {
  topics: TopicContent[];
  hasMore: boolean;
}

let counter = 0;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const from = searchParams.get("from")!;
  const count = parseInt(searchParams.get("count") || "");

  return new Promise((resolveFn) => {
    setTimeout(() => {
      resolveFn(
        Response.json({
          topics: Array(count)
            .fill(1)
            .map(() => {
              return {
                title: lorem.generateSentences(1),
                desciption: lorem.generateParagraphs(1),
                location: LOCATIONS[getRandomInt(0, 10)],
                postedAt: "一小时前",
                online: 135,
                city: "katsushika",
                member: 458,
              };
            }),
          hasMore: true,
        } satisfies TopicResponse)
      );
    }, 500);
  });
}
