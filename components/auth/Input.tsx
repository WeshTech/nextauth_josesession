interface InputProps {
    type?: string;
    label: string;
    name: string;
    required: boolean;
    placeholder: string;
}


const Input = ({
    type = "text",
    label,
    name,
    required,
    placeholder,
}: InputProps) => {
  return (
    <div className="flex flex-col gap-2 w-full">
        <label htmlFor = {name}>{label}</label>
        <input 
            type = {type} 
            placeholder = {placeholder}
            required = {required}
            name = {name}
            className="h-12 rounded-md w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    </div>
  )
}

export default Input