"use client"
import Divider from '@mui/material/Divider';
import { Grid2 } from '@mui/material';
import './itemList.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
function page(props) {
  const API_URL = process.env.NEXT_PUBLIC_MAKEUP_API_BASE_URL;
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const API_URL = "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
  const URL = `${API_URL}/v1/products.json?brand=maybelline`;
  const getData = async () => {
    try {
      setLoading(true); // 로딩 시작
      // 데이터 가져오기
      const response = await axios.get(URL);
      setList(response.data.slice(0,16));
    } catch (error) {
      console.error("Error : ", error);
      setError("failed");
    } finally {
      setLoading(false);
    }
  }
  // 최초 한번만 실행
  useEffect(() => {
    getData();
  }, [])

  // 로딩중
  if (loading) {
    return <div style={{textAlign : "center", padding:"20px"}}>Loading...</div>;
 }

 // 에러 발생시
 if (error) {
    return (
        <div style={{textAlign : "center", padding:"20px", color : "red"}}>
            <h2>Error : </h2>
            <p>{error}</p>
        </div>
    );
 }
  return (
    <div style={{ width: "80%", margin: "auto", padding: "20px" }}>
      <h2>베스트 상품</h2>
      <Divider />
      <Grid2 container spacing={2}>
        {list.map((k) => {
          // 전체 12개 중 3개를 차지, 즉 한줄에 4개가 나옴
          return <Grid2 key={k.id} size={{ xs: 3 }}>
            <Link href={'/view/' + k.id}>
              <img src={k.image_link} alt='' width={90} height={90} className='img_item' />
              <strong>{k.name}</strong>
              <span className='txt_info'>{k.category} &nbsp;&nbsp; {k.product_type}</span>
              <strong className='num_price'>{k.price}</strong>
            </Link>
          </Grid2>
        })}
      </Grid2>
    </div>
  );
}

export default page;