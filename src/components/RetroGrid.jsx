import { cn } from "../lib/utils";
import PropTypes from "prop-types";

export function RetroGrid({ className, angle = 65 }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute size-full overflow-hidden opacity-50 [perspective:200px]",
        className
      )}
      style={{ "--grid-angle": `${angle}deg` }}
    >
      {/* Grid */}
      <div className="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
        <div
          className={cn(
            "animate-grid",
            "[background-repeat:repeat] [background-size:60px_60px] [height:300vh] [inset:0%_0px] [margin-left:-50%] [transform-origin:100%_0_0] [width:600vw]",
            // Light Styles
            "[background-image:linear-gradient(to_right,rgba(0,0,0,0.5)_1px,transparent_0),linear-gradient(to_bottom,rgba(0,0,0,0.5)_1px,transparent_0)]",
            // Dark styles - using CSS variables for better color control
            "dark:[background-image:linear-gradient(to_right,rgb(229_231_235/0.6)_1px,transparent_0),linear-gradient(to_bottom,rgb(229_231_235/0.6)_1px,transparent_0)]"
          )}
        />
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent to-90% dark:from-black dark:to-transparent" />
    </div>
  );
}

RetroGrid.propTypes = {
  angle: PropTypes.number,
  className: PropTypes.string,
};
