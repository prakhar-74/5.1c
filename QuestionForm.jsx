import React, { useState } from 'react';
import { Box, TextField, Typography } from '@mui/material';

export default function QuestionForm() {
  const [form, setForm] = useState({ title: '', desc: '', tags: '' });

  return (
    <Box>
      <Typography sx={{ fontWeight: 700, mb: 0.5 }}>Title</Typography>
      <TextField
        fullWidth
        placeholder="Start your question with how, what, why, etc."
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        size="small"
      />

      <Typography sx={{ fontWeight: 700, mt: 2, mb: 0.5 }}>
        Describe your problem
      </Typography>
      <TextField
        fullWidth
        multiline
        minRows={10}
        value={form.desc}
        onChange={(e) => setForm({ ...form, desc: e.target.value })}
      />

      <Typography sx={{ fontWeight: 700, mt: 2, mb: 0.5 }}>Tags</Typography>
      <TextField
        fullWidth
        placeholder="Please add up to 3 tags to describe what your question is about e.g., Java"
        value={form.tags}
        onChange={(e) => setForm({ ...form, tags: e.target.value })}
        size="small"
      />
    </Box>
  );
}
