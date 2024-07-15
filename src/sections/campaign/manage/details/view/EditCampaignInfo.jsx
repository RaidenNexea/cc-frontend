import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import Chip from '@mui/material/Chip';
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
} from '@mui/material';

import FormProvider from 'src/components/hook-form/form-provider';
import { RHFTextField, RHFAutocomplete } from 'src/components/hook-form';

// TODO TEMP: Copied from `src/sections/campaign/create/form.jsx`, consider consolidating them sometime
const interestsLists = [
  'Art',
  'Beauty',
  'Business',
  'Fashion',
  'Fitness',
  'Food',
  'Gaming',
  'Health',
  'Lifestyle',
  'Music',
  'Sports',
  'Technology',
  'Travel',
];

export const EditCampaignInfo = ({ open, campaign, onClose }) => {
  const methods = useForm({
    defaultValues: {
      name: campaign?.name || '',
      description: campaign?.name || '',

      campaignInterests: campaign?.campaignBrief?.interests || [],
      campaignIndustries: campaign?.campaignBrief?.industries || [],
    },
  });

  const closeDialog = () => onClose('campaignInfo');

  return (
    <Dialog
      open={open.campaignInfo}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
      maxWidth="md"
    >
      <DialogTitle id="alert-dialog-title">Edit Campaign Information</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description" p={1.5}>
          <FormProvider methods={methods}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: 'repeat(1, 1fr)',
                  md: 'repeat(2, 1fr)',
                },
                gap: 2,
              }}
            >
              <RHFTextField name="name" label="Campaign Name" fullWidth />
              <RHFTextField name="description" label="Campaign Description" multiline />
              <RHFAutocomplete
                name="campaignInterests"
                placeholder="+ Interests"
                multiple
                freeSolo
                disableCloseOnSelect
                options={interestsLists.map((option) => option)}
                getOptionLabel={(option) => option}
                renderOption={(props, option) => (
                  <li {...props} key={option}>
                    {option}
                  </li>
                )}
                renderTags={(selected, getTagProps) =>
                  selected.map((option, index) => (
                    <Chip
                      {...getTagProps({ index })}
                      key={option}
                      label={option}
                      size="small"
                      color="info"
                      variant="soft"
                    />
                  ))
                }
              />
              <RHFAutocomplete
                name="campaignIndustries"
                placeholder="+ Industries"
                multiple
                freeSolo
                disableCloseOnSelect
                options={interestsLists.map((option) => option)}
                getOptionLabel={(option) => option}
                renderOption={(props, option) => (
                  <li {...props} key={option}>
                    {option}
                  </li>
                )}
                renderTags={(selected, getTagProps) =>
                  selected.map((option, index) => (
                    <Chip
                      {...getTagProps({ index })}
                      key={option}
                      label={option}
                      size="small"
                      color="info"
                      variant="soft"
                    />
                  ))
                }
              />
            </Box>
          </FormProvider>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeDialog}>Cancel</Button>
        <Button
          type="submit"
          onClick={closeDialog}
          autoFocus
          color="primary"
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

EditCampaignInfo.propTypes = {
  open: PropTypes.object,
  campaign: PropTypes.object,
  onClose: PropTypes.func,
};
