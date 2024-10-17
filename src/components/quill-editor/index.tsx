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
import { getAllCategories } from "@/services/category";
import { ICategory } from "@/types";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false }) as any;

const QuillEditor = () => {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [coverImageFile, setCoverImageFile] = useState<File | null>(null); // Store actual file
  const [tags, setTags] = useState<string>("");
  const [premium, setPremium] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>(""); // Store selected category ID
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [categories, setCategories] = useState<ICategory[]>([]); // Store fetched categories

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoryData = await getAllCategories();
        const data = categoryData?.data as ICategory[];
        console.log(data);
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const { isOpen, onOpen, onOpenChange } = useDisclosure(); // Modal control

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setCoverImageFile(file); // Store the file itself
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
    setCoverImageFile(null);
  };

  // Handle Preview and Publish
  const handleSubmit = (action: string) => {
    if (action === "Preview") {
      onOpen(); // Open the modal
    } else {
      const formData = new FormData();

      if (coverImageFile) {
        formData.append("coverImage", coverImageFile); // Append actual image file
      }

      const postData = {
        title,
        content: value,
        tags: tags.split(",").map((tag) => tag.trim()),
        premium,
        category: selectedCategory, // Include selected category ID
      };
      console.log({...postData, image: coverImageFile});

      // Send postData to the API here, if needed.
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
                {coverImageFile && (
                  <img
                    src={URL.createObjectURL(coverImageFile)}
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
                <div className="flex space-x-2">
                  {tags.split(",").map((tag) => (
                    <span
                      key={tag}
                      className="bg-default-200 rounded-sm text-xs px-2 py-1"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
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
        {!coverImageFile ? (
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
        label="Category"
        className="mb-4"
        onChange={(e) => setSelectedCategory(e.target.value)} // Track selected category
      >
        {categories.map((category) => (
          <SelectItem key={category._id} value={category._id}>
            {category.name}
          </SelectItem>
        ))}
      </Select>

      <Select
        label="Tags"
        placeholder="Select tags"
        selectionMode="multiple"
        className="mb-4"
        radius="sm"
        onChange={(selectedTags: any) => setTags(selectedTags.target.value)}
      >
        {["NodeJs", "PHP"].map((tag) => (
          <SelectItem key={tag} value={tag}>
            {tag}
          </SelectItem>
        ))}
      </Select>

      <Checkbox isSelected={premium} onChange={() => setPremium(!premium)}>
        Premium
      </Checkbox>
    </>
  );
};

export default QuillEditor;
