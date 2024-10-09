
import React from 'react';
import { Container } from './container';
import { Categories } from './categories';
import { SortPopup } from './sort-popup';
import { cn } from '@/lib/utils';
// import { Category } from '@prisma/client';

interface Props {
  // categories: Category[];
  className?: string;
}

export const TopBar: React.FC<Props> = ({ className }) => {



  // Выполняем GET-запрос к API
  fetch('http://localhost:3000/api/users')
    .then(response => {
      // Проверяем, успешен ли запрос
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Преобразуем ответ в JSON
      return response.json();
    })
    .then(data => {
      // Выводим полученные данные в консоль
      console.log(data);
    })
    .catch(error => {
      // Обрабатываем ошибку
      console.error('Fetch error:', error);
    });

  return (
    <div className={cn('sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10', className)}>
      <Container className="flex items-center justify-between ">
        <Categories />
        <SortPopup />
      </Container>
    </div>
  );
};
