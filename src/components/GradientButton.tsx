"use client";
import React from "react";
import Link from "next/link";

interface GradientButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "filled" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function GradientButton({
  children,
  href,
  onClick,
  variant = "filled",
  size = "md",
  className = "",
}: GradientButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-bold transition-all duration-200 hover:scale-105 active:scale-95";
  
  const variants = {
    filled: "bg-gradient-to-br from-magenta to-navy text-white shadow-lg shadow-magenta/20 hover:shadow-xl hover:shadow-magenta/30",
    outline: "border-2 border-navy text-navy hover:bg-navy hover:text-white",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-8 py-3.5 text-sm",
    lg: "px-10 py-4 text-base",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
}
