"use client";

import { useState, useEffect, useCallback } from "react";

export type ToastType = "success" | "error" | "info";

interface ToastProps {
    message: string;
    type: ToastType;
    onClose: () => void;
    duration?: number;
}

export function Toast({ message, type, onClose, duration = 5000 }: ToastProps) {
    useEffect(() => {
        const timer = setTimeout(onClose, duration);
        return () => clearTimeout(timer);
    }, [onClose, duration]);

    const bgColor = {
        success: "bg-green-50 border-green-200",
        error: "bg-red-50 border-red-200",
        info: "bg-blue-50 border-blue-200",
    }[type];

    const textColor = {
        success: "text-green-800",
        error: "text-red-800",
        info: "text-blue-800",
    }[type];

    const iconColor = {
        success: "text-green-500",
        error: "text-red-500",
        info: "text-blue-500",
    }[type];

    return (
        <div
            className={`fixed bottom-4 right-4 z-50 flex items-center gap-3 px-4 py-3 rounded-lg border shadow-lg ${bgColor} animate-slide-up`}
            role="alert"
        >
            <div className={iconColor}>
                {type === "success" && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                )}
                {type === "error" && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                )}
                {type === "info" && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                )}
            </div>
            <p className={`text-sm font-medium ${textColor}`}>{message}</p>
            <button
                onClick={onClose}
                className={`ml-2 p-1 rounded hover:bg-black/5 transition-colors ${textColor}`}
                aria-label="Close notification"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    );
}

interface ToastState {
    message: string;
    type: ToastType;
    id: number;
}

export function useToast() {
    const [toast, setToast] = useState<ToastState | null>(null);

    const showToast = useCallback((message: string, type: ToastType = "info") => {
        setToast({ message, type, id: Date.now() });
    }, []);

    const hideToast = useCallback(() => {
        setToast(null);
    }, []);

    return { toast, showToast, hideToast };
}
