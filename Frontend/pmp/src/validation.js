
export const validateEmail = (email) => {
   const regex = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g);
   return regex.test(email)
  };

