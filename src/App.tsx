import "@mantine/core/styles.css";
import { AppShell, Center, Container, MantineProvider } from "@mantine/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { theme } from "./theme";
import { FunctionComponent } from "react";
import { Header } from "./header/Header";
import { Home } from "./home/Home";
import { Contact } from "./contact/Contact";
import { About } from "./about/About";
import { News } from "./news/News";

const APP_MAX_WIDTH = 1200;

export const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <MantineProvider theme={theme}>
        <AppShell header={{ height: 80 }} padding="md">
          <AppShell.Header p="lg">
            <Container>
              <Header />
            </Container>
          </AppShell.Header>

          <Center>
            <AppShell.Main>
              <Container miw={APP_MAX_WIDTH}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="about" element={<About />} />
                  <Route path="news" element={<News />} />
                </Routes>
              </Container>
            </AppShell.Main>
          </Center>
        </AppShell>
      </MantineProvider>
    </BrowserRouter>
  );
};
