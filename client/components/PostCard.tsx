interface PostCardProp {
  id: String | Number;
  userProfileUrl: String;
  userName: String;
  date: String | Number;
  userPost: String;
}

interface IProp {
  post: PostCardProp;
}

const PostCard = ({ post }: IProp) => {
  return <div className="w-full bg-white p-3 rounded-lg">PostCard</div>;
};

export default PostCard;
