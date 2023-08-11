import { useState, useEffect } from 'react';
import './Algo.css';

const Bars = ({ index, length, color, changeArray }) => {
	const [len, setLength] = useState(length);

	useEffect(() => {
		setLength(length);
	}, [length]);

	const colors = ['#a1bdd0', '#ff304f', '#83e85a'];  //bar na colors blue is for not sorted, red is processing, green is sorted

	let barStyle = {
		background: colors[color],
		height: length,
		marginTop: 200 - length,
		color: 'dcdcdc'
	};

	let textStyle = {
		position: 'relative',
		top: Math.floor(length / 2) - 10,
		width: length,
		left: -Math.floor(length / 2) + 11,
		background: 'transparent',
		border: 'none',
	};

	let modifiersStyle = {
		position: 'relative',
		top: length - 15,
	};

	const handleChange = (e) => {
		let val = e.target.value;
		if (val === '') {
			setLength(0);
			changeArray(index, 0);
		} else {
			val = parseInt(val);
			if (val > 200) {
				setLength(200);
				changeArray(index, 200);
			} else {
				setLength(val);
				changeArray(index, val);
			}
		}
	};

	const increment = () => {
		setLength(len + 1);
		changeArray(index, len + 1);
	};

	const decrement = () => {
		setLength(len - 1);
		changeArray(index, len - 1);
	};

	return (
		<div className='bar' style={barStyle}>
			<input
				type='number'
				style={textStyle}
				value={len}
				className='text'
				onChange={handleChange}
			/>
			<div className='quantity-nav'>
				<div
					className='quantity-button quantity-up label1'
					style={modifiersStyle}
					onClick={increment}
				>
					+
				</div>
				<div
					className='quantity-button quantity-down label1'
					style={modifiersStyle}
					onClick={decrement}
				>
					-
				</div>
			</div>
		</div>
	);
};

export default Bars;
