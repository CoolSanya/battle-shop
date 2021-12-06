export interface IBaseInputProps {
    value: string,
    field: string,
    className?: string,
    type?: "text" | "number"| "email" |"password",
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ value, field, onChange, className="form-control", type="text" }: IBaseInputProps) => {
    return (
        <input 
            onChange={onChange} 
            className={className}
            value={value}
            name={field}
            id={field}
            type={type} />
    )
}

export default Input;