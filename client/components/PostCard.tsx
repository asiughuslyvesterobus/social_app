import Link from "next/link";

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
        <div className="flex items-start justify-start gap-2">
          <Link href={`/profile/${post.id}`}></Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
