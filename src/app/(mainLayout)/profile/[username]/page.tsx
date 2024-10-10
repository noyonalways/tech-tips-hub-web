import Container from "@/components/ui/container";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { GoPencil } from "react-icons/go";
import { IoShareOutline } from "react-icons/io5";

interface IProps {}

const DynamicProfilePage: React.FC<IProps> = () => {
  return (
    <section className="py-10">
      <Container>
        <div className="border border-default/50 p-6 rounded-xl">
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-6">
              <Image
                className="w-40 h-40"
                radius="full"
                src="https://cdn.hashnode.com/res/hashnode/image/upload/v1700995925084/zr_JJq4Wl.jpg?w=240&h=240&fit=crop&crop=faces&auto=compress,format&format=webp"
              />
              <div className="space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold">Noyon Rahman</h1>
                  <p>Web Developer</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Button variant="light">10 Following</Button>
                  <Button variant="light">50 Followers</Button>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button isIconOnly radius="full" variant="bordered">
                <IoShareOutline className="text-xl" />
              </Button>
              <Button
                radius="full"
                variant="solid"
                color="primary"
                startContent={<GoPencil className="text-lg" />}
              >
                Edit
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DynamicProfilePage;
