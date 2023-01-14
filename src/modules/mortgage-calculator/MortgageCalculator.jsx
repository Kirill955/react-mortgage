import React from 'react'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Slider from '@mui/material/Slider'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

function MortgageCalculator() {
    return (
        <Box>
            <h1>Ипотека на авито</h1>

            <Container>
                <Box width={300} mt="36px">
                    <Typography>Стоимость жилья</Typography>
                    <TextField type="number" label="Сумма" variant="outlined" />
                    <Slider
                        defaultValue={50}
                        aria-label="Default"
                        valueLabelDisplay="auto"
                    />
                </Box>

                <Box width={300} mt="36px">
                    <Typography>Стоимость жилья</Typography>
                    <TextField type="number" label="Сумма" variant="outlined" />
                    <Slider
                        defaultValue={50}
                        aria-label="Default"
                        valueLabelDisplay="auto"
                    />
                </Box>

                <Box width={300} mt="36px">
                    <Typography>Стоимость жилья</Typography>
                    <TextField type="number" label="Сумма" variant="outlined" />
                    <Slider
                        defaultValue={50}
                        aria-label="Default"
                        valueLabelDisplay="auto"
                    />
                </Box>
            </Container>
        </Box>
    )
}

export default MortgageCalculator
