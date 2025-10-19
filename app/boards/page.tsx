"use client";
import { Box, Card } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface BoardInfoInterface {
  id?: number;
  name: string;
}

export default function Page() {
  const [boardInfos, setBoardInfos] = useState<BoardInfoInterface[]>([]);
  const router = useRouter(); // Initialize the Next.js router

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<BoardInfoInterface[]>("http://localhost:8080/api/board/getUsersBoardInfos");
        setBoardInfos(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  const handleCardClick = (id?: number) => {
    if (id) {
      router.push(`/board/${id}`); // Navigate to the board/{id} route
    }
  };

  return (
    <Box>
      {boardInfos.map((boardInfo) => (
        <Card key={boardInfo.id} onClick={() => handleCardClick(boardInfo.id)} style={{ cursor: "pointer" }}>
          {boardInfo.name}
        </Card>
      ))}
    </Box>
  );
}
