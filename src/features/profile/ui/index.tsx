import group_icon from "../assets/group.svg";
import person_icon from "../assets/person.svg";

function Profile() {
  return (
    <div>
      <img
        className="block bg-black w-[280px] h-[280px] rounded-full"
        src=""
        alt=""
      />
      <h2 className="font-semibold text-[26px] leading-8 mt-7">Dan Abramov</h2>
      <a className="text-[#0064EB] leading-5 mt-3" href="#">
        gaearon
      </a>
      <div className="flex gap-x-5">
        <div className="flex gap-x-2">
          <img src={group_icon} />
          <p>65.8k followers</p>
        </div>
        <div className="flex gap-x-2">
          <img src={person_icon} />
          <p>171 following</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
