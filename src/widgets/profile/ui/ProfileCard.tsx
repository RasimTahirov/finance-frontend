import useUserData from '@/shared/hooks/useUserData'
import avatar from '../../../../public/assets/avatar/image.png'

const ProfileCard = () => {
	const { name, email } = useUserData()

	return (
		<div className="flex gap-2.5">
			<img className="w-28 rounded-[50%]" src={avatar} alt={name} />
			<div className="grid">
				<input disabled value={name} />
				<input disabled value={email} />
			</div>
		</div>
	)
}

export default ProfileCard
