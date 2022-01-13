const CategoryRenderList = props => {
    console.log(props)
    const rows = props.categories.map((row, index) => {
        return (

            <li id={"link-li" + index+1}>
                <a data-id={row._id}>{row.name}</a>
            </li>
        )
    })
    return <ul>{rows}</ul>
}
export default CategoryRenderList