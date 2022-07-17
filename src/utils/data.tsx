import grow from "../assets/illustration-grow-together.svg";
import flowing from "../assets/illustration-flowing-conversation.svg";
import users from "../assets/illustration-your-users.svg";
import location from "../assets/icon-location.svg";
import phone from "../assets/icon-phone.svg";
import mail from "../assets/icon-email.svg";

import { CardItem } from "../components/interfaces/inde";

export const cardItems: CardItem[] = [
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

export const footerItems = [
  {
    id: 10,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    img: location,
  },
  {
    id: 11,
    title: "+1-543-123-4567",
    img: phone,
  },
  {
    id: 12,
    title: "example@huddle.com",
    img: mail,
  },
];

export const footerItems2 = [
  {
    id: 13,
    title: "About Us",
  },
  {
    id: 14,
    title: "What We Do",
  },
  {
    id: 15,
    title: "FAQ",
  },
];
export const footerItems3 = [
  {
    id: 16,
    title: "Career",
  },
  {
    id: 17,
    title: "Blog",
  },
  {
    id: 18,
    title: "Contact Us",
  },
];
