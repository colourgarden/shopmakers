const getLanguageName = (locale: string) => {
  switch (locale) {
    case 'en':
      return 'English';
    case 'es':
      return 'Español';
    case 'it':
      return 'Italiano';
    default:
      break;
  }
};
export default getLanguageName;
