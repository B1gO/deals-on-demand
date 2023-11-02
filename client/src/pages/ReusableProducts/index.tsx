import React from 'react';
import { Box, Typography } from '@mui/material';
import WalmartProduct from '@/components/WalmartProduct';
import AmazonProduct from '@/components/AmazonProduct';
import { WalmartProduct as WalmartType } from '@/types/walmart';
import { AmazonProduct as AmazonType } from '@/types/amazon';
import { isAmazon, isWalmart } from '@/utils/checkProductType.ts';

const ReusableProducts = ({
  productList,
  from
}: {
  productList: WalmartType[] | AmazonType[];
  from: string;
}) => {
  return (
    <React.Fragment>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItem: { xs: 'center', sm: 'center' },
          marginLeft: { xs: '0', sm: '20px' }
        }}
      >
        {from === 'search' ? (
          <Typography
            variant="h6"
            fontWeight={600}
            sx={{
              marginBottom: '10px',
              paddingLeft: '40px',
              display: 'flex',
              justifyContent: { xs: 'center', sm: 'start' }
            }}
          >
            {productList.length} Search results
          </Typography>
        ) : from === 'home' ? (
          <Typography
            variant="h6"
            fontWeight={600}
            sx={{
              marginBottom: '10px',
              display: 'flex',
              justifyContent: { xs: 'center', sm: 'start' }
            }}
          >
            Exclusive Deals
          </Typography>
        ) : (
          <Typography
            variant="h6"
            fontWeight={600}
            sx={{
              marginBottom: '10px',
              display: 'flex',
              justifyContent: { xs: 'center', sm: 'start' }
            }}
          >
            Exclusive Deals On Funitures
          </Typography>
        )}

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'column', md: 'row' },
            flexWrap: { xs: 'nowrap', sm: 'nowrap', md: 'wrap' },
            alignItems: { xs: 'start', md: 'center' },
            justifyContent: { xs: 'start', sm: 'start' },
            margin: { xs: '0 0 0 0', md: '10px 0 0 40px' },
            gap: '20px'
          }}
        >
          {productList.map((item, index) => (
            <div key={index}>
              {from === 'headerelectronics'
                ? isAmazon(item) && <AmazonProduct item={item} />
                : isWalmart(item) && <WalmartProduct item={item} />}
            </div>
          ))}
        </Box>
      </Box>
    </React.Fragment>
  );
};
export default ReusableProducts;
