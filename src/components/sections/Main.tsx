"use client";

import { useTheme } from "@/hooks/useTheme";
import React from "react";

export default function Main ({ children, className = "" }: {
    className: string | null;
    children: React.ReactNode;
}) {
    const [theme,] = useTheme();

    let styles = {
        backgroundImage: `url('${ `/static/bg-${ theme === "dark" ? "dark" : "light" }.webp` }')`
    }
    return (
        <div className={className} style={styles}>{children}</div>
    )
}