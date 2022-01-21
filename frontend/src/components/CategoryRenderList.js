import { Link } from "react-router-dom"

// Von CategoryMenu übergebene Kategorien werden aufgelistet (map) und mit Links versehen. Die Links führen dann zur CategoryPosts page der jeweiligen Kategorie.
const CategoryRenderList = props => {
    const rows = props.categories.map((row, index) => {
        return (

            <li id={"link-li" + index+1}>
                <Link to={"/post/category/" + row._id}>{row.name}</Link>
            </li>
        )
    })
    return <ul>{rows}</ul>
}

export default CategoryRenderList