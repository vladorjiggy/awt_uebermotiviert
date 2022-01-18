import { Link } from "react-router-dom"
function checkIfDigit(int) {
    return int < 10 ? '0' + int : int
}
function convertTimestamp(timestamp) {
    let date = new Date(timestamp)
    return `${checkIfDigit(date.getDate())}.${checkIfDigit(date.getMonth() + 1)}.${date.getFullYear()}`
}

const RenderPostTable = props => {
    const rows = props.posts.map((row, index) => {
        return (
            <tr key={row._id} >
                <td><span id="postName"><Link id="edit" to={"/post/single/" + row._id}>{row.title}</Link></span></td>
                <td><span id="category"><Link to={"/post/category/" + row.categories[0]._id}>{row.categories[0].name}</Link></span></td>
                <td><span id="posteDate">{convertTimestamp(row.created)}</span></td>

                <td id="td-e"><Link id="edit" to={"/post/edit/" + row._id}>bearbeiten</Link></td>
                <td id="td-d"><a onClick={() => { props.parentOpenModal(row) }} href="#" id="delete">löschen</a></td>
            </tr>



        )
    })
    return rows

}
export default RenderPostTable