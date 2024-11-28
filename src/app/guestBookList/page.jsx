'use client'
import { Link, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './guestBookList.css';

function page(props) {
  const [list, setList] = useState([]);
  const API_URL = "http://localhost:8080/api/guestbook/list";
  const getData = () => {
    axios.get(
      API_URL
    )
      .then(res => {
        console.log(res.data);
        setList(res.data) 
      })
      .catch(
        console.log("에러발생")
      )
  }

  useEffect(() => {
    getData();
  }, [])
  return (
    <>
     <h2 className="title">GuestBookList</h2>
            <TableContainer component={Paper} className="table-container">
                <Table className="custom-table">
                    <TableHead>
                        <TableRow>
                            <TableCell className="table-header">이름</TableCell>
                            <TableCell className="table-header">제목</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {list.map((item) => (
                            <TableRow key={item.gb_idx}>
                                <TableCell className="table-cell">{item.gb_name}</TableCell>
                                <TableCell className="table-cell">
                                    <Link href={`/guestBookDetails/${item.gb_idx}`}>{item.gb_subject}</Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
    </>
  );
}

export default page;