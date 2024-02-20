interface ButtonProps {
  buttonName: string;
  handelClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  buttonName,
  handelClick,
  ...props
}) => {
  return (
    <>
      <button
        type="submit"
        onClick={handelClick}
        className="border-2 rounded-md border-red-600 p-2 "
        {...props}
      >
        {buttonName}
      </button>
    </>
  );
};
export default Button;
