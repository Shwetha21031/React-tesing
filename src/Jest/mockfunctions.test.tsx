import { fireEvent, render, waitFor } from "@testing-library/react"

// // test.tsx
// it('should be possible to filter', async () => {
//   const handleFilter = jest.fn()

// //   render(
//     // <FilterModal
//     //   handleFilter={handleFilter}
//     // />
// //   )

// 	// here you can do the logic of our component

// //   fireEvent.click(button) // the event that trigger the function

//   await waitFor(() =>
//     expect(handleFilter).toHaveBeenCalledWith([
//       {
//         id: 'number',
//         value: '011'
//       },
//       {
//         id: 'provider',
//         value: 'Arthur'
//       }
// 		])
//   })