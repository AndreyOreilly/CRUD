import { z } from 'zod';

export const CardSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
});

export const CardsListSchema = z.array(CardSchema); 