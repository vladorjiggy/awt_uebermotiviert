import { Link } from "react-router-dom"
const CategoryRenderList = props => {
    console.log(props)
    const rows = props.categories.map((row, index) => {
        return (

            <li id={"link-li" + index+1}>
                <Link to={"/post/category/" + row._id}>{row.name}</Link>
            </li>
        )
    })
    return <ul>{rows}</ul> // sollte passen
    
}
export default CategoryRenderList