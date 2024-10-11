"use client";
import useModal from "@/hooks/useModal";
import dynamic from "next/dynamic";
import { Button } from "rizzui";

const AddModal = dynamic(() => import("../modals/AddModal"), { ssr: false });

export default function AddButton() {
  const { open, close, isOpen } = useModal();
  return (
    <>
      <Button
        onClick={open}
        type="button"
        className="absolute right-4 top-3 bg-black text-white"
      >
        Open Modal
      </Button>
      <AddModal close={close} isOpen={isOpen} />
    </>
  );
}
