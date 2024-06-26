// import React from 'react';
// import { Container, Grid, Card, CardHeader, CardContent, Typography, Collapse, IconButton, List, ListItem, ListItemText, ListItemIcon, CardActions, Badge } from '@mui/material';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// const segments = [
//   {
//     id: 5586742,
//     title: "Q",
//     text: (
//       <p>
//         Shown is a Spinner.<br /><br />
//         <img height="98" src="https://res1.assessprep.com/pictures/images/000/014/703/original/image.png" width="125" alt="Spinner" /><br />
//         The probability of a 1 is 2x.<br />
//         The probability of a 2 is x.<br />
//         The probability of a 3 is 2x.&nbsp;
//       </p>
//     )
//   },
//   {
//     id: 5586743,
//     title: "Q 1.1",
//     text: (
//       <p>Calculate the value of x.&nbsp;</p>
//     ),
//     answer: "A 2"
//   },
//   {
//     id: 5586744,
//     title: "Q 1.2",
//     text: (
//       <p>
//         The Spinner is spun twice and scores are added together.<br />
//         Find the probability of the final score being 4.<br />
//         You may use the tree diagram to help you.&nbsp;
//       </p>
//     ),
//     answer: "A 4",
//     interactiveQuestion: true
//   }
// ];

// const QuestionPaper = () => {
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <Container>
//       <Grid container spacing={2}>
//         <Grid item xs={12}>
//           <Typography variant="h4" component="h3" style={{ paddingLeft: 20 }}>
//             Tree Diagram-1
//           </Typography>
//           <List>
//             {segments.map(segment => (
//               <ListItem key={segment.id} style={{ display: 'inline-block' }}>
//                 <Card style={{ margin: '10px' }}>
//                   <CardHeader />
//                   <CardContent>
//                     <Grid container>
//                       <Grid item xs={1}>
//                         <ListItemText primary={segment.title} />
//                       </Grid>
//                       <Grid item xs={segment.answer ? 8 : 10}>
//                         <ListItemText primary={<div className="show-html">{segment.text}</div>} />
//                       </Grid>
//                       {segment.answer && (
//                         <Grid item xs={2} style={{ textAlign: 'right' }}>
//                           <Badge badgeContent={segment.answer} color="primary" />
//                         </Grid>
//                       )}
//                     </Grid>
//                   </CardContent>
//                   {segment.interactiveQuestion && (
//                     <CardContent>
//                       <div className="canvas-container" style={{ width: 352, height: 226, border: '1px solid', position: 'relative' }}>
//                         <canvas className="lower-canvas" width="352" height="226" style={{ position: 'absolute', width: 352, height: 226 }} />
//                         <canvas className="upper-canvas" width="352" height="226" style={{ position: 'absolute', width: 352, height: 226 }} />
//                       </div>
//                     </CardContent>
//                   )}
//                   <CardActions disableSpacing>
//                     <IconButton
//                       onClick={handleExpandClick}
//                       aria-expanded={expanded}
//                       aria-label="show more"
//                     >
//                       <ExpandMoreIcon />
//                     </IconButton>
//                     <Typography>Teacher's explanation</Typography>
//                   </CardActions>
//                   <Collapse in={expanded} timeout="auto" unmountOnExit>
//                     <CardContent>
//                       <Typography paragraph>Explanation content goes here.</Typography>
//                     </CardContent>
//                   </Collapse>
//                 </Card>
//               </ListItem>
//             ))}
//           </List>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default QuestionPaper