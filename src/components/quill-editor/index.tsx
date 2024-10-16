"use client";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import dynamic from "next/dynamic";
import { useState, useRef } from "react";
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

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false }) as any;

const QuillEditor = () => {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [coverImage, setCoverImage] = useState<string | null>(null);
  const [tags, setTags] = useState<string[]>([]);
  const [premium, setPremium] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { isOpen, onOpen, onOpenChange } = useDisclosure(); // Modal control

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setCoverImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  // Handle button click to trigger file input
  const handleAddCoverClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Handle Remove Image button click
  const handleRemoveImage = () => {
    setCoverImage(null);
  };

  // Handle Preview and Publish
  const handleSubmit = (action: string) => {
    if (action === "Preview") {
      onOpen(); // Open the modal
    } else {
      const blogData = {
        title,
        content: value,
        coverImage,
        tags,
        premium,
        action, // 'Preview' or 'Publish'
      };
      console.log(blogData);
      // Handle submission logic (e.g., send to backend or preview)
    }
  };

  return (
    <>
      {/* Preview Modal */}
      <Modal
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
              <ModalHeader className="flex flex-col gap-1">
                Blog Preview
              </ModalHeader>
              <ModalBody className="w-full">
                {coverImage && (
                  <img
                    src={coverImage}
                    alt="Cover Preview"
                    className="w-full mb-4 object-cover"
                  />
                )}
                <h3 className="text-xl font-bold mb-2">
                  {title || "Untitled"}
                </h3>
                <ReactQuill
                  readOnly
                  modules={{
                    toolbar: false,
                  }}
                  theme="snow"
                  value={value}
                />
                {tags.length > 0 && (
                  <div className="tags mb-2">
                    <strong>Tags: </strong>
                    {tags.join(", ")}
                  </div>
                )}
                {premium && (
                  <p className="premium-label">This is a premium post.</p>
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

      <div className="sticky top-20 bg-transparent backdrop-blur-lg py-4 px-0 z-40 rounded">
        <div className="flex items-center justify-end space-x-2">
          <Button
            radius="sm"
            variant="ghost"
            onClick={() => handleSubmit("Preview")}
          >
            Preview
          </Button>
          <Button
            radius="sm"
            color="primary"
            variant="solid"
            onClick={() => handleSubmit("Publish")}
          >
            Publish
          </Button>
        </div>
      </div>

      <div className="flex justify-start mb-4 relative">
        {!coverImage ? (
          <Button
            radius="sm"
            variant="light"
            size="lg"
            startContent={<GoImage size={24} />}
            onClick={handleAddCoverClick}
          >
            Add Cover
          </Button>
        ) : (
          <>
            <img
              src={coverImage}
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

      <Input
        radius="sm"
        className="mb-4"
        placeholder="Blog Title"
        size="lg"
        value={title}
        variant="flat"
        onChange={(e) => setTitle(e.target.value)}
      />

      <ReactQuill
        placeholder="Write your blog here..."
        className="mb-4"
        modules={{
          toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
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
        value={value}
        onChange={setValue}
      />

      <Select
        label="Tags"
        placeholder="Select tags"
        selectionMode="multiple"
        className="mb-4"
        radius="sm"
        value={tags}
        onChange={(selectedTags: any) => setTags(selectedTags.target.value)}
      >
        {["NodeJs", "PHP"].map((tag) => (
          <SelectItem key={tag} value={tag}>
            {tag}
          </SelectItem>
        ))}
      </Select>

      <Checkbox
        isSelected={premium}
        onChange={(checked) => setPremium(!checked)}
      >
        Premium
      </Checkbox>
    </>
  );
};

export default QuillEditor;
