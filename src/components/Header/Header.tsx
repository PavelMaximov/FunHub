import React, { useState } from "react";
import { AppBar, Toolbar, Button, Box } from "@mui/material"
import logo from "../../assets/images/logo_color.svg";
import dice from "../../assets/images/dice.svg";
import { useTheme } from "@mui/material/styles";

const Header: React.FC = () => {
    const theme = useTheme();
    const [activeCategory, setActiveCategory] = useState<number | null>(null); // No default active category

    const categories = [
        "Картегория 1",
        "Категория 2",
        "Категория 3",
        "Категория 4",
        "Категория 5"
    ];

    return (
        <AppBar position="static"
            sx={{
                background: "transparent",
                color: theme.palette.text.primary,
                boxShadow: 'none',
                py: 0,
                paddingTop: "1.85rem"
            }}>

            <Toolbar 
            disableGutters
            sx={{ 
                justifyContent: "space-between", 
                minHeight: '80px !important',
            }}>

                <Box component="img" src={logo} alt="FunHub Logo" sx={{ height: 60 }} />


                <Box sx={{ 
                    display: 'flex', 
                    gap: { xs: 1, sm: 2, md: 2 },
                    flexWrap: { xs: 'wrap', md: 'nowrap' },
                    justifyContent: 'center',
                    maxWidth: { xs: '300px', md: 'none' }
                }}>
                    {categories.map((category, index) => (
                        <Button
                            key={index}
                            color="inherit"
                            onClick={() => setActiveCategory(index + 1)}
                            sx={{
                                position: 'relative',
                                textTransform: 'none',
                                fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem' },
                                fontWeight: activeCategory === index + 1 ? 'bold' : 'normal',
                                px: { xs: 1, md: 2 },
                                minWidth: 'auto',
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    bottom: -2,
                                    left: 0,
                                    right: 0,
                                    height: 2,
                                    borderRadius: theme.customRadius.md,
                                    background: theme.customGradients.accent,
                                    opacity: 0,
                                    transition: 'opacity 0.3s ease'
                                },
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                    '&::after': {
                                        opacity: 1
                                    }
                                }
                            }}
                        >
                            {category}
                        </Button>
                    ))}
                </Box>


                <Box
                    sx={{
                        position: 'relative',
                        overflow: 'hidden',
                        borderRadius: "14px", 
                        border: '2px solid',
                        borderColor: 'transparent',
                        backgroundImage: `linear-gradient(${theme.palette.background.paper}, ${theme.palette.background.paper}), ${theme.customGradients.accent}`,
                        backgroundOrigin: 'border-box',
                        backgroundClip: 'padding-box, border-box',
                        transition: 'width 0.3s ease',
                        width: '68px',
                        height: '48px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        '&:hover': {
                            width: { xs: '180px', md: '200px' },
                            '& .button-text': {
                                opacity: 1,
                                transform: 'translateX(0)'
                            }
                        }
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            height: '100%',
                            px: 1.5,
                            gap: 1,
                            background: theme.customGradients.accent,
                            width: '100%',
                            borderRadius: '2px' 
                        }}
                    >
                        <Box
                            component="img"
                            src={dice}
                            sx={{
                                width: '20px',
                                height: '20px',
                                flexShrink: 0
                            }}
                        />
                        <Box
                            className="button-text"
                            sx={{
                                color: theme.palette.text.primary,
                                fontSize: { xs: '0.875rem', md: '1rem' },
                                fontWeight: 'bold',
                                opacity: 0,
                                transform: 'translateX(-10px)',
                                transition: 'all 0.3s ease',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            Случайная игра
                        </Box>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
