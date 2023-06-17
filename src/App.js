import './App.css'
import './assets/css/google-icons.css'
import { AppendAvatar } from './components/AppendAvatar';
import { AvatarList } from './components/AvatarList';

function App() {
	return (
		<div className='app'>
			<AppendAvatar />
			<AvatarList />
		</div>
	);
}

export default App;
