import create from 'zustand/vanilla'

export const tasks = create(set => ({
  selectedId: undefined,
  // select: (id) => set(state => ({ selectedId: id })),
}))

// const store = create(() => ({ ... }))
// const { getState, setState, subscribe, destroy } = store