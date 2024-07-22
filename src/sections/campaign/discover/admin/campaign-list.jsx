import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Pagination, { paginationClasses } from '@mui/material/Pagination';

import CampaignItem from './campaign-item';

// ----------------------------------------------------------------------

export default function CampaignLists({ campaigns }) {
  return (
    <>
      <Box
        gap={3}
        display="grid"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
        }}
      >
        {campaigns.map((campaign) => (
          <CampaignItem key={campaign.id} campaign={campaign} status={campaign?.status} />
        ))}
      </Box>

      {campaigns.length > 8 && (
        <Pagination
          count={8}
          sx={{
            mt: 8,
            [`& .${paginationClasses.ul}`]: {
              justifyContent: 'center',
            },
          }}
        />
      )}
    </>
  );
}

CampaignLists.propTypes = {
  campaigns: PropTypes.array,
};
