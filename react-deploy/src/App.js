import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1>깃허브 페이지에 react 정적페이지 배포하기</h1>
        <a
          className='App-link'
          href='https://github.com/nostrss/react-deploy/tree/main/react-deploy'
        >
          배포 방법 보기
        </a>
      </header>
    </div>
  );
}

export default App;
