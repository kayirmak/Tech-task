import { GitHubUser } from "../../../shared/api/types";
import group_icon from "../assets/group.svg";
import person_icon from "../assets/person.svg";

function Profile({ user }: { user: GitHubUser | null }) {
  if (!user) return;

  return (
    <div>
      <img
        className="block bg-black w-[280px] h-[280px] rounded-full"
        src={user.avatar_url}
        alt={user.login}
      />
      <h2 className="font-semibold text-[26px] leading-8 mt-7">{user.name}</h2>
      <a
        className="text-[#0064EB] leading-5 mt-3"
        target="_blank"
        href={user.html_url}
      >
        {user.login}
      </a>
      <div className="flex gap-x-5 mt-6">
        <div className="flex gap-x-2">
          <img src={group_icon} />
          <p className="leading-6">{user.followers} followers</p>
        </div>
        <div className="flex gap-x-2">
          <img src={person_icon} />
          <p>{user.following} following</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
