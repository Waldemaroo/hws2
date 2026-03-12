import React from 'react'
import { Slider, SliderProps } from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера
                color: '#4fd1c5',
                width: 200,
                '& .MuiSlider-thumb': {
                    borderRadius: '50%',
                    border: '2px solid white',
                    boxShadow: '0 0 0 4px rgba(79, 209, 197, 0.3)',
                },
                '& .MuiSlider-track': {
                    border: 'none',
                },
                '& .MuiSlider-rail': {
                    opacity: 0.3,
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
