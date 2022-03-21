import Header from "./components/Header";
import Timer from "./components/Timer";
import {Stack} from '@chakra-ui/react'
function App() {
  return(
    <>
    <Stack spacing={8}>
      <Header/>
      <Timer/>
    </Stack>
     
    </>
  );
}

export default App;
