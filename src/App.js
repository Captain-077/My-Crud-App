import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './Components/Css/main.css';
import AddNew from './Components/Student/AddNew';
import ListDetails from './Components/Student/ListDetails';
import Edit from './Components/Student/Edit';
import View from './Components/Student/View';
import Home from './Components/Pages/Home';
import ErrorPage from './Components/Pages/ErrorPage';
import MainHeader from './Components/Pages/MainHeader'

function App() {
  return (
<div className="App">
      <BrowserRouter>
        <Routes>

          <Route exact path="/" element={<MainHeader />} >
            <Route index element={<Home />} />
            <Route exact path="add" element={<AddNew />} />
            <Route exact path="list" element={<ListDetails />} />
            <Route exact path="edit/:id" element={<Edit />} />
            <Route exact path="view/:id" element={<View />} />
            {/* <Route exact path="*" element={<ErrorPage />} /> */}
          </Route>

        </Routes>




      </BrowserRouter>  
      </div>
  );
}

export default App;
