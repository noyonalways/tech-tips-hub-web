import PageTitle from "@/components/modules/settings/page-title";
import Container from "@/components/ui/container";

interface IProps {}

const SettingsPage = ({}: IProps) => {
  return (
    <section className="pt-10">
      <Container>
        <PageTitle title="Profile" description="Manage your Tech Tips Hub profile" />
      </Container>
    </section>
  );
};

export default SettingsPage;