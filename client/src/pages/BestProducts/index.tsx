import React, { useRef } from 'react';

import { Box, Button, Divider, Typography, useTheme } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import useMediaQuery from '@mui/material/useMediaQuery';
import AmazonProduct from '@/components/AmazonProduct';
import { AmazonProduct as ProductType } from '@/types/amazon';
import { scrollTo } from '@/utils';

type ProductListType = {
  list1: ProductType[];
  list2: ProductType[];
};

const BestProducts = ({ productList }: { productList: ProductListType }) => {
  const scrollRef1 = useRef<HTMLElement | null>(null);
  const scrollRef2 = useRef<HTMLElement | null>(null);
  const { breakpoints } = useTheme();
  const mediumSizeMatches = useMediaQuery(breakpoints.up('md'));

  return (
    <React.Fragment>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
          alignItems: { xs: 'center', sm: 'start' },
          width: '100%'
        }}
      >
        <Typography
          variant="h6"
          fontWeight={600}
          sx={{ marginBottom: '10px', marginLeft: '20px' }}
        >
          Best Deals On Electronics
        </Typography>
        <Box sx={{ display: 'flex', width: '100%' }}>
          <Button
            sx={{ borderRadius: '5px', display: { xs: 'none', sm: 'block' } }}
            onClick={() =>
              scrollTo(scrollRef1, mediumSizeMatches ? -300 : -150)
            }
          >
            <ArrowBackIosIcon />
          </Button>
          <Box
            ref={scrollRef1}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: { xs: 'wrap', sm: 'nowrap' },
              alignItems: 'center',
              justifyContent: { xs: 'center', sm: 'start' },
              width: '100%',
              height: { md: 310, sm: 200, xs: 300 },

              margin: '10px 0',
              overflow: { sm: 'hidden' },
              overflowX: 'scroll',
              scrollBehavior: 'smooth'
            }}
          >
            {productList.list1.map((item, index) => (
              <div key={index}>
                <AmazonProduct item={item} />
              </div>
            ))}
          </Box>
          <Button
            sx={{ borderRadius: '5px', display: { xs: 'none', sm: 'block' } }}
            onClick={() => scrollTo(scrollRef1, mediumSizeMatches ? 300 : 150)}
          >
            <ArrowForwardIosIcon />
          </Button>
        </Box>
        <Divider>
          <Typography
            variant="h6"
            fontWeight={600}
            sx={{
              marginBottom: '10px',
              marginLeft: '20px',
              display: { xs: 'block', sm: 'none' }
            }}
          >
            More Deals
          </Typography>
        </Divider>
        <Box sx={{ display: 'flex', width: '100%' }}>
          <Button
            sx={{ borderRadius: '5px', display: { xs: 'none', sm: 'block' } }}
            onClick={() =>
              scrollTo(scrollRef2, mediumSizeMatches ? -300 : -150)
            }
          >
            <ArrowBackIosIcon />
          </Button>
          <Box
            ref={scrollRef2}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: { xs: 'wrap', sm: 'nowrap' },
              alignItems: 'center',
              justifyContent: { xs: 'center', sm: 'start' },
              width: '100%',

              height: { md: 310, sm: 200, xs: 300 },
              margin: '10px 0',
              overflow: { sm: 'hidden' },
              overflowX: 'scroll',
              scrollBehavior: 'smooth'
            }}
          >
            {productList.list2.map((item, index) => (
              <div key={index}>
                <AmazonProduct item={item} />
              </div>
            ))}
          </Box>
          <Button
            sx={{ borderRadius: '5px', display: { xs: 'none', sm: 'block' } }}
            onClick={() => scrollTo(scrollRef2, mediumSizeMatches ? 300 : 150)}
          >
            <ArrowForwardIosIcon />
          </Button>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default BestProducts;
