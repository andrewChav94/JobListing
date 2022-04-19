import { createSlice } from "@reduxjs/toolkit";

export const tagsSlice = createSlice({
    name: 'tags',
    initialState: {value: []},
    reducers: {
        addTag: (state, action) => {
            const tag=action.payload;
            state.value.push(tag);
        },
        deleteTag: (state, action) => {
            state.value.splice(action.payload,1)
        },
        clearTags: (state) => {
            state.value=[];
        }
    }
})

export const { addTag, deleteTag, clearTags } = tagsSlice.actions

export default tagsSlice.reducer;