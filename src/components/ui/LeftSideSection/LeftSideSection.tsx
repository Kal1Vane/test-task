import { Box } from '@mui/material';

export const LeftSideSection = ({ children, style }: { children: React.ReactNode; style?: any }) => {
  return (
    <Box
      sx={{
        minWidth: { xs: '250px', md: '250px' },
        width: { xs: '100%', md: '350px' },
        maxWidth: { xs: '100%', md: '350px' },
        overflowX: 'hidden',
        zIndex: 1,
        height: '100%',
        ...style,
      }}
    >
      {children}
    </Box>
  );
};
