// src/components/calendarStyles.css.ts
import { style, createVar } from '@vanilla-extract/css';

export const calendarGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  gap: '2px',
  margin: '0 auto',
  maxWidth: 910,
});

export const dayCell = style({
  minWidth: 130,
  height: 140,
  background: 'white',
  border: '1px solid #ddd',
  padding: 12,
  position: 'relative',
  fontSize: 14,
  borderRadius: 8,
  overflow: 'hidden',
});

export const eventCarrie = style({
  background: '#fbcfe8',
  color: '#be185d',
  borderRadius: 10,
  padding: '3px 8px',
  margin: '2px 0',
});

export const eventAtticus = style({
  background: '#bbf7d0',
  color: '#166534',
  borderRadius: 10,
  padding: '3px 8px',
  margin: '2px 0',
});

export const eventFamily = style({
  background: '#fdba74',
  color: '#9a3412',
  borderRadius: 10,
  padding: '3px 8px',
  margin: '2px 0',
});

export const eventTodo = style({
  background: '#bfdbfe',
  color: '#1e40af',
  borderRadius: 10,
  padding: '3px 8px',
  margin: '2px 0',
});

export const eventKids = style({
  background: '#ddd6fe',
  color: '#6d28d9',
  borderRadius: 10,
  padding: '3px 8px',
  margin: '2px 0',
});
