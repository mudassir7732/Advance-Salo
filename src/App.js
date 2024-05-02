import { Box, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import AppRoutes from "./routes/AppRoutes";
import theme from "./theme";
import { Store } from "./store/index";
import { StrictMode } from "react";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
let persistor = persistStore(Store);

export default function App() {
  return (
    <StrictMode>
      <Provider store={Store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <Box sx={{ overflowX: "hidden" }}>
              <AppRoutes />
            </Box>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </StrictMode>
  );
}
