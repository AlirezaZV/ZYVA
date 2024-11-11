import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { alpha as hexAlpha } from '@mui/material/styles';

// import { paths } from 'src/routes/paths';

// import { CONFIG } from 'src/config-global';
import { varAlpha, bgGradient } from 'src/theme/styles';

// import { Label } from 'src/components/label';

import { useAuthContext } from 'src/auth/hooks';

// ----------------------------------------------------------------------

export function NavUpgrade({ sx, ...other }) {
  const { user } = useAuthContext();

  return (
    <Stack sx={{ px: 2, py: 5, textAlign: 'center', ...sx }} {...other}>
      <Stack alignItems="center">
        <Box sx={{ position: 'relative' }}>
          <Avatar src={user?.photoURL} alt={user?.displayName} sx={{ width: 48, height: 48 }}>
            {user?.displayName?.charAt(0).toUpperCase()}
          </Avatar>

          {/* <Label
            color="success"
            variant="filled"
            sx={{
              top: -6,
              px: 0.5,
              left: 40,
              height: 20,
              position: 'absolute',
              borderBottomLeftRadius: 2,
            }}
          >
            Free
          </Label> */}
        </Box>

        <Stack spacing={0.5} sx={{ mb: 2, mt: 1.5, width: 1 }}>
          <Typography
            variant="subtitle2"
            noWrap
            sx={{ color: 'var(--layout-nav-text-primary-color)' }}
          >
            {user?.displayName}
          </Typography>

          <Typography
            variant="body2"
            noWrap
            sx={{ color: 'var(--layout-nav-text-disabled-color)' }}
          >
            {user?.phoneNumber}
          </Typography>
        </Stack>

        {/* <Button variant="contained" target="_blank" rel="noopener">
          تماس با پشتيباني
        </Button> */}
      </Stack>
    </Stack>
  );
}

// ----------------------------------------------------------------------

export function UpgradeBlock({ sx, ...other }) {
  return (
    <Stack
      sx={{
        ...bgGradient({
          color: `135deg, ${hexAlpha('#F7BB95', 0.92)}, ${hexAlpha('#5B2FF3', 0.92)}`,
          imgUrl: `/assets/background/background-7.webp`,
        }),
        px: 3,
        py: 4,
        borderRadius: 2,
        position: 'relative',
        ...sx,
      }}
      {...other}
    >
      <Box
        sx={{
          top: 0,
          left: 0,
          width: 1,
          height: 1,
          borderRadius: 2,
          position: 'absolute',
          border: (theme) => `solid 3px ${varAlpha(theme.vars.palette.common.whiteChannel, 0.16)}`,
        }}
      />

      <Box
        component={m.img}
        animate={{ y: [-55, -70, -55] }}
        transition={{
          duration: 8,
          ease: 'linear',
          repeat: Infinity,
          repeatDelay: 0,
        }}
        alt="asks"
        src="/assets/illustrations/characters/character-6.webp"
        sx={{ right: 0, width: 70, height: 120, position: 'absolute' }}
      />
      <Stack alignItems="flex-start" sx={{ position: 'relative' }}>
        {/* <Box component="span" sx={{ typography: 'h5', color: 'common.white' }}>
          35% OFF
        </Box>

        <Box
          component="span"
          sx={{
            mb: 2,
            mt: 0.5,
            color: 'common.white',
            typography: 'subtitle2',
          }}
        >
          Power up Productivity!
        </Box> */}

        <Button variant="contained" size="small" color="warning">
          نياز به مشاوره داريد؟
        </Button>
      </Stack>
    </Stack>
  );
}