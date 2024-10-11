import Container from "@/components/ui/container";
import GenderDropdown from "@/components/ui/form/gender-dropdown";
import { Button } from "@nextui-org/button";
import { DatePicker } from "@nextui-org/date-picker";
import { Image } from "@nextui-org/image";
import { Input } from "@nextui-org/input";
import Link from "next/link";

const SignUpPage = () => {
  return (
    <section className="py-10 relative w-full overflow-hidden h-[calc(100vh-85px)]">
      <Container>
        <div className="space-y-8 w-full max-w-xl mx-auto mt-10">
          <Link className="flex items-center space-x-2 justify-center" href="/">
            <Image
              radius="full"
              className="size-14"
              src="https://i.ibb.co.com/c64q254/noyon-logo-dark.png"
            />
            <span className="font-bold text-xl">TTH</span>
          </Link>
          <div>
            <form className="space-y-2" action="">
              <Input radius="full" size="sm" label="Full Name" type="text" />
              <Input
                radius="full"
                size="sm"
                label="Email Address"
                type="email"
              />
              <Input radius="full" size="sm" label="Username" type="text" />
              <Input radius="full" size="sm" label="Password" type="password" />
              <GenderDropdown />
              <DatePicker className="w-full" label="Date of Birth" />
              <Button
                color="primary"
                variant="solid"
                radius="full"
                className="w-full"
              >
                Sign Up
              </Button>
            </form>
          </div>
        </div>

        <div className="absolute h-14 w-[600px] rotate-[45deg] rounded-3xl bg-purple-600 opacity-30  filter -bottom-5 lg:bottom-20 lg:-right-28 lg:block lg:h-10 lg:w-[600px] lg:opacity-20 xl:-right-40 xl:h-2 xl:w-[800px] xl:opacity-100 blur-2xl"></div>
        <div className="absolute  h-20 w-[600px] rotate-[45deg] rounded-3xl bg-primary-500 opacity-10  filter bottom-14  lg:bottom-32 lg:-right-28 lg:block lg:h-12 lg:w-[600px] lg:opacity-30  xl:-right-40 xl:h-4 xl:w-[700px] xl:opacity-100 blur-2xl"></div>
      </Container>
    </section>
  );
};

export default SignUpPage;
