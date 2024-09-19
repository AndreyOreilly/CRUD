import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { toggleModal } from '../../redux/slices/cardSlice';
import { updateCardThunk } from '../../redux/slices/cardThunk';
import type { CardFormType } from '../../types/cardTypes';

export default function EditModal(): JSX.Element {
  const dispatch = useAppDispatch();
  const currCard = useAppSelector((store) => store.cards.currCard);

  const handleClose = (): void => {
    dispatch(toggleModal(null));
  };

  return (
    <Dialog
      open={!!currCard}
      onClose={handleClose}
      PaperProps={{
        component: 'form',
        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          if (currCard) {
            const formData = Object.fromEntries(new FormData(event.currentTarget)) as CardFormType;
            void dispatch(updateCardThunk({ id: currCard.id, formData }));
            handleClose();
          }
        },
      }}
    >
      <DialogTitle>Edit post</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          name="title"
          label="Title"
          fullWidth
          variant="standard"
          defaultValue={currCard?.title}
        />
        <TextField
          margin="dense"
          name="description"
          label="Description"
          fullWidth
          variant="standard"
          defaultValue={currCard?.description}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit">Save</Button>
      </DialogActions>
    </Dialog>
  );
}
