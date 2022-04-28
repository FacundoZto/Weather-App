import Card from './Card.jsx';
import s from './styles/Cards.module.css';

const Cards = ({cities, handleClose}) => {
	return(
		<div className={s.container}>
		{
			cities.map(c => (
			<Card
				key={c.id}
				id={c.id}
				name={c.name}
				country={c.sys.country}
				coord={c.coord}
				feels_like={c.main.feels_like}
				humidity={c.main.humidity}
				pressure={c.main.pressure}
				temp={c.main.temp}
				max={c.main.temp_max}
				min={c.main.temp_min}
				visibility={c.visibility}
				description={c.weather[0].description}
				wind={c.speed}
				img={c.weather[0].icon}
				handleClose={handleClose}
			/>
				))
		}
		</div>
		)
}

export default Cards;