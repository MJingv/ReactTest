import FilterLink from '../comtainers/FilterLink'

const Footer = () => (
  <p>
    SHOW:{" "}
    <FilterLink filter="SHOW_ALL">ALL</FilterLink>
    <FilterLink filter="SHOW_ACTIVE">ACTIVE</FilterLink>
    <FilterLink filter="SHOW_COMPLETED">COMPLETED</FilterLink>
  </p>
)
export default Footer
