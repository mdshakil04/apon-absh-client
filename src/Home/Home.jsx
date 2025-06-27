import Banner from './Hero/Banner';
import Featured from './Featured/Featured';
import Info from './Info/Info';
import BestDeal from './BestDeal/BestDeal';
import Property from '../Property/Property';
import ContactUs from '../ContactUs/ContactUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Featured></Featured>
            <Info></Info>
            <BestDeal></BestDeal>
            <Property></Property>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;