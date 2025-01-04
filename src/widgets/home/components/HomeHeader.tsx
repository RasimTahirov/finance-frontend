import useUserData from '@/shared/hooks/useUserData'
import hello from '../../../../public/assets/icon/hello.svg'

const HomeHeader = () => {
	const { name } = useUserData()

	return (
		<div className="flex gap-2.5 card mb-2.5">
			<span>С возвращением, {name}</span>
			<img src={hello} alt="hello" className="w-5" />
		</div>
	)
}

export default HomeHeader
