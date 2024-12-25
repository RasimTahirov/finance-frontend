import { useEffect, useState } from 'react';
import avatar from '../../../../public/assets/avatar/image.png'

const ProfileCard = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('')

  const user = () => {
    const nameLocalStorage = localStorage.getItem("name");
    const emailLocalStorage = localStorage.getItem("email");

    setName(nameLocalStorage ? JSON.parse(nameLocalStorage) : null);
    setEmail(emailLocalStorage ? JSON.parse(emailLocalStorage) : null);
  };

  useEffect(() => {
    user()
  }, [])

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