// External dependencies
import { forwardRef } from 'react';

// Component
const Code = forwardRef<HTMLElement, BlogCodeProps>(
  ({ className, ...props }, ref) => {
    return (
      <code
        ref={ref}
        className={
          className
            ? `${className} max-h-3/4 block overflow-auto px-2 py-6 md:px-2 md:py-4`
            : 'rounded bg-light-cornflower-blue-200 px-1 py-0.5'
        }
        {...props}
      />
    );
  },
);
Code.displayName = 'Code';

export default Code;
