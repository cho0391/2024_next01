'use client'
// layout.js 는 선택읻. (RootLayout 제외)
// layout 이 필요 없는 간단한 페이지에서는 생략 가능

import Link from "next/link";
import './globals.css';
import useAuthStore from "../../store/authStore";
import { Button, Stack } from "@mui/material";

// 페이지 전체의 공통 구조를 렌더링 할 때 사용

// 부모컴포넌트
export default function RootLayout({ children }) {
  // 주스탠드 상태 가져오기
  const {isAuthenticated , token , user, logout} = useAuthStore();
  const handleLogout = () => {
    // zustand 에 있는 함수
    logout();
    alert("로그아웃 되었습니다.")
  }
  console.log("token : " + token);
  return (
    <html lang="en">
      <body style={{textAlign:"center"}}>
        {/* <header>공통 헤더</header> */}
        {/* {children} */}
        {/* <footer>공통 푸터</footer> */}
        <h1><Link href="/">WEB</Link></h1>
        <nav>
          <Stack direction="row" spacing={2} justifyContent="center">
            <Link href="/read/1">HTML</Link>
            <Link href="/read/2">CSS</Link>
            <Link href="/read/3">JS</Link>
            <Link href="/gallery">image</Link>
            <Link href="/itemList">ItemList(외부서버</Link>)
            <Link href="/guestBookList">GuestBook(Spring 서버)</Link>
            {isAuthenticated ? 
            (<><span style={{fontSize:"16px"}}><b>{user.m_id}님 환영합니다.</b></span>
            <Button onClick={handleLogout}>logout(Spring 서버)</Button></>) :
            (<><Link href="/login">login(Spring 서버)</Link>
             <Link href="/join">join(Spring 서버)</Link></>)
            }
            </Stack>   
        </nav>
        <hr/>
        {children}
        <hr/>
        <ul>
          {/* /create 이면 create폴더를 찾는다. */}
          {/* 폴더 안에는 page.jsx(필수) 와 layout.jsx(선택) 가 있다. */}
          <li><Link href="/create">Create</Link></li>
          <li>Update</li>
          <li><input type="button" value="delete"/></li>
        </ul>
      </body>
    </html>
  );
}
