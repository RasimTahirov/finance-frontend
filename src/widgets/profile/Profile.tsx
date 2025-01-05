import ProfileCard from './ui/ProfileCard'
import CategoryActions from './ui/CategoryActions'
import CategoryList from './ui/CategoryList'

const Profile = () => {
	return (
		<div className="card">
			<div className="flex justify-between">
				<ProfileCard />
				<CategoryActions />
			</div>
			<CategoryList />
		</div>
	)
}

export default Profile
