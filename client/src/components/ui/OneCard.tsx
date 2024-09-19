import * as React from 'react';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { useAppDispatch } from '../../redux/hooks';
import type { CardType } from '../../types/cardTypes';
import { deleteCardThunk } from '../../redux/slices/cardThunk';
import { toggleModal } from '../../redux/slices/cardSlice';

type CardItemPropsType = {
  card: CardType;
};

export default function OneCard({ card }: CardItemPropsType): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Card of the Day
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {card.title}
        </Typography>
        <Typography variant="body2">{card.description}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => void dispatch(deleteCardThunk(card.id))}>
          Delete
        </Button>
        <Button size="small" onClick={() => dispatch(toggleModal(card))}>
          Edit
        </Button>
      </CardActions>
    </Card>
  );
}
