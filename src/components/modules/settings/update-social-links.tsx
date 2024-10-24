"use client";

import THForm from "@/components/form/th-from";
import THInput from "@/components/form/th-input";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { FieldValues, SubmitHandler } from "react-hook-form";


interface IProps {}

const allowedSocialLinks = [
  {
    name: "linkedin",
    platform: "Linkedin",
    placeholder: "https://linkedin.com/in/username",
  },
  {
    name: "github",
    platform: "GitHub",
    placeholder: "https://github.com/username",
  },
  {
    name: "instagram",
    platform: "Instagram",
    placeholder: "https://instagram.com/username",
  },
  {
    name: "twitter",
    platform: "Twitter/X",
    placeholder: "https://twitter.com/username",
  },
  {
    name: "facebook",
    platform: "Facebook",
    placeholder: "https://facebook.com/username",
  },
  {
    name: "youtube",
    platform: "YouTube",
    placeholder: "https://youtube.com/channel/@username",
  },
];

const UpdateSocialLinks = ({}: IProps) => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <div className="py-5" id="social-links">
      <div className="space-y-1 my-6">
        <h1 className="text-xl font-bold">Social Profiles</h1>
        <p className="pb-4 text-default-500">
          The social links you add here will show up on your profile.
        </p>
        <Divider className="bg-default/50" />
      </div>

      <THForm onSubmit={onSubmit}>
        <div className="space-y-6">
          {allowedSocialLinks.map((socialLink) => (
            <div key={socialLink.name} className="space-y-1">
              <label htmlFor={socialLink.name} className="block font-medium">
                {socialLink.platform}
              </label>
              <THInput
                name={socialLink.name}
                variant="bordered"
                placeholder={socialLink.placeholder}
                size="lg"
                radius="sm"
                id={socialLink.name}
              />
            </div>
          ))}

          <div className="flex justify-end">
            <Button radius="full" color="primary" variant="solid" type="submit">
              Update
            </Button>
          </div>
        </div>
      </THForm>
    </div>
  );
};

export default UpdateSocialLinks;
