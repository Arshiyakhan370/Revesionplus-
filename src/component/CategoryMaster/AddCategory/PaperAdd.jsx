// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import {
//     FormControl,
//     InputLabel,
//     MenuItem,
//     Select,
//     TextField,
//     Button,
//     Card,
//     Grid,
//     CardContent,
// } from '@mui/material';
// import SuccessMsg from './SuccessMsg';
// import { useGetCategoryListQuery } from '../../../Services/CategoryApi';

// const PaperAdd = () => {
//     const [formData, setFormData] = useState({
//       boardID: '',
//       subjectID: '',
//       subjectlevelID: '',
//       sourceID: '',
//       paperName: ''
//     });
//     const [successMessageOpen, setSuccessMessageOpen] = useState(false); 
//     const { data:categories=[], error, isLoading ,} = useGetCategoryListQuery();
   
  
//     const handleChange = (e) => {
//       const { name, value } = e.target;
//       setFormData({ ...formData, [name]: value });
//     };
  
//     const handleSubmit = async (event) => {
//       event.preventDefault();
//       try {
//         const response = await axios.post('https://staging.ibgakiosk.com/api/add_paper', formData);
//         console.log('Response from server:', response.data);
//         setFormData({
//           boardID: '',
//           subjectID: '',
//           subjectlevelID: '',
//           sourceID: '',
//           paperName: ''
//         });
//         setSuccessMessageOpen(true);
//       } catch (error) {
//         console.error('Error submitting form:', error);
//       }
//     };
  
//     const handleCloseSuccessMessage = () => {
//       setSuccessMessageOpen(false); 
//     };
//     return (
//         <div>
//           {isLoading  ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p>Error: {error.error}</p>
//       ) : (
//                 <form onSubmit={handleSubmit}>
//                     <Card>
//                         <CardContent>
//                             <Grid container spacing={2}>
//                                 <Grid item xs={12} md={4} ms={6} sx={{ marginTop: '16px' }}>
//                                     <FormControl fullWidth size="small" className='mt-3'>
//                                         <InputLabel htmlFor="board">Board</InputLabel>
//                                         <Select
//                                             label="Board"
//                                             id="boardID"
//                                             name="boardID"
//                                             value={formData.boardID}
//                                             onChange={handleChange}
//                                             sx={{ height: '35px' }}
//                                         >
//                                         {categories?.data.map(category => (
//                                                 <MenuItem key={category.board_id} value={category.board_id}>{category.board_name}</MenuItem>
//                                             ))}
//                                         </Select>
//                                     </FormControl>
//                                 </Grid>
//                                 <Grid item xs={12} md={4} ms={6} sx={{ marginTop: '16px' }}>
//     <FormControl fullWidth size="small" className='mt-3'>
//         <InputLabel htmlFor="subjectName">Subject Name</InputLabel>
//         <Select
//             label="Subject Name"
//             id="ssubjectID"
//             name="subjectID"
//             value={formData.subjectID}
//             onChange={handleChange}
//             sx={{ height: '35px' }}
//         >
// {categories?.data.map(category => (
//     category.subject.map(subject => (
//         <MenuItem key={subject.subject_id} value={subject.subject_id}>
//             {subject.subject_name}
//         </MenuItem>
//     ))
// ))}


//         </Select>
//     </FormControl>
// </Grid>
// <Grid item xs={12} md={4} ms={6} sx={{ marginTop: '16px' }}>
//     <FormControl fullWidth size="small" className='mt-3'>
//         <InputLabel htmlFor="subjectLevel">Subject Level</InputLabel>
//         <Select
//             label="Subject Level"
//             id="subjectlevelID"
//             name="subjectlevelID"
//             value={formData.subjectlevelID}
//             onChange={handleChange}
//             sx={{ height: '35px' }}
//         >
//       {categories?.data.map(category => (
//     category.subject.map(subject => (
//         subject.subject_level.map(level => (
//             <MenuItem key={level.subject_lev_id} value={level.subject_lev_id}>
//                 {level.subject_lev_name}
//             </MenuItem>
//         ))
//     ))
// ))}

//         </Select>
//     </FormControl>
// </Grid>
// <Grid item xs={12} md={4} ms={6} sx={{ marginTop: '16px' }}>
//     <FormControl fullWidth size="small" className='mt-3'>
//         <InputLabel htmlFor="sourceLevel">Source Level</InputLabel>
//         <Select
//             label="Source Level"
//             id="sourceID"
//             name="sourceID" 
//             value={formData.sourceID}
//             onChange={handleChange}
//             sx={{ height: '35px' }}
//         >
          
//           {categories?.data.map(category => (
//     category.subject.map(subject => (
//         subject.subject_level.map(level => (
//             level.source.map(source => (
//                 <MenuItem key={source.source_id} value={source.source_id}>
//                     {source.source_name}
//                 </MenuItem>
//             ))
//         ))
//     ))
// ))}

