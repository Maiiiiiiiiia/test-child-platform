import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MenuState {
  selectedSection: string;
}

// interface SelectSectionAction {
//   type: string;
//   payload: string;
// }

const initialState: MenuState = {
  selectedSection: 'schedule'
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    selectSection(state: MenuState, action: PayloadAction<string>) {
      state.selectedSection = action.payload;
    }
  }
});

export const { selectSection } = menuSlice.actions;
export default menuSlice.reducer;
