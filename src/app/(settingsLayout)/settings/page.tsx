import PageTitle from "@/components/modules/settings/page-title";
import UpdateProfileDetailsForm from "@/components/modules/settings/update-profile-details-form";
import UpdateSocialLinks from "@/components/modules/settings/update-social-links";


interface IProps {}

const SettingsPage = ({}: IProps) => {

  
  return (
    <section className="py-10">
      <div className="max-w-3xl mx-auto px-2 lg:px-0">
        <PageTitle
          title="Profile"
          description="Manage your Tech Tips Hub profile"
        />

        <>
          <UpdateProfileDetailsForm />
          <UpdateSocialLinks />          
        </>
      </div>
    </section>
  );
};

export default SettingsPage;