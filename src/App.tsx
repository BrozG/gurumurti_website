import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet,HelmetProvider} from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Helmet>
            <title>Gurumurti Decorators – Wedding & Event Decoration in Sikkim</title>
            <meta name="description" content="Gurumurti Decorators provides top-tier event and wedding decoration services across Sikkim with elegance and tradition." />
            <meta name="keywords" content="wedding decorators Sikkim, event decoration Gangtok, Gurumurti decorators" />
            <meta name="robots" content="index, follow" />
            <meta property="og:title" content="Gurumurti Decorators – Wedding & Event Experts in Sikkim" />
            <meta property="og:description" content="Elegant, traditional and creative wedding & event decoration services." />
            <meta property="og:url" content="https://gurumurtidecorators.com" />
            <meta property="og:type" content="website" />
          </Helmet>
          <Routes>
           <Route path="/" element={<Index />} />
           {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
           <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
);

export default App;
