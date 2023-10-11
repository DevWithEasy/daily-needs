interface IInput {
    label: string
    name: string
    placeholder: string
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const Input = ({ label, name,placeholder, handleChange }: IInput) => {
    return (
        <div
            className="space-y-2"
        >
            <label>{label} :</label>
            <input
                name={name}
                onChange={handleChange}
                placeholder={placeholder}
                className="w-full p-2 border focus:border focus:outline-green-400 rounded"
                required
            />
        </div>
    );
};

export default Input;
