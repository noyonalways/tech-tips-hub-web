import { Button } from "@nextui-org/button";
import WriteBlog from "../modules/write-blog";
import { Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from "@nextui-org/modal";
import { GoPencil } from "react-icons/go";


interface IProps {}

const WriteBlogModal = ({}: IProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        size="sm"
        radius="full"
        variant="solid"
        color="primary"
        startContent={<GoPencil className="text-lg" />}
      >
        Write Blog
      </Button>

      <Modal
        size="3xl"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        scrollBehavior="inside"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Create Blog Post
              </ModalHeader>
              <ModalBody>
                <WriteBlog onClose={onOpenChange} />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default WriteBlogModal;