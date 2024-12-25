import ProfileCard from './components/ProfileCard'
import CategoryActions from './components/CategoryActions'
import CategoryList from './components/CategoryList'

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
