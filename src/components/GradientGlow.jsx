import PropTypes from "prop-types";
import { cn } from "../lib/utils";

export function GlowButton({ children, className, ...props }) {
  return (
    <button
      className={cn(
        "relative inline-flex cursor-pointer items-center justify-center rounded-lg px-8 py-3 font-semibold transition-all duration-300",

        // Light & Dark Mode Support
        "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white",
        "dark:from-blue-400 dark:via-purple-400 dark:to-pink-400",

        // Pulsing glow effect when idle
        "shadow-[0_0_12px_rgba(147,51,234,0.5)] animate-pulse",

        // Hover effect: More intense glow and slight scale-up
        "hover:shadow-[0_0_24px_rgba(147,51,234,0.8),0_0_48px_rgba(147,51,234,0.6)] hover:scale-105",

        // Click effect
        "active:scale-95",

        className
      )}
      {...props}
    >
      <span className="relative inline-block bg-gradient-to-r from-white via-gray-300 to-white bg-[length:200%_100%] animate-textShimmer bg-clip-text text-transparent">
        {children}
      </span>
    </button>
  );
}

GlowButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
