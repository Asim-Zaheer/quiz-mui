import React,{useMemo} from 'react'
import { Typography,Card,cardContent,CardActions,Button } from '@mui/material'
import Question from './Components/Question'

export default function Result(props) {
    const {answer , restart } =props
    const correctAnswer = useMemo(()=>{
        return Question.filter((q,i)=>{
            return q.correctAnswer=== parseInt(answer[i])
        }).length
    },[answer])
  return (
    <>
<Card variant='outlined' sx={{pt:3 , pb:3}}  >
    <cardContent>
        <Typography sx={{display:"flex" ,
        justifyContent:"center",
        mb:3
    }} variant='h4' color="success"  >
        Result

        </Typography>
        <Typography sx={{display:"flex" ,
        justifyContent:"center",
        mb:3
    }} >
        {correctAnswer}/{Question.length}

        </Typography>
    </cardContent>
    <CardActions sx={{ display: "flex", justifyContent: "center"}} >
        <button onClick={restart} variant="outlined" >
            Retry  :(
        </button>
    </CardActions>
</Card>

    </>
  )
}

 