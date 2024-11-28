"use client";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';
import './detail.css';

function Page({ item }) {
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