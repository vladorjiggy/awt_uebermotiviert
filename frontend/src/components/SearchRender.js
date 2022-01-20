import { Link } from "react-router-dom"
const SearchRender = props => {

    const rows = props.posts.map((row, index) => {
        return (


            <div id="con-result">
                <article id="article3-section1">
                    <button id="category-name">{row.categories[0].name || props.categoryName}</button>
                    <img
                        id="article3-img"
                        src={row.post_image}
                        alt={row.post_image}
                    />
                </article>

                <article id="article3-section2">
                    <h3 id="article3-headline">{row.title}</h3>
                    <p class="cut-text" id="article3-text">
                        {row.content}
                    </p>
                    <Link to={"/post/single/" + row._id}>Erfahre mehr...</Link>
                </article>
            </div>
        )
    })
    return <div id="container-result">{rows}</div>

}
export default SearchRender