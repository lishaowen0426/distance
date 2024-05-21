import { LoremIpsum } from "lorem-ipsum";
import { getRandomInt } from "@/lib/utils";
import { type TopicContent } from "@/components/TopicCard";
import { record } from "zod";

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

export interface ChatResponse {
  topic: TopicContent;
  record: string[];
}

let counter = 0;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const topicID = searchParams.get("id")!;

  const recordCount = getRandomInt(30, 50);

  return new Promise((resolveFn) => {
    setTimeout(() => {
      resolveFn(
        Response.json({
          topic: {
            id: lorem.generateWords(1),
            title: lorem.generateSentences(1),
            desciption: lorem.generateParagraphs(1),
            location: LOCATIONS[getRandomInt(0, 10)],
            postedAt: "一小时前",
            online: 135,
            member: 458,
          },
          record: Array(recordCount)
            .fill("")
            .map(() => {
              return lorem.generateSentences(1);
            }),
        } satisfies ChatResponse)
      );
    }, 500);
  });
}
