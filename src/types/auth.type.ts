export type TLogin = {
  email: string;
  password: string;
};

export type TRegister = {
  data: {
    fullName: string;
    username: string;
    email: string;
    password: string;
    gender: string;
    dateOfBirth: string;
  };
  image?: File;
};

