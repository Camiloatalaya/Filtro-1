import { useState } from 'react'
import './App.css'
const initialState = {
	valueInput: '',
	valueSelect: 'ts',
	valueRadio: true
}

function App() {
	const [value, setValue] = useState(initialState)
	const { valueInput, valueSelect, valueRadio } = value

	const handleInput = (valueInput, name) => {
		name === 'valueRadio'
			? setValue({ ...value, [name]: !valueRadio })
			: setValue({ ...value, [name]: valueInput })
	}

	return (
		<div className='App'>
			<header className='App-header'>
				<div>
					<p>
						{JSON.stringify(
							{ valueInput, valueSelect, valueRadio },
							null,
							4
						)}
					</p>
				</div>
				<form action=''>
					<input
						type='text'
						value={valueInput}
						onChange={(event) =>
							handleInput(event.target.value, 'valueInput')
						}
					/>
					<select
						value={valueSelect}
						name=''
						id=''
						onChange={(event) =>
							handleInput(event.target.value, 'valueSelect')
						}
					>
						<option value='ts'>Typescript</option>
						<option value='js'>js</option>
						<option value='boo'>bootstrap</option>
					</select>
					<input
						value={valueRadio}
						type='checkbox'
						onChange={(event) =>
							handleInput(event.target.value, 'valueRadio')
						}
					/>
				</form>
			</header>
		</div>
	)
}

export default App
