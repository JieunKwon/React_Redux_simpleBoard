// updated by Julia
// @ May 30, 2019

// TYPE of action to control the board items
const BOARD_SAVE = 'SAVE';

const BOARD_REMOVE = 'REMOVE';

const BOARD_READ = 'ONE';

const BOARD_LIST = 'LIST';

// create new item or edit one item with selected brdno
export const board_save = (data) => ({

                                type: BOARD_SAVE,

                                data

                            });


// remove one item with selected brdno
export const board_remove = (brdno) => ({

                                type: BOARD_REMOVE,

                                brdno: brdno

                            });


// read one item with selected brdno
export const board_read = (brdno) => ({

                                type: BOARD_READ,

                                brdno: brdno

                            });


// all list
export const board_list = () => ({ type: BOARD_LIST });


// the default items
const initialState = {

      maxNo: 3,   // record for next no of boardno

      boards: [

          {

              brdno: 1,

              brdwriter: 'Kwon Julia',

              brdtitle: 'Save up to 30% on Tickets',

              brddate: new Date()

          },

          {

              brdno: 2,

              brdwriter: 'Kim Simon',

              brdtitle: 'Get A 2019 Season Pass',

              brddate: new Date()

          }

    ],

    // the item selected
    selectedBoard: {}

};


export default function board_reducer(state = initialState, action) {

    let boards = state.boards;

    switch(action.type) {

        case BOARD_SAVE:

            let data = action.data;

            let maxNo = state.maxNo;

            if (!data.brdno) {    // new data

                return {maxNo: maxNo+1, boards: boards.concat({...data, brdno: maxNo, brddate: new Date()}), selectedBoard: {} };

            }

            return {...state, boards: boards.map(row => data.brdno === row.brdno ? {...data }: row), selectedBoard: {} };

        case BOARD_REMOVE:

             return {...state, boards: boards.filter(row => row.brdno !== action.brdno), selectedBoard: {}};

        case BOARD_READ:

             return {

                 ...state,

                 selectedBoard: boards.find(row => row.brdno === action.brdno)

            };

        default:

            return state;

    }

}
