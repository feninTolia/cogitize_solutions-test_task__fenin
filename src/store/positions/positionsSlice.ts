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
      dutiesCheckbox: {
        sellProducts: false,
        quotePrices: false,
        viewAnalytics: false,
        duel: false,
        makeClaims: false,
        purchaseRawMaterials: false,
        assignWorkers: false,
        assignPositions: false,
        kickOutOfTheGang: false,
      },
    },
    {
      id: '2',
      name: 'Рядовой',
      level: 10,
      payment: 80,
      tasks: 5,
      dutiesCheckbox: {
        sellProducts: false,
        quotePrices: false,
        viewAnalytics: false,
        duel: false,
        makeClaims: false,
        purchaseRawMaterials: false,
        assignWorkers: false,
        assignPositions: false,
        kickOutOfTheGang: false,
      },
    },
    {
      id: '3',
      name: 'Сержант',
      level: 10,
      payment: 100,
      tasks: 10,
      dutiesCheckbox: {
        sellProducts: false,
        quotePrices: false,
        viewAnalytics: false,
        duel: false,
        makeClaims: false,
        purchaseRawMaterials: false,
        assignWorkers: false,
        assignPositions: false,
        kickOutOfTheGang: false,
      },
    },
    {
      id: '4',
      name: 'Новобранец',
      level: 0,
      payment: 50,
      tasks: 0,
      dutiesCheckbox: {
        sellProducts: false,
        quotePrices: false,
        viewAnalytics: false,
        duel: false,
        makeClaims: false,
        purchaseRawMaterials: false,
        assignWorkers: false,
        assignPositions: false,
        kickOutOfTheGang: false,
      },
    },
    {
      id: '5',
      name: 'Рядовой',
      level: 10,
      payment: 80,
      tasks: 5,
      dutiesCheckbox: {
        sellProducts: false,
        quotePrices: false,
        viewAnalytics: false,
        duel: false,
        makeClaims: false,
        purchaseRawMaterials: false,
        assignWorkers: false,
        assignPositions: false,
        kickOutOfTheGang: false,
      },
    },
    {
      id: '6',
      name: 'Сержант',
      level: 10,
      payment: 100,
      tasks: 10,
      dutiesCheckbox: {
        sellProducts: false,
        quotePrices: false,
        viewAnalytics: false,
        duel: false,
        makeClaims: false,
        purchaseRawMaterials: false,
        assignWorkers: false,
        assignPositions: false,
        kickOutOfTheGang: false,
      },
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
        dutiesCheckbox: {
          sellProducts: false,
          quotePrices: false,
          viewAnalytics: false,
          duel: false,
          makeClaims: false,
          purchaseRawMaterials: false,
          assignWorkers: false,
          assignPositions: false,
          kickOutOfTheGang: false,
        },
      });
    },

    editPosition: (state, action: PayloadAction<IPosition>) => {
      const updatedPositions = state.positions.map((position) => {
        if (position.id === action.payload.id) {
          return { ...position, ...action.payload };
        }

        return position;
      });

      state.positions = updatedPositions;
    },
    setSelectedPosition: (state, action: PayloadAction<IPosition>) => {
      state.selectedPosition = action.payload;
    },
  },
});

export const { addPosition, editPosition, setSelectedPosition } =
  counterSlice.actions;

export default counterSlice.reducer;
