export enum Tabs {
  Hierarchy = 'Иерархия',
  Positions = 'Должности',
  StaffList = 'Список персонала',
  EquipmentSet = 'Наборы екипировки',
}

export enum CheckboxNames {
  sellProducts = 'sellProducts',
  quotePrices = 'quotePrices',
  viewAnalytics = 'viewAnalytics',
  duel = 'duel',
  makeClaims = 'makeClaims',
  purchaseRawMaterials = 'purchaseRawMaterials',
  assignWorkers = 'assignWorkers',
  assignPositions = 'assignPositions',
  kickOutOfTheGang = 'kickOutOfTheGang',
}

export const CheckboxTitles = {
  [CheckboxNames.sellProducts]: 'Продавать продукт',
  [CheckboxNames.quotePrices]: 'Выставлять цены',
  [CheckboxNames.viewAnalytics]: 'Смотреть аналитику',
  [CheckboxNames.duel]: 'Дуель',
  [CheckboxNames.makeClaims]: 'Выставлять претензии',
  [CheckboxNames.purchaseRawMaterials]: 'Закупать сырье',
  [CheckboxNames.assignWorkers]: 'Назначать рабочих',
  [CheckboxNames.assignPositions]: 'Назначать должности',
  [CheckboxNames.kickOutOfTheGang]: 'Выгонять из банды',
};
