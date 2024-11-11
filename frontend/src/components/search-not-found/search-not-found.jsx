import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

export function SearchNotFound({ query, sx, ...other }) {
  if (!query) {
    return (
      <Typography variant="body2" sx={sx}>
        Please enter keywords
      </Typography>
    );
  }

  return (
    <Box sx={{ textAlign: 'center', borderRadius: 1.5, ...sx }} {...other}>
      <Box sx={{ mb: 1, typography: 'h6' }}>پيدا نشد!</Box>

      <Typography variant="body2">
        نتيجه‌اي براي &nbsp;
        <strong>{`"${query}"`}</strong>
        يافت نشد.
        <br /> لطفا با دقت بيشتري جستجو كنيد.
      </Typography>
    </Box>
  );
}
