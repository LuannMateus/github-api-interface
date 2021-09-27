import { createContext, FC, ReactNode, useState } from 'react';
import { User } from '../models/User';
import { UserService } from '../service/userService';

type UserProviderProps = {
  children: ReactNode;
};

type UserContextProps = {
  user: User;
  handleUser: (username: string) => void;
};

const initialUserState = {
  avatar_url: '',
  blog: '',
  company: '',
  location: '',
  login: '',
  name: '',
};

export const UserContext = createContext<UserContextProps>({
  user: initialUserState,
  handleUser: () => {},
});

const UserProvider: FC<UserProviderProps> = ({ children }) => {
  const userService = new UserService();

  const [user, setUser] = useState(initialUserState);

  const handleUser = async (username: string) => {
    const userPayload = await userService.findUser(username);

    setUser(userPayload);
  };

  return (
    <UserContext.Provider value={{ user, handleUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider };
