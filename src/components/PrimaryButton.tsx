import { PrimaryButtonProps } from "@/hooks/types";

const PrimaryButton = ({ className, disabled, children, ...props }:PrimaryButtonProps) => {
    return (
        <button
            {...props}
            className={
                `bg-[#2874FC] primaryButton  hover:bg-[#fff] text-white hover:text-[#2874FC] rounded-lg py-3 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}

export default PrimaryButton;
