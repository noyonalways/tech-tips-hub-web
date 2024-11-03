"use client"

import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import { FiTrash2 } from "react-icons/fi";

interface IProps {}

const UserDeleteBlogModal = ({}: IProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Button
        onPress={onOpen}
        size="sm"
        variant="light"
        color="danger"
        startContent={<FiTrash2 className="text-lg text-red-500" />}
      >
        Delete
      </Button>

      <Modal size="md" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Delete the Blog?
              </ModalHeader>
              <ModalBody>
                <p>Are your sure, You want to delete this blog?</p>
              </ModalBody>
              <ModalFooter>
                <div className="flex justify-end">
                  <Button color="danger" radius="sm">
                    Confirm
                  </Button>
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default UserDeleteBlogModal;
