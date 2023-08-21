function fetchDataInRange(startDateTime, endDateTime) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Gọi API và lấy dữ liệu ở đây
        const response = await fetch("YOUR_API_URL");
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const currentTime = new Date();
    if (currentTime >= startDateTime && currentTime <= endDateTime) {
      // Gọi fetchData ngay khi component được render và thời gian nằm trong khoảng start-end
      fetchData();

      // Sau đó sử dụng setInterval để gọi fetchData mỗi khoảng thời gian cố định
      const interval = setInterval(() => {
        fetchData();
      }, 1000); // Gọi API mỗi 10 giây (có thể thay đổi thời gian tùy ý)

      // Clear interval khi component bị hủy
      return () => clearInterval(interval);
    }
  }, [startDateTime, endDateTime]);

  return (
    <div>
      <h1>API Data:</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default fetchDataInRange;
