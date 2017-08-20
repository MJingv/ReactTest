//action类型

export const ADD_TODO ='ADD_TODO'
export const COMPLETE_TODO ='COMPLETE_TODO'
export const SET_VISIBILITY_FILTER ='SET_VISIBILITY_FILTER'


//其他常量

export const VisibilityFilters = {
  SHOW_ALL :'SHOW_ALL',
  SHOW_COMPLETED :'SHOW_COMPLETED',
  SHOW_ACTIVE :'SHOW_ACTIVE',
}


//ation 创建函数

export const addTodo = (text) => (
  {type:ADD_TODO,
  text}
)

export const completeTodo = (index) => (
  {type:COMPLETE_TODO,
  index}
)

export const setVisibilityFilter = (filter) => (
  {type:SET_VISIBILITY_FILTER,
  filter}
)
