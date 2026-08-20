import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import MovieList from './components/MovieList';
import Header from './components/Header';
import Greeting from './components/Greeting';
import Hello from './components/Hello';
import Card from './components/Card';


const students = [
  { id: 1, name: 'ฝน', year: 3 },
  { id: 2, name: 'เต้ย', year: 2 },
  { id: 3, name: 'มายด์', year: 4 },
];

function App() {
  return (
    <div>
      <Hello />        
      <Card title="ประกาศ">
        <p>สัปดาห์หน้าเรียนเรื่อง <b>State & Forms</b></p>
        <p>อย่าลืม push การบ้านขึ้น GitHub!</p>
      </Card>
      <Header />
      <MovieList />
      <h1>รายชื่อนักศึกษา</h1>
      {students.map((s) => (
        <Greeting key={s.id} name={s.name} year={s.year} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
