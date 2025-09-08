import { useState } from 'react';
import Grid from "@mui/material/Grid";
import { Box, Typography, Button, Card, CardContent, CardMedia, } from "@mui/material";

import theme from '../../theme/theme';

const initialCategories = [
    {
        id: 1,
        title: "Lorem Ipsum is simply dummy.",
        image: "https://pedsovet.org/v3/upload/ckeditor/87/images/2021-08-10/1628607901_Depositphotos_26159249_l-2015.jpg",
    },
    {
        id: 2,
        title: "Lorem Ipsum is simply dummy.",
        image: "https://pedsovet.org/v3/upload/ckeditor/87/images/2021-08-10/1628607901_Depositphotos_26159249_l-2015.jpg",
    },
    {
        id: 3,
        title: "Lorem Ipsum is simply dummy.",
        image: "https://pedsovet.org/v3/upload/ckeditor/87/images/2021-08-10/1628607901_Depositphotos_26159249_l-2015.jpg",
    },
    {
        id: 4,
        title: "Lorem Ipsum is simply dummy.",
        image: "https://pedsovet.org/v3/upload/ckeditor/87/images/2021-08-10/1628607901_Depositphotos_26159249_l-2015.jpg",
    },
    {
        id: 5,
        title: "Lorem Ipsum is simply dummy.",
        image: "https://pedsovet.org/v3/upload/ckeditor/87/images/2021-08-10/1628607901_Depositphotos_26159249_l-2015.jpg",
    },
];

const Categoty = () => {
    const [open, setOpen] = useState(false);
    const [categories, setCategories] = useState(initialCategories);



    return (
        <Box sx={{ width: "100%", maxWidth: "1360px", mx: "auto", mb: 10 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.3 }}>
                    <Typography variant="h4" sx={{ fontWeight: 700, color: '#fff' }}>
                        Категории
                    </Typography>
                    <Typography variant="h4" sx={{
                        fontWeight: 700,
                        background: theme.customGradients.accent,
                        backgroundClip: "text",
                        textFillColor: "transparent",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}>
                        игр
                    </Typography>
                </Box>

                <Button
                    sx={{
                        marginLeft: "auto",
                        border: `2px solid ${theme.palette.secondary.main}`,
                        borderRadius: "16px",
                        color: "#fff",
                        textTransform: "none",
                        fontWeight: 600,
                        px: 3,
                        py: 1,

                        '&:hover': {

                            background: theme.palette.secondary.main,
                        },
                    }}
                    onClick={() => setOpen((prev) => !prev)}
                >
                    {open ? "Скрыть" : "Смотреть все"}
                </Button>
            </Box>
            <Grid container spacing={2.5}>
                {(open ? categories : categories.slice(0, 4)).map((cat) => (
                    <Grid size={{ xs: 12, sm: 6, md: 3 }} key={cat.id}>
                        <Card
                            key={cat.id}
                            sx={{
                                background: "#4B2332",
                                borderRadius: "16px",
                                p: 2,
                                color: "#fff",
                                border: `2px solid ${theme.palette.secondary.main}`,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                            }}
                        >
                            <CardMedia
                                component="img"

                                image={cat.image}
                                alt={cat.title}
                                sx={{ borderRadius: "16px", objectFit: "cover", height: 130, }}
                            />
                            <CardContent sx={{ p: 0, "&:last-child": { py: 2 } }}>
                                <Typography variant="body1" sx={{ fontWeight: 600, color: '#fff', px: 0 }}>
                                    {cat.title}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>

    );
};

export default Categoty;
