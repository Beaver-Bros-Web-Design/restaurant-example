import { Box, Typography,  Chip, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";


function MenuSection({ title, items }) { //for each menu subsection - e.g. entrees
  const theme = useTheme();

  return (
    <Grid size={6}>
      <Box
        sx={{
          padding: 2,
          borderRadius: 2,
          backgroundColor: "rgba(26, 26, 26, 0.9)",
          border: `1px solid ${theme.palette.secondary.main}`,
          boxShadow: `0 6px 16px rgba(220, 172, 88, 0.15)`,
          height: "100%",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            marginBottom: 2,
            textAlign: "center",
            color: theme.palette.secondary.main,
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: "1.5px",
            borderBottom: `2px solid ${theme.palette.secondary.main}`,
            paddingBottom: 1,
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          {title}
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {items.map((item, index) => (
            <Box
              key={index}
              sx={{
                padding: 2,
                backgroundColor: "rgba(42, 42, 42, 0.7)",
                borderRadius: 2,
                border: `1px solid rgba(220, 172, 88, 0.3)`,
                display: "flex",
                flexDirection: "column",
                gap: 0.3,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: "#ffffff",
                  fontSize: "0.9rem",
                  fontFamily: "'Poppins', sans-serif",
                  borderBottom: `1px dashed rgba(220, 172, 88, 0.4)`,
                  paddingBottom: 0.5,
                }}
              >
                {item.name}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: "#e2e2e2",
                  fontSize: "0.75rem",
                  lineHeight: 1.4,
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 300,
                }}
              >
                {item.description}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontWeight: 600,
                  color: theme.palette.secondary.main,
                  fontSize: "1rem",
                  marginTop: 0.3,
                }}
              >
                ${item.price}
              </Typography>

              {item.dietaryIcons?.length > 0 && (
                <Box
                  sx={{
                    display: "flex",
                    gap: 0.5,
                    flexWrap: "wrap",
                    marginTop: 0.5,
                  }}
                >
                  {item.dietaryIcons.map((icon, iconIndex) => (
                    <Chip
                      key={iconIndex}
                      label={icon}
                      size="small"
                      sx={{
                        backgroundColor: theme.palette.secondary.main,
                        color: "#121212",
                        fontWeight: 500,
                        fontSize: "0.7rem",
                        borderRadius: "4px",
                        paddingX: 0.4,
                      }}
                    />
                  ))}
                </Box>
              )}

              {item.addOns && (
                <Box sx={{ marginTop: 0.5 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      fontStyle: "italic",
                      color: "#bbbbbb",
                      marginBottom: 0.5,
                    }}
                  >
                    Add-ons:
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 0.5,
                      flexWrap: "wrap",
                    }}
                  >
                    {item.addOns.map((addOn, addOnIndex) => (
                      <Chip
                        key={addOnIndex}
                        label={addOn}
                        size="small"
                        variant="outlined"
                        sx={{
                          borderColor: theme.palette.secondary.main,
                          color: theme.palette.secondary.main,
                          fontSize: "0.7rem",
                          borderRadius: "4px",
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </Grid>
  );
}

export default MenuSection;