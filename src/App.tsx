import "@mantine/core/styles.css";
import { AppShell, Container, MantineProvider } from "@mantine/core";
import { HashRouter, Routes, Route } from "react-router-dom";
import { theme } from "./theme";
import { FunctionComponent } from "react";
import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";
import { Home } from "./pages/home/Home";
import { Contact } from "./pages/contact/Contact";
import { News } from "./pages/news/News";
import { Location } from "./pages/location/Location";
import { About } from "./pages/about/About";
import { APP_MAX_WIDTH } from "./constants";

export const App: FunctionComponent = () => {
  return (
    <HashRouter>
      <MantineProvider theme={theme}>
        <AppShell bg="gray.1">
          <Container maw={APP_MAX_WIDTH} py={0} px="sm">
            <AppShell.Main>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="location" element={<Location />} />
                <Route path="contact" element={<Contact />} />
                <Route path="news" element={<News />} />
              </Routes>
              <Footer />
            </AppShell.Main>
          </Container>
        </AppShell>
      </MantineProvider>
    </HashRouter>
  );
};
