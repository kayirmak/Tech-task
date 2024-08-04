"use client";

function Spinner({
  width = "80",
  height = "80",
}: {
  width?: string;
  height?: string;
}) {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        width={width}
        height={height}
        // style={{shape-rendering: 'auto', display: 'block', background: 'rgb(255, 255, 255)'}}
        // xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <g>
          <path
            stroke="none"
            fill="#464646"
            d="M10 50A40 40 0 0 0 90 50A40 44 0 0 1 10 50"
          >
            <animateTransform
              values="0 50 52;360 50 52"
              keyTimes="0;1"
              repeatCount="indefinite"
              dur="1s"
              type="rotate"
              attributeName="transform"
            ></animateTransform>
          </path>
          <g></g>
        </g>
      </svg>
    </div>
  );
}

export default Spinner;
