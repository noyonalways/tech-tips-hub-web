import Link from "next/link";
import { FaDiscord, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

interface IProps {}

const MiniFooter: React.FC<IProps> = () => {
  return (
    <div className="border border-default/50 p-6 rounded-xl space-y-6 w-full">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Links</h3>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <Link className="hover:underline" href="/feed">
            Feed
          </Link>
          <Link className="hover:underline" href="/feed">
            About
          </Link>
          <Link className="hover:underline" href="/feed">
            Subscription
          </Link>
          <Link className="hover:underline" href="/feed">
            Support
          </Link>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Connect with us</h3>
        <ul className="flex items-center justify-between text-lg text-default-600">
          <li>
            <a
              className="p-2 border border-default-200 inline-block rounded-full hover:bg-default-100"
              href="#"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              className="p-2 border border-default-200 inline-block rounded-full hover:bg-default-100"
              href="#"
            >
              <FaXTwitter />
            </a>
          </li>
          <li>
            <a
              className="p-2 border border-default-200 inline-block rounded-full hover:bg-default-100"
              href="#"
            >
              <FaDiscord />
            </a>
          </li>
          <li>
            <a
              className="p-2 border border-default-200 inline-block rounded-full hover:bg-default-100"
              href="#"
            >
              <FaFacebook />
            </a>
          </li>
          <li>
            <a
              className="p-2 border border-default-200 inline-block rounded-full hover:bg-default-100"
              href="#"
            >
              <FaYoutube />
            </a>
          </li>
        </ul>
      </div>

      <div className="flex items-center justify-between border-t border-default/50 pt-6">
        <div className="flex space-x-2 text-xs">
          <Link className="hover:underline" href="#">
            Privacy
          </Link>
          <Link className="hover:underline" href="#">
            Terms
          </Link>
        </div>
        <p className="text-xs">
          &copy; {new Date().getFullYear()} Tech Tips Hub
        </p>
      </div>
    </div>
  );
};

export default MiniFooter;
