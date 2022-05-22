import '../style/App.scss';
import { useDispatch, useSelector } from 'react-redux';

function App() {
	const count = useSelector(state => state.count);
	const dispatch = useDispatch();
	const add = () => {
		dispatch({ type: 'add' })
	};
	const remove = () => {
		dispatch({ type: 'remove' })
	};
	return (
		<div className='box'>
			<button className='remove' onClick={remove}>Минус</button>
			<div className='count'>{count}</div>
			<button className='add' onClick={add}>Добавить</button>
		</div>
	);
}

export default App;
