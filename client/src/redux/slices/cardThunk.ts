import { createAsyncThunk } from '@reduxjs/toolkit';
import cardService from '../../services/cardService';
import type { CardFormType, CardType } from '../../types/cardTypes';

export const getCardsThunk = createAsyncThunk('cards/getCard', async () => {
  const data = await cardService.getCards();
  return data;
});

export const addCardThunk = createAsyncThunk('cards/addCard', async (formData: CardFormType) => {
  const data = await cardService.addCard(formData);
  return data;
});

export const deleteCardThunk = createAsyncThunk('cards/deleteCard', async (id: CardType['id']) => {
  await cardService.deleteCard(id);
  return id;
});

export const updateCardThunk = createAsyncThunk<CardType, { id: CardType['id'], formData: CardFormType }>('updadeCard', async ({ id, formData }) => {
  const data = await cardService.updateCard(id, formData);
  return data;
});
