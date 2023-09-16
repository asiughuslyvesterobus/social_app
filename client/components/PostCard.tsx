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
  return <div>PostCard</div>;
};

export default PostCard;
