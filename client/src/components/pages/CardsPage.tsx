import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getCardsThunk } from '../../redux/slices/cardThunk';
import OneCard from '../ui/OneCard';
import AddOneCard from '../ui/AddOneCard';
import EditModal from '../ui/EditModal';

export default function CardsPage(): JSX.Element {
  const cards = useAppSelector((store) => store.cards.cards);
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(getCardsThunk());
  }, []);

  return (
    <>
    <EditModal />
    <AddOneCard />
      <br />
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        {cards.map((card) => (
          <Box key={card.id} mr={3} mb={3}>
            <OneCard card={card} />
          </Box>
        ))}
      </Box>
    </>
  );
}
