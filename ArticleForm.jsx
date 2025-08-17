import React, { useState } from 'react';
import { Box, TextField, Typography } from '@mui/material';

export default function ArticleForm() {
  const [form, setForm] = useState({ title: '', abstract: '', text: '', tags: '' });

  return (
    <Box>
      <Typography sx={{ fontWeight: 700, mb: 0.5 }}>Title</Typography>
      <TextField
        fullWidth
        placeholder="Enter a descriptive title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        size="small"
      />

      <Typography sx={{ fontWeight: 700, mt: 2, mb: 0.5 }}>Abstract</Typography>
      <TextField
        fullWidth
        placeholder="Enter a 1-paragraph abstract"
        value={form.abstract}
        onChange={(e) => setForm({ ...form, abstract: e.target.value })}
        multiline
        minRows={3}
      />

      <Typography sx={{ fontWeight: 700, mt: 2, mb: 0.5 }}>Article Text</Typography>
      <TextField
        fullWidth
        placeholder="Enter a 1-paragraph abstract"
        value={form.text}
        onChange={(e) => setForm({ ...form, text: e.target.value })}
        multiline
        minRows={10}
      />

      <Typography sx={{ fontWeight: 700, mt: 2, mb: 0.5 }}>Tags</Typography>
      <TextField
        fullWidth
        placeholder="Please add up to 3 tags to describe what your article is about e.g., Java"
        value={form.tags}
        onChange={(e) => setForm({ ...form, tags: e.target.value })}
        size="small"
      />
    </Box>
  );
}
