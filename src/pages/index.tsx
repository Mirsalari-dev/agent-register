import { Typography, useTheme } from "@mui/material";
import Head from "next/head";


export default function Home() {
  const theme = useTheme()
  return (
    <>
      <Head>
        <title>Agent register</title>
        <meta name="description" content="Agent register for iranian poshesh company" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Typography variant="h2"  color="grey.900">سلام عرض شد</Typography>
    </>
  );
}
