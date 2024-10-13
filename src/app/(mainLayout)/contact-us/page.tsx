import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the Tech Tips Hub team for any inquiries, feedback, or support. We’re here to assist you with all your tech-related queries.",
  keywords:
    "Tech Tips Hub, contact us, tech support, inquiries, feedback, tech questions, help",
  openGraph: {
    title: "Contact Us",
    description:
      "Have questions or need support? Contact the Tech Tips Hub team and let us help you with your tech-related inquiries.",
  },
};


interface IProps {}

const ContactUsPage: React.FC<IProps> = () => {
  return (
    <div>
      <h1>Contact Us</h1>
    </div>
  );
};

export default ContactUsPage;