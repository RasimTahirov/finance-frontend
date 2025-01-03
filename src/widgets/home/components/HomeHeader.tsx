import { userName } from '../../../utils/userData'
import hello from '../../../../public/assets/icon/hello.svg'

const HomeHeader = () => {
	return (
		<div className="flex justify-between card mb-2.5">
			<div className="flex gap-2.5">
				<span>С возвращением, {userName}</span>
				<img src={hello} alt="hello" className="w-5" />
			</div>
		</div>
	)
}

export default HomeHeader
