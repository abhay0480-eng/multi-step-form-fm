
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import { Provider } from 'react-redux'
import store from './store/store'
import MultiForm from './pages/MultiForm'

function App() {

  return (
    <>
    <Provider store={store}>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<MultiForm/>}/>
        </Route>
      </Routes>
     </BrowserRouter>
     </Provider>
    </>
  )
}

export default App
