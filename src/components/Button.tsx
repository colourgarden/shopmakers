const Button = ({ dataAnalytics = '', href, text }: ButtonProps) => {
  return (
    <a
      {...(dataAnalytics ? { 'data-analytics': dataAnalytics } : {})}
      className='inline-block w-fit rounded-full bg-selective-yellow py-2 px-4 text-prussian-blue hover:bg-selective-yellow-300'
      href={href}>
      {text}
    </a>
  );
};

export default Button;
