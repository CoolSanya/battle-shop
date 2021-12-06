import Input, { IBaseInputProps } from "./Input";

export interface IBaseInputGroupProps extends IBaseInputProps {
  label: string;
  errors: Array<string>;
}

const InputGroup = ({
  value,
  field,
  onChange,
  label,
  errors,
  type = "text",
}: IBaseInputGroupProps) => {
  return (
    <div className="mb-3">
      <label htmlFor={field} className="form-label">
        {label}
      </label>
      <Input
        value={value}
        onChange={onChange}
        field={field}
        type={type}
        className="form-control"
      />
      {errors &&
        errors.map((text, key) => {
          return (
            <span className="text-danger" key={key}>
              {text}
            </span>
          );
        })}
    </div>
  );
};

export default InputGroup;
