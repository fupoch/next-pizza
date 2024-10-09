'use client';

import React from 'react';
import { Title } from './title';
import { Input } from '../ui';
import { FilterCheckbox } from './filter-checkbox';
import { RangeSlider } from './range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';
// import { RangeSlider } from './range-slider';
// import { CheckboxFiltersGroup } from './checkbox-filters-group';
// import { useQueryFilters, useIngredients, useFilters } from '@/shared/hooks';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  // const { ingredients, loading } = useIngredients();
  // const filters = useFilters();

  // useQueryFilters(filters);

  // const items = ingredients.map((item) => ({ value: String(item.id), text: item.name }));

  // const updatePrices = (prices: number[]) => {
  //   console.log(prices, 999);
  //   filters.setPrices('priceFrom', prices[0]);
  //   filters.setPrices('priceTo', prices[1]);
  // };

  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />
      <div className='flex flex-col gap-4'>

        <FilterCheckbox text='Можно собирать' value='1' />
        <FilterCheckbox text='Новинки' value='2' />
      </div>

      {/* Фильтр цен */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            // value={String(filters.prices.priceFrom)}
            // onChange={(e) => filters.setPrices('priceFrom', Number(e.target.value))}
          />
          <Input
            type="number"
            min={100}
            max={1000}
            placeholder="1000"
            // value={String(filters.prices.priceTo)}
            // onChange={(e) => filters.setPrices('priceTo', Number(e.target.value))}
          />
        </div>

        <RangeSlider
          min={0}
          max={1000}
          step={10}
          // value={[filters.prices.priceFrom || 0, filters.prices.priceTo || 1000]}
          // onValueChange={updatePrices}
        />
      </div>

      <CheckboxFiltersGroup 
      title='Ингридиенты' 
      className='mt-5' 
      limit={6} 
      items={[
        {
          text: 'Сырный соус',
          value: '1'
        },
        {
          text: 'Моцарелла',
          value: '2'
        },
        {
          text: 'Чеснок',
          value: '3'
        },
        {
          text: 'Соленые огурцы',
          value: '4'
        },
        {
          text: 'Томатный соус',
          value: '5'
        },
        {
          text: 'Красный лук',
          value: '6'
        },
        {
          text: 'Сырный соус',
          value: '1'
        },
        {
          text: 'Моцарелла',
          value: '2'
        },
        {
          text: 'Чеснок',
          value: '3'
        },
        {
          text: 'Соленые огурцы',
          value: '4'
        },
        {
          text: 'Томатный соус',
          value: '5'
        },
        {
          text: 'Красный лук',
          value: '6'
        },
      ]}
      defaultItems={[
        {
          text: 'Сырный соус',
          value: '1'
        },
        {
          text: 'Моцарелла',
          value: '2'
        },
        {
          text: 'Чеснок',
          value: '3'
        },
        {
          text: 'Соленые огурцы',
          value: '4'
        },
        {
          text: 'Томатный соус',
          value: '5'
        },
        {
          text: 'Красный лук',
          value: '6'
        },
      ]}
      />
    </div>
  );
};
