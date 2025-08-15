import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import ShareIcon from '@mui/icons-material/Share';
import cartsData from './cartInfoData';
import { Button, Box } from '@mui/material';
import { StyledBoxParent, StyledCardParent ,PurpleButton } from './style';

export default function CartSection() {


  return (
    <>
    <StyledBoxParent   >

       {cartsData.map((cart, index) => (
        <StyledCardParent key={index} >
          <CardHeader
            avatar={<Avatar aria-label="user" src={cart.avatarImg}></Avatar>}
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={cart.email}
            subheader={cart.date}
          />
          <CardMedia
            component="img"
            height="194"
            image={cart.bgImg || '/image.png'}
            alt={cart.email}
          />
          <CardContent>
            <Typography variant="h5" color='white' bgcolor={'#616161'} textAlign='center' >
              {cart.rate}
            </Typography>
          </CardContent>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <CardContent>
              <Typography  mb={1} >
                <RemoveRedEyeIcon /> {cart.views.view} | <FavoriteBorderIcon />{' '}
                {cart.views.liks} | <ModeCommentIcon /> {cart.views.comments}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography>
                <ShareIcon />
              </Typography>
            </CardContent>
          </Box>

          <CardContent>
            <Typography variant="body2" color='text.secondary' >
              {cart.dealog}
            </Typography>
          </CardContent>
          <Box>
            {' '}
            <PurpleButton variant="text"  >Show more</PurpleButton>{' '}
          </Box>
        </StyledCardParent>
      ))}
    </StyledBoxParent>
     
    </>
  );
}
