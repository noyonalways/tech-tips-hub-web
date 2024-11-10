"use client";

import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import dynamic from "next/dynamic";
import { useState, useRef, useEffect } from "react";
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  ModalContent,
  useDisclosure,
} from "@nextui-org/modal";
import "react-quill/dist/quill.snow.css";
import { Select, SelectItem } from "@nextui-org/select";
import { Checkbox } from "@nextui-org/checkbox";
import { GoImage } from "react-icons/go";
import { RiCloseLargeFill } from "react-icons/ri";
import { useForm, Controller, FieldValues } from "react-hook-form";
import { getAllCategories } from "@/services/category";
import { ICategory, IUser } from "@/types";
import { getProfileInfo } from "@/services/auth";
import { useCreatePost } from "@/hooks/post.hook";
import { Image } from "@nextui-org/image";
import { useRouter } from "next/navigation";
import { Spinner } from "@nextui-org/spinner";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false }) as any;

interface IProps {
  onClose: () => void;
}

const WriteBlog = ({onClose} : IProps ) => {
  const {
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const router = useRouter()

  const [coverImageFile, setCoverImageFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [currentUser, setCurrentUser] = useState<IUser>();
  const {
    mutate: handleCreatePost,
    isPending,
  } = useCreatePost();

  const getUser = async () => {
    const profileData = await getProfileInfo();
    const user = (profileData.data as IUser) ?? {};
    setCurrentUser(user);
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoryData = await getAllCategories();
        const data = categoryData?.data as ICategory[];
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setCoverImageFile(file);
    }
  };

  const handleAddCoverClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleRemoveImage = () => {
    setCoverImageFile(null);
  };

  const onSubmit =  (data: FieldValues) => {
    const formData = new FormData();
    if (coverImageFile) {
      formData.append("image", coverImageFile);
    }

    const postData = {
      ...data,
      contentType: "html",
      tags: data.tags.split(",").map((tag: string) => tag.trim()),
    };

    formData.append("data", JSON.stringify(postData));

    handleCreatePost(formData, {
      onSuccess: () => {
        // close the modal
        onClose();
        router.push(`/?new=${data?.title}`)
      }
    });
    reset();
    setCoverImageFile(null);

    // console.log(postData)
  };

  return (
    <>
      {/* Preview Modal */}
      <Modal
        scrollBehavior="inside"
        size="5xl"
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          backdrop:
            "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Blog Preview</ModalHeader>
              <ModalBody>
                {coverImageFile && (
                  <Image
                    src={URL.createObjectURL(coverImageFile)}
                    alt="Cover Preview"
                    className="w-full mb-4 rounded mx-auto"
                  />
                )}
                <h3 className="text-xl font-bold mb-2">
                  {watch("title") || "Untitled"}
                </h3>
                <ReactQuill
                  readOnly
                  modules={{ toolbar: false }}
                  theme="snow"
                  value={watch("content")}
                />
                <div className="flex gap-2 flex-wrap">
                  {watch("tags")
                    ?.split(",")
                    .map((tag: string) => (
                      <span
                        key={tag}
                        className="bg-default-200 rounded-sm text-xs px-2 py-1"
                      >
                        #{tag}
                      </span>
                    ))}
                </div>
                {watch("isPremium") && (
                  <p className="premium-label">Premium post.</p>
                )}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      <>
        {isPending ? (
            <div className="flex justify-center py-16">
              <Spinner size="lg" />
            </div>
          
        ) : (
          <>
            <div className="flex items-center justify-end space-x-2">
              <Button
                type="button"
                radius="sm"
                variant="ghost"
                onClick={onOpen}
              >
                Preview
              </Button>
              <Button
                radius="sm"
                color="primary"
                variant="solid"
                onClick={handleSubmit(onSubmit)}
              >
                Publish
              </Button>
            </div>
            <div className="flex justify-start mb-4 relative">
              {!coverImageFile ? (
                <Button
                  radius="sm"
                  variant="flat"
                  size="lg"
                  startContent={<GoImage size={24} />}
                  onClick={handleAddCoverClick}
                >
                  Add Cover
                </Button>
              ) : (
                <>
                  <img
                    src={URL.createObjectURL(coverImageFile)}
                    alt="Cover Preview"
                    className="w-full object-cover"
                  />
                  <Button
                    isIconOnly
                    variant="faded"
                    radius="sm"
                    className="absolute top-4 right-4"
                    onClick={handleRemoveImage}
                  >
                    <RiCloseLargeFill />
                  </Button>
                </>
              )}
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <Controller
                  name="title"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Title is required" }}
                  render={({ field }) => (
                    <>
                      <Input
                        {...field}
                        radius="sm"
                        size="lg"
                        variant="flat"
                        isRequired
                        label="Blog Title"
                      />
                      {errors.title?.message && (
                        <p className="text-red-500 text-sm mt-2">
                          {String(errors?.title?.message)}
                        </p>
                      )}
                    </>
                  )}
                />
              </div>

              <div>
                <Controller
                  name="content"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Content is required" }}
                  render={({ field }) => (
                    <>
                      <ReactQuill
                        {...field}
                        required
                        className="s"
                        placeholder="Write your blog here..."
                        modules={{
                          toolbar: [
                            [{ header: [1, 2, false] }],
                            [
                              "bold",
                              "italic",
                              "underline",
                              "strike",
                              "blockquote",
                              "code-block",
                            ],
                            [
                              { list: "ordered" },
                              { list: "bullet" },
                              { indent: "-1" },
                              { indent: "+1" },
                            ],
                            ["link"],
                            ["clean"],
                          ],
                        }}
                        theme="snow"
                      />
                      {errors.content && (
                        <p className="text-red-500 text-sm mt-2">
                          {String(errors?.content?.message)}
                        </p>
                      )}
                    </>
                  )}
                />
              </div>

              <div>
                <Controller
                  name="category"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Category is required" }}
                  render={({ field }) => (
                    <>
                      <Select {...field} label="Category" isRequired>
                        {categories?.map((category) => (
                          <SelectItem key={category._id} value={category._id}>
                            {category.name}
                          </SelectItem>
                        ))}
                      </Select>
                      {errors.category && (
                        <p className="text-red-500 text-sm mt-2">
                          {String(errors?.category?.message)}
                        </p>
                      )}
                    </>
                  )}
                />
              </div>

              <div>
                <Controller
                  name="tags"
                  control={control}
                  defaultValue=""
                  rules={{ required: "At least one tag is required" }}
                  render={({ field }) => (
                    <>
                      <Input
                        {...field}
                        radius="sm"
                        label="Enter tags (comma separated)"
                        isRequired
                      />
                      {errors.tags && (
                        <p className="text-red-500 text-sm mt-2">
                          {String(errors?.tags?.message)}
                        </p>
                      )}
                    </>
                  )}
                />
              </div>

              <Controller
                name="isPremium"
                control={control}
                defaultValue={false}
                render={({ field }) => (
                  <Checkbox
                    isDisabled={!currentUser?.isPremiumUser}
                    {...field}
                    isSelected={field.value}
                  >
                    Premium{" "}
                    {currentUser && !currentUser?.isPremiumUser && (
                      <span>(you are not a premium member)</span>
                    )}
                  </Checkbox>
                )}
              />
            </form>
          </>
        )}
      </>
    </>
  );
};

export default WriteBlog;
