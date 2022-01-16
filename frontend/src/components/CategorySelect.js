const CategorySelect = props => {
    console.log(props)
    let rows = props.categories.map((row, index) => {
        return (

            <option value={row._id}>{row.name}</option>
        )
    })
    rows.unshift(<option value="">Wählen Sie eine Kategorie aus</option>)
    return <select class="div__select--dropDownMenu" name="categories" id="dropDownMenu" value={props.value} onChange={props.handleSelectChange}>{rows}</select>
}
export default CategorySelect