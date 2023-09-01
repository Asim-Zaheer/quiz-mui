// import React,{useState} from "react";
// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import RadioGroup from "@mui/material/RadioGroup";
// import  Radio  from "@mui/material/Radio";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import FormControl from "@mui/material/FormControl";

// export default function QuestionCard(props) {
//   const {questions={} , questionsNumber, submitAns} = props;
//   const [value, setValue]= useState(null)

//  const handleChangeRadio=(e)=>{
//     setValue(e.target.value)
//  }
//  const submitChange = ()=>{
//     submitAns(value)
//     setValue(null)
//  }

//   return (
//     <Box sx={{ minWidth: 275 }}>
//       <Card variant="outlined">
//         <CardContent>
//           <Typography variant="h5" component="div">
//             Questions {questionsNumber}
//           </Typography>

//           <Typography sx={{ mb: 1.5 }} color="text.secondary">
//             {questions.title}
//           </Typography>

//         <FormControl>
//             {/* <RadioGroup name="radio-group-quiz" value={value} onChange={handleChangeRadio} >
//             {questions.options.map((x,i)=>{
//                 return(

//                     <FormControlLabel key={i+1} value={i+1} control={<Radio/>} label={x.description}  />
//                 )
//             })}
//             </RadioGroup> */}
//              <RadioGroup name="radio-group-quiz" value={value} onChange={handleChangeRadio}>
//               {questions.options.map((o, i) => {
//                 return <FormControlLabel key={i + 1} value={i + 1} control={<Radio />} label={o.description} />
//               })}
//             </RadioGroup>
//         </FormControl>

//         </CardContent>
//         <CardActions>
//           <Button onChange={submitChange} disabled={!value}
//           fullWidth variant="outlined" size="small">submit here bitchhhhhhhhhhhhhhh</Button>
//         </CardActions>
//       </Card>
//     </Box>
//   );
// }

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

export default function QuestionCard(props) {
  const { questions = {}, questionsNumber, submitAns } = props;
  const [value, setValue] = useState(null);

  const handleChangeRadio = (e) => {
    setValue(e.target.value);
  };
  const submitChange = () => {
    submitAns(value);
    setValue(null);
  };

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div">
            Questions {questionsNumber}
          </Typography>

          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {questions.title}
          </Typography>

          <FormControl>
          <RadioGroup
              name="radio-group-quiz"
              value={value}
              onChange={handleChangeRadio}
            >
              {Array.isArray(questions.options) &&
                questions.options.map((o, i) => (
                  <FormControlLabel
                    key={i + 1}
                    value={i + 1}
                    control={<Radio />}
                    label={o.description}
                  />
                ))}
            </RadioGroup>
          </FormControl>
        </CardContent>
        <CardActions>
          <Button
            onClick={submitChange}
            disabled={!value}
            fullWidth
            variant="outlined"
            size="small"
          >
            Submit
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