//         </Select>
//     </FormControl>
// </Grid> 
//  <Grid item xs={12} md={4} ms={6}>
//             <TextField
//                 label="Paper/Book"
//                 id="paperName"
//                 name="paperName"
//                 fullWidth
//                 required
//                 variant="outlined"
//                 margin="normal"
//                 value={formData.paperName}
//                 onChange={handleChange}
//                 InputProps={{
//                     style: { height: 'auto' },
//                 }}
//                 InputLabelProps={{
//                     shrink: true, 
//                 }}
//                 size="small" 
//             />
//         </Grid>



//                                 <Grid item xs={12} sx={{ textAlign: 'right', mt: 2 }}>
//                                     <Button type="submit" variant="contained" sx={{ color: 'white', background: 'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important' }}>
//                                         Save
//                                     </Button>
//                                 </Grid>
//                             </Grid>
//                         </CardContent>
//                     </Card>
//                 </form>
//             )}
//             <SuccessMsg
//                 open={successMessageOpen}
//                 onClose={handleCloseSuccessMessage}
//                 message="Data saved successfully"
//               />
//         </div>
//     );
// };

// export default PaperAdd;

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
import { useGetCategoryListQuery } from '../../../Services/CategoryApi';

const PaperAdd = () => {
    const { data: { data: categories } = {}, error, isLoading } = useGetCategoryListQuery();
    const [formData, setFormData] = useState({
        board_id: '',
        subject_id: '',
        subject_level_id: '',
        source_id: '',
        paper_name: ''
    });
    const [successMessageOpen, setSuccessMessageOpen] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('/api/v1/categorys/paper/create', formData);
            console.log('Response from server:', response.data);
            setFormData({
                board_id: '',
                subject_id: '',
                subject_level_id: '',
                source_id: '',
                paper_name: ''
            });
            setSuccessMessageOpen(true);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Card>
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4}>
                                <FormControl fullWidth size="small">
                                    <InputLabel htmlFor="board_id">Board</InputLabel>
                                    <Select
                                        label="Board"
                                        id="board_id"
                                        name="board_id"
                                        value={formData.board_id}
                                        onChange={handleChange}
                                    >
                                        {categories.categories.map(category => (
                                            <MenuItem key={category._id} value={category._id}>{category.board_prog_name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <FormControl fullWidth size="small">
                                    <InputLabel htmlFor="subject_id">Subject Name</InputLabel>
                                    <Select
                                        label="Subject Name"
                                        id="subject_id"
                                        name="subject_id"
                                        value={formData.subject_id}
                                        onChange={handleChange}
                                    >
                                        {formData.board_id && categories. categories.find(cat => cat._id === formData.board_id)?.subjects.map(subject => (
                                            <MenuItem key={subject._id} value={subject._id}>
                                            {subject.subject_name}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <FormControl fullWidth size="small">
                                    <InputLabel htmlFor="subject_level_id">Subject Level</InputLabel>
                                    <Select
                                        label="Subject Level"
                                        id="subject_level_id"
                                        name="subject_level_id"
                                        value={formData.subject_level_id}
                                        onChange={handleChange}
                                    >
                                        {formData.subject_id && categories. categories.find(cat => cat._id === formData.board_id)?.subjects.find(sub => sub._id === formData.subject_id)?.subjectlevels.map(level => (
                                            <MenuItem key={level._id} value={level._id}>
                                            {level.subject_level_name}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <FormControl fullWidth size="small">
                                    <InputLabel htmlFor="source_id">Source</InputLabel>
                                    <Select
                                        label="Source"
                                        id="source_id"
                                        name="source_id"
                                        value={formData.source_id}
                                        onChange={handleChange}
                                    >
                                        {formData.subject_level_id && categories. categories.find(cat => cat._id === formData.board_id)?.subjects.find(sub => sub._id === formData.subject_id)?.subjectlevels.find(level => level._id === formData.subject_level_id)?.sources.map(source => (
                                            <MenuItem key={source._id} value={source._id}>{source.source_name}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField
                                    label="Paper/Book"
                                    id="paper_name"
                                    name="paper_name"
                                    fullWidth
                                    required
                                    variant="outlined"
                                    margin="normal"
                                    value={formData.paper_name}
                                    onChange={handleChange}
                                    InputProps={{
                                        style: { height: 'auto' },
                                    }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    size="small"
                                />
                            </Grid>
                            <Grid item xs={12} sx={{ textAlign: 'right', mt: 2 }}>
                                <Button type="submit" variant="contained" color="primary">
                                    Save
                                </Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </form>
            <SuccessMsg
                open={successMessageOpen}
                onClose={() => setSuccessMessageOpen(false)}
                message="Data saved successfully"
            />
        </div>
    );
};

export default PaperAdd;





























// import {
   
//     FormControl,
//     InputLabel,
//     MenuItem,
//     Select,
//     TextField,
//     Button,
//     Card,
//     Grid,
//     CardContent,
//   } from '@mui/material';
// const PaperAdd = () => {
//     const handleSubmit = (event) => {
//         event.preventDefault();
//     }
//   return (
//     <div>
//         <form onSubmit={handleSubmit}>
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
//                         <Select label="Subject Name" id="subjectLevelID " sx={{height:'35px'}}>
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
//                   <Grid item xs={12} md={4} ms={6}>
//                     <TextField
//                       label="Paper/Book"
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

// export default PaperAdd