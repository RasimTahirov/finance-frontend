import useUserData from '@/shared/hooks/useUserData'
import hello from '../../../../public/assets/icon/hello.svg'

const HomeHeader = () => {
  const { name } = useUserData()

  return (
    <div className="flex justify-between items-center card">
      <div className="flex gap-2.5 items-center">
        <span>С возвращением, {name}</span>
        <img src={hello} alt="hello" className="w-5" />
      </div>
      <div className="flex gap-2.5">
        <div className="flex items-center gap-2.5">
          <div className="w-3 h-3 rounded-[50%] bg-income" />
          <span>Доход</span>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="w-3 h-3 rounded-[50%] bg-expenses" />
          <span>Расход</span>
        </div>
      </div>
    </div>
  )
}

export default HomeHeader
