import dynamic from "next/dynamic";
import Head from "next/head";
import { useState } from "react";

/// dynamic import for avoid extra render
const StepOne = dynamic(
  () => import("../components/pages/registerPage/stepOneSection/stepOne")
);
const StepTwo = dynamic(
  () => import("../components/pages/registerPage/stepTwoSection/stepTwo")
);

export default function Home() {
  const [stepRegister, setStepRegister] = useState(1);
  return (
    <>
      <Head>
        <title>Agent register</title>
        <meta
          name="description"
          content="Agent register for iranian poshesh company"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {stepRegister === 1 && <StepOne setStepRegister={setStepRegister} />}
      {stepRegister === 2 && <StepTwo />}
    </>
  );
}
