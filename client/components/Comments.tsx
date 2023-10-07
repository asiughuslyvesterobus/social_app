import Link from "next/link";
import { BiCommentX } from "react-icons/bi";

const Comments = () => {
  return (
    <>
      <div className="border-y border-gray-200 pt-4 px-10 bg-[#f8f8f8] lg:pb-0 pb-[100px]">
        <div className="overflow-hidden hover:overflow-scroll lg:h-[290px]">
          {[0, 1, 2, 3].map((item, index) => (
            <div className="p-2 items-center" key={index}>
              <Link href={`/profile/`}>
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8">
                    <img
                      src="/img/avatar.png"
                      className="rounded-full"
                      alt="user profile"
                    />
                  </div>
                  <div className="hidden xl:block">
                    <p className="flex gap-1 items-center text-base font-bold text-gray-900 capitalize">
                      Albert Flores
                      {/* <GoVerified className="text-blue-400" /> */}
                    </p>
                    <p className="flex gap-1 items-center text-xs font-bold text-gray-400 lowercase">
                      @albertflores
                    </p>
                  </div>
                </div>
              </Link>
              <div className="mt-3">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
                  soluta illum odit.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pb-6 px-2 md:px-10 w-full mt-3">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Add comment..."
            className="bg-gray-100 px-4 h-12 text-base font-medium border w-[100%] md:w-[500px] lg:w-[350px] border-gray-100 focus:outline-none flex-1 rounded-lg focus:border-primary"
          />
          <button className="text-base text-gray-100 bg-primary text-center rounded font-medium px-7 w-fit outline-none">
            Comment
          </button>
        </div>
      </div>
    </>
  );
};

export default Comments;

{
  /* <div className="w-full flex flex-col items-center justify-start gap-5">
<span>
  <BiCommentX className="w-14 h-14 md:w-20 md:h-20 text-basegray" />
</span>
<p className="text-2xl text-center font-semibold">
  No Comments yet!
</p>
</div> */
}
