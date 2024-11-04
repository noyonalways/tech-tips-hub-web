import PageTitle from "@/components/modules/settings/page-title";
import UpdateProfileDetailsForm from "@/components/modules/settings/update-profile-details-form";
import UpdateSocialLinks from "@/components/modules/settings/update-social-links";
import { getProfileInfo } from "@/services/auth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile Settings",
  description: "Manage your Tech Tips Hub profile settings.",
  keywords: "Profile, Settings, Tech Tips Hub",
};

interface IProps {}

const SettingsPage =   async ({}: IProps) => {
const profileData = await getProfileInfo();
  
  return (
    <section className="py-10">
      <div className="max-w-3xl mx-auto px-2 lg:px-0">
        <PageTitle
          title="Profile"
          description="Manage your Tech Tips Hub profile"
        />

        <>
          <UpdateProfileDetailsForm {...profileData?.data} />
          <UpdateSocialLinks socialLinks={profileData?.data?.socialLinks} />
        </>
      </div>
    </section>
  );
};
export default SettingsPage;