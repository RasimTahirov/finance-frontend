import { email, name } from "../../../utils/userData";
import avatar from '../../../../public/assets/avatar/image.png'

const ProfileCard = () => {
  return (
    <div className="flex gap-5">
      <img className="w-28 rounded-[50%]" src={avatar} alt={name} />
      <div className="grid">
        <input disabled value={name} />
        <input disabled value={email} />
      </div>
    </div>
  );
};

export default ProfileCard