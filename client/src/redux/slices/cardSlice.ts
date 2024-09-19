import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { addCardThunk, deleteCardThunk, getCardsThunk, updateCardThunk } from './cardThunk';
import type { CardType } from '../../types/cardTypes';

type CardState = {
  cards: CardType[];
  currCard: CardType | null;
};

const initialState: CardState = {
  cards: [],
  currCard: null,
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    toggleModal: (state, action: PayloadAction<CardType | null>) => {
      state.currCard = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCardsThunk.fulfilled, (state, action) => {
        state.cards = action.payload;
      })
      .addCase(getCardsThunk.rejected, (state) => {
        state.cards = [];
      })
      .addCase(addCardThunk.fulfilled, (state, action) => {
        state.cards = [action.payload, ...state.cards];
      })
      .addCase(deleteCardThunk.fulfilled, (state, action) => {
        state.cards = state.cards.filter((card) => card.id !== action.payload);
      })
      .addCase(updateCardThunk.fulfilled, (state, action) => {
        const index = state.cards.findIndex((card) => card.id === action.payload.id);
        if (index !== -1) {
          state.cards[index] = action.payload;
        }
      });
  },
});

export const { toggleModal } = cardsSlice.actions;

export default cardsSlice.reducer;
