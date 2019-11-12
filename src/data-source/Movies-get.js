import breakingBad from '../assets/img/breaking-bad.jpg';
import houseOfCards from '../assets/img/house-of-cards.jpg';
import narcos from '../assets/img/narcos-netflix-poster.jpg';
import suits from '../assets/img/Suits.jpeg';
import topBoy from '../assets/img/top-boy-season-3-1.jpg';
import mindHunter from '../assets/img/mindhunter.jpg';

function getMovies() {
    return [
        { id: "mindhunter", name: "Mindhunter", logo: mindHunter },
        { id: "suits", name: "Suits", logo: suits },
        { id: "breakingbad", name: "Breaking Bad", logo: breakingBad },
        { id: "topboy", name: "Top Boy", logo: topBoy },
        { id: "houseofcards", name: "House of cards", logo: houseOfCards },
        { id: "narcos", name: "Narcos", logo: narcos }
    ]
}

export default getMovies;