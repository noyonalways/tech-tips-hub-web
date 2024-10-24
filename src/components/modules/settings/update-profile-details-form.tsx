"use client";

import THForm from "@/components/form/th-from";
import THInput from "@/components/form/th-input";
import THTextarea from "@/components/form/th-textarea";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { GoImage } from "react-icons/go";

interface IProps {}

const UpdateProfileDetailsForm = ({}: IProps) => {
  const defaultValues = {
    fullName: "Noyon Rahman",
    designation: "Developer",
    location: "Gazipur, Dhaka",
    phone: "+8801706592962",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur, diam id vulputate bibendum, nunc urna dignissim ipsum, ut tincidunt velit velit euismod urna. Duis consectetur, dolor id eleifend rutrum, metus enim faucibus lectus, at sagittis eros neque vel dui. Sed et tellus vel mauris scelerisque fermentum et auctor ligula.",
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <>
      <THForm onSubmit={onSubmit} defaultValues={defaultValues}>
        <div className="space-y-6">
          <div className="space-y-1">
            <label htmlFor="profilePicture" className="block font-medium">
              Profile Image
            </label>
            <div className="border-default/50 p-4 rounded-lg border-2 flex items-center space-x-4">
              <Avatar
                className="w-28 h-28 lg:size-28 object-cover"
                radius="full"
                src="tech-tips-hub-logo.png"
                name={"fullName"}
              />
              <Button
                radius="full"
                variant="solid"
                name="profilePicture"
                color="primary"
                startContent={<GoImage size={18} />}
              >
                Change Image
              </Button>
            </div>
          </div>
          <div className="space-y-1">
            <label htmlFor="fullName" className="block font-medium">
              Full Name
            </label>
            <THInput
              name="fullName"
              variant="bordered"
              placeholder="Full Name"
              size="lg"
              radius="sm"
              id="fullName"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="designation" className="block font-medium">
              Designation
            </label>
            <THInput
              name="designation"
              variant="bordered"
              placeholder="Designation"
              size="lg"
              radius="sm"
              id="designation"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="location" className="block font-medium">
              Location
            </label>
            <THInput
              name="location"
              variant="bordered"
              placeholder="Location"
              size="lg"
              radius="sm"
              id="location"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="phone" className="block font-medium">
              Phone
            </label>
            <THInput
              name="phone"
              variant="bordered"
              placeholder="Phone"
              size="lg"
              radius="sm"
              id="phone"
            />
          </div>
          <div className="space-y-1">
            <label className="block font-medium">Profile Bio</label>
            <THTextarea
              name="bio"
              variant="bordered"
              placeholder="Bio..."
              size="lg"
              radius="sm"
            />
          </div>
          <div className="flex justify-end">
            <Button radius="full" color="primary" variant="solid" type="submit">
              Update
            </Button>
          </div>
        </div>
      </THForm>
    </>
  );
};

export default UpdateProfileDetailsForm;
