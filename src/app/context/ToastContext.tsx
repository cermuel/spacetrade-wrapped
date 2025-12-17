import Image from "next/image";
import React, { createContext, useState, ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BiSolidErrorAlt } from "react-icons/bi";

type ToastType = "success" | "error" | "info";

type Toast = {
  id: number;
  message: string;
  type: ToastType;
  details?: string;
};

type ToastContextType = {
  addToast: (message: string, type: ToastType, details?: string) => void;
};

export const ToastContext = createContext<ToastContextType | undefined>(
  undefined
);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (message: string, type: ToastType, details?: string) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type, details }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}

      <div className="fixed top-4 right-4 space-y-2 z-50 w-max md:max-w-2xl max-w-[calc(100%-32px)]">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              transition={{ duration: 0.25 }}
              className="px-4 relative bg-white py-3 gap-2 rounded-lg shadow flex items-center w-full overflow-clip"
              style={{ boxShadow: "0px 8px 10px 0px #00000033" }}
            >
              <div
                className={`absolute bottom-0 left-0 h-1 rounded-b-[10px] w-full ${
                  toast.type === "success"
                    ? "bg-green-600"
                    : toast.type === "error"
                    ? "bg-[#ec0000]"
                    : "bg-[#DD900D]"
                }`}
              />
              {toast.type == "error" ? (
                <BiSolidErrorAlt size={24} color="#ec0000" />
              ) : (
                <Image
                  src={
                    toast.type === "info"
                      ? "/icons/toast-warning.svg"
                      : "/icons/check.svg"
                  }
                  alt=""
                  width={toast.type === "info" ? 32 : 24}
                  height={toast.type === "info" ? 32 : 24}
                />
              )}
              <div>
                <h2
                  className={`font-bold ${
                    toast.type === "success"
                      ? "text-green-600"
                      : toast.type === "error"
                      ? "text-[#ec0000]"
                      : "text-[#DD900D]"
                  }`}
                >
                  {toast.message}
                </h2>
                {toast.details && (
                  <p className="text-xs text-[#6B7280]">{toast.details}</p>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
};
