// import React from 'react'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Button,
    Card,
    Grid,
    CardContent,
} from '@mui/material';
import SuccessMsg from './SuccessMsg';

const SubTopicAdd = () => {
    const [successMessageOpen, setSuccessMessageOpen] = useState(false);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
        boardID: '',
        subjectID: '',
        subjectlevelID: '',
        sourceID: '',
        paperID: '',
        topicID: '', 
        subtopicName: '', 
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://staging.ibgakiosk.com/api/category_list');
                setCategories(response.data?.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('https://staging.ibgakiosk.com/api/add_subtopic', formData);
            console.log('Response from server:', response.data);
            setFormData({
                boardID: '',
                subjectID: '',
                subjectlevelID: '',
                sourceID: '',
                paperID: '',
                topicID: '', 
                subtopicName: '', 
            });
            setSuccessMessageOpen(true);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };
    const handleCloseSuccessMessage = () => {
        setSuccessMessageOpen(false); 
    };
console.log(formData,"check")
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Card>
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4} ms={6} sx={{ marginTop: '16px' }}>
                                <FormControl fullWidth size="small" className='mt-3'>
                                    <InputLabel htmlFor="board">Board</InputLabel>
                                    <Select
                                        label="Board"
                                        id="boardID"
                                        name="boardID"
                                        value={formData.boardID}
                                        onChange={handleChange}
                                        sx={{ height: '35px' }}
                                    >
                                     
                                     {categories.map(category => (
                                                <MenuItem key={category.board_id} value={category.board_id}>{category.board_name}</MenuItem>
                                            ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                      <Grid item xs={12} md={4} ms={6} sx={{ marginTop: '16px' }}>
                                <FormControl fullWidth size="small" className='mt-3'>
                                    <InputLabel htmlFor="subjectName">Subject Name</InputLabel>
                                    <Select
                                        label="Subject Name"
                                        id="subjectID"
                                            name="subjectID"
                                        value={formData.subjectID}
                                        onChange={handleChange}
                                        sx={{ height: '35px' }}
                                    >
                                       {categories.map(category => (
    category.subject.map(subject => (
        <MenuItem key={subject.subject_id} value={subject.subject_id}>
            {subject.subject_name}
        </MenuItem>
    ))
))}
                                    </Select>
                                </FormControl>
                            </Grid>
                      <Grid item xs={12} md={4} ms={6} sx={{ marginTop: '16px' }}>
                                <FormControl fullWidth size="small" className='mt-3'>
                                    <InputLabel htmlFor="subjectLevel">Subject Level</InputLabel>
                                    <Select
                                        label="Subject Level"
                                        id="subjectlevelID"
                                        name="subjectlevelID"
                                         value={formData.subjectlevelID}
                                        onChange={handleChange}
                                        sx={{ height: '35px' }}
                                    >
                                        
                                        {categories.map(category => (
    category.subject.map(subject => (
        subject.subject_level.map(level => (
            <MenuItem key={level.subject_lev_id} value={level.subject_lev_id}>
                {level.subject_lev_name}
            </MenuItem>
        ))
    ))
))}
                                    </Select>
                                </FormControl>
                            </Grid>
                      <Grid item xs={12} md={4} ms={6} sx={{ marginTop: '16px' }}>
                                <FormControl fullWidth size="small" className='mt-3'>
                                    <InputLabel htmlFor="sourceLevel">Source Level</InputLabel>
                                    <Select
                                        label="Source Level"
                                        id="sourceID"
                                        name="sourceID"
                                        value={formData.sourceID}
                                        onChange={handleChange}
                                        sx={{ height: '35px' }}
                                    >
                                       
                                       {categories.map(category => (
    category.subject.map(subject => (
        subject.subject_level.map(level => (
            level.source.map(source => (
                <MenuItem key={source.source_id} value={source.source_id}>
                    {source.source_name}
                </MenuItem>
            ))
        ))
    ))
))}
                                    </Select>
                                </FormControl>
                            </Grid>
                      <Grid item xs={12} md={4} ms={6} sx={{ marginTop: '16px' }}>
                                <FormControl fullWidth size="small" className='mt-3'>
                                    <InputLabel htmlFor="paperBook">Paper/Book</InputLabel>
                                    <Select
                                        label="Paper/Book"
                                        id="paperID" 
                                        name="paperID"
                                        value={formData.paperID}
                                        onChange={handleChange}
                                        sx={{ height: '35px' }}
                                    >
                                       
                                       {categories.map(category => (
    category.subject.map(subject => (
        subject.subject_level.map(level => (
            level.source.map(source => (
                source.paper.map(paper => (
                    <MenuItem key={paper.paper_id} value={paper.paper_id}>
                        {paper.paper_name}
                    </MenuItem>
                ))
            ))
        ))
    ))
))}

                                    </Select>
                                </FormControl>
                            </Grid>
                      <Grid item xs={12} md={4} ms={6} sx={{ marginTop: '16px' }}>
                                <FormControl fullWidth size="small" className='mt-3'>
                                    <InputLabel htmlFor="topic">Topic</InputLabel>
                                    <Select
                                        label="Topic"
                                        id="topicID"
                                        name="topicID"
                                        value={formData.topicID}
                                        onChange={handleChange}
                                        sx={{ height: '35px' }}
                                    >
                                       
                                       {categories.map(category => (
    category.subject.map(subject => (
        subject.subject_level.map(level => (
            level.source.map(source => (
                source.paper.map(paper => (
                    paper.topic.map(topic => (
                        <MenuItem key={topic.topic_id} value={topic.topic_id}>
                            {topic.topicName}
                        </MenuItem>
                    ))
                ))
            ))
        ))
    ))
))}

                                    </Select>
                                </FormControl>
                            </Grid>
                      <Grid item xs={12} md={4} ms={6} >
                                <TextField
                                    label="Sub Topic"
                                    id="subtopicName"
                                    name="subtopicName"
                                    fullWidth
                                    required
                                    variant="outlined"
                                    margin="normal"
                                    value={formData.subtopicName}
                                    onChange={handleChange}
                                    InputProps={{ style: { height: 'auto' } }}
                                    InputLabelProps={{ shrink: true }}
                                    size="small"
                                />
                            </Grid>
                            <Grid item xs={12} sx={{ textAlign: 'right', mt: 2 }}>
                                <Button type="submit" variant="contained" sx={{ color: 'white', background: 'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important' }}>
                                    Save
                                </Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </form>
            <SuccessMsg  message="Data saved successfully!" open={successMessageOpen} onClose={handleCloseSuccessMessage} />
       
        </div>
    );
}

export default SubTopicAdd;

// import {
   
//   FormControl,
//   InputLabel,
//   MenuItem,
//   Select,
//   TextField,
//   Button,
//   Card,
//   Grid,
//   CardContent,
// } from '@mui/material';
// const SubTopicAdd = () => {
//   const handleSubmit = (event) => {
//     event.preventDefault();
    
//   }; 
//   return (
//     <div>
//           <form onSubmit={handleSubmit}>
//             <Card>
//               <CardContent>
//                 <Grid container spacing={2}>
//                 <Grid item xs={12} md={4} ms={6} sx={{ marginTop: '16px' }}>
//                           <FormControl fullWidth size="small"  className='mt-3'>
//                         <InputLabel htmlFor="subjectLevel">Board</InputLabel>
//                         <Select label="Board" id="subjectLevelID" sx={{height:'35px'}}>
//                         <MenuItem value="">Select Board Type</MenuItem>
//                           <MenuItem value="1">IB DP</MenuItem>
//                           <MenuItem value="2">IGCSE</MenuItem>
//                           <MenuItem value="3">IB MYP</MenuItem>
//                         </Select>
//                       </FormControl>
//                     </Grid>
                 
//                     <Grid item xs={12} md={4} ms={6} sx={{ marginTop: '16px' }}>
//                           <FormControl fullWidth size="small"  className='mt-3'>
//                         <InputLabel htmlFor="subjectLevel">Subject Name</InputLabel>
//                         <Select label="Subject Name" id="subjectLevelID" sx={{height:'35px'}} >
//                           <MenuItem value="">Select board Level</MenuItem>
//                           <MenuItem value="A">slect board first</MenuItem>
//                                                </Select>
//                       </FormControl>
//                     </Grid>
//                     <Grid item xs={12} md={4} ms={6} sx={{ marginTop: '16px' }}>
//                           <FormControl fullWidth size="small"  className='mt-3'>
//                         <InputLabel htmlFor="subjectLevel">Subject Level</InputLabel>
//                         <Select label="Subject Level" id="subjectLevelID" sx={{height:'35px'}}>
//                           <MenuItem value="">Select Level</MenuItem>
//                           <MenuItem value="A">slect board first</MenuItem>
//                            </Select>
//                       </FormControl>
//                     </Grid>
//                     <Grid item xs={12} md={4} ms={6} sx={{ marginTop: '16px' }}>
//                           <FormControl fullWidth size="small"  className='mt-3'>
//                         <InputLabel htmlFor="subjectLevel">Source Level</InputLabel>
//                         <Select label="Source Level" id="subjectLevelID" sx={{height:'35px'}}>
//                           <MenuItem value="">Select Level</MenuItem>
//                           <MenuItem value="A">slect board first</MenuItem>
//                            </Select>
//                       </FormControl>
//                     </Grid>
//                     <Grid item xs={12} md={4} ms={6} sx={{ marginTop: '16px' }}>
//                           <FormControl fullWidth size="small"  className='mt-3'>
//                         <InputLabel htmlFor="subjectLevel">Paper/Book</InputLabel>
//                         <Select label="Source Level" id="subjectLevelID" sx={{height:'35px'}}>
//                           <MenuItem value="">Select Level</MenuItem>
//                           <MenuItem value="A">slect board first</MenuItem>
//                            </Select>
//                       </FormControl>
//                       </Grid>
                      
//                       <Grid item xs={12} md={4} ms={6} sx={{ marginTop: '16px' }}>
//                           <FormControl fullWidth size="small"  className='mt-3'>
//                         <InputLabel htmlFor="subjectLevel">Topic</InputLabel>
//                         <Select label="Paper Level" id="subjectLevelID" sx={{height:'35px'}}>
//                           <MenuItem value="">Select Level</MenuItem>
//                           <MenuItem value="A">slect board first</MenuItem>
//                            </Select>
//                       </FormControl>
//                     </Grid>
//             <Grid item xs={12} md={4} ms={6} sx={{ marginTop: '16px' }}>
//                     <TextField
//                       label=" Sub Topic"
//                       id="anotherFieldID"
//                        fullWidth
//                  required
//                 variant="outlined"
//                     margin="normal"
//                   InputProps={{
//                  style: { height: 'auto' },
//                     }}
//                   InputLabelProps={{
//                     shrink: true, 
//                     }}
//                      size="small" 
//                     />
//                   </Grid>
//                   <Grid item xs={12} sx={{ textAlign: 'right', mt: 2 }}>
//                   <Button type="submit" variant="contained" sx={{color:'white',  background: 'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important'}}>
//                  Save
//                 </Button>
//                   </Grid>
//                 </Grid>
//               </CardContent>
//             </Card>
//           </form>
//     </div>
//   )
// }

// export default SubTopicAdd