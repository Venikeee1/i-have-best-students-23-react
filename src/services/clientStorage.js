export const setItem = (payload) => {
  try {
    localStorage.setItem('state', JSON.stringify(payload));
  } catch (error) {
    console.error(error);
  }
};

export const getItem = () => {
  try {
    const serializedData = localStorage.getItem('state');
    return serializedData ? JSON.parse(serializedData) : undefined;
  } catch (error) {
    return undefined;
  }
};
