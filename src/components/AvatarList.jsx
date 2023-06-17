import { useSelector } from 'react-redux';

export const AvatarList = () => {
	const avatars = useSelector(state => [...state.avatars.value])
	const lastAvatar = avatars.pop()
	const preAvatar = avatars.pop()

	return (
		<div className='avatars'>
			{preAvatar && <div className="avatar-pre" style={{backgroundImage: `url(${preAvatar})`}}/>}
			<div className="avatar-last" style={{backgroundImage: `url(${lastAvatar})`}}/>
			{avatars.map((o) => (
				<div className="avatar-other" style={{backgroundImage: `url(${o})`}}/>
			))}
		</div>
	)
}
