import Search from './Search.jsx';
import s from './styles/Home.module.css';
import Cards from './Cards.jsx';
import {useState} from 'react';
import Swal from 'sweetalert2';


const Home = () => {
	const BASE_URL = process.env.REACT_APP_URL;
	const [cities, setCities] = useState([]);

	const handleSearch = (city) => {
		fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${BASE_URL}&units=metric`)
		.then(response => response.json())
		.then(response => {
			if(response.name){
				const location = response
				let isRepeated = cities.find(c => c.id === location.id);
				if(isRepeated){
					Swal.fire('Repeated City')
				} else{
					setCities([...cities, location]);
				}
			}else{
				Swal.fire('The city has not been found')
			}
		})	
	}
	console.log(cities);

	const handleClose = (id) => {
		const filtered = cities.filter(c => c.id !== id);
		setCities(filtered);
	}

	return(
		<div className={s.container}>
			<div className={s.search}>
				<Search handleSearch={handleSearch}/> 
			</div>
			<Cards cities={cities} handleClose={handleClose}/>
		</div>
		);
}

export default Home;