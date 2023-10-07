import "@mantine/core/styles.css";
import "./App.module.css";
import { AppShell, Container, MantineProvider } from "@mantine/core";
import { HashRouter, Routes, Route } from "react-router-dom";
import { theme } from "./theme";
import { FunctionComponent } from "react";
import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";
import { Home } from "./pages/home/Home";
import { Contact } from "./pages/contact/Contact";
import { About } from "./pages/about/About";
import { News } from "./pages/news/News";
import { APP_HEADER_HEIGHT, APP_MAX_WIDTH } from "./constants";

export const App: FunctionComponent = () => {
  return (
    <HashRouter>
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
              </Routes>
              <Footer />
            </AppShell.Main>
          </Container>
        </AppShell>
      </MantineProvider>
    </HashRouter>
  );
};
