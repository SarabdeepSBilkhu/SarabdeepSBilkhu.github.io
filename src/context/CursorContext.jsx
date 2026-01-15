import { createContext } from 'react';

export const CursorContext = createContext({ cursorVisible: true, setCursorVisible: () => {} });
