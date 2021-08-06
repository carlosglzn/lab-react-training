import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import { ClickablePicture } from './components/ClickablePicture';
import { Dice } from './components/Dice';
import { Carousel } from './components/Carousel';
import { NumbersTable } from './components/NumbersTable';
import { Facebook } from './components/Facebook';
import { SignupPage } from './components/SignupPage';
import { RGBColorPicker } from './components/RGBColorPicker';



function App() {

  const persons = [
    {
      lastName: 'Doe',
      firstName: 'John',
      gender: 'male',
      height: 178,
      birth: new Date('1992-07-14'),
      picture: 'https://randomuser.me/api/portraits/men/44.jpg'
    },
    {
      lastName: 'Delores',
      firstName: 'Obrien',
      gender: 'female',
      height: 172,
      birth: new Date('1988-05-11'),
      picture: 'https://randomuser.me/api/portraits/women/44.jpg'
    }
  ]

  const cards = [
    {
      type: 'Visa',
      number: '0123456789018845',
      expirationMonth: 3,
      expirationYear: 2021,
      bank: 'BNP',
      owner: 'Maxence Bouret',
      bgColor: '#11aa99',
      color: 'white'
    },
    {
      type: 'Master Card',
      number: '0123456789010995',
      expirationMonth: 3,
      expirationYear: 2021,
      bank: 'N26',
      owner: 'Maxence Bouret',
      bgColor: '#eeeeee',
      color: '#222222'
    },
    {
      type: 'Visa',
      number: '0123456789016984',
      expirationMonth: 12,
      expirationYear: 2019,
      bank: 'Name of the Bank',
      owner: "Firstname Lastname",
      bgColor: '#ddbb55',
      color: 'white'
    }
  ]

  const driver = [
    {
      name: 'Travis Kalanick',
      rating: 4.2,
      img: 'https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428',
      car: {
        model: 'Toyota Corolla Altis',
        licensePlate: 'C042DE'
      }
    },
    {
      name: 'Data Khosrowshahi',
      rating: 4.9,
      img: 'https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg',
      car: {
        model: 'Audi A3',
        licensePlate: 'BE33ER'
      }
    }
  ]


  return (
    <>
      <h1>Cards</h1>
      <div>
        {
          persons.map((card, index) => (
            <IdCard
              key={index}
              lastName={card.lastName}
              firstName={card.lastName}
              gender={card.gender}
              height={card.height}
              birth={card.birth.toString().slice(0,15)}
              picture={card.picture}
            />))
        }
      </div>
      <h1>Greetings</h1>
      <div>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      </div>
      <h1>Random</h1>
      <div>
        <Random min={1} max={6}/>
        <Random min={1} max={100}/>
      </div>
      <h1>Box Color</h1>
      <div>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>
      <h1>Credit Card</h1>
      <div>
        {
          cards.map((creditCard, index) => (
            <CreditCard
            key={index}
            type={creditCard.type}
            number={creditCard.number}
            expirationMonth={creditCard.expirationMonth}
            expirationYear={creditCard.expirationYear}
            bank={creditCard.bank}
            owner={creditCard.owner}
            bgColor={creditCard.bgColor}
            color={creditCard.color}
            />
          ))
        }
      </div>
      <h1>Rating</h1>
      <div>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>
      <h1>Driver Card</h1>
      <div>
        {
          driver.map((driverCard, index) => (
            <DriverCard
            key={index}
            name={driverCard.name}
            rating={driverCard.rating}
            img={driverCard.img}
            car={driverCard.car}
            />
          ))
        }
      </div>
      <h1>Like Button</h1>
      <LikeButton/>
      <LikeButton/>
      <h1>Clickable Picture</h1>
      <ClickablePicture />
      <h1>Dice</h1>
      <Dice />
      <h1>Carousel</h1>
      <Carousel
          imgs={[
            'https://randomuser.me/api/portraits/women/1.jpg',
            'https://randomuser.me/api/portraits/men/1.jpg',
            'https://randomuser.me/api/portraits/women/2.jpg',
            'https://randomuser.me/api/portraits/men/2.jpg'
          ]}
        />
      <h1>Numbers Table</h1>
      <NumbersTable limit={12} />
      <h1>Facebook</h1>
      <Facebook />
      <h1>SignupPage</h1>
      <SignupPage />
      <h1>RGB Color Picker</h1>
      <RGBColorPicker />
    </>
  )

}
export default App;
