import grow from "../assets/illustration-grow-together.svg";
import flowing from "../assets/illustration-flowing-conversation.svg";
import users from "../assets/illustration-your-users.svg";
import { CardItem } from "../components/interfaces/inde";

export const cardItems:CardItem[] = [
  {
    id: 1,
    title: "Grow Together",
    description:
      "Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.",
    image: grow,
  },
  {
    id: 2,
    title: "Flowing Conversations",
    description:
      "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.",
    image: flowing,
  },
  {
    id: 3,
    title: "Your Users",
    description:
      "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.",
    image: users,
  },
];
