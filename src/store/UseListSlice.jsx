import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  
        {
          name: 'aarabbanisadiq',
          email: 'AArabbanisadiq@hotmail.com',
          role: 'IB Facilitator',
          mobile: '9667989159',
          expiryDate: '2023-10-14',
          id: 310,
        },
        {
            name: 'Dr. Abhay',
            email: 'Abhay.singh91286@gmail.com',
            role: 'IB Facilitator',
            mobile: '',
            expiryDate: '2023-10-14',
            id: 311,
          },
          {
            name: 'Afroz',
            email: 'afroz@ibglobalacademy.org',
            role: 'IB Facilitator',
            mobile: '9818805721',
            expiryDate: '2030-10-31',
            id: 312,
          },
          {
            name: 'Afroz',
            email: 'afroz@ibglobalacademy.org',
            role: 'IB Facilitator',
            mobile: '9818805721',
            expiryDate: '2030-10-31',
            id: 313,
          },
          {
            name: 'Dr. Abhay',
            email: 'Abhay.singh91286@gmail.com',
            role: 'IB Facilitator',
            mobile: '',
            expiryDate: '2023-10-14',
            id: 314,
          },
          {
            name: 'Dr. Abhay',
            email: 'Abhay.singh91286@gmail.com',
            role: 'IB Facilitator',
            mobile: '',
            expiryDate: '2023-10-14',
            id: 315,
          },
          {
            name: 'aarabbanisadiq',
            email: 'AArabbanisadiq@hotmail.com',
            role: 'IB Facilitator',
            mobile: '9667989159',
            expiryDate: '2023-10-14',
            id: 316,
          },
          {
              name: 'Dr. Abhay',
              email: 'Abhay.singh91286@gmail.com',
              role: 'IB Facilitator',
              mobile: '',
              expiryDate: '2023-10-14',
              id: 317,
            },
            {
                name: 'aarabbanisadiq',
                email: 'AArabbanisadiq@hotmail.com',
                role: 'IB Facilitator',
                mobile: '9667989159',
                expiryDate: '2023-10-14',
                id: 318,
              },
              {
                  name: 'Dr. Abhay',
                  email: 'Abhay.singh91286@gmail.com',
                  role: 'IB Facilitator',
                  mobile: '',
                  expiryDate: '2023-10-14',
                  id: 319,
                },
                {
                    name: 'aarabbanisadiq',
                    email: 'AArabbanisadiq@hotmail.com',
                    role: 'IB Facilitator',
                    mobile: '9667989159',
                    expiryDate: '2023-10-14',
                    id: 320,
                  },
                  {
                      name: 'Dr. Abhay',
                      email: 'Abhay.singh91286@gmail.com',
                      role: 'IB Facilitator',
                      mobile: '',
                      expiryDate: '2023-10-14',
                      id: 321,
                    },
      
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
