import Button from '@/shared/UI/Buttons/Button';
import Checkbox from '@/shared/UI/Inputs/Checkbox';
import Input from '@/shared/UI/Inputs/Input';
import CheckboxGroup from '@/shared/UI/Layouts/CheckboxGroup';
import { CheckboxNames } from '@/shared/lib/constants';
import { IPosition } from '@/shared/lib/types';
import { RootState } from '@/store';
import { editPosition } from '@/store/positions/positionsSlice';
import React, { FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast.success('Cохранено!');

const PositionsForm = () => {
  // @ts-ignore
  const [editedPosition, setEditedPosition] = useState<IPosition>(null);
  const selectedPosition = useSelector(
    (state: RootState) => state.positions.selectedPosition
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!selectedPosition) return;
    setEditedPosition(selectedPosition);
  }, [selectedPosition]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!editedPosition) return;
    dispatch(editPosition(editedPosition));
    notify();
  };

  if (!selectedPosition || !editedPosition) {
    return (
      <div className=" bg-[var(--secondary-black)] w-[59.2em] h-full rounded-[0.8em]"></div>
    );
  }

  return (
    <div className=" bg-[var(--secondary-black)] w-[59.2em] h-full rounded-[0.8em] p-[1.6em]">
      <form
        onSubmit={handleSubmit}
        className="h-full grid grid-rows-[auto_1fr_auto]"
      >
        <Input
          value={editedPosition.name}
          setEditedPosition={setEditedPosition}
        />
        <div className=" bg-[var(--main-black)] mt-[1.5em] mb-[0.8em]  rounded-[0.8em]">
          <p className=" w-full pl-[1.2em] py-[1em] text-[1.4em] text-[var(--main-gray)] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.24)]">
            Обязаности
          </p>
          <div className=" grid grid-cols-2 gap-[1.2em] p-[1.2em]">
            <CheckboxGroup title="Торговля">
              <Checkbox
                checkboxName={CheckboxNames.sellProducts}
                checked={editedPosition.dutiesCheckbox.sellProducts}
                setEditedPosition={setEditedPosition}
              />
              <Checkbox
                checkboxName={CheckboxNames.quotePrices}
                checked={editedPosition.dutiesCheckbox.quotePrices}
                setEditedPosition={setEditedPosition}
              />
              <Checkbox
                checkboxName={CheckboxNames.viewAnalytics}
                checked={editedPosition.dutiesCheckbox.viewAnalytics}
                setEditedPosition={setEditedPosition}
              />
            </CheckboxGroup>

            <CheckboxGroup title="Разборки">
              <Checkbox
                checkboxName={CheckboxNames.duel}
                checked={editedPosition.dutiesCheckbox.duel}
                setEditedPosition={setEditedPosition}
              />
              <Checkbox
                checkboxName={CheckboxNames.makeClaims}
                checked={editedPosition.dutiesCheckbox.makeClaims}
                setEditedPosition={setEditedPosition}
              />
            </CheckboxGroup>

            <CheckboxGroup title="Производство">
              <Checkbox
                checkboxName={CheckboxNames.purchaseRawMaterials}
                checked={editedPosition.dutiesCheckbox.purchaseRawMaterials}
                setEditedPosition={setEditedPosition}
              />
              <Checkbox
                checkboxName={CheckboxNames.assignWorkers}
                checked={editedPosition.dutiesCheckbox.assignWorkers}
                setEditedPosition={setEditedPosition}
              />
            </CheckboxGroup>

            <CheckboxGroup title="Управление">
              <Checkbox
                checkboxName={CheckboxNames.assignPositions}
                checked={editedPosition.dutiesCheckbox.assignPositions}
                setEditedPosition={setEditedPosition}
              />
              <Checkbox
                checkboxName={CheckboxNames.kickOutOfTheGang}
                checked={editedPosition.dutiesCheckbox.kickOutOfTheGang}
                setEditedPosition={setEditedPosition}
              />
            </CheckboxGroup>
          </div>
        </div>

        <Button type="submit" title="Сохранить" />
      </form>
      <Toaster />
    </div>
  );
};

export default PositionsForm;
