"use client";

import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Box,
  Stack,
  Button
} from "@mui/material";
import { useState } from "react";
import photo1 from "./imgs/photo1.png";
import photo2 from "./imgs/photo2.png";
import AddIcon from '@mui/icons-material/Add';
const cards = [
  {
    id: 1,
    title: "Ghaith Marwan",
    email: "@marwanantoinenehme•1.3M•United Kingdom (UK), London•",
    rate: "ER 0.47%",
    salery: "$5,939",
    description: "1 Post, 1 Story, and 1 Video",
 
  },
  {
    id: 2,
    title: "Ghaith Marwan",
    email: "@marwanantoinenehme•1.3M•United Kingdom (UK), London•",
    rate: "ER 0.47%",
    salery: "$5,939",
    description: "1 Post, 1 Story, and 1 Video",
   
  },
  {
    id: 3,
    title: "Ghaith Marwan",
    email: "@marwanantoinenehme•1.3M•United Kingdom (UK), London•",
    rate: "ER 0.47%",
    salery: "$5,939",
    description: "1 Post, 1 Story, and 1 Video",
   
  },
];

export default function UserList() {
  const [selectedCard, setSelectedCard] = useState(0);

  return (
    <Box component="nav" sx={{ width: "100%" }} >
      <Box >
        <Box sx={{width:"100%" , backgroundColor :"#EFF3F6", p: 1}}>
          <Typography
        variant="h6"
        sx={{
          
          display: "flex",
          alignItems: "center",
          
          fontWeight: 700,
          fontSize: 25,
          color: "#333",
        
          padding:2
        }}
      >
        Name
      </Typography> 
        </Box>
     <Box sx={{  display: "flex",
          alignItems: "center",
          padding:2,
          borderBottom :'2px solid #D5D5D5 '}}>
      <Button variant="contained"
      sx={{color :"#333" ,
        fontSize:"20px",
        fontWeight :700,
        backgroundColor :"#fff",
        border:'1px solid #333'
        
      }}
      ><AddIcon /> Add creators</Button>
     </Box>

      <Stack

       spacing={2}
       sx={{borderRadius :"12px",
        padding:2,
        width:{
          xs:"100%",
          md:'50%'
        }
       
       }}
      >
        {cards.map((card, index) => (
          <Card
            key={card.id}
            sx={{
              width:"100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "stretch",
              position: "relative",
              border :"1px solid #666A74"
            }}
          >
            {/* الصورة + الأيقونة */}
            <Box sx={{ position: "relative" }}>
              <Box
                component="img"
                src={photo1.src}
                alt={card.title}
                sx={{
                 
                  objectFit: "cover",
                  borderRadius: ' 12px 0 0 12px',
                }}
              />
              <Box
                component="img"
                src={photo2.src}
                alt="icon"
                sx={{
                  position: "absolute",
                  top: 8,
                  left: 8,
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                }}
              />
            </Box>

            {/* المحتوى */}
            <CardActionArea
              onClick={() => setSelectedCard(index)}
              data-active={selectedCard === index ? "" : undefined}
              sx={{
                flex: 1,
                textAlign: "left",
                "&[data-active]": {
                  backgroundColor: "action.selected",
                  "&:hover": {
                    backgroundColor: "action.selectedHover",
                  },
                },
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  {card.title}
                </Typography>
                <Typography
                  variant="body2"
        
                 
                >
                  {card.email}
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 400  }}>
                  {card.rate} 
                </Typography>

                <Typography variant="body1" sx={{ fontWeight: 600 ,mt:3 }}>
                  {card.salery}
                </Typography>
                <Box sx={{display:"flex",alignItems:'center',justifyContent: "space-between",}}>
                  <Typography variant="body2" sx={{ color:"#333" ,fontSize: "16px",fontWeight: 700}}>
                  {card.description}
                </Typography>
                <Box sx={{display :"flex"}}>
                  <Button variant="text" sx={{color:'#211142'}}>review</Button>
                  <Button variant="text" sx={{color:'#333'}}>...</Button>
                </Box>
                </Box>
                
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Stack>
    </Box>
    </Box>
    
   
  );
}
