import "@mantine/core/styles.css";
import { AppShell, MantineProvider } from "@mantine/core";
import { HashRouter, Routes, Route } from "react-router-dom";
import { theme } from "./theme";
import { FunctionComponent } from "react";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Contact } from "./pages/contact/Contact";
import { News } from "./pages/news/News";
import { Location } from "./pages/location/Location";
import { About } from "./pages/about/About";
import { Gallery } from "./pages/gallery/Gallery";
import { Calendar } from "./pages/calendar/Calendar";
import { APP_MAX_WIDTH } from "./constants";

export const App: FunctionComponent = () => {
  return (
    <HashRouter>
      <MantineProvider theme={theme}>
        <AppShell bg="gray.2">
          <Header />
          <AppShell.Main
            ml="auto"
            mr="auto"
            maw={APP_MAX_WIDTH}
            bg="gray.1"
            p="sm"
          >
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="location" element={<Location />} />
              <Route path="contact" element={<Contact />} />
              <Route path="calendar" element={<Calendar />} />
              <Route path="news" element={<News />} />
            </Routes>
            <Footer />
          </AppShell.Main>
        </AppShell>
      </MantineProvider>
    </HashRouter>
  );
};
