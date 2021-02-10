import { createContext } from 'react';

const UserContext = createContext();
UserContext.displayName = 'UserContext';

export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;
export const withUserData = (WrappedComponent) => {
  return (props) => (
    <UserConsumer>
      {(user) => <WrappedComponent {...props} user={user} />}
    </UserConsumer>
  );
};
