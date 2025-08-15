'use client';
import {
  CardActionArea,
  CardContent,
  Typography,
  Box,
  Button,
  Paper,
} from '@mui/material';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import {
  StyledBox1,
  StyledBox2,
  StyledBoxCard,
  StyledBoxContent,
  StyledBoxParent,
  StyledButton1,
  StyledCard,
  StyledStack1,
  StyledTypography,
} from './style';
import LockOutlineIcon from '@mui/icons-material/LockOutline';
import cards from './cardsData';
import tableData from './tableData';

export default function UserList() {
  const [selectedCard, setSelectedCard] = useState<number>(0);

  return (
    <Box component="nav" sx={{ width: '100%' }}>
      <Box>
        {/* Header */}
        <StyledBox1>
          <StyledTypography variant="h6">Name</StyledTypography>
        </StyledBox1>

        <StyledBox2>
          <StyledButton1 variant="outlined">
            <AddIcon /> Add creators
          </StyledButton1>
        </StyledBox2>

        {/* Parent Container */}
        <StyledBoxParent>
          {/* Left Side */}
          <StyledStack1 spacing={2}>
            {cards.map((card, index) => (
              <StyledCard key={card.id}>
                <Box sx={{ position: 'relative' }}>
                  <Box
                    component="img"
                    src="/photo1.png"
                    alt={card.title}
                    sx={{
                      width: '100%',
                      height: 200,
                      objectFit: 'cover',
                      borderRadius: '12px 0 0 12px',
                    }}
                  />
                  <StyledBoxCard
                    component="img"
                    src="/photo2.png"
                    alt="icon"
                  />
                </Box>

                <CardActionArea
                  onClick={() => setSelectedCard(index)}
                  data-active={selectedCard === index ? '' : undefined}
                  sx={{
                    flex: 1,
                    textAlign: 'left',
                    '&[data-active]': {
                      backgroundColor: 'action.selected',
                      '&:hover': {
                        backgroundColor: 'action.selectedHover',
                      },
                    },
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      {card.title}
                    </Typography>
                    <Typography variant="body2">{card.email}</Typography>
                    <Typography variant="body1" sx={{ fontWeight: 400 }}>
                      {card.rate}
                    </Typography>

                    <Typography
                      variant="body1"
                       fontWeight={600} mt={3}
                    >
                      {card.salery}
                    </Typography>

                    <StyledBoxContent>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#333',
                          fontSize: '16px',
                          fontWeight: 700,
                        }}
                      >
                        {card.description}
                      </Typography>
                      <Box sx={{ display: 'flex' }}>
                        <Button
                          component="div"
                          variant="text"
                          sx={{ color: '#211142' }}
                        >
                          review
                        </Button>
                        <Button
                          component="div"
                          variant="text"
                          sx={{ color: '#333' }}
                        >
                          ...
                        </Button>
                      </Box>
                    </StyledBoxContent>
                  </CardContent>
                </CardActionArea>
              </StyledCard>
            ))}
          </StyledStack1>

          {/* Right Side */}
          {/* fixed */}
          <Paper sx={{ p: 2, width: '100%', border: '1px solid #333' }}>
            {tableData.map((row, index) => (
              <Box color="#333" key={index}>
                {[
                  { label: 'Budget', value: row.budget },
                  { label: 'Reach', value: row.reach },
                  { label: 'Engagements', value: row.engagements },
                  {
                    label: 'Cost Per Engagement',
                    value: row.coastPerEng,
                  },
                  {
                    label: 'Cost Per Thousand (CPM)',
                    value: row.coastPerThousand,
                  },
                  {
                    label: 'Return On Investment (ROI)',
                    value:
                      row.returnOnInv || <LockOutlineIcon />,
                  },
                  { label: 'Target Geo Match', value: row.targetGeoMatch },
                  {
                    label: 'Target & Gender Match',
                    value: row.targetGeoGender,
                  },
                  {
                    label: 'Instagram Activities',
                    value: row.instaActivity,
                  },
                ].map((item, i) => (
                  <Box
                    key={i}
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      py: 1,
                      borderBottom:
                        i !== 8 ? '1px solid #eee' : 'none',
                    }}
                  >
                    <Typography sx={{ fontWeight: 600 }}>
                      {item.label}
                    </Typography>
                    <Typography>{item.value}</Typography>
                  </Box>
                ))}
              </Box>
            ))}
          </Paper>
        </StyledBoxParent>
      </Box>
    </Box>
  );
}
