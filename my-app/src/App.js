import ProfileCard from './components/ProfileCard';
import './App.css';


const members = [
  { id: 1, name: 'สมหญิง ใจดี', nickname: 'ฝน',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาเขียว', 'แมว'] },
  { id: 2, name: 'เทียร์รี่ อองลี', nickname: 'อองลี',
    major: 'วิทยาศาสตร์และการกีฬา', favorites: ['ฟุตบอล', 'ครัวซอง'] },
    { id: 3, name: 'สุพัน จันอังคาร', nickname: 'กัส',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาหอมหมื่นลี้', 'หมา'] }
];

function App() {
  return (
    <div className="container">
      <h1>สมาชิกกลุ่มของเรา</h1>
      <div className="card-row">
        {members.map((m) => (
          <ProfileCard
            key={m.id}
            name={m.name}
            nickname={m.nickname}
            major={m.major}
            favorites={m.favorites}
          />
        ))}
      </div>
    </div>
  );
}

export default App;