import { checkBoxProps } from "@/hooks/types";

const Checkbox = ({ className, ...props }:checkBoxProps) => {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'rounded-circle ' +
                className
            }
        />
    );
}

export default Checkbox;
