import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FaSpinner } from "react-icons/fa6";

type Props = {
  loading?: boolean;
  disabled?: boolean;
  text?: string;
  className?: string;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
  beforeIcon?: React.ReactNode;
  afterIcon?: React.ReactNode;
};

const GiddaaButton = (props: Props) => {
  return (
    <Button
      type={props.type || "submit"}
      disabled={props.loading || props.disabled}
      className={cn(
        "rounded-full px-6 py-2 text-white bg-giddaa-500 hover:bg-giddaa-600 ",
        props.className
      )}
      onClick={props.onClick}
    >
      {props.loading ? (
        <FaSpinner className="mr-2 size-4 animate-spin" />
      ) : (
        <span className="flex gap-3 items-center">
            {props.beforeIcon}
            {props.text || "Click"}
            {props.afterIcon}
            </span>
      )}
    </Button>
  );
};

export default GiddaaButton;
