"use client"
import { Button } from '@mui/material';
/*
 B Next.js에서 page.jsx import 하는 법 (@ 하면 src 폴더로 감)
 */

import axios from 'axios';
import { useEffect, useState } from 'react';
 
 /* 
 B 동적라우팅 id를 받을 땐 1. async fuction, 2. {params}, 3. const param = await params;, 
                         4. const id = param.id;
 */
 
 // B async는 서버 컴포넌트라는 뜻
 // 서버 컴포넌트 : 데이터를 가져오는데만 사용해야 한다. (useState, useEffect 사용 불가)
 function Page({params}) {
     const API_URL = process.env.NEXT_PUBLIC_MAKEUP_API_BASE_URL;
     const [item,setItem] = useState(null);
     const [loading,setLoading] = useState(true);
     const [error,setError] = useState(null);

     useEffect(()=>{
        const fetchData = async () => {
            try {
                setLoading(true); // 로딩 시작
                // params 언래핑: Promise로 감싸진 값을 꺼내는 과정
                // Promise.resolve(params)의 역할
                // Promise.resolve()는 전달된 값을 Promise 객체로 변환합니다.
                // 만약 params가 이미 Promise라면, 원래 Promise를 반환합니다.
                // 만약 params가 일반 객체라면, 이를 즉시 해결된(resolved) Promise로 감쌉니다.
                // Promise인지 아닌지 신경 쓰지 않고 항상 비동기적으로 다룰 수 있습니다.
                // const resolvedParams = await Promise.resolve(params); // params 언래핑
                // const { id } = resolvedParams; // id 추출
                const {id} = await Promise.resolve(params);
                const URL = `${API_URL}/v1/products/${id}.json`

                // 데이터 가져오기
                const response = await axios.get(URL);
                setItem(response.data);
            } catch (error) {
                console.error("Error : ", error);
                setError("failed");
            }finally{
                setLoading(false);
            }
        };
        fetchData();
     },[params, API_URL]);

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

     // 로딩 완료 후
     return (
        <div className='wrap'>
        <div className='img_itemimg'>
          <img src={item.image_link} alt={item.name} width={300} height={300} />
        </div>
        <div className='info_item'>
          <strong className='tit_item'>{item.name}</strong>
          <strong className='num_price'>$ {item.price}</strong>
          <span className='txt_info'>
            {item.category ? `${item.category}/` : ""} {item.product_type}
          </span>
          <Button variant='contained' color='success' style={{margin:"20px"}}>구매하기</Button>
          <Button variant='contained' color='error'>취소하기</Button>
        </div>
        <div className='disWrap'>
          <hr/>
          <h1 style={{margin:"20px"}}>Description</h1>
          <div style={{paddingBottom:"20px", fontSize:"24px"}}>{item.description}</div>
        </div>
      </div>
     )

 }
 
 export default Page;