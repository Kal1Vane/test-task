import { Box } from '@mui/material';

export const RightSideSection = ({ children, style }: { children: React.ReactNode; style?: any }) => {
  return (
    <Box
      sx={{
        display: { xs: 'none', md: 'flex', flexDirection: 'column' },
        width: {
          xs: '100%',
        },
        ...style,
      }}
    >
      {children}
    </Box>
  );
};
