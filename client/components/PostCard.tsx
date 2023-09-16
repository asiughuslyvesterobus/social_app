import Image from "next/image";
import Link from "next/link";

interface PostCardProp {
  id: String | Number;
  userProfileUrl: any;
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
        <Link
          href={`/profile/${post.id}`}
          className="flex items-start justify-start gap-2"
        >
          <Image
            src={post.userProfileUrl}
            alt="User-Profile"
            width={40}
            height={40}
            className="rounded-full"
          />
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
