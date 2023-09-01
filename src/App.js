import React, { useState } from "react";
import { CssBaseline, Box, Container } from "@mui/material";
import QuestionCard from "./Components/QuestionCard";
import { purple } from "@mui/material/colors";
// import Question from "./Components/question";
import Question from "./Components/Question";
import Result from "./Result"
function App() {
  const [currQuesIndex, setCurrQuesIndex] = useState(0);
  const [answer, setAnswer] = useState([]);
  const finishedQuiz = currQuesIndex === Question.length;
  const currentQuestion = Question[currQuesIndex]
  const toNextQues =()=>{
    setCurrQuesIndex((prevState)=> prevState+1)
  }
const submit =(value)=>{
 setAnswer((prevState)=>[...prevState,value])
toNextQues()
}
const restart =()=>{
  setCurrQuesIndex(0)
  setAnswer([])
}




  return (
    <div className="App">
      <CssBaseline />
      {/* <h1 style={{backgroundColor:"rgb(255, 0, 255)" , alignItems:"center"} } >Quiz Application</h1> */}
      <Box
        sx={{
          backgroundColor: purple[400],
          height: "100vh",
          display: "flex",
          alignItems: "center",
        }}>
       
      <Container maxWidth="sm" >
       {finishedQuiz ?<Result restart={restart} answer={answer} /> : <QuestionCard questions={currentQuestion}
       
       questionsNumber={currQuesIndex+1}
       submitAns={submit}
       />}
      </Container>
      </Box>
   
    </div>
  );
}

export default App;
