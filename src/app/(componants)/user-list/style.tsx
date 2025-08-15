
import {
  Box,
  BoxProps,
  Button,
  Card,
  Stack,
  styled,
  Typography,
} from '@mui/material';

// Start style Left side
export const StyledBox1 = styled(Box)(({ theme }) => ({
  width: '100%',
  backgroundColor: '#EFF3F6',
  p: 2,
}));
export const StyledTypography = styled(Typography)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  fontWeight: 700,
  fontSize: 25,
  color: '#333',
  padding: 3,
marginLeft:'10px',

}));

export const StyledBox2 = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: 4,
  
  borderBottom: '2px solid #D5D5D5 ',
}));
export const StyledButton1 = styled(Button)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: 4,
  marginLeft:'10px',
  color:'#333',
  borderBottom: '2px solid #D5D5D5 ',
  transition:'all 0.3s ease',

  '&:hover':{
transform:'translateX(-2px)',
backgroundColor:'#333',
color:'#eee',
boder:"none"
  }
}));


export const StyledStack1 = styled(Stack)(({ theme }) => ({
  borderRadius: '12px',
  padding: 2,
  width: '100%',
  [theme.breakpoints.up('md')]: {
    width: '50%',
  },
}));
export const StyledCard = styled(Card)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'stretch',
  position: 'relative',
  border: '1px solid #666A74',
}));
type styledBoxCardProps<C extends React.ElementType> = BoxProps<C>;
export const StyledBoxCard = styled(Box)<styledBoxCardProps<'img'>>(
  ({ theme }) => ({
    position: 'absolute',
    top: 8,
    left: 8,
    width: 24,
    height: 24,
    borderRadius: '50%',
  })
);

export const StyledBoxContent = styled(Box)(({ theme }) => ({

  display: 'flex',
  alignItems:'center',
  flexDirection: 'row',
  justifyContent :'space between'

 
}));
export const StyledImgsBox = styled(Box)(({ theme }) => ({

width :'100%',
height:'auto',
objectFit:'cover',
borderRadius:'12px 0 0 12px'

 
}));
export const StyledBoxParent = styled(Box)(({ theme }) => ({

  display: 'flex',
  alignItems:'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
  gap:'20px',
[theme.breakpoints.down('sm')]:{
 flexDirection: 'column',
 justifyContent: 'flex-start',
  alignItems:'stretch'
}

 
}));
// End style Left side
// Start style Right side