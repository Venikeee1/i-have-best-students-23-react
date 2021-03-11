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
    return JSON.parse(serializedData);
  } catch (error) {
    return undefined;
  }
};

const clientStorage = {
  setItem,
  getItem,
};

export default clientStorage;
