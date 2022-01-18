import React, {Component} from "react"


class Change extends Component {
    componentDidMount() {
        this.getCategories()
        const url = process.env.REACT_APP_SERVERHOST + '/contact' + this.props.params.post_id;
        fetch(url, {
            method: 'get',
    
        })
            .then(result => result.json())
            .then(result => {
                this.setState({
                    post: result.post,
                    _id: result.post._id,
                    title: result.post.title,
                    content: result.post.content,
                    post_image: result.post.post_image,
                    categories: result.post.categories
                })
            })
      }
  
    render() {
        return (
            <div>
               Test
            </div>
        )
    }
}

export default Change