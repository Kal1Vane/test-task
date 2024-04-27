import { Box } from '@mui/material';
import { LeftSideSection } from '../LeftSideSection/LeftSideSection';
import { RightSideSection } from '../RightSideSection/RightSideSection';
import { FilterCurrency } from '../FilterСurrency/FilterCurrency';

export const MainContainer = () => {
  return (
    <Box sx={style.mainContainer}>
      <Box sx={style.mainWrapper}>
        <LeftSideSection>
          <FilterCurrency />
        </LeftSideSection>
        <RightSideSection>
          <>dsa</>
        </RightSideSection>
      </Box>
    </Box>
  );
};

const style = {
  mainContainer: {
    width: '100%',
    height: 'auto',
    minHeight: 'calc(100vh - 91px)',
  },
  mainWrapper: {
    padding: { xs: '30px 20px 30px', md: '30px 40px 60px' },
    gap: { xs: '0px', lg: '96px', md: '0px' },
    display: 'flex',
  },
};
