import { useHistory } from 'react-router-dom';

const NotFound = () => {
    let history = useHistory();
    const handleBtnClick = () => {
        history.push('/');
    }
    return (
        <div className="not-found-container">
            <h4>Trang này không hiển thị</h4>
            <h5>Có thể liên kết đã hỏng hoặc trang đã bị gỡ. Hãy kiểm tra xem liên kết mà bạn đang cố mở có chính xác không.</h5>
            <button className="btn btn-primary" onClick={handleBtnClick}>Go To HomePage</button>
        </div>

    )
}
export default NotFound;