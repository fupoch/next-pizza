'use client';

import { cn } from '@/lib/utils';
// import { useCategoryStore } from '@/shared/store/category';
// import { Category } from '@prisma/client';
import React from 'react';
import { useCategoryStore } from './store';

interface Props {
//   items: Category[];
  className?: string;
}
const cats = ['Пиццы', 'Комбо', 'Закуски', 'Коктейли', 'Кофе', 'Напитки']
export const Categories: React.FC<Props> = ({ className }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);

  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
      {cats.map((item, index) => (
        <a
          className={cn(
            'flex items-center font-bold h-11 rounded-2xl px-5',
            categoryActiveId === index && 'bg-white shadow-md shadow-gray-200 text-primary',
          )}
          href={`/#${item}`}
          key={index}>
          <button>{item}</button>
        </a>
      ))}
    </div>
  );
};
