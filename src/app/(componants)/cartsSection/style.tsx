import { Box, Card, styled , Button} from '@mui/material';
export const StyledBoxParent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 2,
  justifyContent: 'center',
  alignItems: 'center',
  margin :'10px'
}));
export const StyledCardParent = styled(Card)(({ theme }) => ({
  maxWidth: '345px',
  margin: '2px',
}));
export  const PurpleButton = styled(Button)({
  color: '#9c27b0', 
  margin:'3px'
});
