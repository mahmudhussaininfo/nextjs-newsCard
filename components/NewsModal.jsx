"use client";

import { useRouter } from "next/navigation.js";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const NewsModal = ({ children }) => {
  const newsRef = useRef(null);
  const router = useRouter();

  const onHide = () => {
    router.back();
  };

  useEffect(() => {
    if (!newsRef.current?.open) {
      newsRef.current?.showModal();
    }
  }, []);
  return createPortal(
    <dialog
      ref={newsRef}
      onClose={onHide}
      className="shadow-teal-700 w-1/2 shadow-md border text-white border-teal-600 flex flex-col p-2 rounded-md dark:bg-opacity-95 dark:text-gray-200"
    >
      <span onClick={onHide} className="flex justify-end cursor-pointer">
        X
      </span>
      {children}
    </dialog>,
    document.getElementById("newsModal-root-content"),
  );
};

export default NewsModal;
