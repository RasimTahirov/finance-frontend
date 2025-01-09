import ProfileCard from './ui/ProfileCard'
import CategoryActions from './ui/CategoryActions'
import CategoryList from './ui/CategoryList'

const Profile = () => {
  return (
    <div className="card">
      <div className="flex justify-between mb-2.5">
        <ProfileCard />
        <CategoryActions />
      </div>
      <div className="border opacity-50 mb-1" />
      <CategoryList />
    </div>
  )
}

export default Profile
