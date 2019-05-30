# React_Redux_simpleBoard

CRUD Board with React and Redux

It was updated from https://github.com/JieunKwon/React_create_simpleBoard

What was updated?
Separated three components from App and used by importing and exporting those
App (Default)
import BoardForm from './BoardForm';
import BoardItem from './BoardItem';
BoardForm
export default BoardForm;
BoardItem
export default BoardItem;
Use shouldComponentUpdate Event when BoardForm updates
shouldComponentUpdate(nextProps, nextState) {
...
return true;
}
BoardForm has refrences using ref when data selected to edit
