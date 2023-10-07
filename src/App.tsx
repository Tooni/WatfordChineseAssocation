import "@mantine/core/styles.css";
import "./App.module.css";
import { AppShell, Container, MantineProvider } from "@mantine/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { theme } from "./theme";
import { FunctionComponent } from "react";
import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";
import { Home } from "./pages/home/Home";
import { Contact } from "./pages/contact/Contact";
import { About } from "./pages/about/About";
import { NoMatch } from "./pages/no-match/NoMatch";
import { News } from "./pages/news/News";

export const APP_MAX_WIDTH = 1200;
export const APP_HEADER_HEIGHT = 80;

export const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <MantineProvider theme={theme}>
        <AppShell header={{ height: APP_HEADER_HEIGHT }} padding="md">
          <AppShell.Header p="lg">
            <Container maw={APP_MAX_WIDTH}>
              <Header />
            </Container>
          </AppShell.Header>

          <Container maw={APP_MAX_WIDTH} p={0}>
            <AppShell.Main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="contact" element={<Contact />} />
                <Route path="about" element={<About />} />
                <Route path="news" element={<News />} />
                <Route path="*" element={<NoMatch/>} />
              </Routes>
              <Footer />
            </AppShell.Main>
          </Container>
        </AppShell>
      </MantineProvider>
    </BrowserRouter>
  );
};
