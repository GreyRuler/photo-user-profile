import { useDispatch } from 'react-redux';
import { add } from '../features/avatars/avatarsSlice';
import { useRef } from 'react';

export function AppendAvatar() {
	const dispatch = useDispatch()
	const fileInput = useRef(null)

	const onChange = (e) => {
		if (!e.target.files[0]) return
		let reader = new FileReader();
		reader.onload = function(evt) {
			dispatch(add(evt.target.result))
			if (fileInput.current) {
				fileInput.current.value = "";
			}
		};
		reader.readAsDataURL(e.target.files[0]);
	}

	return (
		<input type="file" onChange={onChange} ref={fileInput}/>
	)
}
