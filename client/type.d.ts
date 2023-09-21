export interface SignUpUser {
  firstName: String;
  lastName: String;
  email: String;
  userName: String;
  bio: String;
  phone: String;
  password: String;
  confirm_password: String;
  privacy_policy_accepted: boolean;
}
export interface SignInUser {
  email: String;
  password: String;
}

export interface NavIconType {
  icon: IconType;
  tooltip: string;
  href: string;
}

export interface StoryProp {
  storyImage: any;
  profileImg: any;
  profileName: String;
}
