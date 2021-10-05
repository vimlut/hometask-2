/* eslint-disable object-curly-newline */
/* eslint-disable no-confusing-arrow */
/* eslint-disable implicit-arrow-linebreak */
import { ADD_NOTE, UPDATE_NOTE, DELETE_NOTE, DELETE_NOTES } from '../action-types';

const initialState = [
  {
    id: 'task-1',
    name: 'Task 1',
    created: 1632914002039,
    category: 'Task',
    content: 'Lorem ipsum 5/5/2021 d awd da 6/5/2021',
    isArchived: false,
  },
  {
    id: 'task-2',
    name: 'Task 2',
    created: 1632914019093,
    category: 'Random Thought',
    content: 'Lorem ipsum',
    isArchived: false,
  },
  {
    id: 'task-3',
    name: 'Task 3',
    created: 1632914025810,
    category: 'Task',
    content: 'Lorem ipsum',
    isArchived: false,
  },
  {
    id: 'task-4',
    name: 'Task 4',
    created: 1632914032270,
    category: 'Idea',
    content: 'Lorem ipsum',
    isArchived: false,
  },
  {
    id: 'task-5',
    name: 'Task 5',
    created: 1632914038157,
    category: 'Quote',
    content: 'Lorem ipsum',
    isArchived: true,
  },
  {
    id: 'task-6',
    name: 'Task 6',
    created: 1632914044524,
    category: 'Quote',
    content: 'Lorem ipsum',
    isArchived: true,
  },
];

export const notes = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_NOTE:
      return [...state, payload];
    case UPDATE_NOTE:
      return state.map((item) => (item.id === payload.id ? { ...item, ...payload } : item));
    case DELETE_NOTE:
      return state.filter((item) => item.id !== payload);
    case DELETE_NOTES:
      return [];
    default:
      return state;
  }
};
