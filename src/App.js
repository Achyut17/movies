import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header'
import Footer from './components/footer/Footer'
import Home from './components/Home/Home'
import MovieDetail from './components/MovieDetail/MovieDetail'
import PageNotFound from './components/PageNotFound/PageNotFound'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <div className="container">
      <Routes>
      <Route path="/" Component={Home}/>
      <Route path="/movie/:imdbID" Component={MovieDetail}/>
      <Route path='*' exact={true} Component={PageNotFound}/>
      {/* USE THIS IF YOU WANT TO CHANGE THE URL WHEN INCORRECT URL IS USEL TO DISPLAY THE "/404" URL */}
      {/* <Route path="*" element={ <Navigate to="/404" replace />} /> */}
      </Routes>
      </div>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
