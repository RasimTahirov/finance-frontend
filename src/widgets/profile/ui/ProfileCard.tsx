import useUserData from '@/shared/hooks/useUserData'

const ProfileCard = () => {
  const { name, email } = useUserData()

  return (
    <div className="grid">
      <input disabled value={name} />
      <input disabled value={email} />
    </div>
  )
}

export default ProfileCard
