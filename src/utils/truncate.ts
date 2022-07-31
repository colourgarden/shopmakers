const truncateString = (string: string, max = 15) => {
  const array = string.trim().split(' ');
  const ellipsis = array.length > max ? '...' : '';

  return array.slice(0, max).join(' ') + ellipsis;
};

export default truncateString;
