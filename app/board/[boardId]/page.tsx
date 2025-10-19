"use client"
import { useEffect, useState } from "react";
import axios from "axios";
import { Status } from "../../../lib/Status";
import { Box } from "@mui/material";
import StatusContainer from "../../../lib/StatusContainer";

export default function BoardPage({ params }: { params: { boardId: number } }) {
  const { boardId } = params;
  

  return (
      <StatusContainer boardId={boardId}/>
  );
}
