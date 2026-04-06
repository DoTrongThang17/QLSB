import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";


function App() {

 const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });
  const [data, setData] = useState();

  
  useEffect(() => {
    fetchData();
  }, []); 
  
  const fetchData = async () => {
    try {
      // Thực hiện yêu cầu GET bằng Fetch API
      const response = await fetch('https://api.example.com/data');
      
      // Kiểm tra xem phản hồi có thành công không (mã trạng thái 200-299)
      if (!response.ok) {
        throw new Error('Phản hồi mạng không hợp lệ');
      }

      // Phân tích dữ liệu JSON từ phản hồi
      const result = await response.json();

      // Cập nhật trạng thái với dữ liệu đã lấy
      setData(result);
    } catch (error) {
      console.error('Lỗi khi lấy dữ liệu:', error.message);
    }
  };
  // render component
  return (
    <div className="App">
      <pre>
      {count}


    </pre>

    {data ? (
        // Hiển thị dữ liệu đã lấy
        <p>{data && data.map(item => (
        <p key={item.id}>{item.name}</p>
      ))}</p>
      ) : (
        // Hiển thị thông điệp tải hoặc giao diện khác trong khi dữ liệu đang được lấy
        <p>Đang tải testing...</p>
      )}

      
    
      
    </div>
  );
}

export default App;
