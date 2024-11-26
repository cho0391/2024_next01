"use client"
import Divider from '@mui/material/Divider';
import { Grid2 } from '@mui/material';
import './itemList.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
function page(props) {
  const [list, setList] = useState([]);
  const API_URL = "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
  const getData = () => {
    axios.get(
      API_URL
    )
      .then(res => {
        console.log(res.data)
        setList(res.data);
      })
      .catch(
        console.log("에러발생")
      )
  }
  // 최초 한번만 실행
  useEffect(() => {
    getData();
  }, [])
  return (
    <div style={{ width: "80%", margin: "auto", padding: "20px" }}>
      <h2>베스트 상품</h2>
      <Divider />
      <Grid2 container spacing={2}>
        {list.map((k) => {
          // 전체 12개 중 3개를 차지, 즉 한줄에 4개가 나옴
          return <Grid2 key={k.id} size={{ xs: 3 }}>
            <img src={k.image_link} width={90} height={90} className='img_item' />
            <strong>{k.name}</strong>
            <span className='txt_info'>{k.category} &nbsp;&nbsp; {k.product_type}</span>
            <strong className='num_price'>{k.price}</strong>
          </Grid2>
        })}
      </Grid2>
    </div>
  );
}

export default page;