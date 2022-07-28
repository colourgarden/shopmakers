const createCSP = (nonce: string): string => {
  return `script-src 'nonce-${nonce}' 'strict-dynamic' 'unsafe-inline' 'unsafe-eval' 'self';`;
};

export default createCSP;
