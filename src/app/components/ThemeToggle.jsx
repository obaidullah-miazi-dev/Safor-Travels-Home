"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { flushSync } from "react-dom";
import { cn } from "@/lib/utils";

export default function ThemeToggle({ className, duration = 400, ...props }) {
    const [isDark, setIsDark] = useState(false);
    const buttonRef = useRef(null);

    useEffect(() => {
        // Sync state with localStorage on mount
        const theme = localStorage.getItem("theme");
        if (theme === "dark") {
            setIsDark(true);
            document.documentElement.classList.add("dark");
        } else {
            setIsDark(false);
            document.documentElement.classList.remove("dark");
        }
    }, []);

    const toggleTheme = useCallback(async () => {
        if (!buttonRef.current) return;

        // Fallback for browsers that don't support startViewTransition
        if (!document.startViewTransition) {
            const newTheme = !isDark;
            setIsDark(newTheme);
            document.documentElement.classList.toggle("dark");
            localStorage.setItem("theme", newTheme ? "dark" : "light");
            return;
        }

        await document.startViewTransition(() => {
            flushSync(() => {
                const newTheme = !isDark;
                setIsDark(newTheme);
                if (newTheme) {
                    document.documentElement.classList.add("dark");
                } else {
                    document.documentElement.classList.remove("dark");
                }
                localStorage.setItem("theme", newTheme ? "dark" : "light");
            });
        }).ready;

        const { top, left, width, height } = buttonRef.current.getBoundingClientRect();
        const x = left + width / 2;
        const y = top + height / 2;
        const maxRadius = Math.hypot(
            Math.max(left, window.innerWidth - left),
            Math.max(top, window.innerHeight - top)
        );

        document.documentElement.animate(
            {
                clipPath: [
                    `circle(0px at ${x}px ${y}px)`,
                    `circle(${maxRadius}px at ${x}px ${y}px)`,
                ],
            },
            {
                duration,
                easing: "ease-in-out",
                pseudoElement: "::view-transition-new(root)",
            }
        );
    }, [isDark, duration]);

    return (
        <button
            ref={buttonRef}
            onClick={toggleTheme}
            className={cn("relative p-2 rounded-full cursor-pointer transition-colors", className)}
            {...props}
        >
            {isDark ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-slate-700" />}
            <span className="sr-only">Toggle theme</span>
        </button>
    );
}
