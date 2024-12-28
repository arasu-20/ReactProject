import { Card, CardContent, Typography, CardActions, Button} from '@mui/material';
function TodoItem({todos, fetchDetailsOfCurrentTodo}){
    return(
        <Card sx={{
            maxWidth: 350,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
        }}>
            <CardContent>
                <Typography variant='h5' color='text.secondary'>{todos?.todo || "No details available"}</Typography>
            </CardContent>
            <CardActions>
                <Button onClick={()=>fetchDetailsOfCurrentTodo(todos?.id)} sx={{
                    backgroundColor: 'black',
                    color: 'white',
                    opacity:'0.70',
                    '&:hover':{
                        backgroundColor: 'black',
                    color: 'white',
                    opacity:'1'
                    }
                }}>
                    Details
                </Button>
            </CardActions>
        </Card>
    )
}
export default TodoItem;