import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './About';
// import { render } from 'react-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      {/* We add route with path='/' to introduce index here. This will render only about for path='/about' */}
      <Route path='/*' element={<App/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
  </BrowserRouter>
)

//V2 version render()
// render(
//   <BrowserRouter>
//     <Routes>
//       {/* We add route with path='/' to introduce index here. This will render only about for path='/about' */}
//       <Route path='/' element={<App/>}/>
//       <Route path='/about' element={<About/>}/>
//     </Routes>
//   </BrowserRouter>,
//   document.getElementById('root')
// )

//V1 error 
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         {/* We add route with path='/' to introduce index here. This will render only about for path='/about' */}
//         <Route path='/' element={<App/>}>
//           <Route path='about' element={<About/>}/>
//         </Route>
    
//       </Routes>
//     </BrowserRouter>
//     <App />
//   </React.StrictMode>
// );



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
