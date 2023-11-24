import { IPosition } from '@/shared/lib/types';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: {
  positions: IPosition[];
  selectedPosition: IPosition | null;
} = {
  selectedPosition: null,
  positions: [
    {
      id: '1',
      name: 'Новобранец',
      level: 0,
      payment: 50,
      tasks: 0,
      duties: [],
    },
    { id: '2', name: 'Рядовой', level: 10, payment: 80, tasks: 5, duties: [] },
    {
      id: '3',
      name: 'Сержант',
      level: 10,
      payment: 100,
      tasks: 10,
      duties: [],
    },
    {
      id: '4',
      name: 'Новобранец',
      level: 0,
      payment: 50,
      tasks: 0,
      duties: [],
    },
    { id: '5', name: 'Рядовой', level: 10, payment: 80, tasks: 5, duties: [] },
    {
      id: '6',
      name: 'Сержант',
      level: 10,
      payment: 100,
      tasks: 10,
      duties: [],
    },
  ],
};

export const counterSlice = createSlice({
  name: 'position',
  initialState,
  reducers: {
    addPosition: (state) => {
      state.positions.unshift({
        id: `${Date.now()}`,
        name: 'Новобранец',
        level: 0,
        payment: 50,
        tasks: 0,
        duties: [],
      });
    },
    editPosition: (state, action: PayloadAction<number>) => {
      //   state.value += action.payload;
    },
    setSelectedPosition: (state, action: PayloadAction<IPosition>) => {
      state.selectedPosition = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addPosition, editPosition, setSelectedPosition } =
  counterSlice.actions;

export default counterSlice.reducer;
