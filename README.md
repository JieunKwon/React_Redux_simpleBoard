# React_Redux_simpleBoard

CRUD Board with React and Redux

It was updated from https://github.com/JieunKwon/React_create_simpleBoard


<b> What is Redux? </b>

A predictable state <b>container</b> for JavaScript apps

Link to <a href='https://redux.js.org/introduction/getting-started'>Redux https://redux.js.org/introduction/getting-started </a>



<b> What was updated from the previous version board? </b>

1. Used Redux

Redux allows to use funcion for input and output data between App component(parent) and board items.
 
        
2. src/BoardItem.js 
       
       import { connect } from 'react-redux';
       
       ...
       
       export default connect()(BoardItem);
       
       
3. src/App_reducer.js

Do every task for board item to save, read, and delete according to type of action.

        
         const BOARD_SAVE = 'SAVE';

         const BOARD_REMOVE = 'REMOVE';

         const BOARD_READ = 'ONE';

         const BOARD_LIST = 'LIST';

         ...

         export default function board_reducer(state = initialState, action) {


                switch(action.type) {

                case BOARD_SAVE:

                ...

                case BOARD_REMOVE:

                ...

                case BOARD_READ:

                ...

                }
        }        
               

