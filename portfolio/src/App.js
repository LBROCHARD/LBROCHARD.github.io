import logo from './logo.svg';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CustomBtn from './Components/CustomBtn'
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main:"#47CFFF",
    },
    secondary: {
      main:"#4B54FF",
    },
  },
  typography: {
    fontFamily: [
      'Franklin'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

function App() {
   return (
      <div className="App">
         <ThemeProvider theme={theme}>
            <CustomBtn/>
         </ThemeProvider>
      </div>
   );
}

{/* <header className="App-header">
            
   <img src={logo} className="App-logo" alt="logo" />
   
   <p>
      Edit <code>src/App.js</code> and save to reload.
   </p>

   <a className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
   > Learn React </a>

</header> */}

export default App;
