'use client'
import axios from "axios";
/*
 SB Next.js에서 Detail 폴더에 있는 page.jsx import 하는 법 (@ 하면 src 폴더로 감)
 */
import { useEffect, useState } from "react";
import "./guestBookDetails.css";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

/* SB 서버 컴포넌트는 function 앞에 async를 붙이고, useState, useEffect, useClient 사용 못 함. */
function Page({params}) {
    const API_URL = process.env.NEXT_PUBLIC_LOCAL_API_BASE_URL;
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    
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
                const URL = `${API_URL}/guestbook/detail?gb_idx=${id}`

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

     return (
        <>
          <h2 className="title">GuestBookList</h2>
          <TableContainer component={Paper} className="table-container">
            <Table className="custom-table">
              <TableBody>
                <TableRow>
                  <TableHead>
                  <TableCell className="table-header">번호</TableCell>
                  </TableHead>
                  <TableCell className="table-cell">{item.gb_idx}</TableCell>
                </TableRow>
                <TableRow>
                <TableHead>
                  <TableCell className="table-header">이름</TableCell>
                  </TableHead>
                  <TableCell className="table-cell">{item.gb_name}</TableCell>
                </TableRow>
                <TableRow>
                <TableHead>
                  <TableCell className="table-header">제목</TableCell>
                  </TableHead>
                  <TableCell className="table-cell">{item.gb_subject}</TableCell>
                </TableRow>
                <TableRow>
                <TableHead>
                  <TableCell className="table-header">내용</TableCell>
                  </TableHead>
                  <TableCell className="table-cell">{item.gb_content}</TableCell>
                </TableRow>
                <TableRow>
                <TableHead>
                  <TableCell className="table-header">비밀번호</TableCell>
                  </TableHead>
                  <TableCell className="table-cell">{item.gb_pw}</TableCell>
                </TableRow>
                <TableRow>
                <TableHead>
                  <TableCell className="table-header">등록일</TableCell>
                  </TableHead>
                  <TableCell className="table-cell">{item.gb_regdate.substring(0, 10)}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </>
      );

}

export default Page;