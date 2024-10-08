import { twMerge } from "tailwind-merge";

const Logo = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge(className)}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 60C38.1371 60 60 38.1371 60 0C60 38.1371 81.8629 60 120 60C81.8629 60 60 81.8629 60 120C60 81.8629 38.1371 60 0 60Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Logo;
