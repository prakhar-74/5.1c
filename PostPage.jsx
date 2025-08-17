import React, { useState } from 'react';
import {
  Container, Typography, Paper, Box, RadioGroup,
  FormControlLabel, Radio, Divider, Button
} from '@mui/material';
import QuestionForm from './QuestionForm';
import ArticleForm from './ArticleForm';

const Bar = ({ children }) => (
  <Box sx={{
    backgroundColor: '#e5e5e5',
    px: 2, py: 1,
    fontWeight: 700,
    borderRadius: '2px'
  }}>
    {children}
  </Box>
);

export default function PostPage() {
  const [postType, setPostType] = useState('question');

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Bar>
        <Typography variant="h6" sx={{ m: 0 }}>New Post</Typography>
      </Bar>

      <Paper variant="outlined" sx={{ p: 2, mt: 2 }}>
        <Typography variant="body1" sx={{ fontWeight: 700, mb: 1 }}>
          Select Post Type:
        </Typography>
        <RadioGroup
          row
          value={postType}
          onChange={(e) => setPostType(e.target.value)}
        >
          <FormControlLabel value="question" control={<Radio />} label="Question" />
          <FormControlLabel value="article" control={<Radio />} label="Article" />
        </RadioGroup>
      </Paper>

      <Box sx={{ mt: 3 }}>
        <Bar>
          <Typography variant="h6" sx={{ m: 0 }}>What do you want to ask or share</Typography>
        </Bar>
        <Typography
          variant="body2"
          sx={{ mt: 1.5, ml: 2, color: 'text.secondary' }}
        >
          This section is designed based on the type of the post. It could be developed by
          conditional rendering. <span style={{ color: 'red' }}>
            For {postType === 'question' ? 'post a question' : 'post an article'}, the following section would be appeared.
          </span>
        </Typography>
      </Box>

      <Paper variant="outlined" sx={{ p: 2, mt: 2 }}>
        {postType === 'question' ? <QuestionForm /> : <ArticleForm />}

        <Divider sx={{ my: 2 }} />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            variant="contained"
            disableElevation
            sx={{
              backgroundColor: '#bdbdbd',
              color: '#000',
              '&:hover': { backgroundColor: '#a6a6a6' },
              px: 4
            }}
            onClick={() => {/* saved!! */}}
          >
            Post
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
