import { ThemeProvider, createTheme } from "@mui/material/styles";
import * as React from "react";
import ParetoChart from "./components/ParetoChart";
import Actionbar from "./components/Appbar";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import MarkerChart from "./components/MarkerChart";
import ApexChart from "./components/BarLineChart";
import { Paper, Grid, Box, Card, CardContent, Typography } from "@mui/material";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function useColorMode() {
  const [mode, setMode] = React.useState("light");

  const toggleColorMode = React.useCallback(() => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  }, []);

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return { mode, toggleColorMode, theme };
}

function App() {
  const { toggleColorMode, theme } = useColorMode();
  const charts = [
    { component: <ParetoChart />, title: "Pareto Chart" },
    { component: <LineChart />, title: "Line Chart" },
    { component: <ApexChart />, title: "Bar Line Chart" },
    { component: <BarChart />, title: "Bar Chart" },
    { component: <MarkerChart />, title: "Paynter Chart" },
  ];

  return (
    <ColorModeContext.Provider value={{ toggleColorMode }}>
      <ThemeProvider theme={theme}>
        <Box height="100%">
          <Paper elevation={0}>
            <Grid container spacing={0}>
              <Grid container spacing={6} sx={{ p: 4 }}>
                <Grid item xs={12} md={12}>
                  <Actionbar toggleColorMode={toggleColorMode} />
                </Grid>

                {charts.map((chart, index) => (
                  <Grid
                    item
                    xs={12}
                    md={chart.title === "Marker Chart" ? 12 : 6}
                    key={index}
                  >
                    <Card>
                      <CardContent>
                        <Typography variant="h6" component="div">
                          {chart.title}
                        </Typography>
                        {chart.component}
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
