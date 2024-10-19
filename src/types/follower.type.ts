export interface IUFollower {
  _id: string;
  follower: IFollower;
}

export interface IFollower {
  _id: string;
  fullName: string;
  username: string;
  email: string;
  designation: string;
  profilePicture: string;
  totalFollowers: number;
  totalFollowing: number;
}


export interface IUFollowing {
  _id: string;
  following: IFollowing;
}

export interface IFollowing {
  _id: string;
  fullName: string;
  username: string;
  email: string;
  designation: string;
  profilePicture: string;
  totalFollowers: number;
  totalFollowing: number;
}
