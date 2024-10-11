import { useState } from "react";

export default function useModal() {
  const [isOpen, setisOpen] = useState(false);

  const close = () => setisOpen(false);

  const open = () => setisOpen(true);

  return { isOpen, open, close };
}
