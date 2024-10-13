import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn more about Tech Tips Hub, your go-to source for the latest tech tips, tutorials, and expert insights. Discover our mission and meet the team behind the content.",
  keywords:
    "Tech Tips Hub, about us, tech blog, tutorials, expert insights, technology, mission, team",
  openGraph: {
    title: "About Us",
    description:
      "Get to know Tech Tips Hub and our mission to provide valuable tech tips and insights. Meet the team that helps you stay updated with the latest in technology.",
  },
};

interface IProps {}

const AboutUs: React.FC<IProps> = () => {
  return (
    <div>
      <h1>About Us</h1>
    </div>
  );
};

export default AboutUs;
