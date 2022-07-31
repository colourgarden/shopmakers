const Section = ({
  id = '',
  classes = '',
  withContainer = true,
  children,
}: SectionProps) => {
  return (
    <section id={id} className={classes}>
      {withContainer ? (
        <div className='container mx-auto px-4 py-20 md:py-40 lg:px-0'>
          {children}
        </div>
      ) : (
        ''
      )}
    </section>
  );
};

export default Section;
