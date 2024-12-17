[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/IPe3ACOH)
# React - Intro Exercise

**Goal:** To understand the basics of React components and props.

## Instructions

1. Clone the repository to your local machine.
2. Run `npm create vite@latest my-first-react-app` on the terminal. Select **React > TypeScript**. Run `cd my-first-react-app` to move to the directory.
3. Create the following components inside the **src/components** directory:
   - `Welcome.tsx`
   - `Header.tsx`
   - `Info.tsx`

4. Modify your `App.tsx` file to:
   - Pass the message `"Hello!"` as a prop to the `Welcome` component.
   - Pass the string `"My First React App"` as a prop named `logoText` to the `Header` component.
   - Pass the following props to the `Info` component:
     - `firstname`: Your first name (string).
     - `lastname`: Your last name (string).
     - `age`: Your age (number).
     - `isStudent`: If you are a student (boolean).

5. Implement the following functionality in each component:
   - **`Welcome.tsx`**:  
     - Display the `message` prop inside a `<p>` tag.
   - **`Header.tsx`**:  
     - Display the `logoText` prop inside an `<h1>` tag.
   - **`Info.tsx`**:  
     - Display the `firstname`, `lastname`, `age`, and `isStudent` props inside a `<div>`. Format the output as:  
       `"Name: [firstname] [lastname], Age: [age], Is student: [Yes if true, No if false]"`.

6. Commit and push your changes.
