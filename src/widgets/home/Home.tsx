import LastWeekFinance from './ui/LastWeekFinance'
import HomeHeader from './ui/HomeHeader'

const Home = () => {
  return (
    <div className="grid gap-y-5">
      <HomeHeader />
      <LastWeekFinance />
    </div>
  )
}

export default Home
