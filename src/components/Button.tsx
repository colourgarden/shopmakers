const Button = ({ onClick, href, text }: ButtonProps) => {
  return (
    <a
      onClick={onClick}
      className="inline-block w-fit rounded-full bg-selective-yellow py-2 px-4 text-prussian-blue hover:bg-selective-yellow-300"
      href={href}>
      {text}
    </a>
  );
};

export default Button;
