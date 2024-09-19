import type { z } from 'zod';
import type { CardSchema } from '../utils/validation';

export type CardType = z.infer<typeof CardSchema>;

export type CardFormType = Omit<CardType, 'id'>;
