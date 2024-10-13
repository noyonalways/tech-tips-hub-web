import Container from "@/components/ui/container";
import { button as buttonStyles } from "@nextui-org/theme";
import Link from "next/link";

interface IProps {}

const NotFoundPage: React.FC<IProps> = () => {
  return (
    <section>
      <Container>
        <div className="min-h-dvh flex flex-col items-center justify-center text-center">
          <h1 className="text-6xl font-bold text-default-500">404</h1>
          <p className="text-xl text-default-400 mt-4 mb-2">
            Oops! The page you're looking for doesn't exist.
          </p>
          <p className="text-md text-default-300 mb-8">
            It seems we can't find what you're looking for.
          </p>

          <Link
            href="/"
            className={`${buttonStyles({
              color: "primary",
              radius: "sm",
              size: "md",
              ...buttonStyles,
            })}`}
          >
            Go Back to Homepage
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default NotFoundPage;
