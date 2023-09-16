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
  return (
    <div className="w-full bg-white p-3 rounded-lg flex flex-col items-start justify-start h-fit gap-4">
      <div className="w-full flex items-center justify-between gap-4">
        
      </div>
    </div>
  );
};

export default PostCard;
