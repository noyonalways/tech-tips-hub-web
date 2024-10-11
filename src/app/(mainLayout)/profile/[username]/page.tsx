import Container from "@/components/ui/container";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { AiOutlineSmallDash } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { GoPencil } from "react-icons/go";
import { IoDiamondOutline, IoShareOutline } from "react-icons/io5";
import { MdVerified } from "react-icons/md";
import { PiCalendarDotsLight } from "react-icons/pi";

interface IProps {}

const DynamicProfilePage: React.FC<IProps> = () => {
  return (
    <section className="py-10">
      <Container>
        <div className="lg:border border-default/50 lg:py-8 lg:px-14 rounded-xl space-y-8 w-full">
          <div className="w-full flex items-start justify-between">
            <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row items-start lg:space-x-6">
              <Image
                className="size-32 lg:size-40"
                radius="full"
                src="https://cdn.hashnode.com/res/hashnode/image/upload/v1700995925084/zr_JJq4Wl.jpg?w=240&h=240&fit=crop&crop=faces&auto=compress,format&format=webp"
              />
              <div className="space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold">Noyon Rahman</h1>
                  <p>Web Developer</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex space-x-2 items-center">
                    <MdVerified className="text-lg text-primary" />
                    <span>Verified</span>
                  </div>
                  <div className="flex space-x-2 items-center">
                    <IoDiamondOutline className="text-lg text-primary" />
                    <span>Premium User</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Button size="sm" variant="flat" radius="full">
                    10 Following
                  </Button>
                  <Button size="sm" variant="flat" radius="full">
                    50 Followers
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button size="sm" isIconOnly radius="full" variant="bordered">
                <IoShareOutline className="text-lg" />
              </Button>
              <Button
                size="sm"
                radius="full"
                variant="solid"
                color="primary"
                startContent={<GoPencil className="text-lg" />}
              >
                Edit
              </Button>
            </div>
          </div>

          <div className="border border-default/50 p-4 py-6 lg:p-6 rounded-lg flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-center lg:justify-center lg:space-x-14 w-full">
            <ul className="flex items-center space-x-6 text-lg text-default-600">
              <li>
                <a href="#">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="#">
                  <BsTwitterX />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaYoutube />
                </a>
              </li>
            </ul>

            <div className="text-default-600 flex space-x-2 items-center">
              <FiMapPin className="text-lg" />
              <span>Dhaka, Bangladesh</span>
            </div>

            <div className="text-default-600 flex space-x-2 items-center">
              <PiCalendarDotsLight className="text-lg" />
              <span>Member Since May, 2023</span>
            </div>
          </div>

          <div className="border border-default/50 p-4 lg:p-6 rounded-lg space-y-6">
            <h2 className="text-xl font-bold">About Me</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi,
              dignissimos deleniti amet nostrum illo reprehenderit in, sunt vel
              quo quasi asperiores suscipit temporibus impedit ratione libero
              non. Vero ratione vel quibusdam ipsum facere architecto alias
              mollitia iusto doloremque. Eius, odit!
            </p>
          </div>

          <div className="border border-default/50 p-4 lg:p-6 rounded-lg space-y-6">
            <h2 className="text-xl font-bold">Recent Activity</h2>

            <div>
              <div className="flex space-x-2 lg:space-x-10">
                <div className="flex flex-col items-center space-y-1 basis-[25%] lg:basis-auto">
                  <span>May 7</span>
                  <AiOutlineSmallDash className="rotate-90 text-primary text-lg" />
                </div>
                <div className="space-y-1 flex-1 lg:flex-auto border-b border-default/50 pb-2">
                  <div className="text-default-500 space-x-2 flex items-center">
                    <GoPencil />
                    <span>Wrote an article</span>
                  </div>
                  <h3 className="text-lg font-semibold ">
                    Type vs Interface in TypeScript
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DynamicProfilePage;
