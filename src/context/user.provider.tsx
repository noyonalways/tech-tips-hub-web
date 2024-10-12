"use client";

import { TLoggedInUser } from "@/types";
import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { getCurrentUser } from "./../services/auth";

interface IUserProviderValues {
  user: TLoggedInUser | null;
  isLoading: boolean;
  setUser: (user: TLoggedInUser | null) => void;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

interface IProps {
  children: ReactNode;
}

const UserContext = createContext<IUserProviderValues | undefined>(undefined);

const UserProvider: FC<IProps> = ({ children }) => {
  const [user, setUser] = useState<TLoggedInUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleUser = async () => {
    const currentUser = await getCurrentUser();
    setUser(currentUser);
    setIsLoading(false);
  };

  useEffect(() => {
    handleUser();
  }, [isLoading]);

  return (
    <UserContext.Provider value={{ user, setUser, isLoading, setIsLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider context");
  }

  return context;
};

export default UserProvider;
