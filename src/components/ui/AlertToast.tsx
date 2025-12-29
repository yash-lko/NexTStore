"use client";

import toast from "react-hot-toast";
import {
  CheckCircle,
  Info,
  AlertTriangle,
  XCircle,
  X,
} from "lucide-react";

const styles = {
  success: {
    icon: CheckCircle,
    bg: "bg-green-50",
    border: "border-green-300",
    text: "text-green-700",
  },
  info: {
    icon: Info,
    bg: "bg-blue-50",
    border: "border-blue-300",
    text: "text-blue-700",
  },
  warning: {
    icon: AlertTriangle,
    bg: "bg-yellow-50",
    border: "border-yellow-300",
    text: "text-yellow-700",
  },
  error: {
    icon: XCircle,
    bg: "bg-red-50",
    border: "border-red-300",
    text: "text-red-700",
  },
};

export type AlertType = keyof typeof styles;

export function showAlertToast(
  type: AlertType,
  title: string,
  message: string
) {
  toast.custom((t) => {
    const { icon: Icon, bg, border, text } = styles[type];

    return (
      <div className="flex items-start gap-3 w-90 rounded-xl border p-4 shadow-md bg-white">
        <Icon className={`w-5 h-5 mt-0.5 ${text}`} />

        <div className="flex-1">
          <p className={`text-sm font-semibold ${text}`}>{title}</p>
          <p className="text-sm text-gray-600">{message}</p>
        </div>

        <button onClick={() => toast.dismiss(t.id)}>
          <X className="w-4 h-4 text-gray-400 hover:text-gray-600" />
        </button>
      </div>
    );
  });
}
