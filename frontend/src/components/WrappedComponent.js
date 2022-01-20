import { useNavigate } from 'react-router-dom';
const WrappedComponent = props => {
    const navigate = useNavigate()
  
    return <props.component navigate={navigate} {...props} />
}
export default WrappedComponent