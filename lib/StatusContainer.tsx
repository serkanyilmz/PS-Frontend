import { Box } from "@mui/material";
import { Status } from "./Status";
import { useEffect, useState } from "react";
import axios from "axios";

export default function StatusContainer({ boardId }: { boardId: number }) {    
    const [statuses, setStatuses] = useState<number[]>([]);
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get("http://localhost:8080/api/board/getStatuses/"+boardId);
            setStatuses(response.data);
          } catch (err) {
            console.error(err);
          }
        };
    
        fetchData();
      }, [boardId]);

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                height: "100%",
                backgroundColor: "black",
                overflowX: "auto",
                overflowY: "hidden",
                boxSizing: "border-box",
                paddingBottom: "40px",
            }}
        >
            {statuses.map((status) => (
                <Status id={status} />
            ))}
        </Box>

    )
}