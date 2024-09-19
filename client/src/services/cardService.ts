import type { AxiosInstance, AxiosResponse } from 'axios';
import type { CardFormType, CardType } from '../types/cardTypes';
import { CardSchema, CardsListSchema } from '../utils/validation';
import axiosInstance from './apiInstance';

class CardsService {
  constructor(private readonly apiInstance: AxiosInstance) {}

  async getCards(): Promise<CardType[]> {
    const response = await this.apiInstance.get<CardType[]>('/cards');
    return CardsListSchema.parse(response.data);
  }

  async addCard(formData: CardFormType): Promise<CardType> {
    const response = await this.apiInstance.post<CardType>('/cards', formData);
    return CardSchema.parse(response.data);
  }

  async deleteCard(id: CardType['id']): Promise<AxiosResponse> {
    return this.apiInstance.delete(`/cards/${id}`);
  }

  async updateCard(id: CardType['id'], formData: CardFormType): Promise<CardType> {
    const response = await this.apiInstance.patch<CardType>(`/cards/${id}`, formData);
    return CardSchema.parse(response.data);
  }
}

export default new CardsService(axiosInstance);
