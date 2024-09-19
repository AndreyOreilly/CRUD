import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import type { CardFormType } from '../../types/cardTypes';
import { addCardThunk } from '../../redux/slices/cardThunk';

export default function AddOneCard(): JSX.Element {
  const dispatch = useAppDispatch();
  const [input, setInput] = useState<CardFormType>({ title: '', description: '' });

  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      component="form"
      my={5}
      onSubmit={(e) => {
        e.preventDefault();
        void dispatch(addCardThunk(input));
        setInput({ title: '', description: '' });
      }}
    >
      <Box mr={2}>
        <TextField name="title" label="Title" value={input.title} onChange={changeHandler} />
      </Box>
      <Box mr={2}>
        <TextField
          name="description"
          label="Description"
          value={input.description}
          onChange={changeHandler}
        />
      </Box>
      <Button type="submit">Submit</Button>
    </Box>
  );
}
