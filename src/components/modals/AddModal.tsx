"use client";
import AddForm from "@/components/forms/AddForm";
import { ActionIcon, Modal } from "rizzui";

interface Props {
  isOpen: boolean;
  close: () => void;
}

export default function AddModal({ isOpen, close }: Props) {
  return (
    <Modal isOpen={isOpen} onClose={close}>
      <div className="m-auto px-7 pt-6 pb-8 bg-white rounded-lg">
        <div className="relative mb-5">
          <h3 className="text-center font-semibold ">Add Your Song Here</h3>
          <ActionIcon
            size="sm"
            variant="text"
            className="absolute right-0 top-0"
            onClick={close}
          >
            close
          </ActionIcon>
        </div>
        <AddForm close={close} />
      </div>
    </Modal>
  );
}
