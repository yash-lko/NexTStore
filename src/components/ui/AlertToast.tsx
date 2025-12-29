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
    bg: "bg-pink-50",
    border: "border-pink-300",
    text: "text-pink-600",
  },
  info: {
    icon: Info,
    bg: "bg-pink-50",
    border: "border-pink-200",
    text: "text-pink-500",
  },
  warning: {
    icon: AlertTriangle,
    bg: "bg-amber-50",
    border: "border-amber-300",
    text: "text-amber-600",
  },
  error: {
    icon: XCircle,
    bg: "bg-rose-50",
    border: "border-rose-300",
    text: "text-rose-600",
  },
};

export type AlertType = keyof typeof styles;

export function showAlertToast(
  type: AlertType,
  title: string,
  message: string
) {
  const { icon: Icon, bg, border, text } = styles[type];

  toast.custom((t) => (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } flex items-start gap-3 w-90 rounded-2xl border ${border} ${bg} p-4 shadow-lg`}
    >
      <Icon className={`w-5 h-5 mt-0.5 ${text}`} />

      <div className="flex-1">
        <p className={`text-sm font-semibold ${text}`}>{title}</p>
        <p className="text-sm text-gray-700">{message}</p>
      </div>

      <button onClick={() => toast.dismiss(t.id)}>
        <X className="w-4 h-4 text-gray-400 hover:text-gray-600 cursor-pointer" />
      </button>
    </div>
  ));
}
