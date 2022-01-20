const CategorySelect = props => {
    
    let rows = props.categories.map((row, index) => {
        return (

            <option value={row._id}>{row.name}</option>
        )
    })
    rows.unshift(<option value="">Wählen Sie eine Kategorie aus</option>)
    return <select value={props.value?.length ? props.value[0]._id :  ""} class="div__select--dropDownMenu" name="categories" id="dropDownMenu" onChange={props.handleSelectChange}>{rows}</select>
}

export default CategorySelect